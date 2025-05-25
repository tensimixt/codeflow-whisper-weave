
const Index = () => {
  return (
    <div className="relative min-h-screen bg-dark-void text-dark-text" style={{ 
      backgroundColor: '#000000',
      background: 'linear-gradient(135deg, #000000 0%, #0a0a0f 50%, #111118 100%)'
    }}>
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

export default Index
