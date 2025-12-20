'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Card } from '@/components/ui/Card';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from '@/components/ui/BrandIcons';
import { Code, Palette } from 'lucide-react';
import { ServiceModal } from './ServiceModal';
import { PaymentModal } from './PaymentModal';

export const ServicesSnapshot = () => {
    const { t } = useLanguage();
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

    const services = [
        { key: 'facebook', icon: FacebookIcon, color: '' },
        { key: 'instagram', icon: InstagramIcon, color: '' },
        { key: 'tiktok', icon: TikTokIcon, color: '' },
        { key: 'youtube', icon: YouTubeIcon, color: '' },
        { key: 'web', icon: Code, color: 'text-indigo-600' },
        { key: 'graphics', icon: Palette, color: 'text-purple-600' },
    ];

    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
                        {t.services.title}
                    </h2>
                    <div className="w-20 h-1 bg-brand-neon mx-auto rounded-full" />
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        // @ts-expect-error - indexing with string key
                        const title = t.services.items[service.key];

                        return (
                            <motion.div key={service.key} variants={fadeInUp}>
                                <div onClick={() => setSelectedService(service.key)}>
                                    <Card className="h-full flex flex-col items-center text-center p-8 group cursor-pointer hover:shadow-xl transition-all duration-300 border-transparent hover:border-brand-neon/20 relative overflow-hidden">

                                        {/* Hover Gradient Background */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-brand-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className={`relative p-4 rounded-full bg-gray-50 mb-6 group-hover:scale-110 transition-transform duration-300 will-change-transform shadow-sm group-hover:shadow-md ${service.color}`}>
                                            <Icon size={32} />
                                        </div>
                                        <h3 className="text-xl font-bold text-heading mb-2 group-hover:text-brand-neon transition-colors relative">
                                            {title}
                                        </h3>
                                        <div className="mt-auto text-sm font-medium text-brand-neon/80 hover:text-brand-neon flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity relative">
                                            বিস্তারিত দেখুন →
                                        </div>
                                    </Card>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>



                {/* Payment Methods Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 pt-10 border-t border-slate-100"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-heading">
                            {t.nav.pricing} পেমেন্ট মেথড
                        </h3>
                        <div className="w-20 h-1 bg-brand-neon mx-auto rounded-full mt-4" />
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                        {/* Bkash */}
                        <div
                            onClick={() => setSelectedPaymentMethod('bkash')}
                            className="group relative flex items-center justify-center bg-white border border-pink-100 rounded-xl p-6 w-48 h-24 shadow-sm hover:shadow-md hover:border-pink-500 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
                        >
                            <img
                                src="https://download.logo.wine/logo/BKash/BKash-Logo.wine.png"
                                alt="bKash"
                                className="h-16 w-auto object-contain"
                            />
                        </div>

                        {/* Nagad */}
                        <div
                            onClick={() => setSelectedPaymentMethod('nagad')}
                            className="group relative flex items-center justify-center bg-white border border-orange-100 rounded-xl p-6 w-48 h-24 shadow-sm hover:shadow-md hover:border-orange-500 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
                        >
                            <img
                                src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png"
                                alt="Nagad"
                                className="h-14 w-auto object-contain"
                            />
                        </div>

                        {/* Rocket */}
                        <div
                            onClick={() => setSelectedPaymentMethod('rocket')}
                            className="group relative flex items-center justify-center bg-white border border-purple-100 rounded-xl p-6 w-48 h-24 shadow-sm hover:shadow-md hover:border-purple-500 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
                        >
                            <img
                                src="/rocket.png"
                                alt="Rocket"
                                className="h-14 w-auto object-contain"
                            />
                        </div>

                        {/* Bank / NPSB */}
                        <div className="group relative flex items-center justify-center bg-white border border-blue-100 rounded-xl p-6 w-48 h-24 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300">
                            <div className="flex flex-col items-center leading-none scale-125">
                                <span className="text-xl font-extrabold text-[#005C9D] tracking-tighter">NPSB</span>
                                <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-widest mt-0.5">National Switch</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Service Modal */}
                {selectedService && (
                    <ServiceModal
                        isOpen={!!selectedService}
                        onClose={() => setSelectedService(null)}
                        serviceKey={selectedService}
                        // @ts-expect-error - indexing with string key
                        title={t.services.items[selectedService]}
                        // @ts-expect-error - indexing with string key
                        details={t.services.details[selectedService]}
                        Icon={services.find(s => s.key === selectedService)?.icon}
                        color={services.find(s => s.key === selectedService)?.color}
                    />
                )}

                {/* Payment Modal */}
                {selectedPaymentMethod && (
                    <PaymentModal
                        isOpen={!!selectedPaymentMethod}
                        onClose={() => setSelectedPaymentMethod(null)}
                        method={selectedPaymentMethod as any}
                        number={selectedPaymentMethod === 'bkash' || selectedPaymentMethod === 'rocket' ? "01747980662" : "01626724262"}
                        qrImage={selectedPaymentMethod === 'bkash' ? '/bkash-qr.jpg' : (selectedPaymentMethod === 'nagad' ? '/nagad-qr.jpg' : undefined)}
                    />
                )}
            </div>
        </section >
    );
};
