
'use client'

import { useState, useEffect } from 'react'

interface CodeSnippetProps {
  code: string
  language?: string
}

export function CodeSnippet({ code, language = 'typescript' }: CodeSnippetProps) {
  const [displayedCode, setDisplayedCode] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < code.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(code.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 20) // Typing speed

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, code])

  return (
    <div className="code-block text-sm">
      <pre className="overflow-x-auto">
        <code className="text-flow-accent">
          {displayedCode}
          {currentIndex < code.length && (
            <span className="animate-pulse text-flow-primary">|</span>
          )}
        </code>
      </pre>
    </div>
  )
}
