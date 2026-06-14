import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import frontMatter from 'front-matter';
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';
import SEO from '../components/SEO';
import { ArrowLeft, Clock, User, ArrowRight } from 'lucide-react';

// Load all markdown files as raw strings
const markdownFiles = import.meta.glob('../content/blogs/*.md', { query: '?raw', import: 'default' });

const DynamicBlog = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const filePath = `../content/blogs/${slug}.md`;
        
        if (!markdownFiles[filePath]) {
          setError(true);
          setLoading(false);
          return;
        }

        // Execute the function to get the raw module content
        const rawText = await markdownFiles[filePath]();
        
        // Parse frontmatter
        const { attributes, body } = frontMatter(rawText);
        
        // Remove the first H1 from markdown body to prevent duplicate H1
        // (the title is already rendered from frontmatter)
        const bodyWithoutFirstH1 = body.replace(/^#\s+.+\n*/m, '');
        
        setMeta(attributes);
        setContent(bodyWithoutFirstH1);

        // Load related posts (all other blogs)
        const related = [];
        for (const [path, loader] of Object.entries(markdownFiles)) {
          if (path === filePath) continue; // skip current post
          try {
            const otherRaw = await loader();
            const { attributes: otherMeta } = frontMatter(otherRaw);
            const otherSlug = path.split('/').pop().replace('.md', '');
            related.push({
              slug: otherSlug,
              title: otherMeta.title,
              description: otherMeta.description,
              date: otherMeta.date,
              category: otherMeta.category || 'Insights',
            });
          } catch { /* skip failed loads */ }
        }
        // Sort by date and take top 3
        related.sort((a, b) => new Date(b.date) - new Date(a.date));
        setRelatedPosts(related.slice(0, 3));

        setLoading(false);
      } catch (err) {
        console.error("Failed to load blog:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  // Calculate reading time
  const readingTime = useMemo(() => {
    if (!content) return 0;
    const words = content.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
  }, [content]);

  if (error) {
    return <Navigate to="/blog" replace />;
  }

  if (loading || !meta) {
    return (
      <div className="bg-[var(--bg-primary)] min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-[var(--text-muted)]">Loading article...</div>
      </div>
    );
  }

  const publishedDate = meta.date ? new Date(meta.date).toISOString() : new Date().toISOString();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": meta.title,
    "description": meta.description,
    "image": meta.image || "https://chdigitalsolutions.in/ch_logo_d.png",
    "author": {
      "@type": "Organization",
      "name": meta.author || "CH Digital Solutions"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CH Digital Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chdigitalsolutions.in/ch_logo_d.png"
      }
    },
    "datePublished": publishedDate,
    "dateModified": publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://chdigitalsolutions.in/blog/${slug}`
    },
    "wordCount": content.trim().split(/\s+/).length,
  };

  return (
    <>
      <SEO
        title={`${meta.title} | CH Digital Solutions`}
        description={meta.description}
        keywords={meta.keywords || ''}
        canonicalPath={`/blog/${slug}`}
        schema={blogSchema}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: meta.title, path: `/blog/${slug}` }
        ]}
      />
      <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen font-sans flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-4xl mx-auto w-full px-6 pt-40 pb-24">
          {/* Back to Blog */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Articles
          </Link>

          <header className="mb-12 border-b border-[var(--border-color)] pb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
              {meta.title}
            </h1>
            <div className="flex flex-wrap items-center text-[var(--text-muted)] text-sm gap-4">
              <span className="flex items-center gap-1.5 font-medium px-3 py-1 bg-[var(--bg-card)] rounded-full border border-[var(--border-color)]">
                <User className="w-3.5 h-3.5" />
                {meta.author || "CH Digital Solutions"}
              </span>
              {meta.date && (
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {new Date(meta.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {readingTime} min read
              </span>
            </div>
          </header>

          <article className="prose prose-lg prose-invert max-w-none text-[var(--text-secondary)]
            prose-headings:text-[var(--text-primary)] 
            prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[var(--text-primary)]
            prose-blockquote:border-l-indigo-500 prose-blockquote:bg-[var(--bg-card)] prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
            prose-code:text-pink-400 prose-code:bg-[var(--bg-card)] prose-code:px-1 prose-code:rounded
            prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-[var(--border-color)]
            prose-img:rounded-xl prose-img:shadow-lg"
          >
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>

          {/* Related Posts Section */}
          {relatedPosts.length > 0 && (
            <section className="mt-20 pt-12 border-t border-[var(--border-color)]">
              <h2 className="text-2xl font-semibold mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-5 hover:border-[var(--border-hover)] transition-all duration-200"
                  >
                    <span className="text-xs font-medium px-2 py-0.5 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-full text-[var(--text-muted)]">
                      {post.category}
                    </span>
                    <h3 className="text-base font-semibold mt-3 mb-2 group-hover:text-[var(--cta-bg)] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[var(--text-muted)] text-xs line-clamp-2 mb-3">
                      {post.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                      Read more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors border border-[var(--border-color)] rounded-lg px-5 py-2.5 hover:border-[var(--border-hover)]"
                >
                  View All Articles <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DynamicBlog;
