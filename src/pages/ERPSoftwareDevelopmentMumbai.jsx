import Navbar from "../components/home/Navbar";
import { Helmet } from "react-helmet-async";

const ERPSoftwareDevelopmentMumbai = () => {
  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen">

      <Helmet>
        <title>ERP Software Development Company in Mumbai | CH Digital Solutions</title>

        <meta
          name="description"
          content="CH Digital Solutions provides ERP software development services in Mumbai. We build custom ERP systems for businesses, schools, hospitals and startups."
        />

        <link
          rel="canonical"
          href="https://chdigitalsolutions.in/erp-software-development-mumbai"
        />
      </Helmet>

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-40 pb-24">

        {/* Heading */}

        <h1 className="text-5xl font-semibold mb-6">
          ERP Software Development Company in Mumbai
        </h1>

        <p className="text-[var(--text-muted)] text-lg max-w-3xl">
          CH Digital Solutions develops powerful ERP systems that help
          businesses manage operations efficiently. Our ERP solutions are
          designed to integrate multiple business processes including
          inventory management, billing systems, staff management,
          reporting and workflow automation.
        </p>

        <p className="text-[var(--text-muted)] text-lg max-w-3xl mt-6">
          As a software development company based in Mumbai, we build
          scalable ERP platforms that allow organizations to streamline
          their operations and improve productivity. Our systems are
          designed to handle real world business challenges with
          flexibility and reliability.
        </p>

        {/* Services */}

        <div className="mt-24">

          <h2 className="text-3xl font-semibold mb-8">
            ERP Software Development Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Custom ERP Development
              </h3>
              <p className="text-[var(--text-muted)] text-sm">
                Tailored ERP systems designed specifically for your
                business processes and operational workflows.
              </p>
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Inventory Management Systems
              </h3>
              <p className="text-[var(--text-muted)] text-sm">
                ERP solutions that help businesses track products,
                stock levels and warehouse operations efficiently.
              </p>
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Billing & Accounting Systems
              </h3>
              <p className="text-[var(--text-muted)] text-sm">
                Integrated billing and accounting tools that simplify
                financial management and reporting.
              </p>
            </div>

          </div>

        </div>

        {/* Development Process */}

        <div className="mt-24">

          <h2 className="text-3xl font-semibold mb-6">
            Our ERP Development Process
          </h2>

          <p className="text-[var(--text-muted)] max-w-3xl">
            Our ERP development process begins with understanding
            the specific operational needs of your organization.
            We analyze workflows, design system architecture and
            develop modules that integrate seamlessly with your
            business operations.
          </p>

          <p className="text-[var(--text-muted)] max-w-3xl mt-4">
            Our development team focuses on building scalable,
            secure and high performance ERP platforms that can
            grow with your business.
          </p>

        </div>

        {/* Industries */}

        <div className="mt-24">

          <h2 className="text-3xl font-semibold mb-8">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
              Schools & Educational Institutes
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
              Retail & Distribution Businesses
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
              Healthcare & Clinics
            </div>

          </div>

        </div>

        {/* Technologies */}

        <div className="mt-24">

          <h2 className="text-3xl font-semibold mb-6">
            Technologies We Use
          </h2>

          <ul className="text-[var(--text-muted)] space-y-3 max-w-3xl">
            <li>• React based modern dashboards</li>
            <li>• MERN Stack backend architecture</li>
            <li>• Secure cloud infrastructure</li>
            <li>• API integrations with external platforms</li>
            <li>• Scalable database systems</li>
          </ul>

        </div>

        {/* FAQ */}

        <div className="mt-24">

          <h2 className="text-3xl font-semibold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold text-lg">
                What is ERP software?
              </h3>

              <p className="text-[var(--text-muted)]">
                ERP software is a system that helps businesses manage
                multiple operations such as inventory, finance,
                employees and workflows within a single platform.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                How long does ERP development take?
              </h3>

              <p className="text-[var(--text-muted)]">
                ERP development timelines depend on project complexity.
                Most ERP systems take between 4–12 weeks to develop.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Can ERP systems be customized?
              </h3>

              <p className="text-[var(--text-muted)]">
                Yes. Our ERP solutions are fully customizable so that
                businesses can adapt the system according to their
                operational needs.
              </p>
            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-24 text-center">

          <h2 className="text-3xl font-semibold mb-4">
            Build a Custom ERP System for Your Business
          </h2>

          <p className="text-[var(--text-muted)] mb-6">
            Contact CH Digital Solutions to develop scalable ERP
            software that simplifies operations and improves
            business efficiency.
          </p>

          <a
            href="/#contact"
            className="px-8 py-3 bg-[var(--cta-bg)] text-[var(--cta-text)] rounded-lg font-semibold"
          >
            Contact Us
          </a>

        </div>

      </div>

    </div>
  );
};

export default ERPSoftwareDevelopmentMumbai;