import Link from "next/link";
import ParticipantCounter from "@/components/ParticipantCounter";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center overflow-hidden">
        <div className="mt-[-4rem] h-72 w-72 animate-float rounded-full bg-indigo-300/30 blur-3xl" />
        <div
          className="mt-10 h-56 w-56 animate-float rounded-full bg-cyan-300/30 blur-3xl"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-8 text-center">
        <span className="animate-fade-in inline-flex items-center gap-1.5 rounded-full bg-indigo-600/10 px-4 py-1.5 text-xs font-bold tracking-wide text-indigo-600 sm:text-sm">
          IT 부캐 찾기 TEST · 8 QUESTIONS
        </span>

        <div
          className="animate-fade-in flex flex-col gap-4"
          style={{ animationDelay: "80ms", animationFillMode: "backwards" }}
        >
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            퇴근길 내 모습으로 알아보는
            <br />
            <span className="text-gradient-brand">&apos;IT 부캐&apos;</span> 테스트
          </h1>
          <p className="text-balance text-sm leading-relaxed text-slate-500 sm:text-base">
            협업 스타일부터 위기 대처법까지, 내 MBTI 유형에 맞는
            <br className="hidden sm:block" />
            IT 직무 페르소나는?
          </p>
        </div>

        <div
          className="w-full animate-fade-in"
          style={{ animationDelay: "200ms", animationFillMode: "backwards" }}
        >
          <ParticipantCounter />
        </div>

        <div
          className="animate-fade-in flex w-24 items-center justify-center rounded-2xl bg-white p-4 text-5xl shadow-xl"
          style={{ animationDelay: "280ms", animationFillMode: "backwards" }}
        >
          🧑‍💻
        </div>
      </div>

      <div
        className="animate-fade-in pb-4"
        style={{ animationDelay: "360ms", animationFillMode: "backwards" }}
      >
        <Link
          href="/quiz"
          className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-brand-gradient px-6 py-4 text-base font-bold text-white shadow-xl shadow-indigo-500/30 transition-all hover:scale-105 active:scale-95"
        >
          <span className="shimmer-bg absolute inset-0 animate-shimmer" />
          <span className="relative">내 IT 부캐 확인하러 가기</span>
          <span className="relative transition-transform group-hover:translate-x-1">
            ➔
          </span>
        </Link>
        <p className="mt-4 text-center text-xs text-slate-400">
          16가지 IT 직장인 페르소나 중 나의 유형을 찾아보세요
        </p>
      </div>
    </div>
  );
}
