import React from 'react';
import { Heart, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#' }
  ];

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <img src="/logo%20copy.jpg" alt="Sky Services" className="h-12 w-auto" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Remote talent made reliable. Expert marketing, contract sourcing, and international business solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Marketing Plans</li>
              <li>Contract Search</li>
              <li>International Solutions</li>
              <li>Partnership Network</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/14359154185"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/skyservices_col"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
              >
                <Instagram size={16} />
                @skyservices_col
              </a>
              <a
                href="https://www.facebook.com/share/g/1BqBbJ3Go5/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
              >
                <Facebook size={16} />
                Facebook Community (15K+)
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {currentYear} Sky Services. All rights reserved. Remote talent made reliable.
            </p>
            <div className="flex items-center gap-1">
              Made with
              <Heart size={16} className="text-red-500 fill-red-500" />
              by Sky Services Team
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
