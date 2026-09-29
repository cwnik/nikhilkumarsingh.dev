import { InfonicSolutions } from "@/assets";

export const WORK = [
    {
        company: {
            name: "Infonic Solutions",
            logo: InfonicSolutions,
            location: "Jaipur, Rajasthan, India",
            type: "On-site",
            jobs: [
                {
                    type: "Full-time",
                    designation: "Full Stack MERN Developer",
                    duration: "07.2023 - 08.2026",
                    responsibilities: [
                        "Redeveloped legacy Node.js backend systems for improved scalability.",
                        "Optimized APIs for high-throughput (300-450 RPS) and low-latency (30-180ms) workloads.",
                        "Improved database query performance and overall API response efficiency.",
                        "Automated repetitive workflows to reduce manual (team) operational effort by 60%.",
                        "Built and maintained 35+ CRM and CMS web applications.",
                        "Added curated AI Bot and gamification features to improve user engagement.",
                        "Developed real-time ticket management solutions for clients using Node.js and Socket.",
                        "Led frontend and application development teams across product development.",
                        "Delivered 4+ production-grade SaaS applications for clients."
                    ],
                    skills: [
                        "Radix UI",
                        "Tailwind CSS",
                        "Zustand",
                        "React.js",
                        "Prisma ORM",
                        "TypeScript",
                        "SaaS Development",
                        "Next.js",
                        "REST APIs",
                        "MongoDB",
                        "Team Leadership",
                        "Express.js",
                        "Socket.io",
                        "Node.js",
                        "Systems Design",
                        "PostgreSQL"
                    ]
                },
                {
                    type: "Full-time",
                    designation: "React Native Developer",
                    duration: "04.2023 - 06.2023",
                    responsibilities: [
                        "Designed and developed a mobile CRM experience from scratch.",
                        "Connected the app with backend services and notifications (FCM registry).",
                        "Build a consistent mobile interface across key workflows.",
                        "Tested and published the app on Play Store"
                    ],
                    skills: ["JavaScript", "Figma", "React Native", "REST APIs", "Redux.js", "Firebase", "Socket.io"]
                },
                {
                    type: "Full-time",
                    designation: "Frontend Developer",
                    duration: " 10.2022 - 03.2023",
                    responsibilities: [
                        "Integrated REST APIs into a customer relationship platform.",
                        "Modernized legacy frontend architecture and development practices.",
                        "Improved application performance through structural and dependency upgrades.",
                        "Built an SEO-focused website for a student portal."
                    ],
                    skills: [
                        "Tailwind CSS",
                        "JavaScript",
                        "React.js",
                        "Responsive Web Design",
                        "TypeScript",
                        "Next.js",
                        "REST APIs",
                        "Redux.js"
                    ]
                },
                {
                    type: "Internship",
                    designation: "UI/UX Designer",
                    duration: "08.2022 - 09.2022",
                    responsibilities: [
                        "Designed a clean and intuitive assignment management system with Figma.",
                        "Turned Figma designs into a pixel-perfect working MVP.",
                        "Built reusable components for consistent product experiences."
                    ],
                    skills: ["Tailwind CSS", "JavaScript", "React.js", "Responsive Web Design", "Figma", "REST APIs"]
                }
            ]
        }
    }
] as const;

export type Work = (typeof WORK)[number]["company"]["jobs"][number];
