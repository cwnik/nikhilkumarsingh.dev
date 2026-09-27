import { Inter_Tight } from "next/font/google";
import { cn } from "cn";

import "./globals.css";

import { SiteHeader } from "@/components/site-header";

const inter = Inter_Tight({
    display: "swap",
    variable: "--font-inter-tight",

    subsets: ["latin"],
    fallback: ["sans-serif"],
    weight: ["400", "500", "600", "700"]
});

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={cn(inter.variable, "h-full antialiased")}>
            <body className="flex min-h-full flex-col">
                <SiteHeader />
                <div className="flex grow flex-col">{children}</div>
            </body>
        </html>
    );
}
