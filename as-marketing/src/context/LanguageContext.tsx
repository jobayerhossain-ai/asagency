'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { content, Language, Content } from '../data/content';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Content;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('bn');

    // Load language from local storage on mount
    useEffect(() => {
        const savedLang = localStorage.getItem('as-marketing-lang') as Language;
        if (savedLang && (savedLang === 'bn' || savedLang === 'en')) {
            setLanguage(savedLang);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('as-marketing-lang', lang);
    };

    const value = React.useMemo(() => ({
        language,
        setLanguage: handleSetLanguage,
        t: content[language],
    }), [language]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
