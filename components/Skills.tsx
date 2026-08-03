"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CircleStackIcon,
  CloudIcon,
  CodeBracketSquareIcon,
  CommandLineIcon,
  CpuChipIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'
import { Locale, getDictionary } from '@/lib/dictionaries'

const pillVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      delay: i * 0.06,
      ease: 'easeOut' as const,
    },
  }),
}

export default function Skills({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang).skills
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)

  const activeCategory = dict.categories[activeCategoryIndex] ?? dict.categories[0]

  const getCategoryIcon = (title: string) => {
    const normalized = title.toLowerCase()

    if (normalized.includes('sistema') || normalized.includes('infrastructure')) return CpuChipIcon
    if (normalized.includes('red') || normalized.includes('network')) return GlobeAltIcon
    if (normalized.includes('backend')) return CloudIcon
    if (normalized.includes('desarrollo') || normalized.includes('web')) return CodeBracketSquareIcon
    if (normalized.includes('base') || normalized.includes('database')) return CircleStackIcon
    if (normalized.includes('herramienta') || normalized.includes('scripting') || normalized.includes('tool')) return CommandLineIcon

    return CommandLineIcon
  }

  const renderCategoryTitle = (title: string) => {
    const Icon = getCategoryIcon(title)

    return (
      <h3 className="skills-card-title">
        <Icon className="skills-card-icon" aria-hidden="true" />
        <span>{title}</span>
      </h3>
    )
  }

  return (
    <section id="skills" className="scroll-section">
      <div className="section-header">
        <h2>{dict.title}</h2>
        <p className="section-kicker">{dict.kicker}</p>
        <p className="section-intro">
          {dict.intro}
        </p>
        <div className="section-focus-badge">
          <p>{dict.focus}</p>
        </div>
      </div>

      <div className="skills-mobile-switcher" role="tablist" aria-label="Categorias de habilidades">
        {dict.categories.map((category: any, idx: number) => (
          <button
            key={`skills-tab-${idx}`}
            type="button"
            role="tab"
            aria-selected={activeCategoryIndex === idx}
            aria-controls="skills-mobile-panel"
            className={`skills-mobile-btn${activeCategoryIndex === idx ? ' is-active' : ''}`}
            onClick={() => setActiveCategoryIndex(idx)}
          >
            {category.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          id="skills-mobile-panel"
          className="skills-mobile-panel tech-card"
          key={activeCategoryIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderCategoryTitle(activeCategory.title)}
          <div className="skills-list">
            {activeCategory.items.map((item: string, itemIdx: number) => (
              <motion.span
                key={`mobile-item-${itemIdx}`}
                className="skill-pill"
                custom={itemIdx}
                variants={pillVariants}
                initial="hidden"
                animate="show"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.article>
      </AnimatePresence>

      <div className="bento-grid">
        {dict.categories.map((category: any, idx: number) => {
          const titleLower = category.title.toLowerCase();
          const isMain = titleLower.includes('sistema') || titleLower.includes('infra');
          const isWide = titleLower.includes('desarrollo') || titleLower.includes('web');
          
          let bentoClass = 'bento-item';
          if (isMain) bentoClass += ' bento-wide tech-card';
          else if (isWide) bentoClass += ' bento-wide';

          return (
            <motion.article
              key={idx}
              className={bentoClass}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              {renderCategoryTitle(category.title)}
              <div className="skills-list">
                {category.items.map((item: string, itemIdx: number) => (
                  <motion.span
                    key={itemIdx}
                    className="skill-pill"
                    custom={itemIdx}
                    variants={pillVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  )
}
