import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import ThemeToggle from '../ThemeToggle'

const DARK_LOGO  = '/ch_logo_d.webp'
const LIGHT_LOGO = '/CH black color logo with transparent background.svg'

function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 'light'
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState(getTheme)

  // React to theme changes made by ThemeToggle (watches data-theme attribute)
  useEffect(() => {
    const observer = new MutationObserver(() => setTheme(getTheme()))
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
    return () => observer.disconnect()
  }, [])

  const logoSrc = theme === 'dark' ? DARK_LOGO : LIGHT_LOGO

  return (
    <>
      <div className="flex justify-center z-50">
        <div className="bg-[var(--nav-bg)] z-50 fixed top-0 backdrop-blur-sm w-full px-2
          md:top-8 md:w-175 lg:w-200 md:h-16 md:rounded-[500px] 
          border border-[var(--nav-border)] flex flex-row items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img loading="lazy"
              src={logoSrc}
              width="48"
              height="48"
              className="w-10 md:w-12 transition-opacity duration-200"
              alt="CH Labs Logo"
            />
            <div className='flex flex-col leading-none'>
              <div className="text-[18px] md:text-[20px] font-semibold outfit text-[var(--text-primary)]">CH Digital</div>
              <div className='text-xs md:text-sm font-light pl-0.5 text-[var(--text-primary)]'>Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row items-center outfit">
            <div className="flex flex-row justify-evenly items-center text-[var(--nav-link)] font-light text-sm gap-8 mr-8">
              <a href="/#home" className="hover:text-[var(--nav-link-hover)] transition-colors">Home</a>
              <a href="/#products" className="hover:text-[var(--nav-link-hover)] transition-colors">Products</a>
              <a href="/#services" className="hover:text-[var(--nav-link-hover)] transition-colors">Services</a>
              <a href="/#work" className="hover:text-[var(--nav-link-hover)] transition-colors">Our Work</a>
            </div>
            <a href="/#contact">
              <div className="bg-[var(--cta-bg)] h-9.5 w-28 lg:mr-1 flex justify-center items-center rounded-full text-[var(--cta-text)] font-semibold inter hover:bg-[var(--cta-hover)] text-sm cursor-pointer">
                Contact us
              </div>
            </a>
          </div>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle inline />
            <button
              aria-label="Toggle mobile menu"
              className="text-[var(--text-primary)] p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="fixed top-16 left-0 w-full bg-[var(--mobile-menu-bg)] backdrop-blur-md z-40 md:hidden border-b border-[var(--border-color)]">
            <div className="flex flex-col items-center py-6 gap-6 outfit">
              <a
                href="/#home"
                className="text-[var(--nav-link)] hover:text-[var(--text-primary)] text-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/#products"
                className="text-[var(--nav-link)] hover:text-[var(--text-primary)] text-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="/#services"
                className="text-[var(--nav-link)] hover:text-[var(--text-primary)] text-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="/#work"
                className="text-[var(--nav-link)] hover:text-[var(--text-primary)] text-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Work
              </a>
              <a
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="bg-[var(--cta-bg)] h-11 w-32 flex justify-center items-center rounded-full text-[var(--cta-text)] font-semibold inter hover:bg-[var(--cta-hover)] text-base cursor-pointer mt-2">
                  Contact us
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

