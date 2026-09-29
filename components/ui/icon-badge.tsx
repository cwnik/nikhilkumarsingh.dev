import type { ComponentProps } from "react";
import { cn } from "cn";

export function IconBadge({ className, ...props }: ComponentProps<"div">) {
    return (
        <div
            data-slot="icon-card"
            className={cn(
                "bg-muted ring-border/50 text-muted-foreground inline-flex size-6 items-center justify-center rounded-md border p-px ring-1 ring-offset-1",
                "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
                className
            )}
            {...props}
        />
    );
}
