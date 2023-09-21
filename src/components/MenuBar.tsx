"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Button,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ComputerDesktopIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";

export default function MenuBar() {
  const { theme, setTheme } = useTheme();
  const [selectedKeys, setSelectedKeys] = useState(new Set([theme as string]));
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <>
      <Navbar className="shadow-md dark:shadow-2xl">
        <NavbarBrand>
          <p className="font-bold text-inherit">TODOS</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered" className="capitalize">
                  {selectedValue}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Change theme"
                variant="flat"
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys as any}
              >
                <DropdownItem
                  key="system"
                  startContent={<ComputerDesktopIcon className="h-8 w-8" />}
                  onClick={() => setTheme("system")}
                >
                  System
                </DropdownItem>
                <DropdownItem
                  key="light"
                  startContent={<SunIcon className="h-8 w-8" />}
                  onClick={() => setTheme("light")}
                >
                  Light
                </DropdownItem>
                <DropdownItem
                  key="dark"
                  startContent={<MoonIcon className="h-8 w-8" />}
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
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
