'use client';

import { LanguageProvider } from '../context/LanguageContext';
import { LazyMotion, domMax } from "framer-motion";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <LazyMotion features={domMax}>
            <LanguageProvider>
                {children}
            </LanguageProvider>
        </LazyMotion>
    );
}
