import Navbar from "../../components/home/Navbar";
import { Helmet } from "react-helmet-async";

const ERPSoftwareForSmallBusiness = () => {
    return (
        <div className="bg-black text-white min-h-screen">

            <Helmet>
                <title>ERP Software for Small Business | Complete Guide</title>

                <meta
                    name="description"
                    content="Learn how ERP software helps small businesses manage operations, automate processes and improve productivity."
                />

                <link
                    rel="canonical"
                    href="https://chdigitalsolutions.in/erp-software-for-small-business"
                />
            </Helmet>

            <Navbar />

            <div className="max-w-5xl mx-auto px-6 pt-40 pb-24">

                <h1 className="text-5xl font-semibold mb-8">
                    ERP Software for Small Business
                </h1>

                <p className="text-gray-400 text-lg mb-8">
                    ERP (Enterprise Resource Planning) software helps businesses
                    manage multiple operations through a single integrated system.
                </p>

                <h2 className="text-3xl font-semibold mt-16 mb-6">
                    What is ERP Software?
                </h2>

                <p className="text-gray-400 mb-6">
                    ERP software integrates various business processes such as
                    inventory management, billing, accounting and reporting
                    into a centralized platform.
                </p>

                <h2 className="text-3xl font-semibold mt-16 mb-6">
                    Benefits of ERP Software
                </h2>

                <ul className="text-gray-300 space-y-4">

                    <li>
                        Improved operational efficiency
                    </li>

                    <li>
                        Better data management
                    </li>

                    <li>
                        Automation of repetitive tasks
                    </li>

                    <li>
                        Improved decision making through analytics
                    </li>

                </ul>

                <h2 className="text-3xl font-semibold mt-16 mb-6">
                    Why Small Businesses Need ERP
                </h2>

                <p className="text-gray-400 mb-6">
                    Small businesses often struggle with fragmented systems.
                    ERP platforms unify operations and provide real time
                    insights that support business growth.
                </p>

                <p className="text-gray-400 mt-6">
                    If your business needs a scalable ERP platform, check our
                    <a
                        href="/erp-software-development-mumbai"
                        className="text-white underline ml-1"
                    >
                        ERP software development services in Mumbai
                    </a>.
                </p>

                <div className="mt-16 bg-white/5 border border-white/10 rounded-xl p-8 text-center">

                    <h3 className="text-2xl font-semibold mb-4">
                        Build a Custom ERP System
                    </h3>

                    <p className="text-gray-400 mb-6">
                        CH Digital Solutions develops ERP software tailored
                        to business workflows.
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

export default ERPSoftwareForSmallBusiness;