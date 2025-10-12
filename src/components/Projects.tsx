"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Watchly Backend",
        description:
            "A robust backend for a video-sharing platform like YouTube, featuring authentication, video uploads, comments, likes, subscriptions, and more. Designed with scalability and modular architecture in mind.",
        image: "/projects/watchly.png",
        tech: ["Node.js", "Express", "MongoDB", "Multer", "JWT", "Cloudinary"],
        github: "https://github.com/HamzaDevelops42/Watchly-backend",
        demo: null,
    },
    {
        title: "Dusk Plate",
        description:
            "A modern restaurant website powered by Sanity CMS, allowing menu management and customer ordering through a predefined WhatsApp message flow. Built for easy deployment and customization.",
        image: "/projects/duskplate.png",
        tech: ["Next.js", "TypeScript", "Sanity", "TailwindCSS", "Context API"],
        github: "https://github.com/HamzaDevelops42/dusk-plate",
        demo: "https://duskplate.vercel.app/",
    },
    {
        title: "Portfolio Website",
        description:
            "A dynamic personal portfolio featuring smooth GSAP animations, horizontal scrolling, and modern UI components — built to showcase my projects, skills, and creativity.",
        image: "/projects/portfolio.png",
        tech: ["Next.js", "TailwindCSS", "GSAP", "Framer Motion"],
        github: "https://github.com/HamzaDevelops42/portfolio",
        demo: "https://hamzadevelops.vercel.app",
    },
];

export default function Projects() {
    return (
        <div className="flex flex-col max-sm:justify-center max-sm:items-center h-full overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-[var(--my-border)] scrollbar-track-transparent">
            <h3 className="text-sm uppercase tracking-widest mb-6 sm:mb-4 text-[var(--text-2)] text-center sm:text-left">
                Projects
            </h3>

            {projects.map((p, i) => {
                const mainLink = p.demo ?? p.github;

                return (
                    <div
                        key={i}
                        onClick={() => window.open(mainLink, "_blank")}
                        className="bg-[var(--bg-button)] border border-[var(--my-border)] rounded-2xl 
                                    p-4 flex flex-col sm:flex-row items-start sm:items-center 
                                    gap-4 hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
                    >
                        {/* Image — hidden below 1024px (touch) */}
                        <div className="hidden touch:flex w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-[var(--my-border)]">
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
                            <div className="flex justify-between items-center sm:block">
                                <h3 className="text-lg font-semibold text-[var(--text)]">
                                    {p.title}
                                </h3>
                                <div
                                    className="flex items-center justify-center gap-2  sm:mt-0 ml-auto sm:hidden"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {p.demo && (
                                        <Link
                                            href={p.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center p-2 text-xs border rounded-lg 
                    border-[var(--my-border)] bg-[var(--bg-card)] text-[var(--text)] 
                    hover:text-blue-400 hover:-translate-y-1 transition"
                                        >
                                            <FaExternalLinkAlt size={14} />
                                        </Link>
                                    )}
                                    <Link
                                        href={p.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center p-2 text-xs border rounded-lg 
                  border-[var(--my-border)] bg-[var(--bg-card)] text-[var(--text)] 
                  hover:text-black hover:-translate-y-1 transition"
                                    >
                                        <FaGithub size={14} />
                                    </Link>
                                </div>
                            </div>
                            <p className="text-sm text-[var(--text-2)] mt-1">{p.description}</p>

                            <div className="mt-3 hidden sm:flex flex-wrap gap-2 ">
                                {p.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-2 py-1 text-xs border rounded-lg border-[var(--my-border)] 
                                                    bg-[var(--bg-card)] text-[var(--text-2)]"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div
                            className="hidden sm:flex items-center gap-2 mt-3 sm:mt-0 ml-auto self-start"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {p.demo && (
                                <Link
                                    href={p.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center p-2 text-xs border rounded-lg 
                    border-[var(--my-border)] bg-[var(--bg-card)] text-[var(--text)] 
                    hover:text-blue-400 hover:-translate-y-1 transition"
                                >
                                    <FaExternalLinkAlt size={14} />
                                </Link>
                            )}
                            <Link
                                href={p.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center p-2 text-xs border rounded-lg 
                  border-[var(--my-border)] bg-[var(--bg-card)] text-[var(--text)] 
                  hover:text-black hover:-translate-y-1 transition"
                            >
                                <FaGithub size={14} />
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
