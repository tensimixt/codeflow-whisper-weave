import { useState, useEffect } from 'react'
import { useTheme } from '@/lib/theme-provider'

interface CodeSnippetProps {
  code: string
  language?: string
}

export function CodeSnippet({ code, language = 'typescript' }: CodeSnippetProps) {
  const [displayedCode, setDisplayedCode] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const { theme } = useTheme()
  
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
    <div className="code-block text-sm dark:bg-gray-900/80 rounded-md">
      <pre className="overflow-x-auto p-2">
        <code className="text-flow-accent dark:text-blue-400">
          {displayedCode}
          {currentIndex < code.length && (
            <span className="animate-pulse text-flow-primary dark:text-indigo-400">|</span>
          )}
        </code>
      </pre>
    </div>
  )
}
