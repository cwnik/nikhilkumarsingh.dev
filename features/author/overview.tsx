import { Container } from "@/components/ui/container";

import { AUTHOR_OVERVIEW } from "./constants/overview";
import { AuthorOverviewItem } from "./overview-item";

export function AuthorOverview() {
    return (
        <section className="border-b border-dashed">
            <Container className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
                {AUTHOR_OVERVIEW.map((item, index) => (
                    <AuthorOverviewItem key={index} overview={item} />
                ))}
            </Container>
        </section>
    );
}
