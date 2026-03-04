import React, { useRef, useState } from 'react'
import { Phone, Mail } from 'lucide-react'
import emailjs from '@emailjs/browser'

function Contact() {
  // laallalalalal
  const formRef = useRef(null);
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  // ========== REPLACE THESE WITH YOUR IDs ==========
  const SERVICE_ID = 'service_86kewxi';
  const TEMPLATE_ID = 'template_m95s72k';
  const PUBLIC_KEY = '890ar0HyIcIrep8te';
  // ==================================================

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




  return (
    <div className='bg-black w-full overflow-hidden'>
      <div
        className='bg-white/12 rounded-t-[30px] md:rounded-t-[55px] w-full py-12 md:py-16 lg:py-20'
      >
        <div className="text-white w-full flex flex-col lg:flex-row px-8 sm:px-8 md:px-16 lg:px-20 xl:px-28 max-w-7xl mx-auto">

          {/* Contact Info Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold jakarta mb-3">Get in Touch</h2>
            <p className="text-white/50 text-sm sm:text-base inter font-light mb-8 lg:mb-10 text-center lg:text-left max-w-sm">
              Have a project in mind? We'd love to hear from you and discuss how we can help.
            </p>

            {/* Contact Info Rows */}
            <div className='flex flex-col gap-5 w-full max-w-sm'>
              <div className='flex flex-row items-center gap-4'>
                <div className="bg-black/30 hover:bg-black/40 cursor-pointer w-14 h-14 sm:w-16 sm:h-16 flex justify-center items-center rounded-2xl transition-all shrink-0">
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white/80" />
                </div>
                <div className='flex flex-col'>
                  <div className='text-xs inter text-white/40 uppercase tracking-wider'>Phone</div>
                  <div className='text-sm sm:text-base inter text-white/75 mt-0.5'>9022863917 | 9313108560</div>
                </div>
              </div>
              <div className='flex flex-row items-center gap-4'>
                <div className="bg-black/30 hover:bg-black/40 cursor-pointer w-14 h-14 sm:w-16 sm:h-16 flex justify-center items-center rounded-2xl transition-all shrink-0">
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white/80" />
                </div>
                <div className='flex flex-col'>
                  <div className='text-xs inter text-white/40 uppercase tracking-wider'>Email</div>
                  <div className='text-sm sm:text-base inter text-white/75 mt-0.5 break-all'>chdigitalsolutions2025@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2 lg:max-w-lg lg:ml-auto mt-10 lg:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold jakarta mb-5 text-center lg:text-left">Send us a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="bg-black/40 rounded-2xl md:rounded-3xl border border-white/10 p-5 sm:p-6 md:p-8">

                {/* Row 1: Name + Phone */}
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <input
                    type="text"
                    name="name"
                    required
                    className='bg-white/8 w-full h-12 rounded-xl px-4 text-sm inter font-light placeholder:text-white/35 border border-white/8 focus:border-white/25 focus:outline-none transition-colors'
                    placeholder='Your Name'
                  />
                  <input
                    type="text"
                    name="phone"
                    required
                    className='bg-white/8 w-full h-12 rounded-xl px-4 text-sm inter font-light placeholder:text-white/35 border border-white/8 focus:border-white/25 focus:outline-none transition-colors'
                    placeholder='Phone Number'
                  />
                </div>

                {/* Row 2: Email + Service */}
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <input
                    type="email"
                    name="email"
                    required
                    className='bg-white/8 w-full h-12 rounded-xl px-4 text-sm inter font-light placeholder:text-white/35 border border-white/8 focus:border-white/25 focus:outline-none transition-colors'
                    placeholder='Email Address'
                  />
                  <select name="service" required className="w-full h-12 px-4 rounded-xl bg-white/8 text-white text-sm border border-white/8 focus:border-white/25 focus:outline-none transition-colors cursor-pointer">
                    <option value="" className='bg-neutral-900'>Select Service</option>
                    <option className='bg-neutral-900' value="Website Development">Website Development</option>
                    <option className='bg-neutral-900' value="System Development">System Development</option>
                    <option className='bg-neutral-900' value="Others">Others</option>
                  </select>
                </div>

                {/* Row 3: Message Textarea */}
                <textarea
                  name="message"
                  rows="4"
                  className='bg-white/8 w-full rounded-xl p-4 mb-5 text-sm inter font-light placeholder:text-white/35 border border-white/8 focus:border-white/25 focus:outline-none transition-colors resize-none'
                  placeholder='Tell us about your project...'
                />

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="text-green-400 text-sm mb-4 text-center inter">✓ Message sent successfully!</div>
                )}
                {status === 'error' && (
                  <div className="text-red-400 text-sm mb-4 text-center inter">✗ Failed to send. Please try again.</div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="bg-white w-full h-12 rounded-xl text-sm cursor-pointer inter hover:bg-white/90 text-black font-semibold transition-all disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending...' : 'Submit'}
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact