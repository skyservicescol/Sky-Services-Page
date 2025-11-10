import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MarketingPlans from '../components/MarketingPlans';
import Services from '../components/Services';
import Alliances from '../components/Alliances';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
    </>
  );
}
