
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'codeflo.lol - The Ultimate Vibe Coding Experience',
  description: 'Transform your coding workflow with AI-powered conversations. Where developers don\'t just code, they flow.',
  keywords: ['coding', 'AI', 'developer tools', 'GitHub', 'flow state', 'productivity'],
  authors: [{ name: 'codeflo team' }],
  openGraph: {
    title: 'codeflo.lol - The Ultimate Vibe Coding Experience',
    description: 'Transform your coding workflow with AI-powered conversations',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'codeflo.lol',
    description: 'The Ultimate Vibe Coding Experience',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} style={{ backgroundColor: '#000000' }}>
      <body className="min-h-screen text-dark-text antialiased overflow-x-hidden" style={{ backgroundColor: '#000000', background: 'linear-gradient(135deg, #000000 0%, #0a0a0f 50%, #111118 100%)' }}>
        <div className="relative min-h-screen" style={{ backgroundColor: 'transparent' }}>
          {/* Background gradient overlay */}
          <div className="fixed inset-0 bg-gradient-to-br from-flow-primary/5 via-transparent to-flow-secondary/5 pointer-events-none" />
          
          {/* Animated background pattern */}
          <div className="fixed inset-0 opacity-30 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]" />
          </div>

          <main className="relative z-10">
            {children}
          </main>
        </div>
        
        <Toaster />
        <Sonner />
      </body>
    </html>
  )
}
