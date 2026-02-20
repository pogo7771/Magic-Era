import React, { useState, useMemo } from 'react';
import { ArrowRight, Search, X, ExternalLink, Github, Tag, Calendar, User, Eye, Heart } from 'lucide-react';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProject, setSelectedProject] = useState(null);
    const [likes, setLikes] = useState({});

    // Expanded Project Data
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
            github: null // Design projects might not have code
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

    // Filter Logic
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
            {/* Header */}
            <div className="bg-primary pt-32 pb-20 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20 animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-warning/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Portfolio</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Explore our latest work, student projects, and design case studies.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Controls: Filter & Search */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 p-1 bg-white rounded-xl border border-slate-200 shadow-sm">
                        {['all', 'web', 'app', 'design'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 ${filter === type ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:bg-slate-50 hover:text-accent'}`}
                            >
                                {type === 'all' ? 'All' : type}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:max-w-xs group">
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition-all shadow-sm group-hover:border-slate-300 bg-white"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors" size={18} />
                    </div>
                </div>

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-slate-100 flex flex-col h-full"
                            >
                                {/* Image Area */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform opacity-95 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center gap-2">
                                            <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold uppercase border border-white/20">
                                                View Details
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={(e) => handleLike(e, project.id)}
                                        className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-accent transition-all z-20"
                                    >
                                        <Heart size={18} className={likes[project.id] ? "fill-accent text-accent" : ""} />
                                    </button>
                                </div>

                                {/* Content Area */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-3">
                                        <small className="text-accent font-bold uppercase text-[10px] tracking-widest bg-accent/5 px-2 py-1 rounded-sm">
                                            {project.category}
                                        </small>
                                        <span className="text-slate-400 text-xs flex items-center gap-1">
                                            <Calendar size={12} /> {project.date}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm line-clamp-2 mb-4 flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-50">
                                        {project.technologies.slice(0, 3).map((tech, i) => (
                                            <span key={i} className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="text-xs text-slate-400 px-1 py-1">+ {project.technologies.length - 3}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 text-slate-400 mb-4">
                            <Search size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">No projects found</h3>
                        <p className="text-slate-500">Try adjusting your search or filter.</p>
                        <button
                            onClick={() => { setFilter('all'); setSearchQuery(''); }}
                            className="mt-4 text-accent font-semibold hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>

            {/* PROJECT DETAIL MODAL */}
            {selectedProject && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}></div>
                    <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl animate-fade-in-up flex flex-col md:flex-row overflow-hidden">

                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 z-20 p-2 bg-white/50 backdrop-blur text-slate-800 rounded-full hover:bg-white hover:text-accent transition-all"
                        >
                            <X size={24} />
                        </button>

                        {/* Modal Image Section */}
                        <div className="md:w-1/2 h-64 md:h-auto relative bg-slate-100">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Modal Content Section */}
                        <div className="md:w-1/2 p-8 md:p-10 flex flex-col">
                            <div className="mb-6">
                                <span className="text-accent font-bold text-xs uppercase tracking-widest mb-2 block">{selectedProject.category} Project</span>
                                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">{selectedProject.title}</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    {selectedProject.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <User size={16} className="text-accent" /> Client
                                    </h4>
                                    <p className="text-sm text-slate-600">{selectedProject.client}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <Calendar size={16} className="text-accent" /> Date
                                    </h4>
                                    <p className="text-sm text-slate-600">{selectedProject.date}</p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <Tag size={16} className="text-accent" /> Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto flex gap-4">
                                {selectedProject.link && (
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary flex-1 py-3 justify-center bg-primary hover:bg-slate-800 flex items-center gap-2"
                                    >
                                        Live Demo <ExternalLink size={18} />
                                    </a>
                                )}
                                {selectedProject.github && (
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn flex-1 py-3 justify-center border-2 border-slate-200 text-slate-700 hover:border-slate-800 hover:text-slate-900 font-bold flex items-center gap-2 rounded-xl"
                                    >
                                        <Github size={18} /> Source Code
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
