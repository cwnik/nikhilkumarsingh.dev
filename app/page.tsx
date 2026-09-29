import { Introduction } from "@/features/author/introduction";
import { AuthorOverview } from "@/features/author/overview";
import { ProfessionalSummary } from "@/features/author/professional-summary";

export default function LandingPage() {
    return (
        <main className="flex grow flex-col">
            <Introduction />
            <AuthorOverview />
            <ProfessionalSummary />
        </main>
    );
}
