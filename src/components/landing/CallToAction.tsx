
'use client'

import { Button } from '@/components/ui/button'
import { Github, ArrowRight, Sparkles } from 'lucide-react'

export function CallToAction() {
  const handleGitHubAuth = () => {
    // This will be implemented when we add Supabase integration
    console.log('GitHub auth clicked - will implement with Supabase')
  }

  return (
    <div className="max-w-4xl mx-auto px-4 text-center">
      <div className="glass-card">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 glass-button text-sm text-flow-accent mb-6">
            <Sparkles className="w-4 h-4" />
            Join the Flow Revolution
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Ready to Flow?
          </h2>
          
          <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your coding experience in seconds. Connect your GitHub and start having natural conversations with your code.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            size="lg"
            onClick={handleGitHubAuth}
            className="bg-flow-primary hover:bg-flow-primary/90 text-white px-8 py-4 text-lg rounded-xl breathe group"
          >
            <Github className="w-5 h-5 mr-2" />
            Enter the Flow
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="glass-button border-flow-accent/30 text-flow-accent hover:text-white px-8 py-4 text-lg rounded-xl"
          >
            Watch Demo
          </Button>
        </div>

        <div className="text-sm text-dark-text-secondary">
          <p>🔒 Secure GitHub OAuth • ⚡ Instant setup • 🌊 Unlimited flow</p>
        </div>
      </div>
    </div>
  )
}
