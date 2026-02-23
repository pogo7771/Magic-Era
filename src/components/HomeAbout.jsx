import React from 'react';
import { ArrowRight, CheckCircle, Video, FileText, Users, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
    return (
        <section className="py-20 lg:py-32 overflow-hidden bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Image Column */}
                    <div className="relative order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            <div className="mt-8 sm:mt-12">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    className="rounded-[2rem] sm:rounded-3xl shadow-xl w-full aspect-[4/5] object-cover transform translate-y-4 hover:-translate-y-2 transition-transform duration-500"
                                    alt="Smiling Student"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    className="rounded-[2rem] sm:rounded-3xl shadow-xl w-full aspect-[4/5] object-cover transform hover:-translate-y-2 transition-transform duration-500"
                                    alt="Portrait"
                                />
                            </div>
                        </div>

                        {/* Experience Badge - Responsive Sizing */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white rounded-full w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 flex flex-col items-center justify-center shadow-2xl border-[6px] sm:border-[8px] border-white animate-spin-slow z-20">
                            <span className="text-2xl sm:text-3xl md:text-5xl font-black">12+</span>
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider opacity-80 mt-1">Years Exp.</span>
                        </div>

                        {/* Decorative Blob */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-slate-100 rounded-full blur-3xl opacity-50"></div>
                    </div>

                    {/* Content Column */}
                    <div className="relative order-1 lg:order-2 text-center lg:text-left">
                        <span className="text-accent font-black text-xs sm:text-sm uppercase tracking-[0.25em] mb-4 block">Our Legacy</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-8 leading-tight">
                            Empowering Minds <br className="hidden sm:block" />
                            <span className="text-accent relative inline-block px-2">Across The Globe</span>
                        </h2>

                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-10 mx-auto lg:mx-0 max-w-xl">
                            At Magic Era, we don&apos;t just teach subjects; we mentor future leaders. Our courses are conducted by industry veterans from top MNCs, ensuring you get real-world exposure.
                        </p>

                        <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-12 max-w-2xl mx-auto lg:mx-0">
                            {[
                                { number: '200+', label: 'Mentors', icon: Users, color: 'text-primary', bg: 'bg-primary/5' },
                                { number: '150+', label: 'Courses', icon: FileText, color: 'text-warning', bg: 'bg-warning/5' },
                                { number: '1.8k+', label: 'Alumni', icon: GraduationCap, color: 'text-green-600', bg: 'bg-green-50' },
                                { number: '320+', label: 'Tutorials', icon: Video, color: 'text-accent', bg: 'bg-accent/5' },
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                                    <div className={`${stat.bg} ${stat.color} p-3 rounded-xl sm:rounded-2xl flex-shrink-0`}>
                                        <stat.icon size={24} />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <h4 className="font-black text-lg sm:text-xl text-slate-800 tracking-tight">{stat.number}</h4>
                                        <p className="text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link to="/about" className="btn btn-primary btn-lg w-full sm:w-auto group shadow-2xl">
                            Get Started Now <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
