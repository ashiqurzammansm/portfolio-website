"use client";
import Link from "next/link";
import Container from "./container";
import ThemeToggle from "./theme-toggle";
import { useState } from "react";
import { Menu } from "lucide-react";

const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#services", label: "Services" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
] as const;

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-950/50 backdrop-blur border-b border-black/5 dark:border-white/5">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="#home" className="font-bold tracking-tight text-lg cursor-link">MyLogo</Link>
                    <nav className="hidden md:flex items-center gap-6">
                        {links.map((l) => (
                            <a key={l.href} href={l.href} className="text-sm hover:opacity-80 cursor-link">{l.label}</a>
                        ))}
                        <div className="cursor-link"><ThemeToggle /></div>
                    </nav>
                    <button className="md:hidden button cursor-link" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                        <Menu size={18} />
                    </button>
                </div>
                {open && (
                    <div className="md:hidden pb-4">
                        <div className="flex flex-col gap-2">
                            {links.map((l) => (
                                <a key={l.href} href={l.href} className="py-2 cursor-link" onClick={() => setOpen(false)}>{l.label}</a>
                            ))}
                            <div className="cursor-link"><ThemeToggle /></div>
                        </div>
                    </div>
                )}
            </Container>
        </header>
    );
}
