import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import WhatsAppButton from '../components/WhatsAppButton';
import CustomCursor from '../components/CustomCursor';
import useScrollReveal from '../hooks/use-scroll-reveal';

const AboutPage = () => {
    useScrollReveal();
    return (
        <div className="min-h-screen bg-background text-foreground transition-all duration-1000">
            <Header />
            <div className="pt-20">
                <AboutSection />

                {/* Expanded About Content */}
                <section className="py-24 bg-[#131515] text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight">Unsere <span className="text-primary italic">Geschichte & Werte</span></h2>
                            <div className="space-y-8 text-lg text-white/80 leading-relaxed font-medium">
                                <p>
                                    Gegründet im Jahr 2017 und seit 2018 als GmbH geführt, hat sich die Schlosserei Celic GmbH schnell als einer der führenden Dienstleister für Sicherheitstechnik und Metallbau in Wien etabliert. Unter der Leitung von Danijel Čelić setzen wir auf ein starkes Team aus Fachkräften und Lehrlingen.
                                </p>
                                <p>
                                    Qualität ist kein Zufall, sondern das Ergebnis von Erfahrung, Leidenschaft und dem ständigen Streben nach Perfektion. Wir sind stolz darauf, sowohl private Haushalte als auch große Hausverwaltungen und Firmenkunden zu unseren langjährigen Partnern zählen zu dürfen.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                                <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
                                    <div className="text-4xl font-extrabold text-primary mb-2">20+</div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-white/60">Jahre Erfahrung</div>
                                </div>
                                <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
                                    <div className="text-4xl font-extrabold text-primary mb-2">7</div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-white/60">Teammitglieder</div>
                                </div>
                                <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
                                    <div className="text-4xl font-extrabold text-primary mb-2">100%</div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-white/60">Transparenz</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
            <WhatsAppButton />
            <CustomCursor />
        </div>
    );
};

export default AboutPage;
