
import { LandingHero } from '@/components/landing/LandingHero'
import { ParticleField } from '@/components/effects/ParticleField'
import { FeatureShowcase } from '@/components/landing/FeatureShowcase'
import { TestimonialCarousel } from '@/components/landing/TestimonialCarousel'
import { CallToAction } from '@/components/landing/CallToAction'

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Animated particle background */}
      <ParticleField />
      
      {/* Hero Section */}
      <section className="relative z-10">
        <LandingHero />
      </section>
      
      {/* Feature Showcase */}
      <section className="relative z-10 py-20">
        <FeatureShowcase />
      </section>
      
      {/* Testimonials */}
      <section className="relative z-10 py-20">
        <TestimonialCarousel />
      </section>
      
      {/* Final CTA */}
      <section className="relative z-10 py-20">
        <CallToAction />
      </section>
    </div>
  )
}
