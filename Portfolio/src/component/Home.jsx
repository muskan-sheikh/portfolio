import React, { useEffect, useRef, useState } from "react";
import pdf from "../pdf/muskan_resume.pdf";
import hero from "../assets/hero/hero.avif";
import Typed from "typed.js";
import { FileDown, Github, Linkedin, Twitter } from "lucide-react";

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const typedRef = useRef(null);

    // Check for dark mode on component mount
    useEffect(() => {
        const isDark = document.body.classList.contains("dark");
        setIsDarkMode(isDark);

        // Listen for changes in dark mode
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") {
                    setIsDarkMode(document.body.classList.contains("dark"));
                }
            });
        });

        observer.observe(document.body, { attributes: true });

        return () => observer.disconnect();
    }, []);

    // Typed.js initialization
    useEffect(() => {
        const options = {
            strings: [
                "Welcome to my profile",
                "My Name is Muskan Khatoon",
                "I'm a Full Stack Developer",
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };

        const typed = new Typed(typedRef.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section
            id="home"
            className={`pt-32 pb-16 min-h-screen ${
                isDarkMode
                    ? "bg-gray-900 text-white"
                    : "bg-gray-50 text-gray-800"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <div className="space-y-3">
                            <h2
                                className={`text-xl font-medium ${
                                    isDarkMode
                                        ? "text-blue-400"
                                        : "text-blue-600"
                                }`}
                            >
                                Hello, I'm
                            </h2>
                            <h1 className="text-4xl md:text-5xl font-bold">
                                Muskan sheikh
                            </h1>
                            <div className="h-16">
                                <span
                                    ref={typedRef}
                                    className={`text-xl md:text-2xl font-medium ${
                                        isDarkMode
                                            ? "text-gray-300"
                                            : "text-gray-600"
                                    }`}
                                ></span>
                            </div>
                        </div>

                        <p
                            className={`text-lg ${
                                isDarkMode ? "text-gray-300" : "text-gray-600"
                            } max-w-lg`}
                        >
                            I build responsive, user-friendly web applications
                            with modern technologies and a focus on clean,
                            maintainable code.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href={pdf}
                                download="Muskan_Khatoon_Resume.pdf"
                                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                                    isDarkMode
                                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                                        : "bg-blue-600 hover:bg-blue-700 text-white"
                                }`}
                            >
                                <FileDown size={18} />
                                Download Resume
                            </a>

                            <a
                                href="#contact"
                                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium border-2 transition-all ${
                                    isDarkMode
                                        ? "border-blue-500 text-blue-400 hover:bg-blue-500/10"
                                        : "border-blue-600 text-blue-600 hover:bg-blue-100"
                                }`}
                            >
                                Contact Me
                            </a>
                        </div>

                        <div className="pt-4">
                            <div
                                className={`mb-2 text-sm font-medium ${
                                    isDarkMode
                                        ? "text-gray-400"
                                        : "text-gray-500"
                                }`}
                            >
                                Find me on
                            </div>
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className={`p-2 rounded-full transition-colors ${
                                        isDarkMode
                                            ? "bg-gray-800 text-gray-300 hover:text-blue-400"
                                            : "bg-gray-200 text-gray-700 hover:text-blue-600"
                                    }`}
                                    aria-label="GitHub"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="#"
                                    className={`p-2 rounded-full transition-colors ${
                                        isDarkMode
                                            ? "bg-gray-800 text-gray-300 hover:text-blue-400"
                                            : "bg-gray-200 text-gray-700 hover:text-blue-600"
                                    }`}
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="#"
                                    className={`p-2 rounded-full transition-colors ${
                                        isDarkMode
                                            ? "bg-gray-800 text-gray-300 hover:text-blue-400"
                                            : "bg-gray-200 text-gray-700 hover:text-blue-600"
                                    }`}
                                    aria-label="Twitter"
                                >
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div
                            className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${
                                isDarkMode
                                    ? "border-blue-500/30"
                                    : "border-blue-200"
                            }`}
                        >
                            <div
                                className={`absolute inset-0 rounded-full ${
                                    isDarkMode
                                        ? "shadow-lg shadow-blue-500/20"
                                        : "shadow-xl"
                                }`}
                            ></div>
                            <img
                                src={hero}
                                alt="Muskan Sheikh"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
