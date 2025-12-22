'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Quote } from 'lucide-react';

export const CeoSection = () => {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-heading mb-4">
                        {t.ceo.title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-brand-neon to-purple-500 mx-auto rounded-full" />
                </div>

                {/* CEO Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
                    {/* Image Side - Optimized Premium Shape */}
                    <div className="flex justify-center lg:justify-end order-1">
                        <div className="relative group">
                            {/* Static gradient border */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-neon via-purple-500 to-pink-500 rounded-[2rem] opacity-20" />

                            {/* Main image container */}
                            <div className="relative bg-white p-2 rounded-[2rem] shadow-xl transition-all duration-300 group-hover:shadow-2xl">
                                {/* Frame */}
                                <div className="relative rounded-[1.75rem] overflow-hidden bg-gradient-to-br from-white to-slate-50 p-1">
                                    {/* CEO Image */}
                                    <div className="relative w-80 h-96 md:w-96 md:h-[28rem] rounded-[1.5rem] overflow-hidden">
                                        <Image
                                            src="/ceo-new.png"
                                            alt={t.ceo.name}
                                            fill
                                            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                            priority
                                        />
                                        {/* Subtle overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-neon/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>
                            </div>

                            {/* Subtle accent */}
                            <div className="absolute -top-3 -right-3 w-16 h-16 bg-brand-neon/20 rounded-full blur-xl" />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-6 order-2">
                        {/* Quote */}
                        <div className="relative">
                            <Quote className="absolute -top-2 -left-2 w-12 h-12 text-brand-neon/20" />
                            <blockquote className="relative pl-10 text-2xl md:text-3xl font-bold text-heading italic leading-tight">
                                "{t.ceo.quote}"
                            </blockquote>
                        </div>

                        {/* Name & Role */}
                        <div className="space-y-2">
                            <h3 className="text-3xl md:text-4xl font-bold text-heading">
                                {t.ceo.name}
                            </h3>
                            <p className="text-lg md:text-xl text-brand-neon font-semibold flex items-center gap-2">
                                <span className="w-12 h-0.5 bg-brand-neon" />
                                {t.ceo.role}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                            {t.ceo.description}
                        </p>

                        {/* Decorative badges */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <div className="px-6 py-3 bg-gradient-to-r from-brand-neon to-purple-500 text-white rounded-full shadow-lg shadow-brand-neon/30 font-semibold text-sm transition-transform hover:scale-105">
                                🏆 Award Winning Leader
                            </div>
                            <div className="px-6 py-3 bg-white border-2 border-brand-neon/20 text-brand-neon rounded-full shadow-md font-semibold text-sm transition-transform hover:scale-105 hover:border-brand-neon/50">
                                ✨ Visionary Founder
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
