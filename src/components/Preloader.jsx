import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Preloader = ({ onComplete }) => {
    const [isExiting, setIsExiting] = useState(false);

    // Use a safety state wrapper to ensure handleComplete is called exactly once
    const handleComplete = React.useCallback(() => {
        setIsExiting(current => {
            if (current) return current; // Already exiting, do nothing
            
            setTimeout(() => {
                onComplete();
            }, 800); // Match CSS transition duration
            return true;
        });
    }, [onComplete]);

    useEffect(() => {
        // Safety timeout (4.5s) to guarantee the website loads even if
        // the browser blocks autoplay or video hangs.
        const safetyTimer = setTimeout(() => {
            console.log('Preloader: safety fallback triggered.');
            handleComplete();
        }, 4500);

        return () => clearTimeout(safetyTimer);
    }, [handleComplete]);

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-[#131515] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <video
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleComplete}
                    className="w-full h-full md:object-cover object-contain max-h-[85vh] md:max-h-full my-auto"
                >
                    <source src="/Celic.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <button
                onClick={handleComplete}
                className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 group flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-4 py-2.5 md:px-6 md:py-3 rounded-full transition-all duration-300"
            >
                <span className="text-white font-bold tracking-widest uppercase text-[10px] md:text-xs">Überspringen</span>
                <X size={16} className="text-white group-hover:rotate-90 transition-transform duration-300 w-3.5 h-3.5 md:w-4 md:h-4" />
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
