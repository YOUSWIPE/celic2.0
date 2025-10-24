// HeroSection.jsx
import React, { useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls
          className="w-full h-full object-cover"
        >
          {/* Спробуй надійний прямий mp4-URL */}
          <source src="https://media.istockphoto.com/id/1208203233/video/opening-a-door-to-house-with-key-close-up.mp4?s=mp4-640x640-is&k=20&c=SQKt-E05-6bFNlSHhk2yQMdXGiaxCW29W8ZC7xwsRNY=" type="video/mp4" />
        </video>

        {/* Тимчасово вимикаємо накладки, щоб перевірити видимість */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-gradient"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white py-32">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Ihr zuverlässiger<br />
          <span className="text-white">Schlüsseldienst in Wien</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto">
          24/7 Notdienst • Faire Preise • Schnelle Hilfe • Professionelle Lösungen für alle Schloss- і Sicherheitsprobleme
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+4312345678"
            className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Phone size={24} />
            Jetzt anrufen: +43 1 234 5678
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-red-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Kostenvoranschlag anfordern
          </button>
        </div>
      </div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L1440 0L1440 120C1440 120 1080 60 720 60C360 60 0 120 0 120L0 0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
