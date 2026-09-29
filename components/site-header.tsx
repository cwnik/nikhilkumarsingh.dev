import Image from "next/image";
import NextLink from "next/link";

import { GitHubInvertocat, LinkedIn, ProfilePictureSmall } from "@/assets";
import { SOCIAL_LINKS } from "@/constants/social-links";
import { SOURCE_CODE_GITHUB_REPOSITORY, SOURCE_CODE_GITHUB_REPOSITORY_URL } from "@/constants/site";

import { Container } from "./ui/container";
import { SiteHeaderCTA } from "./site-header-cta";
import { ExternalLink } from "./ui/link";
import { Button } from "./ui/button";

export function SiteHeader() {
    return (
        <header className="bg-background text-foreground supports-backdrop-filter:bg-background/80 sticky top-0 z-50 backdrop-blur-xs">
            <Container className="flex items-center justify-between gap-2">
                <div className="flex grow items-center gap-2">
                    <Button asChild size="icon" className="rounded-full">
                        <NextLink href="/">
                            <Image
                                src={ProfilePictureSmall}
                                alt={SOCIAL_LINKS.gitHub.handle}
                                loading="eager"
                                width={64}
                                height={64}
                                className="size-full object-contain"
                            />
                        </NextLink>
                    </Button>
                    <ExternalLink href={SOCIAL_LINKS.gitHub.url} target="_blank" rel="noopener noreferrer">
                        @{SOCIAL_LINKS.gitHub.handle}
                    </ExternalLink>
                </div>
                <SiteHeaderCTA
                    href={SOCIAL_LINKS.linkedIn.url}
                    imgSrc={LinkedIn}
                    label={SOCIAL_LINKS.linkedIn.handle}
                />
                <SiteHeaderCTA
                    href={SOURCE_CODE_GITHUB_REPOSITORY_URL}
                    imgSrc={GitHubInvertocat}
                    label={SOURCE_CODE_GITHUB_REPOSITORY}
                />
            </Container>
        </header>
    );
}
