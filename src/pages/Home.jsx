import React from 'react'
import Navbar from '../components/home/Navbar'
import Hero from '../components/home/Hero'
import Products from '../components/home/Products'
import Services from '../components/home/Services'
import Work from '../components/home/Work'
import Contact from '../components/home/Contact'
import Footer from '../components/home/Footer'
import SEO from '../components/SEO'

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "CH Digital Solutions",
  "image": "https://chdigitalsolutions.in/ch_logo_d.webp",
  "url": "https://chdigitalsolutions.in",
  "telephone": "+919022863917",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Byculla",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400008",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "18.9750",
    "longitude": "72.8333"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+919022863917",
      "contactType": "customer service",
      "email": "chdigitalsolutions2025@gmail.com"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+919313108560",
      "contactType": "sales",
      "email": "chdigitalsolutions2025@gmail.com"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/ch-digital-solutions",
    "https://github.com/Faraaz1806"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "10:00",
    "closes": "19:00"
  }
}

function Home() {
  return (
    <>
      <SEO 
        title="CH Digital Solutions | Website & Software Development Company in Mumbai"
        description="CH Digital Solutions builds premium custom websites, business software systems, ERP platforms, and AI/WhatsApp automation tools for startups and businesses in Mumbai."
        keywords="website development company mumbai, software development mumbai, ERP development, startup web development, MERN stack development company, custom software, best web development company mumbai"
        canonicalPath="/"
        schema={homeSchema}
        breadcrumbs={[
          { name: "Home", path: "/" }
        ]}
      />
      <div className='bg-[var(--bg-primary)]'>
        <Navbar />
        <Hero />
        <section id='products'><Products /></section>
        <section id='services' ><Services/></section>
        <section id='work'><Work /></section>
        <section id='contact'><Contact /></section>
        <Footer />
      </div>
    </>
  )
}

export default Home