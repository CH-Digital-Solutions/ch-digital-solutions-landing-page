import React from 'react'
import { Globe, ShoppingCart, Smartphone, Settings, Zap, ShieldCheck } from "lucide-react"

function Services() {
    const ser_content = [

        {
            title: "Business & Landing Websites",
            desc: "Clean websites that explain your business clearly and help customers reach you easily.",
            icon: Globe,
        },
        {
            title: "E-Commerce Websites",
            desc: "Online stores to sell products, manage orders, and accept payments smoothly.",
            icon: ShoppingCart,
        },
        {
            title: "Mobile App Development",
            desc: "Simple and user-friendly mobile apps for customers or internal business use.",
            icon: Smartphone,
        },
        {
            title: "Custom Business Systems",
            desc: "Smart systems built for your work to reduce manual effort and save time.",
            icon: Settings,
        },
        {
            title: "Automation & Process Simplification",
            desc: "We automate repetitive tasks to improve speed, accuracy, and productivity.",
            icon: Zap,
        },
        {
            title: "System Maintenance & Growth Support",
            desc: "Ongoing support to keep your systems secure, updated, and ready to grow.",
            icon: ShieldCheck,
        },

    ]
    return (
        <>
            
            <div className='flex justify-center'>
                <div className='min-h-screen bg-black w-full md:w-full py-10 md:py-0'>
                    <div className="bg-white/15 w-full h-[0.1px]"></div>


                    <div className="text-white w-full flex flex-col items-center jakarta mt-8 md:mt-12 px-4">
                        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center">Our Services</h2>
                        <p className="text-white/60 text-sm sm:text-base md:text-base font-light text-center leading-relaxed mt-3 max-w-xs sm:max-w-md md:max-w-2xl">
                            Comprehensive solutions covering every aspect of your digital transformation.
                        </p>
                    </div>


                    {/* 6 BOXES */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-5 px-4  md:w-360 sm:px-8 md:px-25 lg:px-28 xl:px-44 mt-8 md:mt-14 md:ml-8">
                        {
                            ser_content.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <div key={index} className='w-full p-4 md:p-4 lg:p-5 rounded-xl md:rounded-2xl bg-black border border-white/15 hover:border-white/30 transition-all'>
                                        <div className="w-10 h-10 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg bg-white/10 flex justify-center items-center">
                                            <Icon className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white/90" />
                                        </div>
                                        <div className="text-white text-lg md:text-base lg:text-lg font-semibold mt-3 md:mt-3">{service.title}</div>
                                        <div className="text-white/55 text-sm md:text-sm font-light mt-1.5 md:mt-2 leading-relaxed">{service.desc}</div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>

    )
}

export default Services