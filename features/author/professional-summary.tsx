import { Container } from "@/components/ui/container";
import { Title } from "@/components/ui/typography";

import { AUTHOR } from "./constants/author";

export function ProfessionalSummary() {
    return (
        <section className="border-b border-dashed">
            <Container className="border-b">
                <Title>Professional Summary</Title>
            </Container>
            <Container>
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
