"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import {
  ComputerDesktopIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [selectedKeys, setSelectedKeys] = useState(new Set([theme as string]));
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
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
    </>
  );
}

export default ThemeSwitcher;
