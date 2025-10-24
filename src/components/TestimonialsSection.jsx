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
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Was unsere Kunden sagen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <Quote size={40} className="text-red-700 mb-4" />
              <p className="text-lg text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t border-gray-700 pt-4">
                <p className="font-semibold text-white">- {testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;