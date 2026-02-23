import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useToast } from '../context/useToast';
import {
  CheckCircle, Clock, Calendar, Award, BookOpen,
  ArrowRight, Star, ChevronDown, MonitorPlay,
  Users, Briefcase, Download, Phone, ShieldCheck, Zap
} from 'lucide-react';
import PageBanner from '../components/PageBanner';

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

  const [activeTab, setActiveTab] = useState('overview');
  const [openModule, setOpenModule] = useState(0);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleEnrollClick = () => {
    setShowEnrollModal(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageBanner
        title={course.title}
        subtitle={course.subtitle}
        bgImage={course.image}
        breadcrumbs={[
          { label: "Courses", to: "/#courses" },
          { label: course.category }
        ]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-36 lg:pb-24 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 mb-10">
              {/* Stats Bar */}
              <div className="flex overflow-x-auto no-scrollbar gap-6 sm:gap-8 p-6 md:p-10 bg-primary/5 border-b border-slate-100 items-start">
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-warning">
                    <Star size={20} fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-primary font-black text-sm sm:text-base">{course.rating}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Rating</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-500">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="text-primary font-black text-sm sm:text-base">{course.students}+</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Students</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent">
                    <Zap size={20} />
                  </div>
                  <div>
                    <div className="text-primary font-black text-sm sm:text-base">{course.level}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Level</div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex overflow-x-auto no-scrollbar border-b border-slate-100 px-6 sm:px-8">
                {['overview', 'curriculum', 'instructor'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 sm:px-8 py-5 sm:py-6 font-black capitalize transition-all border-b-4 whitespace-nowrap text-sm sm:text-base ${activeTab.toLowerCase() === tab.toLowerCase()
                      ? 'border-accent text-primary'
                      : 'border-transparent text-slate-400 hover:text-slate-600'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-8 md:p-12">
                {activeTab.toLowerCase() === 'overview' && (
                  <div className="space-y-8 animate-fade-in">
                    <h3 className="text-2xl font-black text-primary">About this course</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">{course.overview}</p>

                    <div className="grid md:grid-cols-2 gap-6 pt-6">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-black text-primary mb-4 flex items-center gap-2">
                          <CheckCircle className="text-green-500" size={20} />
                          What you&apos;ll learn
                        </h4>
                        <ul className="space-y-3">
                          {course.curriculum[0].topics.map((t, i) => (
                            <li key={i} className="text-slate-600 text-sm flex items-center gap-2 font-medium">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent" /> {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-black text-primary mb-4 flex items-center gap-2">
                          <Award className="text-accent" size={20} />
                          Why this course?
                        </h4>
                        <ul className="space-y-3 font-semibold text-slate-600 text-sm">
                          <li>• Industry-leading curriculum</li>
                          <li>• Professional certification</li>
                          <li>• Resume & Interview prep</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab.toLowerCase() === 'curriculum' && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-2xl font-black text-primary mb-6">Course Modules</h3>
                    {course.curriculum.map((module, index) => (
                      <div key={index} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                        <button
                          onClick={() => setOpenModule(openModule === index ? null : index)}
                          className="w-full flex items-center justify-between p-6 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-black text-sm">
                              0{index + 1}
                            </div>
                            <span className="font-black text-primary text-lg">{module.title}</span>
                          </div>
                          <ChevronDown className={`text-slate-400 transition-transform ${openModule === index ? 'rotate-180' : ''}`} />
                        </button>
                        {openModule === index && (
                          <div className="p-6 bg-white border-t border-slate-50 space-y-4">
                            {module.topics.map((topic, i) => (
                              <div key={i} className="flex items-center gap-4 text-slate-600">
                                <MonitorPlay size={18} className="text-accent" />
                                <span className="font-medium">{topic}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab.toLowerCase() === 'instructor' && (
                  <div className="animate-fade-in text-center p-10 bg-slate-50 rounded-[2rem]">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
                      alt="Instructor"
                      className="w-32 h-32 rounded-[2rem] mx-auto mb-6 shadow-xl object-cover"
                    />
                    <h4 className="text-2xl font-black text-primary mb-2">Senior Industry Expert</h4>
                    <p className="text-accent font-bold mb-4 uppercase tracking-widest text-sm">15+ Years of Experience</p>
                    <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
                      Our courses are led by industry veterans who have worked in top tech giants. They bring practical knowledge and real-world project experience to the classroom.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
              <div className="p-10 space-y-8">
                <div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-slate-400 font-black line-through text-2xl">₹15,000</span>
                    <span className="text-accent font-black text-4xl">₹7,499</span>
                  </div>
                  <p className="text-green-500 font-black flex items-center gap-2">
                    <Clock size={16} /> Early Bird Offer - 50% OFF!
                  </p>
                </div>

                <div className="space-y-4 font-bold">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                    <span className="flex items-center gap-3 text-slate-500"><BookOpen size={20} /> Lectures</span>
                    <span className="text-primary">{course.lectures}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                    <span className="flex items-center gap-3 text-slate-500"><Briefcase size={20} /> Projects</span>
                    <span className="text-primary">{course.projects}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                    <span className="flex items-center gap-3 text-slate-500"><Clock size={20} /> Duration</span>
                    <span className="text-primary">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                    <span className="flex items-center gap-3 text-slate-500"><ShieldCheck size={20} /> Accessibility</span>
                    <span className="text-primary">Lifetime</span>
                  </div>
                </div>

                <button
                  onClick={handleEnrollClick}
                  className="block w-full text-center bg-primary text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-primary/30 hover:bg-accent hover:shadow-accent/40 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Enroll Now
                </button>

                <div className="pt-4 text-center">
                  <p className="text-slate-400 text-sm font-medium mb-4">Guaranteed Career Support</p>
                  <div className="flex justify-center gap-4 text-slate-300">
                    <Download size={20} className="hover:text-primary cursor-pointer transition-colors" />
                    <Phone size={20} className="hover:text-primary cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-xl border-t border-slate-200/50 p-4 sm:p-5 shadow-[0_-10px_40px_rgba(0,0,0,0.06)] z-40 flex items-center justify-between pb-[calc(env(safe-area-inset-bottom)+1rem)] transition-transform duration-300">
        <div>
          <div className="flex flex-col">
            <span className="text-slate-400 font-bold line-through text-xs sm:text-sm">₹15,000</span>
            <span className="text-primary font-black text-xl sm:text-2xl leading-none">₹7,499</span>
          </div>
        </div>
        <button
          onClick={handleEnrollClick}
          className="bg-primary text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-black shadow-xl shadow-primary/25 hover:bg-accent hover:shadow-accent/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
        >
          Enroll Now
        </button>
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
