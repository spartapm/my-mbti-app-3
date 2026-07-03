import type { Metadata } from "next";
import { redirect } from "next/navigation";
import ResultView from "@/components/ResultView";
import { getPersona } from "@/lib/personas";

interface ResultPageProps {
  searchParams: Promise<{ type?: string }>;
}

export async function generateMetadata({
  searchParams,
}: ResultPageProps): Promise<Metadata> {
  const { type } = await searchParams;
  const persona = getPersona(type);

  if (!persona) {
    return { title: "내 IT 부캐 찾기 결과" };
  }

  const title = `나의 IT 부캐는 '${persona.title}' (${persona.type})`;

  return {
    title: `${title} | IT 부캐 찾기`,
    description: persona.tagline,
    openGraph: {
      title,
      description: persona.tagline,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: persona.tagline,
    },
  };
}

export default async function ResultPage({ searchParams }: ResultPageProps) {
  const { type } = await searchParams;
  const persona = getPersona(type);

  if (!persona) {
    redirect("/");
  }

  return <ResultView persona={persona} />;
}
