import type { ComponentProps } from "react";
import { cn } from "cn";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

const variants = cva(
    [
        "inline-flex shrink-0 items-center justify-center rounded-sm bg-clip-padding text-sm font-medium whitespace-nowrap transition-all",
        "focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
    ],
    {
        variants: {
            variant: {
                primary:
                    "from-primary to-primary/80 text-primary-foreground hover:bg-primary focus-visible:ring-primary inset-shadow-highlighted bg-linear-to-br",
                secondary:
                    "from-secondary to-background/80 text-secondary-foreground hover:bg-secondary focus-visible:ring-secondary inset-shadow-dull bg-linear-to-br",
                destructive:
                    "from-destructive to-destructive/80 text-destructive-foreground hover:bg-destructive focus-visible:ring-destructive inset-shadow-highlighted bg-linear-to-br",
                outline:
                    "bg-background text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-secondary border",
                ghost: "text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-secondary bg-transparent"
            },
            size: { small: "h-8 gap-1 px-3 py-2", medium: "h-9 gap-1.5 px-4 py-2.5", icon: "size-8" }
        },
        defaultVariants: { variant: "primary", size: "medium" }
    }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof variants> & { asChild?: boolean };

export function Button({ className, variant = "primary", size = "medium", asChild = false, ...props }: ButtonProps) {
    const Component = asChild ? Slot.Root : "button";

    return (
        <Component
            data-slot="button"
            data-variant={variant}
            data-size={size}
            className={cn(variants({ variant, size }), className)}
            {...props}
        />
    );
}
