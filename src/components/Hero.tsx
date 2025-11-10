import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Professional Marketing Management',
      subtitle: 'Expert social media strategy and content creation for your business',
      cta: 'Explore Plans',
      ctaAction: '#marketing-plans',
      gradient: 'from-cyan-500/20 to-blue-600/20',
      image: 'https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: 'Contract Intelligence & Sourcing',
      subtitle: 'Verified procurement opportunities with expert guidance',
      cta: 'Learn More',
      ctaAction: 'whatsapp',
      gradient: 'from-blue-600/20 to-indigo-600/20',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: 'International Business Solutions',
      subtitle: 'Connect with reliable partners across multiple markets',
      cta: 'Get Started',
      ctaAction: 'whatsapp',
      gradient: 'from-indigo-600/20 to-cyan-500/20',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 mix-blend-multiply"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="space-y-4 animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {slides[currentSlide].subtitle}
                </p>
              </div>

              <div className="flex gap-4">
                {slides[currentSlide].ctaAction === 'whatsapp' ? (
                  <a
                    href="https://wa.me/14359154185?text=I%20want%20to%20learn%20more%20about%20Sky%20Services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    {slides[currentSlide].cta}
                  </a>
                ) : (
                  <button
                    onClick={() => document.querySelector(slides[currentSlide].ctaAction)?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    {slides[currentSlide].cta}
                  </button>
                )}
                <button
                  onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Explore Services
                </button>
              </div>

              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'w-8 bg-cyan-400' : 'w-2 bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative w-full aspect-square">
                <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} rounded-3xl blur-3xl animate-pulse`}></div>
                <div className="absolute inset-0 rounded-3xl border border-cyan-500/20 overflow-hidden">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="text-6xl font-bold text-cyan-400 drop-shadow-2xl">SKY</div>
                      <div className="text-2xl font-semibold text-white drop-shadow-lg">SERVICES</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-full transition-all duration-300 transform hover:scale-110"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-full transition-all duration-300 transform hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
}
