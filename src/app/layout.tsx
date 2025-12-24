import type { Metadata } from "next";
import { VT323, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Debjit Deb Barman | Creative Developer",
  description: "Portfolio of Debjit Deb Barman - Frontend Developer & AIML Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vt323.variable} ${jetbrainsMono.variable} antialiased font-mono`}
      >
        <Preloader />
        <Header />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

