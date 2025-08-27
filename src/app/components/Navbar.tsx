"use client";

import React, { ReactElement, useState, useEffect } from "react";
import Sun from "@/app/components/Sun";
import Moon from "@/app/components/Moon";
import Hamburger from "@/app/components/Hamburger";

type NavLink = { id: string; label: string };
type Theme = "light" | "dark";

export function Navbar(): ReactElement {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState<Theme>("light");

    const navLinks: NavLink[] = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "tech", label: "Tech" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" },
    ];

    // Initialize theme on a page load
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme: Theme = savedTheme || (prefersDark ? "dark" : "light");
        setTheme(initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
    }, []);

    const toggleTheme = () => {
        setTheme(prev => {
            const newTheme: Theme = prev === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            document.documentElement.classList.toggle("dark", newTheme === "dark");
            return newTheme;
        });
    };

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    // noinspection HtmlUnknownAnchorTarget
    return (
        <header>
            <nav>
                {/* Logo */}
                <div>
                    <a href="#home" onClick={(e) => scrollToSection(e, "home")}>MyLogo</a>
                </div>

                {/* Desktop Navigation */}
                <ul>
                    {navLinks.map(link => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} onClick={(e) => scrollToSection(e, link.id)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Controls */}
                <div>
                    <button type="button" onClick={toggleTheme}>
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button type="button" onClick={() => setMenuOpen(prev => !prev)}>
                        <Hamburger isOpen={menuOpen} />
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <ul>
                    {navLinks.map(link => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} onClick={(e) => scrollToSection(e, link.id)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}