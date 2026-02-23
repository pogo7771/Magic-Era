import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, MessageCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
        // Simulate API call
        setTimeout(() => {
            addToast('Message sent successfully! We will contact you soon.', 'success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 800);
    };

    const socialLinks = [
        { Icon: Facebook, href: "#" },
        { Icon: Twitter, href: "#" },
        { Icon: Instagram, href: "#" },
        { Icon: Linkedin, href: "#" },
        { Icon: MessageCircle, href: "#" }
    ];

    return (
        <div>
            {/* Header */}
            <section className="relative h-[400px] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                        alt="Contact Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center space-y-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">Contact Us</h1>
                    <nav className="flex justify-center text-sm font-medium uppercase tracking-wider text-slate-300">
                        <Link to="/" className="hover:text-warning transition-colors">Home</Link>
                        <span className="mx-3 text-slate-500"><ChevronRight size={14} /></span>
                        <span className="text-white">Contact Us</span>
                    </nav>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* Contact Info Side */}
                    <div className="lg:col-span-5 space-y-10">
                        <div>
                            <span className="text-accent font-bold text-sm uppercase tracking-widest mb-2 block">Get In Touch</span>
                            <h2 className="text-4xl font-extrabold text-primary mb-6">Keep In Touch With Us</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We&apos;re always available to help you. Transform your skills with Magic Era. Contact us during working hours for immediate assistance.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 flex-shrink-0 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-primary mb-1 text-lg">Address</h5>
                                    <p className="text-slate-500">1A MINI LIG MAHABALIPURAM, KALYANPUR KANPUR - 208017</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 flex-shrink-0 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-primary mb-1 text-lg">Phone</h5>
                                    <a href="tel:+918299727078" className="text-slate-500 hover:text-accent transition-colors">+91 8299727078</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 flex-shrink-0 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-primary mb-1 text-lg">Email</h5>
                                    <a href="mailto:info@magicera.co.in" className="text-slate-500 hover:text-accent transition-colors">info@magicera.co.in</a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-100">
                            <h5 className="font-bold text-primary mb-4">Follow Us</h5>
                            <div className="flex gap-3">
                                {socialLinks.map(({ Icon, href }, i) => (
                                    <a
                                        key={i}
                                        href={href}
                                        className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                    >
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Contact Form Side */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl border border-slate-100">
                            <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-slate-800 font-medium"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Your Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-slate-800 font-medium"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-slate-800 font-medium"
                                            placeholder="+91..."
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-slate-800 font-medium"
                                            placeholder="Course Inquiry"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-slate-800 font-medium min-h-[150px]"
                                        placeholder="How can we help you?"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full btn btn-lg btn-primary shadow-xl"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="mt-20 rounded-3xl overflow-hidden shadow-2xl h-[450px] border-4 border-white">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1159.227441549646!2d80.26042457999719!3d26.495804369046034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c375681123e41%3A0xe67232252c1598f4!2sLOGIC%20ERA%20TECHNOLOGIES!5e0!3m2!1sen!2sin!4v1709292837286!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
