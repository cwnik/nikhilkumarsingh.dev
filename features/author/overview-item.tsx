import { cn } from "cn";
import { format } from "date-fns";

import { Paragraph, Small } from "@/components/ui/typography";
import { ExternalLink } from "@/components/ui/link";

import type { AuthorOverview } from "./constants/overview";
import { getTimezoneDifference } from "./lib/timezone";

export function AuthorOverviewItem({ overview }: { overview: AuthorOverview }) {
    const isTimezoneField = overview.type === "timezone";
    const isExternalLink = overview.type === "email" || overview.type === "phone";

    return (
        <div className={cn("flex items-center gap-4", overview.type === "designation" && "sm:col-span-2")}>
            <div className="bg-muted ring-border/50 inline-flex size-6 items-center justify-center rounded-md border p-px ring-1 ring-offset-1">
                <overview.icon className="text-muted-foreground pointer-events-none size-4" />
            </div>
            <div className="flex grow items-center justify-between">
                <Paragraph className="mt-0! font-medium">
                    {isExternalLink ? (
                        <ExternalLink href={overview.href} className="hover:underline">
                            {overview.label}
                        </ExternalLink>
                    ) : isTimezoneField ? (
                        format(getTimezoneDifference().time, "hh:mm a")
                    ) : (
                        overview.label
                    )}
                </Paragraph>
                {isTimezoneField && (
                    <Small className="text-muted-foreground font-normal">{getTimezoneDifference().text}</Small>
                )}
            </div>
        </div>
    );
}
