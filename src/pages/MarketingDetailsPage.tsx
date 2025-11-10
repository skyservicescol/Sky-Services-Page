import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, BarChart3, Users, Calendar } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MarketingDetailsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      name: 'Basic',
      badge: 'BASIC',
      badgeColor: 'from-blue-500 to-cyan-400',
      features: [
        'Social Media Management (1 platform)',
        'Content Creation (2 weekly stories & 2 posts per week)',
        'Performance Reporting (1 monthly summary)',
        'Expert support and guidance',
        'Unlimited revisions'
      ],
      bestFor: 'Startups and small businesses'
    },
    {
      name: 'Normal',
      badge: 'NORMAL',
      badgeColor: 'from-purple-600 to-blue-600',
      features: [
        'Social Media Management (2 platforms)',
        'Content Creation (4 weekly stories + 3 posts + 1 reel every 2 weeks)',
        'Performance Reporting (Twice a month)',
        'Strategy consulting',
        'Trending content optimization',
        'Competitor analysis'
      ],
      bestFor: 'Established brands and growing businesses'
    },
    {
      name: 'Pro',
      badge: 'PRO',
      badgeColor: 'from-yellow-600 to-orange-500',
      features: [
        'Full social strategy & management',
        'Content Creation (4 weekly stories + 4 posts + 2 reels per week)',
        'Performance Reporting (Every week)',
        'Dedicated account manager',
        'Custom campaign development',
        'Influencer partnership coordination',
        'Community management',
        'Crisis management support'
      ],
      bestFor: 'Enterprise and high-growth businesses'
    }
  ];

  const benefits = [
    { icon: BarChart3, title: 'Data-Driven Growth', description: 'Real-time analytics and optimization for maximum ROI' },
    { icon: Users, title: 'Engaged Community', description: 'Build loyal audiences with consistent, quality content' },
    { icon: Calendar, title: 'Consistent Posting', description: 'Never miss a post with our professional scheduling' },
    { icon: CheckCircle, title: 'Expert Support', description: 'Dedicated professionals managing your presence' }
  ];

  const handleGetQuote = (planName: string) => {
    const message = `Hi Sky Services! I'm interested in the ${planName} marketing plan.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/14359154185?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <Header />
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mb-8 font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>

          <div className="space-y-16">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Professional Social Media Marketing
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
                We manage your social media presence with expert content creation, strategic posting, and data-driven optimization. Let our remote talent handle your marketing while you focus on growing your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-slate-700 bg-slate-800/50 hover:border-cyan-500 transition-colors duration-300">
                  <benefit.icon size={32} className="text-cyan-400 mb-3" />
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white">Marketing Plans</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="relative group rounded-2xl border border-slate-700 bg-slate-800/80 backdrop-blur-sm p-8 hover:border-cyan-500 transition-all duration-300"
                  >
                    <div className="absolute -top-3 left-6">
                      <div className={`inline-block px-4 py-1 bg-gradient-to-r ${plan.badgeColor} rounded-full text-white font-bold text-sm shadow-lg`}>
                        {plan.badge}
                      </div>
                    </div>

                    <div className="pt-6 space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-gray-400 text-sm">{plan.bestFor}</p>
                      </div>

                      <div className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex gap-3">
                            <CheckCircle size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                            <p className="text-gray-300 text-sm">{feature}</p>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => handleGetQuote(plan.name)}
                        className="w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50 hover:scale-105"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-12 border border-slate-700 space-y-6">
              <h2 className="text-3xl font-bold text-white">What's Included?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Custom content calendar and strategy',
                  'Professional graphic design',
                  'Video content production',
                  'Community management and engagement',
                  'Performance analytics and reporting',
                  'Trend and seasonal content planning',
                  'Hashtag research and optimization',
                  'Competitor analysis and insights'
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">Ready to Transform Your Social Presence?</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Let's discuss which plan works best for your business goals and budget.
              </p>
              <a
                href="https://wa.me/14359154185?text=Hi%20Sky%20Services%21%20I%27m%20interested%20in%20your%20marketing%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Get a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
