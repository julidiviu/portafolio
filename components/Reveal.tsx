"use client"

import { motion } from 'framer-motion'

interface RevealProps {
  children: React.ReactNode
  /** Retraso en segundos antes de que empiece la animación */
  delay?: number
  /** Duración de la animación en segundos */
  duration?: number
  /** Dirección desde donde entra el elemento */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  /** Clase CSS adicional para el wrapper */
  className?: string
}

const directionOffset = {
  up:    { y: 40 },
  down:  { y: -40 },
  left:  { x: 40 },
  right: { x: -40 },
  none:  {},
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className,
}: RevealProps) {
  const offset = directionOffset[direction]

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
