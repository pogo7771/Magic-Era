import React from 'react';
import { ArrowRight, Phone, Users, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-warning/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left" data-aos="fade-right">
            <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 transform hover:scale-105 transition-transform duration-300">
              <span className="text-accent font-bold text-xs sm:text-sm uppercase tracking-widest">100% Satisfaction Guarantee</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-primary leading-tight">
              Learn <span className="text-accent relative inline-block">
                Skills
                <svg className="absolute w-full h-3 bottom-0 left-0 text-warning -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span> From <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-600">Top Instructors</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              The difference between ordinary and extraordinary is that little extra. <br className="hidden md:block" />
              Good coaching is good teaching and nothing else.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
              <a href="#courses" className="btn btn-primary group w-full sm:w-auto">
                Explore Courses
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-4 group cursor-pointer bg-white p-2 pr-6 rounded-full shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 flex items-center justify-center bg-warning/10 rounded-full text-warning group-hover:bg-warning group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <span className="block text-xs text-slate-400 font-medium uppercase tracking-wide">Have any Question?</span>
                  <a href="tel:+918299727078" className="font-bold text-slate-800 hover:text-accent transition-colors">+91 8299727078</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-auto z-10" data-aos="fade-left">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-2 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Students"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Floating Badge 1 */}
            <div className="absolute top-10 left-0 lg:-left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow z-20 border border-slate-50 max-w-[200px]">
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <Users size={24} />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase">Total Students</div>
                <div className="text-2xl font-bold text-slate-800">1K+</div>
              </div>
            </div>

            {/* Floating Badge 2 */}
            <div className="absolute bottom-12 right-0 lg:-right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow-delayed z-20 border border-slate-50 max-w-[220px]">
              <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                <GraduationCap size={24} />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase">Graduation</div>
                <div className="text-2xl font-bold text-slate-800">5K+</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow { animation: bounce-slow 4s infinite ease-in-out; }
        .animate-bounce-slow-delayed { animation: bounce-slow 5s infinite ease-in-out 2s; }
      `}</style>
    </section>
  );
};

export default Hero;
