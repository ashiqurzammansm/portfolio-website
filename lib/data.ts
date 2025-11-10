// ===============================
// 📄 lib/data.ts
// ===============================

// ---------- Project Type ----------
export type Project = {
    title: string;
    tag: "web" | "mobile" | "design" | "other";
    image: string;
    url?: string;
    repo?: string;
    summary: string;
};

// ---------- Portfolio Projects ----------
export const projects: Project[] = [
    {
        title: "SaaS Dashboard (Demo)",
        tag: "web",
        image: "/projects/saas.png",
        url: "#",
        repo: "#",
        summary: "Analytics dashboard demo built with Next.js and Tailwind CSS.",
    },
    {
        title: "Habit Buddy (Prototype)",
        tag: "mobile",
        image: "/projects/habits.png",
        summary: "Concept mobile app to track daily habits and streaks.",
    },
    {
        title: "Mini Design System",
        tag: "design",
        image: "/projects/design-system.png",
        repo: "#",
        summary: "Reusable UI components and tokens for rapid prototyping.",
    },
];

// ---------- Blog ----------
export const posts = [
    { slug: "hello-world", title: "Hello, Internet!", date: "2025-01-10" },
    { slug: "kid-coder", title: "Tips for Young Coders", date: "2025-02-22" },
];

// ---------- Profile ----------
export const profile = {
    name: "SM ASHIQUR ZAMAN",
    location: "Dhaka, Bangladesh",
    email: "ashiqurzamman@gmail.com",
    phonePrimary: "+8801410710150",
    phoneAlt: "+8801714010150",
    linkedin: "https://www.linkedin.com/in/smashiqurzamman",
    summary:
        "Skilled Software Engineer with 5+ years in web and 1+ year in mobile app development. Experienced in MERN, Flutter, and Android (Kotlin). Focused on secure, user-friendly, and scalable solutions; passionate about technology, continuous learning, and teaching.",
};

// ---------- Experience ----------
export type Experience = {
    role: string;
    company: string;
    location?: string;
    start: string;
    end: string;
    points: string[];
};

export const experience: Experience[] = [
    {
        role: "Trainer, Android Mobile Application Development (Level 4)",
        company: "Dewan ICT Institute – Under ASSET Project (NSDA), Government of Bangladesh",
        location: "Dhaka, Bangladesh",
        start: "Oct 2025",
        end: "Present",
        points: [
            "Conduct Android app development training using Kotlin.",
            "Guide trainees with project-based practical sessions.",
            "Prepare and update training materials aligned to NSDA standards.",
        ],
    },
    {
        role: "Software Developer (Android) — Remote",
        company: "NextSphere Technologies",
        start: "Oct 2025",
        end: "Present",
        points: [
            "Develop Android applications in Kotlin.",
            "Integrate APIs and collaborate across remote teams.",
            "Debug and optimize application performance.",
        ],
    },
    {
        role: "Software Engineer (Frontend – Web) — Remote",
        company: "Urban Limited",
        start: "Jul 2022",
        end: "Jun 2025",
        points: [
            "Built responsive web interfaces with React.js and modern toolchains.",
            "Integrated APIs with backend teams and optimized performance.",
            "Ensured high-quality UI/UX and maintained clean, reusable code.",
        ],
    },
    {
        role: "React Developer — Freelance (Remote)",
        company: "Fiverr",
        start: "Sep 2019",
        end: "Mar 2022",
        points: [
            "Delivered custom React websites and dashboards for global clients.",
            "Met deadlines with strong communication and client satisfaction.",
            "Focused on responsiveness, functionality, and performance.",
        ],
    },
    {
        role: "Frontend Developer — Freelance (Remote)",
        company: "Upwork",
        start: "Jan 2019",
        end: "Nov 2020",
        points: [
            "Designed and implemented interactive UI for web apps.",
            "Collaborated with international teams to meet goals and deadlines.",
            "Improved frontend performance and user experience.",
        ],
    },
];

// ---------- Volunteer Experience ----------
export const volunteer: Experience[] = [
    {
        role: "Associate Member",
        company: "Bangladesh Freelancer Development Society — Hybrid",
        start: "Mar 2023",
        end: "Feb 2025",
        points: [
            "Helped empower freelancers and promote digital skills.",
            "Supported events and awareness programs.",
            "Contributed ideas to improve freelancing opportunities.",
        ],
    },
    {
        role: "Secretary, Student Forum (Executive Committee)",
        company: "China Bangladesh Friendship Center (CBFC) — Hybrid",
        start: "Apr 2022",
        end: "Jul 2025",
        points: [
            "Coordinated student engagement and leadership activities.",
            "Managed event planning and cross-cultural collaboration.",
        ],
    },
];

