import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grow My Therapy",
  description: "Your journey starts here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body>{children}</body>
    </html>
  );
}
