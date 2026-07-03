export type Dimension = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

export type MbtiType =
  | "ISTJ"
  | "ISFJ"
  | "INFJ"
  | "INTJ"
  | "ISTP"
  | "ISFP"
  | "INFP"
  | "INTP"
  | "ESTP"
  | "ESFP"
  | "ENFP"
  | "ENTP"
  | "ESTJ"
  | "ESFJ"
  | "ENFJ"
  | "ENTJ";

export interface QuizOption {
  label: "A" | "B";
  text: string;
  dimension: Dimension;
}

export interface QuizQuestion {
  id: number;
  axis: string;
  axisLabel: string;
  question: string;
  options: [QuizOption, QuizOption];
}

export interface AnsweredQuestion {
  questionId: number;
  question: string;
  selected: string;
  dimension: Dimension;
}

export type DimensionScore = Record<Dimension, number>;

export interface PartnerMatch {
  type: MbtiType;
  title: string;
  reason: string;
}

export interface Persona {
  type: MbtiType;
  title: string;
  tagline: string;
  emoji: string;
  gradient: string;
  traits: [string, string, string];
  bestPartner: PartnerMatch;
  worstPartner: PartnerMatch;
}
