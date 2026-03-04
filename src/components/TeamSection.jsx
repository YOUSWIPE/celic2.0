import React, { useState } from 'react';

const TeamMember = ({ member, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      key={index}
      className={`premium-card group reveal-up reveal-delay-${index + 1}`}
    >
      <div className="relative h-100 overflow-hidden bg-muted/20 aspect-[3/4]">
        {!imageLoaded && (
          <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-r from-muted/20 via-muted/40 to-muted/20 bg-[length:200%_100%] animate-shimmer"></div>
        )}

        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 ${imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#131515] via-[#131515]/20 to-transparent flex items-end">
          <div className="p-8 text-white w-full">
            <p className="font-bold text-sm uppercase tracking-widest mb-2">{member.role}</p>
            <h3 className="text-green-600 text-3xl font-extrabold mb-1 tracking-tight">{member.name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const team = [
    {
      name: 'Danijel Celic',
      role: 'Geschäftsführer',
      description: '',
      image: '/images/Danijel.webp',
      skills: []
    },
    {
      name: 'Suzana Celic',
      role: 'Assistentin der Geschäftsführung',
      description: '',
      image: '/images/Suzana.webp',
      skills: []
    },
    {
      name: 'Anja Celic',
      role: 'Assistentin der Geschäftsführung',
      description: '',
      image: '/images/Anja.webp',
      skills: []
    },
    {
      name: 'Nebojsa Cikojevic',
      role: 'Schlosser',
      description: '',
      image: '/images/Nebojsa.webp',
      skills: []
    },
    {
      name: 'David Markovic',
      role: 'Schlosser',
      description: '',
      image: '/images/David.webp',
      skills: []
    },
    {
      name: 'Slobodan Walchshofer',
      role: 'Schlosser',
      description: '',
      image: '/images/Slobodan.webp',
      skills: []
    },
    {
      name: 'Andrej Celic',
      role: 'Lehrling',
      description: '',
      image: '/images/Andrej.webp',
      skills: []
    },
    {
      name: 'Vladislav Undrul',
      role: 'Lehrling',
      description: '',
      image: '/images/Vladislav.webp',
      skills: []
    },
    {
      name: 'Charlie',
      role: 'Empfangschef',
      description: '',
      image: '/images/Charlie.webp',
      skills: []
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
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;