import { Introduction } from "@/features/author/introduction";
import { AuthorOverview } from "@/features/author/overview";

export default function LandingPage() {
    return (
        <main className="flex grow flex-col">
            <Introduction />
            <AuthorOverview />
        </main>
    );
}
