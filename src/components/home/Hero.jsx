import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

/* ── Animation variants ── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
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
        className="relative z-10 text-[var(--text-primary)] w-full min-h-screen md:min-h-0 md:py-28 lg:min-h-screen lg:py-0 flex flex-col justify-center items-center jakarta md:pt-50 lg:pt-0 lg:mt-7"
      >

        {/* Title */}
        <div className="text-center">
          <motion.div
            variants={fadeUp}
            className='hero-title-gradient text-5xl sm:text-5xl md:text-7xl lg:text-[90px] font-bold tracking-[-0.03em]'
          >
            Simplifying
          </motion.div>
          <motion.div
            variants={fadeUp}
            className='hero-title-gradient text-5xl mb-5 md:mb-0 sm:text-5xl md:text-7xl lg:text-[90px] font-bold mt-2 tracking-[-0.03em]'
          >
            Operations
          </motion.div>
        </div>

        {/* Description */}
        <motion.div variants={fadeUp} className="max-w-70 mb-3 md:mb-0 sm:max-w-md md:max-w-2xl mt-6 md:mt-10">
          <div className="text-[var(--text-secondary)] text-sm md:w-[600px] sm:text-base md:text-[16px] font-light text-center leading-6 md:leading-9">
            From complex problems to clear solutions, We build software that reduces effort and removes manual work.
          </div>
        </motion.div>

        {/* Keyword ticker */}
        <motion.div
          variants={fadeUp}
          className="w-full max-w-2xl overflow-hidden mt-6 md:mt-8"
        >
          <div className="hero-marquee-track">
            {tickerItems.map((kw, i) => (
              <span key={i} className="flex items-center gap-4 px-4 text-[var(--text-muted)] text-xs md:text-sm inter font-light whitespace-nowrap">
                <span className="opacity-70">✦</span>
                {kw}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 mt-8 md:mt-10 w-full sm:w-auto px-4 sm:px-0">
          <a href='/#contact' className="w-full sm:w-auto">
            <div className="hero-cta-primary bg-[var(--cta-bg)] h-12 sm:h-13 group sm:w-56 rounded-lg text-sm md:text-[14.5px] sm:text-base font-semibold text-[var(--cta-text)] inter flex items-center justify-center sm:justify-start sm:pl-4 cursor-pointer">
              Discuss your Use Case
              <ArrowRight className="ml-2 group-hover:ml-3 transition-all text-[var(--cta-text)] size-4 sm:size-5" />
            </div>
          </a>
          <a href='/#work' className="w-full sm:w-auto">
            <div className="hero-cta-secondary bg-[var(--cta2-bg)] h-12 sm:h-13 border border-[var(--cta2-border)] font-medium w-full sm:w-44 rounded-lg text-sm md:text-[14.5px] sm:text-base text-[var(--cta2-text)] inter flex items-center justify-center cursor-pointer">
              Explore Our Work
            </div>
          </a>
        </motion.div>

        {/* Trust metrics */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-3 md:gap-5 mt-10 md:mt-14"
        >
          {[
            { value: '10+', label: 'Projects Delivered' },
            { value: '3+', label: 'Years Experience' },
            { value: '3', label: 'Happy Clients' },
          ].map((stat, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="hero-trust-dot" />}
              <div className="flex flex-col items-center">
                <span className="text-[var(--text-primary)] text-lg md:text-xl font-bold inter">{stat.value}</span>
                <span className="text-[var(--text-muted)] text-[10px] md:text-xs inter font-light mt-0.5">{stat.label}</span>
              </div>
            </React.Fragment>
          ))}
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