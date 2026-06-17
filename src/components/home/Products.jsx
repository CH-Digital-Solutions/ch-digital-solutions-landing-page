import React, { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

/* ── Scroll reveal hook ── */
function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); obs.unobserve(el) } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, isVisible]
}

/* ── Product data with theme-based logo colors ── */
const products = [
  {
    name: 'Class Control',
    category: 'Education',
    description: 'A complete management system for coaching institutes — handle students, attendance, fees, and daily operations from one place.',
    logo: '/products/ClassControl logo square.svg',
    url: 'https://www.classcontrol.online/',
    accentLight: '#0A0E8E',
    bgLight: 'rgba(10, 14, 142, 0.05)',
    accentDark: '#818CF8',
    bgDark: 'rgba(129, 140, 248, 0.15)',
  },
  {
    name: 'Cafe QR',
    category: 'Hospitality',
    description: 'Digital menu and QR-based ordering for restaurants. Customers scan, browse, and order — no app download needed.',
    logo: '/products/CafeQr logo square.svg',
    url: '/coming-soon',
    accentLight: '#0F9D58',
    bgLight: 'rgba(15, 157, 88, 0.05)',
    accentDark: '#4ADE80',
    bgDark: 'rgba(74, 222, 128, 0.15)',
  },
  {
    name: 'Outvia',
    category: 'Communication',
    description: 'WhatsApp automation for businesses. Automate replies, send broadcasts, and manage customer conversations at scale.',
    logo: '/products/Outvia.svg',
    url: 'https://outvia.vercel.app/',
    accentLight: '#128C7E',
    bgLight: 'rgba(18, 140, 126, 0.05)',
    accentDark: '#2DD4BF',
    bgDark: 'rgba(45, 212, 191, 0.15)',
  },
]

function Products() {
  const [sectionRef, sectionVisible] = useScrollReveal(0.1)
  const carouselRef = useRef(null)

  const isCarousel = products.length > 3

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: 'smooth' })
    }
  }

  return (
    <div className="flex justify-center">
      <div className="bg-[var(--bg-primary)] w-full pt-0 pb-10 md:pb-16 jakarta">
        <div
          ref={sectionRef}
          className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 mt-2 md:mt-4"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}
        >
          {/* Section Header */}
          <div className="flex flex-col items-center justify-center mb-10 md:mb-14">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-[var(--text-muted)] text-[11px] font-semibold tracking-[0.2em] uppercase inter mb-3">
                Our Products
              </p>
              <h2 className="text-[var(--text-primary)] text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold">
                Built by CH Digital Solutions
              </h2>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base font-light leading-relaxed mt-3">
                Purpose-built tools that solve real problems for real businesses.
              </p>
            </div>

            {/* Scroll Navigation Buttons (Only visible if there are more than 3 products) */}
            <div className={`${isCarousel ? 'hidden md:flex' : 'hidden'} gap-3 mt-6 md:mt-0`}>
              <button
                onClick={scrollLeft}
                className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all bg-[var(--bg-card)] cursor-pointer"
                aria-label="Previous product"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollRight}
                className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all bg-[var(--bg-card)] cursor-pointer"
                aria-label="Next product"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Product Cards — Horizontal Carousel on mobile/if many products, 3-column Grid on desktop if <= 3 */}
          <div
            ref={carouselRef}
            className={
              isCarousel
                ? "flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 px-1 -mx-1"
                : "flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scrollbar-none pb-6 px-1 -mx-1 md:px-0 md:mx-0"
            }
          >
            {products.map((product, index) => {
              const isExternal = product.url.startsWith('http')
              const CardWrapper = isExternal ? 'a' : Link
              const linkProps = isExternal 
                ? { href: product.url, target: '_blank', rel: 'noopener noreferrer' }
                : { to: product.url }
                
              return (
              <CardWrapper
                key={index}
                {...linkProps}
                className={`product-card group ${isCarousel ? 'is-carousel' : ''}`}
                style={{
                  opacity: sectionVisible ? 1 : 0,
                  transition: `opacity 0.5s ease ${index * 0.1}s`,
                  '--accent-light': product.accentLight,
                  '--bg-light': product.bgLight,
                  '--accent-dark': product.accentDark,
                  '--bg-dark': product.bgDark,
                }}
              >
                {/* Header Logo & Badge */}
                <div className="product-card-logo-wrapper">
                  <div className="product-card-logo">
                    <img loading="lazy"
                      src={product.logo}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="product-card-badge inter">
                    {product.category}
                  </span>
                </div>

                {/* Card Info */}
                <div className="product-card-info">
                  <h3 className="product-card-title inter">
                    {product.name}
                  </h3>
                  <p className="product-card-desc inter">
                    {product.description}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="product-card-footer">
                  <span className="product-card-link-text inter">View</span>
                  <div className="product-card-arrow">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </CardWrapper>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products

