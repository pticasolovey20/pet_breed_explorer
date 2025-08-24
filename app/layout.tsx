import type { Metadata } from "next";

import { ReactNode } from "react";

import "@/app/globals.css";

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
      <body suppressHydrationWarning className="antialiased">
        <main className="min-h-screen max-w-screen-xl w-full flex flex-col mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
