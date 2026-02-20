import React from 'react';
import { Cpu } from 'lucide-react';

const Logo = ({ className = "" }) => {
    return (
        <div className={`flex items-center gap-2 font-bold text-2xl tracking-tighter ${className}`}>
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white shadow-md shadow-accent/20">
                <Cpu size={20} />
            </div>
            <span>
                Magic<span className="text-accent">Era</span>
            </span>
        </div>
    );
};

export default Logo;
