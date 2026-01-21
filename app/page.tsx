import Header from "@/components/landing/header"
import HeroSection from "@/components/landing/hero-section"
import FeaturesSection from "@/components/landing/features-section"
import HowItWorksSection from "@/components/landing/how-it-works-section"
import SecuritySection from "@/components/landing/security-section"
// import TestimonialsSection from "@/components/landing/testimonials-section"
import FooterSection from "@/components/landing/footer-section"
import WaitlistModal from "@/components/landing/waitlist-modal"

export const metadata = {
  title: "Zamani - Fast Cross-Border Payments",
  description: "The easiest way for Africans to save in USD, earn US Treasury yields, and invest back into Africa.",
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SecuritySection />
      {/* <TestimonialsSection /> */}
      <FooterSection />
      <WaitlistModal />
    </div>
  )
}
