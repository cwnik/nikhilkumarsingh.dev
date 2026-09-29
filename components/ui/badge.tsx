import type { ComponentProps } from "react";
import { cn } from "cn";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

const variants = cva(
    [
        "inline-flex shrink-0 items-center justify-center gap-1 rounded-full bg-clip-padding px-3 py-1 text-xs font-medium whitespace-nowrap transition-all",
        "focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
    ],
    {
        variants: {
            variant: {
                primary:
                    "from-primary to-primary/80 text-primary-foreground hover:bg-primary focus-visible:ring-primary bg-linear-to-br",
                secondary:
                    "from-secondary to-background/80 text-secondary-foreground hover:bg-secondary focus-visible:ring-secondary bg-linear-to-br",
                destructive:
                    "from-destructive to-destructive/80 text-destructive-foreground hover:bg-destructive focus-visible:ring-destructive bg-linear-to-br",
                outline:
                    "bg-background text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-secondary border"
            }
        },
        defaultVariants: { variant: "primary" }
    }
);

type BadgeProps = ComponentProps<"span"> & VariantProps<typeof variants> & { asChild?: boolean };

export function Badge({ className, variant = "primary", asChild = false, ...props }: BadgeProps) {
    const Component = asChild ? Slot.Root : "span";

    return (
        <Component
            data-slot="badge"
            data-variant={variant}
            className={cn(variants({ variant }), className)}
            {...props}
        />
    );
}
