import { Container } from "@/components/ui/container";
import { Title } from "@/components/ui/typography";

import { EDUCATION } from "./constants/education";
import { EducationCard } from "./education-card";

export function Eduction() {
    return (
        <section className="border-b border-dashed">
            <Container className="border-b">
                <Title>Education</Title>
            </Container>
            <Container>
                {EDUCATION.map((item, index) => (
                    <EducationCard key={index} education={item} />
                ))}
            </Container>
        </section>
    );
}
