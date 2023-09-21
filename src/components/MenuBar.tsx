"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Button,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function MenuBar() {
  return (
    <>
      <Navbar className="shadow-md dark:shadow-2xl">
        <NavbarBrand>
          <p className="font-bold text-inherit">TODOS</p>
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
    </>
  );
}
