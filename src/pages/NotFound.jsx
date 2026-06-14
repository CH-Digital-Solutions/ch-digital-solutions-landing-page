import { Link } from 'react-router-dom'
import Navbar from '../components/home/Navbar'
import Footer from '../components/home/Footer'
import SEO from '../components/SEO'

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found | CH Digital Solutions"
        description="The page you are looking for doesn't exist or has been moved. Browse our services or return to the homepage."
        canonicalPath="/404"
        noindex={true}
      />
      <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-lg">
            <p className="text-8xl font-bold opacity-10 mb-4 select-none">404</p>
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              Page Not Found
            </h1>
            <p className="text-[var(--text-muted)] mb-8 text-lg">
              The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="px-6 py-3 bg-[var(--cta-bg)] text-[var(--cta-text)] rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Back to Home
              </Link>
              <Link
                to="/#contact"
                className="px-6 py-3 border border-[var(--border-color)] rounded-lg font-semibold hover:border-[var(--border-hover)] transition-colors"
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-12 text-sm text-[var(--text-muted)]">
              <p>Looking for something specific? Try these:</p>
              <div className="flex flex-wrap gap-3 justify-center mt-4">
                <Link to="/website-development-company-mumbai" className="underline hover:text-[var(--text-primary)] transition-colors">Website Development</Link>
                <Link to="/custom-software-development-mumbai" className="underline hover:text-[var(--text-primary)] transition-colors">Custom Software</Link>
                <Link to="/blog" className="underline hover:text-[var(--text-primary)] transition-colors">Blog</Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default NotFound
