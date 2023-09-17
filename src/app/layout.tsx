import { ReactNode } from "react";
import "./globals.css";
import { Roboto_Flex } from "next/font/google";
import Providers from "./providers";
import MenuBar from "@/components/MenuBar";
import { Metadata } from "next";

const robotoFlex = Roboto_Flex({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Next.js TODOS",
  description: "With SQLite and NextUI",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Providers>
        <body className={robotoFlex.className}>
          <MenuBar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