// ---------- Education ----------
export type Education = {
    school: string;
    program: string;
    location?: string;
    start: string;
    end: string;
};

export const education: Education[] = [
    {
        school: "London School of International Business (UK)",
        program: "OTHM Level 5 & 6 Diploma in Information Technology (Equivalent to BSc)",
        start: "2025",
        end: "2026 (Expected)",
    },
    {
        school: "London School of International Business (UK)",
        program: "OTHM Level 4 Diploma in Information Technology (EQF Level 4)",
        start: "2024",
        end: "2024 (Passed)",
    },
    {
        school: "London School of International Business (UK)",
        program: "OTHM Level 3 Foundation Diploma in Information Technology (EQF Level 4)",
        start: "2023",
        end: "2023 (Passed)",
    },
];

// ---------- Certifications ----------
export type Certification = {
    name: string;
    issuer: string;
    date: string;
    url?: string;
};

export const certifications: Certification[] = [
    {
        name: "Competency Based Training & Assessment Methodology (CBT&AM), Level-4",
        issuer: "BNQF • Desh Polytechnic College (Mirpur, Dhaka)",
        date: "Expected Dec 2025",
    },
    {
        name: "Android Mobile Application Development (NSDA Level-4)",
        issuer: "BNQF • DIPTI, Dhaka",
        date: "Sep 2025",
    },
    {
        name: "App Development with Flutter",
        issuer: "Ostad Limited",
        date: "Mar 2025",
    },
    {
        name: "Full-Stack Web Development with MERN",
        issuer: "Ostad Limited",
        date: "Jun 2024",
    },
    {
        name: "Mastering React JS, Next JS & Prisma",
        issuer: "Ostad Limited",
        date: "Nov 2023",
    },
];

// ---------- Languages ----------
export const languages = [
    { name: "Bengali", level: "Native" },
    { name: "English", level: "Conversational" },
    { name: "Chinese", level: "Conversational (HSK-2, 2019)" },
];

// ---------- Licenses ----------
export const licenses = [
    {
        name: "Software Engineer (Govt. Freelancer ID Card)",
        issuer: "Department of ICT, People’s Republic of Bangladesh",
        valid: "2022 — Present",
    },
];

// ---------- Skills with SVG logo slugs ----------
export type SkillItem = { name: string; slug?: string };
export type SkillCategory = { name: string; items: SkillItem[] };
export type SkillGroup = { title: string; categories: SkillCategory[] };

export const skillGroups: SkillGroup[] = [
    {
        title: "💻 Web Development (MERN & Next.js)",
        categories: [
            {
                name: "Frontend",
                items: [
                    { name: "React.js", slug: "react" },
                    { name: "Next.js", slug: "nextjs" },
                    { name: "TypeScript", slug: "typescript" },
                    { name: "Tailwind CSS", slug: "tailwind" },
                ],
            },
            {
                name: "Backend",
                items: [
                    { name: "Node.js", slug: "node" },
                    { name: "Express.js", slug: "express" },
                    { name: "MongoDB", slug: "mongodb" },
                    { name: "JWT", slug: "jwt" },
                ],
            },
            {
                name: "Tools & Deployment",
                items: [
                    { name: "Git / GitHub", slug: "github" },
                    { name: "Postman", slug: "postman" },
                    { name: "Figma", slug: "figma" },
                    { name: "Vercel / Render", slug: "vercel" },
                ],
            },
        ],
    },
    {
        title: "📱 Android App Development (Kotlin)",
        categories: [
            {
                name: "Core",
                items: [
                    { name: "Android", slug: "android" },
                    { name: "Kotlin", slug: "kotlin" },
                    { name: "Android Jetpack", slug: "jetpack" },
                    { name: "MVVM Architecture", slug: "mvvm" },
                ],
            },
            {
                name: "Data & Network",
                items: [
                    { name: "Retrofit", slug: "retrofit" },
                    { name: "Room DB", slug: "room" },
                    { name: "Firebase", slug: "firebase" },
                ],
            },
            {
                name: "Tools",
                items: [{ name: "Git / GitHub", slug: "git" }],
            },
        ],
    },
];
