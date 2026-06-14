import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import GlassCard from "../components/ui/GlassCard";
import SEO from "../components/SEO";

const websiteDevSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Website Development Services in Mumbai",
      "serviceType": "Website Development",
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
        "name": "Mumbai"
      },
      "description": "CH Digital Solutions provides modern web design and high-performance custom website development services in Mumbai using React, MERN stack, Node, and Python."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does website development cost in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Website development cost in Mumbai varies based on the type of website, number of pages, features, and integrations required. A simple business website typically costs between ₹15,000 to ₹50,000, while complex web applications and ecommerce stores can range from ₹50,000 to ₹3,00,000 or more."
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
          "name": "Do you build custom business software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, custom software development is one of our core specializations. We build tailored business systems including CRM platforms, inventory management tools, employee management systems, and workflow automation software."
          }
        },
        {
          "@type": "Question",
          "name": "Will my website be mobile responsive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every website we build is fully responsive and optimized for all screen sizes — mobile phones, tablets, laptops, and desktop monitors. With over 70% of web traffic in India coming from mobile devices, mobile-first design is a fundamental requirement in our development process."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide website maintenance and support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every project comes with a 30-day post-launch warranty that covers bug fixes and minor adjustments. We also offer ongoing maintenance packages that include security updates, content changes, performance monitoring, and technical support."
          }
        }
      ]
    }
  ]
};

