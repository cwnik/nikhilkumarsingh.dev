import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Small, SubTitle, Title } from "@/components/ui/typography";

import { WORK } from "./constants/work";
import { WorkCard } from "./work-card";

export function Work() {
    return (
        <section className="border-b border-dashed">
            <Container className="border-b">
                <Title>Work</Title>
            </Container>
            <Container>
                {WORK.map((item, index) => (
                    <div key={index} className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Image
                                src={item.company.logo}
                                alt={item.company.name}
                                width={64}
                                height={64}
                                className="ring-offset-background bg-muted ring-border/50 size-8 rounded-full border object-contain ring-1 ring-offset-1"
                            />
                            <div className="flex max-sm:flex-col sm:grow sm:items-center">
                                <SubTitle>{item.company.name}</SubTitle>
                                <Small className="text-muted-foreground shrink-0 sm:ms-auto sm:pe-2">
                                    {item.company.location} ({item.company.type})
                                </Small>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            {item.company.jobs.map((child, idx) => (
                                <WorkCard key={idx} work={child} isLast={idx === item.company.jobs.length - 1} />
                            ))}
                        </div>
                    </div>
                ))}
            </Container>
        </section>
    );
}
