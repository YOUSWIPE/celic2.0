import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import WhatsAppButton from '../components/WhatsAppButton';
import { Toaster } from '../components/ui/toaster';
import useScrollReveal from '../hooks/use-scroll-reveal';

const ServicesPage = () => {
    useScrollReveal();
    return (
        <div className="min-h-screen bg-background text-foreground transition-all duration-1000">
            <Header />
            <div className="pt-20">
                <ServicesSection />

                {/* Expanded Services Content */}
                <section className="py-24 bg-card/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-extrabold mb-12 text-center">Detaillierte <span className="text-primary">Leistungsübersicht</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="premium-card p-10">
                                <h3 className="text-2xl font-bold mb-4">Einbruchschutz & Beratung</h3>
                                <p className="text-foreground/70 mb-6">Wir analysieren Ihre Immobilie auf Schwachstellen und bieten maßgeschneiderte Konzepte zur Absicherung von Türen und Fenstern.</p>
                                <ul className="space-y-3">
                                    <li className="flex items-center space-x-2">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                        <span>Sicherheitsbeschläge & Zusatzschlösser</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                        <span>Panzerriegel & Querbalken</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                        <span>Alarmanlagen Integration</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="premium-card p-10">
                                <h3 className="text-2xl font-bold mb-4">Metallbau & Sonderanfertigungen</h3>
                                <p className="text-foreground/70 mb-6">Individuelle Lösungen aus Metall, die sowohl funktional als auch ästhetisch überzeugen.</p>
                                <ul className="space-y-3">
                                    <li className="flex items-center space-x-2">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                        <span>Gartenzäune & Tore nach Maß</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                        <span>Geländersanierung & Neubau</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                        <span>Sicherheitsgitter für Fenster</span>
                                    </li>
                                </ul>
                            </div>
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

export default ServicesPage;
