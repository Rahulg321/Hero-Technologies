"use client";

import React from "react";
import { FaRegSun } from "react-icons/fa6";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

const ThemeSwitchButton = () => {
  const { setTheme } = useTheme();
  return (
    <div className="flex gap-4">
      <div onClick={() => setTheme("light")} className="cursor-pointer text-xl">
        <FaRegSun />
      </div>
      <div onClick={() => setTheme("dark")} className="cursor-pointer text-xl">
        <FaMoon />
      </div>
      <div
        onClick={() => setTheme("system")}
        className="cursor-pointer text-xl"
      >
        <RiComputerLine />
      </div>
    </div>
  );
};

export default ThemeSwitchButton;
