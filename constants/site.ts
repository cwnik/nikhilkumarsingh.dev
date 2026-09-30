import { AUTHOR } from "@/features/author/constants/author";

const SOURCE_CODE_GITHUB_REPOSITORY = "cwnik/nikhilkumarsingh.dev";
const SOURCE_CODE_GITHUB_REPOSITORY_URL = "https://github.com/cwnik/nikhilkumarsingh.dev";

const SITE = {
    name: AUTHOR.displayName,
    description: AUTHOR.bio,
    url: process.env.NEXT_PUBLIC_URL || "https://nikhilkumarsingh.vercel.app",
    ogImage: "/og-image.png",
    keywords: [
        "nikhilkumarsingh",
        "cwnik",
        "nxcodes",
        "nikhil kumar singh",
        "full stack mern developer",
        "react developer",
        "next.js developer"
    ]
};

export { SOURCE_CODE_GITHUB_REPOSITORY, SOURCE_CODE_GITHUB_REPOSITORY_URL, SITE };
