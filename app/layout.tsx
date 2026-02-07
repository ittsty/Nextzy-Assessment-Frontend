import type { Metadata } from "next";
import { Geist, Geist_Mono,Kanit } from "next/font/google";
import "./globals.css";

import AppInit from "./AppInit";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Gamification App",
  description: "Gamification App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${kanit.className} `}>
         <AppInit />
        {children}
      </body>
    </html>
  );
}