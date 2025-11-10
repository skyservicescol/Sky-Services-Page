import React from 'react';
import { MessageCircle, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Ready to elevate your business? Contact us today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <a
            href="https://wa.me/14359154185"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-xl border border-slate-700 bg-slate-800/50 hover:border-cyan-500 hover:bg-slate-800 transition-all duration-300"
          >
            <MessageCircle size={40} className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
              WhatsApp
            </h3>
            <p className="text-gray-400 mb-4">+1 (435) 915-4185</p>
            <p className="text-sm text-gray-500">Available for instant chat and support</p>
          </a>

          <a
            href="tel:+14359154185"
            className="group p-8 rounded-xl border border-slate-700 bg-slate-800/50 hover:border-cyan-500 hover:bg-slate-800 transition-all duration-300 cursor-pointer"
          >
            <Phone size={40} className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">Phone</h3>
            <p className="text-gray-400 mb-4">+1 (435) 915-4185</p>
            <p className="text-sm text-gray-500">Call during business hours</p>
          </a>

          <div className="group p-8 rounded-xl border border-slate-700 bg-slate-800/50 hover:border-cyan-500 hover:bg-slate-800 transition-all duration-300">
            <MapPin size={40} className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">Service Area</h3>
            <p className="text-gray-400 mb-4">Salt Lake City, Utah</p>
            <p className="text-sm text-gray-500">Serving the greater SLC metropolitan area</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Sky Services?</h3>
              <ul className="space-y-3">
                {[
                  'Expert remote talent with verified qualifications',
                  'Pre-qualified partnerships and contract opportunities',
                  'Dedicated support from industry professionals',
                  'Global reach with local market expertise',
                  'Transparent reporting and measurable results',
                  'Flexible, scalable solutions for any business size'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Start</h3>
              <ol className="space-y-4">
                {[
                  { num: 1, title: 'Connect', desc: 'Reach out via WhatsApp or phone' },
                  { num: 2, title: 'Consult', desc: 'Discuss your needs with our team' },
                  { num: 3, title: 'Plan', desc: 'We create a customized strategy' },
                  { num: 4, title: 'Execute', desc: 'Begin seeing results immediately' }
                ].map((step) => (
                  <li key={step.num} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 font-bold">
                      {step.num}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{step.title}</p>
                      <p className="text-sm text-gray-400">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <a
                href="https://wa.me/14359154185?text=Hi%20Sky%20Services%2C%20I%20want%20to%20get%20started"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 block text-center"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
