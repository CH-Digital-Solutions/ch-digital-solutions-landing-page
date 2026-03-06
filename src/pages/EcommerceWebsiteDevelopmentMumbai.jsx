import Navbar from "../components/home/Navbar";
import { Helmet } from "react-helmet-async";

const EcommerceWebsiteDevelopmentMumbai = () => {
  return (
    <div className="bg-black text-white min-h-screen">

      <Helmet>
        <title>Ecommerce Website Development Mumbai | CH Digital Solutions</title>
        <meta
          name="description"
          content="We build modern ecommerce websites for clothing brands, retail businesses and startups in Mumbai."
        />
      </Helmet>

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-40 pb-24">

        <h1 className="text-5xl font-semibold mb-6">
          Ecommerce Website Development Mumbai
        </h1>

        <p className="text-gray-400 max-w-3xl text-lg">
          CH Digital Solutions builds scalable ecommerce platforms that help
          brands sell online and manage their operations efficiently.
        </p>

      </div>

    </div>
  );
};

export default EcommerceWebsiteDevelopmentMumbai;