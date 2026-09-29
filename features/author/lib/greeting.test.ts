import { afterEach, describe, expect, it, vi } from "vitest";

import { getGreeting } from "./greeting";

describe("getGreeting", () => {
    afterEach(() => {
        vi.useRealTimers();
    });

    it("returns Good morning in the morning", () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 0, 1, 4));

        expect(getGreeting(new Date().getHours())).toBe("Good morning");
    });

    it("returns Good afternoon in the afternoon", () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 0, 1, 12));

        expect(getGreeting(new Date().getHours())).toBe("Good afternoon");
    });

    it("returns Good evening in the evening", () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 0, 1, 18));

        expect(getGreeting(new Date().getHours())).toBe("Good evening");
    });

    it('returns "Hello there" at night', () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 0, 1, 22));

        expect(getGreeting(new Date().getHours())).toBe("Hello there");
    });
});
