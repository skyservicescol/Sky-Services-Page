import React, { useState } from 'react';
import { Target, Zap, BarChart3 } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { label: 'Countries Served', value: '1', icon: '🌍' },
    { label: 'Active Partnerships', value: '8+', icon: '🤝' },
    { label: 'Contracts Sourced', value: '32+', icon: '📋' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About Sky Services
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Leaders in remote talent, marketing excellence, and international business solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-8 rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm hover:border-cyan-500 hover:bg-slate-800/80 transition-all duration-300"
            >
              <div className="text-5xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex gap-4 mb-8">
              {[
                { id: 'mission', label: 'Mission', icon: Target },
                { id: 'values', label: 'Methodology', icon: Zap },
                { id: 'approach', label: 'Approach', icon: BarChart3 }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                      : 'bg-slate-800/50 text-gray-400 hover:text-gray-300'
                  }`}
                >
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {activeTab === 'mission' && (
                <div className="animate-fade-in space-y-4">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We bridge the gap between businesses and opportunities through expert remote talent, strategic marketing, and international business coordination.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex gap-3">
                      <span className="text-cyan-400">✓</span>
                      <span>Connect businesses with pre-qualified international partners</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-cyan-400">✓</span>
                      <span>Provide reliable remote talent for marketing and business development</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-cyan-400">✓</span>
                      <span>Enable access to verified procurement opportunities</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="animate-fade-in space-y-4">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Our proven methodology ensures consistent, measurable results:
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                      <p className="font-semibold text-cyan-400 mb-2">Diagnosis</p>
                      <p className="text-gray-300 text-sm">Deep analysis of your business needs and market opportunities</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                      <p className="font-semibold text-cyan-400 mb-2">Strategy</p>
                      <p className="text-gray-300 text-sm">Customized solutions tailored to your goals</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                      <p className="font-semibold text-cyan-400 mb-2">Execution</p>
                      <p className="text-gray-300 text-sm">Professional implementation by expert remote talent</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                      <p className="font-semibold text-cyan-400 mb-2">Control</p>
                      <p className="text-gray-300 text-sm">Continuous monitoring and optimization</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'approach' && (
                <div className="animate-fade-in space-y-4">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We combine data-driven insights with human expertise:
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex gap-3">
                      <span className="text-cyan-400">→</span>
                      <span>Advanced market analysis and intelligence gathering</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-cyan-400">→</span>
                      <span>Pre-qualification verification for all partners</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-cyan-400">→</span>
                      <span>Dedicated expert support and coordination</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-cyan-400">→</span>
                      <span>Multi-language and multi-regional capabilities</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-lg">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Professional Excellence</p>
                    <p className="text-sm text-gray-400">High-quality service standards</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-lg">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Reliability</p>
                    <p className="text-sm text-gray-400">Consistent, dependable results</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-lg">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Innovation</p>
                    <p className="text-sm text-gray-400">Continuous improvement mindset</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-lg">4</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Trust</p>
                    <p className="text-sm text-gray-400">Transparent, ethical partnerships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
