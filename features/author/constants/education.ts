export const EDUCATION = [
    {
        institution: "Maharishi Arvind University",
        location: "Jaipur, Rajasthan",
        degree: "Bachelor's in Commerce and Management",
        duration: "08.2019 - 07.2022",

        description: [
            "Strengthened understanding of business fundamentals and organizational operations.",
            "Developed analytical thinking and problem-solving skills.",
            "Built foundational knowledge of financial concepts and business practices.",
            "Gained insight into organizational decision-making and management."
        ],
        badges: ["Business", "Analytical Thinking", "Accounting & Finance", "Decision Making"]
    }
] as const;

export type Education = (typeof EDUCATION)[number];
