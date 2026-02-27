import React from 'react';
import { Clock, Users, Award, Shield, Check } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: 'Erfahrenes Team',
      description: 'Qualifizierte Experten'
    }
  ];

  const benefits = [
    'Transparente Preisgestaltung',
    'Schnelle Anfahrtszeiten',
    'Versicherungsschutz',
    'Kostenlose Beratung'
  ];

  const certifications = [
    {
      icon: Shield,
      title: 'Versichert',
      description: 'Vollständiger Versicherungsschutz'
    },
    {
      icon: Award,
      title: 'Zertifiziert',
      description: 'Geprüfte Qualifikationen'
    },
    {
      icon: Users,
      title: 'Erfahren',
      description: 'Langjährige Expertise'
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white">
      {/* Background Blobs */}
      <div className="absolute top-1/2 -left-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-float"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="lg:w-1/2 reveal-left">
            <div className="inline-block px-4 py-1.5 bg-emerald-50 text-primary font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Expertise & Vertrauen
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-gray-900 tracking-tight leading-tight">
              Seit über 20 Jahren Ihr <span className="text-primary italic">verlässlicher Partner</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Die Celic GmbH steht für Qualität, Sicherheit und transparente Preise. Als traditionsreiches Familienunternehmen in Wien verbinden wir handwerkliches Können mit modernster Sicherheitstechnik.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 group opacity-0 animate-[revealUp_0.8s_ease_forwards]"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Check size={18} className="text-primary group-hover:text-white" />
                  </div>
                  <span className="font-bold text-gray-800 tracking-tight">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-6 -right-6 w-full h-full bg-secondary/10 rounded-2xl -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
              alt="Celic GmbH Team"
              className="w-full h-full object-cover rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Why Celic GmbH Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={index}
                className="premium-card p-10 text-center hover:bg-emerald-50/30 opacity-0 animate-[revealScale_0.8s_ease_forwards]"
                style={{ animationDelay: `${0.6 + index * 0.15}s` }}
              >
                <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors">
                  <IconComponent size={40} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-2xl font-extrabold mb-4 text-gray-900">{cert.title}</h4>
                <p className="text-gray-600 font-medium leading-relaxed">{cert.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;