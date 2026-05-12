import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Focusly — Focus you don't have to think about",
  description:
    "Focusly turns the science of Pomodoro into a focus app that actually keeps you off Twitter. Pick a task. Hit start. Lose yourself in 25 minutes of deep work.",
  openGraph: {
    title: "Focusly — Focus you don't have to think about",
    description:
      "A Pomodoro-based focus app for people who get distracted easily. Free forever.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
