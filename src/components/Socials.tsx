
"use client";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Social() {
    const socials = [
        {
            name: "#inlogic9104",
            icon: <FaDiscord className="size-8" />,
            link: "https://discord.com/users/1032506837406331002",
        },
        {
            name: "HamzaDevelops42",
            icon: <FaGithub className="size-8" />,
            link: "https://github.com/HamzaDevelops42",
        },
        {
            name: "hamzadevelops",
            icon: <FaInstagram className="size-8" />,
            link: "https://www.instagram.com/hamzadevelops/",
        },
        {
            name: "hamzadevelops42@gmail.com",
            icon: <MdEmail className="size-8 " />,
            link: "mailto:hamzadevelops42@gmail.com",
        },
    ];

    return (
        <TooltipProvider >
            <div className="flex gap-4 py-20 pr-6 h-full max-touch:hidden">
                {/* Left Sidebar Panel - Full Height */}
                <Tooltip >
                    <TooltipTrigger asChild>
                        <a href={socials[0].link} target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="secondary"
                                className="cursor-pointer w-24 h-full flex items-center justify-center bg-[var(--bg-button)] text-[var(--text)] border border-[var(--my-border)] rounded-md hover:bg-[var(--bg-button-hover)] transition-colors hover:text-[var(--bg-button)]"
                            >
                                {socials[0].icon}
                            </Button>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                        <p className="">{socials[0].name}</p>
                    </TooltipContent>
                </Tooltip>


                {/* Right Side - Two Columns + Bottom Row */}
                <div className="flex-1 flex flex-col gap-4">
                    {/* Top Row - Two Columns */}
                    <div className="flex gap-4 h-2/3">
                        {/* Top Content Card (Center Column) */}
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a href={socials[1].link} target="_blank" rel="noopener noreferrer">
                                        <Button
                                            variant="secondary"
                                            className="cursor-pointer w-26 h-full flex items-center justify-center bg-[var(--bg-button)] text-[var(--text)] border border-[var(--my-border)] rounded-md hover:bg-[var(--bg-button-hover)] transition-colors hover:text-[var(--bg-button)]"
                                        >
                                            {socials[1].icon}
                                        </Button>
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                    <p>{socials[1].name}</p>
                                </TooltipContent>
                            </Tooltip>

                        {/* Top Content Card (Right Column) */}
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a href={socials[2].link} target="_blank" rel="noopener noreferrer">
                                        <Button
                                            variant="secondary"
                                            className="cursor-pointer w-26 h-full flex items-center justify-center bg-[var(--bg-button)] text-[var(--text)] border border-[var(--my-border)] rounded-md hover:bg-[var(--bg-button-hover)] transition-colors hover:text-[var(--bg-button)]"
                                        >
                                            {socials[2].icon}
                                        </Button>
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                    <p>{socials[2].name}</p>
                                </TooltipContent>
                            </Tooltip>
                    </div>

                    {/* Bottom Banner Section - Full Width */}
                    <div className="h-1/3 rounded-lg borderflex items-center justify-center">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a href={socials[3].link} target="_blank" rel="noopener noreferrer">
                                    <Button
                                        variant="secondary"
                                        className="cursor-pointer w-full h-full flex items-center justify-center bg-[var(--bg-button)] text-[var(--text)] border border-[var(--my-border)] rounded-md hover:bg-[var(--bg-button-hover)] transition-colors hover:text-[var(--bg-button)]"
                                    >
                                        {socials[3].icon}
                                    </Button>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                                <p>{socials[3].name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </TooltipProvider>
    );
}