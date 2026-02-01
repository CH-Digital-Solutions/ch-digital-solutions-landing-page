import React from 'react'
import { ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <div className='w-full h-screen bg-black'>
      {/* sabse pehle apna main title  */}
      <div className="text-white relative w-full h-screen  md:text-[110px] md:font-bold flex flex-col justify-center items-center jakarta">
        <div className='z-0 absolute top-40'>Simplifying</div>
        <div className='z-1 absolute top-68'>Operations</div>
        {/* then niche ka description */}
        <div className=" w-160 h-5 absolute top-120 flex justify-center">
          <div className="text-white/70 text-[18px] font-light text-center leading-loose">From complex problems to clear solutions, We build software that reduces effort and removes manual work.</div>
        </div>
        {/* ab button ka time hai  */}

        <div className="flex items-center justify-between h-15 absolute top-150 w-115 transition-all">
          <div className="bg-white h-13 group  w-60 rounded-lg text-base font-semibold text-black inter flex items-center pl-4 hover:bg-white/90 cursor-pointer">Discuss your Use Case
            <ArrowRight className="ml-2 group-hover:ml-3 transition-all text-black size-5" />
          </div>
          <div className="bg-black h-13 border ml-3 border-white/30 font-medium hover:border-white/60 w-50 rounded-lg text-base text-white inter flex items-center pl-8 cursor-pointer">Explore Our Work</div>
        </div>

      </div>

    </div>
  )
}

export default Hero