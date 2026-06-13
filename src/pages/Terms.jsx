import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/home/Navbar'
import Footer from '../components/home/Footer'
import SEO from '../components/SEO'


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
  { id: 'intro', label: '1. Introduction & Acceptance' },
  { id: 'about', label: '2. About CH Digital Solutions' },
  { id: 'services', label: '3. Services Provided' },
  { id: 'obligations', label: '4. Client Obligations' },
  { id: 'payment', label: '5. Payment Terms' },
  { id: 'ip', label: '6. Intellectual Property' },
  { id: 'confidentiality', label: '7. Confidentiality' },
  { id: 'warranties', label: '8. Warranties & Disclaimers' },
  { id: 'liability', label: '9. Limitation of Liability' },
  { id: 'termination', label: '10. Termination' },
  { id: 'changes', label: '11. Modifications & Change Requests' },
  { id: 'law', label: '12. Governing Law & Jurisdiction' },
  { id: 'contact', label: '13. Contact Us' },
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

export default function Terms() {
  const [activeSection, setActiveSection] = useState('intro')

  /* Highlight active TOC item on scroll */
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
      <SEO
        title="Terms & Conditions | CH Digital Solutions"
        description="Review the terms and conditions for engaging CH Digital Solutions (CH Labs) for website, mobile app, and custom software development services."
        keywords="terms and conditions, client agreement, CH Digital Solutions terms, legal services agreement"
        canonicalPath="/terms"
        noindex={true}
      />
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
              Terms &<br />Conditions
            </h1>
            <p className="text-[var(--text-secondary)] font-light text-sm sm:text-base max-w-xl leading-relaxed inter">
              Please read these terms carefully before using our services. By engaging CH Digital Solutions, you agree to be bound by these terms.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-6 inter text-xs text-[var(--text-muted)]">
              <span>Last Updated: April 10, 2026</span>
              <span style={{ color: 'var(--divider-color)' }}>|</span>
              <span>Effective Date: April 10, 2026</span>
              <span style={{ color: 'var(--divider-color)' }}>|</span>
              <Link to="/privacy-policy" className="underline hover:text-[var(--text-primary)] transition-colors">
                Also read: Privacy Policy →
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

              <Section id="intro" number="1" title="Introduction & Acceptance of Terms">
                <p>
                  Welcome to CH Digital Solutions (also operating as CH Labs). By accessing our website at{' '}
                  <strong className="text-[var(--text-primary)]">chdigitalsolution.in</strong> or by engaging our services, you
                  agree to be bound by these Terms and Conditions in their entirety.
                </p>
                <p>
                  These terms constitute a legally binding agreement between you (the client or visitor) and CH Digital Solutions.
                  If you do not agree with any part of these terms, please refrain from using our website or services.
                </p>
                <p>
                  We may update these terms periodically without prior notice. Your continued use of our website or services
                  following any changes constitutes your acceptance of the updated terms.
                </p>
              </Section>

              <Section id="about" number="2" title="About CH Digital Solutions">
                <p>
                  <strong className="text-[var(--text-primary)]">CH Digital Solutions</strong> (operating as CH Labs) is a software
                  development agency based in Mumbai, Maharashtra, India.
                </p>
                <ul className="space-y-2 mt-2">
                  <Bullet><span><strong className="text-[var(--text-primary)]">Email:</strong> chdigitalsolutions2025@gmail.com</span></Bullet>
                  <Bullet><span><strong className="text-[var(--text-primary)]">Phone:</strong> 9022863917 / 9313108560</span></Bullet>
                  <Bullet><span><strong className="text-[var(--text-primary)]">Location:</strong> Mumbai, Maharashtra, India</span></Bullet>
                  <Bullet><span><strong className="text-[var(--text-primary)]">Website:</strong> chdigitalsolution.in</span></Bullet>
                </ul>
              </Section>

              <Section id="services" number="3" title="Services Provided">
                <p>CH Digital Solutions offers the following services:</p>
                <ul className="space-y-2 mt-2">
                  <Bullet>Website Development (Business, Landing, and Portfolio Websites)</Bullet>
                  <Bullet>Custom Software Development</Bullet>
                  <Bullet>Mobile App Development (Android & iOS)</Bullet>
                  <Bullet>E-Commerce Website Development</Bullet>
                  <Bullet>ERP Software Development</Bullet>
                  <Bullet>WhatsApp Business Automation (AI-powered messaging)</Bullet>
                  <Bullet>AI Calling Agents</Bullet>
                </ul>
                <p className="mt-3">
                  All services are <strong className="text-[var(--text-primary)]">project/contract-based</strong> and the scope of
                  work is defined in individual project proposals or signed agreements. CH Digital Solutions reserves the right to
                  accept or decline any project at its sole discretion.
                </p>
              </Section>

              <Section id="obligations" number="4" title="Client Obligations">
                <p>As a client, you agree to the following:</p>
                <ul className="space-y-2 mt-2">
                  <Bullet>Provide accurate, complete, and timely project requirements, brand assets, content, and approvals as requested.</Bullet>
                  <Bullet>Delays caused by the client (e.g., delayed feedback, missing content) do not constitute a breach by CH Digital Solutions and do not entitle you to refunds or penalty claims.</Bullet>
                  <Bullet>You are solely responsible for ensuring you have full rights, licenses, and permissions to any content, images, trademarks, or material you provide to us for use in your project.</Bullet>
                  <Bullet>Maintain the confidentiality of any login credentials, API keys, or access tokens shared for project purposes.</Bullet>
                </ul>
              </Section>

              <Section id="payment" number="5" title="Payment Terms">
                <ul className="space-y-2">
                  <Bullet>Payment milestones (e.g., advance deposit, mid-project payment, final payment) are as agreed in the project proposal or invoice.</Bullet>
                  <Bullet>All prices are quoted in <strong className="text-[var(--text-primary)]">Indian Rupees (INR)</strong> and are exclusive of Goods and Services Tax (GST) unless explicitly stated.</Bullet>
                  <Bullet>Late or non-payments may result in suspension of work, delayed delivery, or project cancellation at CH Digital Solutions' discretion.</Bullet>
                  <Bullet>Once a milestone deliverable has been reviewed and accepted by the client, no refund will be issued for that milestone.</Bullet>
                  <Bullet>Payments must be made via the methods specified in the project invoice (bank transfer, UPI, etc.).</Bullet>
                </ul>
              </Section>

              <Section id="ip" number="6" title="Intellectual Property">
                <p>
                  <strong className="text-[var(--text-primary)]">Before Full Payment:</strong> All designs, code, prototypes, and
                  deliverables produced during the project remain the exclusive intellectual property of CH Digital Solutions until
                  full payment has been received.
                </p>
                <p className="mt-3">
                  <strong className="text-[var(--text-primary)]">After Full Payment:</strong> Upon receipt of full payment, ownership of the final agreed deliverable (website, software, app) transfers to the client. This does not include underlying frameworks, libraries, or methodologies owned by CH Digital Solutions.
                </p>
                <p className="mt-3">
                  <strong className="text-[var(--text-primary)]">Portfolio Rights:</strong> CH Digital Solutions retains the right to showcase completed work (screenshots, descriptions, URLs) in its portfolio and marketing materials, unless a specific Non-Disclosure Agreement (NDA) has been signed excluding this right.
                </p>
                <p className="mt-3">
                  <strong className="text-[var(--text-primary)]">Third-Party Components:</strong> Open-source or licensed third-party tools (e.g., npm packages, WordPress themes, APIs) included in your project retain their original licenses. The client is responsible for complying with those licenses.
                </p>
              </Section>

              <Section id="confidentiality" number="7" title="Confidentiality">
                <ul className="space-y-2">
                  <Bullet>CH Digital Solutions agrees not to disclose client-specific business information, data, or strategies to third parties without written consent.</Bullet>
                  <Bullet>The client agrees not to share CH Digital Solutions' internal pricing structures, methodologies, proprietary tools, or processes with third parties.</Bullet>
                  <Bullet>Confidentiality obligations do not apply to information that is publicly available, independently developed, or required to be disclosed by law.</Bullet>
                  <Bullet>For projects requiring stricter confidentiality, a separate NDA may be signed upon request.</Bullet>
                </ul>
              </Section>

              <Section id="warranties" number="8" title="Warranties & Disclaimers">
                <p>CH Digital Solutions warrants that:</p>
                <ul className="space-y-2 mt-2">
                  <Bullet>Services will be delivered with reasonable skill and care, to a professional standard.</Bullet>
                  <Bullet>A <strong className="text-[var(--text-primary)]">30-day post-launch warranty</strong> covers bug fixes for issues that arise from our development (excluding client-side changes or third-party service failures).</Bullet>
                </ul>
                <p className="mt-4">CH Digital Solutions does <strong className="text-[var(--text-primary)]">not</strong> warrant:</p>
                <ul className="space-y-2 mt-2">
                  <Bullet>Specific business outcomes such as increased sales, revenue, or SEO rankings, unless explicitly promised in a signed written agreement.</Bullet>
                  <Bullet>That the product will be error-free beyond the scope of what was agreed.</Bullet>
                  <Bullet>Availability or performance of third-party services (hosting, payment gateways, WhatsApp API, Google services, etc.).</Bullet>
                </ul>
                <p className="mt-3">
                  Additional features or changes requested after a project scope has been signed off will be treated as new change requests and quoted separately.
                </p>
              </Section>

              <Section id="liability" number="9" title="Limitation of Liability">
                <ul className="space-y-2">
                  <Bullet>CH Digital Solutions' maximum aggregate liability for any claim arising from a project shall not exceed the <strong className="text-[var(--text-primary)]">total amount paid by the client for that specific project</strong>.</Bullet>
                  <Bullet>CH Digital Solutions shall not be liable for any indirect, incidental, special, or consequential damages including but not limited to: lost revenue, lost data, business interruption, or reputational harm.</Bullet>
                  <Bullet>We are not liable for outages, downtime, or failures caused by third-party services (e.g., cloud hosting, payment providers, WhatsApp/Meta API, AI service providers).</Bullet>
                  <Bullet>Data loss or corruption caused by client-side action, third-party systems, or force majeure events is outside our liability.</Bullet>
                </ul>
              </Section>

              <Section id="termination" number="10" title="Termination">
                <ul className="space-y-2">
                  <Bullet>Either party may terminate a project agreement with <strong className="text-[var(--text-primary)]">written notice</strong> (email constitutes written notice) to the other party.</Bullet>
                  <Bullet>Upon termination by the client, work completed to the termination date will be invoiced and must be paid. No refund will be issued for work already delivered and accepted.</Bullet>
                  <Bullet>Upon termination by CH Digital Solutions due to client breach (e.g., non-payment), all deliverables remain the property of CH Digital Solutions until outstanding amounts are settled.</Bullet>
                  <Bullet>Advance payments for unstarted work may be refunded at CH Digital Solutions' sole discretion, minus any costs already incurred.</Bullet>
                </ul>
              </Section>

              <Section id="changes" number="11" title="Modifications & Change Requests">
                <ul className="space-y-2">
                  <Bullet>Any scope changes, additions, or modifications beyond the originally agreed project scope will be quoted and billed separately.</Bullet>
                  <Bullet>Change requests must be submitted in writing (email or official channel) and require written approval from CH Digital Solutions before work begins.</Bullet>
                  <Bullet>Verbal change requests are not binding. Agreed changes will be reflected in a revised quote or addendum.</Bullet>
                </ul>
              </Section>

              <Section id="law" number="12" title="Governing Law & Jurisdiction">
                <p>
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of{' '}
                  <strong className="text-[var(--text-primary)]">India</strong>, specifically including but not limited to the
                  Information Technology Act, 2000 and applicable Indian contract law.
                </p>
                <p className="mt-3">
                  Any disputes arising from or in connection with these terms shall be subject to the exclusive jurisdiction of the
                  courts of <strong className="text-[var(--text-primary)]">Mumbai, Maharashtra, India</strong>.
                </p>
              </Section>

              <Section id="contact" number="13" title="Contact Us">
                <p>For any legal queries, concerns, or clarifications regarding these Terms and Conditions:</p>
                <ul className="space-y-2 mt-2">
                  <Bullet><span><strong className="text-[var(--text-primary)]">Email:</strong> chdigitalsolutions2025@gmail.com</span></Bullet>
                  <Bullet><span><strong className="text-[var(--text-primary)]">Phone:</strong> 9022863917 / 9313108560</span></Bullet>
                  <Bullet><span><strong className="text-[var(--text-primary)]">Location:</strong> Mumbai, Maharashtra, India</span></Bullet>
                </ul>

                {/* CTA */}
                <div
                  className="mt-8 p-6 rounded-2xl"
                  style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
                >
                  <p className="text-[var(--text-primary)] font-semibold text-base mb-1">Have a project in mind?</p>
                  <p className="text-[var(--text-muted)] text-sm font-light mb-4">Reach out and let's discuss how we can help you.</p>
                  <Link
                    to="/#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:gap-3"
                    style={{ background: 'var(--cta-bg)', color: 'var(--cta-text)' }}
                  >
                    Contact Us
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
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
