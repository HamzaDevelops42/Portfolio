"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Portfolio Website",
        description:
            "A personal portfolio built with Next.js, TailwindCSS, and GSAP animations.",
        image: "/projects/portfolio.png",
        tech: ["Next.js", "TailwindCSS", "GSAP"],
        github: "https://github.com/your-username/portfolio",
        demo: "https://your-portfolio.vercel.app",
    },
    {
        title: "E-Commerce App",
        description:
            "Full-stack MERN e-commerce application with payments and authentication.",
        image: "/projects/ecommerce.png",
        tech: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/your-username/ecommerce",
        demo: "https://ecommerce-demo.vercel.app",
    },
    {
        title: "Chat App",
        description: "Real-time chat app using Socket.io and Express.",
        image: "/projects/chat.png",
        tech: ["React", "Express", "Socket.io"],
        github: "https://github.com/your-username/chat-app",
        demo: null, // No demo link
    },
];

export default function Projects() {
    return (
        <div className="flex flex-col overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-[var(--my-border)] scrollbar-track-transparent">
            <h3 className="text-sm uppercase tracking-widest mb-4 text-[var(--text-2)]">
                Projects
            </h3>

            {projects.map((p, i) => {
                const mainLink = p.demo ?? p.github; // demo if present, else github

                return (
                    <Link
                        key={i}
                        href={mainLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <div className="bg-[var(--bg-button)] border border-[var(--my-border)] rounded-2xl p-4 flex items-center space-x-4 hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
                            {/* Image */}
                            <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-[var(--my-border)]">
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    width={96}
                                    height={96}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow">
                                <h3 className="text-lg font-semibold text-[var(--text)]">
                                    {p.title}
                                </h3>
                                <p className="text-sm text-[var(--text-2)]">{p.description}</p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {p.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2 py-1 text-xs border rounded-lg border-[var(--my-border)] bg-[var(--bg-card)] text-[var(--text-2)]"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div
                                className="flex items-center gap-2 ml-auto self-start"
                                onClick={(e) => e.stopPropagation()} // prevent card click
                            >
                                {/* Demo Link */}
                                {p.demo && (
                                    <Link
                                        href={p.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center p-2 text-xs border rounded-lg border-[var(--my-border)] bg-[var(--bg-card)] text-[var(--text)] hover:text-blue-400 hover:-translate-y-1 transition"
                                    >
                                        <FaExternalLinkAlt size={14} />
                                    </Link>
                                )}

                                {/* GitHub Link */}
                                <Link
                                    href={p.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center p-2 text-xs border rounded-lg border-[var(--my-border)] bg-[var(--bg-card)] text-[var(--text)] hover:text-black hover:-translate-y-1 transition"
                                >
                                    <FaGithub size={14} />
                                </Link>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
