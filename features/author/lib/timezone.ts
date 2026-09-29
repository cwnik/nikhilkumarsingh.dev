const REFERENCE_OFFSET_MINUTES = 330;

export function getTimezoneDifference(date = new Date()) {
    const offset = -date.getTimezoneOffset();
    const difference = offset - REFERENCE_OFFSET_MINUTES;

    const referenceTime = new Date(date.getTime() + REFERENCE_OFFSET_MINUTES * 60_000);

    const hours = difference / 60;
    const isAhead = difference > 0;
    const isBehind = difference < 0;

    return {
        time: referenceTime,
        hours,

        isSameTimezone: difference === 0,
        isAhead,
        isBehind,

        text: isAhead ? `// ${hours}h ahead` : isBehind ? `${Math.abs(hours)}h behind` : ""
    };
}
