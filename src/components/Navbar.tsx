"use client";

import { Link } from "@tanstack/react-router";
import resource from "@assets/resource.json";
import { useState } from "react";

interface NavbarProps {
    className?: string;
}

const visibleNav = (e: HTMLElement | null) => {
    if (e) {
      e.classList.remove("hidden")
    }
};

const disableNav = (e: HTMLElement | null) => {
    if (e) e.classList.add("hidden")
};

export default function Navbar({ className = "" }: NavbarProps) {
    const [toggleNavButton, setToggleNavButton] = useState(false);
    const onClickNavButton = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.buttons === 0) {
            const navBar: HTMLElement | null =
                document.getElementById("navigation");
            if (!toggleNavButton) {
                visibleNav(navBar);
            } else {
                disableNav(navBar);
            }
            setToggleNavButton(!toggleNavButton);
        }
    };

    const onTouchNavButton = () => {
        const navBar: HTMLElement | null =
            document.getElementById("navigation");
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
                className="p-3 md:hidden cursor-default delay-150 duration-100 ease-in hover:text-amber-600"
                onClick={onClickNavButton}
                onTouchStart={onTouchNavButton}
            >
                <span className="material-symbols-outlined">menu</span>
            </div>
            <div id="navigation" className="hidden md:block ">
                <div className="flex flex-col md:flex-row w-3/5 text-center tracking-widest font-bold py-3 items-center-safe font-roboto mx-auto box-border cursor-default">
                    <Link
                        to="/"
                        className="flex-2 p-3 border-solid border-b-5 border-white transition delay-150 duration-300 ease-in-out hover:border-amber-400"
                    >
                        {resource["menu-item"][0]}
                    </Link>
                    <Link
                        to="/academic"
                        className="flex-2 p-3 border-solid border-b-5 border-white transition delay-150 duration-300 ease-in-out hover:border-amber-400"
                    >
                        {resource["menu-item"][1]}
                    </Link>
                    <Link
                        to="/experience"
                        className="flex-2 p-3 border-solid border-b-5 border-white transition delay-150 duration-300 ease-in-out hover:border-amber-400"
                    >
                        {resource["menu-item"][2]}
                    </Link>
                    <Link
                        to="/skills"
                        className="flex-2 p-3 border-solid border-b-5 border-white transition delay-150 duration-300 ease-in-out hover:border-amber-400"
                    >
                        {resource["menu-item"][3]}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
