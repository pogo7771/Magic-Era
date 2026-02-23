import React from 'react';
import { Code, Database, Globe, Cpu, Layout, Server, BarChart2 } from 'lucide-react';

const Brands = () => {
    const brands = [
        { name: "CSS3", icon: <Code size={32} /> },
        { name: "JavaScript", icon: <Code size={32} /> },
        { name: "Graphics", icon: <Layout size={32} /> },
        { name: "C++", icon: <Cpu size={32} /> },
        { name: "PHP", icon: <Server size={32} /> },
        { name: "React", icon: <Code size={32} /> },
        { name: "SEO", icon: <Globe size={32} /> },
        { name: "Analytics", icon: <BarChart2 size={32} /> },
    ];

    const BrandRow = () => (
        <div className="flex items-center gap-10 md:gap-20 px-8 shrink-0">
            {brands.map((brand, index) => (
                <div key={index} className="group flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100 cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-accent group-hover:bg-accent/5 group-hover:scale-110 transition-all duration-300">
                        {brand.icon}
                    </div>
                    <span className="font-black text-slate-400 group-hover:text-primary transition-colors uppercase tracking-[0.2em] text-[10px] md:text-xs">
                        {brand.name}
                    </span>
                </div>
            ))}
        </div>
    );

    return (
        <div className="py-16 border-y border-slate-100 bg-white overflow-hidden relative group">
            <div className="flex items-center">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

                <div className="animate-scroll whitespace-nowrap flex py-2 group-hover:[animation-play-state:paused]">
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
