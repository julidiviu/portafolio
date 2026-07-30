import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { Locale } from '@/lib/dictionaries'

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params

  return (
    <>
      <Navbar lang={lang} />
      <Hero lang={lang} />
      <main className="container">
        <Reveal><AboutMe lang={lang} /></Reveal>
        <Reveal><Skills lang={lang} /></Reveal>
        <Reveal><Experience lang={lang} /></Reveal>
        <Reveal><Projects lang={lang} /></Reveal>
        <Reveal><Testimonials lang={lang} /></Reveal>
        <Reveal><Contact lang={lang} /></Reveal>
      </main>
      <Footer lang={lang} />
    </>
  )
}
