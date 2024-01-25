import { ReactNode } from "react";
import "./globals.css";
import Providers from "./providers";
import MenuBar from "@/components/menu-bar";
import { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Next.js TODOS",
  description: "With SQLite and NextUI",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <Providers>
        <body>
          <MenuBar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
