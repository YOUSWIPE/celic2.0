import { useEffect } from 'react';

const useScrollReveal = (dependencies = []) => {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-scale');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, dependencies);
};

export default useScrollReveal;
