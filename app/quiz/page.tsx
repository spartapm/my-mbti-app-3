"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "@/components/ProgressBar";
import QuizCard from "@/components/QuizCard";
import { questions } from "@/lib/questions";
import { calculateMbti, EMPTY_SCORE } from "@/lib/mbti";
import { RESULTS_TABLE, supabase } from "@/lib/supabase";
import { AnsweredQuestion, DimensionScore } from "@/types";

const FADE_MS = 280;
const MIN_ANALYSIS_MS = 1400;

export default function QuizPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<DimensionScore>(EMPTY_SCORE);
  const [answers, setAnswers] = useState<AnsweredQuestion[]>([]);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];

  const finishQuiz = useCallback(
    async (finalScores: DimensionScore, finalAnswers: AnsweredQuestion[]) => {
      setIsAnalyzing(true);
      const mbtiType = calculateMbti(finalScores);
      const startedAt = Date.now();

      try {
        await supabase.from(RESULTS_TABLE).insert({
          mbti_type: mbtiType,
          answers: finalAnswers,
        });
      } catch (error) {
        console.error("결과 저장에 실패했습니다.", error);
      }

      const elapsed = Date.now() - startedAt;
      if (elapsed < MIN_ANALYSIS_MS) {
        await new Promise((resolve) =>
          setTimeout(resolve, MIN_ANALYSIS_MS - elapsed)
        );
      }

      router.push(`/result?type=${mbtiType}`);
    },
    [router]
  );

  const handleSelect = useCallback(
    (optionLabel: "A" | "B") => {
      if (isFadingOut || isAnalyzing) return;

      const option = currentQuestion.options.find(
        (o) => o.label === optionLabel
      );
      if (!option) return;

      setIsFadingOut(true);

      setTimeout(() => {
        const nextScores: DimensionScore = {
          ...scores,
          [option.dimension]: scores[option.dimension] + 1,
        };
        const nextAnswers: AnsweredQuestion[] = [
          ...answers,
          {
            questionId: currentQuestion.id,
            question: currentQuestion.question,
            selected: option.text,
            dimension: option.dimension,
          },
        ];

        if (currentIndex + 1 < totalQuestions) {
          setScores(nextScores);
          setAnswers(nextAnswers);
          setCurrentIndex((prev) => prev + 1);
          setIsFadingOut(false);
        } else {
          setScores(nextScores);
          setAnswers(nextAnswers);
          finishQuiz(nextScores, nextAnswers);
        }
      }, FADE_MS);
    },
    [
      answers,
      currentIndex,
      currentQuestion,
      finishQuiz,
      isAnalyzing,
      isFadingOut,
      scores,
      totalQuestions,
    ]
  );

  if (isAnalyzing) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <span className="absolute h-full w-full animate-spin rounded-full border-4 border-indigo-100 border-t-indigo-600" />
          <span className="text-3xl">🧑‍💻</span>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold text-slate-900">
            나의 IT 부캐를 분석하는 중...
          </p>
          <p className="text-sm text-slate-400">
            8가지 답변을 조합해 딱 맞는 페르소나를 찾고 있어요
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-8">
      <ProgressBar current={currentIndex + 1} total={totalQuestions} />
      <div className="flex flex-1 items-center justify-center">
        <QuizCard
          key={currentQuestion.id}
          question={currentQuestion}
          onSelect={handleSelect}
          isFadingOut={isFadingOut}
        />
      </div>
    </div>
  );
}
