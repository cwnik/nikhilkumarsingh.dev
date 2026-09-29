export function getGreeting(hour: number) {
    if (hour >= 4 && hour <= 11) return "Good morning";
    if (hour >= 12 && hour <= 17) return "Good afternoon";
    if (hour >= 18 && hour <= 21) return "Good evening";
    return "Hello there";
}
