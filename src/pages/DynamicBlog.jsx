import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import frontMatter from 'front-matter';
import Navbar from '../components/home/Navbar';
import SEO from '../components/SEO';

// Load all markdown files as raw strings
const markdownFiles = import.meta.glob('../content/blogs/*.md', { query: '?raw', import: 'default' });

const DynamicBlog = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
        
        setMeta(attributes);
        setContent(body);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load blog:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (error) {
    return <Navigate to="/blog" replace />; // or to home if /blog doesn't exist yet
  }

  if (loading || !meta) {
    return (
      <div className="bg-[var(--bg-primary)] min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-[var(--text-muted)]">Loading article...</div>
      </div>
    );
  }

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
    "datePublished": meta.date ? new Date(meta.date).toISOString() : new Date().toISOString()
  };

  return (
    <>
      <SEO
        title={`${meta.title} | CH Digital Solutions`}
        description={meta.description}
        canonicalPath={`/blog/${slug}`}
        schema={blogSchema}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: meta.title, path: `/blog/${slug}` }
        ]}
      />
      <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen font-sans">
        <Navbar />
        <main className="max-w-4xl mx-auto px-6 pt-40 pb-24">
          <header className="mb-12 border-b border-[var(--border-color)] pb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
              {meta.title}
            </h1>
            <div className="flex items-center text-[var(--text-muted)] text-sm space-x-4">
              <span className="font-medium px-3 py-1 bg-[var(--bg-card)] rounded-full border border-[var(--border-color)]">
                {meta.author || "CH Digital Solutions"}
              </span>
              {meta.date && (
                <span>
                  {new Date(meta.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              )}
            </div>
          </header>

          <article className="prose prose-lg max-w-none text-[var(--text-secondary)] leading-relaxed tracking-tight
            prose-headings:text-[var(--text-primary)] prose-headings:font-bold
            prose-a:text-[var(--text-primary)] prose-a:underline hover:prose-a:text-[var(--text-muted)] prose-a:transition-colors
            prose-strong:text-[var(--text-primary)] prose-strong:font-semibold
            prose-blockquote:border-l-4 prose-blockquote:border-l-[var(--text-primary)] prose-blockquote:bg-transparent prose-blockquote:pl-6 prose-blockquote:py-1 prose-blockquote:my-6 prose-blockquote:not-italic prose-blockquote:text-[var(--text-primary)] prose-blockquote:font-medium
            prose-code:text-[var(--text-primary)] prose-code:bg-[var(--bg-card)] prose-code:border prose-code:border-[var(--border-color)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-mono prose-code:text-sm
            prose-pre:bg-[var(--bg-card)] prose-pre:border prose-pre:border-[var(--border-color)] prose-pre:text-[var(--text-primary)]
            prose-img:rounded-lg prose-img:border prose-img:border-[var(--border-color)] prose-hr:border-[var(--border-color)]"
          >
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </main>
      </div>
    </>
  );
};

export default DynamicBlog;
