"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Button,
  NavbarItem,
} from "@nextui-org/react";
import Link from 'next/link';

export default function MenuBar() {
  return (
    <>
      <Navbar className="shadow-md">
        <NavbarBrand>
          <p className="font-bold text-inherit">TODOS</p>
        </NavbarBrand>
        <NavbarContent justify="end">
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
