import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Toggle dark/light mode
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Add/remove dark mode class on body
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    // Nav items array for easier management
    const navItems = [
        { label: "Home", href: "#home" },
        { label: "Experience", href: "#experience" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <div
            className={`w-full py-4 fixed top-0 left-0 z-50 transition-colors duration-300 ${
                isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
            } shadow-md`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Brand */}
                    <div className="text-xl font-bold">
                        <span
                            className={`${
                                isDarkMode ? "text-blue-400" : "text-blue-600"
                            }`}
                        >
                            Muskan
                        </span>
                        sheikh
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`relative text-sm font-medium transition-colors hover:${
                                    isDarkMode
                                        ? "text-blue-400"
                                        : "text-blue-600"
                                } after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-current after:transition-all hover:after:w-full`}
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full ${
                                isDarkMode
                                    ? "bg-gray-800 text-yellow-400"
                                    : "bg-gray-100 text-gray-600"
                            } hover:opacity-80 transition-colors`}
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? (
                                <Sun size={18} />
                            ) : (
                                <Moon size={18} />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full mr-2 ${
                                isDarkMode
                                    ? "bg-gray-800 text-yellow-400"
                                    : "bg-gray-100 text-gray-600"
                            } hover:opacity-80 transition-colors`}
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? (
                                <Sun size={18} />
                            ) : (
                                <Moon size={18} />
                            )}
                        </button>

                        <button
                            onClick={toggleMenu}
                            className={`p-2 rounded-md ${
                                isDarkMode
                                    ? "text-white hover:bg-gray-800"
                                    : "text-gray-800 hover:bg-gray-100"
                            } transition-colors`}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div
                        className={`md:hidden py-4 px-2 mt-2 rounded-lg ${
                            isDarkMode ? "bg-gray-800" : "bg-gray-50"
                        } transition-all`}
                    >
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                                        isDarkMode
                                            ? "hover:bg-gray-700 hover:text-blue-400"
                                            : "hover:bg-gray-200 hover:text-blue-600"
                                    } transition-colors`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
