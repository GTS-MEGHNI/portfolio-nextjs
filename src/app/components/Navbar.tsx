"use client";

import React, { ReactElement, useState } from "react";

import Hamburger from "@/app/components/Hamburger";

type NavLink = { id: string; label: string };

export function Navbar(): ReactElement {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks: NavLink[] = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "tech", label: "Tech" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    // noinspection HtmlUnknownAnchorTarget
    return (
        <header className="w-full bg-white shadow-none md:shadow-md fixed top-0 left-0 z-50">
            <nav className="px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo (Left) */}
                <div className="flex-shrink-0">
                    <a
                        href="#home"
                        onClick={(e) => scrollToSection(e, "home")}
                        className="text-xl font-bold text-gray-800 hover:text-gray-600"
                    >
                        MyLogo
                    </a>
                </div>

                {/* Navigation (Center) */}
                <ul className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
                    {navLinks.map(link => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                onClick={(e) => scrollToSection(e, link.id)}
                                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Controls (Right) */}
                <div className="flex items-center space-x-4">
                    <button
                        type="button"
                        onClick={() => setMenuOpen(prev => !prev)}
                        className="md:hidden p-2 rounded hover:bg-gray-100 transition">
                        <Hamburger isOpen={menuOpen} />
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu (Slide + Fade) */}
            <div
                className={`md:hidden transform transition-all duration-300 ease-out ${
                    menuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none"
                }`}
            >
                <ul className="bg-white shadow-md px-4 py-2 space-y-2">
                    {navLinks.map(link => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                onClick={(e) => scrollToSection(e, link.id)}
                                className="block text-gray-700 hover:text-gray-900 font-medium py-1 transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );




}