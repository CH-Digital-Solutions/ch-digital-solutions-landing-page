import Navbar from "../components/home/Navbar";
import { Helmet } from "react-helmet-async";

const CustomSoftwareDevelopmentMumbai = () => {
  return (
    <div className="bg-black text-white min-h-screen">

      <Helmet>
        <title>Custom Software Development Company in Mumbai | CH Digital Solutions</title>

        <meta
          name="description"
          content="CH Digital Solutions provides custom software development services in Mumbai including ERP systems, automation platforms and scalable business software."
        />

        <link
          rel="canonical"
          href="https://chdigitalsolutions.in/custom-software-development-mumbai"
        />
      </Helmet>

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-40 pb-24">

        <h1 className="text-5xl font-semibold mb-6 leading-tight">
          Custom Software Development Company in Mumbai
        </h1>

        <p className="text-gray-400 text-lg max-w-3xl">
          CH Digital Solutions builds powerful custom software solutions for
          startups and businesses. Our team designs scalable systems that
          automate operations and improve efficiency.
        </p>

        {/* Services */}

        <div className="mt-20">
          <h2 className="text-3xl font-semibold mb-6">
            Custom Software Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
              ERP Development
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
              Business Automation Systems
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
              API Integrations
            </div>

          </div>
        </div>

        {/* Why Choose */}

        <div className="mt-20">
          <h2 className="text-3xl font-semibold mb-6">
            Why Choose CH Digital Solutions
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li>• Scalable software architecture</li>
            <li>• Modern technology stack</li>
            <li>• Startup focused development</li>
            <li>• Automation driven solutions</li>
          </ul>
        </div>

      </div>

    </div>
  );
};

export default CustomSoftwareDevelopmentMumbai;