import { afterEach, describe, expect, it, vi } from "vitest";

import { getTimezoneDifference } from "./timezone";

describe("getTimezoneDifference", () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("returns the same timezone when the user is in UTC+05:30", () => {
        vi.spyOn(Date.prototype, "getTimezoneOffset").mockReturnValue(-330);

        const date = new Date("2026-09-29T10:00:00.000Z");
        const result = getTimezoneDifference(date);

        expect(result).toEqual({
            time: new Date("2026-09-29T15:30:00.000Z"),
            hours: 0,
            isSameTimezone: true,
            isAhead: false,
            isBehind: false,
            text: ""
        });
    });

    it("returns ahead when the user is ahead of UTC+05:30", () => {
        vi.spyOn(Date.prototype, "getTimezoneOffset").mockReturnValue(-480);

        const date = new Date("2026-09-29T10:00:00.000Z");
        const result = getTimezoneDifference(date);

        expect(result).toEqual({
            time: new Date("2026-09-29T15:30:00.000Z"),
            hours: 2.5,
            isSameTimezone: false,
            isAhead: true,
            isBehind: false,
            text: "// 2.5h ahead"
        });
    });

    it("returns behind when the user is in UTC+04:00", () => {
        vi.spyOn(Date.prototype, "getTimezoneOffset").mockReturnValue(-240);

        const date = new Date("2026-09-29T10:00:00.000Z");
        const result = getTimezoneDifference(date);

        expect(result).toEqual({
            time: new Date("2026-09-29T15:30:00.000Z"),
            hours: -1.5,
            isSameTimezone: false,
            isAhead: false,
            isBehind: true,
            text: "1.5h behind"
        });
    });

    it("calculates the correct offset difference", () => {
        vi.spyOn(Date.prototype, "getTimezoneOffset").mockReturnValue(-360);

        const result = getTimezoneDifference(new Date("2026-09-29T10:00:00.000Z"));

        expect(result.hours).toBe(0.5);
        expect(result.isAhead).toBe(true);
        expect(result.isBehind).toBe(false);
        expect(result.isSameTimezone).toBe(false);
        expect(result.text).toBe("// 0.5h ahead");
    });
});
