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
import { SunIcon, MoonIcon } from "@nextui-org/shared-icons";
import ColorIcon from "~/assets/codicon--color-mode.svg";

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
            startContent={<ColorIcon />}
            onClick={() => setTheme("system")}
          >
            System
          </DropdownItem>
          <DropdownItem
            key="light"
            startContent={<SunIcon />}
            onClick={() => setTheme("light")}
          >
            Light
          </DropdownItem>
          <DropdownItem
            key="dark"
            startContent={<MoonIcon />}
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
