import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

/* ── Animation variants ── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/* ── Service keywords for the ticker ── */
const keywords = [
  'WhatsApp Automation',
  'AI Calling Agents',
  'E-Commerce',
  'Custom Software',
  'Mobile Apps',
  'ERP Systems',
  'Process Automation',
  'Business Websites',
]

function Hero() {
  const [scrolled, setScrolled] = useState(false)
  const heroRef = useRef(null)
  const spotlightRef = useRef(null)

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Mouse spotlight */
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const onMove = (e) => {
      const spot = spotlightRef.current
      if (!spot) return
      const rect = hero.getBoundingClientRect()
      spot.style.left = `${e.clientX - rect.left}px`
      spot.style.top = `${e.clientY - rect.top}px`
      spot.style.opacity = '1'
    }

    const onLeave = () => {
      if (spotlightRef.current) spotlightRef.current.style.opacity = '0'
    }

    hero.addEventListener('mousemove', onMove)
    hero.addEventListener('mouseleave', onLeave)
    return () => {
      hero.removeEventListener('mousemove', onMove)
      hero.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  /* Duplicate keywords for seamless loop */
  const tickerItems = [...keywords, ...keywords]

  return (
    <div
      ref={heroRef}
      className='relative w-full min-h-screen md:min-h-0 lg:min-h-screen bg-[var(--bg-primary)] px-4 md:px-0 overflow-hidden'
    >
      {/* Mouse spotlight */}
      <div ref={spotlightRef} className="hero-spotlight" style={{ opacity: 0 }} aria-hidden="true" />

      {/* ── Main content ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-[var(--text-primary)] w-full min-h-screen md:min-h-0 md:py-28 lg:min-h-screen lg:py-0 flex flex-col justify-center items-center jakarta md:pt-50 lg:pt-14"
      >

        {/* Title */}
        <div className="text-center overflow-visible">
          <motion.div
            variants={fadeUp}
            className='hero-title-gradient text-5xl sm:text-5xl md:text-7xl lg:text-[90px] font-bold tracking-[-0.03em] leading-[1.1]'
          >
            Simplifying
          </motion.div>
          <motion.div
            variants={fadeUp}
            className='hero-title-gradient text-5xl mb-5 md:mb-0 sm:text-5xl md:text-7xl lg:text-[90px] font-bold mt-2 tracking-[-0.03em] leading-[1.1] pb-1'
          >
            Operations
          </motion.div>
        </div>

        {/* Description */}
        <motion.div variants={fadeUp} className="max-w-70 mb-3 md:mb-0 sm:max-w-md md:max-w-2xl mt-5 md:mt-7">
          <div className="text-[var(--text-secondary)] text-[13px] md:w-[560px] sm:text-sm md:text-[15px] font-light text-center leading-5 md:leading-7">
            From complex problems to clear solutions, We build software that reduces effort and removes manual work.
          </div>
        </motion.div>

        {/* Keyword ticker */}
        <motion.div
          variants={fadeUp}
          className="w-full max-w-2xl overflow-hidden mt-5 md:mt-6"
        >
          <div className="hero-marquee-track">
            {tickerItems.map((kw, i) => (
              <span key={i} className="flex items-center gap-3 px-3 text-[var(--text-muted)] text-xs md:text-sm inter font-light whitespace-nowrap">
                <span className="hero-marquee-dot" />
                {kw}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-3 mt-6 md:mt-8 w-full sm:w-auto px-4 sm:px-0">
          <a href='/#contact' className="w-full sm:w-auto">
            <div className="hero-cta-primary bg-[var(--cta-bg)] h-11 sm:h-12 group sm:w-52 rounded-lg text-[13px] md:text-sm sm:text-sm font-semibold text-[var(--cta-text)] inter flex items-center justify-center sm:justify-start sm:pl-4 cursor-pointer">
              Discuss your Use Case
              <ArrowRight className="ml-2 group-hover:ml-3 transition-all text-[var(--cta-text)] size-4 sm:size-5" />
            </div>
          </a>
          <a href='/#work' className="w-full sm:w-auto">
            <div className="hero-cta-secondary bg-[var(--cta2-bg)] h-11 sm:h-12 border border-[var(--cta2-border)] font-medium w-full sm:w-42 rounded-lg text-[13px] md:text-sm sm:text-sm text-[var(--cta2-text)] inter flex items-center justify-center cursor-pointer">
              Explore Our Work
            </div>
          </a>
        </motion.div>



      </motion.div>

      {/* ── Scroll indicator ── */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 transition-opacity duration-700 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <div className="hero-scroll-line" />
      </div>

      {/* ── Bottom divider ── */}
      <div className="hero-bottom-fade absolute bottom-0 left-0 right-0 h-px z-10" aria-hidden="true" />
    </div>
  )
}

export default Hero