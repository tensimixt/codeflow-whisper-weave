import { ThemeToggle } from '@/components/ui/theme-toggle'

'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Github, ArrowRight, Sparkles } from 'lucide-react'
import { CodeSnippet } from '@/components/effects/CodeSnippet'

export function LandingHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Hero Content */}
        <div className="flow-entrance">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-button text-sm text-flow-accent mb-8">
            <Sparkles className="w-4 h-4" />
            Where Code Meets Flow State
          </div>
          
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="gradient-text">codeflo</span>
            <span className="text-flow-accent">.lol</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-dark-text-secondary dark:text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Transform your coding workflow with AI-powered conversations.
          </p>
          
          <p className="text-lg md:text-xl text-dark-text-secondary dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Where developers don't just code, they <span className="text-flow-primary font-semibold">flow</span>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-flow-primary hover:bg-flow-primary/90 text-white px-8 py-4 text-lg rounded-xl breathe group"
            >
              <Github className="w-5 h-5 mr-2" />
              Start Vibing with GitHub
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="glass-button border-flow-accent/30 text-flow-accent hover:text-white px-8 py-4 text-lg rounded-xl"
            >
              Watch the Magic
            </Button>
          </div>
        </div>
        
        {/* Code Preview Section */}
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card dark:bg-gray-900/60 dark:border-gray-700/50">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-flow-error"></div>
              <div className="w-3 h-3 rounded-full bg-flow-warning"></div>
              <div className="w-3 h-3 rounded-full bg-flow-success"></div>
              <span className="text-dark-text-secondary dark:text-gray-400 text-sm ml-2">
                codeflo.chat
              </span>
            </div>
            
            <div className="space-y-4">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="glass bg-flow-primary/20 dark:bg-flow-primary/30 rounded-2xl px-4 py-3 max-w-md">
                  <p className="text-dark-text dark:text-white">
                    "Add a dark mode toggle to my Next.js app"
                  </p>
                </div>
              </div>
              
              {/* AI Response */}
              <div className="flex justify-start">
                <div className="glass bg-dark-surface dark:bg-gray-800/70 rounded-2xl px-4 py-3 max-w-2xl">
                  <p className="text-dark-text dark:text-gray-200 mb-3">
                    I'll analyze your app structure and add a beautiful dark mode toggle. Here's what I'll do:
                  </p>
                  <CodeSnippet 
                    code={`// components/ThemeToggle.tsx
export function ThemeToggle() {
  const [theme, setTheme] = useState('dark')
  
  return (
    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flow-glow rounded-full p-2"
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  )
}`}
                    language="typescript"
                  />
                  <Button 
                    size="sm" 
                    className="mt-3 bg-flow-accent hover:bg-flow-accent/90 text-dark-bg dark:text-white"
                  >
                    Apply Changes ✨
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
