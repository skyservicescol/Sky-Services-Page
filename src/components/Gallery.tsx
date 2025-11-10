import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  images: string[];
}

export default function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({
    1: 0,
    2: 0,
    3: 0
  });

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Marketing',
      category: 'Social Media Management & Content Creation',
      images: [
        'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 2,
      title: 'Contract Sourcing',
      category: 'Contract Intelligence & Procurement',
      images: [
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 3,
      title: 'International Hiring',
      category: 'International Business Solutions',
      images: [
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    }
  ];

  const handlePrev = (itemId: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [itemId]: prev[itemId] === 0 ? portfolioItems.find(item => item.id === itemId)!.images.length - 1 : prev[itemId] - 1
    }));
  };

  const handleNext = (itemId: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [itemId]: prev[itemId] === portfolioItems.find(item => item.id === itemId)!.images.length - 1 ? 0 : prev[itemId] + 1
    }));
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Showcase of our professional services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group">
              <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 hover:border-cyan-500 transition-all duration-300">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900">
                  <img
                    src={item.images[currentImageIndex[item.id]]}
                    alt={`${item.title} - Image ${currentImageIndex[item.id] + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                  <button
                    onClick={() => handlePrev(item.id)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-cyan-500/30 hover:bg-cyan-500/50 rounded-full transition-all duration-300 transform hover:scale-110 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft size={20} className="text-white" />
                  </button>

                  <button
                    onClick={() => handleNext(item.id)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-cyan-500/30 hover:bg-cyan-500/50 rounded-full transition-all duration-300 transform hover:scale-110 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight size={20} className="text-white" />
                  </button>

                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {item.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(prev => ({ ...prev, [item.id]: idx }))}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex[item.id] ? 'w-6 bg-cyan-400' : 'w-1.5 bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.category}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    {currentImageIndex[item.id] + 1} / {item.images.length}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
