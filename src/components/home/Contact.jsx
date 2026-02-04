import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'
import emailjs from '@emailjs/browser'

function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [300, -200])

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

  const handleClear = () => {
    formRef.current.reset();
  };

  return (
    <div className='bg-black w-full overflow-hidden'>
      <motion.div
        className='bg-white/12 rounded-t-[30px] md:rounded-t-[55px] w-full min-h-screen md:min-h-0 md:h-160 py-8 md:py-0'
        ref={ref}
        style={{ y }}
      >
        <div className="text-white w-full h-full flex flex-col lg:flex-row px-8 sm:px-8 md:px-16 lg:px-20">
          
          {/* Contact Info Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start pt-6 md:pt-10">
            <h2 className="text-2xl sm:text-3xl font-bold jakarta mb-6 lg:hidden">Get in Touch</h2>
            
            <div className='flex flex-row gap-10 md:gap-20 sm:gap-10 md:ml-25'>
              <div className='flex flex-col items-center w-40 md:w-50'>
                <div className="bg-black/30 hover:bg-black/40 cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center rounded-2xl md:rounded-3xl transition-all">
                  <Phone className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white/80" />
                </div>
                <div className='text-xs sm:text-sm inter text-white/55 mt-4 text-center'>9022863917 | 9313108560</div>
              </div>
              <div className='flex flex-col items-center'>
                <div className="bg-black/30 hover:bg-black/40 cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center rounded-2xl md:rounded-3xl transition-all">
                  <Mail className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white/80" />  
                </div>
                <div className='text-xs sm:text-sm inter text-white/55 mt-4 text-center'>chlabs2025@gmail.com</div>
              </div>
            </div>
            
            <div className="hidden lg:flex flex-row mt-0 h-10">
              <div className="boy">
                <img src="../../../Contact/BoyHeadphone.png" className='w-100 ml-2 mt-20' alt="" />
              </div>
              <div className="message">
                <img src="../../../Contact/TextArea.png" className='w-70 xl:w-80' alt="" />
              </div>
            </div>
          </div>
          
          {/* Form Section */}
          <div className="w-full lg:w-120 lg:ml-45 mt-8 lg:mt-10">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="bg-black/45 rounded-2xl md:rounded-4xl p-5 sm:p-6 md:p-8 lg:p-10">
                <input 
                  type="text" 
                  name="name"
                  required
                  className='bg-white/10 w-full h-11 sm:h-12 rounded-lg p-4 sm:p-5 mb-4 sm:mb-5 text-sm sm:text-base inter font-extralight placeholder:text-white/40' 
                  placeholder='Your Name' 
                />
                <input 
                  type="text" 
                  name="phone"
                  required
                  className='bg-white/10 w-full h-11 sm:h-12 rounded-lg p-4 sm:p-5 mb-4 sm:mb-5 text-sm sm:text-base inter font-extralight placeholder:text-white/40' 
                  placeholder='Phone Number' 
                />
                <input 
                  type="email" 
                  name="email"
                  required
                  className='bg-white/10 w-full h-11 sm:h-12 rounded-lg p-4 sm:p-5 mb-4 sm:mb-5 text-sm sm:text-base inter font-extralight placeholder:text-white/40' 
                  placeholder='Email Address' 
                />
                <select name="service" required className="w-full h-11 sm:h-12 px-4 rounded-lg bg-white/5 text-white text-sm sm:text-base border mb-4 sm:mb-5 border-white/20 focus:outline-none">
                  <option value="" className='bg-black'>Select Service</option>
                  <option className='bg-black' value="Website Development">Website Development</option>
                  <option className='bg-black' value="System Development">System Development</option>
                  <option className='bg-black' value="Others">Others</option>
                </select>

                <input 
                  type="text" 
                  name="message"
                  className='bg-white/10 w-full h-11 sm:h-12 rounded-lg p-4 sm:p-5 mb-4 sm:mb-5 text-sm sm:text-base inter font-extralight placeholder:text-white/40' 
                  placeholder='Any Message...' 
                />
                
                {/* Status Messages */}
                {status === 'success' && (
                  <div className="text-green-400 text-sm mb-4 text-center">✓ Message sent successfully!</div>
                )}
                {status === 'error' && (
                  <div className="text-red-400 text-sm mb-4 text-center">✗ Failed to send. Please try again.</div>
                )}
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button 
                    type="button" 
                    onClick={handleClear}
                    className="border border-white/25 w-full sm:w-1/2 h-11 sm:h-12 rounded-lg text-sm sm:text-base font-light inter transition-all hover:border-white/35 cursor-pointer text-white"
                  >
                    Clear Form
                  </button>
                  <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className="bg-white w-full sm:w-1/2 h-11 sm:h-12 rounded-lg text-sm sm:text-base cursor-pointer inter hover:bg-white/85 text-black font-semibold transition-all disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Sending...' : 'Submit'}
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact