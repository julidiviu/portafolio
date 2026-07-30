"use client"

import { useEffect, useState, useRef } from 'react'
import { Locale, getDictionary } from '@/lib/dictionaries'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar({ lang }: { lang: Locale }) {
  const [activeSection, setActiveSection] = useState('hero')
  const [themeMode, setThemeMode] = useState<'system' | 'light' | 'dark'>(() => {
    if (typeof window === 'undefined') {
      return 'system'
    }

    const storedMode = window.localStorage.getItem('theme-mode')
    return storedMode === 'light' || storedMode === 'dark' ? storedMode : 'system'
  })
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')
  const router = useRouter()
  const pathname = usePathname()

  const dict = getDictionary(lang).navbar

  const links = [
    { href: '#hero', label: dict.hero },
    { href: '#about', label: dict.about },
    { href: '#skills', label: dict.skills },
    { href: '#experience', label: dict.experience },
    { href: '#projects', label: dict.projects },
    { href: '#testimonials', label: dict.testimonials },
    { href: '#contact', label: dict.contact },
  ]

  const mobileSectionLabels: Record<string, string> = {
    hero: dict.hero,
    about: dict.about,
    skills: dict.skills,
    experience: dict.experience,
    projects: dict.projects,
    testimonials: dict.testimonials,
    contact: dict.contact,
  }

  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    let ticking = false

    const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'testimonials', 'contact']

    const updateActiveSection = () => {
      const header = document.querySelector('.site-header') as HTMLElement | null
      // We add a generous buffer (e.g. 70px) so the IntersectionObserver triggers even if it scrolls slightly short
      const triggerPoint = (header?.offsetHeight ?? 0) + 80

      const currentSection = sectionIds.find((sectionId) => {
        const section = document.getElementById(sectionId)

        if (!section) {
          return false
        }

        const rect = section.getBoundingClientRect()
        return rect.top <= triggerPoint && rect.bottom > triggerPoint
      })

      setActiveSection(currentSection ?? 'hero')
    }

    const onScrollOrResize = () => {
      if (ticking) {
        return
      }

      ticking = true
      requestAnimationFrame(() => {
        updateActiveSection()
        ticking = false
      })
    }

    updateActiveSection()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)

    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [])

  useEffect(() => {
    // Update the slider indicator after render
    const updateIndicator = () => {
      if (!navRef.current) return
      const activeLink = navRef.current.querySelector('a.is-active') as HTMLElement
      if (activeLink) {
        setIndicatorStyle({
          left: activeLink.offsetLeft,
          top: activeLink.offsetTop,
          width: activeLink.offsetWidth,
          height: activeLink.offsetHeight,
          opacity: 1
        })
      }
    }
    
    // Add small delay to ensure DOM is fully painted
    const timer = setTimeout(updateIndicator, 50)
    window.addEventListener('resize', updateIndicator)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', updateIndicator)
    }
  }, [activeSection, lang])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const applyTheme = () => {
      const nextTheme = themeMode === 'system'
        ? (mediaQuery.matches ? 'dark' : 'light')
        : themeMode

      setResolvedTheme(nextTheme)
      document.documentElement.setAttribute('data-theme', nextTheme)
    }

    applyTheme()

    if (themeMode !== 'system') {
      return
    }

    const onSystemThemeChange = () => {
      applyTheme()
    }

    mediaQuery.addEventListener('change', onSystemThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', onSystemThemeChange)
    }
  }, [themeMode])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return
    }

    const onResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [isMobileMenuOpen])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [activeSection])

  const isScrolled = activeSection !== 'hero'
  const currentMobileSection = mobileSectionLabels[activeSection]

  const toggleTheme = () => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const currentTheme = themeMode === 'system'
      ? (systemPrefersDark ? 'dark' : 'light')
      : themeMode
    const nextMode = currentTheme === 'dark' ? 'light' : 'dark'

    setThemeMode(nextMode)
    window.localStorage.setItem('theme-mode', nextMode)
    document.documentElement.setAttribute('data-theme', nextMode)
  }

  const toggleLang = () => {
    const targetLang = lang === 'en' ? 'es' : 'en'
    const newPath = pathname.replace(`/${lang}`, `/${targetLang}`)
    router.push(newPath)
  }

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '')
    const targetSection = document.getElementById(targetId)

    if (!targetSection) {
      return
    }

    const header = document.querySelector('.site-header') as HTMLElement | null
    // Offset must match the CSS scroll-padding so the title clears the fixed navbar
    const offset = (header?.offsetHeight ?? 0) + 40
    const targetTop = targetSection.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({ top: targetTop, behavior: 'smooth' })
  }

  const handleSectionClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    scrollToSection(href)
    window.history.pushState(null, '', `${window.location.pathname}${href}`)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-shell">
        {currentMobileSection && activeSection !== 'hero' && (
          <button 
            className="nav-mobile-section"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {currentMobileSection}
            <i className={`nav-mobile-toggle-icon fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-angle-down'}`}></i>
          </button>
        )}

        {isMobileMenuOpen && (
          <>
            <div className="mobile-menu-backdrop" onClick={() => setIsMobileMenuOpen(false)}></div>
            <nav className="mobile-menu-floating">
              <ul className="mobile-menu-links">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`mobile-link ${activeSection === link.href.slice(1) ? 'is-active' : ''}`}
                      onClick={(event) => handleSectionClick(event, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}

        <nav className="navbar" aria-label="Navegacion principal">
          
          <div className="nav-brand">
            <strong>DP.</strong>
          </div>

          <ul className="navbar-links" ref={navRef}>
            <li className="nav-indicator" style={{
              left: `${indicatorStyle.left}px`,
              top: `${indicatorStyle.top}px`,
              width: `${indicatorStyle.width}px`,
              height: `${indicatorStyle.height}px`,
              opacity: indicatorStyle.opacity
            }}></li>
            {links.map((link) => (
              <li key={link.href} className="nav-item">
                <a
                  href={link.href}
                  className={activeSection === link.href.slice(1) ? 'is-active' : ''}
                  onClick={(event) => handleSectionClick(event, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-theme-toggle">
            <button
              type="button"
              className="nav-toggle-btn"
              onClick={toggleLang}
              aria-label="Cambiar idioma / Change language"
              title="Cambiar idioma / Change language"
            >
              {lang === 'en' ? 'EN' : 'ES'}
            </button>

            <div className="nav-toggle-divider"></div>

            <button
              type="button"
              className="nav-toggle-btn"
              onClick={toggleTheme}
              aria-label={resolvedTheme === 'dark' ? dict.aria_light : dict.aria_dark}
              title={resolvedTheme === 'dark' ? dict.aria_light : dict.aria_dark}
            >
              <i className={`fa-solid ${resolvedTheme === 'dark' ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true"></i>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
