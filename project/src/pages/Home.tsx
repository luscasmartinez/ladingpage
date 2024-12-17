import React from 'react';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio/Portfolio';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
}