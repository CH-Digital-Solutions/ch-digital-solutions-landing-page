import Navbar from "../components/home/Navbar";
import { Helmet } from "react-helmet-async";

const EcommerceWebsiteDevelopmentMumbai = () => {
  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen">

      <Helmet>
        <title>Ecommerce Website Development Mumbai | CH Digital Solutions</title>

        <meta
          name="description"
          content="CH Digital Solutions provides ecommerce website development services in Mumbai for clothing brands, retail businesses and startups."
        />

        <link
          rel="canonical"
          href="https://chdigitalsolutions.in/ecommerce-website-development-mumbai"
        />
      </Helmet>

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-40 pb-24">

        <h1 className="text-5xl font-semibold mb-6">
          Ecommerce Website Development Mumbai
        </h1>

        <p className="text-[var(--text-muted)] text-lg max-w-3xl">
          CH Digital Solutions builds modern ecommerce websites that help
          businesses sell products online. Our ecommerce platforms are
          designed for performance, security and scalability.
        </p>

        {/* Services */}

        <div className="mt-24">

          <h2 className="text-3xl font-semibold mb-6">
            Ecommerce Development Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl rounded-2xl p-6">
              Shopify Store Development
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl rounded-2xl p-6">
              Custom Ecommerce Platforms
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl rounded-2xl p-6">
              Payment Gateway Integration
            </div>

          </div>

        </div>

        {/* Process */}

        <div className="mt-24">

          <h2 className="text-3xl font-semibold mb-6">
            Our Ecommerce Development Process
          </h2>

          <p className="text-[var(--text-muted)] max-w-3xl">
            Our process focuses on building scalable online stores.
            We begin with understanding product requirements,
            designing the store layout and building secure ecommerce
            infrastructure.
          </p>

        </div>

        {/* FAQ */}

        <div className="mt-24">

          <h2 className="text-3xl font-semibold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold text-lg">
                How much does an ecommerce website cost?
              </h3>

              <p className="text-[var(--text-muted)]">
                Ecommerce website cost depends on the number of products,
                features and integrations required.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                How long does it take to build an ecommerce website?
              </h3>

              <p className="text-[var(--text-muted)]">
                Most ecommerce websites take between 3–8 weeks depending
                on the project scope.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default EcommerceWebsiteDevelopmentMumbai;