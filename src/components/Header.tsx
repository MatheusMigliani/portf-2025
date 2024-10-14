"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";

const navItems = [
  { name: "Inicial", path: "/" },
  { name: "Sobre", path: "#about" },
  { name: "Blog", path: "#blog" },
  { name: "Projetos", path: "#projects" },
];
interface HeaderProps {
  darkMode: boolean;
  onDarkModeChange: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Header({ darkMode, onDarkModeChange }: HeaderProps) {
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 w-full bg-black/50 backdrop-blur-xl border-b border-white/10">
      <nav className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white mb-2 sm:mb-0">
          Matheus Migliani
        </Link>
        <Menu>
          {navItems.map((item, index) => (
            <MenuItem key={index}>
              <HoveredLink href={item.path} className="relative">
                {item.name}
              </HoveredLink>
            </MenuItem>
          ))}
          <button
            onClick={() => onDarkModeChange(!darkMode)}
            className="p-2 rounded-full bg-black/30 shadow-xl dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </Menu>
      </nav>
    </header>
  );
}
