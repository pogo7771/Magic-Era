import React, { useState, useMemo } from 'react';
import { Search, X, ExternalLink, Github, Tag, Calendar, User, Eye, Heart, Sparkles } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const projects = [
    {
        id: 1,
        title: "ShopEasy E-Commerce",
        category: "web",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A comprehensive e-commerce platform featuring a custom shopping cart, user authentication, payment gateway integration (Stripe), and an admin dashboard for inventory management.",
        technologies: ["React", "Node.js", "MongoDB", "Redux", "Stripe API"],
        client: "Retail Corp",
        date: "Jan 2024",
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "FinTrack Dashboard",
        category: "app",
        image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A real-time financial tracking application allowing users to monitor expenses, set budgets, and visualize spending habits through interactive charts and graphs.",
        technologies: ["Vue.js", "D3.js", "Firebase", "Tailwind CSS"],
        client: "FinTech Solutions",
        date: "Nov 2023",
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "Wanderlust Travel Blog",
        category: "web",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A visually immersive travel blog with a content management system (CMS) for easy post updates, image galleries, and an interactive map integration.",
        technologies: ["Next.js", "Sanity CMS", "Mapbox", "Framer Motion"],
        client: "Travel Influencer",
        date: "Feb 2024",
        link: "#",
        github: "#"
    },
    {
        id: 4,
        title: "EcoBrand Identity",
        category: "design",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Complete brand identity package including logo design, color palette, typography guidelines, and social media assets for an eco-friendly startup.",
        technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
        client: "Green Earth Co.",
        date: "Dec 2023",
        link: "#",
        github: null
    },
    {
        id: 5,
        title: "TaskMaster App UI",
        category: "design",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Modern and intuitive user interface design for a productivity and task management mobile application, focusing on user experience and accessibility.",
        technologies: ["Figma", "Protopie", "Adobe XD"],
        client: "StartUp Inc.",
        date: "Oct 2023",
        link: "#",
        github: null
    },
    {
        id: 6,
        title: "DataViz Analytics",
        category: "app",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "An enterprise-grade analytics tool capable of processing large datasets and generating downloadable reports with customizable parameters.",
        technologies: ["Python", "Django", "React", "Pandas"],
        client: "Data Corp",
        date: "Mar 2024",
        link: "#",
        github: "#"
    },
];

