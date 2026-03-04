import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamSection from '../components/TeamSection';
import WhatsAppButton from '../components/WhatsAppButton';
import useScrollReveal from '../hooks/use-scroll-reveal';

const TeamPage = () => {
    useScrollReveal();

    return (
        <div className="min-h-screen bg-background text-foreground transition-all duration-1000">
            <Header />
            <div className="pt-20">
                <TeamSection />

                {/* Team Philosophy */}
                <section className="py-24 bg-card/30">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-extrabold mb-12">Unsere <span className="text-primary italic">Philosophie</span></h2>
                        <div className="max-w-3xl mx-auto space-y-6 text-xl text-foreground/70 leading-relaxed font-medium">
                            <p>
                                Hinter jedem erfolgreichen Projekt steht ein starkes Team. Bei Celic GmbH fördern wir unsere Mitarbeiter und investieren kontinuierlich in Ausbildung und modernste Ausrüstung.
                            </p>
                            <p>
                                Drei Schlosser, eine Bürokraft und zwei engagierte Lehrlinge arbeiten täglich daran, Wien ein Stück sicherer zu machen. Wir legen Wert auf ein kollegiales Umfeld, in dem Fachwissen weitergegeben wird.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default TeamPage;
