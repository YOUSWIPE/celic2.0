import React from 'react';
import { Clock, Users, Award, Shield } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Immer für Sie da'
    },
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Über Celic GmbH
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seit über 15 Jahren sind wir Ihr vertrauensvoller Partner für alle Schlüsseldienst-Angelegenheiten in Wien. Unser erfahrenes Team steht Ihnen rund um die Uhr zur Verfügung.
          </p>
        </div>

        {/* Why Celic GmbH */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Warum Celic GmbH?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2 text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600 text-lg">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-lg text-gray-700">
                  <div className="w-2 h-2 bg-red-700 rounded-full mr-4"></div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop"
              alt="Celic GmbH Team bei der Arbeit"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Professional Equipment */}
        <div className="bg-gray-900 text-white rounded-lg p-12 mb-16">
          <h3 className="text-3xl font-bold mb-4">Professionelle Ausrüstung</h3>
          <p className="text-xl text-gray-300">
            Mit modernster Technik und jahrelanger Erfahrung lösen wir jedes Schloss- und Sicherheitsproblem schnell und zuverlässig.
          </p>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Unser Versprechen</h3>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
            Jeder unserer Techniker ist vollständig versichert, betrieblich überprüft und regelmäßig geschult. Wir garantieren professionelle Arbeit zu fairen Preisen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="w-20 h-20 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={40} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">{cert.title}</h4>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;