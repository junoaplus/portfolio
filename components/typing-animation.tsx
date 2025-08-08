'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypingAnimationProps {
  text: string
  className?: string
  speed?: number
}

export function TypingAnimation({ text, className = '', speed = 100 }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (currentIndex === text.length) {
      setIsComplete(true)
    }
  }, [currentIndex, text, speed])

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-block w-0.5 h-full bg-current ml-1"
        >
          |
        </motion.span>
      )}
    </span>
  )
}