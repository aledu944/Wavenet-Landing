import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { WhatsappButton } from "@/components/whatsapp-button"
import { ServicesSection } from "@/components/services-section"
import { FeaturesSection } from "@/components/features-section"
import { CoverageSection } from "@/components/coverage-section"
import { ComparisonSection } from "@/components/comparasion-section"

export default function Home() {
    return (
        <main className="min-h-screen relative">
            <WhatsappButton/>
            <Header />
            <HeroSection />
            <ServicesSection />
            <FeaturesSection />
            <ComparisonSection/>
            <CoverageSection />
            <Footer />
        </main>
    )
}
