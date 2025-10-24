import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import KarriereSection from '../components/KarriereSection';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/toaster';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <KarriereSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default HomePage;