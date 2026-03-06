import Navbar from "../components/home/Navbar";
import { Helmet } from "react-helmet-async";

const MobileAppDevelopmentMumbai = () => {
  return (
    <div className="bg-black text-white min-h-screen">

      <Helmet>
        <title>Mobile App Development Company in Mumbai | CH Digital Solutions</title>

        <meta
          name="description"
          content="CH Digital Solutions provides mobile app development services in Mumbai including Android apps, iOS apps and scalable mobile platforms for startups."
        />

        <link
          rel="canonical"
          href="https://chdigitalsolutions.in/mobile-app-development-mumbai"
        />
      </Helmet>

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-40 pb-24">

        <h1 className="text-5xl font-semibold mb-6">
          Mobile App Development Company in Mumbai
        </h1>

        <p className="text-gray-400 text-lg max-w-3xl">
          We design and develop modern mobile applications for startups and
          businesses. Our mobile solutions focus on performance, scalability
          and user experience.
        </p>

        <div className="mt-20">
          <h2 className="text-3xl font-semibold mb-6">
            Mobile App Development Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
              Android App Development
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
              iOS App Development
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
              Cross Platform Apps
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default MobileAppDevelopmentMumbai;