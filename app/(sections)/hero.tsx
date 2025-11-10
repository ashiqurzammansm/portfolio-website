"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import Magnetic from "@/components/magnetic";

export default function Hero() {
    return (
        <section className="grid gap-10 md:grid-cols-2 items-center">
            {/* Left content */}
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl font-extrabold tracking-tight"
                >
                    Hi, I’m <span className="text-blue-600 dark:text-blue-400">SM Ashiqur Zaman</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="section-lead max-w-prose mt-4"
                >
                    Software Engineer with 5+ years of web and 1+ year of mobile app experience. I build
                    secure, user-friendly, and scalable apps using React, Next.js, Kotlin, and Flutter.
                </motion.p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Magnetic>
                        <a href="#portfolio" className="button bg-blue-600 text-white cursor-link">
                            View Portfolio <ArrowRight size={16} />
                        </a>
                    </Magnetic>

                    <Magnetic>
                        <a href="#contact" className="button cursor-link">
                            Contact Me
                        </a>
                    </Magnetic>

                    <Magnetic>
                        <a
                            className="button cursor-link"
                            href="https://github.com/smashiqurzamman"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github size={16} /> GitHub
                        </a>
                    </Magnetic>

                    <Magnetic>
                        <a
                            className="button cursor-link"
                            href="https://www.linkedin.com/in/smashiqurzamman"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Linkedin size={16} /> LinkedIn
                        </a>
                    </Magnetic>

                    <Magnetic>
                        <a
                            className="button bg-slate-900 text-white cursor-link"
                            href="/resume/resume.pdf"
                            download
                        >
                            <Download size={16} /> Resume
                        </a>
                    </Magnetic>
                </div>
            </div>

            {/* Right image */}
            <div className="justify-self-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="card p-4"
                >
                    <Image
                        src="/avatar.jpg"
                        width={360}
                        height={360}
                        alt="Profile photo of SM Ashiqur Zaman"
                        className="rounded-2xl object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
