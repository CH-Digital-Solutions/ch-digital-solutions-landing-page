import React from 'react'
import { Helmet } from 'react-helmet-async'

const DEFAULT_TITLE = 'CH Digital Solutions | Website & Software Development Company in Mumbai'
const DEFAULT_DESC = 'CH Digital Solutions is a startup building custom websites, business software systems, ERP platforms and digital automation tools for startups and businesses in Mumbai.'
const DEFAULT_KEYWORDS = 'website development company mumbai, software development mumbai, ERP development, startup web development, MERN stack development company'
const DEFAULT_URL = 'https://chdigitalsolutions.in'
const DEFAULT_IMAGE = 'https://chdigitalsolutions.in/og-image.png'

function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  keywords = DEFAULT_KEYWORDS,
  canonicalPath = '',
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  schema = null,
  breadcrumbs = null,
  noindex = false,
}) {
  const siteUrl = DEFAULT_URL
  const fullCanonicalUrl = `${siteUrl}${canonicalPath}`

  // Build breadcrumb schema from array like [{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${siteUrl}${item.path}`
    }))
  } : null

  return (
    <Helmet>
      {/* Standard SEO Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Robots Directive */}
      <meta
        name="robots"
        content={noindex
          ? "noindex, nofollow"
          : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        }
      />

      {/* OpenGraph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="CH Digital Solutions" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />

      {/* Geographic Tags for Local SEO */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Mumbai" />

      {/* Schema.org Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO
