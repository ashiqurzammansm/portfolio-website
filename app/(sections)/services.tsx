"use client";
import { Code2, PenTool, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import MotionSection from "@/components/motion-section";

const services = [
    { icon: Code2, title: "Web Development", desc: "Modern, fast websites using Next.js." },
    { icon: PenTool, title: "UI/UX Design", desc: "Clean, friendly interfaces with good accessibility." },
    { icon: Wrench, title: "Consulting", desc: "Basic help to plan small projects." },
];

const container = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.08 },
    },
};

const item = {
    hidden: { opacity: 0, y: 18 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Services() {
    return (
        <MotionSection>
            <div>
                <h2 className="section-title">Services</h2>
                <p className="section-lead">Ways I can help you.</p>
                <motion.div
                    className="mt-10 grid md:grid-cols-3 gap-6"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((s) => (
                        <motion.div key={s.title} className="card p-6" variants={item}>
                            <s.icon />
                            <h3 className="mt-3 font-semibold text-lg">{s.title}</h3>
                            <p className="mt-2 text-sm opacity-80">{s.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </MotionSection>
    );
}
