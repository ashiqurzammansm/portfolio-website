"use client";
import MotionSection from "@/components/motion-section";
import { Timeline, TimelineItem } from "@/components/timeline";
import {
    profile, skills, experience, volunteer,
    education, certifications, languages, licenses
} from "@/lib/data";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "@/components/magnetic";

export default function About() {
    return (
        <MotionSection>
            <div className="space-y-10">
                {/* Header + Actions */}
                <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                        <h2 className="section-title">About</h2>
                        <p className="section-lead max-w-prose">
                            {profile.summary}
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                        <Magnetic>
                            <motion.a
                                href="/resume/resume.pdf"
                                className="button bg-blue-600 text-white cursor-link"
                                download
                                aria-label="Download Resume as PDF"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Download size={16} />
                                Download Resume
                            </motion.a>
                        </Magnetic>

                        <Magnetic>
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="button cursor-link"
                                aria-label="Open LinkedIn profile"
                            >
                                LinkedIn
                            </a>
                        </Magnetic>
                    </div>
                </header>

                {/* Skills */}
                <section aria-label="Skills" className="space-y-4">
                    <h3 className="font-semibold text-lg">Skills</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {skills.map((s) => (
                            <div key={s} className="card px-4 py-3 text-center text-sm cursor-link">{s}</div>
                        ))}
                    </div>
                </section>

                {/* Main grid */}
                <div className="grid xl:grid-cols-3 gap-8">
                    {/* Experience + Volunteer */}
                    <section aria-label="Experience" className="xl:col-span-2 space-y-8">
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg">Work Experience</h3>
                            <div className="card p-6">
                                <Timeline>
                                    {experience.map((job) => (
                                        <TimelineItem
                                            key={`${job.role}-${job.company}-${job.start}`}
                                            title={job.role}
                                            subtitle={`${job.company}${job.location ? ` • ${job.location}` : ""}`}
                                            period={`${job.start} — ${job.end}`}
                                        >
                                            <ul className="list-disc ms-5 space-y-1">
                                                {job.points.map((p, i) => <li key={i}>{p}</li>)}
                                            </ul>
                                        </TimelineItem>
                                    ))}
                                </Timeline>
                            </div>
                        </div>

                        {volunteer.length > 0 && (
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg">Volunteer Experience</h3>
                                <div className="card p-6">
                                    <Timeline>
                                        {volunteer.map((v) => (
                                            <TimelineItem
                                                key={`${v.role}-${v.company}-${v.start}`}
                                                title={v.role}
                                                subtitle={v.company}
                                                period={`${v.start} — ${v.end}`}
                                            >
                                                <ul className="list-disc ms-5 space-y-1">
                                                    {v.points.map((p, i) => <li key={i}>{p}</li>)}
                                                </ul>
                                            </TimelineItem>
                                        ))}
                                    </Timeline>
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        <section aria-label="Education" className="space-y-4">
                            <h3 className="font-semibold text-lg">Education</h3>
                            <div className="card p-6 space-y-4">
                                <Timeline>
                                    {education.map((e) => (
                                        <TimelineItem
                                            key={`${e.school}-${e.program}-${e.start}`}
                                            title={e.school}
                                            subtitle={e.program}
                                            period={`${e.start} — ${e.end}`}
                                        />
                                    ))}
                                </Timeline>
                            </div>
                        </section>

                        <section aria-label="Certifications" className="space-y-4">
                            <h3 className="font-semibold text-lg">Certifications & Training</h3>
                            <div className="card p-6 space-y-3">
                                <ul className="space-y-3">
                                    {certifications.map((c) => (
                                        <li key={`${c.name}-${c.date}`} className="text-sm">
                                            <div className="font-medium">{c.name}</div>
                                            <div className="opacity-70">
                                                {c.issuer} • {c.date}
                                                {c.url && (
                                                    <a className="underline ms-1 cursor-link" href={c.url} target="_blank" rel="noreferrer">Verify</a>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section aria-label="Languages" className="space-y-4">
                            <h3 className="font-semibold text-lg">Languages</h3>
                            <div className="card p-6">
                                <ul className="text-sm space-y-1">
                                    {languages.map((l) => (
                                        <li key={l.name}><span className="font-medium">{l.name}</span> — {l.level}</li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {licenses.length > 0 && (
                            <section aria-label="Licenses" className="space-y-4">
                                <h3 className="font-semibold text-lg">License</h3>
                                <div className="card p-6 space-y-2">
                                    {licenses.map((lic) => (
                                        <div key={lic.name} className="text-sm">
                                            <div className="font-medium">{lic.name}</div>
                                            <div className="opacity-70">{lic.issuer} • {lic.valid}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </aside>
                </div>
            </div>
        </MotionSection>
    );
}
