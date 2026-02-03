
export default function Navbar() {

  return (
    <>
      <div className="flex justify-center z-50">
        <div className="bg-white/10 z-50 fixed top-0 backdrop-blur-sm md:top-8 md:w-210 md:h-16 md:rounded-[500px] 
   border border-white/8 flex flex-row items-center">

          {/* Left ka logo navbar me  */}

          <div className="w-60 h-20 flex items-center">
            <img src="../../../ch_logo_d.png" className="w-12 ml-2" alt="Logo" />
            <span className="text-[30px]  pl-4 font-semibold outfit text-white">CH Labs</span>
          </div>

          {/* ab saari categories */}
          <div className=" w-170 h-10 ml-10 flex flex-row justify-between outfit items-center">
            <div className="hidden md:flex flex-row justify-evenly items-center w-full h-full text-white/60 font-light ml-30 text-sm">
              <a href="#home" className="hover:text-white/90 transition-colors">Home</a>
              <a href="#services" className="hover:text-white/90 transition-colors">Services</a>
              <a href="#work" className="hover:text-white/90 transition-colors">Our Work</a>
            </div>
            <a href="#contact">
            <div className="bg-white md:h-9.5 md:w-30 md:flex md:justify-center md:items-center md:rounded-full text-black font-semibold inter hover:bg-gray-200 text-sm cursor-pointer mr-3 mb-px">
              Contact us
            </div>
            </a>

          </div>
        </div>
      </div>
    </>
  )
}
