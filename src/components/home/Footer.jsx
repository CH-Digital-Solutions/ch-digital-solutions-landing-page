import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, ArrowRight } from 'lucide-react'

const DARK_LOGO  = '/ch_logo_d.png'
const LIGHT_LOGO = '/CH black color logo with transparent background.svg'

function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 'light'
}

export default function Footer() {
  const [theme, setTheme] = useState(getTheme)

  useEffect(() => {
    const observer = new MutationObserver(() => setTheme(getTheme()))
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
    return () => observer.disconnect()
  }, [])

  const logoSrc = theme === 'dark' ? DARK_LOGO : LIGHT_LOGO

  const services = [
    { label: 'Website Development', href: '/website-development-company-mumbai' },
    { label: 'Custom Software', href: '/custom-software-development-mumbai' },
    { label: 'Mobile App Development', href: '/mobile-app-development-mumbai' },
    { label: 'E-Commerce Development', href: '/ecommerce-website-development-mumbai' },
    { label: 'ERP Software', href: '/erp-software-development-mumbai' },
    { label: 'WhatsApp Automation', href: '/whatsapp-automation' },
    { label: 'AI Calling Agent', href: '/ai-calling-agent' },
  ]

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Our Work', href: '/#work' },
    { label: 'Contact Us', href: '/#contact' },
  ]

  return (
    <footer
      className="w-full jakarta"
      style={{
        background: 'var(--footer-bg)',
        borderTop: '1px solid var(--footer-border)',
      }}
    >
      {/* ── Main footer grid ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Brand column ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <img src={logoSrc} className="w-10 transition-opacity duration-200" alt="CH Digital Solutions Logo" />
              <div className="flex flex-col leading-none">
                <span className="text-[18px] font-semibold outfit text-[var(--text-primary)]">CH Digital</span>
                <span className="text-xs font-light pl-0.5 text-[var(--text-primary)]">Solutions</span>
              </div>
            </Link>
            {/* Contact info */}
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="tel:9022863917"
                className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inter group"
              >
                <Phone className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors shrink-0" />
                9022863917 / 9313108560
              </a>
              <a
                href="mailto:chdigitalsolutions2025@gmail.com"
                className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inter group"
              >
                <Mail className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors shrink-0" />
                chdigitalsolutions2025@gmail.com
              </a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] inter mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inter flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1.5 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] inter mb-5">
              Services
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.href}
                    className="text-sm font-light text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inter flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1.5 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: '1px solid var(--footer-border)' }}
      >
        <p className="text-xs font-light text-[var(--text-muted)] inter text-center sm:text-left">
          © {new Date().getFullYear()} CH Digital Solutions. All rights reserved.
        </p>

        {/* Legal links */}
        <div className="flex items-center gap-1 inter">
          <Link
            to="/terms"
            className="text-xs font-light text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors px-3 py-1 rounded-md hover:bg-[var(--accent-light)]"
          >
            Terms and Conditions
          </Link>
          <span className="text-[var(--footer-border)] text-xs select-none">|</span>
          <Link
            to="/privacy-policy"
            className="text-xs font-light text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors px-3 py-1 rounded-md hover:bg-[var(--accent-light)]"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
