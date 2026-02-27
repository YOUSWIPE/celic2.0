import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import WhatsAppButton from '../components/WhatsAppButton';
import CustomCursor from '../components/CustomCursor';
import { Toaster } from '../components/ui/toaster';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import useScrollReveal from '../hooks/use-scroll-reveal';

const ContactPage = () => {
    useScrollReveal();
    return (
        <div className="min-h-screen bg-background text-foreground transition-all duration-1000">
            <Header />
            <div className="pt-20">
                <ContactSection />

                {/* Office Info */}
                <section className="py-24 bg-card/30">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="premium-card p-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                    <Phone size={32} />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Telefon</h4>
                                <p className="text-foreground/70 font-medium">+43 660 3022555</p>
                            </div>

                            <div className="premium-card p-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                    <Mail size={32} />
                                </div>
                                <h4 className="text-xl font-bold mb-2">E-Mail</h4>
                                <p className="text-foreground/70 font-medium">office@celic.at</p>
                            </div>

                            <div className="premium-card p-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                    <MapPin size={32} />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Adresse</h4>
                                <p className="text-foreground/70 font-medium">Adelheid-Popp-Gasse 16/1c<br />1220 Wien</p>
                            </div>

                            <div className="premium-card p-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                    <Clock size={32} />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Öffnungszeiten</h4>
                                <p className="text-foreground/70 font-medium">Mo - Fr: 08:00 - 17:00</p>
                                <p className="text-foreground/70 text-sm font-bold text-primary mt-2">Termine nach Vereinbarung</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
            <WhatsAppButton />
            <CustomCursor />
            <Toaster />
        </div>
    );
};

export default ContactPage;
