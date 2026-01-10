'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin } from 'lucide-react';

export const MapSection = () => {
    const { language } = useLanguage();

    // Exact embed URL provided by the user
    // Adjusted zoom level to show Kushtia area
    const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116860.8!2d89.12!3d23.90!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8a77a1c017f8757b%3A0xae943c063538c2b5!2sAS%20Marketing%20Business!5e0!3m2!1sbn!2sbd`;

    const title = language === 'bn' ? 'অফিসের ঠিকানা' : 'Office Address';
    const address = language === 'bn'
        ? 'কাস্টমস মোড়, কুষ্টিয়া সদর'
        : 'Customs mor, Kushtia Sadar';

    return (
        <section className="py-20 relative bg-slate-50/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
                        {title}
                    </h2>
                    <div className="w-20 h-1 bg-brand-neon mx-auto rounded-full" />
                </div>

                <div className="max-w-5xl mx-auto bg-white p-3 md:p-4 rounded-3xl shadow-xl border border-slate-100 relative group overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-neon via-purple-500 to-pink-500 z-10" />

                    <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-inner bg-slate-100">
                        <iframe
                            width="100%"
                            height="100%"
                            src={mapUrl}
                            title={language === 'bn' ? 'গুগল ম্যাপ - AS Marketing Business' : 'Google Map - AS Marketing Business'}
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        ></iframe>
                    </div>

                    {/* Address Display */}
                    <div className="mt-6 flex items-center justify-center gap-3 text-slate-700">
                        <MapPin className="w-5 h-5 text-brand-neon flex-shrink-0" />
                        <p className="text-base md:text-lg font-semibold">
                            {address}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
