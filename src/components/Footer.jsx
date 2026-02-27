import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-emerald-50/30 relative overflow-hidden border-t border-primary/10 pt-32 pb-12">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-grid opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 reveal-up">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-3xl font-extrabold tracking-tight">
              <span className='text-gray-900'>Schlosserei </span>
              <span className="text-primary italic">Celic</span>
              <span className="text-gray-900"> GmbH</span>
            </div>
            <p className="text-gray-500 font-medium leading-relaxed">
              Ihr zuverlässiger Partner für Sicherheitstechnik und Schlosserei in Wien – seit über zwei Jahrzehnten.
            </p>
            <div className="flex space-x-4">
              {/* Add social icons or trust badges here if needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Navigation</h3>
            <ul className="space-y-4">
              {['home', 'services', 'about', 'team'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-gray-600 font-bold hover:text-primary transition-colors capitalize text-lg"
                  >
                    {id === 'home' ? 'Startseite' : id === 'services' ? 'Leistungen' : id === 'about' ? 'Über Uns' : 'Unser Team'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Kontakt</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-gray-600 font-bold">
                <Phone size={20} className="text-primary" />
                <a href="tel:+436603022555" className="hover:text-primary transition-colors">+43 660 3022555</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 font-bold">
                <Mail size={20} className="text-primary" />
                <a href="mailto:info@celic-gmbh.at" className="hover:text-primary transition-colors">info@celic-gmbh.at</a>
              </div>
              <div className="flex items-start space-x-3 text-gray-600 font-bold leading-tight">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Adelheid-Popp-Gasse 16/1c<br />1220 Wien</span>
              </div>
            </div>
          </div>

          {/* Trust Badge / CTA */}
          <div className="bg-emerald-50 p-8 rounded-3xl space-y-4">
            <h4 className="text-primary font-extrabold text-xl">24/7 Notdienst</h4>
            <p className="text-emerald-800/70 font-bold text-sm leading-relaxed">
              Wir sind jederzeit erreichbar. Rufen Sie uns im Notfall direkt an.
            </p>
            <a href="tel:+436603022555" className="inline-block bg-primary text-white premium-button text-sm w-full text-center py-3">
              Sofort-Hilfe
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 font-bold text-sm">© 2025 Celic GmbH. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-8">
              {['Datenschutz', 'Impressum', 'AGB'].map((label) => (
                <a key={label} href="#" className="text-gray-400 font-bold text-sm hover:text-primary transition-colors underline decoration-gray-200 underline-offset-4">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;