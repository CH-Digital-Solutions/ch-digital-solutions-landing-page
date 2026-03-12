import Navbar from "../../components/home/Navbar";
import { Helmet } from "react-helmet-async";

const WebsiteDevelopmentCostMumbai = () => {
  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen">

      <Helmet>
        <title>Website Development Cost in Mumbai | Complete Guide 2025</title>

        <meta
          name="description"
          content="Learn the website development cost in Mumbai. Complete guide explaining pricing, features, and factors that affect website development cost."
        />

        <link
          rel="canonical"
          href="https://chdigitalsolutions.in/website-development-cost-mumbai"
        />
      </Helmet>

      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-40 pb-24">

        {/* Title */}

        <h1 className="text-5xl font-semibold mb-8">
          Website Development Cost in Mumbai (Complete Guide)
        </h1>

        <p className="text-[var(--text-muted)] text-lg mb-8">
          If you are planning to build a website for your business,
          one of the first questions that comes to mind is:
          <strong> how much does website development cost in Mumbai?</strong>
        </p>

        <p className="text-[var(--text-muted)] text-lg mb-8">
          The cost of website development depends on multiple factors
          including design complexity, features, integrations and
          development time. In this guide we will explain the pricing
          structure and factors that influence website development cost.
        </p>

        {/* Section */}

        <h2 className="text-3xl font-semibold mt-16 mb-6">
          Average Website Development Cost in Mumbai
        </h2>

        <p className="text-[var(--text-muted)] mb-6">
          Website development cost in Mumbai can vary depending on
          the type of website you want to build.
        </p>

        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl rounded-xl p-6 mb-10">

          <ul className="space-y-3 text-[var(--text-secondary)]">
            <li>Basic business website: ₹10,000 – ₹30,000</li>
            <li>Professional company website: ₹30,000 – ₹80,000</li>
            <li>Ecommerce website: ₹50,000 – ₹2,00,000+</li>
            <li>Custom web application: ₹1,00,000 – ₹5,00,000+</li>
          </ul>

        </div>

        {/* Section */}

        <h2 className="text-3xl font-semibold mt-16 mb-6">
          Factors That Affect Website Development Cost
        </h2>

        <p className="text-[var(--text-muted)] mb-6">
          Several factors influence the overall cost of building a website.
        </p>

        <ul className="space-y-4 text-[var(--text-secondary)]">

          <li>
            <strong>Design complexity:</strong> Custom UI/UX design
            increases development cost compared to template websites.
          </li>

          <li>
            <strong>Number of pages:</strong> Websites with more pages
            require more development work.
          </li>

          <li>
            <strong>Features and functionality:</strong> Features like
            login systems, dashboards, payment gateways and APIs
            increase the project scope.
          </li>

          <li>
            <strong>Content management systems:</strong> Platforms like
            WordPress or custom CMS also influence development cost.
          </li>

        </ul>

        {/* Section */}

        <h2 className="text-3xl font-semibold mt-16 mb-6">
          Why Businesses Need Professional Website Development
        </h2>

        <p className="text-[var(--text-muted)] mb-6">
          A professionally built website helps businesses establish
          credibility, attract customers and grow their digital presence.
        </p>

        <p className="text-[var(--text-muted)] mb-6">
          Modern websites are not just static pages. They are powerful
          digital platforms that integrate marketing, analytics,
          automation and customer interaction.
        </p>

        {/* CTA */}

        <div className="mt-16 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-8 text-center">

          <h3 className="text-2xl font-semibold mb-4">
            Need a Website for Your Business?
          </h3>

          <p className="text-[var(--text-muted)] mb-6">
            CH Digital Solutions builds scalable websites for startups
            and businesses across Mumbai.
          </p>

          <a
            href="/#contact"
            className="bg-[var(--cta-bg)] text-[var(--cta-text)] px-6 py-3 rounded-lg font-semibold"
          >
            Contact Us
          </a>

        </div>

      </div>

    </div>
  );
};

export default WebsiteDevelopmentCostMumbai;