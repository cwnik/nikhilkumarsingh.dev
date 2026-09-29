import { Eduction } from "@/features/author/education";
import { Introduction } from "@/features/author/introduction";
import { AuthorOverview } from "@/features/author/overview";
import { ProfessionalSummary } from "@/features/author/professional-summary";
import { Skills } from "@/features/author/skills";
import { Work } from "@/features/author/work";

export default function LandingPage() {
    return (
        <main className="flex grow flex-col">
            <Introduction />
            <AuthorOverview />
            <Skills />
            <ProfessionalSummary />
            <Work />
            <Eduction />
        </main>
    );
}
