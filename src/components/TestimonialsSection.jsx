import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: 'Sehr schneller und professioneller Service. Innerhalb von 20 Minuten war das Problem gelöst!',
      author: 'Maria K.',
      location: 'Wien'
    },
    {
      text: 'Faire Preise und keine versteckten Kosten. Kann ich nur weiterempfehlen!',
      author: 'Thomas H.',
      location: 'Wien'
    },
    {
      text: 'Kompetente Beratung und saubere Arbeit. Vielen Dank für die schnelle Hilfe!',
      author: 'Anna S.',
      location: 'Wien'
    }
  ];

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-background mesh-gradient">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24 reveal-up">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest rounded-full mb-6">
            Kundenmeinungen
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-foreground tracking-tight">
            Was unsere <span className="text-primary italic">Kunden sagen</span>
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`premium-card p-10 relative reveal-scale reveal-delay-${index + 1}`}
            >
              <Quote size={48} className="text-primary/10 absolute top-10 right-10" />
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-secondary fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl text-foreground/70 mb-8 italic leading-relaxed font-medium">"{testimonial.text}"</p>
              <div className="flex items-center space-x-4 border-t border-gray-100 pt-8">
                <div className="w-12 h-12 bg-[#131515] rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-extrabold text-foreground tracking-tight">{testimonial.author}</p>
                  <p className="text-foreground/40 text-sm font-bold uppercase tracking-widest">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;