import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Upload, Briefcase, User, GraduationCap, Phone, Mail, FileText } from 'lucide-react';

const Career = () => {
    const [formData, setFormData] = useState({
        fn: '',
        ln: '',
        em: '',
        mo: '',
        qul: '',
        job: '',
        file: null
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            alert("Thank you! Your application has been submitted successfully.");
            setIsSubmitting(false);
            setFormData({ fn: '', ln: '', em: '', mo: '', qul: '', job: '', file: null });
        }, 1500);
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header / Breadcrumb */}
            <section className="relative bg-primary text-white py-20 lg:py-28 overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-warning/10 rounded-full blur-3xl opacity-30"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Join Our Team</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
                        We are strictly looking for talented and dedicated individuals to help us build the future of tech education.
                    </p>

                    <nav className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium uppercase tracking-wider text-slate-200">
                        <Link to="/" className="hover:text-warning transition-colors">Home</Link>
                        <ChevronRight size={14} className="opacity-50" />
                        <span className="text-white">Career Application</span>
                    </nav>
                </div>
            </section>

            {/* Main Form Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-20 relative z-20">
                <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                    <div className="grid lg:grid-cols-5">

                        {/* Sidebar Info (Desktop Only) */}
                        <div className="hidden lg:block lg:col-span-2 bg-slate-50 p-10 border-r border-slate-100">
                            <h3 className="text-xl font-bold text-primary mb-6">Why Join Magic Era?</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-accent flex-shrink-0">
                                        <Briefcase size={18} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-sm">Growth Opportunities</h4>
                                        <p className="text-xs text-slate-500 mt-1">Continuous learning and career advancement paths.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-warning flex-shrink-0">
                                        <User size={18} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-sm">Great Culture</h4>
                                        <p className="text-xs text-slate-500 mt-1">Collaborative, inclusive, and fun work environment.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-green-500 flex-shrink-0">
                                        <GraduationCap size={18} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-sm">Impactful Work</h4>
                                        <p className="text-xs text-slate-500 mt-1">Shape the careers of thousands of students.</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-12 p-6 bg-primary rounded-2xl text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
                                <h4 className="font-bold mb-2 relative z-10">Need Help?</h4>
                                <p className="text-xs text-slate-300 mb-4 relative z-10">Contact our HR department for disjoint queries.</p>
                                <a href="mailto:hr@magicera.co.in" className="text-xs font-bold text-warning hover:text-white transition-colors relative z-10 inline-flex items-center gap-1">
                                    hr@magicera.co.in <ChevronRight size={12} />
                                </a>
                            </div>
                        </div>

                        {/* Form Area */}
                        <div className="lg:col-span-3 p-8 md:p-12">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-2">Apply Now</h2>
                                <p className="text-slate-500 text-sm">Please fill out the form below to submit your application.</p>
                            </div>

                            <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2 group">
                                        <label className="text-xs font-bold uppercase text-slate-500 tracking-wider group-focus-within:text-accent transition-colors">First Name</label>
                                        <div className="relative">
                                            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors" />
                                            <input
                                                type="text"
                                                name="fn"
                                                value={formData.fn}
                                                onChange={handleChange}
                                                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all placeholder:text-slate-400 text-sm font-medium"
                                                placeholder="John"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-xs font-bold uppercase text-slate-500 tracking-wider group-focus-within:text-accent transition-colors">Last Name</label>
                                        <div className="relative">
                                            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors" />
                                            <input
                                                type="text"
                                                name="ln"
                                                value={formData.ln}
                                                onChange={handleChange}
                                                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all placeholder:text-slate-400 text-sm font-medium"
                                                placeholder="Doe"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2 group">
                                        <label className="text-xs font-bold uppercase text-slate-500 tracking-wider group-focus-within:text-accent transition-colors">Email Address</label>
                                        <div className="relative">
                                            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors" />
                                            <input
                                                type="email"
                                                name="em"
                                                value={formData.em}
                                                onChange={handleChange}
                                                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all placeholder:text-slate-400 text-sm font-medium"
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-xs font-bold uppercase text-slate-500 tracking-wider group-focus-within:text-accent transition-colors">Phone Number</label>
                                        <div className="relative">
                                            <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors" />
                                            <input
                                                type="tel"
                                                name="mo"
                                                value={formData.mo}
                                                onChange={handleChange}
                                                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all placeholder:text-slate-400 text-sm font-medium"
                                                placeholder="+91 98765 43210"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2 group">
                                        <label className="text-xs font-bold uppercase text-slate-500 tracking-wider group-focus-within:text-accent transition-colors">Qualification</label>
                                        <div className="relative">
                                            <GraduationCap size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors" />
                                            <input
                                                type="text"
                                                name="qul"
                                                value={formData.qul}
                                                onChange={handleChange}
                                                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all placeholder:text-slate-400 text-sm font-medium"
                                                placeholder="B.Tech / MCA"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-xs font-bold uppercase text-slate-500 tracking-wider group-focus-within:text-accent transition-colors">Job Title Applying For</label>
                                        <div className="relative">
                                            <Briefcase size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors" />
                                            <input
                                                type="text"
                                                name="job"
                                                value={formData.job}
                                                onChange={handleChange}
                                                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all placeholder:text-slate-400 text-sm font-medium"
                                                placeholder="Senior React Developer"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2 pt-2">
                                    <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Resume / CV</label>
                                    <div className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${formData.file ? 'border-accent bg-accent/5' : 'border-slate-300 hover:border-slate-400 hover:bg-slate-50'}`}>
                                        <input
                                            type="file"
                                            name="file"
                                            onChange={handleChange}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            required
                                        />
                                        <div className="pointer-events-none flex flex-col items-center justify-center gap-2">
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${formData.file ? 'bg-accent text-white' : 'bg-slate-100 text-slate-400'}`}>
                                                {formData.file ? <FileText size={20} /> : <Upload size={20} />}
                                            </div>
                                            {formData.file ? (
                                                <div className="text-sm font-medium text-slate-700">
                                                    <span className="text-accent font-bold truncate max-w-[200px] block">{formData.file.name}</span>
                                                    <span className="text-xs text-slate-500">Click to change file</span>
                                                </div>
                                            ) : (
                                                <div className="text-sm text-slate-500">
                                                    <span className="font-bold text-primary">Click to upload</span> or drag and drop
                                                    <p className="text-xs text-slate-400 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full btn bg-primary text-white hover:bg-accent py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 transform disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>Processing...</>
                                        ) : (
                                            <>Submit Application <ChevronRight size={18} /></>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;
