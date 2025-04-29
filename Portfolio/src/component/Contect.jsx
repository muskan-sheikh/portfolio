import React, { useEffect, useState } from "react";
import {
    Instagram,
    Facebook,
    Linkedin,
    Twitter,
    Github,
    Mail,
    MapPin,
    Phone,
    ExternalLink,
} from "lucide-react";

const Contact = () => {
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

    // Social media links data
    const socialLinks = [
        {
            icon: <Instagram size={24} />,
            name: "Instagram",
            url: "https://www.instagram.com",
            color: "hover:bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500",
        },
        {
            icon: <Facebook size={24} />,
            name: "Facebook",
            url: "https://www.facebook.com",
            color: "hover:bg-blue-600",
        },
        {
            icon: <Linkedin size={24} />,
            name: "LinkedIn",
            url: "https://www.linkedin.com",
            color: "hover:bg-blue-700",
        },
        {
            icon: <Twitter size={24} />,
            name: "Twitter",
            url: "https://www.twitter.com",
            color: "hover:bg-sky-500",
        },
        {
            icon: <Github size={24} />,
            name: "GitHub",
            url: "https://www.github.com",
            color: "hover:bg-gray-700",
        },
        {
            icon: <Mail size={24} />,
            name: "Email",
            url: "mailto:webdevmastery@gmail.com",
            color: "hover:bg-red-500",
        },
    ];

    // Contact information cards
    const contactCards = [
        {
            icon: <Mail size={28} />,
            title: "Email",
            details: "sheikhmuskan2227@gmail.com",
            action: "sheikhmuskan2227@gmail.com",
        },
        {
            icon: <MapPin size={28} />,
            title: "Location",
            details: "Lucknow",
            action: null,
        },
        {
            icon: <Phone size={28} />,
            title: "Phone",
            details: "9335250362",
            action: "tel:9335250362",
        },
    ];

    return (
        <section
            id="contact"
            className={`py-16 ${
                isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2
                        className={`text-3xl md:text-4xl font-bold mb-4 ${
                            isDarkMode ? "text-white" : "text-gray-800"
                        }`}
                    >
                        CONTACT ME
                    </h2>
                    <div
                        className={`h-1 w-16 mx-auto rounded ${
                            isDarkMode ? "bg-blue-500" : "bg-blue-600"
                        }`}
                    ></div>
                    <p
                        className={`mt-4 max-w-xl mx-auto ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                    >
                        I'm currently available for freelance work and full-time
                        positions. Feel free to reach out if you'd like to
                        connect!
                    </p>
                </div>

                {/* Social Media Links */}
                <div className="max-w-2xl mx-auto mb-16">
                    <h3
                        className={`text-xl font-semibold mb-6 text-center ${
                            isDarkMode ? "text-blue-400" : "text-blue-600"
                        }`}
                    >
                        Connect With Me
                    </h3>

                    <div className="flex flex-wrap justify-center gap-5">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center w-16 h-16 rounded-full transition-all ${
                                    isDarkMode
                                        ? `bg-gray-700 hover:text-white text-gray-200 ${social.color}`
                                        : `bg-gray-100 hover:text-white text-gray-700 ${social.color}`
                                } transform hover:scale-110 hover:shadow-lg`}
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact Information Cards */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactCards.map((card, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl text-center transition-all ${
                                    isDarkMode
                                        ? "bg-gray-700 shadow-md hover:shadow-blue-500/10 hover:shadow-lg"
                                        : "bg-gray-50 shadow-md hover:shadow-xl"
                                }`}
                            >
                                <div className="flex justify-center mb-4">
                                    <div
                                        className={`p-3 rounded-full ${
                                            isDarkMode
                                                ? "bg-gray-800 text-blue-400"
                                                : "bg-blue-100 text-blue-600"
                                        }`}
                                    >
                                        {card.icon}
                                    </div>
                                </div>

                                <h4 className="text-lg font-medium mb-2">
                                    {card.title}
                                </h4>

                                {card.action ? (
                                    <a
                                        href={card.action}
                                        className={`inline-flex items-center gap-1 ${
                                            isDarkMode
                                                ? "text-blue-400 hover:text-blue-300"
                                                : "text-blue-600 hover:text-blue-700"
                                        }`}
                                    >
                                        {card.details}
                                    </a>
                                ) : (
                                    <p
                                        className={
                                            isDarkMode
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }
                                    >
                                        {card.details}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call To Action */}
                <div className="text-center mt-16">
                    <div
                        className={`inline-block px-8 py-4 rounded-xl ${
                            isDarkMode
                                ? "bg-blue-500/10 border border-blue-500/30"
                                : "bg-blue-50 border border-blue-100"
                        }`}
                    >
                        <p
                            className={`text-lg ${
                                isDarkMode ? "text-gray-200" : "text-gray-700"
                            }`}
                        >
                            Want to work together? I'm always open to discussing
                            new projects and opportunities.
                        </p>
                        <a
                            href="mailto:webdevmastery@gmail.com"
                            className={`inline-flex items-center gap-2 mt-4 font-medium ${
                                isDarkMode
                                    ? "text-blue-400 hover:text-blue-300"
                                    : "text-blue-600 hover:text-blue-700"
                            }`}
                        >
                            Let's Talk <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
