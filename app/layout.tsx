import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist in Santa Monica, CA",
  description: "Expert therapy and counseling services in Santa Monica, CA. Dr. Maya Reynolds provides evidence-based treatment for anxiety, depression, trauma, and relationship issues."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${merriweather.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[var(--color-page-bg)] text-[var(--color-page-text)] antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

