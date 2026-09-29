"use client";

import { useEffect, useRef, type ComponentProps } from "react";
import { animate, motion, useMotionValue } from "motion/react";
import { cn } from "cn";

type OmitProps = Omit<ComponentProps<typeof motion.div>, "style" | "onHoverStart" | "onHoverEnd">;

type InfiniteCarouselProps = OmitProps & { duration?: number; reverse?: boolean };

function InfiniteCarousel({ className, duration = 20, reverse = false, ...props }: InfiniteCarouselProps) {
    const x = useMotionValue(reverse ? "-50%" : "0%");
    const ref = useRef<ReturnType<typeof animate> | null>(null);

    useEffect(() => {
        const keyframes = reverse ? ["-50%", "0%"] : ["0%", "-50%"];

        ref.current = animate(x, keyframes, { duration, ease: "linear", repeat: Infinity, repeatType: "loop" });

        return () => {
            if (ref.current) ref.current.stop();
        };
    }, [reverse, duration, x]);

    function onHoverStart() {
        if (ref.current) ref.current.pause();
    }

    function onHoverEnd() {
        if (ref.current) ref.current.play();
    }

    return (
        <motion.div
            data-slot="infinite-carousel"
            data-duration={duration}
            data-reverse={reverse}
            className={cn("flex w-max", className)}
            style={{ x }}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            {...props}
        />
    );
}

function InfiniteCarouselWrap({ "aria-hidden": ariaHidden, className, ...props }: ComponentProps<"div">) {
    return (
        <>
            <div
                className={cn("flex shrink-0 items-center gap-2 pr-2", className)}
                aria-hidden={ariaHidden}
                {...props}
            />
            <div aria-hidden="true" className={cn("flex shrink-0 items-center gap-2 pr-2", className)} {...props} />
        </>
    );
}

export { InfiniteCarousel, InfiniteCarouselWrap };
