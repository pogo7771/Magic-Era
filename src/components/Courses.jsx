import React, { useState, useMemo } from 'react';
import { Clock, Star, ArrowRight, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [filter, setFilter] = useState('All Courses');
  const [searchQuery, setSearchQuery] = useState('');

  const courseData = [
    { id: 1, title: "Advance Full Stack Web Development", duration: "8 to 10 Months", image: "https://www.logicera.co.in/assets/img/courses/ad_full_stack.png", color: "bg-green-600", link: "/ad-full-stack", category: "Development" },
    { id: 2, title: "Full Stack Web Development", duration: "6 to 8 Months", image: "https://www.logicera.co.in/assets/img/courses/full_stack.png", color: "bg-accent", link: "/full-stack", category: "Development" },
    { id: 3, title: "Graphic Designing", duration: "4 to 6 Months", image: "https://www.logicera.co.in/assets/img/courses/graphics.jpeg", color: "bg-blue-600", link: "/graphics", category: "Design" },
    { id: 4, title: "Web Design", duration: "4 to 5 Months", image: "https://www.logicera.co.in/assets/img/courses/Web_design_.jpeg", color: "bg-lime-600", link: "/web-design", category: "Design" },
    { id: 5, title: "Digital Marketing", duration: "4 Months", image: "https://www.logicera.co.in/assets/img/courses/digital-marketing.jpeg", color: "bg-purple-600", link: "/digital-marketing", category: "Marketing" },
    { id: 6, title: "Python", duration: "2 Months", image: "https://www.logicera.co.in/assets/img/courses/python.png", color: "bg-yellow-600", link: "/python", category: "Programming" },
    { id: 7, title: "Tally Prime with GST", duration: "2-3 Months", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", color: "bg-teal-600", link: "/tally", category: "Accounting" },
    { id: 8, title: "Course on Computer Concepts (CCC)", duration: "3 Months", image: "https://images.unsplash.com/photo-1517430816045-df4b7de8db98?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", color: "bg-indigo-600", link: "/ccc", category: "Certification" },
    { id: 9, title: "Internet of Things (IoT)", duration: "3-4 Months", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", color: "bg-cyan-600", link: "/iot", category: "Technology" },
  ];

  const categories = ['All Courses', ...new Set(courseData.map(c => c.category))];

  const filteredCourses = useMemo(() => {
    return courseData.filter(course => {
      const matchesCategory = filter === 'All Courses' || course.category === filter;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [filter, searchQuery]);

  return (
    <section id="courses" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section with Search and Filter */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-xl w-full">
            <span className="text-accent font-bold text-sm uppercase tracking-widest mb-2 block">Popular Courses</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
              Our <span className="text-accent relative px-1">Featured
                <svg className="absolute bottom-1 left-0 w-full h-2 text-warning/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" /></svg>
              </span> Courses
            </h2>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search for a course..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition-all shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 p-1 bg-white rounded-xl border border-slate-200 shadow-sm overflow-x-auto max-w-full pb-2 lg:pb-1 scrollbar-hide">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${filter === cat ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:text-primary hover:bg-slate-50'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Link to={course.link} key={course.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col h-full animate-fade-in-up md:block block">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <span className={`absolute top-4 left-4 z-10 ${course.color} text-white text-xs font-bold uppercase tracking-wide py-1 px-3 rounded-full shadow-lg`}>
                    {course.category}
                  </span>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 border-b border-slate-50 pb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-warning" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-warning fill-warning" />
                      <span>4.9 (120)</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                    {course.title}
                  </h3>

                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className="font-semibold text-sm text-slate-600 group-hover:text-primary flex items-center gap-2 transition-colors">
                      View Details <ArrowRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    </span>
                    <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                      <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 text-slate-400 mb-4">
              <Filter size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">No courses found</h3>
            <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
            <button
              onClick={() => { setFilter('All Courses'); setSearchQuery(''); }}
              className="mt-4 text-accent font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
