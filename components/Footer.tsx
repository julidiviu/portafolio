import { Locale, getDictionary } from '@/lib/dictionaries'

export default function Footer({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang).footer

  return (
    <footer className="site-footer">
      <p>&copy; 2026 Julian Cañar. {dict.rights}</p>
      <a
        href={dict.more_about_href}
        className="footer-more-link"
        target="_blank"
        rel="noreferrer"
      >
        {dict.more_about_label}
      </a>
    </footer>
  )
}

