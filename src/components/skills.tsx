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
    SiShadcnui,
} from "react-icons/si";

const skills = [
    { name: "HTML", category: "frontend", icon: <FaHtml5 className="text-3xl" />, color: "#E34F26", description: "Markup language for creating web pages" },
    { name: "CSS", category: "frontend", icon: <FaCss3Alt className="text-3xl" />, color: "#1572B6", description: "Stylesheet language for designing web pages" },
    { name: "JavaScript", category: "frontend", icon: <SiJavascript className="text-3xl" />, color: "#F7DF1E", description: "Programming language for the web" },
    { name: "TypeScript", category: "frontend", icon: <SiTypescript className="text-3xl" />, color: "#3178C6", description: "Typed superset of JavaScript" },
    { name: "React", category: "frontend", icon: <FaReact className="text-3xl" />, color: "#61DAFB", description: "JavaScript library for building UIs" },
    { name: "Next.js", category: "frontend", icon: <SiNextdotjs className="text-3xl" />, color: "white", description: "React framework for server-rendered apps" },
    { name: "TailwindCSS", category: "frontend", icon: <SiTailwindcss className="text-3xl" />, color: "#38B2AC", description: "Utility-first CSS framework" },
    { name: "Node.js", category: "backend", icon: <FaNodeJs className="text-3xl" />, color: "#339933", description: "JavaScript runtime environment" },
    { name: "Express.js", category: "backend", icon: <SiExpress className="text-3xl" />, color: "white", description: "Web application framework for Node.js" },
    { name: "MongoDB", category: "backend", icon: <SiMongodb className="text-3xl" />, color: "#47A248", description: "NoSQL database" },
    { name: "Git", category: "others", icon: <FaGitAlt className="text-3xl" />, color: "#F05032", description: "Version control system" },
    { name: "GitHub", category: "others", icon: <FaGithub className="text-3xl" />, color: "white", description: "Code hosting platform" },
    { name: "Postman", category: "others", icon: <SiPostman className="text-3xl" />, color: "#FF6C37", description: "API testing tool" },
    { name: "Sanity", category: "others", icon: <SiSanity className="text-3xl" />, color: "#F03E2F", description: "Headless CMS" },
    { name: "ShadCN", category: "others", icon: <SiShadcnui className="text-3xl" />, color: "white", description: "UI components for React" },
    { name: "Framer Motion", category: "others", icon: <SiFramer className="text-3xl" />, color: "#0055FF", description: "Animation library for React" },
    { name: "GSAP", category: "others", icon: <SiGreensock className="text-3xl" />, color: "#88CE02", description: "Animation library" },
];

const categories = [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "others", label: "Others" },
];

export default function Skills() {
    return (
        <TooltipProvider>
            <div className="p-6 sm:p-8 h-full flex justify-center gap-6 items-center flex-col sm:block">
                {/* Main Section Heading */}
                <h3 className="text-md uppercase tracking-widest sm:mb-6 text-[var(--text-2)] text-center ">
                    Skills
                </h3>

                <div className="space-y-5 sm:space-y-10 ">
                    {categories.map((cat) => (
                        <div key={cat.key}>
                            {/* Category Title */}
                            <h2 className="text-sm  sm:mb-4 text-[var(--text)] text-left">
                                {cat.label}
                            </h2>

                            {/* Flexbox Wrapper */}
                            <div className="flex flex-wrap justify-start  gap-4">
                                {skills
                                    .filter((skill) => skill.category === cat.key)
                                    .map((skill) => (
                                        <Tooltip key={skill.name}>
                                            <TooltipTrigger asChild>
                                                <Card
                                                    className="group bg-[var(--bg-button)] text-[var(--text)] border-[var(--my-border)]
                                                                flex items-center justify-center 
                                                                h-17 w-17 sm:h-19 sm:w-19
                                                                cursor-pointer transition-all duration-200 
                                                                hover:-translate-y-1 hover:scale-105"
                                                >
                                                    <div
                                                        className="transition-colors duration-200"
                                                        style={{ color: skill.color }}
                                                    >
                                                        {skill.icon}
                                                    </div>
                                                </Card>
                                            </TooltipTrigger>

                                            <TooltipContent className="bg-[var(--bg)] border border-[var(--my-border)] text-[var(--text)] text-center">
                                                <div className="text-sm font-semibold">{skill.name}</div>
                                                <div className="text-xs opacity-80">
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
