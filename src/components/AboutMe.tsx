"use client";

import Socials from "./Socials";
import { FaCode, FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import Link from "next/link";
import { toast } from "sonner";

const birthday = new Date("2008-11-8");
const experienceStart = new Date("2024-06-01");

const calculateAge = (birthDate: Date) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

const calculateExperience = (startDate: Date) => {
    const today = new Date();
    let years = today.getFullYear() - startDate.getFullYear();
    const m = today.getMonth() - startDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < startDate.getDate())) {
        years--;
    }
    return years < 1 ? "<1" : `${years}+`;
};

export default function AboutMe() {
    const age = calculateAge(birthday);
    const experience = calculateExperience(experienceStart);

    return (
        <section className="
      bg-[var(--bg-card)] text-[var(--text)] 
      h-full
      p-8 rounded-lg 
      flex flex-col justify-center  lg:flex-row 
      gap-10 lg:gap-20 
      items-center lg:items-start
      text-center lg:text-left
    ">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
                {/* Section Title */}
                <h3 className="text-sm uppercase tracking-widest mb-4 text-[var(--text-2)]">
                    About Me
                </h3>

                {/* Main Heading */}
                <h1 className="text-4xl font-bold mb-6 text-[var(--text-bold)]">
                    Hi, I'm{" "}
                    <span className="text-[var(--text-2)]">
                        Hamza
                    </span>
                </h1>

                {/* Info List */}
                <ul className="space-y-3 text-sm">
                    <li className="flex items-center justify-center lg:justify-start gap-2">
                        <MdOutlineLocationOn className="text-[var(--text-2)]" />
                        Based in Pakistan
                    </li>
                    <li className="flex items-center justify-center lg:justify-start gap-2">
                        <FaRegUser className="text-[var(--text-2)]" />
                        {age} Years Old
                    </li>
                    <li className="flex items-center justify-center lg:justify-start gap-2">
                        <FaCode className="text-[var(--text-2)]" />
                        Full Stack Developer
                    </li>
                    <li className="flex items-center justify-center lg:justify-start gap-2">
                        <FaRegCalendarAlt className="text-[var(--text-2)]" />
                        {experience} Years of Experience
                    </li>
                </ul>

                {/* Bio */}
                <p className="mt-6 leading-relaxed text-[var(--text-2)] max-sm:px-0 max-touch:px-14">
                    I'm a passionate self-taught developer who started coding at a young age.
                    I specialize in crafting modern, responsive, and scalable web applications
                    using JavaScript, TypeScript, React, and Next.js. My goal is to build
                    innovative digital experiences while continuously learning and improving
                    my craft.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link
                        href="#contact"
                        onClick={() => toast.success("Something went wrong. Try again!")}
                        className="px-6 py-3 bg-[var(--bg-button-2)] text-[var(--text-2)] rounded-md hover:bg-[#332B25] transition-colors cursor-pointer"
                    >
                        Get in Touch
                    </Link>
                    <Link
                        href="#projects"
                        className="bg-[var(--bg-button)] text-[var(--text)] px-6 py-3 border border-[var(--my-border)] rounded-md hover:bg-[var(--bg-button-hover)] transition-colors cursor-pointer"
                    >
                        View Projects
                    </Link>
                </div>
            </div>


            <Socials />

        </section>
    );
}
