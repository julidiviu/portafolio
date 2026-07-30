import type { Metadata } from 'next'
import Script from 'next/script'
import { use } from 'react'
import { Source_Sans_3 } from 'next/font/google'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../../styles/globals.css'
import { getDictionary, Locale } from '@/lib/dictionaries'

const sourceSans = Source_Sans_3({ 
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
})

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params
  const dict = getDictionary(lang)
  return {
    title: `${dict.hero.name} | Portafolio`,
    description: dict.hero.copy,
  }
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = use(params)

  return (
    <html lang={lang} className={`${sourceSans.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon-white.svg" sizes="any" />
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
            try {
              const storedMode = window.localStorage.getItem('theme-mode');
              const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const theme = storedMode === 'dark' || storedMode === 'light'
                ? storedMode
                : (systemPrefersDark ? 'dark' : 'light');

              document.documentElement.setAttribute('data-theme', theme);
            } catch (error) {
              document.documentElement.setAttribute('data-theme', 'light');
            }
          })();`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
