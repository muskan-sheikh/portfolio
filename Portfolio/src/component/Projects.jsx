import React, { useEffect, useState } from "react";
import { ExternalLink, Code, Eye } from "lucide-react";

// Sample project data (replace with your actual data import)
const project = [
    {
        id: 1,
        title: "Studentsenior Website",
        imageSrc: "/images/studentsenior.png",
        description:
            "This is a website made with frontend and backend using MERN.",
        source: "https://github.com/muskan-sheikh/studentsenior-backend.git",
        tags: ["React", "Node.js", "MongoDB"],
    },
    {
        id: 2,
        title: "Airbnb",
        imageSrc: "/images/airbnb.png",
        description:
            "This is a project made with complete frontend and backend.",
        source: "https://github.com/muskan-sheikh/major-project.git",
        tags: ["React", "Firebase", "Tailwind"],
    },
    {
        id: 3,
        title: "Delicious Food Recipe",
        imageSrc: "/images/food-recipe.png",
        description: "This is a project made with complete React JS.",
        source: "https://github.com/muskan-sheikh/food.git",
        tags: ["JavaScript", "API", "CSS"],
    },
    {
        id: 4,
        title: "Movie Search App",
        imageSrc: "/images/movie-search.png",
        description: "This project made with complete React JS.",
        source: "https://github.com/muskan-sheikh/moviespace.git",
        tags: ["React", "Chart.js", "Redux"],
    },
    {
        id: 5,
        title: "Gym Application",
        imageSrc: "/images/GymApplication.png",
        description: "this project made with react.js tailwind and using MERN",
        source: "https://github.com/muskan-sheikh/GYM-Application.git",
        tags: ["React.js,React Router Dom,Node.js,Express.js"],
    },
    {
        id: 6,
        title: "React-AI-VOice-Assisant",
        imageSrc: "/images/React-voice-Assisant.png",
        description: "this project made with React and Api",
        source: "https://github.com/muskan-sheikh/React-AI-Voice-Assisant.git",
        tags: ["React.js,Restfull-Api,NOde.js"],
    },
];

const Projects = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

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

    return (
        <section
            id="projects"
            className={`py-16 ${
                isDarkMode
                    ? "bg-gray-900 text-white"
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
                        PROJECTS
                    </h2>
                    <div
                        className={`h-1 w-16 mx-auto rounded ${
                            isDarkMode ? "bg-blue-500" : "bg-blue-600"
                        }`}
                    ></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {project.map((data) => (
                        <div
                            key={data.id}
                            className={`group rounded-xl overflow-hidden transition-all duration-300 ${
                                isDarkMode
                                    ? "bg-gray-800 hover:shadow-lg hover:shadow-blue-500/20"
                                    : "bg-white hover:shadow-xl"
                            }`}
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden h-52">
                                <img
                                    src={data.imageSrc}
                                    alt={data.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Tags Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-wrap gap-2">
                                    {data.tags &&
                                        data.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className={`text-xs px-2 py-1 rounded-full ${
                                                    isDarkMode
                                                        ? "bg-gray-700 text-blue-300"
                                                        : "bg-blue-100 text-blue-700"
                                                }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3
                                    className={`text-xl font-bold mb-2 ${
                                        isDarkMode
                                            ? "text-blue-400"
                                            : "text-blue-600"
                                    }`}
                                >
                                    {data.title}
                                </h3>

                                <p
                                    className={`mb-6 text-sm ${
                                        isDarkMode
                                            ? "text-gray-300"
                                            : "text-gray-600"
                                    }`}
                                >
                                    {data.description}
                                </p>

                                {/* Action Buttons */}
                                <div className="flex justify-between">
                                    <a
                                        href={data.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                                            isDarkMode
                                                ? "bg-blue-500 hover:bg-blue-600 text-white"
                                                : "bg-blue-600 hover:bg-blue-700 text-white"
                                        }`}
                                    >
                                        <Eye size={16} />
                                        Live Demo
                                    </a>

                                    <a
                                        href={data.source}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                                            isDarkMode
                                                ? "bg-gray-700 hover:bg-gray-600 text-white"
                                                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                                        }`}
                                    >
                                        <Code size={16} />
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
