import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import AOSProvider from "@/components/providers/AOSProvider";

const gopher = localFont({
  src: [
    {
      path: "./fonts/Gopher_Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Gopher_Medium.otf",
      style: "normal",
    },
    {
      path: "./fonts/Gopher_Regular.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Gopher_Bold.otf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
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
      <body className={gopher.className}>
        <AOSProvider/>
        {children}
      </body>
    </html>
  );
}
