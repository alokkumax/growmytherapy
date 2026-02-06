import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import AOSProvider from "@/components/providers/AOSProvider";

import { Montserrat, Inter } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Grow My Therapy",
  description: "Your journey starts here.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body  className={`${montserrat.variable} ${inter.variable}`}>
        <AOSProvider/>
        {children}
      </body>
    </html>
  );
}
