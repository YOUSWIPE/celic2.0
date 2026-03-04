import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import KarriereSection from '../components/KarriereSection';
import WhatsAppButton from '../components/WhatsAppButton';
import { Toaster } from '../components/ui/toaster';
import useScrollReveal from '../hooks/use-scroll-reveal';

const KarrierePage = () => {
    useScrollReveal();
    return (
        <div className="min-h-screen bg-background text-foreground transition-all duration-1000">
            <Header />
            <div className="pt-20">
                <KarriereSection />

                {/* Additional Benefits */}
                <section className="py-24 bg-[#131515] text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-extrabold mb-16 text-center">Warum <span className="text-primary italic">Celic GmbH?</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: 'Sicherer Job', desc: 'Langfristige Perspektive in einem wachsenden Unternehmen.' },
                                { title: 'Top Equipment', desc: 'Hochwertiges Werkzeug und moderne Fahrzeuge.' },
                                { title: 'Teamspirit', desc: 'Flache Hierarchien und ein familiäres Arbeitsumfeld.' },
                                { title: 'Weiterbildung', desc: 'Regelmäßige Schulungen zu neuer Sicherheitstechnik.' }
                            ].map((item, i) => (
                                <div key={i} className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
                                    <h4 className="text-xl font-bold mb-3 text-primary">{item.title}</h4>
                                    <p className="text-white/60 font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
            <WhatsAppButton />
            <Toaster />
        </div>
    );
};

export default KarrierePage;
