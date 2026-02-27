import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = '436603022555';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[100] group"
            aria-label="Contact us on WhatsApp"
        >
            {/* Tooltip / Label */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#131515] px-4 py-2 rounded-xl shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap translate-x-4 group-hover:translate-x-0">
                <span className="text-white font-bold">WhatsApp Kontakt</span>
            </div>

            {/* Button Body */}
            <div className="relative">
                {/* Pulsing Backlight */}
                <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>

                {/* Main Icon Circle */}
                <div className="relative bg-[#25D366] hover:bg-[#20bd5a] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-all duration-300 transform group-hover:scale-110 group-active:scale-95">
                    <MessageCircle size={32} fill="white" />
                </div>

                {/* Notification Badge (Subtle) */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></div>
            </div>
        </a>
    );
};

export default WhatsAppButton;
