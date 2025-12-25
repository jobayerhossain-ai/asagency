'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { FacebookIcon, WhatsAppIcon } from '@/components/ui/BrandIcons';
import { CONFIG } from '@/data/config';

export const Hero = () => {
    const { t, language } = useLanguage();

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(10,26,255,0.05)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(234,246,255,0.6)_0%,transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-8 text-center z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto"
                >
                    {/* Bismillah Text */}
                    <motion.div variants={fadeInUp} className="mb-6">
                        <span className={`text-xl md:text-2xl font-semibold opacity-80 text-slate-800 block ${language === 'bn' ? 'font-hind' : 'font-inter'}`}>
                            {t.hero.bismillah}
                        </span>
                    </motion.div>

                    {/* Tagline */}
                    <motion.div variants={fadeInUp} className="mb-4">
                        <span className="inline-block px-6 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-brand-sky text-lg font-bold tracking-wide text-brand-neon">
                            {t.hero.subtitle}
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    {/* Main Title - Animated Gradient */}
                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight animate-text bg-gradient-to-r from-sky-400 via-blue-600 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm"
                    >
                        {t.hero.title}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg md:text-xl text-body/80 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        {t.hero.description}
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a href={CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full gap-3 bg-[#1877F2] hover:bg-[#165ec2] border-none text-white shadow-xl shadow-blue-200/50 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 font-bold"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="h-5 w-5 fill-current"
                                >
                                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 125.7 87.1 233.6 203.2 252.4V326h-48.3v-64h48.3v-42.3c0-47.5 28.5-74.1 72.8-74.1 21.2 0 43.4 3.7 43.4 3.7v47.7h-24.5c-23.7 0-31.1 14.7-31.1 29.8v35.3h53.7l-8.6 64h-45.1v182.4C416.9 489.6 504 381.7 504 256z" />
                                </svg>
                                {t.hero.ctaPrimary}
                            </Button>
                        </a>
                        <a href={CONFIG.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full gap-3 bg-[#25D366] hover:bg-[#128C7E] border-none text-white shadow-xl shadow-green-200/50 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 font-bold"
                            >
                                {/* Original WhatsApp SVG Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className="h-5 w-5 fill-current"
                                >
                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.5-16.4-14.7-27.5-32.8-30.7-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.8 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                </svg>
                                {t.hero.ctaSecondary}
                            </Button>
                        </a>
                    </motion.div>

                    {/* Cover Image */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-16"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
                            <Image
                                src="/our-services-cover.jpg"
                                alt="Our Services - AS Marketing"
                                width={1200}
                                height={400}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
