import React from 'react';
import { Send } from 'lucide-react';
import { useToast } from '../context/useToast';

const Newsletter = () => {
    const { addToast } = useToast();
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-sm border border-slate-100">
                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-warning/10 rounded-full -ml-12 -mb-12 blur-2xl"></div>

                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="flex items-center gap-6">
                            <div className="hidden md:flex w-20 h-20 bg-white rounded-full items-center justify-center shadow-md text-accent flex-shrink-0 animate-bounce-slow">
                                <Send size={32} />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Let&apos;s Join Our <br /> Newsletter</h2>
                                <p className="text-slate-500">Subscribe/Get Notified to get new updates.</p>
                            </div>
                        </div>

                        <div className="relative">
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                addToast('Subscribed successfully!', 'success');
                                e.target.reset();
                            }} className="relative max-w-lg mx-auto lg:mr-0 group">
                                <input
                                    type="email"
                                    className="w-full pl-6 pr-32 sm:pr-40 py-5 rounded-full bg-white border-2 border-slate-100 focus:border-accent/30 focus:ring-4 focus:ring-accent/10 outline-none transition-all shadow-sm placeholder:text-slate-400 text-slate-800 text-sm sm:text-base"
                                    placeholder="Enter your email..."
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-2 bottom-2 px-6 sm:px-8 rounded-full bg-gradient-to-r from-primary to-slate-800 text-white font-bold text-sm sm:text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:from-slate-800 hover:to-primary transition-all duration-300 hover:scale-105 active:scale-95"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
