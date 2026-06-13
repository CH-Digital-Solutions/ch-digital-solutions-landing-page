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

const SERVICE_DATA = {
  'website-development': {
    title: 'Website Development',
    serviceType: 'Website Development',
    desc: 'modern web design and high-performance custom website development services',
    price: '₹15,000 to ₹50,000',
    time: '2 to 6 weeks',
    features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Secure Hosting']
  },
  'custom-software-development': {
    title: 'Custom Software Development',
    serviceType: 'Software Development',
    desc: 'bespoke software systems, automation tools, and scalable business applications',
    price: '₹1,00,000 to ₹5,00,000+',
    time: '3 to 6 months',
    features: ['Cloud Architecture', 'API Integrations', 'High Security', 'Scalable Database']
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    serviceType: 'Mobile Application Development',
    desc: 'native and cross-platform mobile applications for iOS and Android',
    price: '₹80,000 to ₹3,00,000',
    time: '8 to 12 weeks',
    features: ['React Native', 'UI/UX Design', 'App Store Setup', 'Push Notifications']
  },
  'ecommerce-website-development': {
    title: 'Ecommerce Website Development',
    serviceType: 'Ecommerce Development',
    desc: 'fully-featured online stores with secure payment gateways and inventory management',
    price: '₹50,000 to ₹2,00,000+',
    time: '4 to 8 weeks',
    features: ['Payment Gateways', 'Inventory Sync', 'Admin Dashboard', 'Mobile Optimized']
  },
  'erp-software-development': {
    title: 'ERP Software Development',
    serviceType: 'ERP Development',
    desc: 'custom Enterprise Resource Planning software to manage operations, HR, and billing',
    price: '₹2,00,000 to ₹10,00,000+',
    time: '4 to 8 months',
    features: ['Custom Modules', 'Role-Based Access', 'Data Analytics', 'Automated Workflows']
  }
};

const ServiceLocation = ({ service = 'website-development' }) => {
  const { location } = useParams();
  
  if (!ALLOWED_LOCATIONS.includes(location?.toLowerCase())) {
    return <Navigate to="/" replace />;
  }

  const locationName = useMemo(() => formatLocationName(location), [location]);
  const data = SERVICE_DATA[service];

  const websiteDevSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": `${data.title} Services in ${locationName}, Mumbai`,
        "serviceType": data.serviceType,
        "provider": {
          "@type": "LocalBusiness",
          "name": "CH Digital Solutions",
          "url": "https://chdigitalsolutions.in",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "48"
          }
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": locationName
        },
        "description": `CH Digital Solutions provides ${data.desc} in ${locationName}, Mumbai.`
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `How much does ${data.title.toLowerCase()} cost in ${locationName}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `The cost for ${data.title.toLowerCase()} in ${locationName} varies based on features and integrations required. Typically, it costs between ${data.price}.`
            }
          },
          {
            "@type": "Question",
            "name": `How long does it take for ${data.title.toLowerCase()}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Most projects take between ${data.time} to complete depending on complexity.`
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide ongoing support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide 30-day post-launch warranties and affordable ongoing maintenance packages for all our software and websites."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title={`${data.title} Company in ${locationName} | CH Digital Solutions`}
        description={`Professional ${data.title.toLowerCase()} company in ${locationName}, Mumbai. We provide ${data.desc}.`}
        keywords={`${data.title.toLowerCase()} company ${locationName}, ${data.serviceType.toLowerCase()} services ${locationName}, IT company ${locationName}`}
        canonicalPath={`/${service}-in-${location.toLowerCase()}`}
        schema={websiteDevSchema}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: `${data.title} ${locationName}`, path: `/${service}-in-${location.toLowerCase()}` }
        ]}
      />
      <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen">
        <Navbar />

        <div className="max-w-6xl mx-auto px-6 pt-40 pb-20">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            {data.title} Company in <span className="text-[var(--text-primary)] opacity-80">{locationName}</span>
          </h1>

          <p className="text-[var(--text-muted)] text-lg max-w-3xl mt-6">
            Looking for reliable tech partners in {locationName}? CH Digital Solutions specializes in
            {data.desc} for local businesses and startups.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {data.features.map(feat => (
              <GlassCard key={feat}>{feat}</GlassCard>
            ))}
          </div>

          <div className="mt-24">
            <h2 className="text-3xl font-semibold mb-6">
              Our Process for {locationName} Businesses
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
                <h3 className="font-semibold mb-2">1. Discovery</h3>
                <p className="text-[var(--text-muted)] text-sm">Understanding your local target audience and business goals.</p>
              </div>
              <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
                <h3 className="font-semibold mb-2">2. Design & Architecture</h3>
                <p className="text-[var(--text-muted)] text-sm">Creating modern UI/UX layouts and scalable technical architectures.</p>
              </div>
              <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
                <h3 className="font-semibold mb-2">3. Development</h3>
                <p className="text-[var(--text-muted)] text-sm">Building scalable applications using robust modern frameworks.</p>
              </div>
              <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
                <h3 className="font-semibold mb-2">4. Deployment</h3>
                <p className="text-[var(--text-muted)] text-sm">Launching the product and ensuring high performance.</p>
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

export default ServiceLocation;
