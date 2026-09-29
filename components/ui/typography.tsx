import type { ComponentProps } from "react";
import { cn } from "cn";

function Heading({ className, ...props }: ComponentProps<"h1">) {
    return (
        <h1
            data-slot="heading"
            className={cn("scroll-m-20 text-2xl/tight font-bold tracking-tight", className)}
            {...props}
        />
    );
}

function Title({ className, ...props }: ComponentProps<"h2">) {
    return (
        <h2
            data-slot="heading"
            className={cn("scroll-m-20 text-lg/tight font-semibold tracking-tight", className)}
            {...props}
        />
    );
}

function Lead({ className, ...props }: ComponentProps<"p">) {
    return <p data-slot="lead" className={cn("text-muted-foreground text-base/relaxed", className)} {...props} />;
}

function Paragraph({ className, ...props }: ComponentProps<"p">) {
    return <p data-slot="paragraph" className={cn("text-sm/relaxed not-first:mt-4", className)} {...props} />;
}

function Small({ className, ...props }: ComponentProps<"small">) {
    return <small data-slot="small" className={cn("text-xs/snug font-medium", className)} {...props} />;
}

export { Heading, Title, Paragraph, Lead, Small };
