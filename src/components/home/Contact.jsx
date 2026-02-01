import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'

function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] // Jab element screen mein aaye
  })

  // Scroll ke basis pe values transform karo
  const y = useTransform(scrollYProgress, [0, 1], [800, -450]) // 100px neeche se -50px upar tak
  // const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]) // Fade in effect

  return (
    <div className='bg-black w-full'>
      <motion.div
        className=' bg-white/12 rounded-t-[55px] w-full h-150'
        ref={ref}
        style={{ y }}
      >
        <div className="text-white w-full h-full flex flex-row">
          <div className="contact w-100 ml-60 flex flex-col">
            <div className='flex flex-row grid-cols-2 gap-50 mt-7 '>
              <div className='flex flex-col'>
              <div className="bg-black/30 hover:bg-black/40  cursor-pointer group pl-1.5 w-25 h-25 flex justify-center hover:w-26 hover:h-26 transition-all items-center rounded-3xl mt-5 flex-col ">
                <Phone className="w-15 h-15 group-hover:w-16 group-hover:h-15.5 transition-all text-white/80 mr-2" />
                
              </div>
              <div className='text-sm absolute left-50 top-43 inter w-50 text-white/55'>9313108560 / 9558700388</div>
              </div>
              <div className="flex flex-col">
              <div className="bg-black/30 hover:bg-black/40  cursor-pointer group pl-1.5 w-25 h-25 flex justify-center hover:w-26 hover:h-26 transition-all items-center rounded-3xl mt-5 absolute left-145 ">
                <Mail className="w-15 h-15 group-hover:w-16 group-hover:h-15.5 transition-all text-white/80 mr-2" />  
              </div>
              <div className='text-sm absolute left-138 top-43 inter w-50 text-white/55'>chlabs2025@gmail.com</div>
              </div>
            </div>
            <div className="visuals text-white mt-30 h-full flex flex-row">
              <div className="boy">
                <img src="../../../Contact/BoyHeadphone.png" className='absolute w-100 bottom-0 left-25' alt="" />
              </div>
              <div className="message ml-10">
                <img src="../../../Contact/TextArea.png" className='absolute w-100 bottom-20 left-115' alt="" />
              </div>

            </div>
          </div>
          <div className="form ml-80 mt-20">
            <form action="">
              <div className="area p-10 bg-black/45 rounded-t-4xl h-full w-110">
                <input type="text" className='bg-white/10 focus:border-none w-90 h-12 rounded-lg p-5 mb-8 mt-2 inter font-extralight' placeholder='Enter your Phone Number ' />
                <input type="text" className='bg-white/10 focus:border-white/20 w-90 h-12 rounded-lg p-5 mb-8 inter font-extralight' placeholder='Enter your Email' />
                <select className="accent-white w-full h-12 px-4 rounded-lg bg-white/5 text-white border mb-8 border-white/20 focus:outline-none">
                  <option value=""className='bg-black '>Select Service</option>
                  <option  className='bg-black' value="web">Website Development</option>
                  <option  className='bg-black' value="system">System Development</option>
                  <option  className='bg-black' value="others">Others</option>
                </select>

                <input type="text" className='bg-white/10 focus:border-white/20 w-90 h-24 pb-15 rounded-lg p-5 mb-8 inter font-extralight' placeholder='Any Message for us...' />
                <div className="flex flex-row w-full mb-5">
                <button className="border border-white/25 w-90 h-12 rounded-lg font-light inter transition-all hover:border-white/35 cursor-pointer">Clear Form</button>
                <button className="bg-white w-90 h-12 rounded-lg cursor-pointer inter hover:bg-white/85  text-black ml-5 font-semibold  transition-all">Submit</button>
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