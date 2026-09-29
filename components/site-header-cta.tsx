import Image from "next/image";

import type { StaticImport } from "next/dist/shared/lib/get-img-props";

import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type SiteHeaderCTA = { href: string; imgSrc: string | StaticImport; label: string };

export function SiteHeaderCTA({ href, imgSrc, label }: SiteHeaderCTA) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button asChild variant="ghost" size="icon">
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <Image src={imgSrc} alt="Repository" width={32} height={32} className="size-4 object-contain" />
                        <span className="sr-only">{label}</span>
                    </a>
                </Button>
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
        </Tooltip>
    );
}
