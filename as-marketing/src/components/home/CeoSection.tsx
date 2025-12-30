'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Quote } from 'lucide-react';

export const CeoSection = () => {
    const { t, language } = useLanguage();

    return (
        <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* CEO Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
                    {/* Content Side - Left */}
                    <div className="space-y-8 order-2 lg:order-1">
                        {/* Name & Role */}
                        <div className="space-y-4">
                            {/* Hardcoded name in black - Bengali/English based on language */}
                            {language === 'bn' ? (
                                <h3 style={{
                                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                                    fontWeight: 700,
                                    color: '#000000',
                                    margin: 0,
                                    padding: 0,
                                    letterSpacing: '-0.02em',
                                    lineHeight: 1.2,
                                    WebkitTextFillColor: '#000000',
                                    textShadow: 'none',
                                    background: 'transparent'
                                }}>
                                    সোহানুর রহমান
                                </h3>
                            ) : (
                                <h3 style={{
                                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                                    fontWeight: 700,
                                    color: '#000000',
                                    margin: 0,
                                    padding: 0,
                                    letterSpacing: '-0.02em',
                                    lineHeight: 1.2,
                                    WebkitTextFillColor: '#000000',
                                    textShadow: 'none',
                                    background: 'transparent'
                                }}>
                                    Sohanur Rahman
                                </h3>
                            )}
                            <p className="text-xl md:text-2xl text-brand-neon font-semibold">
                                {t.ceo.role}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
                            {t.ceo.description}
                        </p>

                        {/* Quote */}
                        <div className="relative border-l-4 border-brand-neon pl-6 py-2">
                            <blockquote className="text-xl md:text-2xl font-semibold text-white italic leading-tight">
                                "{t.ceo.quote}"
                            </blockquote>
                        </div>

                        {/* Social Links / Badges */}

                    </div>

                    {/* Image Side - Right */}
                    <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                        <div className="relative group">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-neon/30 via-blue-500/20 to-purple-500/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                            {/* Main image container */}
                            <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 p-1.5 rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-brand-neon/50 group-hover:-translate-y-2">
                                <div className="relative w-80 h-96 md:w-96 md:h-[28rem] rounded-[1.4rem] overflow-hidden">
                                    <Image
                                        src="/ceo-new.png"
                                        alt={t.ceo.name}
                                        fill
                                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                                </div>
                            </div>

                            {/* Badge */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-neon to-blue-600 text-white px-6 py-3 rounded-full shadow-xl shadow-brand-neon/40 font-bold text-sm whitespace-nowrap">
                                {t.ceo.role}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
