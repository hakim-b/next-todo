import { ReactNode } from "react";
import "./globals.css";
import Providers from "./providers";
import { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import ThemeSwitcher from "@/components/theme-switcher";

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
          <Navbar className="shadow-md dark:border-2 dark:border-solid dark:border-gray-800">
            <NavbarBrand>
              <Link href="/" color="secondary">
                NEXT TODOS
              </Link>
            </NavbarBrand>
            <NavbarContent justify="end">
              <NavbarItem>
                <ThemeSwitcher />
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} color="primary" href="/new">
                  Add
                </Button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
          {children}
        </body>
      </Providers>
    </html>
  );
}
