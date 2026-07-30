"use client"

import { useEffect, useMemo, useRef, useState } from 'react'
import { Locale, getDictionary } from '@/lib/dictionaries'

type TestimonialItem = {
  text: string
  author: string
  role: string
}

export default function Testimonials({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang).testimonials
  const items: TestimonialItem[] = [
    { text: dict.t1_text, author: dict.t1_author, role: dict.t1_role },
    { text: dict.t2_text, author: dict.t2_author, role: dict.t2_role },
    { text: dict.t3_text, author: dict.t3_author, role: dict.t3_role },
  ]

  const canLoop = items.length > 1
  const loopedItems = useMemo(() => {
    if (!canLoop) {
      return items
    }
    return [items[items.length - 1], ...items, items[0]]
  }, [canLoop, items])

  const [index, setIndex] = useState(canLoop ? 1 : 0)
  const [animating, setAnimating] = useState(true)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    setIndex(canLoop ? 1 : 0)
    setAnimating(true)
  }, [canLoop, lang])

  const prevSlide = () => {
    setAnimating(true)
    setIndex((prev) => prev - 1)
  }

  const nextSlide = () => {
    setAnimating(true)
    setIndex((prev) => prev + 1)
  }

  const onTrackTransitionEnd = () => {
    if (!canLoop) {
      return
    }

    if (index === 0) {
      setAnimating(false)
      setIndex(items.length)
    } else if (index === loopedItems.length - 1) {
      setAnimating(false)
      setIndex(1)
    }
  }

  useEffect(() => {
    if (animating) {
      return
    }

    const raf = requestAnimationFrame(() => {
      setAnimating(true)
    })

    return () => cancelAnimationFrame(raf)
  }, [animating])

  const activeRealIndex = canLoop
    ? (index - 1 + items.length) % items.length
    : index

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return
    }

    const deltaX = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(deltaX) < 24) {
      return
    }

    if (deltaX > 0) {
      prevSlide()
    } else {
      nextSlide()
    }
  }

  return (
    <section id="testimonials" className="scroll-section">
      <div className="section-header">
        <h2>{dict.title}</h2>
        <p className="section-kicker">{dict.kicker}</p>
        <p className="section-intro">
          {dict.intro}
        </p>
      </div>

      <div className="testimonials-grid testimonials-desktop">
        {items.map((item, idx) => (
          <article key={`desktop-${idx}`} className="testimonial-card">
            <span className="testimonial-quote-icon">&quot;</span>
            <p className="testimonial-text">{item.text}</p>
            <p className="testimonial-author">{item.author}</p>
            <p className="testimonial-role">{item.role}</p>
          </article>
        ))}
      </div>

      <div className="testimonials-carousel" aria-label="Carrusel de testimonios">
        <div
          className="testimonials-carousel-viewport"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`testimonials-carousel-track${animating ? '' : ' no-animate'}`}
            onTransitionEnd={onTrackTransitionEnd}
            style={{
              transform: `translateX(calc((50% - (var(--tm-slide-width) / 2)) - ${index} * (var(--tm-slide-width) + var(--tm-slide-gap))))`,
            }}
          >
            {loopedItems.map((item, idx) => {
              const realIndex = canLoop
                ? (idx - 1 + items.length) % items.length
                : idx
              const isActive = realIndex === activeRealIndex

              return (
                <article
                  key={`mobile-${idx}-${item.author}`}
                  className={`testimonial-card testimonial-slide${isActive ? ' is-active' : ''}`}
                  aria-hidden={!isActive}
                >
                  <span className="testimonial-quote-icon">&quot;</span>
                  <p className="testimonial-text">{item.text}</p>
                  <p className="testimonial-author">{item.author}</p>
                  <p className="testimonial-role">{item.role}</p>
                </article>
              )
            })}
          </div>
        </div>

        <div className="testimonials-carousel-controls" aria-hidden="true">
          <div className="testimonials-carousel-dots">
            {items.map((_, idx) => (
              <button
                key={`dot-${idx}`}
                type="button"
                className={`testimonial-dot${activeRealIndex === idx ? ' is-active' : ''}`}
                onClick={() => {
                  setAnimating(true)
                  setIndex(canLoop ? idx + 1 : idx)
                }}
                aria-label={`Ir al testimonio ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

