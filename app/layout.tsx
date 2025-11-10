import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SM Ashiqur Zaman – Portfolio",
    description:
        "Professional Portfolio of SM Ashiqur Zaman — Skilled Software Engineer with expertise in MERN, Flutter, Android (Kotlin), and modern web technologies.",
    keywords: [
        "SM Ashiqur Zaman",
        "Portfolio",
        "Software Engineer",
        "MERN",
        "Flutter",
        "Next.js",
        "React",
        "Kotlin",
    ],
    authors: [{ name: "SM Ashiqur Zaman" }],
    openGraph: {
        title: "SM Ashiqur Zaman – Portfolio",
        description:
            "Explore projects, skills, certifications, and experience of SM Ashiqur Zaman, Software Engineer & Trainer.",
        url: "https://example.com",
        siteName: "SM Ashiqur Zaman Portfolio",
        images: [
            {
                url: "/avatar.jpg",
                width: 1200,
                height: 630,
                alt: "SM Ashiqur Zaman Portfolio Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "SM Ashiqur Zaman – Portfolio",
        description:
            "Professional Portfolio of SM Ashiqur Zaman — Software Engineer (Web & Mobile).",
        images: ["/avatar.jpg"],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${inter.className} custom-cursor-root bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100`}
        >
        {/* 🧠 Custom Blue Cursor (default visible, hides on clickable items) */}
        <CustomCursor />

        {/* 🧭 Navbar */}
        <Navbar />

        {/* 🧩 Page Sections */}
        {children}

        {/* 🔻 Footer */}
        <Footer />
        </body>
        </html>
    );
}
