'use client'
import { motion } from 'framer-motion'
import { Fragment } from 'react'

type Part = string | { text: string; className?: string }

/**
 * Headline that slides each word up out of a mask, in sequence.
 * Pass strings, or {text, className} for highlighted runs. Use "\n" to break lines.
 */
export default function WordReveal({ parts, className = '', delay = 0, as = 'h2', id }: {
  parts: Part[]; className?: string; delay?: number; as?: 'h1' | 'h2' | 'h3'; id?: string
}) {
  const Tag = motion[as]
  let i = 0
  return (
    <Tag id={id} className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }}>
      {parts.map((p, pi) => {
        const text = typeof p === 'string' ? p : p.text
        const cls = typeof p === 'string' ? '' : p.className ?? ''
        return (
          <Fragment key={pi}>
            {text.split(/(\n| )/).map((w, wi) => {
              if (w === '\n') return <br key={wi} />
              if (w === ' ' || w === '') return w === ' ' ? ' ' : null
              const d = delay + i++ * 0.055
              return (
                <span key={wi} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
                  <motion.span
                    className={`inline-block ${cls}`}
                    variants={{ hidden: { y: '110%', rotate: 4 }, show: { y: '0%', rotate: 0 } }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: d }}
                  >
                    {w}
                  </motion.span>
                </span>
              )
            })}
          </Fragment>
        )
      })}
    </Tag>
  )
}
