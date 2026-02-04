import React from 'react'
import { ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <div className='w-full min-h-screen bg-black px-4 md:px-0'>
      {/* Main content container */}
      <div className="text-white w-full min-h-screen flex flex-col justify-center items-center jakarta pt-20 md:pt-0 md:mt-7">
        
        {/* Title */}
        <div className="text-center">
          <div className='text-5xl sm:text-5xl md:text-7xl lg:text-[90px] font-bold'>Simplifying</div>
          <div className='text-5xl mb-5 md:mb-0 sm:text-5xl md:text-7xl lg:text-[90px] font-bold mt-2 '>Operations</div>
        </div>
        
        {/* Description */}
        <div className="max-w-70 mb-3 md:mb-0 sm:max-w-md md:max-w-2xl mt-6 md:mt-10">
          <div className="text-white/70 text-sm md:w-[600px] sm:text-base md:text-[16px] font-light text-center leading-6 md:leading-9">
            From complex problems to clear solutions, We build software that reduces effort and removes manual work.
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 md:mt-12 w-full sm:w-auto px-4 sm:px-0">
          <a href='#contact' className="w-full sm:w-auto">
            <div className="bg-white h-12 sm:h-13 group w- sm:w-56 rounded-lg text-sm md:text-[14.5px] sm:text-base font-semibold text-black inter flex items-center justify-center sm:justify-start sm:pl-4 hover:bg-white/90 cursor-pointer">
              Discuss your Use Case
              <ArrowRight className="ml-2 group-hover:ml-3 transition-all text-black size-4 sm:size-5" />
            </div>
          </a>
          <a href='#work' className="w-full sm:w-auto">
            <div className="bg-black h-12 sm:h-13 border border-white/30 font-medium hover:border-white/60 w-full sm:w-44 rounded-lg text-sm md:text-[14.5px] sm:text-base text-white inter flex items-center justify-center cursor-pointer">
              Explore Our Work
            </div>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Hero