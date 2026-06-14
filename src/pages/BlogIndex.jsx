import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import frontMatter from 'front-matter'
import Navbar from '../components/home/Navbar'
import Footer from '../components/home/Footer'
import SEO from '../components/SEO'
import { ArrowRight, Clock, User } from 'lucide-react'

// Load all markdown blog files as raw strings
const markdownFiles = import.meta.glob('../content/blogs/*.md', { query: '?raw', import: 'default' })

// Legacy JSX blog posts (manually listed since they're not dynamic)
const legacyBlogs = [
  {
    slug: '/website-development-cost-mumbai',
    title: 'Website Development Cost in Mumbai (Complete Guide)',
    description: 'Learn the website development cost in Mumbai. Complete guide explaining pricing, features, and factors that affect website development cost.',
    author: 'CH Digital Solutions',
    date: '2025-01-10',
    category: 'Pricing'
  },
  {
    slug: '/how-to-build-ecommerce-website',
    title: 'How to Build an Ecommerce Website (Step by Step)',
    description: 'Learn how to build an ecommerce website from scratch. Discover platforms, designs, payment gateway integrations, and launch optimization.',
    author: 'CH Digital Solutions',
    date: '2025-01-15',
    category: 'Guide'
  },
  {
    slug: '/erp-software-for-small-business',
    title: 'ERP Software for Small Business: Everything You Need to Know',
    description: 'Explore how ERP systems help small businesses automate operations, reduce costs, and scale efficiently.',
    author: 'CH Digital Solutions',
    date: '2025-02-01',
    category: 'ERP'
  },
  {
    slug: '/cost-of-custom-software-development-india',
    title: 'Cost of Custom Software Development in India',
    description: 'A detailed breakdown of custom software development costs in India, including factors that affect pricing.',
    author: 'CH Digital Solutions',
    date: '2025-02-10',
    category: 'Pricing'
  },
  {
    slug: '/react-vs-wordpress-for-startups',
    title: 'React vs WordPress for Startups: Which is Better?',
    description: 'A comprehensive comparison of React and WordPress for startup websites, covering performance, scalability, and cost.',
    author: 'CH Digital Solutions',
    date: '2025-03-01',
    category: 'Guide'
  },
]

const blogIndexSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Blog | CH Digital Solutions",
  "description": "Expert insights on website development, custom software, ERP systems, WhatsApp automation, and digital transformation for businesses in Mumbai.",
  "url": "https://chdigitalsolutions.in/blog",
  "publisher": {
    "@type": "Organization",
    "name": "CH Digital Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://chdigitalsolutions.in/ch_logo_d.png"
    }
  }
}

const BlogIndex = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadBlogs = async () => {
      const dynamicBlogs = []

      for (const [filePath, loader] of Object.entries(markdownFiles)) {
        try {
          const rawText = await loader()
          const { attributes } = frontMatter(rawText)
          // Extract slug from file path: ../content/blogs/slug-name.md -> slug-name
          const slug = filePath.split('/').pop().replace('.md', '')
          dynamicBlogs.push({
            slug: `/blog/${slug}`,
            title: attributes.title,
            description: attributes.description,
            author: attributes.author || 'CH Digital Solutions',
            date: attributes.date,
            category: attributes.category || 'Insights',
          })
        } catch (err) {
          console.error('Failed to load blog:', filePath, err)
        }
      }

      // Combine dynamic markdown blogs with legacy JSX blogs
      const allBlogs = [...dynamicBlogs, ...legacyBlogs]
      
      // Sort by date (newest first)
      allBlogs.sort((a, b) => new Date(b.date) - new Date(a.date))
      
      setBlogs(allBlogs)
      setLoading(false)
    }

    loadBlogs()
  }, [])

  const formatDate = (dateStr) => {
    if (!dateStr) return ''
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <>
      <SEO
        title="Blog | Expert Insights on Software & Web Development | CH Digital Solutions"
        description="Expert insights on website development, custom software, ERP systems, WhatsApp automation, and digital transformation for businesses in Mumbai and India."
        keywords="software development blog, web development tips, ERP software guide, WhatsApp automation, custom software India, website cost Mumbai"
        canonicalPath="/blog"
        schema={blogIndexSchema}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
      <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 max-w-5xl mx-auto w-full px-6 pt-40 pb-24">
          {/* Page Header */}
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Blog
            </h1>
            <p className="text-[var(--text-muted)] text-lg max-w-2xl">
              Expert insights, industry guides, and practical advice on website development, 
              custom software, ERP systems, and digital automation for businesses in India.
            </p>
          </header>

          {/* Blog Grid */}
          {loading ? (
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 animate-pulse">
                  <div className="h-4 bg-[var(--border-color)] rounded w-20 mb-4" />
                  <div className="h-6 bg-[var(--border-color)] rounded w-3/4 mb-3" />
                  <div className="h-4 bg-[var(--border-color)] rounded w-full mb-2" />
                  <div className="h-4 bg-[var(--border-color)] rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {blogs.map((blog) => (
                <Link
                  key={blog.slug}
                  to={blog.slug}
                  className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 hover:border-[var(--border-hover)] transition-all duration-200"
                >
                  {/* Category Badge */}
                  <span className="text-xs font-medium px-2.5 py-1 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-full text-[var(--text-muted)]">
                    {blog.category}
                  </span>

                  {/* Title */}
                  <h2 className="text-xl font-semibold mt-4 mb-3 group-hover:text-[var(--cta-bg)] transition-colors leading-snug">
                    {blog.title}
                  </h2>

                  {/* Description */}
                  <p className="text-[var(--text-muted)] text-sm mb-4 line-clamp-2">
                    {blog.description}
                  </p>

                  {/* Meta Row */}
                  <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {blog.author}
                      </span>
                      {blog.date && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatDate(blog.date)}
                        </span>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-24 text-center bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl p-12">
            <h2 className="text-3xl font-semibold mb-4">
              Need Expert Help with Your Project?
            </h2>
            <p className="text-[var(--text-muted)] mb-8 max-w-xl mx-auto">
              From website development to custom ERP systems, we help businesses in Mumbai and across India build powerful digital solutions.
            </p>
            <Link
              to="/#contact"
              className="inline-block px-8 py-3 bg-[var(--cta-bg)] text-[var(--cta-text)] rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get a Free Consultation
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default BlogIndex
