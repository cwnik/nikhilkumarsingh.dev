import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import { Tooltip } from "radix-ui";
import { cn } from "cn";

import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import { AUTHOR } from "@/features/author/constants/author";
import { SITE } from "@/constants/site";

const inter = Inter_Tight({
    display: "swap",
    variable: "--font-inter-tight",

    subsets: ["latin"],
    fallback: ["sans-serif"],
    weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE.url),
    title: { template: `%s - ${SITE.name}`, default: `${AUTHOR.displayName} - ${AUTHOR.currentDesignation}` },
    description: SITE.description,
    keywords: SITE.keywords,
    authors: [{ name: AUTHOR.handle, url: SITE.url }],
    creator: AUTHOR.handle,
    openGraph: {
        siteName: SITE.name,
        url: "/",
        type: "profile",
        firstName: AUTHOR.firstName,
        lastName: AUTHOR.lastName,
        gender: AUTHOR.gender,
        images: [{ url: SITE.ogImage, alt: SITE.name, width: 1200, height: 630 }]
    },
    twitter: { card: "summary_large_image", images: [SITE.ogImage] }
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: "#FFFFFF"
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={cn(inter.variable, "h-full antialiased")}>
            <body className="flex min-h-full flex-col">
                <Tooltip.Provider>
                    <SiteHeader />
                    <div className="flex grow flex-col">{children}</div>
                </Tooltip.Provider>
            </body>
        </html>
    );
}
