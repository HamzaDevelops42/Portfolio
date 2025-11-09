"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi"

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Wait until after client-side hydration to show UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <button

            className="fixed top-4 right-4 z-50 p-2 bg-gray-800 text-white rounded"
        >
           <FiSun />
        </button>;
    }

    return (
        <>
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="fixed top-15 right-15 z-50 p-2  text-[var(--text)] cursor-none"
            >
                {theme === "dark" ? (<FiSun className="size-8" />) : <FiMoon className="size-8" />}
            </button>
        </>
    );
}
