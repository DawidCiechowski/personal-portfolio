import type { Metadata } from "next";
import { Oswald, Pixelify_Sans } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import TransitionEffect from "@/components/TransitionEffect";

const oswaldSans = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
});

const pixelifySans = Pixelify_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-pixelify-sans",
});
export const metadata: Metadata = {
  title: "Dawid Ciechowski - Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"></link>
      </head>
      <body className={`${oswaldSans.variable} ${pixelifySans.variable}`}>
        <Header />
        <TransitionEffect />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
