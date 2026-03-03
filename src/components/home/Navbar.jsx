import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div className="flex justify-center z-50">
        <div className="bg-white/10 z-50 fixed top-0 backdrop-blur-sm w-full px-2
          md:top-8 md:w-175 lg:w-200 md:h-16 md:rounded-[500px] 
          border border-white/8 flex flex-row items-center justify-between h-16">

          {/* Left ka logo navbar me  */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/ch_logo_d.png" className="w-10 md:w-12" alt="Logo" />
            <div className='flex flex-col leading-none'>
              <div className="text-[18px] md:text-[20px] font-medium outfit text-white">CH Digital</div>
              <div className='text-xs md:text-sm font-extralight pl-0.5 text-white'>Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row items-center outfit">
            <div className="flex flex-row justify-evenly items-center text-white/60 font-light text-sm gap-8 mr-8">
              <a href="/#home" className="hover:text-white/90 transition-colors">Home</a>
              <a href="/#services" className="hover:text-white/90 transition-colors">Services</a>
              <a href="/#work" className="hover:text-white/90 transition-colors">Our Work</a>
            </div>
            <a href="/#contact">
              <div className="bg-white h-9.5 w-28 flex justify-center items-center rounded-full text-black font-semibold inter hover:bg-gray-200 text-sm cursor-pointer">
                Contact us
              </div>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="fixed top-16 left-0 w-full bg-black/95 backdrop-blur-md z-40 md:hidden border-b border-white/10">
            <div className="flex flex-col items-center py-6 gap-6 outfit">
              <a
                href="/#home"
                className="text-white/70 hover:text-white text-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/#services"
                className="text-white/70 hover:text-white text-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="/#work"
                className="text-white/70 hover:text-white text-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Work
              </a>
              <a
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="bg-white h-11 w-32 flex justify-center items-center rounded-full text-black font-semibold inter hover:bg-gray-200 text-base cursor-pointer mt-2">
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
