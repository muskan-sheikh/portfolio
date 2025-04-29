import React, { useEffect, useState } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

// Sample experience data
const experience = [
    {
        id: 1,
        company: "StudentSenior",
        role: " MERN STACK DEVELOPER",
        startDate: "Jan 2023",
        endDate: "Present",
        location: "San Francisco, CA",

        experiences: [
            "Led development of responsive UI components using React and Tailwind CSS, improving user engagement by 32%",
            "Collaborated with UX designers to implement modern design patterns and accessibility standards across multiple projects",
        ],
    },
    // {
    //     id: 2,
    //     company: "DataFlex Systems",
    //     role: "Full Stack Developer",
    //     startDate: "Mar 2021",
    //     endDate: "Dec 2022",
    //     location: "Remote",
    //     imageSrc: "dataflex.png",
    //     experiences: [
    //         "Built RESTful APIs with Node.js and Express, integrating with MongoDB and PostgreSQL databases",
    //         "Implemented JWT authentication and state management solutions with Redux for complex enterprise applications",
    //     ],
    // },
];

const Experience = () => {
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
            id="experience"
            className={`py-16 ${
                isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2
                        className={`text-3xl md:text-4xl font-bold mb-4 ${
                            isDarkMode ? "text-white" : "text-gray-800"
                        }`}
                    >
                        EXPERIENCE
                    </h2>
                    <div
                        className={`h-1 w-16 mx-auto rounded ${
                            isDarkMode ? "bg-blue-500" : "bg-blue-600"
                        }`}
                    ></div>
                </div>

                <div className="max-w-3xl mx-auto">
                    {experience.map((data) => (
                        <div
                            key={data.id}
                            className={`mb-12 p-6 rounded-xl ${
                                isDarkMode
                                    ? "bg-gray-800 shadow-lg shadow-blue-500/10"
                                    : "bg-gray-50 shadow-md"
                            }`}
                        >
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Experience Details */}
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                        <h3
                                            className={`text-xl font-bold ${
                                                isDarkMode
                                                    ? "text-blue-400"
                                                    : "text-blue-600"
                                            }`}
                                        >
                                            {data.role}
                                        </h3>
                                        <h4 className="text-sm font-medium md:text-right">
                                            {data.company}
                                        </h4>
                                    </div>

                                    {/* Duration and Location */}
                                    <div className="flex flex-col md:flex-row gap-3 md:gap-6 mb-4">
                                        <div
                                            className={`flex items-center gap-1 text-sm ${
                                                isDarkMode
                                                    ? "text-gray-300"
                                                    : "text-gray-600"
                                            }`}
                                        >
                                            <Calendar size={16} />
                                            <span>
                                                {data.startDate} -{" "}
                                                {data.endDate}
                                            </span>
                                        </div>
                                        <div
                                            className={`flex items-center gap-1 text-sm ${
                                                isDarkMode
                                                    ? "text-gray-300"
                                                    : "text-gray-600"
                                            }`}
                                        >
                                            <MapPin size={16} />
                                            <span>{data.location}</span>
                                        </div>
                                    </div>

                                    {/* Experience Points */}
                                    <ul
                                        className={`space-y-3 ${
                                            isDarkMode
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        {data.experiences.map((exp, index) => (
                                            <li
                                                key={index}
                                                className="flex gap-2"
                                            >
                                                <div
                                                    className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${
                                                        isDarkMode
                                                            ? "bg-blue-400"
                                                            : "bg-blue-600"
                                                    }`}
                                                ></div>
                                                <span>{exp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
