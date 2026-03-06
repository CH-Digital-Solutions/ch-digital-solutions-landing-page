import Navbar from "../components/home/Navbar";
import { Helmet } from "react-helmet-async";

const ERPSoftwareDevelopmentMumbai = () => {
  return (
    <div className="bg-black text-white min-h-screen">

      <Helmet>
        <title>ERP Software Development Company in Mumbai | CH Digital Solutions</title>
        <meta
          name="description"
          content="CH Digital Solutions develops custom ERP systems for schools, hospitals and businesses in Mumbai."
        />
      </Helmet>

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-40 pb-24">

        <h1 className="text-5xl font-semibold mb-6">
          ERP Software Development Company in Mumbai
        </h1>

        <p className="text-gray-400 max-w-3xl text-lg">
          We develop ERP systems that help businesses manage operations,
          automate workflows and improve efficiency.
        </p>

      </div>

    </div>
  );
};

export default ERPSoftwareDevelopmentMumbai;