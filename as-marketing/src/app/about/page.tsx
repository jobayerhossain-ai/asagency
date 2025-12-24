'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
    const { t } = useLanguage();
    const [showLicense, setShowLicense] = useState(false);

    return (
        <main className="min-h-screen pt-24 pb-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
                    {/* Header */}
                    <div className="mb-10 text-center border-b border-slate-100 pb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            {t.nav.about} (Company Profile)
                        </h1>
                        <p className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-neon via-purple-600 to-pink-500 animate-text">
                            AS Marketing Business
                        </p>
                    </div>

                    {/* Why Choose Us */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 pb-2 border-b-2 border-brand-neon inline-block">
                            {t.trust.title}
                        </h2>
                        <div className="space-y-6">
                            {t.trust.points?.map((point, index) => (
                                <div key={index}>
                                    <div className="flex flex-wrap items-center gap-3 mb-1">
                                        <h3 className="text-lg font-bold text-slate-900">
                                            • {point.title}:
                                        </h3>
                                        {index === 0 && (
                                            <button
                                                onClick={() => setShowLicense(true)}
                                                className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium text-brand-neon bg-brand-neon/5 border border-brand-neon/20 rounded-full hover:bg-brand-neon hover:text-white transition-all active:scale-95"
                                            >
                                                <FileText size={14} />
                                                {t.trust.viewLicense}
                                            </button>
                                        )}
                                    </div>
                                    <p className="text-slate-700 leading-relaxed text-base pl-4">
                                        {point.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Premium Services */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 pb-2 border-b-2 border-brand-neon inline-block">
                            {t.services.title}
                        </h2>
                        <div className="space-y-8">
                            {Object.entries(t.services.items).map(([key, title]) => (
                                <div key={key}>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                                        🔵 {title}
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 pl-4">
                                        {/* @ts-expect-error - indexing with string key */}
                                        {t.services.details[key]?.map((detail: string, idx: number) => (
                                            <li key={idx} className="text-slate-700">
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer / Thanks */}
                    <div className="mt-12 pt-8 border-t border-slate-100 text-center">
                        <p className="text-lg font-medium text-slate-800 italic">
                            "{t.about.thankYouMessage}"
                        </p>
                    </div>
                </div>
            </div>

            {/* License Modal */}
            <AnimatePresence>
                {showLicense && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowLicense(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                        />
                        <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="relative w-full max-w-2xl pointer-events-auto"
                            >
                                <button
                                    onClick={() => setShowLicense(false)}
                                    className="absolute -top-3 -right-3 md:-top-4 md:-right-4 p-2 bg-white rounded-full text-slate-900 shadow-lg hover:bg-slate-100 transition-colors z-50 border border-slate-100"
                                >
                                    <X size={24} />
                                </button>
                                <div className="bg-white p-2 rounded-lg shadow-2xl max-h-[85vh] overflow-auto">
                                    <div className="relative w-full">
                                        <img
                                            src="/license.png"
                                            alt="Trade License"
                                            className="w-full h-auto object-contain bg-slate-50 rounded"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </main>
    );
}
