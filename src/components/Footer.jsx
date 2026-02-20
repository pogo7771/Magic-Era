import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const socialLinks = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: MessageCircle, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Instagram, href: "#" }
  ];

  const resources = [
    { name: "About", to: "/about" },
    { name: "Training", to: "/courses" },
    { name: "Career", to: "/career" },
    { name: "Gallery", to: "/portfolio" },
    { name: "Contact", to: "/contact" }
  ];

  const courses = [
    { name: "Full Stack Web", to: "/ad-full-stack" },
    { name: "Graphics", to: "/graphics" },
    { name: "Digital Marketing", to: "/digital-marketing" },
    { name: "Java", to: "/java" },
    { name: "React", to: "/react" }
  ];

  return (
    <footer className="bg-dark text-slate-300 pt-20 mt-auto border-t-4 border-warning">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="inline-block bg-white/10 p-3 rounded-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-shadow duration-300 backdrop-blur-sm border border-white/10">
              <Logo className="text-white" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Magic Era Technologies Training Division a leading provider in IT Training, Career Counselling, and placement services.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-warning hover:text-primary transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-l-4 border-accent pl-3">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-sm hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-l-4 border-accent pl-3">Top Courses</h4>
            <ul className="space-y-3">
              {courses.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-sm hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-l-4 border-accent pl-3">Contact Us</h4>

            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 mb-6 backdrop-blur-sm">
              <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                <span>Mon - Sat</span>
                <span className="text-warning">Open</span>
              </div>
              <div className="text-white font-bold text-sm">9:00 AM - 8:00 PM</div>
            </div>

            <ul className="space-y-6">
              <li className="flex gap-4 items-start group">
                <MapPin size={24} className="text-accent flex-shrink-0 group-hover:animate-bounce" />
                <a href="https://maps.app.goo.gl/y3unc5YnaH6i9kFp7" target="_blank" className="text-sm leading-snug hover:text-white transition-colors">
                  1A MINI LIG MAHABALIPURAM , KALYANPUR KANPUR - 208017
                </a>
              </li>
              <li className="flex gap-4 items-center group">
                <Phone size={24} className="text-accent flex-shrink-0 group-hover:rotate-12 transition-transform" />
                <a href="tel:+918299727078" className="text-sm hover:text-white transition-colors font-semibold tracking-wide">+91 8299727078</a>
              </li>
              <li className="flex gap-4 items-center group">
                <Mail size={24} className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@magicera.co.in" className="text-sm hover:text-white transition-colors">info@magicera.co.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800 bg-black/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© 2024 - 2025 <span className="text-slate-300 font-semibold">Magic Era</span>. All Rights Reserved.</p>
            <p className="text-center md:text-right">1A Mini Lig Mahabalipuram | 1071 'B' Block Panki Bhatia Tiraha</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
