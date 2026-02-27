import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock form submission
    toast({
      title: 'Nachricht gesendet!',
      description: 'Wir melden uns schnellstmöglich bei Ihnen zurück.',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-background mesh-gradient">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24 reveal-up">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest rounded-full mb-6">
            Ihr Fachmann vor Ort
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-foreground tracking-tight">
            Kontaktieren <span className="text-primary italic">Sie uns</span>
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-medium">
            Wir sind für Sie da. Kontaktieren Sie uns für kompetente Beratungen und erstklassigen Service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Contact Information */}
          <div className="space-y-12 reveal-left">
            <div>
              <h3 className="text-3xl font-extrabold mb-10 text-foreground tracking-tight">Kontaktinformationen</h3>

              <div className="space-y-8">
                {[
                  { icon: Phone, title: 'Telefon', value: '+43 660 3022555', href: 'tel:+436603022555' },
                  { icon: Mail, title: 'E-Mail', value: 'schlosserei@celic.at', href: 'mailto:schlosserei@celic.at' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-6 group">
                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300">
                      <item.icon size={28} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-1">{item.title}</h4>
                      <a href={item.href} className="text-2xl font-extrabold text-foreground hover:text-primary transition-colors tracking-tight">
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={28} className="text-primary" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-2">Büro</h4>
                      <p className="text-lg font-bold text-foreground leading-tight">
                        Adelheid-Popp-Gasse 16/1c<br />
                        1220 Wien, Österreich
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-2">Werkstatt</h4>
                      <p className="text-lg font-bold text-foreground leading-tight">
                        Bahnstraße 4<br />
                        2283 Obersiebenbrunn
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock size={28} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-1">Öffnungszeiten</h4>
                    <p className="text-lg font-bold text-foreground">
                      Mo-Do: 08:00 - 17:00 | Fr: 08:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-2xl h-80 border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.7685185032087!2d16.457536077267804!3d48.23033177125394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476cfbe010477959%3A0x49dddd8ffb37a99!2sSchlosserei%20Celic%20GmbH!5e0!3m2!1sde!2sat!4v1761302221533!5m2!1sde!2sat"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Celic GmbH Standort"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="premium-card p-12 bg-card border-none dark:border dark:border-white/5 reveal-scale reveal-delay-2">
            <h3 className="text-3xl font-extrabold mb-4 text-foreground tracking-tight">Nachricht senden</h3>
            <p className="text-foreground/50 mb-10 font-medium text-lg">Hinterlassen Sie uns eine Nachricht, wir melden uns umgehend.</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-bold text-foreground/40 uppercase tracking-widest ml-1">Name *</label>
                  <input
                    type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-6 py-4 bg-background border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all font-bold placeholder:text-foreground/20 text-foreground"
                    placeholder="Ihr Name"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-bold text-foreground/40 uppercase tracking-widest ml-1">E-Mail *</label>
                  <input
                    type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-6 py-4 bg-background border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all font-bold placeholder:text-foreground/20 text-foreground"
                    placeholder="E-Mail Adresse"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="phone" className="text-sm font-bold text-foreground/40 uppercase tracking-widest ml-1">Telefon</label>
                <input
                  type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                  className="w-full px-6 py-4 bg-background border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all font-bold placeholder:text-foreground/20 text-foreground"
                  placeholder="+43 123 456 789"
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-bold text-foreground/40 uppercase tracking-widest ml-1">Nachricht *</label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleChange} required rows="5"
                  className="w-full px-6 py-4 bg-background border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all font-bold placeholder:text-foreground/20 text-foreground resize-none"
                  placeholder="Wie können wir Ihnen helfen?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white premium-button py-5 text-xl font-bold hover:bg-emerald-950"
              >
                Anfrage absenden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;