import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siyu Zhou — Portfolio",
  description: "Senior Economics student at Northeastern University focused on data analysis, economic research, and machine learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} antialiased dark`} style={{ background: "#0a0a0a" }}>
      <body className="min-h-screen bg-[#0a0a0a] text-gray-200">{children}</body>
    </html>
  );
}
