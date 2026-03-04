import React, { useState } from 'react';
import { DoorOpen, Key, Shield, Check, X, Clock, Euro, ShieldCheck } from 'lucide-react';
import MagneticButton from './MagneticButton';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: DoorOpen,
      title: 'Reparatur',
      description: 'Fachmännische Instandsetzung von Türen, Fenstern und Toren.',
      details: 'Unsere Experten reparieren Einbruchschäden, verschlissene Beschläge und defekte Schlösser. Wir sorgen dafür, dass Ihre Zugänge wieder reibungslos und sicher funktionieren.',
      features: ['Türreparatur', 'Fensterinstandsetzung', 'Tore & Gitter', 'Beschlagswechsel'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      price: ''
    },
    {
      icon: Key,
      title: 'Anfertigung',
      description: 'Individuelle Metallbau-Lösungen nach Maß für Ihr Zuhause.',
      details: 'Vom eleganten Handlauf bis zum massiven Sicherheitstor – wir fertigen individuelle Metallkonstruktionen, die höchste Sicherheitsansprüche mit ästhetischem Design verbinden.',
      features: ['Handläufe & Zäune', 'Sicherheitsgitter', 'Spezialanfertigungen', 'Montageservice'],
      image: 'https://images.unsplash.com/photo-1580047750144-2c7790adf461?auto=format&fit=crop&q=80&w=800',
      price: ''
    },
    {
      icon: Shield,
      title: 'Sicherheitstechnik',
      description: 'Ganzheitliche Konzepte für optimalen Einbruchschutz.',
      details: 'Wir analysieren Schwachstellen und installieren hochmoderne Schließanlagen, Sicherheitstüren und Zusatzsicherungen namhafter Hersteller.',
      features: ['Schließanlagen', 'Sicherheitstüren', 'Brandschutztüren', 'Zutrittskontrolle'],
      image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&h=600&fit=crop',
      price: ''
    }
  ];

  const ServiceModal = ({ service, onClose }) => {
    if (!service) return null;
    const Icon = service.icon;

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#131515]/80 backdrop-blur-md animate-[revealScale_0.3s_ease_out]">
        <div className="bg-background border border-white/10 rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full relative flex flex-col md:flex-row">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/80 dark:bg-black/50 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all duration-300 text-foreground"
          >
            <X size={20} />
          </button>

          <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          </div>

          <div className="md:w-1/2 p-8 md:p-12 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Icon size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-foreground tracking-tight">{service.title}</h3>
                <p className="text-primary font-bold">{service.price}</p>
              </div>
            </div>

            <p className="text-foreground/70 text-lg leading-relaxed font-medium">
              {service.details}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((f, i) => (
                <div key={i} className="flex items-center space-x-3 text-foreground font-bold">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check size={14} className="text-primary" />
                  </div>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a
                href="tel:+436603022555"
                className="block w-full text-center bg-primary text-white premium-button py-4 text-xl font-bold hover:bg-emerald-900"
              >
                Kostenlos Beraten Lassen
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="py-32 relative overflow-hidden bg-transparent">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-dot-grid opacity-30"></div>
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24 reveal-up">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold text-sm uppercase tracking-widest rounded-full mb-6 border border-primary/10">
            Was wir bieten
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-foreground tracking-tight">
            Unsere <span className="text-primary italic border-b-4 border-secondary/30">Dienstleistungen</span>
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto mb-8 rounded-full shadow-[0_4px_10px_rgba(217,119,6,0.3)]"></div>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-medium">
            Professionelle Schlosserei-Dienstleistungen in Wien. Wir sind Ihr Partner für alles rund um Schlösser, Schlüssel und Sicherheit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`premium-card group reveal-up reveal-delay-${index + 1} hover:border-primary/20 bg-card/80 backdrop-blur-sm`}
              >
                <div className="relative h-64 overflow-hidden border-b-4 border-primary/5">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-xl group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <IconComponent size={32} className="text-white" />
                  </div>
                </div>
                <div className="p-10 bg-card">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-extrabold text-foreground group-hover:text-primary transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <span className="text-primary font-bold text-sm bg-primary/5 px-3 py-1 rounded-lg border border-primary/5">{service.price}</span>
                  </div>
                  <p className="text-foreground/70 mb-8 font-medium leading-relaxed">
                    {service.description}
                  </p>
                  <MagneticButton strength={0.15} className="w-full">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="w-full flex items-center justify-center space-x-3 bg-foreground text-background font-extrabold uppercase tracking-widest text-base py-4 rounded-xl border border-white/10 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                    >
                      <span>Details & Preise</span>
                      <div className="w-6 h-px bg-current"></div>
                    </button>
                  </MagneticButton>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedService && <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />}
    </section>
  );
};

export default ServicesSection;