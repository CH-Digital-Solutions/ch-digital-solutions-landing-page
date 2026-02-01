import React from 'react'

function Work() {
  const work = [
    {
      id: 1,
      name : 'BloomTale',
      desc : "BloomTale is a modern e-commerce website designed with a beautiful and intuitive user interface, featuring smooth transitions and seamless navigation to deliver a premium and enjoyable shopping experience for users.",
      coverpic:"../../../workCover/BloomTale.png",
      link : "https://bloomtale.cloud/"
    },
    {
      id: 2,
      name : 'FrzPortfolio',
      desc : "FrzPortfolio is a sleek and minimalist portfolio website showcasing creative work with elegant animations and a modern design aesthetic, providing visitors with an engaging and memorable browsing experience that highlights professional skills.",
      coverpic:"../../../workCover/frzlogo.png",
      link : "https://portfolio-frz.vercel.app/"
    }
  ]
  return (
    <div className='min-h-screen bg-black w-full'>
            <div className="bg-white/15 w-full h-[0.1px]"></div>
            <div className="text-white relative w-full  md:text-[70px] md:font-bold flex flex-col  items-center jakarta md:mt-10">
                Our Work
                <div className="text-white/70 text-[20px] font-light text-center leading-loose">Real solutions we’ve built for real problems.</div>
            </div>

            {/* ab shuru hoga yaha se cheeze show hona */}
            <div className="bg-gray flex items-center flex-col mt-10  ">
            
            {
              work.map((project)=>{
                return(
                  <>
                  <div className="bg-white/8 mb-6 relative flex flex-row border border-white/15 rounded-4xl w-5xl h-70 p-5 gabarito font-extralight hover:border-white/30 transition-all">
                  <div className="w-152 h-80">
                    <img src={project.coverpic} className='rounded-3xl' alt="Project Cover Pic" />
                  </div>
                  <div className="">
                  <div className="text-white gabarito font ml-6 mt-1 text-5xl">{project.name}</div>
                  <div className=" text-white/70 inter leading-9 font-extralight text-xl ml-6.5 mt-2">{project.desc}</div>
                  <a href={project.link}>
                    <div className="bg-white absolute right-12 hover:bg-white/85 transition-all cursor-pointer w-40 h-12 rounded-2xl font-medium flex justify-center items-center mt-4">
                      Visit Website
                    </div>
                  </a>
                  </div>
                  </div>
                  </>
                )
              })
            }
              
              </div>
            </div>
    
  )
}

export default Work