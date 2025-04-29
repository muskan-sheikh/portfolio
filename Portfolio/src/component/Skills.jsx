import React, { useEffect, useState } from "react";
import { Code2, Database, Wrench } from "lucide-react";

const getSkillIconUrl = (skill) =>
    `https://skillicons.dev/icons?i=${skill.toLowerCase()}`;

// Sample skills data organized by categories
const skillsData = {
    frontend: [
        { id: 1, title: "React", proficiency: 90 },
        {
            id: 2,
            title: "JavaScript",

            proficiency: 85,
        },
        {
            id: 3,
            title: "TailwindCSS",

            proficiency: 80,
        },
        {
            id: 4,
            title: "Bootstrap",
            proficiency: 85,
        },
    ],
    backend: [
        { id: 7, title: "Nodejs", proficiency: 80 },
        { id: 8, title: "Express", proficiency: 75 },
        { id: 9, title: "MongoDB", proficiency: 80 },
        { id: 10, title: "mySQL", proficiency: 70 },
    ],
    tools: [
        { id: 11, title: "GitHub", proficiency: 85 },
        { id: 12, title: "Vercel", proficiency: 80 },
        { id: 13, title: "Postman", proficiency: 85 },
        {
            id: 14,
            title: "Firebase",
            imageSrc: "firebase.png",
            proficiency: 75,
        },
    ],
};

const Skills = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeTab, setActiveTab] = useState("all");

    // Check for dark mode
    useEffect(() => {
        const isDark = document.body.classList.contains("dark");
        setIsDarkMode(isDark);

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

    // Filter skills based on active tab
    const getDisplayedSkills = () => {
        if (activeTab === "all") {
            return [
                ...skillsData.frontend,
                ...skillsData.backend,
                ...skillsData.tools,
            ];
        }
        return skillsData[activeTab] || [];
    };

    return (
        <section
            id="skills"
            className={`py-16 ${
                isDarkMode
                    ? "bg-gray-800 text-white"
                    : "bg-gray-50 text-gray-800"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2
                        className={`text-3xl md:text-4xl font-bold mb-4 ${
                            isDarkMode ? "text-white" : "text-gray-800"
                        }`}
                    >
                        SKILLS
                    </h2>
                    <div
                        className={`h-1 w-12 mx-auto rounded ${
                            isDarkMode ? "bg-blue-500" : "bg-blue-600"
                        }`}
                    ></div>
                    <p
                        className={`mt-4 max-w-2xl mx-auto ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                    >
                        My technical skills and tools that I use to bring ideas
                        to life
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex justify-center mb-10">
                    <div
                        className={`inline-flex rounded-lg p-1 ${
                            isDarkMode ? "bg-gray-700" : "bg-gray-200"
                        }`}
                    >
                        <button
                            className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                                activeTab === "all"
                                    ? isDarkMode
                                        ? "bg-blue-500 text-white"
                                        : "bg-blue-600 text-white"
                                    : isDarkMode
                                    ? "text-gray-300 hover:text-white"
                                    : "text-gray-600 hover:text-gray-800"
                            }`}
                            onClick={() => setActiveTab("all")}
                        >
                            All Skills
                        </button>
                        <button
                            className={`px-4 py-2 text-sm font-medium rounded-md transition flex items-center gap-1 ${
                                activeTab === "frontend"
                                    ? isDarkMode
                                        ? "bg-blue-500 text-white"
                                        : "bg-blue-600 text-white"
                                    : isDarkMode
                                    ? "text-gray-300 hover:text-white"
                                    : "text-gray-600 hover:text-gray-800"
                            }`}
                            onClick={() => setActiveTab("frontend")}
                        >
                            <Code2 size={16} />
                            Frontend
                        </button>
                        <button
                            className={`px-4 py-2 text-sm font-medium rounded-md transition flex items-center gap-1 ${
                                activeTab === "backend"
                                    ? isDarkMode
                                        ? "bg-blue-500 text-white"
                                        : "bg-blue-600 text-white"
                                    : isDarkMode
                                    ? "text-gray-300 hover:text-white"
                                    : "text-gray-600 hover:text-gray-800"
                            }`}
                            onClick={() => setActiveTab("backend")}
                        >
                            <Database size={16} />
                            Backend
                        </button>
                        <button
                            className={`px-4 py-2 text-sm font-medium rounded-md transition flex items-center gap-1 ${
                                activeTab === "tools"
                                    ? isDarkMode
                                        ? "bg-blue-500 text-white"
                                        : "bg-blue-600 text-white"
                                    : isDarkMode
                                    ? "text-gray-300 hover:text-white"
                                    : "text-gray-600 hover:text-gray-800"
                            }`}
                            onClick={() => setActiveTab("tools")}
                        >
                            <Wrench size={16} />
                            Tools
                        </button>
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {getDisplayedSkills().map((skill) => (
                        <div
                            key={skill.id}
                            className={`flex flex-col items-center p-4 rounded-lg transition-all transform hover:scale-105 ${
                                isDarkMode
                                    ? "bg-gray-700 hover:bg-gray-600"
                                    : "bg-white hover:bg-gray-100"
                            } shadow-md`}
                        >
                            <div
                                className={`w-16 h-16 mb-3 rounded-lg flex items-center justify-center ${
                                    isDarkMode ? "bg-gray-600" : "bg-gray-50"
                                }`}
                            >
                                <img
                                    src={getSkillIconUrl(skill.title)}
                                    alt={skill.title}
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                            <h3
                                className={`text-sm font-medium mb-2 ${
                                    isDarkMode
                                        ? "text-gray-200"
                                        : "text-gray-700"
                                }`}
                            >
                                {skill.title}
                            </h3>

                            {/* Skill proficiency bar */}
                            <div
                                className={`w-full h-1.5 rounded-full ${
                                    isDarkMode ? "bg-gray-600" : "bg-gray-200"
                                }`}
                            >
                                <div
                                    className={`h-full rounded-full ${
                                        isDarkMode
                                            ? "bg-blue-500"
                                            : "bg-blue-600"
                                    }`}
                                    style={{ width: `${skill.proficiency}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
