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

        <p className="text-gray-400 max-w-3xl text-lg">
          CH Digital Solutions builds scalable websites and digital systems
          for startups and modern businesses.
        </p>

        {/* Technology Cards */}

        <div className="grid md:grid-cols-4 gap-6 mt-16">

          <GlassCard>React Development</GlassCard>
          <GlassCard>MERN Stack</GlassCard>
          <GlassCard>Python Systems</GlassCard>
          <GlassCard>API Development</GlassCard>

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

      </div>
    </div>
  );
};

export default WebsiteDevelopmentMumbai;