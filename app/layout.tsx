import type { Metadata } from "next";
import { Inter, Syne, Poppins } from "next/font/google";
import { syne, poppins } from "./fonts";
import "./globals.css";
import clsx from "clsx";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" className={`${syne.variable} ${poppins.variable}`}>
      <body className={clsx("min-h-screen bg-background antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="parent-container">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
