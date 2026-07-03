import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "내 성격에 딱 맞는 IT 부캐 찾기 | IT 부캐 MBTI 테스트",
  description:
    "출근길 내 모습으로 알아보는 'IT 부캐' 테스트. 8개의 질문으로 나에게 딱 맞는 IT 직장인 페르소나를 찾아보세요.",
  openGraph: {
    title: "내 성격에 딱 맞는 IT 부캐 찾기",
    description:
      "협업 스타일부터 위기 대처법까지, 내 MBTI 유형에 맞는 IT 직무 페르소나는? 지금 바로 확인해보세요!",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "내 성격에 딱 맞는 IT 부캐 찾기",
    description:
      "협업 스타일부터 위기 대처법까지, 내 MBTI 유형에 맞는 IT 직무 페르소나는?",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#4F46E5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-[#f5f6ff] antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-brand-radial" />
        <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-8 sm:py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
