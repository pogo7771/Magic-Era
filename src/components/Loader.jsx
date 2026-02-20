import React from 'react';
import { Cpu } from 'lucide-react';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-center">
            {/* Spinning/Pulsing Logo Container */}
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse-slow"></div>
                <div className="relative w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center animate-bounce">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white shadow-lg shadow-accent/30 animate-spin-slow">
                        <Cpu size={32} />
                    </div>
                </div>
            </div>

            {/* Text Animation */}
            <div className="flex items-end gap-1 font-bold text-3xl tracking-tighter text-primary">
                <span className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Magic</span>
                <span className="text-accent animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Era</span>
                <span className="w-2 h-2 mb-1 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                <span className="w-2 h-2 mb-1 bg-warning rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></span>
                <span className="w-2 h-2 mb-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></span>
            </div>

            <p className="mt-4 text-slate-400 text-sm font-medium tracking-widest uppercase animate-pulse">Initializing Experience...</p>
        </div>
    );
};

export default Loader;
