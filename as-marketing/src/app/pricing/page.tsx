'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FacebookIcon, InstagramIcon, TikTokIcon } from '@/components/ui/BrandIcons';
import { Card } from '@/components/ui/Card';
import { packages } from '@/data/packages';
import { MessageCircle } from 'lucide-react';

export default function PricingPage() {
    const [activeTab, setActiveTab] = useState(packages[0].id);

    const getIcon = (id: string) => {
        switch (id) {
            case 'facebook': return FacebookIcon;
            case 'instagram': return InstagramIcon;
            case 'tiktok': return TikTokIcon;
            default: return FacebookIcon;
        }
    };

    const activeCategory = packages.find(p => p.id === activeTab);

    const handleOrder = (pkgTitle: string, optionName: string, price: string) => {
        const message = `Halo, I would like to order:
Package: ${pkgTitle}
Option: ${optionName}
Price: ${price}

Please provide details.`;
        window.open(`https://wa.me/8801747980662?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section className="py-32 min-h-screen bg-slate-50/50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-sky/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-heading mb-4"
                    >
                        আমাদের প্যাকেজ সমূহ
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 100 }}
                        className="h-1.5 bg-brand-neon mx-auto rounded-full"
                    />
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {packages.map((pkg) => {
                        const Icon = getIcon(pkg.id);
                        const isActive = activeTab === pkg.id;
                        return (
                            <button
                                key={pkg.id}
                                onClick={() => setActiveTab(pkg.id)}
                                className={`
                                    flex items-center gap-2 px-6 py-3 rounded-full text-lg font-bold transition-all duration-300
                                    ${isActive
                                        ? 'bg-white text-heading shadow-lg scale-105 border border-brand-neon/20'
                                        : 'bg-white/50 text-slate-500 hover:bg-white hover:shadow-md'
                                    }
                                `}
                            >
                                <Icon size={24} />
                                {pkg.title}
                            </button>
                        );
                    })}
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
                    >
                        {activeCategory?.subPackages.map((sub, idx) => (
                            <Card key={idx} className="p-0 overflow-hidden border-t-4 border-t-brand-neon h-full">
                                <div className="p-6 md:p-8 bg-white h-full flex flex-col">
                                    <h3 className="text-2xl font-bold text-heading mb-6 border-b border-dashed border-slate-200 pb-4">
                                        {sub.title}
                                    </h3>

                                    <div className="flex-grow space-y-3 mb-8">
                                        {sub.options.map((opt, optIdx) => (
                                            <div
                                                key={optIdx}
                                                className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group"
                                            >
                                                <div className="flex flex-col">
                                                    <span className="font-semibold text-heading">
                                                        {opt.name.split(/([0-9\u09E6-\u09EF]+)/g).map((part, i) => (
                                                            /^[0-9\u09E6-\u09EF]+$/.test(part) ? (
                                                                <span key={i} className="text-brand-neon font-bold">{part}</span>
                                                            ) : (
                                                                <span key={i}>{part}</span>
                                                            )
                                                        ))}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="font-bold text-brand-neon">{opt.price}</span>
                                                    <button
                                                        onClick={() => handleOrder(sub.title, opt.name, opt.price)}
                                                        className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-500 hover:text-white transition-all shadow-sm"
                                                        title="Order on WhatsApp"
                                                    >
                                                        <MessageCircle size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {sub.note && (
                                        <div className="mt-auto bg-yellow-50 p-4 rounded-xl border border-yellow-100">
                                            <p className="text-sm text-slate-700 leading-relaxed">
                                                <span className="font-bold text-yellow-800 block mb-1">নোট:</span>
                                                {sub.note}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </Card>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
