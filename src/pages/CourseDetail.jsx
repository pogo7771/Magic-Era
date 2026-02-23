import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useToast } from '../context/useToast';
import {
  CheckCircle, Clock, Calendar, Award, BookOpen,
  ArrowRight, Star, ChevronDown, MonitorPlay,
  Users, Briefcase, Download, Phone
} from 'lucide-react';

const CourseDetail = () => {
  const { pathname } = useLocation();

  // --- MOCK DATABASE ---
  const coursesDB = {
    '/ad-full-stack': {
      title: "Advance Full Stack Web Development",
      subtitle: "Master MERN Stack & Cloud Computing",
      category: "Development",
      rating: 4.9,
      students: 1540,
      duration: "8-10 Months",
      lectures: "180+",
      projects: "15+ Live Projects",
      level: "Beginner to Advanced",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      overview: "Our Advanced Full Stack Web Development course is designed to transform you into a complete software engineer. You'll master both frontend and backend technologies, including React, Node.js, Express, MongoDB, and cloud deployment with AWS.",
      curriculum: [
        { title: "Frontend Fundamentals", topics: ["HTML5 Semantic Structure", "CSS3 & Flexbox/Grid", "JavaScript ES6+", "Responsive Design"] },
        { title: "React & Redux", topics: ["Components & Props", "Hooks (useState, useEffect)", "Redux Toolkit", "Context API"] },
        { title: "Backend Mastery", topics: ["Node.js Architecture", "Express Framework", "RESTful APIs", "Authentication (JWT)"] },
        { title: "Database & Cloud", topics: ["MongoDB & Mongoose", "SQL Basics", "AWS Deployment", "CI/CD Pipelines"] }
      ]
    },
    '/full-stack': {
      title: "Full Stack Web Development",
      subtitle: "Become a MERN Stack Developer",
      category: "Development",
      rating: 4.8,
      students: 1200,
      duration: "6-8 Months",
      lectures: "140+",
      projects: "10+ Live Projects",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      overview: "Accelerate your career with our Full Stack Web Development program. Focus on the core MERN stack technologies to build dynamic, data-driven web applications from scratch.",
      curriculum: [
        { title: "Web Basics", topics: ["HTML & CSS", "JavaScript Essentials", "Bootstrap/Tailwind"] },
        { title: "Frontend Frameworks", topics: ["React JS Basics", "Single Page Applications", "API Consumption"] },
        { title: "Backend Development", topics: ["Node.js Introduction", "Express Routing", "Database Connectivity"] }
      ]
    },
    '/data-analytics': {
      title: "Data Analytics With Tableau & Power BI",
      subtitle: "Turn Data into Actionable Insights",
      category: "Data Science",
      rating: 4.9,
      students: 850,
      duration: "5-6 Months",
      lectures: "100+",
      projects: "8+ Case Studies",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      overview: "Learn to visualize and analyze data effectively. This course covers Excel, SQL, Tableau, and Power BI to help you make data-driven decisions.",
      curriculum: [
        { title: "Data Fundamentals", topics: ["Excel for Analytics", "SQL Queries", "Data Cleaning"] },
        { title: "Visualization Tools", topics: ["Tableau Dashboarding", "Power BI Reports", "Data Storytelling"] },
      ]
    },
    '/graphics': {
      title: "Graphic Designing",
      subtitle: "Master Photoshop, Illustrator & CorelDraw",
      category: "Design",
      rating: 4.7,
      students: 900,
      duration: "4-6 Months",
      lectures: "80+",
      projects: "20+ Designs",
      level: "Creative",
      image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      overview: "Unleash your creativity with our Graphic Design course. Learn industry-standard tools to create stunning visuals, logos, branding materials, and social media graphics.",
      curriculum: [
        { title: "Design Theory", topics: ["Color Theory", "Typography", "Layout & Composition"] },
        { title: "Adobe Suite", topics: ["Photoshop Editing", "Illustrator Vector Art", "InDesign Layouts"] },
      ]
    },
    '/web-design': {
      title: "Web Design",
      subtitle: "Create Beautiful & Responsive Websites",
      category: "Design",
      rating: 4.7,
      students: 1100,
      duration: "4-5 Months",
      lectures: "90+",
      projects: "12+ Live Projects",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      overview: "Focus on the visual and interactive aspects of the web. Learn HTML, CSS, JavaScript, and modern UI/UX principles to design stunning websites that users love.",
      curriculum: [
        { title: "Web Foundations", topics: ["HTML5 Structure", "CSS3 Styling", "Responsive Layouts"] },
        { title: "Interactive Design", topics: ["JavaScript Basics", "DOM Manipulation", "Animations"] },
        { title: "UI/UX Concepts", topics: ["Wireframing", "Prototyping", "User Research"] }
      ]
    },
    '/digital-marketing': {
      title: "Digital Marketing",
      subtitle: "Master SEO, SMM & Content Marketing",
      category: "Marketing",
      rating: 4.8,
      students: 1800,
      duration: "3-4 Months",
      lectures: "80+",
      projects: "10+ Campaigns",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      overview: "Become a digital marketing expert. Learn to drive traffic, increase conversions, and build brands using SEO, Social Media Marketing, Email Marketing, and Google Ads.",
      curriculum: [
        { title: "SEO Mastery", topics: ["Keyword Research", "On-Page SEO", "Off-Page SEO"] },
        { title: "Social Media", topics: ["Facebook Ads", "Instagram Growth", "LinkedIn Marketing"] },
        { title: "Content Strategy", topics: ["Blogging", "Copywriting", "Email Automation"] }
      ]
    },
    '/python': {
      title: "Python Programming",
      subtitle: "Learn Python from Scratch to Advanced",
      category: "Programming",
      rating: 4.9,
      students: 2200,
      duration: "2-3 Months",
      lectures: "60+",
      projects: "8+ Projects",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      overview: "Python is the world's most popular programming language. Learn it to build web apps, analyze data, automate tasks, and even create AI models.",
      curriculum: [
        { title: "Python Basics", topics: ["Variables & Types", "Control Flow", "Functions"] },
        { title: "Data Structures", topics: ["Lists & Tuples", "Dictionaries", "Sets"] },
        { title: "Advanced Python", topics: ["OOP Concepts", "File Handling", "Modules & Libraries"] }
      ]
    },
    '/django': {
      title: "Django Framework",
      subtitle: "Build Robust Web Apps with Python",
      category: "Development",
      rating: 4.7,
      students: 600,
      duration: "2-3 Months",
      lectures: "50+",
      projects: "5+ Live Projects",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      overview: "Learn Django, the high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development.",
      curriculum: [
        { title: "Django Basics", topics: ["MVT Architecture", "URL Routing", "Views & Templates"] },
        { title: "Models & Databases", topics: ["ORM", "Migrations", "Admin Panel"] },
        { title: "Advanced Features", topics: ["Authentication", "REST Framework", "Deployment"] }
      ]
    },
    '/java': {
      title: "Core & Advanced Java",
      subtitle: "Master the Language of Enterprise",
      category: "Programming",
      rating: 4.8,
      students: 1500,
      duration: "4-5 Months",
      lectures: "100+",
      projects: "8+ Projects",
      level: "All Levels",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      overview: "Java is the backbone of many large-scale applications. This course covers everything from Core Java (OOPs, Collections) to Advanced Java (JDBC, Servlets, JSP) and frameworks like Spring.",
      curriculum: [
        { title: "Core Java", topics: ["OOP Principles", "Exception Handling", "Multithreading"] },
        { title: "Advanced Java", topics: ["JDBC", "Servlets & JSP", "Spring Boot Basics"] },
        { title: "Project", topics: ["Building an Enterprise App", "Database Integration"] }
      ]
    },
    '/react': {
      title: "React JS",
      subtitle: "Build Modern User Interfaces",
      category: "Development",
      rating: 4.9,
      students: 1300,
      duration: "2-3 Months",
      lectures: "60+",
      projects: "10+ Projects",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      overview: "Master React.js, the most popular frontend library. Learn component-based architecture, hooks, state management with Redux, and how to build single-page applications.",
      curriculum: [
        { title: "React Fundamentals", topics: ["JSX", "Components & Props", "State & Lifecycle"] },
        { title: "Advanced React", topics: ["Hooks", "Context API", "React Router"] },
        { title: "State Management", topics: ["Redux Toolkit", "Async Logic", "Performance Optimization"] }
      ]
    },
    '/angularjs': {
      title: "Angular JS",
      subtitle: "Build Scalable Web Apps with Google's Framework",
      category: "Development",
      rating: 4.6,
      students: 800,
      duration: "3-4 Months",
      lectures: "70+",
      projects: "Enterprise Apps",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      overview: "Learn AngularJS and Angular (2+). Understand TypeScript, Components, Dependency Injection, and how to build large-scale, enterprise-ready applications.",
      curriculum: [
        { title: "Angular Basics", topics: ["TypeScript Intro", "Components", "Templates"] },
        { title: "Core Features", topics: ["Directives", "Pipes", "Services & DI"] },
        { title: "Advanced", topics: ["Routing", "Forms", "Observables (RxJS)"] }
      ]
    },
    '/iot': {
      title: "Internet of Things (IoT)",
      subtitle: "Connect Devices to the Internet",
      category: "Technology",
      rating: 4.7,
      students: 400,
      duration: "3-4 Months",
      lectures: "50+",
      projects: "Smart Home",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      overview: "Dive into the world of IoT. Learn to program microcontrollers like Arduino and ESP8266, interface sensors, and communicate with the cloud.",
      curriculum: [
        { title: "Electronics", topics: ["Sensors", "Actuators", "Circuit Basics"] },
        { title: "Microcontrollers", topics: ["Arduino", "Raspberry Pi", "ESP8266"] },
        { title: "Cloud & App", topics: ["MQTT", "Blynk App", "Data Visualization"] }
      ]
    },
    '/tally': {
      title: "Tally Prime with GST",
      subtitle: "Accounting & Inventory Management",
      category: "Accounting",
      rating: 4.8,
      students: 2000,
      duration: "2-3 Months",
      lectures: "60+",
      projects: "Real Accounts",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      overview: "Master Tally Prime software for accounting, inventory, payroll, and GST compliance. Essential for commerce students and accounting professionals.",
      curriculum: [
        { title: "Accounting Principles", topics: ["Golden Rules", "Journal Entries", "Ledger"] },
        { title: "Tally Prime", topics: ["Company Setup", "Vouchers", "Reports"] },
        { title: "Taxation", topics: ["GST Concepts", "TDS/TCS", "E-Filing"] }
      ]
    },
    '/ccc': {
      title: "Course on Computer Concepts (CCC)",
      subtitle: "Government Certified Computer Course",
      category: "Certification",
      rating: 4.6,
      students: 3000,
      duration: "3 Months",
      lectures: "40+",
      projects: "Practical Exams",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de8db98?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      overview: "This course is designed to aim at imparting a basic level IT Literacy programme for the common man. It is a mandatory qualification for many government jobs in India.",
      curriculum: [
        { title: "Computer Basics", topics: ["Hardware & Software", "Operating Systems", "File Management"] },
        { title: "Office Tools", topics: ["Word Processing", "Spreadsheets", "Presentations"] },
        { title: "Internet services", topics: ["Email & Social Media", "Digital Financial Services", "Cyber Security"] }
      ]
    },
    '/olevel': {
      title: "O Level (NIELIT)",
      subtitle: "Standard Course in Computer Applications",
      category: "Certification",
      rating: 4.7,
      students: 2000,
      duration: "1 Year",
      lectures: "200+",
      projects: "Live Projects",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      overview: "O Level course is essentially for equipping a student with necessary skills as well as IT knowledge comparable to the formal educational standards. It opens doors to various IT job roles.",
      curriculum: [
        { title: "IT Tools & Network Basics", topics: ["Computer Appreciation", "OS", "Internet Technology"] },
        { title: "Web Design & Publishing", topics: ["HTML", "CSS", "JavaScript Frameworks"] },
        { title: "Programming", topics: ["Python Programming", "IoT Basics"] }
      ]
    },
    '/advance-excel': {
      title: "Advanced Excel",
      subtitle: "Master Data Analysis with Excel",
      category: "Productivity",
      rating: 4.8,
      students: 2500,
      duration: "1-2 Months",
      lectures: "40+",
      projects: "15+ Case Studies",
      level: "Beginner to Advanced",
      image: "https://images.unsplash.com/photo-1543286386-713df548e9cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      overview: "Go beyond the basics. Learn complex formulas, pivot tables, macros, VBA, and data visualization techniques to become an Excel expert.",
      curriculum: [
        { title: "Excel Essentials", topics: ["Formatting", "Basic Formulas", "Sorting & Filtering"] },
        { title: "Advanced Functions", topics: ["VLOOKUP/XLOOKUP", "Pivot Tables", "Data Validation"] },
        { title: "Automation", topics: ["Macros Recording", "VBA Intro", "Dashboards"] }
      ]
    }
  };

  // Fallback for routes not explicitly detailed above but present in the app
  const defaultCourse = {
    title: "Professional Certification Course",
    subtitle: "Upgrade Your Skills with Industry Experts",
    category: "Certification",
    rating: 4.8,
    students: 500,
    duration: "3-6 Months",
    lectures: "60+",
    projects: "5+ Projects",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    overview: "This professional course is designed to provide you with in-depth knowledge and practical skills. Whether you are a beginner or looking to upgrade, our curriculum is tailored to meet industry standards.",
    curriculum: [
      { title: "Module 1: Fundamentals", topics: ["Introduction & Setup", "Core Concepts", "Best Practices"] },
      { title: "Module 2: Advanced Topics", topics: ["Deep Dive", "Real-world Applications", "Optimization"] },
      { title: "Module 3: Project Work", topics: ["Live Project", "Code Review", "Deployment"] }
    ]
  };

  const course = coursesDB[pathname] || { ...defaultCourse, title: pathname.replace('/', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) };

  const [activeTab, setActiveTab] = useState('Overview');
  const [openModule, setOpenModule] = useState(0);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const { addToast } = useToast();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Sticky nav handler could go here (simplified with CSS for now)

  const handleEnrollClick = () => {
    setShowEnrollModal(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* --- HERO SECTION --- */}
      <div className="relative bg-primary pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -mr-32 -mt-32 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-warning/5 rounded-full blur-[80px] -ml-20 -mb-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">

            {/* Text Content */}
            <div className="lg:w-3/5 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-warning text-xs font-bold uppercase tracking-widest border border-white/5">
                <Award size={14} />
                {course.category}
              </div>

              <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
                {course.title}
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light">
                {course.subtitle}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm font-medium text-slate-300 pt-2">
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                  <Star className="text-warning fill-warning" size={16} />
                  <span className="text-white">{course.rating} Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                  <Users className="text-accent" size={16} />
                  <span className="text-white">{course.students}+ Learners</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                  <Clock className="text-blue-400" size={16} />
                  <span className="text-white">{course.duration}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <button onClick={handleEnrollClick} className="btn btn-primary bg-accent hover:bg-rose-600 text-white shadow-lg shadow-accent/30 px-8 py-4 text-lg">
                  Enquiry Now
                </button>
                <button className="btn bg-white/10 text-white hover:bg-white/20 border-white/10 backdrop-blur-md px-8 py-4 text-lg flex items-center gap-2 justify-center">
                  <Download size={20} />
                  Download Brochure
                </button>
              </div>
            </div>

            {/* Hero Image (Floating Card) */}
            <div className="lg:w-2/5 relative perspective-1000 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 transform rotate-3 hover:rotate-0 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                      <MonitorPlay size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase">Format</p>
                      <p className="text-slate-800 font-bold">Online / Offline</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT COLUMN (Content) */}
          <div className="lg:col-span-2 space-y-8">

            {/* Course Navigation (Sticky) */}
            <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-100 flex overflow-x-auto no-scrollbar gap-2 sticky top-24 z-30">
              {['Overview', 'Curriculum', 'Instructor', 'Reviews', 'FAQ'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${activeTab === item ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:bg-slate-50 hover:text-primary'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Content Render Switch */}
            <div className="space-y-8 animate-fade-in-up">

              {/* OVERVIEW TAB */}
              {(activeTab === 'Overview') && (
                <>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                    <h3 className="text-2xl font-bold text-primary mb-6">Course Overview</h3>
                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                      {course.overview}
                    </p>

                    <h4 className="font-bold text-lg text-primary mb-4">What You Will Learn?</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {(course.curriculum[0]?.topics?.concat(course.curriculum[1]?.topics || []) || []).slice(0, 8).map((topic, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <CheckCircle className="text-accent shrink-0 mt-0.5" size={18} />
                          <span className="text-slate-700 font-medium text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Projects / Highlights (Visible in Overview) */}
                  <div className="bg-gradient-to-r from-primary to-slate-800 rounded-3xl p-8 text-white relative overflow-hidden">
                    <div className="relative z-10 grid sm:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Build Your Portfolio</h3>
                        <p className="text-slate-300 mb-6 text-sm">You won&apos;t just learn theory. You&apos;ll build real-world projects that get you hired.</p>
                        <button className="px-6 py-2.5 bg-white text-primary font-bold rounded-lg hover:bg-slate-100 transition-colors">
                          View Sample Projects
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center">
                          <h4 className="text-3xl font-bold text-warning mb-1">15+</h4>
                          <p className="text-xs text-slate-300 uppercase">Live Projects</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center">
                          <h4 className="text-3xl font-bold text-accent mb-1">100%</h4>
                          <p className="text-xs text-slate-300 uppercase">Placement Support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* CURRICULUM TAB */}
              {(activeTab === 'Curriculum' || activeTab === 'Overview') && (
                <div id="curriculum" className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                  <h3 className="text-2xl font-bold text-primary mb-6 flex justify-between items-center">
                    Course Curriculum
                    {activeTab === 'Overview' && <button onClick={() => setActiveTab('Curriculum')} className="text-sm text-accent font-semibold hover:underline">View All</button>}
                  </h3>
                  <div className="space-y-4">
                    {course.curriculum.map((module, i) => (
                      <div key={i} className={`border rounded-xl overflow-hidden transition-all duration-300 ${openModule === i ? 'border-accent/30 shadow-md' : 'border-slate-200'}`}>
                        <button
                          onClick={() => setOpenModule(openModule === i ? -1 : i)}
                          className={`w-full bg-slate-50 p-4 flex justify-between items-center cursor-pointer hover:bg-slate-100 transition-colors text-left focus:outline-none`}
                        >
                          <div className="flex items-center gap-4">
                            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${openModule === i ? 'bg-accent text-white' : 'bg-white border border-slate-200 text-slate-500'}`}>
                              {i + 1}
                            </span>
                            <h5 className={`font-bold transition-colors ${openModule === i ? 'text-primary' : 'text-slate-800'}`}>{module.title}</h5>
                          </div>
                          <ChevronDown size={20} className={`text-slate-400 transition-transform duration-300 ${openModule === i ? 'rotate-180 text-accent' : ''}`} />
                        </button>

                        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openModule === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="p-4 bg-white border-t border-slate-100">
                            <ul className="space-y-2">
                              {module.topics.map((topic, j) => (
                                <li key={j} className="flex items-center gap-3 text-sm text-slate-600 ml-12">
                                  <div className="w-1.5 h-1.5 rounded-full bg-accent/50"></div>
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* INSTRUCTOR TAB */}
              {activeTab === 'Instructor' && (
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                  <h3 className="text-2xl font-bold text-primary mb-6">Expert Instructor</h3>
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Instructor" className="w-24 h-24 rounded-full object-cover border-4 border-slate-50 shadow-md" />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Rahul Sharma</h4>
                      <p className="text-accent font-medium text-sm mb-3">Senior Software Engineer & Trainer</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        With over 10 years of industry experience, Rahul has trained 5000+ students. He specializes in Full Stack Development and Cloud Technologies. His teaching style primarily focuses on &quot;Learning by Doing&quot;.
                      </p>
                      <div className="flex gap-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-primary">4.9/5</span>
                          <span className="text-xs text-slate-500">Rating</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-primary">10+</span>
                          <span className="text-xs text-slate-500">Courses</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-primary">5000+</span>
                          <span className="text-xs text-slate-500">Students</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* REVIEWS TAB */}
              {activeTab === 'Reviews' && (
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-primary">Student Reviews</h3>
                    <div className="flex items-center gap-2">
                      <Star className="text-warning fill-warning" size={24} />
                      <span className="text-2xl font-bold text-slate-900">4.8</span>
                      <span className="text-slate-500 text-sm">(120 Reviews)</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[1, 2, 3].map((rev) => (
                      <div key={rev} className="border-b border-slate-50 pb-6 last:border-0 last:pb-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">S</div>
                            <div>
                              <h5 className="font-bold text-sm">Student Name</h5>
                              <div className="flex text-warning text-xs">
                                {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                              </div>
                            </div>
                          </div>
                          <span className="text-xs text-slate-400">2 days ago</span>
                        </div>
                        <p className="text-slate-600 text-sm italic">&quot;Great course content and support. The projects helped me understand the concepts very clearly.&quot;</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ TAB */}
              {activeTab === 'FAQ' && (
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                  <h3 className="text-2xl font-bold text-primary mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <details className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white transition-colors">
                      <summary className="font-bold p-4 cursor-pointer list-none flex justify-between items-center text-slate-800">
                        Do you provide placement assistance?
                        <ChevronDown className="group-open:rotate-180 transition-transform text-slate-400" size={20} />
                      </summary>
                      <div className="p-4 pt-0 text-slate-600 text-sm leading-relaxed border-t border-transparent group-open:border-slate-100">
                        Yes, we provide 100% placement assistance. We help you build your resume, prepare for mock interviews, and schedule interviews with our hiring partners.
                      </div>
                    </details>
                    <details className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white transition-colors">
                      <summary className="font-bold p-4 cursor-pointer list-none flex justify-between items-center text-slate-800">
                        Can I attend, if I am from a non-tech background?
                        <ChevronDown className="group-open:rotate-180 transition-transform text-slate-400" size={20} />
                      </summary>
                      <div className="p-4 pt-0 text-slate-600 text-sm leading-relaxed border-t border-transparent group-open:border-slate-100">
                        Absolutely! Our courses are designed from basics to advanced levels. We start from scratch, so no prior coding experience is required.
                      </div>
                    </details>
                    <details className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white transition-colors">
                      <summary className="font-bold p-4 cursor-pointer list-none flex justify-between items-center text-slate-800">
                        Do I get a certificate after completion?
                        <ChevronDown className="group-open:rotate-180 transition-transform text-slate-400" size={20} />
                      </summary>
                      <div className="p-4 pt-0 text-slate-600 text-sm leading-relaxed border-t border-transparent group-open:border-slate-100">
                        Yes, upon successful completion of the course and projects, you will receive an industry-recognized certification from Magic Era.
                      </div>
                    </details>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* RIGHT COLUMN (Sidebar) */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">

              {/* Course Info Card */}
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                <div className="mb-6">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-3xl font-bold text-primary">Enroll Today</span>
                  </div>
                  <p className="text-slate-500 text-sm">Limited seats available for the upcoming batch.</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center justify-between text-sm py-2 border-b border-slate-50">
                    <span className="flex items-center gap-3 text-slate-600">
                      <Clock size={18} className="text-accent" /> Duration
                    </span>
                    <span className="font-bold text-slate-800">{course.duration}</span>
                  </li>
                  <li className="flex items-center justify-between text-sm py-2 border-b border-slate-50">
                    <span className="flex items-center gap-3 text-slate-600">
                      <BookOpen size={18} className="text-accent" /> Lectures
                    </span>
                    <span className="font-bold text-slate-800">{course.lectures}</span>
                  </li>
                  <li className="flex items-center justify-between text-sm py-2 border-b border-slate-50">
                    <span className="flex items-center gap-3 text-slate-600">
                      <Briefcase size={18} className="text-accent" /> Projects
                    </span>
                    <span className="font-bold text-slate-800">{course.projects}</span>
                  </li>
                  <li className="flex items-center justify-between text-sm py-2 border-b border-slate-50">
                    <span className="flex items-center gap-3 text-slate-600">
                      <Award size={18} className="text-accent" /> Certificate
                    </span>
                    <span className="font-bold text-slate-800">Verified</span>
                  </li>
                </ul>

                <div className="space-y-3">
                  <button onClick={handleEnrollClick} className="w-full btn btn-primary mb-3 shadow-xl">
                    Apply Now
                  </button>
                  <button className="w-full btn btn-secondary">
                    Talk to Counselor
                  </button>
                </div>
              </div>

              {/* Help Box */}
              <div className="bg-slate-900 rounded-2xl p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <Phone size={24} />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Need Help?</h4>
                  <p className="text-slate-400 text-sm mb-4">Call us to get more details about the course.</p>
                  <a href="tel:+918299727078" className="text-accent font-bold text-xl hover:text-white transition-colors">
                    +91 8299727078
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Simple Enrollment Modal */}
      {showEnrollModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl">
            <button onClick={() => setShowEnrollModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-full transition-colors">
              <span className="sr-only">Close</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary">Join This Course</h3>
              <p className="text-slate-500 text-sm mt-1">Detailed inquiry for {course.title}</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              addToast('Enrollment request received! We will contact you shortly.', 'success');
              setShowEnrollModal(false);
            }}>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Full Name</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Phone Number</label>
                <input type="tel" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Email Address</label>
                <input type="email" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" placeholder="john@example.com" />
              </div>
              <button type="submit" className="w-full btn btn-primary shadow-xl">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default CourseDetail;
