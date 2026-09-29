import { IconClockCheck, IconCode, IconMail, IconMapPin, IconPhoneCall } from "@tabler/icons-react";

import { AUTHOR } from "./author";

export const AUTHOR_OVERVIEW = [
    { icon: IconCode, type: "designation", label: `${AUTHOR.currentDesignation} at ${AUTHOR.currentCompany}` },
    { icon: IconMail, type: "email", label: AUTHOR.emailAddress, href: `mailto:${AUTHOR.emailAddress}` },
    {
        icon: IconPhoneCall,
        type: "phone",
        label: `${AUTHOR.countryCode} ${AUTHOR.phoneNumber}`,
        href: `tel:${AUTHOR.countryCode}${AUTHOR.phoneNumber}`
    },
    { icon: IconMapPin, type: "location", label: "Jaipur, Rajasthan, India" },
    { icon: IconClockCheck, type: "timezone" }
] as const;

export type AuthorOverview = (typeof AUTHOR_OVERVIEW)[number];
