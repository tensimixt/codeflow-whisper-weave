
'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Senior Frontend Developer',
    company: 'Vercel',
    avatar: '👩‍💻',
    content: 'codeflo.lol completely changed how I approach coding. It\'s like having a senior developer who never gets tired of helping.',
    rating: 5
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'Full Stack Engineer',
    company: 'Stripe',
    avatar: '👨‍💻',
    content: 'The AI understands context better than any tool I\'ve used. It\'s not just autocomplete - it\'s true pair programming.',
    rating: 5
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'Tech Lead',
    company: 'Shopify',
    avatar: '👩‍🚀',
    content: 'My team\'s productivity increased 3x since we started using codeflo. The flow state is real.',
    rating: 5
  },
  {
    id: 4,
    name: 'Alex Thompson',
    role: 'Backend Developer',
    company: 'GitHub',
    avatar: '👨‍🔬',
    content: 'I was skeptical about AI coding tools, but codeflo.lol proved me wrong. It actually makes coding fun again.',
    rating: 5
  }
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isAnimating])

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const goToPrev = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
          Developers Love the Flow
        </h2>
        <p className="text-xl text-dark-text-secondary">
          Join thousands of developers already in their flow state
        </p>
      </div>

      <div className="relative">
        <div className="glass-card text-center min-h-[300px] flex flex-col justify-center">
          <div className="mb-6">
            <div className="text-6xl mb-4">{currentTestimonial.avatar}</div>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-flow-warning text-flow-warning" />
              ))}
            </div>
          </div>
          
          <blockquote className="text-xl md:text-2xl text-dark-text mb-8 italic leading-relaxed">
            "{currentTestimonial.content}"
          </blockquote>
          
          <div>
            <div className="font-semibold text-flow-primary text-lg">
              {currentTestimonial.name}
            </div>
            <div className="text-dark-text-secondary">
              {currentTestimonial.role} at {currentTestimonial.company}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={goToPrev}
            className="glass-button border-flow-primary/30 text-flow-primary"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true)
                  setCurrentIndex(index)
                  setTimeout(() => setIsAnimating(false), 500)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-flow-primary scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={goToNext}
            className="glass-button border-flow-primary/30 text-flow-primary"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
