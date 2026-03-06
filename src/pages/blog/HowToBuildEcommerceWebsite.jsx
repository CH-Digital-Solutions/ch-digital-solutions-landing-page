import Navbar from "../../components/home/Navbar";
import { Helmet } from "react-helmet-async";

const HowToBuildEcommerceWebsite = () => {
  return (
    <div className="bg-black text-white min-h-screen">

      <Helmet>
        <title>How to Build an Ecommerce Website (Step by Step Guide)</title>

        <meta
          name="description"
          content="Learn how to build an ecommerce website from scratch. Complete step-by-step guide for building an online store."
        />

        <link
          rel="canonical"
          href="https://chdigitalsolutions.in/how-to-build-ecommerce-website"
        />
      </Helmet>

      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-40 pb-24">

        <h1 className="text-5xl font-semibold mb-8">
          How to Build an Ecommerce Website (Step by Step)
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Ecommerce websites allow businesses to sell products online
          and reach customers globally. With the growth of online
          shopping, having a well designed ecommerce website is
          essential for modern businesses.
        </p>

        <h2 className="text-3xl font-semibold mt-16 mb-6">
          Step 1 — Choose the Right Platform
        </h2>

        <p className="text-gray-400 mb-6">
          The first step in building an ecommerce website is choosing
          the right platform. Popular ecommerce platforms include
          Shopify, WooCommerce and custom development solutions.
        </p>

        <h2 className="text-3xl font-semibold mt-16 mb-6">
          Step 2 — Design Your Online Store
        </h2>

        <p className="text-gray-400 mb-6">
          Your ecommerce website design plays a crucial role in
          customer experience. A clean layout, intuitive navigation
          and responsive design help improve conversions.
        </p>

        <h2 className="text-3xl font-semibold mt-16 mb-6">
          Step 3 — Add Products
        </h2>

        <p className="text-gray-400 mb-6">
          Each product should include high quality images,
          clear descriptions and accurate pricing information.
        </p>

        <h2 className="text-3xl font-semibold mt-16 mb-6">
          Step 4 — Integrate Payment Gateway
        </h2>

        <p className="text-gray-400 mb-6">
          Payment gateways allow customers to pay securely
          using credit cards, debit cards or digital wallets.
        </p>

        <h2 className="text-3xl font-semibold mt-16 mb-6">
          Step 5 — Launch and Optimize
        </h2>

        <p className="text-gray-400 mb-6">
          Once your ecommerce website is ready, test it thoroughly
          and optimize it for search engines and performance.
        </p>

        <div className="mt-16 bg-white/5 border border-white/10 rounded-xl p-8 text-center">

          <h3 className="text-2xl font-semibold mb-4">
            Need Help Building an Ecommerce Website?
          </h3>

          <p className="text-gray-400 mb-6">
            CH Digital Solutions builds scalable ecommerce
            platforms for startups and businesses.
          </p>

          <a
            href="/#contact"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            Contact Us
          </a>

        </div>

      </div>

    </div>
  );
};

export default HowToBuildEcommerceWebsite;