import Navbar from "../components/home/Navbar";
import { Helmet } from "react-helmet-async";

const MobileAppDevelopmentMumbai = () => {
  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen">

      <Helmet>
        <title>Mobile App Development Company in Mumbai | CH Digital Solutions</title>

        <meta
          name="description"
          content="CH Digital Solutions provides mobile app development services in Mumbai including Android apps, iOS apps and scalable mobile platforms."
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

        <p className="text-[var(--text-muted)] text-lg max-w-3xl">
          CH Digital Solutions builds high performance mobile applications
          for startups and businesses. Our mobile apps are designed to be
          scalable, secure and optimized for user experience.
        </p>

        {/* Services */}

        <div className="mt-24">

          <h2 className="text-3xl font-semibold mb-6">
            Mobile App Development Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl rounded-2xl p-6">
              Android App Development
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl rounded-2xl p-6">
              iOS App Development
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl rounded-2xl p-6">
              Cross Platform Apps
            </div>

          </div>

        </div>

        {/* Development Process */}

        <div className="mt-24">

          <h2 className="text-3xl font-semibold mb-6">
            Our Mobile App Development Process
          </h2>

          <p className="text-[var(--text-muted)] max-w-3xl">
            Our development process includes planning, UI/UX design,
            development, testing and deployment. We focus on building
            apps that deliver excellent performance and user experience.
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
                How much does mobile app development cost in Mumbai?
              </h3>

              <p className="text-[var(--text-muted)]">
                The cost depends on the app features, design complexity
                and integrations required.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                How long does it take to build a mobile app?
              </h3>

              <p className="text-[var(--text-muted)]">
                Mobile app development usually takes between 6–12 weeks
                depending on project scope.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default MobileAppDevelopmentMumbai;