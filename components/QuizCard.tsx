import { QuizQuestion } from "@/types";

interface QuizCardProps {
  question: QuizQuestion;
  onSelect: (optionLabel: "A" | "B") => void;
  isFadingOut: boolean;
}

export default function QuizCard({
  question,
  onSelect,
  isFadingOut,
}: QuizCardProps) {
  return (
    <div
      className={`flex w-full flex-col gap-8 rounded-2xl bg-white p-6 shadow-xl ${
        isFadingOut ? "animate-fade-out" : "animate-fade-in"
      }`}
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-500">
          {question.axisLabel}
        </span>
        <h2 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">
          {question.question}
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {question.options.map((option) => (
          <button
            key={option.label}
            type="button"
            onClick={() => onSelect(option.label)}
            className="group flex items-center gap-3 rounded-2xl border-2 border-slate-100 bg-slate-50 p-4 text-left text-sm font-medium text-slate-700 transition-all hover:scale-105 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 hover:shadow-lg active:scale-95 sm:text-base"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-slate-400 shadow-sm transition-colors group-hover:bg-brand-gradient group-hover:text-white">
              {option.label}
            </span>
            <span className="leading-relaxed">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
