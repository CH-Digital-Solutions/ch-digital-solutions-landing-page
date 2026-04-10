import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/home/Navbar'
import Footer from '../components/home/Footer'

/* ── Scroll-reveal hook ── */
function useScrollReveal(threshold = 0.12) {
  const ref = React.useRef(null)
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

/* ── Table of contents ── */
const TOC = [
  { id: 'intro', label: '1. Introduction' },
  { id: 'collect', label: '2. Information We Collect' },
  { id: 'use', label: '3. How We Use Your Information' },
  { id: 'cookies', label: '4. Cookies & Tracking' },
  { id: 'third-party', label: '5. Third-Party Services' },
  { id: 'sharing', label: '6. Data Sharing' },
  { id: 'retention', label: '7. Data Retention' },
  { id: 'security', label: '8. Data Security' },
  { id: 'rights', label: '9. Your Rights' },
  { id: 'children', label: '10. Children\'s Privacy' },
  { id: 'links', label: '11. Links to Other Websites' },
  { id: 'updates', label: '12. Changes to This Policy' },
  { id: 'contact', label: '13. Contact & Grievance Officer' },
]

/* ── Section wrapper ── */
function Section({ id, title, number, children }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div
      ref={ref}
      id={id}
      className="scroll-mt-28"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <div className="flex items-start gap-4 mb-4">
        <span
          className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold inter"
          style={{ background: 'var(--accent-light)', color: 'var(--text-primary)' }}
        >
          {number}
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] jakarta leading-tight pt-1">
          {title}
        </h2>
      </div>
      <div className="pl-12 text-[var(--text-secondary)] text-sm sm:text-[15px] leading-relaxed font-light inter space-y-3">
        {children}
      </div>
      <div className="pl-12 mt-7" style={{ height: '1px', background: 'var(--divider-color)' }} />
    </div>
  )
}

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--text-muted)' }} />
      <span>{children}</span>
    </li>
  )
}

