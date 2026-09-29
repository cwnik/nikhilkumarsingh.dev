import { IconBadge } from "@/components/ui/icon-badge";
import { IconSchool } from "@tabler/icons-react";
import { Paragraph, Small } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";

import type { Education } from "./constants/education";

export function EducationCard({ education }: { education: Education }) {
    return (
        <div className="flex gap-2">
            <div className="flex shrink-0 flex-col items-center gap-0.5 pb-3">
                <IconBadge>
                    <IconSchool />
                </IconBadge>
                <div className="ms-4 w-4 grow rounded-bl-md border-s border-b" />
            </div>
            <div className="grow">
                <div className="flex items-center justify-between">
                    <Paragraph className="font-semibold">{education.institution}</Paragraph>
                    <Small className="text-muted-foreground">{education.location}</Small>
                </div>
                <div className="text-muted-foreground flex justify-between max-sm:flex-col sm:items-center">
                    <Paragraph className="font-medium">{education.degree}</Paragraph>
                    <Small>{education.duration}</Small>
                </div>
                <ul className="ms-4 mt-2 list-disc space-y-2">
                    {education.description.map((item, index) => (
                        <li key={index} className="text-sm/relaxed text-pretty">
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1">
                    {education.badges.map((item, index) => (
                        <Badge key={index} variant="outline" className="text-muted-foreground bg-muted">
                            {item}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}
