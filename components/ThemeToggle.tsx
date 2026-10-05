"use client";

import {
  Moon,
  Sun,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] =
    useState<Theme>("light");

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    const current =
      document.documentElement.dataset
        .theme === "dark"
        ? "dark"
        : "light";

    setTheme(current);
    setMounted(true);
  }, []);

  function toggleTheme() {
    const nextTheme =
      theme === "light"
        ? "dark"
        : "light";

    setTheme(nextTheme);

    document.documentElement.dataset.theme =
      nextTheme;

    localStorage.setItem(
      "theme",
      nextTheme
    );
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={
        theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      aria-pressed={
        theme === "dark"
      }
    >
      <span className="theme-toggle-icon">
        {mounted &&
        theme === "dark" ? (
          <Sun size={16} />
        ) : (
          <Moon size={16} />
        )}
      </span>
    </button>
  );
}