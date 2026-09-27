import Image from "next/image";
import Link from "next/link";

import { cn } from "cn";

import { GitHubInvertocat, ProfilePictureSmall } from "@/assets";
import { SOCIAL_LINKS } from "@/constants/social-links";
import { SOURCE_CODE_GITHUB_REPOSITORY, SOURCE_CODE_GITHUB_REPOSITORY_URL } from "@/constants/site";

import { Container } from "./ui/container";
import { Button } from "./ui/button";

export function SiteHeader() {
    return (
        <header className="bg-background text-foreground supports-backdrop-filter:bg-background/80 sticky top-0 z-50 backdrop-blur-xs">
            <Container className="flex items-center justify-between gap-2">
                <div className="flex grow items-center gap-2">
                    <Link
                        href="/"
                        className={cn(
                            "ring-secondary size-8 shrink-0 rounded-full ring-2 transition-shadow",
                            "focus-visible:ring-primary focus-visible:ring-offset-background focus-visible:ring-offset-1"
                        )}
                    >
                        <Image
                            src={ProfilePictureSmall}
                            alt={SOCIAL_LINKS.gitHub.handle}
                            loading="eager"
                            width={64}
                            height={64}
                            className="size-full object-contain"
                        />
                    </Link>
                    <a
                        href={SOCIAL_LINKS.gitHub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "text-foreground hover:text-muted-foreground text-sm font-semibold underline-offset-4 transition-colors",
                            "focus-visible:underline focus-visible:outline-none"
                        )}
                    >
                        @{SOCIAL_LINKS.gitHub.handle}
                    </a>
                </div>
                <Button asChild variant="ghost" size="icon" className="rounded-full">
                    <a href={SOURCE_CODE_GITHUB_REPOSITORY_URL} target="_blank" rel="noopener noreferrer">
                        <Image
                            src={GitHubInvertocat}
                            alt="Repository"
                            width={32}
                            height={32}
                            className="size-4 object-contain"
                        />
                        <span className="sr-only">{SOURCE_CODE_GITHUB_REPOSITORY}</span>
                    </a>
                </Button>
            </Container>
        </header>
    );
}
