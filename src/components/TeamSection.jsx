import React from 'react';

const TeamSection = () => {
  const team = [
    {
      name: 'Stefan Müller',
      role: 'Geschäftsführer',
      description: '15+ Jahre Erfahrung im Schlüsseldienst. Spezialist für Sicherheitstechnik und Notöffnungen.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      skills: ['Sicherheitstechnik', 'Beratung']
    },
    {
      name: 'Maria Kovač',
      role: 'Senior Technikerin',
      description: 'Expertin für elektronische Schlösser und moderne Zutrittssysteme. 10 Jahre Berufserfahrung.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
      skills: ['Elektronik', 'Installation']
    },
    {
      name: 'Thomas Weber',
      role: 'Notdienst-Spezialist',
      description: 'Unser 24/7 Notdienst-Experte. Schnelle Türöffnungen und Reparaturen sind seine Spezialtät.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      skills: ['Notdienst', 'Reparatur']
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Unser Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lernen Sie die Experten kennen, die Ihnen in Notfällen zur Seite stehen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white w-full">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-red-400 text-lg font-semibold mb-3">{member.role}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;