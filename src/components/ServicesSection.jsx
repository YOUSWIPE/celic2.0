import React from 'react';
import { DoorOpen, Key, Shield, Check } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: DoorOpen,
      title: 'Türöffnung',
      description: '24/7 Notdienst bei ausgesperrten Türen',
      features: ['Schnelle Anfahrt', 'Beschädigungsfreie Öffnung', 'Faire Festpreise'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    },
    {
      icon: Key,
      title: 'Schlüssel nachmachen',
      description: 'Präzise Schlüsselkopien aller Art',
      features: ['Alle Schlüsseltypen', 'Sofortservice', 'Höchste Qualität'],
      image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&h=600&fit=crop'
    },
    {
      icon: Shield,
      title: 'Sicherheitstechnik',
      description: 'Moderne Sicherheitslösungen',
      features: ['Einbruchschutz', 'Elektronische Schlösser', 'Beratung & Installation'],
      image: 'https://images.unsplash.com/photo-1614064745033-d5cd92a6e5c7?w=800&h=600&fit=crop'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Unsere Dienstleistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professionelle Schlüsseldienst-Lösungen für Privat- und Geschäftskunden in Wien und Umgebung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <div className="w-14 h-14 bg-red-700 rounded-full flex items-center justify-center mb-3">
                        <IconComponent size={28} />
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-lg">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Check size={20} className="text-red-700 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;