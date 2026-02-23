import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PageBanner = ({ title, subtitle, breadcrumbs, bgImage }) => {
    return (
        <section className="relative h-[350px] md:h-[450px] flex items-center justify-center text-white overflow-hidden pt-20">
            {/* Background Image with Parallax-like effect */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage || "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"}
                    alt={title}
                    className="w-full h-full object-cover transform scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-slate-900/90 mix-blend-multiply"></div>

                {/* Decorative Overlays */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-warning/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div data-aos="zoom-in" data-aos-duration="800">
                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-2xl">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
                            {subtitle}
                        </p>
                    )}

                    <nav className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
                        <Link to="/" className="text-slate-200 hover:text-warning font-semibold transition-colors flex items-center gap-1">
                            Home
                        </Link>
                        {breadcrumbs && breadcrumbs.map((crumb, index) => (
                            <React.Fragment key={index}>
                                <ChevronRight size={14} className="text-slate-500" />
                                {crumb.to ? (
                                    <Link to={crumb.to} className="text-slate-200 hover:text-warning font-semibold transition-colors">
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span className="text-warning font-black uppercase tracking-widest text-xs">
                                        {crumb.label}
                                    </span>
                                )}
                            </React.Fragment>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Bottom Wave Decor */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
                <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F8FAFC"></path>
                </svg>
            </div>
        </section>
    );
};

export default PageBanner;
