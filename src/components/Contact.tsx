"use client";

import { useState } from "react";
import { FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import emailjs from "@emailjs/browser";
import { data } from "motion/react-client";
import { Loader2 } from "lucide-react";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    name: form.name,
                    email: form.email,
                    message: form.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            if (res.status === 200) {
                toast.success("Message sent successfully!")
                setForm({ name: "", email: "", message: "" }); // clear form
            } else {
                toast.error("Something went wrong. Try again!")
            }
        } catch (err) {
            toast.error("Failed to send message. Please try later.",)
        } finally {
            setLoading(false);
        }
    };

    const socials = [
        {
            name: "hamzadevelops42@gmail.com",
            icon: <MdEmail className="size-6" />,
            link: "mailto:hamzadevelops42@gmail.com",
        },
        {
            name: "hamzadevelops",
            icon: <FaInstagram className="size-6" />,
            link: "https://www.instagram.com/hamzadevelops/",
        },
        {
            name: "#inlogic9104",
            icon: <FaDiscord className="size-6" />,
            link: "https://discord.com/users/1032506837406331002",
        },
        {
            name: "HamzaDevelops42",
            icon: <FaGithub className="size-6" />,
            link: "https://github.com/HamzaDevelops42",
        },
    ];

    return (
        <TooltipProvider>
            <div className="
            bg-[var(--bg-card)]/30 text-[var(--text)] bg-clip-padding backdrop-filter backdrop-blur-md backdrop-saturate-100 backdrop-contrast-100
            border border-[var(--my-border)] rounded-lg
            w-[90vw] h-[85vh] touch:w-[80vw] touch:h-[70vh] xl:w-[70vw] 2xl:w-[60vw]
            
            flex flex-col p-6 space-y-6 max-touch:justify-center">
                <h3 className="text-sm uppercase tracking-widest mb-4 text-[var(--text-2)] text-center sm:text-left">
                    Contact
                </h3>

                <div className="rounded-2xl p-6 flex flex-col space-y-4">
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 items-center">
                        {/* Name */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 cursor-none rounded-lg bg-[var(--bg-button)] border border-[var(--my-border)] text-[var(--text)] focus:outline-none focus:ring-1 focus:ring-[var(--text)]"
                        />

                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className=" w-full px-3 py-2 cursor-none rounded-lg bg-[var(--bg-button)] border border-[var(--my-border)] text-[var(--text)] focus:outline-none focus:ring-1 focus:ring-[var(--text)]"
                        />

                        {/* Message */}
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 cursor-none rounded-lg bg-[var(--bg-button)] border border-[var(--my-border)] text-[var(--text)] focus:outline-none focus:ring-1 focus:ring-[var(--text)] resize-none"
                        />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-10 sm:px-20 py-3 bg-[var(--bg-button-2)] text-[var(--text-2)] rounded-md hover:bg-[var(--bg-button-2-hover)]  transition-colors cursor-none text-center mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? <Loader2 className="animate-spin"/> : "Send Message" }
                        </button>
                    </form>

                    {/* Social Buttons (Horizontal Row) */}
                    <div className="flex justify-center gap-4 pt-6">
                        {socials.map((s, i) => (
                            <Tooltip key={i}>
                                <TooltipTrigger asChild>
                                    <Link href={s.link} target="_blank">
                                        <Button
                                            variant="secondary"
                                            className="cursor-none w-12 h-12 flex items-center justify-center bg-[var(--bg-button)] text-[var(--text)] border border-[var(--my-border)] rounded-full hover:bg-[var(--bg-button-hover)] transition-colors hover:text-[var(--bg-button)] "
                                        >
                                            {s.icon}
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                    <p>{s.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                </div>
            </div>
        </TooltipProvider>
    );
}
