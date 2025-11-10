import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import MarketingPlans from './components/MarketingPlans';
import Services from './components/Services';
import Alliances from './components/Alliances';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sky Services — Social Media, Contract Sourcing & International Staffing</title>
        <meta
          name="description"
          content="Strategy, content, and staffing to help Utah businesses grow."
        />
        <link rel="canonical" href="https://www.skyservicescol.com/" />
      </Helmet>

      <div
        className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white"
        lang="en"
      >
        <Header />
        <Hero />
        <Services />
        <MarketingPlans />
        <Alliances />
        <About />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}

export default App;
