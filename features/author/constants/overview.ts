import { IconClockCheck, IconCode, IconMail, IconMapPin, IconPhoneCall } from "@tabler/icons-react";

export const AUTHOR_OVERVIEW = [
    { icon: IconCode, type: "designation", label: "Full Stack MERN Developer  at Infonic Solutions" },
    {
        icon: IconMail,
        type: "email",
        label: "connect.nikhilkumarsingh@gmail.com",
        href: "mailto:connect.nikhilkumarsingh@gmail.com"
    },
    { icon: IconPhoneCall, type: "phone", label: "(+91) 93581 55796", href: "tel:+919358155796" },
    { icon: IconMapPin, type: "location", label: "Jaipur, Rajasthan, India" },
    { icon: IconClockCheck, type: "timezone" }
] as const;

export type AuthorOverview = (typeof AUTHOR_OVERVIEW)[number];
