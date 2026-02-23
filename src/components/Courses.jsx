import React, { useState, useMemo, useCallback } from 'react';
import { Clock, Star, ArrowRight, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const courseData = [
  { id: 1, title: "Advance Full Stack Web Development", duration: "8 to 10 Months", image: "https://www.logicera.co.in/assets/img/courses/ad_full_stack.png", color: "bg-emerald-500", link: "/ad-full-stack", category: "Development" },
  { id: 2, title: "Full Stack Web Development", duration: "6 to 8 Months", image: "https://www.logicera.co.in/assets/img/courses/full_stack.png", color: "bg-blue-500", link: "/full-stack", category: "Development" },
  { id: 3, title: "Graphic Designing", duration: "4 to 6 Months", image: "https://www.logicera.co.in/assets/img/courses/graphics.jpeg", color: "bg-indigo-500", link: "/graphics", category: "Design" },
  { id: 4, title: "Web Design", duration: "4 to 5 Months", image: "https://www.logicera.co.in/assets/img/courses/Web_design_.jpeg", color: "bg-rose-500", link: "/web-design", category: "Design" },
  { id: 5, title: "Digital Marketing", duration: "4 Months", image: "https://www.logicera.co.in/assets/img/courses/digital-marketing.jpeg", color: "bg-purple-500", link: "/digital-marketing", category: "Marketing" },
  { id: 6, title: "Python", duration: "2 Months", image: "https://www.logicera.co.in/assets/img/courses/python.png", color: "bg-amber-500", link: "/python", category: "Programming" },
  { id: 7, title: "Tally Prime with GST", duration: "2-3 Months", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", color: "bg-teal-500", link: "/tally", category: "Accounting" },
  { id: 8, title: "Course on Computer Concepts (CCC)", duration: "3 Months", image: "https://images.unsplash.com/photo-1517430816045-df4b7de8db98?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", color: "bg-cyan-500", link: "/ccc", category: "Certification" },
  { id: 9, title: "Internet of Things (IoT)", duration: "3-4 Months", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", color: "bg-sky-500", link: "/iot", category: "Technology" },
];

const CourseCard = ({ course }) => {
  return (
    <Link
      to={course.link}
      className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(6,81,237,0.15)] hover:-translate-y-2 transition-all duration-500 border border-slate-100 flex flex-col h-full animate-fade-in-up focus:outline-none focus:ring-4 focus:ring-accent/20"
      aria-label={`View details for ${course.title}`}
    >
      {/* Image Container */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
        <span className={`absolute top-5 left-5 z-10 ${course.color} text-white text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-full shadow-lg backdrop-blur-sm`}>
          {course.category}
        </span>
        <img
          src={course.image}
          alt={`${course.title} thumbnail`}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/5 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow bg-white relative">
        <div className="absolute top-0 right-8 -translate-y-1/2 w-14 h-14 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 border border-slate-50 z-10 group-hover:-translate-y-2/3">
          <ArrowRight strokeWidth={2.5} size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" aria-hidden="true" />
        </div>

        <div className="flex items-center gap-5 text-xs font-semibold text-slate-500 mb-5 border-b border-slate-100/60 pb-5 pt-2">
          <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full">
            <Clock strokeWidth={2.5} size={14} className="text-amber-500" aria-hidden="true" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full">
            <Star strokeWidth={2.5} size={14} className="text-amber-500 fill-amber-500" aria-hidden="true" />
            <span>4.9</span>
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-accent transition-colors leading-tight">
          {course.title}
        </h3>

        <div className="mt-auto pt-2 flex items-center">
          <span className="font-semibold text-sm text-slate-600 group-hover:text-accent flex items-center gap-2 transition-colors duration-300">
            View Program Details
          </span>
        </div>
      </div>
    </Link>
  );
};

const EmptyState = ({ onClear }) => (
  <div className="flex flex-col items-center justify-center py-20 px-4 text-center animate-fade-in-up bg-white rounded-3xl border border-slate-100 shadow-sm max-w-2xl mx-auto">
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-50 text-slate-400 mb-5 ring-1 ring-slate-100/50">
      <Filter strokeWidth={1.5} size={32} aria-hidden="true" />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-3">No matching courses</h3>
    <p className="text-slate-500 max-w-md mb-8 leading-relaxed">
      We couldn't find any courses that match your current search and filter criteria. Try browsing all available programs.
    </p>
    <button
      onClick={onClear}
      className="text-white bg-accent hover:bg-accent/90 focus:ring-4 focus:ring-accent/20 font-semibold rounded-xl px-7 py-3.5 transition-all shadow-[0_8px_20px_-6px_var(--tw-shadow-color)] shadow-accent/30 active:scale-[0.98]"
      aria-label="Clear all active filters"
    >
      Clear All Filters
    </button>
  </div>
);

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <div className="relative w-full max-w-md lg:ml-auto">
    <label htmlFor="course-search" className="sr-only">Search courses</label>
    <div className="relative group">
      <input
        id="course-search"
        type="search"
        placeholder="Discover programs e.g. 'Python'..."
        className="w-full pl-14 pr-6 py-4 rounded-full border border-slate-200/80 focus:border-accent focus:ring-[4px] focus:ring-accent/10 outline-none transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)] font-medium text-slate-700 bg-white/80 backdrop-blur-xl placeholder:text-slate-400 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-focus-within:bg-accent group-focus-within:text-white transition-all duration-300 pointer-events-none">
        <Search strokeWidth={2.5} size={16} aria-hidden="true" />
      </div>
    </div>
  </div>
);

const HeaderContent = () => (
  <div className="max-w-xl text-center lg:text-left flex-shrink-0 relative z-10">
    <span className="inline-flex items-center gap-2 text-accent font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-6 bg-white shadow-sm px-5 py-2.5 rounded-full border border-slate-100">
      <span className="relative flex h-2 w-2 mr-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
      </span>
      Pick Your Path
    </span>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
      Explore Our{' '}
      <br className="hidden md:block" />
      <span className="relative inline-block">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent to-indigo-600">
          Featured
        </span>
        <svg
          className="absolute -bottom-2 left-0 w-full h-4 text-accent/20 -z-10"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
        </svg>
      </span>{' '}
      Courses
    </h2>
    <p className="text-slate-500 text-lg max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
      Elevate your skills with our industry-tailored programs designed for the modern professional. Join thousands of successful alumni.
    </p>
  </div>
);

const CategoryFilter = ({ categories, currentFilter, setFilter }) => (
  <div className="relative -mx-4 sm:mx-0 mb-10">
    <div className="absolute left-0 top-0 bottom-6 w-6 bg-gradient-to-r from-slate-50 to-transparent z-10 sm:hidden pointer-events-none" />
    <div
      className="flex overflow-x-auto gap-3 pb-6 px-4 sm:px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory scroll-smooth"
      role="tablist"
      aria-label="Filter courses by category"
    >
      {categories.map((category) => {
        const isSelected = currentFilter === category;
        return (
          <button
            key={category}
            role="tab"
            aria-selected={isSelected}
            onClick={() => setFilter(category)}
            className={`whitespace-nowrap rounded-full px-7 py-3 text-sm font-bold transition-all duration-300 snap-center focus:outline-none focus:ring-4 focus:ring-accent/20 ${isSelected
              ? 'bg-slate-900 text-white shadow-[0_8px_20px_-6px_rgba(15,23,42,0.6)] scale-105'
              : 'bg-white text-slate-600 border border-slate-200/60 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50 hover:shadow-sm active:scale-95'
              }`}
          >
            {category}
          </button>
        )
      })}
    </div>
    <div className="absolute right-0 top-0 bottom-6 w-12 bg-gradient-to-l from-slate-50 to-transparent z-10 sm:hidden pointer-events-none" />
  </div>
);

const Courses = () => {
  const [filter, setFilter] = useState('All Courses');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => ['All Courses', ...new Set(courseData.map(c => c.category))], []);

  const filteredCourses = useMemo(() => {
    return courseData.filter((course) => {
      const matchesCategory = filter === 'All Courses' || course.category === filter;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase().trim());
      return matchesCategory && matchesSearch;
    });
  }, [filter, searchQuery]);

  const handleClearFilters = useCallback(() => {
    setFilter('All Courses');
    setSearchQuery('');
  }, []);

  return (
    <section id="courses" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden selection:bg-accent/20 selection:text-accent z-0">
      {/* Premium background mesh/glow */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none -z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-gradient-to-b from-accent/5 to-transparent rounded-full blur-[100px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-gradient-to-t from-indigo-500/5 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[85rem] relative z-10">

        {/* Header Section */}
        <header className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 lg:mb-16 gap-10">
          <HeaderContent />
          <div className="w-full lg:w-auto flex flex-col justify-end">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
        </header>

        {/* Filters */}
        <CategoryFilter
          categories={categories}
          currentFilter={filter}
          setFilter={setFilter}
        />

        {/* Course Grid */}
        <div className="min-h-[400px]">
          {filteredCourses.length > 0 ? (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              role="list"
              aria-label="Available courses"
            >
              {filteredCourses.map((course) => (
                <div role="listitem" key={course.id} className="h-full">
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          ) : (
            <EmptyState onClear={handleClearFilters} />
          )}
        </div>

      </div>
    </section>
  );
};

export default Courses;