const WebsiteDevelopmentMumbai = () => {
  return (
    <>
      <SEO
        title="Website Development Company in Mumbai | Web Design Services"
        description="Professional website development company in Mumbai. We design responsive, high-performance, and SEO-friendly custom websites using React, Node.js, and Python."
        keywords="website development company mumbai, web development services mumbai, custom website development mumbai, web design mumbai, React developer mumbai"
        canonicalPath="/website-development-company-mumbai"
        schema={websiteDevSchema}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Website Development Mumbai", path: "/website-development-company-mumbai" }
        ]}
      />
      <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen">
        <Navbar />


      <div className="max-w-6xl mx-auto px-6 pt-40 pb-20">

        <h1 className="text-5xl font-semibold mb-6">
          Website Development Company in Mumbai
        </h1>

        <p className="text-[var(--text-muted)] text-lg max-w-3xl mt-6">
          CH Digital Solutions is a Mumbai based software company specializing in
          custom website development, business automation systems and scalable digital
          platforms. Our team focuses on building high performance web solutions that
          help startups and businesses grow faster in the digital economy.
        </p>

        {/* Technology Cards */}

        <div className="grid md:grid-cols-4 gap-6 mt-16">

          <GlassCard>React Development</GlassCard>
          <GlassCard>MERN Stack</GlassCard>
          <GlassCard>Python Systems</GlassCard>
          <GlassCard>API Development</GlassCard>

        </div>
        <div className="mt-24">

          <h2 className="text-3xl font-semibold mb-6">
            Our Website Development Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Planning</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Understanding business goals and defining project scope.
              </p>
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Design</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Creating modern UI/UX layouts optimized for conversions.
              </p>
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Development</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Building scalable web applications using modern frameworks.
              </p>
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Deployment</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Launching secure and optimized systems for real-world use.
              </p>
            </div>

          </div>

        </div>

        {/* Types of Websites */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold mb-6">
            Types of Websites We Build in Mumbai
          </h2>
          <p className="text-[var(--text-muted)] max-w-3xl mb-8">
            Every business has different digital needs. Whether you are a startup launching your first product or an established company looking to modernize your online presence, we build websites that are tailored to your goals. Here are the types of websites we specialize in:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Business & Corporate Websites</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Professional websites for companies that need to establish credibility, showcase services, and generate leads. We focus on fast loading speeds, mobile responsiveness, and clear calls to action that convert visitors into customers.
              </p>
            </div>
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
              <h3 className="font-semibold mb-2">E-Commerce & Online Stores</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Full-featured online stores with product catalogs, secure payment gateways (Razorpay, Stripe), inventory management, and order tracking. Learn more about our <a href="/ecommerce-website-development-mumbai" className="text-[var(--text-primary)] underline">ecommerce website development services</a>.
              </p>
            </div>
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
              <h3 className="font-semibold mb-2">SaaS & Web Applications</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Complex web applications with user authentication, dashboards, real-time data, and API integrations. We build SaaS platforms that can scale from 10 users to 10,000 users without performance degradation.
              </p>
            </div>
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Landing Pages & Marketing Sites</h3>
              <p className="text-[var(--text-muted)] text-sm">
                High-converting landing pages designed for advertising campaigns, product launches, and lead generation. Every element is optimized for maximum conversion rates.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies Section - Expanded */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold mb-6">
            Technologies We Use for Website Development
          </h2>
          <p className="text-[var(--text-muted)] max-w-3xl mb-6">
            We use modern, industry-standard technologies that ensure your website is fast, secure, and maintainable. Our technology choices are based on your project requirements, budget, and long-term scalability needs.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Frontend Development</h3>
              <ul className="text-[var(--text-muted)] space-y-2">
                <li>• <strong className="text-[var(--text-primary)]">React.js</strong> — Component-based UI development for interactive, single-page applications</li>
                <li>• <strong className="text-[var(--text-primary)]">Next.js</strong> — Server-side rendering and static site generation for SEO-optimized websites</li>
                <li>• <strong className="text-[var(--text-primary)]">Tailwind CSS</strong> — Utility-first CSS framework for rapid, responsive design</li>
                <li>• <strong className="text-[var(--text-primary)]">Framer Motion</strong> — Smooth animations and micro-interactions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Backend & Infrastructure</h3>
              <ul className="text-[var(--text-muted)] space-y-2">
                <li>• <strong className="text-[var(--text-primary)]">Node.js & Express</strong> — Fast, event-driven backend for APIs and real-time applications</li>
                <li>• <strong className="text-[var(--text-primary)]">MongoDB & PostgreSQL</strong> — Flexible NoSQL and relational databases</li>
                <li>• <strong className="text-[var(--text-primary)]">Python (Django/Flask)</strong> — Robust backend systems for data-heavy applications</li>
                <li>• <strong className="text-[var(--text-primary)]">Vercel & AWS</strong> — Cloud deployment with global CDN and auto-scaling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Businesses Need a Website */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold mb-6">
            Why Every Mumbai Business Needs a Professional Website
          </h2>
          <p className="text-[var(--text-muted)] max-w-3xl mb-4">
            In today's digital-first economy, your website is often the first interaction a potential customer has with your brand. A professionally built website does more than just look good — it builds trust, generates leads, and drives revenue. Here's why investing in professional website development is essential for businesses in Mumbai:
          </p>
          <ul className="text-[var(--text-muted)] space-y-3 max-w-3xl">
            <li>• <strong className="text-[var(--text-primary)]">24/7 Online Presence:</strong> Your website works around the clock, even when your office is closed. Customers can learn about your services, view your portfolio, and contact you at any time.</li>
            <li>• <strong className="text-[var(--text-primary)]">Credibility & Trust:</strong> 75% of users judge a company's credibility based on its website design. A modern, fast-loading website signals professionalism and reliability.</li>
            <li>• <strong className="text-[var(--text-primary)]">Lead Generation:</strong> With proper SEO optimization and conversion-focused design, your website becomes your most powerful lead generation tool — working silently to bring in new customers every day.</li>
            <li>• <strong className="text-[var(--text-primary)]">Competitive Advantage:</strong> Most of your competitors already have websites. Without one, you are invisible to the majority of customers who search online before making purchasing decisions.</li>
            <li>• <strong className="text-[var(--text-primary)]">Cost-Effective Marketing:</strong> Compared to traditional advertising, a well-optimized website delivers significantly higher ROI through organic search traffic and content marketing.</li>
          </ul>
        </div>

        {/* Why Choose Section - Expanded */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold mb-6">
            Why Choose CH Digital Solutions for Website Development
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard>
              <h3 className="text-xl font-semibold mb-2">Startup Focused</h3>
              <p className="text-[var(--text-muted)]">
                We understand the unique challenges startups face — tight budgets, fast timelines, and the need for scalable systems. Our development process is optimized to deliver maximum value within your budget, without compromising on quality or performance.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="text-xl font-semibold mb-2">Scalable Architecture</h3>
              <p className="text-[var(--text-muted)]">
                Every website we build is designed to grow with your business. Our architecture decisions ensure that your website can handle increasing traffic, new features, and expanding content without requiring a complete rebuild.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="text-xl font-semibold mb-2">SEO-First Development</h3>
              <p className="text-[var(--text-muted)]">
                We build websites with search engine optimization baked in from the start — proper heading structure, meta tags, schema markup, fast loading speeds, and mobile responsiveness are standard on every project.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="text-xl font-semibold mb-2">End-to-End Delivery</h3>
              <p className="text-[var(--text-muted)]">
                From initial concept and UI/UX design to development, testing, deployment, and post-launch support — we handle the complete lifecycle of your website project so you can focus on running your business.
              </p>
            </GlassCard>
          </div>
        </div>

        {/* Related Services - Internal Links */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold mb-6">
            Related Services We Offer
          </h2>
          <p className="text-[var(--text-muted)] max-w-3xl mb-6">
            Website development is just one part of what we do. We offer a full suite of digital solutions to help your business grow. Explore our other services:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/custom-software-development-mumbai" className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 hover:border-[var(--border-hover)] transition-colors">
              <h3 className="font-semibold mb-2">Custom Software Development</h3>
              <p className="text-[var(--text-muted)] text-sm">Bespoke business systems, APIs, and automation platforms built for your specific workflows.</p>
            </a>
            <a href="/mobile-app-development-mumbai" className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 hover:border-[var(--border-hover)] transition-colors">
              <h3 className="font-semibold mb-2">Mobile App Development</h3>
              <p className="text-[var(--text-muted)] text-sm">Native and cross-platform iOS & Android apps using React Native and Flutter.</p>
            </a>
            <a href="/erp-software-development-mumbai" className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 hover:border-[var(--border-hover)] transition-colors">
              <h3 className="font-semibold mb-2">ERP Software Development</h3>
              <p className="text-[var(--text-muted)] text-sm">Custom ERP systems to manage inventory, HR, billing, and operations in one platform.</p>
            </a>
          </div>
          <p className="text-[var(--text-muted)] mt-6 text-sm">
            Want to understand pricing? Read our detailed guide on <a href="/website-development-cost-mumbai" className="text-[var(--text-primary)] underline">website development cost in Mumbai</a>.
          </p>
        </div>

        {/* Expanded FAQ */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg">How much does website development cost in Mumbai?</h3>
              <p className="text-[var(--text-muted)] mt-2">
                Website development cost in Mumbai varies based on the type of website, number of pages, features, and integrations required. A simple business website typically costs between ₹15,000 to ₹50,000, while complex web applications and ecommerce stores can range from ₹50,000 to ₹3,00,000 or more. At CH Digital Solutions, we provide transparent quotes after understanding your specific requirements. Read our complete <a href="/website-development-cost-mumbai" className="text-[var(--text-primary)] underline">website development cost guide</a> for detailed pricing information.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">How long does it take to build a website?</h3>
              <p className="text-[var(--text-muted)] mt-2">
                Most business websites take between 2 to 6 weeks to complete, depending on the project scope and complexity. A simple landing page or portfolio website can be delivered in 1 to 2 weeks. Complex web applications, ecommerce stores with payment gateway integrations, and custom software platforms may take 6 to 12 weeks. We follow an agile development process with regular updates so you can track progress throughout the project.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Do you build custom business software?</h3>
              <p className="text-[var(--text-muted)] mt-2">
                Yes, custom software development is one of our core specializations. We build tailored business systems including CRM platforms, inventory management tools, employee management systems, and workflow automation software. Visit our <a href="/custom-software-development-mumbai" className="text-[var(--text-primary)] underline">custom software development</a> page to learn more about our bespoke solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Will my website be mobile responsive?</h3>
              <p className="text-[var(--text-muted)] mt-2">
                Absolutely. Every website we build is fully responsive and optimized for all screen sizes — mobile phones, tablets, laptops, and desktop monitors. With over 70% of web traffic in India coming from mobile devices, mobile-first design is not optional — it is a fundamental requirement in our development process.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Do you provide website maintenance and support?</h3>
              <p className="text-[var(--text-muted)] mt-2">
                Yes. Every project comes with a 30-day post-launch warranty that covers bug fixes and minor adjustments. After that, we offer ongoing maintenance packages that include security updates, content changes, performance monitoring, and technical support. We are committed to building long-term partnerships with our clients.
              </p>
            </div>
          </div>
        </div>

        {/* Local SEO Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold mb-6">
            Website Development Services Across Mumbai
          </h2>
          <p className="text-[var(--text-muted)] max-w-3xl">
            CH Digital Solutions provides website development services across all areas of Mumbai including Byculla, Dadar, Lower Parel, Andheri, Bandra, Borivali, Thane, and Navi Mumbai. Whether you are a local shop owner in South Mumbai or a tech startup in BKC, our team delivers the same level of quality, performance, and professionalism. We also work with clients across India through remote collaboration, ensuring seamless communication and timely delivery regardless of location.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Start Your Website Project Today
          </h2>
          <p className="text-[var(--text-muted)] mb-6 max-w-xl mx-auto">
            Looking for a reliable website development company in Mumbai? Contact CH Digital Solutions today for a free consultation and project quote. Let's build something exceptional together.
          </p>
          <a
            href="/#contact"
            className="px-8 py-3 bg-[var(--cta-bg)] text-[var(--cta-text)] rounded-lg font-semibold"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
      <Footer />
    </div>
  </>
  );
};

export default WebsiteDevelopmentMumbai;