import React, { useState } from 'react';
import { Check, Sparkles, Zap } from 'lucide-react';

interface Service {
  id: string;
  kicker: string;
  title: string;
  description: string;
  features?: string[];
  cta: string;
  ctaAction: 'quote' | 'plans' | 'info' | 'pdf';
  badge?: string;
  badgeColor?: string;
  badgePosition?: 'inline' | 'corner';
}

export default function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 'contracts',
      kicker: 'CONTRACT SOURCING',
      title: 'We grow your business with market presence',
      description: 'We make you visible in the right channels: we identify aligned companies, generate interest, and coordinate business contacts for your team.',
      cta: 'Get Quote',
      ctaAction: 'quote'
    },
    {
      id: 'marketing',
      kicker: 'MARKETING',
      title: 'More visibility, more customers',
      description: 'We plan, create, and manage your social presence to turn attention into sales—with clear reporting and constant optimization.',
      features: [
        'Social Media Management',
        'Content Creation (Stories, Posts, Reels)',
        'Audience Growth Strategy',
        'Brand Development & Creative Direction',
        'Performance Reporting'
      ],
      cta: 'See Plans',
      ctaAction: 'plans'
    },
    {
      id: 'international',
      kicker: 'INTERNATIONAL HIRING',
      title: 'Want to add staff without raising costs?',
      description: 'We provide remote professional talent with higher quality and commitment, managed from start to finish.',
      cta: 'More Information',
      ctaAction: 'pdf',
      badge: 'NEW',
      badgeColor: 'from-pink-500 to-purple-600',
      badgePosition: 'corner'
    }
  ];

  const plusService: Service = {
    id: 'partnerships',
    kicker: 'Strategic Partnerships',
    title: 'Exclusive benefit for clients',
    description: 'Access to our network and co-promotions to increase your brand reach and credibility.',
    cta: 'I Want This Benefit',
    ctaAction: 'info',
    badge: 'FREE',
    badgeColor: 'from-green-400 to-emerald-500'
  };

  const handleCTA = (service: Service) => {
    if (service.ctaAction === 'plans') {
      document.querySelector('#marketing-plans')?.scrollIntoView({ behavior: 'smooth' });
    } else if (service.ctaAction === 'pdf') {
      window.open('/International Hiring-Sky Services copy.pdf', '_blank');
    } else {
      const message = service.ctaAction === 'quote'
        ? `I want to get a quote for ${service.kicker}`
        : `I want more information about ${service.kicker}`;
      window.open(`https://wa.me/14359154185?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Comprehensive solutions for modern business growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-cyan-500 hover:bg-slate-800/80 h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 to-blue-600/0 group-hover:from-cyan-600/10 group-hover:to-blue-600/10 transition-all duration-300"></div>

                {service.badge && service.badgePosition === 'corner' && (
                  <div className="absolute -top-1 -right-1">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.badgeColor} blur-md opacity-75`}></div>
                      <div className={`relative flex items-center gap-1 bg-gradient-to-r ${service.badgeColor} px-4 py-1.5 rounded-bl-2xl rounded-tr-xl`}>
                        <Zap size={14} className="text-white" />
                        <span className="text-white font-bold text-xs tracking-wider">
                          {service.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="relative flex-1 flex flex-col">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">
                      {service.kicker}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {service.features && hoveredService === service.id && (
                    <div className="mb-6 space-y-2 animate-fade-in">
                      <p className="text-sm font-semibold text-cyan-400 mb-3">Includes:</p>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-300 text-sm">{feature}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto">
                    <button
                      onClick={() => handleCTA(service)}
                      className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-sm"
                    >
                      {service.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div
            className="max-w-2xl w-full"
            onMouseEnter={() => setHoveredService(plusService.id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="relative overflow-hidden rounded-xl border-2 border-yellow-500/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/5 to-orange-600/5"></div>

              <div className="absolute -top-1 -right-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 blur-lg opacity-75"></div>
                  <div className="relative flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 rounded-bl-2xl rounded-tr-xl">
                    <Sparkles size={18} className="text-slate-900" />
                    <span className="text-slate-900 font-bold text-sm tracking-wider">PLUS</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-bold text-yellow-400 tracking-wider uppercase">
                      {plusService.kicker}
                    </span>
                  </div>
                  <div className={`bg-gradient-to-r ${plusService.badgeColor} px-4 py-1 rounded-full`}>
                    <span className="text-white font-bold text-xs tracking-wider">
                      {plusService.badge}
                    </span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 hover:text-yellow-400 transition-colors duration-300">
                  {plusService.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {plusService.description}
                </p>

                <button
                  onClick={() => handleCTA(plusService)}
                  className="w-full py-3 px-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg font-bold hover:shadow-xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105 text-slate-900"
                >
                  {plusService.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
