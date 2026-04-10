import React, { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

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

/* ── Product data ── */
const products = [
  {
    name: 'Class Control',
    category: 'Education',
    description: 'A complete management system for coaching institutes — handle students, attendance, fees, and daily operations from one place.',
    logo: '/products/ClassControl logo square.svg',
    url: 'https://class-control.vercel.app/',
  },
  {
    name: 'Cafe QR',
    category: 'Hospitality',
    description: 'Digital menu and QR-based ordering for restaurants. Customers scan, browse, and order — no app download needed.',
    logo: '/products/CafeQr logo square.svg',
    url: '#',
  },
  {
    name: 'Outvia',
    category: 'Communication',
    description: 'WhatsApp automation for businesses. Automate replies, send broadcasts, and manage customer conversations at scale.',
    logo: '/products/Outvia Logo square.svg',
    url: 'https://outvia-crm.vercel.app/login',
  },
]

function Products() {
  const [sectionRef, sectionVisible] = useScrollReveal(0.1)

  return (
    <div className="flex justify-center">
      <div className="bg-[var(--bg-primary)] w-full py-10 md:py-16 jakarta">
        <div className="bg-[var(--divider-color)] w-full h-[0.1px]"></div>

        <div
          ref={sectionRef}
          className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 mt-8 md:mt-12"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}
        >
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[var(--text-muted)] text-[11px] font-semibold tracking-[0.2em] uppercase inter mb-3">
              Our Products
            </p>
            <h2 className="text-[var(--text-primary)] text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold">
              Built by CH Digital Solutions
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base font-light leading-relaxed mt-3 max-w-lg mx-auto">
              Purpose-built tools that solve real problems for real businesses.
            </p>
          </div>

          {/* Product List — clean stacked rows */}
          <div className="product-list">
            {products.map((product, index) => (
              <a
                key={index}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="product-row group"
                style={{
                  opacity: sectionVisible ? 1 : 0,
                  transition: `opacity 0.5s ease ${index * 0.1}s`,
                }}
              >
                {/* Logo */}
                <div className="product-row-logo">
                  <img
                    src={product.logo}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Info */}
                <div className="product-row-info">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[var(--text-primary)] text-lg sm:text-xl font-semibold inter">
                      {product.name}
                    </span>
                    <span className="product-row-badge inter">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] text-[13px] sm:text-sm font-light leading-relaxed inter max-w-md">
                    {product.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="product-row-arrow">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
