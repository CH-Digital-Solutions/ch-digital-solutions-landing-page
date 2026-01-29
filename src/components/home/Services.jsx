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
        <div className='min-h-screen bg-black w-full'>

            <div className="bg-white/15 w-full h-[0.1px]"></div>
            <div className="text-white relative w-full  md:text-[70px] md:font-bold flex flex-col  items-center jakarta md:mt-10">
                Our Services
                <div className="text-white/70 text-[20px] font-light text-center leading-loose">Comprehensive solutions covering every aspect of your digital transformation.</div>
            </div>


            {/* 6 BOXES */}
            <div className="grid grid-cols-3 px-40 ">
                {
                    ser_content.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div className='w-90 h-55 mt-10 rounded-2xl bg-black border border-white/20'>
                                <div className="w-12 h-12 rounded-xl bg-white/15 flex justify-center items-center m-4">
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-white text-[22px] w-full font-semibold mt-4 ml-4">{service.title}</div>
                                <div className="text-white/70 text-[16px] max-w-[85%] font-light mt-2 ml-4">{service.desc}</div>
                            </div>
                        )
                    })
                }

            </div>
        </div>

    )
}

export default Services