import { Container } from "@/components/ui/container";
import { Heading, Lead, Small } from "@/components/ui/typography";
import { Typewriter } from "./typewriter";
import { AUTHOR_ROLES } from "./constants/roles";
import { getGreeting } from "./lib/greeting";

export function Introduction() {
    return (
        <section>
            <Container>
                <Small className="text-muted-foreground">{getGreeting(new Date().getHours())}</Small>
                <Heading>I&apos;M Nikhil Kumar Singh.</Heading>
                <Typewriter items={AUTHOR_ROLES} />
                <Lead className="text-muted-foreground max-w-md text-pretty">
                    Continuously experimenting with system design and design engineering to deepen my technical skills.
                </Lead>
            </Container>
        </section>
    );
}
