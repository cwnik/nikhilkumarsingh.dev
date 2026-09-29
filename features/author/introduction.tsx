"use client";

import { IconDownload } from "@tabler/icons-react";

import { Container } from "@/components/ui/container";
import { Heading, Lead, Small } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { useDownload } from "@/hooks/use-download";

import { Typewriter } from "./typewriter";
import { getGreeting } from "./lib/greeting";
import { AUTHOR } from "./constants/author";

export function Introduction() {
    const { isDownloading, download } = useDownload();

    async function handleDownloadResume() {
        await download({ url: "/resume.pdf", filename: "nikhilkumarsingh-resume.pdf" });
    }

    return (
        <section className="border-b border-dashed">
            <Container>
                <Small className="text-muted-foreground">{getGreeting(new Date().getHours())}</Small>
                <Heading>I&apos;M {AUTHOR.displayName}.</Heading>
                <Typewriter items={AUTHOR.roles} />
                <Lead className="text-muted-foreground mb-4 max-w-md text-pretty">{AUTHOR.bio}</Lead>
                <Button type="button" size="small" onClick={handleDownloadResume} disabled={isDownloading}>
                    <span>Resume</span>
                    <IconDownload />
                </Button>
            </Container>
        </section>
    );
}