function InfoCard({ label, children }) {
  return (
    <div
      className="p-4 rounded-xl"
      style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)] inter mb-2">{label}</p>
      <div className="text-sm text-[var(--text-secondary)] inter font-light space-y-1">
        {children}
      </div>
    </div>
  )
}

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('intro')

  useEffect(() => {
    const ids = TOC.map(t => t.id)
    const handler = () => {
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveSection(ids[i])
          return
        }
      }
      setActiveSection(ids[0])
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <style>{`
        .legal-toc-link {
          display: block;
          font-size: 12px;
          font-weight: 300;
          padding: 6px 12px;
          border-radius: 8px;
          color: var(--text-muted);
          text-decoration: none;
          transition: all 0.2s ease;
          line-height: 1.5;
          border-left: 2px solid transparent;
        }
        .legal-toc-link:hover {
          color: var(--text-primary);
          background: var(--accent-light);
        }
        .legal-toc-link.active {
          color: var(--text-primary);
          font-weight: 500;
          border-left-color: var(--text-primary);
          background: var(--accent-light);
        }
      `}</style>

      <div className="min-h-screen bg-[var(--bg-primary)] jakarta">
        <Navbar />

        {/* ── Hero banner ── */}
        <div className="pt-28 md:pt-40 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5 inter text-[11px] font-semibold tracking-wide uppercase"
              style={{ background: 'var(--accent-light)', color: 'var(--text-muted)', border: '1px solid var(--border-color)' }}
            >
              Legal
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-[1.1] mb-4">
              Privacy<br />Policy
            </h1>
            <p className="text-[var(--text-secondary)] font-light text-sm sm:text-base max-w-xl leading-relaxed inter">
              Your privacy matters to us. This policy explains what data we collect, how we use it, and your rights — in plain language.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-6 inter text-xs text-[var(--text-muted)]">
              <span>Last Updated: April 10, 2026</span>
              <span style={{ color: 'var(--divider-color)' }}>|</span>
              <span>Effective Date: April 10, 2026</span>
              <span style={{ color: 'var(--divider-color)' }}>|</span>
              <Link to="/terms" className="underline hover:text-[var(--text-primary)] transition-colors">
                Also read: Terms & Conditions →
              </Link>
            </div>
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28 pb-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* ── Sticky TOC sidebar ── */}
            <aside className="hidden lg:block lg:w-64 shrink-0">
              <div
                className="sticky top-28 rounded-2xl p-5"
                style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)] inter mb-3 px-3">
                  Contents
                </p>
                <nav className="flex flex-col gap-0.5">
                  {TOC.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`legal-toc-link ${activeSection === item.id ? 'active' : ''}`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* ── Sections ── */}
            <div className="flex-1 min-w-0 space-y-10">

              <Section id="intro" number="1" title="Introduction">
                <p>
                  CH Digital Solutions ("we", "us", or "our") is committed to protecting the privacy of anyone who visits our
                  website at <strong className="text-[var(--text-primary)]">chdigitalsolution.in</strong> or engages with our
                  services.
                </p>
                <p>
                  This Privacy Policy describes the types of information we collect, how we use that information, and the steps we
                  take to safeguard it. We do <strong className="text-[var(--text-primary)]">not</strong> sell, rent, or trade your
                  personal data to any third party.
                </p>
                <p>
                  This policy is intended to be compliant with the <strong className="text-[var(--text-primary)]">Digital Personal Data Protection (DPDP) Act, 2023</strong> and
                  the <strong className="text-[var(--text-primary)]">Information Technology Act, 2000</strong> of India.
                </p>
              </Section>

              <Section id="collect" number="2" title="Information We Collect">
                <p>We collect personal information in the following contexts:</p>

                <div className="mt-4 space-y-4">
                  <InfoCard label="From the Contact / Inquiry Form">
                    <ul className="space-y-1">
                      <li>• Full name</li>
                      <li>• Phone number</li>
                      <li>• Email address</li>
                      <li>• Service of interest</li>
                      <li>• Project description / message</li>
                    </ul>
                  </InfoCard>

                  <InfoCard label="Automatically (Website Analytics)">
                    <ul className="space-y-1">
                      <li>• IP address</li>
                      <li>• Browser type and version</li>
                      <li>• Device type (mobile/desktop)</li>
                      <li>• Pages visited and time spent</li>
                      <li>• Referral source (how you found our site)</li>
                    </ul>
                  </InfoCard>

                  <InfoCard label="From Clients During Active Projects">
                    <ul className="space-y-1">
                      <li>• Business name and details</li>
                      <li>• Project requirements and documentation</li>
                      <li>• Branding assets (logos, images)</li>
                      <li>• Login credentials / API keys (stored securely, used only as required)</li>
                    </ul>
                  </InfoCard>
                </div>
              </Section>

              <Section id="use" number="3" title="How We Use Your Information">
                <p>We use the information we collect for the following purposes:</p>
                <ul className="space-y-2 mt-2">
                  <Bullet>To respond to your inquiries and provide project quotes or consultations.</Bullet>
                  <Bullet>To deliver contracted services and communicate project milestones, updates, and invoices.</Bullet>
                  <Bullet>To improve our website's user experience based on usage analytics.</Bullet>
                  <Bullet>To send service-related communications necessary for the execution of your project.</Bullet>
                  <Bullet>To send marketing or promotional content — <strong className="text-[var(--text-primary)]">only with your explicit consent</strong> (opt-in basis).</Bullet>
                  <Bullet>To comply with applicable legal obligations.</Bullet>
                </ul>
                <p className="mt-3">
                  We will not use your data for any purpose not listed here without informing you first.
                </p>
              </Section>

              <Section id="cookies" number="4" title="Cookies & Tracking">
                <p>
                  Our website may use cookies — small text files stored in your browser — to improve your experience.
                </p>
                <div className="mt-4 space-y-3">
                  <InfoCard label="Essential Cookies">
                    <p>Required for basic site functionality. Cannot be disabled without affecting the site experience.</p>
                  </InfoCard>
                  <InfoCard label="Analytics Cookies">
                    <p>Used via Google Analytics (if active) to understand how visitors use our website. Data is anonymised and aggregated. We do <strong>not</strong> use advertising or behavioural tracking cookies.</p>
                  </InfoCard>
                </div>
                <p className="mt-4">
                  You can disable cookies via your browser settings at any time. Note that doing so may affect certain site features.
                </p>
              </Section>

              <Section id="third-party" number="5" title="Third-Party Services">
                <p>Our website and services use the following third-party tools — each with their own Privacy Policy:</p>
                <ul className="space-y-2 mt-2">
                  <Bullet><span><strong className="text-[var(--text-primary)]">EmailJS</strong> — Powers our contact form (email delivery). Your form data is processed through EmailJS servers.</span></Bullet>
                  <Bullet><span><strong className="text-[var(--text-primary)]">Google Analytics</strong> — Tracks anonymised website traffic and visitor behaviour.</span></Bullet>
                  <Bullet><span><strong className="text-[var(--text-primary)]">WhatsApp Business API (Meta)</strong> — Used when delivering WhatsApp Automation services to clients.</span></Bullet>
                  <Bullet><span><strong className="text-[var(--text-primary)]">AI Voice/Calling Platforms</strong> — Used when delivering AI Calling Agent services to clients.</span></Bullet>
                  <Bullet><span><strong className="text-[var(--text-primary)]">Vercel / Cloud Hosting Providers</strong> — Our website is hosted on Vercel. Server logs may be collected by the hosting provider.</span></Bullet>
                </ul>
                <p className="mt-3">
                  CH Digital Solutions is not responsible for the data practices of these third-party services. We encourage you to review their respective privacy policies.
                </p>
              </Section>

              <Section id="sharing" number="6" title="Data Sharing">
                <p>
                  We <strong className="text-[var(--text-primary)]">do not sell, rent, or trade</strong> your personal data to any third party under any circumstances.
                </p>
                <p>Your data may be shared only in the following limited circumstances:</p>
                <ul className="space-y-2 mt-2">
                  <Bullet>With third-party service providers (as listed in Section 5) that are strictly necessary to deliver our services — bound by data processing agreements.</Bullet>
                  <Bullet>With legal authorities or regulatory bodies if required by applicable law, court order, or government regulation.</Bullet>
                  <Bullet>In the event of a business acquisition or merger — in which case you will be notified and your rights will be preserved.</Bullet>
                </ul>
              </Section>

              <Section id="retention" number="7" title="Data Retention">
                <p>We retain your data only for as long as necessary for the purposes described in this policy:</p>
                <ul className="space-y-2 mt-2">
                  <Bullet><span><strong className="text-[var(--text-primary)]">Contact form inquiries:</strong> Retained for up to 2 years for business correspondence and reference.</span></Bullet>
                  <Bullet><span><strong className="text-[var(--text-primary)]">Client project data:</strong> Retained for up to 5 years post-project completion for legal, accounting, and tax compliance purposes.</span></Bullet>
                  <Bullet><span><strong className="text-[var(--text-primary)]">Analytics data:</strong> Aggregated and anonymised; retained per Google Analytics' default retention settings.</span></Bullet>
                </ul>
                <p className="mt-3">
                  You may request deletion of your personal data at any time by emailing us (see Section 9). We will process deletion requests within 30 days, subject to legal obligations.
                </p>
              </Section>

              <Section id="security" number="8" title="Data Security">
                <ul className="space-y-2">
                  <Bullet>We implement industry-standard security measures including encryption in transit (HTTPS/TLS) and access controls to protect your personal data.</Bullet>
                  <Bullet>Access to personal data is restricted to authorised personnel only, on a need-to-know basis.</Bullet>
                  <Bullet>Sensitive credentials shared for project purposes (e.g., API keys, hosting logins) are handled with care and deleted or returned post-project.</Bullet>
                  <Bullet>While we take all reasonable precautions, no digital system is 100% secure. CH Digital Solutions cannot guarantee absolute protection against all security breaches.</Bullet>
                </ul>
              </Section>

              <Section id="rights" number="9" title="Your Rights">
                <p>
                  Under the <strong className="text-[var(--text-primary)]">Digital Personal Data Protection (DPDP) Act, 2023</strong> and applicable law, you have the following rights regarding your personal data:
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { right: 'Right to Access', desc: 'Request a copy of the personal data we hold about you.' },
                    { right: 'Right to Correction', desc: 'Request correction of any inaccurate or incomplete personal data.' },
                    { right: 'Right to Erasure', desc: 'Request that your personal data be deleted, subject to legal retention requirements.' },
                    { right: 'Right to Withdraw Consent', desc: 'Withdraw consent for marketing communications at any time.' },
                    { right: 'Right to Grievance Redressal', desc: 'File a complaint with our grievance officer if you believe your privacy rights have been violated.' },
                    { right: 'Right to Data Portability', desc: 'Request your data in a structured, machine-readable format where technically feasible.' },
                  ].map((item) => (
                    <div
                      key={item.right}
                      className="p-4 rounded-xl"
                      style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
                    >
                      <p className="text-[var(--text-primary)] font-semibold text-sm mb-1">{item.right}</p>
                      <p className="text-[var(--text-muted)] text-xs font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4">
                  To exercise any of these rights, email us at{' '}
                  <a href="mailto:chdigitalsolutions2025@gmail.com" className="underline text-[var(--text-primary)] hover:opacity-70 transition-opacity">
                    chdigitalsolutions2025@gmail.com
                  </a>
                  . We will respond within <strong className="text-[var(--text-primary)]">30 days</strong>.
                </p>
              </Section>

              <Section id="children" number="10" title="Children's Privacy">
                <p>
                  Our website and services are <strong className="text-[var(--text-primary)]">not directed at individuals under the age of 18</strong>.
                  We do not knowingly collect personal information from minors.
                </p>
                <p>
                  If we become aware that we have inadvertently collected personal data from a person under 18, we will promptly
                  delete such data from our records. If you believe a minor's data has been submitted, please contact us immediately.
                </p>
              </Section>

              <Section id="links" number="11" title="Links to Other Websites">
                <p>
                  Our website may contain links to third-party websites — for example, portfolio projects we have built for clients,
                  or tool documentation. These external sites have their own privacy policies and are not under our control.
                </p>
                <p>
                  CH Digital Solutions is <strong className="text-[var(--text-primary)]">not responsible</strong> for the content,
                  accuracy, or privacy practices of any third-party websites. We encourage you to review the Privacy Policy of any
                  external site you visit.
                </p>
              </Section>

              <Section id="updates" number="12" title="Changes to This Privacy Policy">
                <ul className="space-y-2">
                  <Bullet>We may update this Privacy Policy from time to time to reflect changes in our practices, services, or applicable law.</Bullet>
                  <Bullet>The "Last Updated" date at the top of this page will always reflect the most recent revision.</Bullet>
                  <Bullet>For significant changes, we will notify affected users via email or a prominent notice on our website.</Bullet>
                  <Bullet>Your continued use of our website or services after any changes constitutes acceptance of the updated Privacy Policy.</Bullet>
                </ul>
              </Section>

              <Section id="contact" number="13" title="Contact & Grievance Officer">
                <p>
                  For any privacy-related queries, concerns, data requests, or to file a complaint, please reach out to us:
                </p>
                <ul className="space-y-2 mt-2">
                  <Bullet><span><strong className="text-[var(--text-primary)]">Designated Privacy Contact / Grievance Officer:</strong> CH Digital Solutions Team</span></Bullet>
                  <Bullet><span><strong className="text-[var(--text-primary)]">Email:</strong> chdigitalsolutions2025@gmail.com</span></Bullet>
                  <Bullet><span><strong className="text-[var(--text-primary)]">Phone:</strong> 9022863917 / 9313108560</span></Bullet>
                  <Bullet><span><strong className="text-[var(--text-primary)]">Address:</strong> Mumbai, Maharashtra, India</span></Bullet>
                  <Bullet><span><strong className="text-[var(--text-primary)]">Response Time:</strong> Within 30 days of receipt of complaint</span></Bullet>
                </ul>

                {/* CTA */}
                <div
                  className="mt-8 p-6 rounded-2xl"
                  style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
                >
                  <p className="text-[var(--text-primary)] font-semibold text-base mb-1">Questions about your data?</p>
                  <p className="text-[var(--text-muted)] text-sm font-light mb-4">We are happy to help. Reach out to our team directly.</p>
                  <a
                    href="mailto:chdigitalsolutions2025@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:gap-3"
                    style={{ background: 'var(--cta-bg)', color: 'var(--cta-text)' }}
                  >
                    Email Us
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                </div>
              </Section>

            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
