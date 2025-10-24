import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

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
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="text-gray-700">
            Ihr zuverlässiger Schlüsseldienst in Wien: <span className="font-semibold">+43 1 234 5678</span>
          </div>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-r-full transition-all duration-300 transform hover:scale-105"
          >
            Jetzt Anfragen!
          </button>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-3xl font-bold">
                <span className="text-red-700">Celic</span>
                <span className="text-gray-800"> GmbH</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-700 transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-red-700 transition-colors font-medium">
                Dienstleistungen
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-red-700 transition-colors font-medium">
                Über uns
              </button>
              <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-red-700 transition-colors font-medium">
                Team
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-red-700 transition-colors font-medium">
                Bewertungen
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-700 transition-colors font-medium">
                Kontakt
              </button>
              <button onClick={() => scrollToSection('karriere')} className="text-gray-700 hover:text-red-700 transition-colors font-medium">
                Karriere
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-red-700 transition-colors font-medium py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-red-700 transition-colors font-medium py-2">
                Dienstleistungen
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-red-700 transition-colors font-medium py-2">
                Über uns
              </button>
              <button onClick={() => scrollToSection('team')} className="block w-full text-left text-gray-700 hover:text-red-700 transition-colors font-medium py-2">
                Team
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-700 hover:text-red-700 transition-colors font-medium py-2">
                Bewertungen
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-red-700 transition-colors font-medium py-2">
                Kontakt
              </button>
              <button onClick={() => scrollToSection('karriere')} className="block w-full text-left text-gray-700 hover:text-red-700 transition-colors font-medium py-2">
                Karriere
              </button>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;