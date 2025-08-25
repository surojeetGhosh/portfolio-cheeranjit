"use client";

import { Link } from "@tanstack/react-router";
import resource from "@assets/resource.json";
import { useState } from "react";

interface NavbarProps {
  className?: string;
}

const visibleNav = (e: HTMLElement | null) => {
  if (e) {
    e.classList.remove("hidden");
  }
};

const disableNav = (e: HTMLElement | null) => {
  if (e) e.classList.add("hidden");
};

export default function Navbar({ className = "" }: NavbarProps) {
  const [toggleNavButton, setToggleNavButton] = useState(false);
  const onClickNavButton = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.buttons === 0) {
      const navBar: HTMLElement | null = document.getElementById("navigation");
      if (!toggleNavButton) {
        visibleNav(navBar);
      } else {
        disableNav(navBar);
      }
      setToggleNavButton(!toggleNavButton);
    }
  };

  const onTouchNavButton = () => {
    const navBar: HTMLElement | null = document.getElementById("navigation");
    if (!toggleNavButton) {
      visibleNav(navBar);
    } else {
      disableNav(navBar);
    }
    setToggleNavButton(!toggleNavButton);
  };

  return (
    <nav className={className}>
      <div
        className="cursor-default p-3 delay-150 duration-100 ease-in hover:text-amber-600 md:hidden"
        onClick={onClickNavButton}
        onTouchStart={onTouchNavButton}
      >
        <span className="material-symbols-outlined">menu</span>
      </div>
      <div id="navigation" className="hidden md:block">
        <div className="font-roboto mx-auto box-border flex w-3/5 cursor-default flex-col items-center-safe py-3 text-center font-bold tracking-widest md:flex-row">
          <Link
            to="/"
            className="flex-2 border-b-5 border-solid border-white p-3 transition delay-150 duration-300 ease-in-out hover:border-amber-400"
          >
            {resource["menu-item"][0]}
          </Link>
          <Link
            to="/academic"
            className="flex-2 border-b-5 border-solid border-white p-3 transition delay-150 duration-300 ease-in-out hover:border-amber-400"
          >
            {resource["menu-item"][1]}
          </Link>
          <Link
            to="/experience"
            className="flex-2 border-b-5 border-solid border-white p-3 transition delay-150 duration-300 ease-in-out hover:border-amber-400"
          >
            {resource["menu-item"][2]}
          </Link>
          <Link
            to="/skills"
            className="flex-2 border-b-5 border-solid border-white p-3 transition delay-150 duration-300 ease-in-out hover:border-amber-400"
          >
            {resource["menu-item"][3]}
          </Link>
        </div>
      </div>
    </nav>
  );
}
