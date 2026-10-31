'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const dark = mounted && resolvedTheme === 'dark'
  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative flex h-9 w-[64px] items-center rounded-chip border border-line/10 bg-surface-2 p-1 ${className}`}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        className={`flex h-7 w-7 items-center justify-center rounded-full shadow-card ${dark ? 'ml-auto bg-brand text-white' : 'bg-gold text-[#17142B]'}`}
      >
        {dark ? <Moon size={14} /> : <Sun size={14} />}
      </motion.span>
    </button>
  )
}
