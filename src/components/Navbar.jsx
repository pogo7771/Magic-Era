import React, { useState } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const courseLinks = [
    { name: "Advance Full Stack Web Development", to: "/ad-full-stack" },
    { name: "Data Analytics With Tableau And Power Bi", to: "/data-analytics" },
    { name: "Full Stack Web Development", to: "/full-stack" },
    { name: "Graphic Designing", to: "/graphics" },
    { name: "Web Design", to: "/web-design" },
    { name: "Digital Marketing", to: "/digital-marketing" },
    { name: "Tally", to: "/tally" },
    { name: "Python", to: "/python" },
    { name: "Django", to: "/django" },
    { name: "Java", to: "/java" },
    { name: "React JS", to: "/react" },
    { name: "Angular JS", to: "/angularjs" },
    { name: "Internet Of Things (IOT)", to: "/iot" },
    { name: "Advance Excel", to: "/advance-excel" },
    { name: "O Level", to: "/olevel" },
    { name: "CCC", to: "/ccc" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <Logo className="text-primary" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link to="/" className="text-slate-700 hover:text-warning font-medium uppercase text-sm tracking-wide transition-colors">Home</Link>
            <Link to="/about" className="text-slate-700 hover:text-warning font-medium uppercase text-sm tracking-wide transition-colors">About Us</Link>

            <div className="relative group">
              <button className="flex items-center gap-1 text-slate-700 hover:text-warning font-medium uppercase text-sm tracking-wide transition-colors focus:outline-none">
                Courses <ChevronDown size={14} />
              </button>
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50 overflow-hidden">
                <div className="py-2">
                  {courseLinks.map((course, i) => (
                    <Link
                      key={i}
                      to={course.to}
                      className="block px-6 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-warning transition-colors border-b border-slate-50 last:border-0"
                    >
                      {course.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/portfolio" className="text-slate-700 hover:text-warning font-medium uppercase text-sm tracking-wide transition-colors">Portfolio</Link>
            <Link to="/career" className="text-slate-700 hover:text-warning font-medium uppercase text-sm tracking-wide transition-colors">Career</Link>
            <Link to="/contact" className="btn btn-sm btn-primary shadow-lg hover:shadow-primary/50">Contact Us</Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-warning focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`} style={{ top: '5rem' }}>
        <div className="h-full overflow-y-auto px-6 py-8 pb-32 space-y-6">
          <div className="space-y-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-2xl text-lg font-bold text-slate-800 hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-2xl text-lg font-bold text-slate-800 hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">About Us</Link>

            <div className="space-y-2">
              <button
                onClick={toggleDropdown}
                className={`flex w-full items-center justify-between px-4 py-3 rounded-2xl text-lg font-bold transition-all border ${dropdownOpen ? 'bg-slate-50 border-slate-100 text-accent' : 'text-slate-800 border-transparent'}`}
              >
                <span>Explores Courses</span>
                <ChevronDown size={20} className={`transform transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="grid grid-cols-1 gap-2 mt-2 pl-2">
                  {courseLinks.map((course, i) => (
                    <Link
                      key={i}
                      to={course.to}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:text-accent hover:bg-accent/5 transition-all"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-accent"></div>
                      {course.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/portfolio" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-2xl text-lg font-bold text-slate-800 hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">Portfolio</Link>
            <Link to="/career" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-2xl text-lg font-bold text-slate-800 hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">Career</Link>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-primary text-white font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
              Contact Us <Phone size={20} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
