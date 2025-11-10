import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 'services',
      question: 'What services does Sky Services offer?',
      answer: 'We provide three core services: Expert social media marketing management with content creation, contract search and procurement intelligence with pre-qualified opportunities, and international business solutions including partner sourcing and cross-border coordination.'
    },
    {
      id: 'marketing-plans',
      question: 'What are the different marketing plans?',
      answer: 'Our three plans are: Basic (1 platform, 2 weekly stories & 2 posts, monthly reporting), Normal (2 platforms, 4 weekly stories + 3 posts + 1 reel every 2 weeks, twice-monthly reporting), and Pro (full strategy, 4 weekly stories + 4 posts + 2 reels/week, weekly reporting).'
    },
    {
      id: 'remote-talent',
      question: 'Why remote talent?',
      answer: 'Remote talent allows us to access the best expertise globally while keeping costs competitive. Our remote professionals are fully vetted, reliable, and dedicated to delivering exceptional results for your business.'
    },
    {
      id: 'timeline',
      question: 'How long does it take to see results?',
      answer: 'Results vary by service. For marketing, most clients see engagement growth within 4-6 weeks. For contract sourcing, qualified opportunities typically appear within 2-3 weeks. International partnerships can be established within 1-2 months depending on complexity.'
    },
    {
      id: 'pricing',
      question: 'How is pricing determined?',
      answer: 'Pricing depends on the service and scope. Marketing plans are tiered (Basic, Normal, Pro). Contract sourcing and international services are customized based on your specific needs. Contact us for a personalized quote.'
    },
    {
      id: 'countries',
      question: 'Which countries do you serve?',
      answer: 'We currently serve clients across 15+ countries with active partnerships in multiple regions across North, Central, and South America, as well as selected European markets. Contact us to confirm service availability for your location.'
    },
    {
      id: 'verification',
      question: 'How do you verify partners and contracts?',
      answer: 'All partners undergo thorough pre-qualification verification including background checks, financial stability assessment, references validation, and compliance verification. Contracts are sourced from verified databases and reviewed by our expert team.'
    },
    {
      id: 'support',
      question: 'What kind of support do you provide?',
      answer: 'We provide dedicated expert support including strategy consultation, performance reporting, direct communication channels, and ongoing optimization. Your assigned expert (like Jonathan Acevedo) is your primary point of contact.'
    },
    {
      id: 'language',
      question: 'Do you support multiple languages?',
      answer: 'Yes! We provide services in English and Spanish. Our content creation can be adapted for different languages and cultural contexts. Contact us to discuss your specific language requirements.'
    },
    {
      id: 'contract-commitment',
      question: 'What are your contract terms?',
      answer: 'We offer flexible terms tailored to your needs. Typically, marketing services start with a minimum 3-month engagement to demonstrate results. Other services can be project-based. Contact us to discuss options that work for you.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div
              key={item.id}
              className="border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 transition-all duration-300 group"
            >
              <button
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className="w-full px-6 py-4 bg-slate-800/50 hover:bg-slate-800 transition-colors duration-300 flex items-center justify-between gap-4"
              >
                <h3 className="text-left font-semibold text-white text-lg group-hover:text-cyan-400 transition-colors duration-300">
                  {item.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-cyan-400 flex-shrink-0 transition-transform duration-300 ${
                    expandedId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedId === item.id && (
                <div className="px-6 py-4 bg-gradient-to-r from-slate-800/30 to-slate-900/30 border-t border-slate-700 animate-fade-in">
                  <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-slate-700 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Still have questions?</h3>
          <p className="text-gray-400">
            Contact our team directly via WhatsApp for personalized assistance
          </p>
          <a
            href="https://wa.me/14359154185?text=I%20have%20a%20question%20about%20Sky%20Services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
