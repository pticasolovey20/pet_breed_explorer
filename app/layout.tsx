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
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
