import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { useToast } from '../context/useToast';

const Contact = () => {
    const { addToast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            addToast('Message sent successfully! We will contact you soon.', 'success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 800);
    };

    const contactMethods = [
        {
            icon: Phone,
            title: "Quick Call",
            value: "+91 8299727078",
            sub: "Mon-Sat 9am-8pm",
            link: "tel:+918299727078",
            color: "text-green-500",
            bg: "bg-green-50"
        },
        {
            icon: Mail,
            title: "Email Us",
            value: "info@magicera.co.in",
            sub: "Online support 24/7",
            link: "mailto:info@magicera.co.in",
            color: "text-accent",
            bg: "bg-accent/5"
        },
        {
            icon: MapPin,
            title: "Visit Us",
            value: "Kalyanpur, Kanpur",
            sub: "1A Mini LIG, Mahabalipuram",
            link: "https://maps.app.goo.gl/y3unc5YnaH6i9kFp7",
            color: "text-warning",
            bg: "bg-warning/10"
        }
    ];

    return (
        <div className="bg-slate-50">
            <PageBanner
                title="Get In Touch"
                subtitle="Have questions about our courses or services? We're here to help you."
                bgImage="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                breadcrumbs={[{ label: "Contact Us" }]}
            />

            <section className="py-20 lg:py-32 relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 lg:mb-32">
                        {contactMethods.map((m, i) => (
                            <div key={i} className="bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl border border-slate-100 group hover:-translate-y-2 transition-all duration-500" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${m.bg} ${m.color}`}>
                                    <m.icon size={28} className="sm:size-8" />
                                </div>
                                <h4 className="text-lg sm:text-xl font-black text-primary mb-2 tracking-tight">{m.title}</h4>
                                <a href={m.link} className="text-slate-700 font-bold block mb-1 group-hover:text-accent transition-colors text-sm sm:text-base">{m.value}</a>
                                <p className="text-slate-400 text-xs sm:text-sm font-medium">{m.sub}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                        {/* Info Section */}
                        <div className="lg:col-span-5 space-y-10 text-center lg:text-left" data-aos="fade-right">
                            <div className="space-y-6">
                                <span className="text-accent font-black text-xs sm:text-sm uppercase tracking-[0.25em] block">Connect with us</span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary leading-tight">
                                    Let&apos;s Start a <br className="hidden sm:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Contribution</span>
                                </h2>
                                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                                    Whether you&apos;re looking to start a new career or pivot into tech, our experts are ready to guide you. Drop us a message, and we&apos;ll get back to you within 24 hours.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
                                <div className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm text-left group hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-primary">Working Hours</h5>
                                        <p className="text-slate-500 text-sm">Mon - Sat: 9 AM - 8 PM</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm text-left group hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-accent/5 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-primary">Training Partner</h5>
                                        <p className="text-slate-500 text-sm">Global Tech Standards</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="lg:col-span-7" data-aos="fade-left">
                            <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.12)] border border-slate-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                <h3 className="text-2xl sm:text-3xl font-black text-primary mb-8 flex items-center gap-3">
                                    Send Message <MessageSquare className="text-accent" />
                                </h3>

                                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all text-slate-800 font-bold placeholder:text-slate-400"
                                            placeholder="Full Name"
                                            required
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all text-slate-800 font-bold placeholder:text-slate-400"
                                            placeholder="Email Address"
                                            required
                                        />
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all text-slate-800 font-bold placeholder:text-slate-400"
                                            placeholder="Phone Number"
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all text-slate-800 font-bold placeholder:text-slate-400"
                                            placeholder="Subject"
                                            required
                                        />
                                    </div>

                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all text-slate-800 font-bold min-h-[150px] resize-none placeholder:text-slate-400"
                                        placeholder="How can we help you?"
                                        required
                                    ></textarea>

                                    <button
                                        type="submit"
                                        className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/30 hover:bg-accent hover:shadow-accent/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
                                    >
                                        Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="pb-24 px-4 overflow-hidden">
                <div className="container mx-auto">
                    <div className="rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl h-[350px] sm:h-[500px] border-[6px] sm:border-8 border-white group relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1159.227441549646!2d80.26042457999719!3d26.495804369046034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c375681123e41%3A0xe67232252c1598f4!2sLOGIC%20ERA%20TECHNOLOGIES!5e0!3m2!1sen!2sin!4v1709292837286!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                        ></iframe>
                        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-4 sm:py-6 rounded-2xl sm:rounded-3xl shadow-2xl pointer-events-none group-hover:translate-y-0 translate-y-20 opacity-0 group-hover:opacity-100 transition-all duration-500 border border-slate-100">
                            <h4 className="font-black text-primary mb-1 text-sm sm:text-base">Global HQ Branch</h4>
                            <p className="text-slate-500 text-xs sm:text-sm">Kalyanpur, Kanpur, Uttar Pradesh</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
