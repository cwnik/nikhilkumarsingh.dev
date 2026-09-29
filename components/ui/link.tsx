import NextLink from "next/link";

import type { ComponentProps } from "react";
import { cn } from "cn";

function Link({ className, ...props }: ComponentProps<typeof NextLink>) {
    return (
        <NextLink
            data-slot="link"
            className={cn(
                "text-foreground hover:text-muted-foreground text-sm font-semibold underline-offset-4 transition-colors",
                "focus-visible:underline focus-visible:outline-none",
                className
            )}
            {...props}
        />
    );
}

function ExternalLink({ target, rel, className, ...props }: ComponentProps<"a">) {
    const isBlankTarget = target && target === "_blank";

    return (
        <a
            data-slot="external-link"
            target={target}
            rel={isBlankTarget ? "noopener noreferrer" : rel}
            className={cn(
                "text-foreground hover:text-muted-foreground text-sm font-semibold underline-offset-4 transition-colors",
                "focus-visible:underline focus-visible:outline-none",
                className
            )}
            {...props}
        />
    );
}

export { Link, ExternalLink };
