import React from 'react'

function Work() {
  const work = [
    {
      id: 1,
      name: 'BloomTale',
      desc: "BloomTale is a modern e-commerce website designed with a beautiful and intuitive user interface, featuring smooth transitions and seamless navigation to deliver a premium and enjoyable shopping experience for users.",
      coverpic: "../../../workCover/BloomTale.png",
      link: "https://bloomtale.cloud/"
    },
    {
      id: 2,
      name: 'FrzPortfolio',
      desc: "FrzPortfolio is a sleek and minimalist portfolio website showcasing creative work with elegant animations and a modern design aesthetic, providing visitors with an engaging and memorable browsing experience that highlights professional skills.",
      coverpic: "../../../workCover/frzlogo.png",
      link: "https://portfolio-frz.vercel.app/"
    }
  ]

  return (
    <div className='min-h-screen bg-black w-full py-10 md:py-0'>
      <div className="bg-white/15 w-full h-[0.1px]"></div>
      <div className="text-white w-full flex flex-col items-center jakarta mt-8 md:mt-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center">Our Work</h2>
        <p className="text-white/60 text-sm sm:text-base md:text-base font-light text-center leading-relaxed mt-3 max-w-xs sm:max-w-md md:max-w-xl">
          Real solutions we've built for real problems.
        </p>
      </div>

      {/* Project Cards */}
      <div className="flex items-center flex-col mt-8 md:mt-10 px-4 sm:px-8 md:px-16">
        {
          work.map((project) => {
            return (
              <div key={project.id} className="bg-white/8 mb-6 flex flex-col md:flex-row md:items-center border border-white/15 rounded-2xl md:rounded-4xl w-full max-w-5xl p-4 md:p-4 gabarito font-extralight hover:border-white/30 transition-all">
                {/* Project Image */}
                <div className="w-full md:w-56 lg:w-64 shrink-0">
                  <img src={project.coverpic} className='rounded-xl md:rounded-2xl w-full h-40 sm:h-48 md:h-44 lg:h-48 object-cover' alt="Project Cover Pic" />
                </div>
                {/* Project Info */}
                <div className="flex flex-col mt-4 md:mt-0 md:ml-5 flex-1">
                  <div className="text-white gabarito text-2xl sm:text-3xl md:text-3xl lg:text-4xl">{project.name}</div>
                  <div className="text-white/70 inter leading-5 sm:leading-7 md:leading-6 font-extralight text-sm sm:text-base md:text-sm lg:text-base mt-2">{project.desc}</div>
                  <a href={project.link} className="mt-4 md:mt-3">
                    <div className="bg-white hover:bg-white/85 transition-all cursor-pointer w-full sm:w-36 md:w-32 h-10 md:h-10 rounded-xl md:rounded-xl font-medium text-sm flex justify-center items-center text-black">
                      Visit Website
                    </div>
                  </a>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Work
