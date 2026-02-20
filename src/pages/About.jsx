import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Page Header / Breadcrumb */}
      <section className="relative h-[400px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="About Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight animate-fade-in-up">About Us</h1>
          <nav className="flex justify-center text-sm font-medium uppercase tracking-wider text-slate-300">
            <Link to="/" className="hover:text-warning transition-colors">Home</Link>
            <span className="mx-3 text-slate-500"><ChevronRight size={14} /></span>
            <span className="text-white">About Us</span>
          </nav>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 lg:py-28 overflow-hidden bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <span className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-3 block">Who we are</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                Welcome To Magic Era <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-600">
                  Best IT Training Centre
                </span>
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-6 text-justify">
                Magic Era highly specialized in the design and development of websites, software application development, mobile app development, E-Commerce solutions and more. Our team of expert professionals works on the latest software tools and technologies.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-slate-700 font-medium">State-of-art work station in software application development.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-slate-700 font-medium">Expert professionals working on latest technologies.</p>
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="order-1 lg:order-2 relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Students"
                  className="rounded-3xl shadow-xl w-full h-80 object-cover transform translate-y-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Team"
                  className="rounded-3xl shadow-xl w-full h-80 object-cover transform -translate-y-8"
                />
              </div>
              {/* Decorative Circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>

              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-warning/20 rounded-full blur-2xl -z-10"></div>
              <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-warning font-bold text-lg uppercase tracking-widest animate-pulse">Limited Time Offer</span>
            <h2 className="text-5xl md:text-6xl font-black mb-2 leading-tight">
              50% Discount <br />
              <span className="font-light text-slate-300">For First 50 Students</span>
            </h2>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
              Transform your career with our industry-leading courses. Mentorship from experts included.
            </p>
            <div className="pt-8">
              <Link
                to="/contact"
                className="btn bg-white text-primary hover:bg-warning hover:text-primary border-0 rounded-full px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-warning/50 transform hover:-translate-y-1 transition-all duration-300 inline-block"
              >
                Claim Your Spot
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