const Portfolio = () => {
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProject, setSelectedProject] = useState(null);
    const [likes, setLikes] = useState({});

    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchesFilter = filter === 'all' || project.category === filter;
            const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesFilter && matchesSearch;
        });
    }, [filter, searchQuery]);

    const handleLike = (e, id) => {
        e.stopPropagation();
        setLikes(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <PageBanner
                title="Our Portfolio"
                subtitle="A showcase of our creativity, innovation, and technical excellence."
                bgImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                breadcrumbs={[{ label: "Portfolio" }]}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Search & Filter Header */}
                <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 mb-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32"></div>
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 relative z-10">
                        <div className="w-full lg:w-auto relative group/filters overflow-hidden">
                            <div className="flex gap-3 overflow-x-auto no-scrollbar py-2 px-2 bg-slate-50/50 rounded-2xl border border-slate-100/50 justify-start sm:justify-center">
                                {['all', 'web', 'app', 'design'].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setFilter(type)}
                                        className={`px-6 sm:px-8 py-3 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all duration-500 whitespace-nowrap ${filter === type
                                                ? 'bg-primary text-white shadow-xl shadow-primary/30 scale-105'
                                                : 'text-slate-400 bg-white hover:bg-white hover:text-accent border border-transparent hover:border-accent/10 hover:shadow-sm'
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="relative w-full lg:max-w-md group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-accent transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Search by tech stack or title..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-16 pr-6 py-4.5 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:bg-white focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all text-slate-800 font-bold"
                            />
                        </div>
                    </div>
                </div>

                {/* Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 hover:-translate-y-4 cursor-pointer border border-slate-100 flex flex-col"
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-115 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
                                        <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-700">
                                            <div className="flex items-center gap-3 text-white mb-2">
                                                <Sparkles size={20} className="text-warning" />
                                                <span className="font-black text-xs uppercase tracking-widest">{project.category} Masterpiece</span>
                                            </div>
                                            <h4 className="text-white text-2xl font-black">{project.title}</h4>
                                        </div>
                                    </div>
                                    <button
                                        onClick={(e) => handleLike(e, project.id)}
                                        className={`absolute top-6 right-6 w-12 h-12 rounded-2xl backdrop-blur-md flex items-center justify-center transition-all duration-300 ${likes[project.id] ? 'bg-rose-500 text-white animate-bounce-short' : 'bg-white/20 text-white hover:bg-white hover:text-rose-500'}`}
                                    >
                                        <Heart size={20} className={likes[project.id] ? "fill-white" : ""} />
                                    </button>
                                </div>

                                <div className="p-8 pb-10 flex flex-col flex-grow">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em]">
                                            <Calendar size={14} className="text-accent" /> {project.date}
                                        </div>
                                        <div className="text-primary/10 font-black text-4xl">0{project.id}</div>
                                    </div>

                                    <h3 className="text-2xl font-black text-primary mb-4 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-slate-500 font-medium leading-relaxed mb-8 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-slate-50 flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 3).map((tech, i) => (
                                            <span key={i} className="text-[11px] font-black text-slate-500 bg-slate-50 px-4 py-1.5 rounded-lg border border-slate-100">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-32 bg-white rounded-[3rem] shadow-xl border border-slate-100">
                        <div className="w-24 h-24 bg-slate-50 text-slate-300 rounded-[2rem] flex items-center justify-center mx-auto mb-8">
                            <Search size={48} />
                        </div>
                        <h3 className="text-3xl font-black text-primary mb-4">No Gems Found</h3>
                        <p className="text-slate-500 font-medium mb-10 max-w-sm mx-auto">Try refining your search or browse through our all categories.</p>
                        <button
                            onClick={() => { setFilter('all'); setSearchQuery(''); }}
                            className="btn btn-primary bg-accent hover:rotate-2 px-10"
                        >
                            Reset Showcase
                        </button>
                    </div>
                )}
            </div>

            {/* MODAL */}
            {selectedProject && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10">
                    <div className="absolute inset-0 bg-primary/95 backdrop-blur-xl" onClick={() => setSelectedProject(null)}></div>
                    <div className="bg-white rounded-[3.5rem] w-full max-w-6xl max-h-[85vh] overflow-y-auto relative shadow-2xl animate-fade-in flex flex-col lg:grid lg:grid-cols-12 overflow-hidden">
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50 w-10 h-10 sm:w-14 sm:h-14 bg-white shadow-2xl rounded-full text-slate-400 hover:text-accent flex items-center justify-center transition-all hover:rotate-90"
                        >
                            <X size={20} className="sm:hidden" />
                            <X size={28} className="hidden sm:block" />
                        </button>

                        <div className="lg:col-span-7 bg-slate-100 lg:h-full min-h-[400px]">
                            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                        </div>

                        <div className="lg:col-span-5 p-12 lg:p-16 flex flex-col">
                            <div className="mb-10">
                                <div className="text-accent font-black text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                                    <Sparkles size={16} /> Showcase Project
                                </div>
                                <h2 className="text-4xl font-black text-primary mb-6">{selectedProject.title}</h2>
                                <p className="text-slate-600 font-medium leading-relaxed text-lg mb-8">
                                    {selectedProject.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-10 mb-10">
                                <div className="space-y-2">
                                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <User size={14} className="text-accent" /> Partner
                                    </h4>
                                    <p className="font-black text-primary">{selectedProject.client}</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <Calendar size={14} className="text-accent" /> Timeline
                                    </h4>
                                    <p className="font-black text-primary">{selectedProject.date}</p>
                                </div>
                            </div>

                            <div className="mb-12">
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Tech Stack Integration</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map((tech, i) => (
                                        <span key={i} className="px-5 py-2.5 bg-accent/5 text-accent rounded-2xl text-[11px] font-black uppercase tracking-wider border border-accent/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto flex flex-col sm:flex-row gap-4">
                                {selectedProject.link && (
                                    <a href={selectedProject.link} className="flex-1 btn btn-primary py-5 bg-primary hover:bg-slate-900 flex items-center justify-center gap-3 rounded-2xl">
                                        Live Experience <ExternalLink size={20} />
                                    </a>
                                )}
                                {selectedProject.github && (
                                    <a href={selectedProject.github} className="flex-1 btn py-5 border-2 border-slate-100 text-slate-600 hover:border-primary hover:text-primary font-black flex items-center justify-center gap-3 rounded-2xl transition-all">
                                        <Github size={20} /> View Source
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;

