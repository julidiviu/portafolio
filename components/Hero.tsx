"use client"

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Locale, getDictionary } from '@/lib/dictionaries'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Hero({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang).hero
  const cardRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [7, -7]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-7, 7]), { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }

  return (
    <section id="hero" className="hero">
      {/* Background layers */}
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="hero-glow-tl" aria-hidden="true" />
      <div className="hero-glow-br" aria-hidden="true" />

      <motion.div
        className="hero-inner"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* ── RIGHT: Photo card ── */}
        <motion.div
          className="hero-photo-wrapper"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.35, ease: 'easeOut' }}
        >
          <div className="hero-photo-glow" aria-hidden="true" />

          <motion.div
            ref={cardRef}
            className="hero-photo-card"
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="hero-photo tech-card"
              aria-label={lang === 'es' ? `Foto de ${dict.name}` : `Photo of ${dict.name}`}
            >
              <img src={dict.photo_url} alt={dict.photo_alt} loading="eager" />
            </div>

            {/* Floating badge top-right */}
            <motion.div
              className="hero-float-badge"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <i className="fa-solid fa-server" />
              <span>Full Stack</span>
            </motion.div>

            {/* Label bottom-center */}
            <div className="hero-photo-label">
              <span className="hero-status-dot" />
              <span>Julian Cañar</span>
            </div>
          </motion.div>

          {/* Orbiting chips */}
          <motion.div
            className="hero-chip hero-chip-postgresql"
            animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          >
            <i className="fa-brands fa-postgresql" />
            <span>PostgreSQL</span>
          </motion.div>

          <motion.div
            className="hero-chip hero-chip-python"
            animate={{ y: [0, 9, 0], rotate: [0, -1, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          >
            <i className="fa-brands fa-python" />
            <span>Python</span>
          </motion.div>

          <motion.div
            className="hero-chip hero-chip-react"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          >
            <i className="fa-brands fa-react" />
            <span>React</span>
          </motion.div>

          <motion.div
            className="hero-chip hero-chip-django"
            animate={{ y: [0, -7, 0], rotate: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          >
            <i className="fa-solid fa-database" />
            <span>Django</span>
          </motion.div>
        </motion.div>

                {/* ── LEFT: Content ── */}
        <div className="hero-content">
          <motion.div className="hero-status" variants={itemVariants}>
            <span className="hero-status-dot" />
            <span>{lang === 'es' ? 'Disponible para proyectos' : 'Open to opportunities'}</span>
          </motion.div>

          <motion.h1 variants={itemVariants}>
            {dict.name.split(' ').map((word, i) => (
              <span key={i} className="hero-name-word">{word}</span>
            ))}
          </motion.h1>

          <motion.p className="hero-role" variants={itemVariants}>
            {dict.role}
          </motion.p>

          <motion.p className="hero-copy" variants={itemVariants}>
            {dict.copy}
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a className="button button-linkedin" href={dict.linkedin_url} target="_blank" rel="noreferrer">
              <i className="button-icon fa-brands fa-linkedin" aria-hidden="true" />
              <span className="button-label">{dict.linkedin_label}</span>
            </a>
            <a className="button button-github" href={dict.github_url} target="_blank" rel="noreferrer">
              <i className="button-icon fa-brands fa-github" aria-hidden="true" />
              <span className="button-label">{dict.github_label}</span>
            </a>
            <a className="button button-cv" href={dict.cv_url} target="_blank" rel="noreferrer">
              <i className="button-icon fa-solid fa-file" aria-hidden="true" />
              <span className="button-label">{dict.btn_cv}</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      <a href="#about" className="hero-scroll-cue" aria-label={lang === 'es' ? 'Ir abajo' : 'Scroll down'}>
        <i className="fa-solid fa-angle-down" aria-hidden="true" />
      </a>
    </section>
  )
}
