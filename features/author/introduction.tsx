import { Container } from "@/components/ui/container";
import { Heading, Lead, Small } from "@/components/ui/typography";

import { Typewriter } from "./typewriter";
import { getGreeting } from "./lib/greeting";
import { AUTHOR } from "./constants/author";

export function Introduction() {
    return (
        <section className="border-b border-dashed">
            <Container>
                <Small className="text-muted-foreground">{getGreeting(new Date().getHours())}</Small>
                <Heading>I&apos;M {AUTHOR.displayName}.</Heading>
                <Typewriter items={AUTHOR.roles} />
                <Lead className="text-muted-foreground max-w-md text-pretty">{AUTHOR.bio}</Lead>
            </Container>
        </section>
    );
}
