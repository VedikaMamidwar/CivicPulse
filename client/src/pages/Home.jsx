import Hero from "../components/home/Hero";
import Statistics from "../components/home/Statistics";
import AIInsights from "../components/home/AIInsights";
import NearbyIssues from "../components/home/NearbyIssues";
import TrendingProblems from "../components/home/TrendingProblems";

function Home() {
    return (
        <main>
            <Hero />
            <Statistics />
            <AIInsights />
            <NearbyIssues />
            <TrendingProblems />
        </main>
    );
}

export default Home;