'use client';
import { Card } from '@/components/ui/Card';
import { useLanguage } from '@/context/LanguageContext';
import { Facebook, Instagram, Youtube, Code, CheckCircle2, Palette } from 'lucide-react';
import { TikTokIcon } from '@/components/ui/BrandIcons';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

export default function ServicesPage() {
    const { t } = useLanguage();

    const serviceIcons = {
        facebook: { icon: Facebook, color: 'text-blue-600', bg: 'bg-blue-50' },
        instagram: { icon: Instagram, color: 'text-pink-600', bg: 'bg-pink-50' },
        tiktok: { icon: TikTokIcon, color: 'text-black', bg: 'bg-gray-100' },
        youtube: { icon: Youtube, color: 'text-red-600', bg: 'bg-red-50' },
        web: { icon: Code, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        graphics: { icon: Palette, color: 'text-purple-600', bg: 'bg-purple-50' },
    };

    const categories = ['facebook', 'instagram', 'tiktok', 'youtube', 'web', 'graphics'] as const;

    return (
        <div className="container mx-auto px-4 py-32 min-h-screen">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-heading mb-6">{t.services.title}</h1>
                    <div className="w-24 h-1.5 bg-brand-neon mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {categories.map((category) => {
                        const title = t.services.items[category];
                        const details = t.services.details[category];
                        const style = serviceIcons[category];
                        const Icon = style.icon;

                        return (
                            <motion.div key={category} variants={fadeInUp}>
                                <Card className="p-8 h-full hover:border-brand-sky">
                                    <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                                        <div className={`p-3 rounded-xl ${style.bg} ${style.color}`}>
                                            <Icon size={32} />
                                        </div>
                                        <h2 className="text-2xl font-bold text-heading bg-green-200 px-4 py-2 rounded-lg border border-green-300 flex-1">{title}</h2>
                                    </div>

                                    <ul className="space-y-3">
                                        {details.map((item: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-3 text-body">
                                                <CheckCircle2 size={20} className="text-brand-neon shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}
