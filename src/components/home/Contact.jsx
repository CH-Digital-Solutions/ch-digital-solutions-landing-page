import React, { useRef, useState } from 'react'
import { Phone, Mail } from 'lucide-react'
import emailjs from '@emailjs/browser'

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const SERVICE_ID = 'service_86kewxi';
  const TEMPLATE_ID = 'template_m95s72k';
  const PUBLIC_KEY = '890ar0HyIcIrep8te';

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus(''), 3000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      });
  };

  /*
    MOBILE DESIGN PHILOSOPHY (< md):
      – "Grouped Card" pattern (iOS Settings / banking apps)
      – ONE rounded card wraps ALL fields
      – Fields separated by a hairline divider, no borders on individual inputs
      – Small muted label above each input within the card
      – Inputs are transparent with no own border — card provides the container
      – Submit button sits BELOW the card, full-width, tall for thumb comfort

    DESKTOP DESIGN (≥ md):
      – Original grid card: rounded-3xl, bg, border, shadow, p-8
      – Inputs side-by-side in pairs with their own borders/rounding
  */

  // Shared field-row class: mobile padding + divider / desktop: remove both
  const fieldRow = 'px-4 pt-4 pb-3.5 border-b border-[var(--form-border)] md:border-b-0 md:p-0 md:flex-1'

  // Shared label: visible on mobile only
  const label = 'block text-[9px] inter uppercase tracking-widest text-[var(--text-muted)] mb-1.5 md:hidden'

  // Shared input: transparent on mobile (card is the container), full boxed on desktop
  const input =
    'bg-transparent w-full h-9 text-sm inter text-[var(--text-primary)] ' +
    'placeholder:text-[var(--input-placeholder)] focus:outline-none caret-[var(--text-primary)] ' +
    'md:bg-[var(--input-bg)] md:h-12 md:px-4 md:rounded-xl ' +
    'md:border md:border-[var(--input-border)] md:focus:border-[var(--input-focus-border)] md:transition-colors'

  return (
    <div className='bg-(--bg-primary) w-full overflow-hidden'>
      <div className='bg-[var(--contact-section-bg)] rounded-t-[30px] md:rounded-t-[55px] w-full py-12 md:py-16 lg:py-20'>
        <div className="text-[var(--text-primary)] w-full flex flex-col lg:flex-row px-8 sm:px-8 md:px-16 lg:px-20 xl:px-28 max-w-7xl mx-auto">

          {/* ── Contact Info — untouched ── */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold jakarta mb-3">Get in Touch</h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base inter font-light mb-8 lg:mb-10 text-center lg:text-left max-w-sm">
              Have a project in mind? We'd love to hear from you and discuss how we can help.
            </p>
            <div className='flex flex-col gap-5 w-full max-w-sm'>
              <div className='flex flex-row items-center gap-4'>
                <div className="bg-[var(--contact-icon-bg)] hover:bg-[var(--contact-icon-hover)] cursor-pointer w-14 h-14 sm:w-16 sm:h-16 flex justify-center items-center rounded-2xl transition-all shrink-0">
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--contact-icon-color)]" />
                </div>
                <div className='flex flex-col'>
                  <div className='text-xs inter text-[var(--text-muted)] uppercase tracking-wider'>Phone</div>
                  <div className='text-sm sm:text-base inter text-[var(--text-secondary)] mt-0.5'>9022863917 | 9313108560</div>
                </div>
              </div>
              <div className='flex flex-row items-center gap-4'>
                <div className="bg-[var(--contact-icon-bg)] hover:bg-[var(--contact-icon-hover)] cursor-pointer w-14 h-14 sm:w-16 sm:h-16 flex justify-center items-center rounded-2xl transition-all shrink-0">
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--contact-icon-color)]" />
                </div>
                <div className='flex flex-col'>
                  <div className='text-xs inter text-[var(--text-muted)] uppercase tracking-wider'>Email</div>
                  <div className='text-sm sm:text-base inter text-[var(--text-secondary)] mt-0.5 break-all'>chdigitalsolutions2025@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Form Section ── */}
          <div className="w-full lg:w-1/2 lg:max-w-lg lg:ml-auto mt-10 lg:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold jakarta mb-5 text-center lg:text-left">
              Send us a Message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit}>
              {/*
                MOBILE : one unified card — rounded-2xl, bg, border, overflow-hidden
                         fields separated by hairline dividers inside (border-b)
                DESKTOP: rounded-3xl card with p-8 padding
              */}
              <div
                className="rounded-2xl border border-[var(--form-border)] bg-[var(--form-bg)] overflow-hidden md:rounded-3xl md:border md:border-[var(--form-border)] md:p-8"
                style={{ boxShadow: 'var(--shadow-soft)' }}
              >

                {/* ── Name + Phone ── */}
                <div className="md:flex md:flex-row md:gap-4 md:mb-4">
                  {/* Name */}
                  <div className={fieldRow}>
                    <label className={label}>Your Name</label>
                    <input type="text" name="name" required placeholder="Your Name" className={input} />
                  </div>
                  {/* Phone */}
                  <div className={fieldRow}>
                    <label className={label}>Phone Number</label>
                    <input type="text" name="phone" required placeholder="Phone Number" className={input} />
                  </div>
                </div>

                {/* ── Email + Service ── */}
                <div className="md:flex md:flex-row md:gap-4 md:mb-4">
                  {/* Email */}
                  <div className={fieldRow}>
                    <label className={label}>Email Address</label>
                    <input type="email" name="email" required placeholder="Email Address" className={input} />
                  </div>
                  {/* Service */}
                  <div className={fieldRow}>
                    <label className={label}>Service</label>
                    <select
                      name="service"
                      required
                      className={
                        'bg-transparent w-full h-9 text-sm inter text-[var(--text-primary)] ' +
                        'focus:outline-none cursor-pointer ' +
                        'md:bg-[var(--input-bg)] md:h-12 md:px-4 md:rounded-xl ' +
                        'md:border md:border-[var(--input-border)] md:focus:border-[var(--input-focus-border)] md:transition-colors'
                      }
                    >
                      <option value="" className='bg-[var(--select-option-bg)]'>Select Service</option>
                      <option className='bg-[var(--select-option-bg)]' value="Website Development">Website Development</option>
                      <option className='bg-[var(--select-option-bg)]' value="Custom Software Development">Custom Software Development</option>
                      <option className='bg-[var(--select-option-bg)]' value="Mobile App Development">Mobile App Development</option>
                      <option className='bg-[var(--select-option-bg)]' value="Ecommerce Website Development">Ecommerce Website Development</option>
                      <option className='bg-[var(--select-option-bg)]' value="ERP Software Development">ERP Software Development</option>
                      <option className='bg-[var(--select-option-bg)]' value="WhatsApp Automation">WhatsApp Automation</option>
                      <option className='bg-[var(--select-option-bg)]' value="AI Calling Agent">AI Calling Agent</option>
                      <option className='bg-[var(--select-option-bg)]' value="Others">Others</option>
                    </select>
                  </div>
                </div>

                {/* ── Message ── last row: no bottom divider */}
                <div className="px-4 pt-4 pb-4 border-b border-[var(--form-border)] md:border-b-0 md:p-0 md:mb-5">
                  <label className={label}>Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us about your project..."
                    className={
                      'bg-transparent w-full text-sm inter text-[var(--text-primary)] ' +
                      'placeholder:text-[var(--input-placeholder)] focus:outline-none resize-none ' +
                      'caret-[var(--text-primary)] ' +
                      'md:bg-[var(--input-bg)] md:rounded-xl md:p-4 ' +
                      'md:border md:border-[var(--input-border)] md:focus:border-[var(--input-focus-border)] md:transition-colors'
                    }
                  />
                </div>

                {/* ── Status + Submit — inside the card on both mobile & desktop ── */}
                <div className="px-4 py-4 md:px-0 md:pb-0 md:pt-0">
                  {status === 'success' && (
                    <div className="text-green-500 text-sm mb-3 text-center inter">✓ Message sent successfully!</div>
                  )}
                  {status === 'error' && (
                    <div className="text-red-500 text-sm mb-3 text-center inter">✗ Failed to send. Please try again.</div>
                  )}
                  {/* Taller on mobile for comfortable thumb tap */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="bg-[var(--cta-bg)] w-full h-14 md:h-12 rounded-xl text-sm cursor-pointer inter hover:bg-[var(--cta-hover)] text-[var(--cta-text)] font-semibold transition-all disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact