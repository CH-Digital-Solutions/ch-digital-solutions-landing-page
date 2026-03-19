import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { projects } from '../../data/projectData'

function Work() {
  return (
    <div className='md:min-h-0 lg:min-h-screen bg-(--bg-primary) w-full pt-10 pb-30 md:py-16 lg:py-0'>
      <div className="bg-[var(--divider-color)] w-full h-[0.1px]"></div>
      <div className="text-[var(--text-primary)] w-full flex flex-col items-center jakarta mt-8 md:mt-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center">Our Work</h2>
        <p className="text-[var(--text-secondary)] text-sm sm:text-base md:text-base font-light text-center leading-relaxed mt-3 max-w-xs sm:max-w-md md:max-w-xl">
          Real solutions we've built for real problems.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-8 md:mt-12 px-5 sm:px-8 md:px-16 lg:px-20 xl:px-28 max-w-7xl mx-auto">
        {
          projects.map((project) => (
            <div key={project.id} className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden hover:border-[var(--border-hover)] transition-all group" style={{boxShadow: 'var(--shadow-soft)'}}>

              {/* Cover Image */}
              <div className="relative w-full h-44 sm:h-48 md:h-52 overflow-hidden">
                <img
                  src={project.coverImage}
                  loading="lazy"
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  alt={project.name}
                />
                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-[var(--badge-bg)] backdrop-blur-md text-[var(--badge-text)] text-[11px] inter font-medium px-3 py-1 rounded-full border border-[var(--badge-border)]">
                  {project.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-[var(--text-primary)] text-lg sm:text-xl font-semibold jakarta">{project.name}</h3>
                <p className="text-[var(--text-muted)] text-[13px] sm:text-sm inter font-light leading-relaxed mt-2 line-clamp-2">
                  {project.shortDesc}
                </p>


                {/* View Details Button */}
                <Link to={`/project/${project.slug}`}>
                  <div className="mt-5 bg-[var(--cta-bg)] w-full h-11 rounded-xl text-sm inter font-semibold text-[var(--cta-text)] flex items-center justify-center gap-2 hover:bg-[var(--cta-hover)] transition-all cursor-pointer group/btn">
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Work
