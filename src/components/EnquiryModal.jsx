import React, { useState, useEffect } from 'react';
import { X, User, Phone, Sparkles } from 'lucide-react';
import { useToast } from '../context/ToastContext';

const EnquiryModal = () => {
    const { addToast } = useToast();
    const [show, setShow] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
    const [formData, setFormData] = useState({ name: '', mobile: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 ease-out"
                onClick={() => setShow(false)}
            ></div>

            {/* Modal Container */}
            <div className="relative w-full max-w-md transform transition-all duration-500 animate-fade-in-up">

                {/* Main Card Content */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

                    {/* Decorative Header Background */}
                    <div className="relative h-32 bg-gradient-to-br from-primary via-slate-800 to-slate-900 overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-32 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full -ml-12 -mb-12 blur-3xl"></div>

                        {/* Close Button */}
                        <button
                            onClick={() => setShow(false)}
                            className="absolute top-4 right-4 z-20 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                        >
                            <X size={20} />
                        </button>

                        {/* Icon & Title */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-2">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md shadow-inner mb-3 border border-white/20">
                                <Sparkles size={24} className="text-warning" />
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-wide">
                                Start Your Journey
                            </h3>
                            <p className="text-slate-400 text-xs mt-1">
                                Join <span className="text-white font-semibold">Magic Era</span> today
                            </p>
                        </div>
                    </div>

                    {/* Form Body */}
                    <div className="px-8 pb-8 pt-6">

                        {/* Discount Banner */}
                        <div className="mb-6 bg-gradient-to-r from-warning/10 to-orange-50 rounded-xl border border-warning/20 p-3 text-center">
                            <p className="text-sm font-medium text-slate-700">
                                Get <span className="text-accent font-bold text-lg mx-1">10% OFF</span> on all courses!
                            </p>
                        </div>

                        <form onSubmit={(e) => {
                            e.preventDefault();
                            addToast('Thank you! We have received your inquiry.', 'success');
                            setShow(false);
                        }} className="space-y-5">

                            {/* Name Input */}
                            <div className="relative">
                                <label
                                    className={`absolute left-3 transition-all duration-200 pointer-events-none ${focusedField === 'name' || formData.name
                                        ? '-top-2.5 text-xs text-primary bg-white px-1'
                                        : 'top-3.5 text-slate-400 text-sm pl-8'
                                        }`}
                                >
                                    Full Name
                                </label>
                                <div className={`flex items-center border rounded-xl overflow-hidden transition-all duration-300 ${focusedField === 'name' ? 'border-primary ring-1 ring-primary/20 shadow-sm' : 'border-slate-200 hover:border-slate-300'}`}>
                                    <div className={`pl-3 pr-2 transition-colors duration-300 ${focusedField === 'name' ? 'text-primary' : 'text-slate-400'}`}>
                                        <User size={18} />
                                    </div>
                                    <input
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full py-3.5 pr-4 outline-none text-slate-700 font-medium placeholder-transparent bg-transparent"
                                        required
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                </div>
                            </div>

                            {/* Mobile Input */}
                            <div className="relative">
                                <label
                                    className={`absolute left-3 transition-all duration-200 pointer-events-none ${focusedField === 'mobile' || formData.mobile
                                        ? '-top-2.5 text-xs text-primary bg-white px-1'
                                        : 'top-3.5 text-slate-400 text-sm pl-8'
                                        }`}
                                >
                                    Mobile Number
                                </label>
                                <div className={`flex items-center border rounded-xl overflow-hidden transition-all duration-300 ${focusedField === 'mobile' ? 'border-primary ring-1 ring-primary/20 shadow-sm' : 'border-slate-200 hover:border-slate-300'}`}>
                                    <div className={`pl-3 pr-2 transition-colors duration-300 ${focusedField === 'mobile' ? 'text-primary' : 'text-slate-400'}`}>
                                        <Phone size={18} />
                                    </div>
                                    <input
                                        name="mobile"
                                        type="tel"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className="w-full py-3.5 pr-4 outline-none text-slate-700 font-medium placeholder-transparent bg-transparent"
                                        required
                                        maxLength="10"
                                        minLength="10"
                                        onFocus={() => setFocusedField('mobile')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="grid grid-cols-2 gap-3 mt-4">
                                <button
                                    type="button"
                                    className="btn btn-secondary flex-1"
                                    onClick={() => setShow(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-accent flex-1 shadow-xl"
                                >
                                    Claim Offer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnquiryModal;
