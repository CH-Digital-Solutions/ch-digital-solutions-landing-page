import React, { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from "../components/home/Navbar";
import GlassCard from "../components/ui/GlassCard";
import SEO from "../components/SEO";

// List of allowed locations to prevent random URLs from working
const ALLOWED_LOCATIONS = ['andheri', 'bandra', 'thane', 'navi-mumbai', 'borivali', 'malad', 'powai', 'south-mumbai'];

function formatLocationName(slug) {
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const WebsiteDevelopmentLocation = () => {
  const { location } = useParams();
  
  if (!ALLOWED_LOCATIONS.includes(location?.toLowerCase())) {
    return <Navigate to="/website-development-company-mumbai" replace />;
  }

  const locationName = useMemo(() => formatLocationName(location), [location]);

  const websiteDevSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": `Website Development Services in ${locationName}, Mumbai`,
        "serviceType": "Website Development",
        "provider": {
          "@type": "LocalBusiness",
          "name": "CH Digital Solutions",
          "url": "https://chdigitalsolutions.in"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": locationName
        },
        "description": `CH Digital Solutions provides modern web design and high-performance custom website development services in ${locationName}, Mumbai.`
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `How much does website development cost in ${locationName}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Website development cost in ${locationName} varies based on the type of website, number of pages, features, and integrations required. A simple business website typically costs between ₹15,000 to ₹50,000, while complex web applications and ecommerce stores can range from ₹50,000 to ₹3,00,000 or more.`
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most business websites take between 2 to 6 weeks to complete. A simple landing page can be delivered in 1 to 2 weeks. Complex web applications and ecommerce stores may take 6 to 12 weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Will my website be mobile responsive?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every website we build is fully responsive and optimized for all screen sizes — mobile phones, tablets, laptops, and desktop monitors."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title={`Website Development Company in ${locationName} | Web Design Services`}
        description={`Professional website development company in ${locationName}, Mumbai. We design responsive, high-performance custom websites using React and Node.js.`}
        keywords={`website development company ${locationName}, web development services ${locationName}, web design ${locationName}`}
        canonicalPath={`/website-development-in-${location.toLowerCase()}`}
        schema={websiteDevSchema}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: `Website Development ${locationName}`, path: `/website-development-in-${location.toLowerCase()}` }
        ]}
      />
      <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen">
        <Navbar />

        <div className="max-w-6xl mx-auto px-6 pt-40 pb-20">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            Website Development Company in <span className="text-[var(--text-primary)] opacity-80">{locationName}</span>
          </h1>

          <p className="text-[var(--text-muted)] text-lg max-w-3xl mt-6">
            Looking for a reliable web developer in {locationName}? CH Digital Solutions specializes in
            custom website development, business automation systems, and scalable digital
            platforms for local businesses and startups.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <GlassCard>Responsive Design</GlassCard>
            <GlassCard>Fast Loading</GlassCard>
            <GlassCard>SEO Optimized</GlassCard>
            <GlassCard>Secure Hosting</GlassCard>
          </div>

          <div className="mt-24">
            <h2 className="text-3xl font-semibold mb-6">
              Our Web Design Process for {locationName} Businesses
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
                <h3 className="font-semibold mb-2">1. Discovery</h3>
                <p className="text-[var(--text-muted)] text-sm">Understanding your local target audience and business goals.</p>
              </div>
              <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
                <h3 className="font-semibold mb-2">2. Design</h3>
                <p className="text-[var(--text-muted)] text-sm">Creating modern UI/UX layouts optimized for conversions.</p>
              </div>
              <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
                <h3 className="font-semibold mb-2">3. Development</h3>
                <p className="text-[var(--text-muted)] text-sm">Building scalable web applications using React and modern frameworks.</p>
              </div>
              <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
                <h3 className="font-semibold mb-2">4. Launch</h3>
                <p className="text-[var(--text-muted)] text-sm">Deploying the site and ensuring it ranks well in local searches.</p>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <h2 className="text-3xl font-semibold mb-6">
              Serving Clients in {locationName} and Across Mumbai
            </h2>
            <p className="text-[var(--text-muted)] max-w-3xl mb-8">
              We provide end-to-end digital services. If your business is based in {locationName}, our team can collaborate closely with you to deliver high-quality solutions:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/custom-software-development-mumbai" className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 hover:border-[var(--border-hover)] transition-colors">
                <h3 className="font-semibold mb-2">Custom Software</h3>
                <p className="text-[var(--text-muted)] text-sm">Bespoke business systems and automation platforms.</p>
              </a>
              <a href="/ecommerce-website-development-mumbai" className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 hover:border-[var(--border-hover)] transition-colors">
                <h3 className="font-semibold mb-2">E-Commerce Stores</h3>
                <p className="text-[var(--text-muted)] text-sm">Sell products online with secure payment gateways.</p>
              </a>
              <a href="/mobile-app-development-mumbai" className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 hover:border-[var(--border-hover)] transition-colors">
                <h3 className="font-semibold mb-2">Mobile Apps</h3>
                <p className="text-[var(--text-muted)] text-sm">Native iOS & Android apps using React Native.</p>
              </a>
            </div>
          </div>

          <div className="mt-24 text-center bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl p-12">
            <h2 className="text-3xl font-semibold mb-4">
              Ready to Upgrade Your Digital Presence?
            </h2>
            <p className="text-[var(--text-muted)] mb-8 max-w-xl mx-auto">
              Contact us today for a free consultation. Let's discuss how we can help your {locationName} business grow online.
            </p>
            <a href="/#contact" className="px-8 py-3 bg-[var(--cta-bg)] text-[var(--cta-text)] rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsiteDevelopmentLocation;
