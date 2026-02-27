import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Preloader = ({ onComplete }) => {
    const [isExiting, setIsExiting] = useState(false);

    const handleComplete = () => {
        setIsExiting(true);
        setTimeout(() => {
            onComplete();
        }, 800); // Match CSS transition duration
    };

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-[#131515] flex items-center justify-center transition-opacity duration-700 ease-in-out ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            <video
                autoPlay
                muted
                playsInline
                onEnded={handleComplete}
                className="w-full h-full object-cover"
            >
                <source src="/Celic.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <button
                onClick={handleComplete}
                className="absolute bottom-10 right-10 z-20 group flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full transition-all duration-300"
            >
                <span className="text-white font-bold tracking-widest uppercase text-xs">Überspringen</span>
                <X size={16} className="text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Loading Bar Illustration */}
            <div className="absolute bottom-0 left-0 h-1 bg-primary/30 w-full overflow-hidden">
                <div className="h-full bg-primary animate-[loading_3s_ease-in-out_infinite] w-[40%] origin-left"></div>
            </div>

            <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
      `}</style>
        </div>
    );
};

export default Preloader;
