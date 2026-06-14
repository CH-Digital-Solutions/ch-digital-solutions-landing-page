import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import SEO from "../components/SEO";

const mobileAppSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Mobile App Development Services in Mumbai",
      "serviceType": "Mobile App Development",
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
      "description": "CH Digital Solutions specializes in developing high-performance iOS, Android, and cross-platform mobile apps (React Native, Flutter) in Mumbai."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does mobile app development cost in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost depends on the app features, design complexity and integrations required."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mobile app development usually takes between 6–12 weeks depending on project scope."
          }
        }
      ]
    }
  ]
};

const MobileAppDevelopmentMumbai = () => {
  return (
    <>
      <SEO
        title="Mobile App Development Company in Mumbai | iOS & Android Apps"
        description="Top mobile app development services in Mumbai. We build high-performance, native and cross-platform (React Native/Flutter) iOS & Android applications."
        keywords="mobile app development mumbai, app development company mumbai, iOS app development, android app development, React Native development mumbai"
        canonicalPath="/mobile-app-development-mumbai"
        schema={mobileAppSchema}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Mobile App Development Mumbai", path: "/mobile-app-development-mumbai" }
        ]}
      />
      <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen">
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
              <h3 className="font-semibold mb-2">Android App Development</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Native Android apps built with Kotlin and Java, optimized for performance across the entire Android device ecosystem. We build apps that comply with Google Play Store guidelines and deliver smooth user experiences on every screen size.
              </p>
            </div>
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl rounded-2xl p-6">
              <h3 className="font-semibold mb-2">iOS App Development</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Premium iOS apps built with Swift, designed to meet Apple's Human Interface Guidelines. We focus on performance, security, and the polished user experience that iPhone and iPad users expect.
              </p>
            </div>
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Cross-Platform Apps (React Native)</h3>
              <p className="text-[var(--text-muted)] text-sm">
                One codebase, two platforms. React Native lets us build iOS and Android apps simultaneously, reducing development time and cost by up to 40% while maintaining near-native performance.
              </p>
            </div>
          </div>
        </div>

        {/* Types of Apps */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold mb-6">
            Types of Mobile Apps We Build
          </h2>
          <p className="text-[var(--text-muted)] max-w-3xl mb-8">
            From simple utility apps to complex enterprise platforms, our team builds mobile solutions for every business need. Here are some of the most common types of apps we develop for our clients in Mumbai:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
              <h3 className="font-semibold mb-2">E-Commerce & Shopping Apps</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Online store apps with product catalogs, cart management, secure payment integration (Razorpay, UPI, Stripe), order tracking, push notifications, and delivery management. See our <a href="/ecommerce-website-development-mumbai" className="text-[var(--text-primary)] underline">ecommerce development services</a> for web-based stores.
              </p>
            </div>
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Business Management Apps</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Internal tools for managing employees, tracking inventory, generating reports, and monitoring business metrics on the go. These apps often connect to <a href="/custom-software-development-mumbai" className="text-[var(--text-primary)] underline">custom backend software</a> we build.
              </p>
            </div>
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
              <h3 className="font-semibold mb-2">On-Demand Service Apps</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Apps for service-based businesses — booking, scheduling, real-time tracking, and payment processing. Ideal for salons, clinics, home services, food delivery, and logistics businesses.
              </p>
            </div>
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
              <h3 className="font-semibold mb-2">EdTech & Learning Apps</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Educational platforms with video content, quizzes, progress tracking, offline access, and student-teacher communication tools for coaching institutes and online learning businesses.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold mb-6">
            Technologies We Use for Mobile Development
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Mobile Frameworks</h3>
              <ul className="text-[var(--text-muted)] space-y-2">
                <li>• <strong className="text-[var(--text-primary)]">React Native</strong> — Cross-platform apps with a single JavaScript codebase</li>
                <li>• <strong className="text-[var(--text-primary)]">Swift</strong> — Native iOS development for premium Apple experiences</li>
                <li>• <strong className="text-[var(--text-primary)]">Kotlin</strong> — Modern Android development with type safety</li>
                <li>• <strong className="text-[var(--text-primary)]">Flutter</strong> — Google's UI toolkit for natively compiled apps</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Backend & Services</h3>
              <ul className="text-[var(--text-muted)] space-y-2">
                <li>• <strong className="text-[var(--text-primary)]">Node.js & Express</strong> — RESTful APIs and real-time backends</li>
                <li>• <strong className="text-[var(--text-primary)]">Firebase</strong> — Authentication, push notifications, and cloud storage</li>
                <li>• <strong className="text-[var(--text-primary)]">MongoDB & PostgreSQL</strong> — Flexible data storage for mobile apps</li>
                <li>• <strong className="text-[var(--text-primary)]">AWS & Google Cloud</strong> — Scalable hosting and CDN delivery</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold mb-6">
            Explore Our Other Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/website-development-company-mumbai" className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 hover:border-[var(--border-hover)] transition-colors">
              <h3 className="font-semibold mb-2">Website Development</h3>
              <p className="text-[var(--text-muted)] text-sm">Professional websites and web applications for businesses in Mumbai.</p>
            </a>
            <a href="/erp-software-development-mumbai" className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 hover:border-[var(--border-hover)] transition-colors">
              <h3 className="font-semibold mb-2">ERP Software Development</h3>
              <p className="text-[var(--text-muted)] text-sm">Custom ERP systems for inventory, HR, billing, and operations management.</p>
            </a>
            <a href="/whatsapp-automation" className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 hover:border-[var(--border-hover)] transition-colors">
              <h3 className="font-semibold mb-2">WhatsApp Automation</h3>
              <p className="text-[var(--text-muted)] text-sm">AI-powered chatbots and broadcast campaigns for WhatsApp Business.</p>
            </a>
          </div>
        </div>

        {/* FAQ - Expanded */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg">How much does mobile app development cost in Mumbai?</h3>
              <p className="text-[var(--text-muted)] mt-2">
                Mobile app costs depend on the complexity, platform (Android, iOS, or both), features, and integrations. A simple app typically ranges from ₹1,00,000 to ₹3,00,000. Complex apps with payment gateways, real-time features, and admin panels can range from ₹3,00,000 to ₹10,00,000 or more. Cross-platform development with React Native can reduce costs by up to 40% compared to building separate native apps.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">How long does it take to build a mobile app?</h3>
              <p className="text-[var(--text-muted)] mt-2">
                A simple mobile app takes 6 to 8 weeks to develop. Medium-complexity apps with features like user authentication, payment integration, and push notifications take 8 to 14 weeks. Large-scale apps with admin panels, analytics dashboards, and complex backend systems may take 4 to 6 months. We provide detailed timelines after understanding your project requirements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Should I build a native or cross-platform app?</h3>
              <p className="text-[var(--text-muted)] mt-2">
                It depends on your budget and requirements. Cross-platform apps (React Native, Flutter) are ideal if you want to launch on both iOS and Android simultaneously with a single codebase, saving time and money. Native apps are better for performance-critical applications or when you need deep device integration. We help you choose the right approach during our free consultation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Do you help with app store submission?</h3>
              <p className="text-[var(--text-muted)] mt-2">
                Yes. We handle the complete app store submission process for both Google Play Store and Apple App Store, including preparing app listings, screenshots, descriptions, privacy policies, and managing the review process to ensure your app gets approved on the first submission.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Do you provide post-launch maintenance?</h3>
              <p className="text-[var(--text-muted)] mt-2">
                Absolutely. Every app comes with a 30-day warranty for bug fixes. Beyond that, we offer ongoing maintenance packages that include OS compatibility updates, performance optimization, new feature development, and technical support to keep your app running smoothly as Android and iOS release new versions.
              </p>
            </div>
          </div>
        </div>

        {/* Local SEO */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold mb-6">
            Mobile App Development Services Across Mumbai
          </h2>
          <p className="text-[var(--text-muted)] max-w-3xl">
            CH Digital Solutions provides mobile app development services across Mumbai including Byculla, Dadar, Lower Parel, Andheri, Bandra, BKC, Thane, and Navi Mumbai. We also collaborate with clients across India through remote partnerships, delivering the same commitment to quality and on-time delivery regardless of location.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-[var(--text-muted)] mb-6 max-w-xl mx-auto">
            Contact CH Digital Solutions for a free consultation and project estimate. Let's turn your app idea into a reality.
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

export default MobileAppDevelopmentMumbai;