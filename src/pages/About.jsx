import React from 'react';
import { Target, Eye, Shield, Rocket, Lightbulb, Users, Heart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const About = () => {
  const coreValues = [
    { icon: Shield, title: "Integrity", desc: "We believe in transparency and honesty in every interaction with our students." },
    { icon: Award, title: "Excellence", desc: "We strive for the highest quality in our curriculum and teaching methodologies." },
    { icon: Lightbulb, title: "Innovation", desc: "Staying ahead of tech trends to ensure our students learn future-ready skills." },
    { icon: Heart, title: "Student-Centric", desc: "Your success is our primary goal. We mentor you until you reach your potential." }
  ];

  return (
    <div className="bg-slate-50">
      <PageBanner
        title="About Magic Era"
        subtitle="Empowering the next generation of tech leaders through industry-aligned training."
        bgImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <span className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-3 block">Our Story</span>
              <h2 className="text-4xl lg:text-5xl font-black text-primary mb-8 leading-tight">
                A Legacy of <span className="text-accent">Practical Excellence</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 text-justify italic border-l-4 border-warning pl-6">
                Magic Era Technologies Training Division is a leading provider in IT Training, Career Counselling, and placement services. We specialize in the design and development of websites, software applications, and mobile solutions.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 text-justify">
                Our team of expert professionals works on the latest software tools and technologies to provide students with &quot;hands-on&quot; knowledge and experience. We don&apos;t just teach code; we build careers.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="text-3xl font-black text-primary mb-1">10+</div>
                  <div className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Years Exp</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="text-3xl font-black text-accent mb-1">5K+</div>
                  <div className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Students</div>
                </div>
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Students Learning"
                  className="rounded-[2.5rem] shadow-2xl w-full h-[450px] object-cover transform translate-y-8 hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Collaborative Space"
                  className="rounded-[2.5rem] shadow-2xl w-full h-[450px] object-cover transform -translate-y-8 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-xl border border-slate-100 group hover:shadow-2xl transition-all duration-500" data-aos="fade-up">
              <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Target size={40} />
              </div>
              <h3 className="text-3xl font-black text-primary mb-6">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To provide world-class, accessible IT education that bridge the gap between academic theory and industry reality, empowering students to build meaningful careers in technology.
              </p>
            </div>

            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-xl border border-slate-100 group hover:shadow-2xl transition-all duration-500" data-aos="fade-up" data-aos-delay="200">
              <div className="w-20 h-20 bg-accent/5 rounded-3xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <Eye size={40} />
              </div>
              <h3 className="text-3xl font-black text-primary mb-6">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To be the world&apos;s most trusted partner for career transformation, recognized for creating the next generation of innovators who shape the future of the digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-warning font-bold text-sm uppercase tracking-widest mb-3 block">What Drives Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Our Core Values</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((v, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 hover:border-accent/40 hover:bg-white/10 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <v.icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3">{v.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-accent overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <Rocket size={48} className="mx-auto text-warning animate-bounce-slow" />
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight">
              Ready to Transform <br /> Your Future?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 font-light">
              Join 5,000+ graduates already working in top tech companies.
            </p>
            <div className="pt-6 sm:pt-8 px-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-warning text-primary px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-black shadow-[0_20px_50px_rgba(234,179,8,0.3)] hover:shadow-warning/60 transform hover:-translate-y-2 transition-all duration-500 w-full sm:w-auto justify-center"
              >
                Start Your Journey Now <Rocket size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
