import Navbar from "../components/home/Navbar";
import GlassCard from "../components/ui/GlassCard";

const WebsiteDevelopmentMumbai = () => {
  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-40 pb-20">

        <h1 className="text-5xl font-semibold mb-6">
          Website Development Company in Mumbai
        </h1>

        <p className="text-gray-400 text-lg max-w-3xl mt-6">
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

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Planning</h3>
              <p className="text-gray-400 text-sm">
                Understanding business goals and defining project scope.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Design</h3>
              <p className="text-gray-400 text-sm">
                Creating modern UI/UX layouts optimized for conversions.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Development</h3>
              <p className="text-gray-400 text-sm">
                Building scalable web applications using modern frameworks.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Deployment</h3>
              <p className="text-gray-400 text-sm">
                Launching secure and optimized systems for real-world use.
              </p>
            </div>

          </div>

        </div>

        <div className="mt-24">

          <h2 className="text-3xl font-semibold mb-6">
            Technologies We Use
          </h2>

          <ul className="text-gray-400 space-y-3 max-w-3xl">
            <li>• React & Modern Frontend Frameworks</li>
            <li>• MERN Stack (MongoDB, Express, React, Node)</li>
            <li>• Python Backend Systems</li>
            <li>• Cloud deployment infrastructure</li>
            <li>• API integrations</li>
          </ul>

        </div>

        {/* Why Choose Section */}

        <div className="mt-24 grid md:grid-cols-2 gap-8">

          <GlassCard>
            <h3 className="text-xl font-semibold mb-2">
              Startup Focused
            </h3>

            <p className="text-gray-400">
              We build scalable digital systems designed for fast growing
              startups and modern businesses.
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-semibold mb-2">
              Scalable Architecture
            </h3>

            <p className="text-gray-400">
              Our systems are designed for performance, scalability and
              long-term maintainability.
            </p>
          </GlassCard>

        </div>

        <div className="mt-24">

          <h2 className="text-3xl font-semibold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold text-lg">
                How much does website development cost in Mumbai?
              </h3>
              <p className="text-gray-400">
                The cost depends on project complexity, features and integrations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                How long does it take to build a website?
              </h3>
              <p className="text-gray-400">
                Most websites take between 2–6 weeks depending on project scope.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you build custom business software?
              </h3>
              <p className="text-gray-400">
                Yes, we specialize in custom software systems and automation tools.
              </p>
            </div>

          </div>

        </div>

        <div className="mt-24 text-center">

          <h2 className="text-3xl font-semibold mb-4">
            Start Your Project
          </h2>

          <p className="text-gray-400 mb-6">
            Looking for a reliable development partner? Contact CH Digital Solutions
            to build scalable digital platforms for your business.
          </p>

          <a
            href="/#contact"
            className="px-8 py-3 bg-white text-black rounded-lg font-semibold"
          >
            Contact Us
          </a>

        </div>

      </div>
    </div>
  );
};

export default WebsiteDevelopmentMumbai;