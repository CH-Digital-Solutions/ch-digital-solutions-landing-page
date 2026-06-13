import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/home/Navbar'
import Footer from '../components/home/Footer'
import SEO from '../components/SEO'

function ComingSoon() {
  return (
    <div className="bg-[var(--bg-primary)] min-h-screen flex flex-col font-sans">
      <SEO 
        title="Coming Soon | CH Digital Solutions" 
        description="We are working hard to bring this feature to you soon." 
        noindex={true}
      />
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-4 md:px-0">
        <div className="max-w-2xl w-full text-center py-20 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)] text-[11px] font-semibold tracking-widest uppercase mb-6">
              In Development
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] tracking-[-0.03em] leading-tight mb-6">
              Coming Soon
            </h1>
            
            <p className="text-[var(--text-secondary)] text-base sm:text-lg font-light max-w-lg mx-auto mb-10 leading-relaxed">
              We're putting the finishing touches on this product. Check back soon or contact us to learn more.
            </p>
            
            <Link 
              to="/" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium transition-all hover:bg-[var(--text-secondary)] hover:-translate-y-0.5 hover:shadow-lg"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ComingSoon
