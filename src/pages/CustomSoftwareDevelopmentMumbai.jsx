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

                <p className="text-gray-400 text-lg max-w-3xl mt-6">
                    CH Digital Solutions provides custom software development services in
                    Mumbai for startups and growing businesses. We build scalable digital
                    systems, automation platforms and business software that improve
                    efficiency and productivity.
                </p>

                {/* Services */}

                <div className="mt-24">

                    <h2 className="text-3xl font-semibold mb-6">
                        Custom Software Development Services
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
                            <h3 className="font-semibold mb-2">ERP Systems</h3>
                            <p className="text-gray-400 text-sm">
                                Custom ERP solutions to manage operations, inventory and workflows.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
                            <h3 className="font-semibold mb-2">Automation Systems</h3>
                            <p className="text-gray-400 text-sm">
                                Software that automates repetitive business tasks and processes.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
                            <h3 className="font-semibold mb-2">Business Platforms</h3>
                            <p className="text-gray-400 text-sm">
                                Scalable platforms designed for startups and digital products.
                            </p>
                        </div>

                    </div>

                </div>

                {/* Development Process */}
                <div className="mt-24">

                    <h2 className="text-3xl font-semibold mb-6">
                        Our Software Development Process
                    </h2>

                    <p className="text-gray-400 max-w-3xl">
                        Our development process focuses on building scalable and reliable
                        software solutions. We begin with understanding business requirements,
                        followed by system design, development, testing and deployment.
                    </p>

                </div>
                {/* Technologies Section */}

                <div className="mt-24">

                    <h2 className="text-3xl font-semibold mb-6">
                        Technologies We Use
                    </h2>

                    <ul className="text-gray-400 space-y-3 max-w-3xl">
                        <li>• MERN Stack Development</li>
                        <li>• Python Backend Systems</li>
                        <li>• Cloud Infrastructure</li>
                        <li>• API Integrations</li>
                        <li>• Scalable Database Systems</li>
                    </ul>

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

                {/* FAQ Section */}

                <div className="mt-24">

                    <h2 className="text-3xl font-semibold mb-8">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-6">

                        <div>
                            <h3 className="font-semibold text-lg">
                                What is custom software development?
                            </h3>
                            <p className="text-gray-400">
                                Custom software development involves building software tailored to
                                specific business needs rather than using generic tools.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">
                                How long does custom software development take?
                            </h3>
                            <p className="text-gray-400">
                                Depending on project complexity, development usually takes
                                4–12 weeks.
                            </p>
                        </div>

                    </div>

                </div>

                {/* Local SEO Section */}
                <div className="mt-24">

                    <h2 className="text-3xl font-semibold mb-6">
                        Software Development Services Across Mumbai
                    </h2>

                    <p className="text-gray-400 max-w-3xl">
                        We provide custom software development services across Mumbai
                        including South Mumbai, Dadar, Byculla, Andheri and Navi Mumbai.
                        Our solutions help businesses automate processes and scale their
                        operations digitally.
                    </p>

                </div>

            </div>

        </div>
    );
};

export default CustomSoftwareDevelopmentMumbai;