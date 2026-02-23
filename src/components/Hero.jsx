import React from 'react';
import { ArrowRight, Phone, Users, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-warning/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left" data-aos="fade-right">
            <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 transform hover:scale-105 transition-transform duration-300">
              <span className="text-accent font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em]">100% Satisfaction Guarantee</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-primary leading-[1.15]">
              Learn <span className="text-accent relative inline-block">
                Skills
                <svg className="absolute w-full h-3 bottom-0 left-0 text-warning -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span> From <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-600">Top Instructors</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              The difference between ordinary and extraordinary is that little extra. <br className="hidden md:block" />
              Good coaching is good teaching and nothing else.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
              <a href="#courses" className="btn btn-primary btn-lg group w-full sm:w-auto">
                Explore Courses
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-4 group cursor-pointer bg-white p-2 pr-6 rounded-full shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-warning/10 rounded-full text-warning group-hover:bg-warning group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Join Now</span>
                  <a href="tel:+918299727078" className="font-bold text-slate-800 hover:text-accent transition-colors text-sm sm:text-base">+91 8299727078</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-auto z-10 mt-12 lg:mt-0" data-aos="fade-left">
            <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Students"
                className="w-full aspect-[4/3] lg:aspect-auto object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Floating Badge 1 - Hidden on small mobile */}
            <div className="hidden sm:flex absolute -top-10 -left-6 lg:-left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl items-center gap-4 animate-bounce-slow z-20 border border-slate-50">
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <Users size={24} />
              </div>
              <div className="hidden md:block">
                <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Global Community</div>
                <div className="text-2xl font-black text-slate-800">1K+ <span className="text-sm font-medium text-slate-400 ml-1">Students</span></div>
              </div>
              <div className="md:hidden">
                <div className="text-lg font-black text-slate-800 text-center">1K+</div>
              </div>
            </div>

            {/* Floating Badge 2 - Hidden on small mobile */}
            <div className="hidden sm:flex absolute -bottom-10 -right-4 lg:-right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl items-center gap-4 animate-bounce-slow-delayed z-20 border border-slate-50">
              <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                <GraduationCap size={24} />
              </div>
              <div className="hidden md:block">
                <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Success Rate</div>
                <div className="text-2xl font-black text-slate-800">100% <span className="text-sm font-medium text-slate-400 ml-1">Placement</span></div>
              </div>
              <div className="md:hidden">
                <div className="text-lg font-black text-slate-800 text-center">100%</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow { animation: bounce-slow 4s infinite ease-in-out; }
        .animate-bounce-slow-delayed { animation: bounce-slow 5s infinite ease-in-out 2s; }
      `}</style>
    </section>
  );
};

export default Hero;
