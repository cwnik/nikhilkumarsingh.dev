import type { ComponentProps } from "react";
import { Tooltip as TooltipPrimitive } from "radix-ui";
import { cn } from "cn";

function Tooltip({ ...props }: ComponentProps<typeof TooltipPrimitive.Root>) {
    return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

function TooltipTrigger({ ...props }: ComponentProps<typeof TooltipPrimitive.Trigger>) {
    return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({ className, children, ...props }: ComponentProps<typeof TooltipPrimitive.Content>) {
    return (
        <TooltipPrimitive.Portal>
            <TooltipPrimitive.Content
                data-slot="tooltip-content"
                className={cn(
                    "bg-foreground text-background z-50 inline-flex w-fit max-w-sm items-center gap-1 rounded-md px-3 py-2 text-xs font-medium",
                    "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
                    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                    "origin-(--radix-tooltip-content-transform-origin)",
                    className
                )}
                {...props}
            >
                {children}
                <TooltipPrimitive.Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-xs" />
            </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
    );
}

export { Tooltip, TooltipTrigger, TooltipContent };
