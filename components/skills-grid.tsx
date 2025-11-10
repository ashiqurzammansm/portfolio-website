"use client";
import { motion } from "framer-motion";
import type { SkillGroup } from "@/lib/data";

export default function SkillsGrid({ groups }: { groups: SkillGroup[] }) {
    return (
        <div className="space-y-8">
            {groups.map((group) => (
                <section key={group.title} className="space-y-4">
                    <h4 className="text-lg font-semibold">{group.title}</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                        {group.categories.map((cat) => (
                            <motion.div
                                key={cat.name}
                                className="card p-5"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.35 }}
                            >
                                <div className="mb-3 text-sm font-medium opacity-80">{cat.name}</div>
                                <div className="flex flex-wrap gap-2">
                                    {cat.items.map((item) => (
                                        <span
                                            key={`${cat.name}-${item.name}`}
                                            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-3 py-2 text-sm"
                                        >
                      {item.icon ? <span className="text-base">{item.icon}</span> : null}
                                            <span>{item.name}</span>
                    </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
