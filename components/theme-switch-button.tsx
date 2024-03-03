"use client";

import React from "react";
import { FaRegSun } from "react-icons/fa6";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import clsx from "clsx";

const ThemeSwitchButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex gap-4 mt-2">
      <div
        onClick={() => setTheme("light")}
        className={clsx("cursor-pointer text-xl p-2", {
          "bg-gray-400 rounded-full": theme === "light",
        })}
      >
        <FaRegSun />
      </div>
      <div
        onClick={() => setTheme("dark")}
        className={clsx("cursor-pointer text-xl p-2", {
          "bg-gray-800 rounded-full": theme === "dark",
        })}
      >
        <FaMoon />
      </div>
      <div
        onClick={() => setTheme("system")}
        className={clsx("cursor-pointer text-xl p-2", {
          "bg-gray-800 rounded-full": theme === "system",
        })}
      >
        <RiComputerLine />
      </div>
    </div>
  );
};

export default ThemeSwitchButton;
