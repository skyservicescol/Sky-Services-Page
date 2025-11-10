import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  badge: string;
  badgeColor: string;
  description: string;
  features: string[];
  expert: string;
}

export default function MarketingPlans() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const plans: Plan[] = [
    {
      id: 'basic',
      name: 'Basic',
      badge: 'BASIC',
      badgeColor: 'from-blue-500 to-cyan-400',
      description: 'Starter package for growing businesses',
      features: [
        'Social Media Management (1 platform)',
        'Content Creation (2 weekly stories & 2 posts per week)',
        'Performance Reporting (1 monthly summary)',
      ],
      expert: 'Jonathan Acevedo'
    },
    {
      id: 'normal',
      name: 'Normal',
      badge: 'NORMAL',
      badgeColor: 'from-purple-600 to-blue-600',
      description: 'Perfect for established brands',
      features: [
        'Social Media Management (2 platforms)',
        'Content Creation (4 weekly stories + 3 posts + 1 reel/carousel every 2 weeks)',
        'Performance Reporting (Twice a month)',
      ],
      expert: 'Jonathan Acevedo'
    },
    {
      id: 'pro',
      name: 'Pro',
      badge: 'PRO',
      badgeColor: 'from-yellow-600 to-orange-500',
      description: 'Enterprise-level marketing strategy',
      features: [
        'Full social strategy & management',
        'Content Creation (4 weekly stories + 4 posts + 2 reels/carousels per week)',
        'Performance Reporting (Every week)',
      ],
      expert: 'Jonathan Acevedo'
    }
  ];

  const handleQuote = (planName: string) => {
    const message = `Hi Sky Services! I'm interested in the ${planName} marketing plan.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/14359154185?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="marketing-plans" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Marketing Plans
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Remote talent made reliable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
              className="relative group h-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>

              <div className={`relative bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 h-full transition-all duration-300 transform ${
                hoveredPlan === plan.id ? 'scale-105 border-cyan-500' : 'border-slate-700'
              }`}>
                <div className="absolute -top-3 left-6">
                  <div className={`inline-block px-4 py-1 bg-gradient-to-r ${plan.badgeColor} rounded-full text-white font-bold text-sm shadow-lg`}>
                    {plan.badge}
                  </div>
                </div>

                <div className="pt-6 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>

                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-3">
                        <Check size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-slate-700 pt-6">
                    <p className="text-center text-gray-500 text-sm mb-4">Expert in charge</p>
                    <p className="text-center font-semibold text-white">{plan.expert}</p>
                  </div>

                  <button
                    onClick={() => handleQuote(plan.name)}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform ${
                      hoveredPlan === plan.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50 scale-100'
                        : 'bg-slate-700/50 text-gray-300 hover:text-white'
                    }`}
                  >
                    {hoveredPlan === plan.id ? 'Quote This Plan' : 'View Details'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm mb-4">Instagram: @skyservices_col</p>
        </div>
      </div>
    </section>
  );
}
