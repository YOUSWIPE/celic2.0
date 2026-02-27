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
import WhatsAppButton from '../components/WhatsAppButton';
import Preloader from '../components/Preloader';
import CustomCursor from '../components/CustomCursor';
import { Toaster } from '../components/ui/toaster';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check theme on mount
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Scroll reveal observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Once revealed, we can stop observing it
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with reveal classes
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-scale');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [loading]); // Re-run after preloader is gone

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className={`min-h-screen bg-background text-foreground transition-all duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
        <KarriereSection />
        <Footer />
        <WhatsAppButton />
        <CustomCursor />
        <Toaster />
      </div>
    </>
  );
};

export default HomePage;