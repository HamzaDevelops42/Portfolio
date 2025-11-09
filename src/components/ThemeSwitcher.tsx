"use client";
import { ThemeToggleButton } from "./ui/skiper-ui/skiper26";

export default function ThemeSwitcher() {

    return (
        <>
            <div className="fixed top-1 right-1 touch:top-15 touch:right-15 z-50 p-2  text-[var(--text)] cursor-none">
                <ThemeToggleButton variant="rectangle" start="left-right" className="cursor-none" blur={true}/>
                </div>
        </>
    );
}
