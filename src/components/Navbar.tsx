"use client";
export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full flex justify-center space-x-8 py-4 z-50">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    );
}