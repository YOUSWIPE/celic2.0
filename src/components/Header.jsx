import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, ShieldCheck, Moon, Sun } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import MagneticButton from './MagneticButton';

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

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Dienstleistungen', path: '/services' },
    { label: 'Über uns', path: '/about' },
    { label: 'Team', path: '/team' },
    { label: 'Kontakt', path: '/kontakt' },
    { label: 'Karriere', path: '/karriere' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#131515] border-b border-primary/5">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="text-white/80 font-medium">
            Ihr zuverlässiger Schlüsseldienst in Wien: <span className="font-extrabold text-primary">+43 660 3022555</span>
          </div>
          <Link
            to="/kontakt"
            className="bg-primary hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-sm"
          >
            Sicherheitsberatung
          </Link>
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
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <MagneticButton key={item.path} strength={0.4}>
                  <Link
                    key={item.label}
                    to={item.path}
                    className="text-foreground/70 font-bold hover:text-primary transition-all text-lg uppercase tracking-wider relative group"
                    style={{ fontFamily: "'Bank Gothic', sans-serif" }}
                  >
                    {item.label}
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </MagneticButton>
              ))}
              <MagneticButton strength={0.2}>
                <Link
                  to="/kontakt"
                  className="ml-4 bg-primary text-white premium-button hover:bg-emerald-900"
                >
                  Jetzt Anfragen
                </Link>
              </MagneticButton>
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
            <nav className="lg:hidden mt-6 pb-6 space-y-2 bg-background/98 dark:bg-black/98 backdrop-blur-xl px-4 rounded-3xl border border-border shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-4 text-xl font-bold text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest border-b border-border/50 last:border-none"
                  style={{ fontFamily: "'Bank Gothic', sans-serif" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;