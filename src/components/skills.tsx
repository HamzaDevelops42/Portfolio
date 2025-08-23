"use client";

import { Card } from "@/components/ui/card";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
} from "@/components/ui/tooltip";

import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaNodeJs,
} from "react-icons/fa";
import {
    SiJavascript,
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiTypescript,
    SiNextdotjs,
    SiPostman,
    SiSanity,
    SiFramer,
    SiGreensock,
} from "react-icons/si";

const skills = [
    // FRONTEND
    {
        name: "HTML",
        category: "frontend",
        icon: <FaHtml5 className="text-3xl" />,
        color: "#E34F26",
        description: "Markup language for creating web pages",
    },
    {
        name: "CSS",
        category: "frontend",
        icon: <FaCss3Alt className="text-3xl" />,
        color: "#1572B6",
        description: "Stylesheet language for designing web pages",
    },
    {
        name: "JavaScript",
        category: "frontend",
        icon: <SiJavascript className="text-3xl" />,
        color: "#F7DF1E",
        description: "Programming language for the web",
    },
    {
        name: "TypeScript",
        category: "frontend",
        icon: <SiTypescript className="text-3xl" />,
        color: "#3178C6",
        description: "Typed superset of JavaScript",
    },
    {
        name: "React",
        category: "frontend",
        icon: <FaReact className="text-3xl" />,
        color: "#61DAFB",
        description: "JavaScript library for building UIs",
    },
    {
        name: "Next.js",
        category: "frontend",
        icon: <SiNextdotjs className="text-3xl" />,
        color: "white",
        description: "React framework for server-rendered apps",
    },
    {
        name: "TailwindCSS",
        category: "frontend",
        icon: <SiTailwindcss className="text-3xl" />,
        color: "#38B2AC",
        description: "Utility-first CSS framework",
    },

    // BACKEND
    {
        name: "Node.js",
        category: "backend",
        icon: <FaNodeJs className="text-3xl" />,
        color: "#339933",
        description: "JavaScript runtime environment",
    },
    {
        name: "Express.js",
        category: "backend",
        icon: <SiExpress className="text-3xl" />,
        color: "white",
        description: "Web application framework for Node.js",
    },
    {
        name: "MongoDB",
        category: "backend",
        icon: <SiMongodb className="text-3xl" />,
        color: "#47A248",
        description: "NoSQL database",
    },

    // VERSION CONTROL
    {
        name: "Git",
        category: "others",
        icon: <FaGitAlt className="text-3xl" />,
        color: "#F05032",
        description: "Version control system",
    },
    {
        name: "GitHub",
        category: "others",
        icon: <FaGithub className="text-3xl" />,
        color: "white",
        description: "Code hosting platform",
    },

    // OTHERS
    {
        name: "Postman",
        category: "others",
        icon: <SiPostman className="text-3xl" />,
        color: "#FF6C37",
        description: "API testing tool",
    },
    {
        name: "Sanity",
        category: "others",
        icon: <SiSanity className="text-3xl" />,
        color: "#F03E2F",
        description: "Headless CMS",
    },
    {
        name: "ShadCN",
        category: "others",
        icon: <SiFramer className="text-3xl" />,
        color: "white",
        description: "UI components for React",
    },
    {
        name: "Framer Motion",
        category: "others",
        icon: <SiFramer className="text-3xl" />,
        color: "#0055FF",
        description: "Animation library for React",
    },
    {
        name: "GSAP",
        category: "others",
        icon: <SiGreensock className="text-3xl" />,
        color: "#88CE02",
        description: "Professional-grade animation library",
    },
];

const categories = [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    // { key: "versionControl", label: "Version Control" },
    { key: "others", label: "Others" },
];

export default function Skills() {
    return (
        <TooltipProvider >
            <div className="p-8">
                <h3 className="text-xl uppercase tracking-widest mb-4 text-[var(--text-2)] -ms-1">
                    Skills
                </h3>
                <div className="space-y-5 ">

                    {categories.map((cat) => (
                        <div key={cat.key}>
                            <h2 className="text-sm uppercase tracking-widest mb-4 text-[var(--text)]">{cat.label}</h2>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                                {skills
                                    .filter((skill) => skill.category === cat.key)
                                    .map((skill) => (
                                        <Tooltip key={skill.name}>
                                            <TooltipTrigger asChild>
                                                <Card
                                                    className="group bg-[var(--bg-button)] text-[var(--text)] border-[var(--my-border)] flex items-center justify-center h-20 w-20 cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-1"

                                                >
                                                    <div
                                                        className="transition-colors duration-200 "
                                                        style={{
                                                            color: skill.color,
                                                        }}

                                                    >
                                                        {skill.icon}
                                                    </div>
                                                </Card>
                                            </TooltipTrigger>
                                            <TooltipContent className=" bg-[var(--bg)] border border-[var(--my-border)] text-[var(--text)]">
                                                <div className="text-sm font-semibold">{skill.name}</div>
                                                <div className="text-xs ">
                                                    {skill.description}
                                                </div>
                                            </TooltipContent>
                                        </Tooltip>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </TooltipProvider>
    );
}
