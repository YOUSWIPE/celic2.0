import React, { useState } from 'react';
import { Briefcase, Send, Check } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const JOBS = [
];

const KarriereSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('/api/contact', {
        ...applicationData,
        subject: `Initiativbewerbung von ${applicationData.name}`
      });

      toast({
        title: 'Bewerbung eingegangen!',
        description: 'Vielen Dank für Ihr Interesse. Wir melden uns bald bei Ihnen.',
      });

      setApplicationData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: 'Fehler beim Senden',
        description: 'Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="karriere" className="py-32 relative overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-dot-grid opacity-30"></div>
      <div className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] animate-float"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24 reveal-up">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-foreground tracking-tight">
            Karriere bei <span className="text-primary italic">Celic GmbH</span>
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-medium">
            Werden Sie Teil unseres dynamischen Teams und gestalten Sie die Sicherheit von morgen.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {JOBS.length > 0 ? (
            JOBS.map((job, index) => (
              <div
                key={index}
                className={`premium-card p-12 bg-card border-none dark:border dark:border-white/5 reveal-scale reveal-delay-${index + 1}`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center flex-shrink-0">
                      <Briefcase size={36} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-extrabold text-foreground mb-2 tracking-tight">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                        <span className="px-4 py-1.5 bg-primary/5 text-foreground rounded-full">{job.type}</span>
                        <span className="px-4 py-1.5 bg-primary/5 text-foreground rounded-full">{job.location}</span>
                        <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full">{job.availability}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-primary text-white premium-button px-10 py-4"
                  >
                    Jetzt bewerben
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h4 className="text-xl font-extrabold text-foreground tracking-tight">Ihre Aufgaben:</h4>
                    <ul className="space-y-4">
                      {job.tasks.map((task, i) => (
                        <li key={i} className="flex items-center text-foreground/70 font-medium">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <Check size={14} className="text-primary" />
                          </div>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xl font-extrabold text-foreground tracking-tight">Wir bieten:</h4>
                    <ul className="space-y-4">
                      {job.benefits.map((offer, i) => (
                        <li key={i} className="flex items-center text-foreground/70 font-medium">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <Check size={14} className="text-primary" />
                          </div>
                          {offer}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="premium-card p-12 bg-card/50 text-center reveal-scale">
              <p className="text-xl font-medium text-foreground/70">
                Aktuell haben wir keine offenen Stellen. Wir freuen uns jedoch über Ihre <span className="text-primary italic">Initiativbewerbung</span>!
              </p>
            </div>
          )}

          {/* Initiativbewerbung Form */}
          <div id="application-form" className="premium-card p-12 bg-[#131515] reveal-scale reveal-delay-2">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:w-1/2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Send size={28} className="text-secondary" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight">Initiativbewerbung</h3>
                </div>
                <p className="text-white/80 text-lg font-medium leading-relaxed">
                  Keine passende Stelle dabei? Senden Sie uns Ihre Unterlagen initiativ – wir sind immer auf der Suche nach Talenten!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="md:w-1/2 w-full space-y-6 bg-white/5 p-8 rounded-3xl backdrop-blur-sm">
                <div className="space-y-2">
                  <label htmlFor="app-name" className="text-xs font-bold text-emerald-200 uppercase tracking-widest ml-1">Name *</label>
                  <input
                    type="text" id="app-name" name="name" value={applicationData.name} onChange={handleChange} required
                    className="w-full px-5 py-3 bg-white/5 border-none rounded-xl text-white focus:ring-2 focus:ring-primary/50 transition-all font-medium placeholder:text-gray-600"
                    placeholder="Ihr Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="app-email" className="text-xs font-bold text-emerald-200 uppercase tracking-widest ml-1">E-Mail *</label>
                  <input
                    type="email" id="app-email" name="email" value={applicationData.email} onChange={handleChange} required
                    className="w-full px-5 py-3 bg-white/5 border-none rounded-xl text-white focus:ring-2 focus:ring-primary/50 transition-all font-medium placeholder:text-gray-600"
                    placeholder="E-Mail Adresse"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="app-message" className="text-xs font-bold text-emerald-200 uppercase tracking-widest ml-1">Nachricht *</label>
                  <textarea
                    id="app-message" name="message" value={applicationData.message} onChange={handleChange} required rows="4"
                    className="w-full px-5 py-3 bg-white/5 border-none rounded-xl text-white focus:ring-2 focus:ring-primary/50 transition-all font-medium placeholder:text-gray-600 resize-none"
                    placeholder="Erzählen Sie uns über sich..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white premium-button py-4 text-lg font-extrabold hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Bewerbung absenden'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KarriereSection;