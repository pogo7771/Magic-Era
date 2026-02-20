import React from 'react';
import { ArrowRight, CheckCircle, Video, FileText, Users, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
    return (
        <section className="py-20 lg:py-24 overflow-hidden bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Image Column */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mt-12">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    className="rounded-3xl shadow-lg w-full h-full object-cover transform translate-y-4 hover:-translate-y-2 transition-transform duration-500"
                                    alt="Smiling Student"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    className="rounded-3xl shadow-lg w-full h-full object-cover transform hover:-translate-y-2 transition-transform duration-500"
                                    alt="Portrait"
                                />
                            </div>
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white rounded-full w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center shadow-2xl border-8 border-white animate-spin-slow-pause">
                            <span className="text-3xl md:text-4xl font-bold">12+</span>
                            <span className="text-xs uppercase tracking-wider opacity-80 mt-1">Years Exp.</span>
                        </div>

                        {/* Decorative Blob */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-slate-100 rounded-full blur-3xl opacity-50"></div>
                    </div>

                    {/* Content Column */}
                    <div className="relative">
                        <span className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-2 block">Get To Know About Us</span>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                            Discover top <span className="text-accent relative inline-block px-2">Instructors</span> <br />
                            Around the World
                        </h2>

                        <p className="text-slate-600 text-lg leading-relaxed mb-8 text-justify">
                            At Magic Era, our training courses are designed and conducted by professional trainers with years of experience of working in MNCs.
                            We aim to provide strong technical skills and practical knowledge.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            {[
                                { number: '200+', label: 'Expert Trainers', icon: Users, color: 'text-primary', bg: 'bg-primary/10' },
                                { number: '150+', label: 'Top Lessons', icon: FileText, color: 'text-warning', bg: 'bg-warning/10' },
                                { number: '1.8k+', label: 'Happy Students', icon: GraduationCap, color: 'text-green-600', bg: 'bg-green-100' },
                                { number: '320+', label: 'Pro Videos', icon: Video, color: 'text-accent', bg: 'bg-accent/10' },
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-4 group p-3 rounded-xl hover:bg-slate-50 transition-colors">
                                    <div className={`${stat.bg} ${stat.color} p-3 rounded-full group-hover:scale-110 transition-transform`}>
                                        <stat.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-slate-800">{stat.number}</h4>
                                        <small className="text-slate-500 font-medium">{stat.label}</small>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link to="/about" className="btn btn-primary btn-lg group shadow-xl">
                            Discover More <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
