import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "MD FAHIM | Portfolio",
  description:
    "Portfolio of MD FAHIM, a Bachelor of Information Technology student in Auckland, New Zealand, focused on full stack development and AI integration.",
  keywords: [
    "MD FAHIM",
    "Full Stack Developer",
    "Information Technology Student",
    "AI Integration",
    "Auckland",
    "New Zealand",
    "Portfolio",
  ],
  openGraph: {
    title: "MD FAHIM | Portfolio",
    description:
      "Portfolio of MD FAHIM, a Bachelor of Information Technology student in Auckland, New Zealand, focused on full stack development and AI integration.",
    type: "website",
    siteName: "MD FAHIM Portfolio",
  },
};

export const viewport = {
  themeColor: "#176b66",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-NZ">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
