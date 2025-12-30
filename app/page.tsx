import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { FeaturesSection } from "@/components/features-section"
import { PlansSection } from "@/components/plans-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CoverageSection } from "@/components/coverage-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsappButton } from "@/components/whatsapp-button"
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
            {/* <PlansSection /> */}
            {/* <TestimonialsSection /> */}
            {/* <ContactSection /> */}
            <Footer />
        </main>
    )
}
