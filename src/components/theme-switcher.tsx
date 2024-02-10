"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";

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
            key="light"
            onClick={() => setTheme("light")}
            startContent={<SunIcon className="h-7 w-7" />}
          >
            Light
          </DropdownItem>
          <DropdownItem
            key="dark"
            onClick={() => setTheme("dark")}
            startContent={<MoonIcon className="h-7 w-7" />}
          >
            Dark
          </DropdownItem>
          <DropdownItem
            key="system"
            onClick={() => setTheme("system")}
            startContent={<ComputerDesktopIcon className="h-7 w-7" />}
          >
            System
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}

export default ThemeSwitcher;
