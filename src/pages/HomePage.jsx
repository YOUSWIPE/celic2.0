import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Preloader from '../components/Preloader';
import CustomCursor from '../components/CustomCursor';
import { Toaster } from '../components/ui/toaster';
import { Link } from 'react-router-dom';
import { Wrench, ShieldCheck, Construction, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/use-scroll-reveal';
import MagneticButton from '../components/MagneticButton';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useScrollReveal([loading]);

  useEffect(() => {
    // Check theme on mount
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className={`min-h-screen bg-background text-foreground transition-all duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <HeroSection />

        {/* Services Teaser */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold mb-8 italic text-primary">Unsere Leistungen</h2>
            <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
              Von der Notöffnung bis zum individuellen Metallbau – wir bieten erstklassigen Service in Wien.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Wrench,
                  title: 'Reparatur',
                  desc: 'Fachmännische Instandsetzung von Türen und Fenstern.',
                  delay: '1'
                },
                {
                  icon: ShieldCheck,
                  title: 'Sicherheit',
                  desc: 'Moderne Schließanlagen und Einbruchschutz.',
                  delay: '2'
                },
                {
                  icon: Construction,
                  title: 'Anfertigung',
                  desc: 'Individueller Metallbau nach Ihren Wünschen.',
                  delay: '3'
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className={`premium-card p-10 group hover:border-primary/30 transition-all duration-500 bg-card/50 backdrop-blur-sm reveal-up reveal-delay-${item.delay}`}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-extrabold mb-4 tracking-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-foreground/50 text-base leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <div className="w-12 h-1 bg-primary/20 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>

            <MagneticButton strength={0.2}>
              <Link to="/services" className="bg-primary hover:bg-emerald-600 text-white px-12 py-5 rounded-full font-bold transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3 shadow-xl">
                <span>Alle Leistungen entdecken</span>
                <ArrowRight size={20} />
              </Link>
            </MagneticButton>
          </div>
        </section>

        {/* About Teaser */}
        <section className="py-24">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold mb-6">Über <span className="text-primary italic">Celic GmbH</span></h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Seit über 20 Jahren sind wir Ihr verlässlicher Partner in Wien. Als Familienunternehmen stehen Qualität und Kundenzufriedenheit für uns an erster Stelle.
              </p>
              <Link to="/about" className="text-primary font-bold hover:underline flex items-center space-x-2">
                <span>Mehr über unsere Geschichte</span>
                <div className="w-8 h-px bg-primary"></div>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop" alt="Celic Team" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </section>

        {/* Career Teaser */}
        <section className="py-24 bg-[#131515] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Werde Teil unseres <span className="text-primary italic">Teams!</span></h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto">
              Wir suchen motivierte Schlosser und Lehrlinge, die mit uns die Sicherheit Wiens gestalten wollen.
            </p>
            <Link to="/karriere" className="bg-white text-black hover:bg-primary hover:text-white px-10 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 inline-block">
              Offene Stellen ansehen
            </Link>
          </div>
        </section>

        <ContactSection />

        <Footer />
        <WhatsAppButton />
        <CustomCursor />
        <Toaster />
      </div>
    </>
  );
};

export default HomePage;