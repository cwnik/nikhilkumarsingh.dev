import Image from "next/image";

import { Container } from "@/components/ui/container";
import { InfiniteCarousel, InfiniteCarouselWrap } from "@/components/ui/infinite-carousel";
import { Badge } from "@/components/ui/badge";

import { TECHNICAL_SKILLS, WORKFLOW_TOOLS } from "./constants/skills";

export function Skills() {
    return (
        <section className="border-b border-dashed">
            <Container className="space-y-2 overflow-hidden">
                {[TECHNICAL_SKILLS, WORKFLOW_TOOLS].map((item, index) => (
                    <InfiniteCarousel key={index} duration={25} reverse={(index + 1) % 2 === 0}>
                        <InfiniteCarouselWrap>
                            {item.map((child, index) => (
                                <Badge key={index} variant="outline">
                                    <Image
                                        src={child.icon}
                                        alt={child.label}
                                        width={32}
                                        height={32}
                                        className="size-4 object-contain"
                                    />
                                    <span>{child.label}</span>
                                </Badge>
                            ))}
                        </InfiniteCarouselWrap>
                    </InfiniteCarousel>
                ))}
            </Container>
        </section>
    );
}
