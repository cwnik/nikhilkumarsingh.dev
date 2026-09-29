"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const ANIMATION_DURATION = 80;

export function Typewriter({ items }: { items: string[] }) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (!items.length) return;

        const item = items[index];

        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting && text.length < item.length) {
            timeout = setTimeout(() => {
                setText(item.slice(0, text.length + 1));
            }, ANIMATION_DURATION);
        } else if (!isDeleting && text.length === item.length) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, ANIMATION_DURATION * 20);
        } else if (isDeleting && text.length > 0) {
            timeout = setTimeout(() => {
                setText(item.slice(0, text.length - 1));
            }, ANIMATION_DURATION / 2);
        } else {
            timeout = setTimeout(() => {
                setIndex((prev) => (prev + 1) % items.length);
                setIsDeleting(false);
            }, ANIMATION_DURATION);
        }

        return () => clearTimeout(timeout);
    }, [items, index, text, isDeleting]);

    if (!items.length) return null;

    return (
        <span className="inline-flex min-h-9 items-center gap-0.5">
            <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-sm/relaxed font-medium tracking-wider"
            >
                {text}
            </motion.span>
            <motion.span
                aria-hidden="true"
                className="inline-block h-4 w-0.5 bg-current"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            />
        </span>
    );
}
