// HeroSection.jsx
import React, { useEffect, useRef } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton';

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onError = (e) => console.error('Video error event:', e);
    const onLoadedData = () => console.log('Video loadeddata: duration=', video.duration, 'readyState=', video.readyState);
    const onCanPlay = () => console.log('Video canplay');

    video.addEventListener('error', onError);
    video.addEventListener('loadeddata', onLoadedData);
    video.addEventListener('canplay', onCanPlay);

    video.play().catch((error) => {
      console.warn('Auto-play was prevented or failed:', error);
    });

    return () => {
      video.removeEventListener('error', onError);
      video.removeEventListener('loadeddata', onLoadedData);
      video.removeEventListener('canplay', onCanPlay);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>
      {/* Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-50"
        >
          {/* Original iStock locksmith video link */}
          <source src="/hero.webm" type="video/webm" />        </video>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center py-24">
        <div className="reveal-up space-y-10">

          <h1 className="text-5xl md:text-8xl font-extrabold text-white leading-[1.1] tracking-tight max-w-5xl mx-auto">
            Sicherheit, die <br />
            <span className="text-primary italic">Maßstäbe</span> setzt.
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed reveal-up reveal-delay-2">
            Ihre Reparaturschlosserei und Sicherheitstechnik in Wien und Niederösterreich. Schnell vor Ort, transparent im Preis und kompromisslos in der Qualität.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 reveal-up reveal-delay-3">
            <MagneticButton strength={0.2}>
              <a
                href="tel:+436603022555"
                className="group relative bg-primary text-white premium-button px-12 py-5 text-xl font-extrabold flex items-center space-x-3"
              >
                <Phone size={24} className="group-hover:animate-bounce" />
                <span>Jetzt Anrufen</span>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
              </a>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <Link
                to="/kontakt"
                className="bg-primary text-white premium-button px-10 py-5 text-xl flex items-center justify-center space-x-4 group overflow-hidden relative shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10">Kostenlos Beraten</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-foreground rounded-full"></div>
        </div>
      </div>

      {/* Curved Bottom 
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L1440 0L1440 120C1440 120 1080 60 720 60C360 60 0 120 0 120L0 0Z" fill="white" />
        </svg>
      </div>*/}
    </section>
  );
};

export default HeroSection;
