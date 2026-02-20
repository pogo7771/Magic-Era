import React from 'react';
import { Code, Database, Globe, Cpu, Layout, BarChart, Server } from 'lucide-react';

const Brands = () => {
    const brands = [
        { name: "CSS", icon: <Code size={40} /> },
        { name: "JS", icon: <Code size={40} /> },
        { name: "Graphics", icon: <Layout size={40} /> },
        { name: "C++", icon: <Cpu size={40} /> },
        { name: "PHP", icon: <Server size={40} /> },
        { name: "React", icon: <Code size={40} /> },
        { name: "SEO", icon: <Globe size={40} /> },
    ];

    const BrandRow = () => (
        <div className="flex items-center gap-8 md:gap-16 px-4 md:px-8 shrink-0">
            {brands.map((brand, index) => (
                <div key={index} className="group text-center w-24 md:w-32">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-warning group-hover:bg-white group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 ease-out border border-transparent group-hover:border-slate-100">
                        <div className="transform transition-transform duration-300 group-hover:rotate-12">
                            {brand.icon}
                        </div>
                    </div>
                    <div className="mt-3 text-xs font-bold text-slate-300 uppercase tracking-wider group-hover:text-slate-800 transition-colors">{brand.name}</div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="py-12 border-b border-slate-100 bg-white overflow-hidden">
            <div className="relative w-full">

                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <div className="animate-scroll cursor-pointer">
                    <BrandRow />
                    <BrandRow />
                    <BrandRow />
                    <BrandRow />
                </div>
            </div>
        </div>
    );
};

export default Brands;
