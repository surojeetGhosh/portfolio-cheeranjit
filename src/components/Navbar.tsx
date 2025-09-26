"use client";

import { Link } from "@tanstack/react-router";
import navigationData from "@/data/navigationData.json";
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

  return (
    <nav className={`${className} bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200/50 sticky top-0 z-50`}>
      <div
        className="cursor-pointer p-4 text-engineering-gray hover:text-accent-500 transition-colors duration-200 md:hidden"
        onClick={onClickNavButton}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div id="navigation" className="hidden md:block">
        <div className="font-inter mx-auto max-w-6xl flex items-center justify-center py-4 px-6">
          <div className="flex space-x-8">
            <Link
              to="/"
              className="nav-link text-engineering-gray font-medium text-sm uppercase tracking-wider hover:text-primary-600 transition-colors duration-200"
            >
              {navigationData["menu-item"][0]}
            </Link>
            <Link
              to="/academic"
              className="nav-link text-engineering-gray font-medium text-sm uppercase tracking-wider hover:text-primary-600 transition-colors duration-200"
            >
              {navigationData["menu-item"][1]}
            </Link>
            <Link
              to="/experience"
              className="nav-link text-engineering-gray font-medium text-sm uppercase tracking-wider hover:text-primary-600 transition-colors duration-200"
            >
              {navigationData["menu-item"][2]}
            </Link>
            <Link
              to="/skills"
              className="nav-link text-engineering-gray font-medium text-sm uppercase tracking-wider hover:text-primary-600 transition-colors duration-200"
            >
              {navigationData["menu-item"][3]}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
