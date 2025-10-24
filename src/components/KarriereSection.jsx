import React, { useState } from 'react';
import { Briefcase, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const KarriereSection = () => {
  const { toast } = useToast();
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    toast({
      title: 'Bewerbung eingegangen!',
      description: 'Vielen Dank für Ihr Interesse. Wir melden uns bald bei Ihnen.',
    });

    setApplicationData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="karriere" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Karriere bei Celic GmbH
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Werden Sie Teil unseres Teams!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Job Listing */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <Briefcase size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Schlüsseldienst-Techniker (m/w/d)
                  </h3>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span className="px-3 py-1 bg-gray-100 rounded-full">Vollzeit</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full">Wien</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full">Sofort</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Ihre Aufgaben:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Türöffnungen und Reparaturen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Installation von Sicherheitstechnik</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Kundenberatung vor Ort</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Wir bieten:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Attraktives Gehalt</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Firmenwagen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Weiterbildungsmöglichkeiten</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => {
                  const element = document.getElementById('application-form');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Jetzt bewerben
              </button>
            </div>
          </div>

          {/* Application Info */}
          <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
            <p className="text-lg">
              Keine passende Stelle gefunden? Senden Sie uns gerne eine Initiativbewerbung!
            </p>
          </div>

          {/* Application Form */}
          <div id="application-form" className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Send size={28} className="text-red-700" />
              <h3 className="text-2xl font-bold text-gray-900">Initiativbewerbung senden</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="app-name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="app-name"
                  name="name"
                  value={applicationData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label htmlFor="app-email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="app-email"
                  name="email"
                  value={applicationData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all"
                  placeholder="ihre.email@beispiel.at"
                />
              </div>

              <div>
                <label htmlFor="app-message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Anschreiben *
                </label>
                <textarea
                  id="app-message"
                  name="message"
                  value={applicationData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all resize-none"
                  placeholder="Erzählen Sie uns etwas über sich und Ihre Erfahrungen..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Bewerbung absenden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KarriereSection;