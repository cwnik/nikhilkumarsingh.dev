"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "cn";
import { IconBulb, IconCode, IconSelector } from "@tabler/icons-react";

import { IconBadge } from "@/components/ui/icon-badge";
import { Paragraph, Small } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";

import type { Work } from "./constants/work";

export function WorkCard({ work, isLast }: { work: Work; isLast?: boolean }) {
    const [isOpen, setIsOpen] = useState(false);

    const Icon = work.type === "Internship" ? IconBulb : IconCode;

    return (
        <div className="flex gap-2">
            <div className={cn("flex shrink-0 flex-col items-center gap-0.5", isLast && "pb-3")}>
                <IconBadge>
                    <Icon />
                </IconBadge>
                <div className={cn("ms-4 w-4 grow border-s", isLast && "rounded-bl-md border-b")} />
            </div>
            <div className={cn("grow pb-4", isLast && "pb-0")}>
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-expanded={isOpen}
                    className="hover:bg-muted flex w-full items-start rounded-sm p-1 text-left transition-colors"
                >
                    <span className="block grow">
                        <Paragraph className="leading-none font-semibold">{work.designation}</Paragraph>
                        <Small className="text-muted-foreground">{work.duration}</Small>
                    </span>
                    <span className="ms-auto inline-flex items-center gap-2">
                        <Small className="text-muted-foreground">{work.type}</Small>
                        <IconSelector className="text-muted-foreground size-4" />
                    </span>
                </button>
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                                height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
                                opacity: { duration: 0.2 }
                            }}
                            className="overflow-hidden"
                        >
                            <ul className="ms-4 mt-2 list-disc space-y-2">
                                {work.responsibilities.map((item, index) => (
                                    <li key={index} className="text-sm/relaxed text-pretty">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className={cn("mt-1 flex flex-wrap gap-1", isOpen && "mt-4")}>
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
