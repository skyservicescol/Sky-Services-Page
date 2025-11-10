import React from 'react';
import { MapPin, Briefcase } from 'lucide-react';

interface Partnership {
  id: string;
  name: string;
  logo: string;
  description: string;
  services: string;
  operations: string;
  website?: string;
}

export default function Alliances() {
  const partnerships: Partnership[] = [
    {
      id: 'salala-construction',
      name: 'Salala Construction',
      logo: '/image.png',
      description: 'Expert in construction and specialized remodeling in the residential area. Delivering high-quality projects with exceptional craftsmanship.',
      services: 'Construction & Infrastructure',
      operations: 'Salt Lake City',
      website: ''
    },
    {
      id: 'salala-painting',
      name: 'Salala Painting LLC',
      logo: '/salala painting.jpg',
      description: 'Expert in interior, exterior, and wood painting throughout the entire commercial sector.',
      services: 'Painting & Interior Design',
      operations: 'Logan, Utah',
      website: ''
    },
    {
      id: 'otto-taper',
      name: 'Otto the Taper Drywall LLC',
      logo: '/Logo Otto copy.avif',
      description: 'Professional drywall installation and finishing services. Specializing in residential and commercial taping, texture application, and complete drywall solutions.',
      services: 'Drywall & Taping Services',
      operations: 'Cache Valley & Idaho',
      website: 'https://www.ottothetaperdrywall.com/'
    },
    {
      id: 'ff-quality',
      name: 'FF Quality Fence LLC',
      logo: '/logo FF Quall.jpg',
      description: 'Premium fencing solutions for residential and commercial properties. Expert installation of wood, vinyl, chain link, and ornamental fencing with superior craftsmanship.',
      services: 'Fencing & Installation',
      operations: 'Cache Valley & Ogden',
      website: 'https://www.ffqualityfenceut.com/'
    }
  ];

  const handleRequestQuote = (partnership: Partnership, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const message = `I'm interested in connecting with ${partnership.name}`;
    const whatsappUrl = `https://wa.me/14359154185?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="alliances" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Partnerships
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Verified alliances with trusted industry leaders
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {partnerships.map((partnership) => (
            <div key={partnership.id} className="group">
              <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 to-blue-600/0 group-hover:from-cyan-600/10 group-hover:to-blue-600/10 transition-all duration-300"></div>

                <div className="relative h-48 bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={partnership.logo}
                    alt={partnership.name}
                    className={`${partnership.id === 'salala-painting' ? 'w-4/5 h-4/5' : partnership.id === 'ff-quality' ? 'w-full h-full scale-110' : 'w-full h-full'} object-contain p-4`}
                  />
                </div>

                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {partnership.name}
                    </h3>
                    <p className="text-gray-400">
                      {partnership.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Briefcase size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-gray-400">Services</p>
                        <p className="text-white font-semibold">{partnership.services}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-gray-400">Operations</p>
                        <p className="text-white font-semibold">{partnership.operations}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-700">
                    <button
                      onClick={(e) => handleRequestQuote(partnership, e)}
                      className="block w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-center cursor-pointer hover:scale-105 transform"
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Why Partner With Us?</h3>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-3xl mx-auto">
            We maintain a network of pre-qualified, verified partners across multiple industries and regions. Each partnership is carefully vetted to ensure quality, reliability, and professional standards.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {['Verified & Trusted', 'Multi-Regional', 'Expert Support', 'Proven Track Record'].map((benefit, idx) => (
              <div key={idx} className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500 transition-colors duration-300">
                <p className="font-semibold text-cyan-400">{benefit}</p>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/14359154185?text=I%27m%20interested%20in%20partnership%20opportunities"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-3 px-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Explore Partnership Opportunities
          </a>
        </div>
      </div>
    </section>
  );
}
