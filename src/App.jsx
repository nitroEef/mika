import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/Herosection';
import Services from './Components/Services';
import BeforeAfter from './Components/Beforeafter';
import Testimonials from './Components/Testimonial';
import Contact from './Components/Contact';
import Aboutme from './Components/Aboutme';
import Footer from './Components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Header />

      <HeroSection />
      <Aboutme />
      <Services />
      <BeforeAfter />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
