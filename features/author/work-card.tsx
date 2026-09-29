import { cn } from "cn";
import { IconBulb, IconCode } from "@tabler/icons-react";

import { IconBadge } from "@/components/ui/icon-badge";
import { Paragraph, Small } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";

import type { Work } from "./constants/work";

export function WorkCard({ work, isLast }: { work: Work; isLast?: boolean }) {
    const Icon = work.type === "Internship" ? IconBulb : IconCode;

    return (
        <div className="flex gap-2">
            <div className={cn("flex shrink-0 flex-col items-center gap-0.5", isLast && "pb-3")}>
                <IconBadge>
                    <Icon />
                </IconBadge>
                <div className={cn("ms-4 w-4 grow border-s", isLast && "rounded-bl-md border-b")} />
            </div>
            <div className={cn("grow pb-6", isLast && "pb-0")}>
                <div className="flex items-start">
                    <div className="grow">
                        <Paragraph className="font-semibold">{work.designation}</Paragraph>
                        <Small className="text-muted-foreground">{work.duration}</Small>
                    </div>
                    <Small className="text-muted-foreground ms-auto">{work.type}</Small>
                </div>
                <ul className="ms-4 mt-2 list-disc space-y-2">
                    {work.responsibilities.map((item, index) => (
                        <li key={index} className="text-sm/relaxed text-pretty">
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1">
                    {work.skills.map((item, index) => (
                        <Badge key={index} variant="outline" className="text-muted-foreground bg-muted">
                            {item}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}
