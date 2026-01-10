'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Card } from '@/components/ui/Card';
import { CheckCircle2 } from 'lucide-react';

export const TrustSection = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-white/30 backdrop-blur-sm relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(10,26,255,0.03),transparent_40%)] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-heading mb-6"
                    >
                        {t.trust.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-body leading-loose max-w-2xl mx-auto"
                    >
                        {t.trust.description}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.trust.points?.map((point, index) => {
                        const hasImage = !!point.image;
                        return (
                            <Card
                                key={index}
                                className={`p-8 h-full border-t-4 border-t-brand-neon hover:border-t-brand-neon transition-all ${hasImage ? 'lg:col-span-3' : ''
                                    }`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={hasImage ? "flex flex-col lg:flex-row items-center gap-8" : ""}>
                                    <div className={hasImage ? "flex-1 text-left" : ""}>
                                        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-sky text-brand-neon">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-heading mb-3">
                                            {point.title}
                                        </h3>
                                        <p className="text-body/80 leading-relaxed">
                                            {point.desc}
                                        </p>
                                    </div>
                                    {point.image && (
                                        <div className={`mt-4 pt-4 border-t border-slate-100 ${hasImage ? 'lg:mt-0 lg:pt-0 lg:border-t-0 lg:border-l lg:pl-8 lg:w-1/3 w-full flex flex-col items-center justify-center' : ''
                                            }`}>
                                            <img
                                                src={point.image}
                                                alt="License"
                                                className="w-auto max-w-full mx-auto block h-48 object-contain rounded-lg"
                                            />
                                            <p className="text-center text-xs text-slate-400 mt-2">{t.trust.tradeLicenseCaption}</p>
                                        </div>
                                    )}
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
