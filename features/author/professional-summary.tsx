import { Container } from "@/components/ui/container";
import { Title } from "@/components/ui/typography";

import { AUTHOR } from "./constants/author";

export function ProfessionalSummary() {
    return (
        <section>
            <Container className="space-y-2">
                <Title>Professional Summary</Title>
                <ul className="ms-4 list-disc space-y-2">
                    {AUTHOR.professionalSummary.map((item, index) => (
                        <li key={index} className="text-sm text-pretty">
                            {item}
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
