import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "카드현금화 - 빠르고 안전한 현금화 서비스",
  description: "신용카드, 체크카드 현금화를 빠르고 안전하게 진행해드립니다. 365일 24시간 상담 가능",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
