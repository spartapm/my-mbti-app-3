"use client";

import { useState } from "react";
import Link from "next/link";
import { Persona } from "@/types";

interface ResultViewProps {
  persona: Persona;
}

export default function ResultView({ persona }: ResultViewProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopyLink() {
    const url = `${window.location.origin}/result?type=${persona.type}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("링크 복사에 실패했습니다.", error);
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="animate-pop-in flex flex-col items-center gap-4 text-center">
        <span className="text-xs font-bold tracking-wide text-slate-400">
          당신의 IT 부캐는...
        </span>

        <div
          className={`flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${persona.gradient} text-5xl shadow-xl`}
        >
          {persona.emoji}
        </div>

        <div className="flex flex-col gap-1.5">
          <h1 className="text-2xl font-extrabold leading-snug text-slate-900 sm:text-3xl">
            {persona.title}
          </h1>
          <p className="text-gradient-brand text-sm font-black tracking-[0.3em]">
            {persona.type}
          </p>
        </div>

        <p className="rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white sm:text-sm">
          &ldquo;{persona.tagline}&rdquo;
        </p>
      </div>

      <section
        className="animate-fade-in rounded-2xl bg-white p-5 shadow-xl"
        style={{ animationDelay: "100ms", animationFillMode: "backwards" }}
      >
        <h2 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900">
          <span aria-hidden>📋</span> 나의 일상 속 특징
        </h2>
        <ul className="flex flex-col gap-3">
          {persona.traits.map((trait, index) => (
            <li key={index} className="flex gap-2.5 text-sm text-slate-600">
              <span className="text-gradient-brand mt-0.5 shrink-0 font-bold">
                0{index + 1}
              </span>
              <span className="leading-relaxed">{trait}</span>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="animate-fade-in grid grid-cols-1 gap-3 sm:grid-cols-2"
        style={{ animationDelay: "180ms", animationFillMode: "backwards" }}
      >
        <div className="flex flex-col gap-2 rounded-2xl border-2 border-cyan-100 bg-cyan-50/60 p-4">
          <span className="flex items-center gap-1.5 text-xs font-bold text-cyan-700">
            💞 최고의 협업 파트너
          </span>
          <p className="text-sm font-bold text-slate-900">
            {persona.bestPartner.title}
            <span className="ml-1 text-xs font-semibold text-cyan-600">
              ({persona.bestPartner.type})
            </span>
          </p>
          <p className="text-xs leading-relaxed text-slate-500">
            {persona.bestPartner.reason}
          </p>
        </div>

        <div className="flex flex-col gap-2 rounded-2xl border-2 border-rose-100 bg-rose-50/60 p-4">
          <span className="flex items-center gap-1.5 text-xs font-bold text-rose-600">
            ⚡ 조심해야 할 파트너
          </span>
          <p className="text-sm font-bold text-slate-900">
            {persona.worstPartner.title}
            <span className="ml-1 text-xs font-semibold text-rose-500">
              ({persona.worstPartner.type})
            </span>
          </p>
          <p className="text-xs leading-relaxed text-slate-500">
            {persona.worstPartner.reason}
          </p>
        </div>
      </section>

      <div
        className="animate-fade-in mt-2 flex flex-col gap-3"
        style={{ animationDelay: "260ms", animationFillMode: "backwards" }}
      >
        <button
          type="button"
          onClick={handleCopyLink}
          className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-brand-gradient px-6 py-4 text-base font-bold text-white shadow-xl shadow-indigo-500/30 transition-all hover:scale-105 active:scale-95"
        >
          <span aria-hidden>{copied ? "✅" : "🔗"}</span>
          {copied ? "링크가 복사되었어요!" : "결과 링크 복사하기"}
        </button>
        <Link
          href="/quiz"
          className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-6 py-4 text-base font-bold text-slate-600 transition-all hover:scale-105 hover:border-indigo-300 hover:text-indigo-600 active:scale-95"
        >
          🔄 테스트 다시 하기
        </Link>
      </div>
    </div>
  );
}
