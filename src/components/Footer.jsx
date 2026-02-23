import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const socialLinks = [
    { Icon: Facebook, href: "#", color: "hover:bg-blue-600" },
    { Icon: Twitter, href: "#", color: "hover:bg-sky-500" },
    { Icon: Instagram, href: "#", color: "hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600" },
    { Icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
    { Icon: MessageCircle, href: "#", color: "hover:bg-green-500" }
  ];

  const resources = [
    { name: "About Us", to: "/about" },
    { name: "Programs", to: "/courses" },
    { name: "Join Team", to: "/career" },
    { name: "Gallery", to: "/portfolio" },
    { name: "Support", to: "/contact" }
  ];

  const courses = [
    { name: "Full Stack Mastery", to: "/ad-full-stack" },
    { name: "Creative Design", to: "/graphics" },
    { name: "Growth Marketing", to: "/digital-marketing" },
    { name: "Cloud Engineering", to: "/java" },
    { name: "Modern Frameworks", to: "/react" }
  ];

  return (
    <footer className="relative bg-slate-950 pt-24 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 pb-20">

          {/* Brand Vision */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="inline-block group">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-xl group-hover:border-accent/30 transition-all duration-500">
                <Logo className="text-white" />
              </div>
            </Link>
            <p className="text-slate-400 font-medium leading-relaxed max-w-sm">
              Empowering the next generation of tech leaders through industry-aligned training,
              personalized mentorship, and premium placement ecosystems.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, color }, i) => (
                <a
                  key={i}
                  href={href}
                  className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 text-slate-400 transition-all duration-300 border border-white/5 hover:text-white hover:-translate-y-2 hover:shadow-2xl ${color}`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Navigation</h4>
            <ul className="space-y-4">
              {resources.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-slate-500 hover:text-accent font-bold text-sm transition-all flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Bootcamps</h4>
            <ul className="space-y-4">
              {courses.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-slate-500 hover:text-accent font-bold text-sm transition-all flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Availability */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Global HQ</h4>

            <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Location</p>
                  <a href="https://maps.app.goo.gl/y3unc5YnaH6i9kFp7" target="_blank" rel="noreferrer" className="text-white font-bold text-sm hover:text-accent transition-colors">
                    Mahabalipuram, Kalyanpur, Kanpur
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary-light">
                  <Phone size={24} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Hotline</p>
                  <a href="tel:+918299727078" className="text-white font-bold text-lg hover:text-accent transition-colors">+91 8299727078</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:info@magicera.co.in" className="text-white font-bold text-sm hover:text-accent transition-colors">info@magicera.co.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[11px] font-black text-green-500 uppercase tracking-widest">Network Secure</span>
              </div>
              <p className="text-slate-500 text-[10px] sm:text-xs font-bold font-mono">
                © {new Date().getFullYear()} MAGIC ERA TECHNOLOGIES. ALL RIGHTS RESERVED.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
              <Link to="/career" className="text-slate-600 hover:text-white text-[11px] font-black uppercase tracking-widest transition-colors">Legal</Link>
              <Link to="/portfolio" className="text-slate-600 hover:text-white text-[11px] font-black uppercase tracking-widest transition-colors">Sitemap</Link>
              <div className="flex items-center gap-2 text-slate-700 font-bold text-[11px] uppercase tracking-widest">
                <ShieldCheck size={16} /> ISO 9001:2015 CERTIFIED
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
