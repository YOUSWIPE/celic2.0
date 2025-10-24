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
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-red-700">Celic</span>
              <span className="text-white"> GmbH</span>
            </div>
            <p className="text-gray-400 mb-4">
              Ihr zuverlässiger Schlüsseldienst in Wien seit über 15 Jahren.
            </p>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="tel:+4312345678" className="hover:text-red-700 transition-colors">
                  +43 1 234 5678
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:info@celic-gmbh.at" className="hover:text-red-700 transition-colors">
                  info@celic-gmbh.at
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-red-700 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-red-700 transition-colors">
                  Dienstleistungen
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-red-700 transition-colors">
                  Über uns
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('team')} className="text-gray-400 hover:text-red-700 transition-colors">
                  Team
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Dienstleistungen</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Türöffnung</li>
              <li>Schlüssel nachmachen</li>
              <li>Sicherheitstechnik</li>
              <li>Notdienst 24/7</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <div>
                  Musterstraße 123<br />
                  1010 Wien<br />
                  Österreich
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2025 Celic GmbH. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-red-700 transition-colors">
                Datenschutz
              </a>
              <a href="#" className="hover:text-red-700 transition-colors">
                Impressum
              </a>
              <a href="#" className="hover:text-red-700 transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;