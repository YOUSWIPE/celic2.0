import React from 'react';

const TeamSection = () => {
  const team = [
    {
      name: 'Stefan Müller',
      role: 'Geschäftsführer',
      description: '15+ Jahre Erfahrung im Schlüsseldienst. Spezialist für Sicherheitstechnik und Montagen.',
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
      role: 'Sicherheits-Experte',
      description: 'Schnelle Türöffnungen und Reparaturen sind seine Spezialtät.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      skills: ['Montage', 'Reparatur']
    }
  ];

  return (
    <section id="team" className="py-32 relative overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-dot-grid opacity-30"></div>
      <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24 reveal-up">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest rounded-full mb-6">
            Experten vor Ort
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-foreground tracking-tight">
            Unser <span className="text-primary italic">Expertenteam</span>
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-medium">
            Lernen Sie die Profis kennen, die Ihnen in Wien und Umgebung mit Rat und Tat zur Seite stehen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className={`premium-card group reveal-up reveal-delay-${index + 1}`}
            >
              <div className="relative h-96 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131515] via-[#131515]/20 to-transparent flex items-end">
                  <div className="p-8 text-white w-full">
                    <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">{member.role}</p>
                    <h3 className="text-3xl font-extrabold mb-1 tracking-tight">{member.name}</h3>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-card">
                <p className="text-foreground/70 mb-6 font-medium leading-relaxed">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider border border-primary/5"
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