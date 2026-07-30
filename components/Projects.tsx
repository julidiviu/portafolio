"use client"

import { motion } from 'framer-motion'
import { Locale, getDictionary } from '@/lib/dictionaries'

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const },
  },
}

export default function Projects({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang).projects

  return (
    <section id="projects" className="scroll-section">
      <div className="section-header">
        <h2>{dict.title}</h2>
        <p className="section-kicker">{dict.kicker}</p>
        <p className="section-intro">
          {dict.intro}
        </p>
      </div>

      <motion.div
        className="projects-grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        {dict.items.map((project, index: number) => (
          <motion.article
            key={index}
            className="project-card"
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 280, damping: 20 }}
          >
            <div className="project-media">
              <img src={project.image_url} alt={project.image_alt || project.title} loading="lazy" />
            </div>
            <h3>{project.title}</h3>
            <p>
              {project.desc}
            </p>
            <div className="project-links">
              <a href={project.repo} className="project-link" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github" aria-hidden="true"></i> {dict.repo_label}
              </a>
              {project.view && (
                <a href={project.view} className="project-link" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-eye" aria-hidden="true"></i> {dict.view_label}
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
