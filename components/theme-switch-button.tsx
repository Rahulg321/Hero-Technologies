"use client";

import React from "react";
import { FaRegSun } from "react-icons/fa6";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

const ThemeSwitchButton = () => {
  const { theme, setTheme } = useTheme();

  const themeSwitchHandler = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div className="">
      <div onClick={themeSwitchHandler} className="text-2xl cursor-pointer">
        {theme === "dark" ? <FaRegSun /> : <FaMoon />}
      </div>
    </div>
  );
};

export default ThemeSwitchButton;
