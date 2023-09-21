"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { Switch } from "@nextui-org/react";

export function ThemeSwitcher() {
  const [isSelected, setIsSelected] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Switch
        size="lg"
        color="primary"
        isSelected={isSelected}
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        onValueChange={() => {
          if (theme === "light") {
            setIsSelected(true);
            setTheme("dark");
          } else {
            setIsSelected(false);
            setTheme("light");
          }
        }}
      />
    </>
  );
}
