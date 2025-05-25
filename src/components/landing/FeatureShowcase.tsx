
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MessageSquare, GitBranch, Sparkles, Zap, Eye, Users } from 'lucide-react'

const features = [
  {
    id: 'chat',
    icon: MessageSquare,
    title: 'Natural Conversations',
    description: 'Talk to your code like you would to a pair programming partner',
    demo: 'Chat Demo',
    color: 'flow-primary'
  },
  {
    id: 'git',
    icon: GitBranch,
    title: 'Seamless Git Integration',
    description: 'AI commits, branches, and manages your repository automatically',
    demo: 'Git Demo',
    color: 'flow-secondary'
  },
  {
    id: 'ai',
    icon: Sparkles,
    title: 'Context-Aware AI',
    description: 'Understands your entire codebase, not just single files',
    demo: 'AI Demo',
    color: 'flow-accent'
  },
  {
    id: 'speed',
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimistic updates and background syncing for instant feedback',
    demo: 'Speed Demo',
    color: 'flow-success'
  },
  {
    id: 'preview',
    icon: Eye,
    title: 'Live Previews',
    description: 'See changes in real-time before applying them',
    demo: 'Preview Demo',
    color: 'flow-warning'
  },
  {
    id: 'collab',
    icon: Users,
    title: 'Team Flows',
    description: 'Collaborate with your team and AI simultaneously',
    demo: 'Collab Demo',
    color: 'flow-error'
  }
]

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState('chat')

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
          Features That Flow
        </h2>
        <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
          Every feature designed to enhance your natural coding rhythm
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon
          const isActive = activeFeature === feature.id
          
          return (
            <div
              key={feature.id}
              className={`glass-card cursor-pointer transition-all duration-300 ${
                isActive ? 'flow-glow scale-105' : 'hover:scale-102'
              }`}
              onClick={() => setActiveFeature(feature.id)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-${feature.color}/20`}>
                  <Icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-dark-text">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-dark-text-secondary mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <Button
                variant="outline"
                size="sm"
                className={`glass-button border-${feature.color}/30 text-${feature.color} hover:text-white`}
              >
                {feature.demo}
              </Button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
