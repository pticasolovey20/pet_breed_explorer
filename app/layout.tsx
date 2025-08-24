import { Montserrat } from "next/font/google";
import type { Metadata } from "next";

import { ReactNode } from "react";

import "@/app/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home Assessment",
  description: "Pet Breed Explorer",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={montserrat.className}>
        <main className="min-h-screen max-w-screen-xl w-full flex flex-col mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
