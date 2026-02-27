import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#131515] border-b border-primary/5">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="text-white/80 font-medium">
            Ihr zuverlässiger Schlüsseldienst in Wien: <span className="font-extrabold text-primary">+43 660 3022555</span>
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-sm"
          >
            Sicherheitsberatung
          </button>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-header py-2 shadow-lg shadow-primary/5' : 'bg-transparent py-6'
        }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="text-3xl font-bold transition-transform duration-300 group-hover:scale-105">
                <img src='logo-no-bg.png' alt="Logo" className="h-12 w-auto" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Dienstleistungen', id: 'services' },
                { label: 'Über uns', id: 'about' },
                { label: 'Team', id: 'team' },
                { label: 'Bewertungen', id: 'testimonials' },
                { label: 'Kontakt', id: 'contact' },
                { label: 'Karriere', id: 'karriere' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-all duration-300 font-medium relative group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="ml-4 bg-primary text-white premium-button hover:bg-emerald-900"
              >
                Jetzt Anfragen
              </button>
            </nav>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button
                className="lg:hidden text-gray-700 dark:text-gray-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 space-y-3 bg-background/95 dark:bg-black/95 backdrop-blur-lg px-4 rounded-2xl border border-border">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Dienstleistungen', id: 'services' },
                { label: 'Über uns', id: 'about' },
                { label: 'Team', id: 'team' },
                { label: 'Bewertungen', id: 'testimonials' },
                { label: 'Kontakt', id: 'contact' },
                { label: 'Karriere', id: 'karriere' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-foreground/70 dark:text-gray-300 hover:text-primary transition-colors font-medium py-3 border-b border-border/50 last:border-none"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;