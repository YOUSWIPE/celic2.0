import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    );

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-[#131515]/5 dark:bg-white/10 hover:bg-[#131515]/10 dark:hover:bg-white/20 transition-all duration-300 group"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
                <Sun size={20} className="text-primary group-hover:rotate-45 transition-transform" />
            ) : (
                <Moon size={20} className="text-[#131515] group-hover:-rotate-12 transition-transform" />
            )}
        </button>
    );
};

export default ThemeToggle;
