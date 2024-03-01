import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hero Technologies: Empowering Growth Through Independent Sponsorship",
  description:
    "Discover how Hero Technologies, as an independent sponsor company, drives growth and fosters success for businesses through strategic partnerships and innovative investment solutions. Partner with us to unlock your company's full potential.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
