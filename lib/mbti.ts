import { Dimension, DimensionScore, MbtiType } from "@/types";

export const EMPTY_SCORE: DimensionScore = {
  E: 0,
  I: 0,
  S: 0,
  N: 0,
  T: 0,
  F: 0,
  J: 0,
  P: 0,
};

function pick(
  scores: DimensionScore,
  a: Dimension,
  b: Dimension,
  tieBreaker: Dimension
): Dimension {
  if (scores[a] > scores[b]) return a;
  if (scores[b] > scores[a]) return b;
  return tieBreaker;
}

/** 동점일 경우 I, N, T, P를 우선순위로 둔다. */
export function calculateMbti(scores: DimensionScore): MbtiType {
  const type =
    pick(scores, "E", "I", "I") +
    pick(scores, "S", "N", "N") +
    pick(scores, "T", "F", "T") +
    pick(scores, "J", "P", "P");

  return type as MbtiType;
}
