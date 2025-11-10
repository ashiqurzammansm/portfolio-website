import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";

// Set your public site URL in .env.local: NEXT_PUBLIC_SITE_URL=https://your-domain.com
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
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
        url: siteUrl,
        siteName: "SM Ashiqur Zaman Portfolio",
        images: [{ url: "/avatar.jpg", width: 1200, height: 630, alt: "Portfolio Preview" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "SM Ashiqur Zaman – Portfolio",
        description: "Professional Portfolio of SM Ashiqur Zaman — Software Engineer (Web & Mobile).",
        images: ["/avatar.jpg"],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${inter.className} custom-cursor-root bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100`}
        >
        {/* Custom blue cursor (default on, hides over clickable items) */}
        <CustomCursor />

        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    );
}
