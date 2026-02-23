import React, { useState } from 'react';
import { Upload, Briefcase, User, GraduationCap, Phone, Mail, FileText, ChevronRight, Rocket, Star, Heart } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { useToast } from '../context/useToast';

const Career = () => {
    const { addToast } = useToast();
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
        setTimeout(() => {
            addToast("Thank you! Your application has been submitted successfully.", "success");
            setIsSubmitting(false);
            setFormData({ fn: '', ln: '', em: '', mo: '', qul: '', job: '', file: null });
        }, 1500);
    };

    const benefits = [
        {
            icon: Rocket,
            title: "Growth Path",
            text: "Continuous learning and rapid career advancement.",
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            icon: Star,
            title: "Exciting Projects",
            text: "Work on cutting-edge tech and real-world problems.",
            color: "text-warning",
            bg: "bg-warning/10"
        },
        {
            icon: Heart,
            title: "Vibrant Culture",
            text: "Inclusive, supportive, and truly fun environment.",
            color: "text-rose-500",
            bg: "bg-rose-50"
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            <PageBanner
                title="Join Our Team"
                subtitle="Build the future of tech education with us. We&apos;re looking for passionate innovators."
                bgImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                breadcrumbs={[{ label: "Career Application" }]}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 relative z-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8" data-aos="fade-right">
                            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
                                <h3 className="text-2xl font-black text-primary mb-8">Why Magic Era?</h3>
                                <div className="space-y-8">
                                    {benefits.map((b, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className={`w-14 h-14 rounded-2xl ${b.bg} ${b.color} flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110`}>
                                                <b.icon size={28} />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-800 text-lg mb-1">{b.title}</h4>
                                                <p className="text-slate-500 text-sm leading-relaxed">{b.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 p-8 bg-gradient-to-br from-primary to-slate-900 rounded-[2.5rem] text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                    <h4 className="text-xl font-bold mb-3 relative z-10">Have Questions?</h4>
                                    <p className="text-sm text-slate-300 mb-6 relative z-10">Our HR team is here to help with your application.</p>
                                    <a href="mailto:hr@magicera.co.in" className="inline-flex items-center gap-2 text-warning font-black hover:text-white transition-colors relative z-10">
                                        hr@magicera.co.in <ChevronRight size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form Area */}
                        <div className="lg:col-span-8" data-aos="fade-left">
                            <div className="bg-white rounded-[3rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden border border-slate-100">
                                <div className="bg-primary/5 px-10 md:px-14 py-10 border-b border-slate-100">
                                    <h2 className="text-3xl font-black text-primary mb-2">Apply Now</h2>
                                    <p className="text-slate-500 font-medium">Ready to take the next big step in your career?</p>
                                </div>

                                <div className="p-10 md:p-14">
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-1">First Name</label>
                                                <div className="relative group">
                                                    <User size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-accent transition-colors" />
                                                    <input
                                                        type="text"
                                                        name="fn"
                                                        value={formData.fn}
                                                        onChange={handleChange}
                                                        className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all text-slate-800 font-bold"
                                                        placeholder="John"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-1">Last Name</label>
                                                <div className="relative group">
                                                    <User size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-accent transition-colors" />
                                                    <input
                                                        type="text"
                                                        name="ln"
                                                        value={formData.ln}
                                                        onChange={handleChange}
                                                        className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all text-slate-800 font-bold"
                                                        placeholder="Doe"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-1">Email Address</label>
                                                <div className="relative group">
                                                    <Mail size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-accent transition-colors" />
                                                    <input
                                                        type="email"
                                                        name="em"
                                                        value={formData.em}
                                                        onChange={handleChange}
                                                        className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all text-slate-800 font-bold"
                                                        placeholder="john@example.com"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-1">Phone Number</label>
                                                <div className="relative group">
                                                    <Phone size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-accent transition-colors" />
                                                    <input
                                                        type="tel"
                                                        name="mo"
                                                        value={formData.mo}
                                                        onChange={handleChange}
                                                        className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all text-slate-800 font-bold"
                                                        placeholder="+91..."
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-1">Highest Qualification</label>
                                                <div className="relative group">
                                                    <GraduationCap size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-accent transition-colors" />
                                                    <input
                                                        type="text"
                                                        name="qul"
                                                        value={formData.qul}
                                                        onChange={handleChange}
                                                        className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all text-slate-800 font-bold"
                                                        placeholder="B.Tech, MBA, etc."
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-1">Position Applying For</label>
                                                <div className="relative group">
                                                    <Briefcase size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-accent transition-colors" />
                                                    <input
                                                        type="text"
                                                        name="job"
                                                        value={formData.job}
                                                        onChange={handleChange}
                                                        className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all text-slate-800 font-bold"
                                                        placeholder="Software Instructor"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-1">Upload Resume (PDF/DOC)</label>
                                            <div className={`relative border-4 border-dashed rounded-[2rem] p-12 text-center transition-all duration-500 overflow-hidden group/upload ${formData.file ? 'border-accent bg-accent/5' : 'border-slate-100 hover:border-accent/30 hover:bg-slate-50'}`}>
                                                <input
                                                    type="file"
                                                    name="file"
                                                    onChange={handleChange}
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30"
                                                    required
                                                />
                                                <div className="relative z-10 flex flex-col items-center justify-center gap-4">
                                                    <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center transition-all duration-500 ${formData.file ? 'bg-accent text-white rotate-0' : 'bg-white shadow-xl text-slate-300 group-hover/upload:rotate-12 group-hover/upload:text-accent'}`}>
                                                        {formData.file ? <FileText size={36} /> : <Upload size={36} />}
                                                    </div>
                                                    {formData.file ? (
                                                        <div className="space-y-1">
                                                            <div className="text-xl font-black text-primary truncate max-w-[300px]">{formData.file.name}</div>
                                                            <div className="text-sm text-accent font-bold">File selected - Click to change</div>
                                                        </div>
                                                    ) : (
                                                        <div className="space-y-1">
                                                            <div className="text-xl font-black text-slate-600">Drop your resume here</div>
                                                            <div className="text-sm text-slate-400 font-medium">Supported formats: PDF, DOC, DOCX (Max 10MB)</div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-primary text-white py-6 rounded-2xl font-black text-xl shadow-2xl shadow-primary/30 hover:bg-accent hover:shadow-accent/40 transform hover:-translate-y-1 transition-all duration-500 disabled:opacity-50 flex items-center justify-center gap-3 overflow-hidden group"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-3"><div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div> Submitting...</span>
                                            ) : (
                                                <>Submit Application <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" /></>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;
