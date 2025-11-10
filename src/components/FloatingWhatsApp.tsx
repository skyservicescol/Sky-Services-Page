import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <div className="relative group">
        <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>

        <a
          href="https://wa.me/14359154185?text=Hello%20Sky%20Services%21%20I%27m%20interested%20in%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle size={32} />
        </a>

        {showTooltip && (
          <div className="absolute bottom-20 right-0 bg-slate-900 border border-cyan-500 rounded-lg px-4 py-2 text-white text-sm whitespace-nowrap animate-fade-in">
            Chat with us on WhatsApp
            <div className="absolute bottom-0 right-4 translate-y-full border-8 border-transparent border-t-slate-900"></div>
          </div>
        )}
      </div>
    </div>
  );
}
