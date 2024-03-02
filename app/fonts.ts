import { Syne, Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
});

export const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  fallback: ["system-ui", "arial"],
});
