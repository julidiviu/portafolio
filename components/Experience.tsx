"use client"

import { motion } from 'framer-motion'
import { Locale, getDictionary } from '@/lib/dictionaries'

const timelineVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const },
  },
}

export default function Experience({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang).experience

  return (
    <section id="experience" className="scroll-section">
      <div className="section-header">
        <h2>{dict.title}</h2>
        <p className="section-kicker">{dict.kicker}</p>
        <p className="section-intro">
          {dict.intro}
        </p>
      </div>

      <motion.div
        className="experience-timeline"
        variants={timelineVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {dict.items.map((item: any, idx: number) => (
          <motion.article
            key={idx}
            className="experience-item tech-card"
            variants={itemVariants}
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <p className="experience-date">{item.date}</p>
            <h3>{item.role}</h3>
            <p className="experience-company">{item.company}</p>
            <p>
              {item.desc}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
