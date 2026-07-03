"use client";

import { useEffect, useRef, useState } from "react";
import { RESULTS_TABLE, supabase } from "@/lib/supabase";

const BASE_COUNT = 128;

function useCountUp(target: number, durationMs = 1200) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();
    const from = 0;

    function tick(now: number) {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + (target - from) * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, durationMs]);

  return value;
}

export default function ParticipantCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchCount() {
      const { count: rowCount, error } = await supabase
        .from(RESULTS_TABLE)
        .select("*", { count: "exact", head: true });

      if (!isMounted) return;

      if (error || rowCount === null) {
        setCount(BASE_COUNT);
        return;
      }

      setCount(BASE_COUNT + rowCount);
    }

    fetchCount();
    return () => {
      isMounted = false;
    };
  }, []);

  const animatedCount = useCountUp(count ?? 0);
  const isLoading = count === null;

  return (
    <div
      className="animate-fade-in rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 via-white to-cyan-50 px-5 py-4 shadow-sm"
      style={{ animationDelay: "120ms", animationFillMode: "backwards" }}
    >
      <p className="flex items-center justify-center gap-2 text-center text-sm font-semibold text-indigo-700 sm:text-base">
        <span aria-hidden>👥</span>
        <span>
          이미{" "}
          <span className="text-gradient-brand font-extrabold tabular-nums">
            {isLoading ? "…" : animatedCount.toLocaleString()}
          </span>
          명의 동료들이 자신의 부캐를 확인했어요!
        </span>
      </p>
    </div>
  );
}
