import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  companyLogo: string;
  content: string;
  rating: number;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [showImageModal, setShowImageModal] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Otto',
      title: 'CEO',
      company: 'Otto the Taper Drywall LLC',
      companyLogo: '/Logo Otto copy.avif',
      content: 'Working with Sky Services completely transformed my business presence. I never realized how much digital marketing and brand visibility could impact my company until we partnered with them. Now we\'re recognized throughout Cache Valley and beyond!',
      rating: 5
    },
    {
      id: 2,
      name: 'Freddy',
      title: 'Owner',
      company: 'FF Quality Fence LLC',
      companyLogo: '/logo FF Quall.jpg',
      content: 'Before Sky Services, I had no idea that building a strong online presence would make such a difference. Their team helped us establish our brand identity and now customers recognize us immediately. The increase in contract requests has been remarkable!',
      rating: 5
    },
    {
      id: 3,
      name: 'Rony Salala',
      title: 'Owner',
      company: 'Salala Painting LLC',
      companyLogo: '/salala painting.jpg',
      content: 'Sky Services opened my eyes to the power of digital branding. I never thought social media and professional marketing would bring so many opportunities, but the brand recognition we\'ve gained has directly translated into more high-value contracts for our painting business.',
      rating: 5
    },
    {
      id: 4,
      name: 'Martin',
      title: 'Co-partner',
      company: 'Salala Construction',
      companyLogo: '/image.png',
      content: 'The brand visibility and professional image Sky Services helped us create has been incredible. We went from being unknown to having clients specifically request us by name. Their understanding of how to position a construction company in the market is unmatched.',
      rating: 5
    }
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const handlePrev = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Trusted by businesses worldwide
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8 md:p-12 min-h-96">
            <div className="flex flex-col items-center mb-8">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button
                  onClick={() => setShowImageModal(true)}
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-cyan-500 bg-slate-700 shadow-2xl shadow-cyan-500/50 transform hover:scale-110 transition-transform duration-300 mb-6 cursor-pointer"
                >
                  <img
                    src={current.companyLogo}
                    alt={`${current.company} logo`}
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>
              <div className="flex gap-1 mb-2">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-500 font-semibold">{current.company}</p>
            </div>

            <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 italic text-center">
              "{current.content}"
            </blockquote>

            <div className="border-t border-slate-700 pt-6 text-center">
              <div>
                <p className="font-semibold text-white text-lg">{current.name}</p>
                <p className="text-cyan-400">{current.title}</p>
              </div>
            </div>

            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>

          <div className="flex gap-2 justify-center mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setAutoPlay(false);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {showImageModal && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setShowImageModal(false)}
          >
            <div className="relative max-w-2xl w-full">
              <button
                onClick={() => setShowImageModal(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-4xl"
              >
                ×
              </button>
              <img
                src={current.companyLogo}
                alt={`${current.company} logo`}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-white font-semibold text-xl">{current.company}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
