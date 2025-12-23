'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import Image from 'next/image';

const proofs = [
    { id: 1, src: '/proofs/success-1.jpg', alt: 'Success Proof 1' },
    { id: 2, src: '/proofs/success-2.jpg', alt: 'Success Proof 2' },
    { id: 3, src: '/proofs/success-3.jpg', alt: 'Success Proof 3' },
    { id: 4, src: '/proofs/success-4.jpg', alt: 'Success Proof 4' },
    { id: 5, src: '/proofs/success-5.jpg', alt: 'Success Proof 5' },
    { id: 6, src: '/proofs/success-6.jpg', alt: 'Success Proof 6' },
    { id: 7, src: '/proofs/success-7.jpg', alt: 'Success Proof 7' },
    { id: 8, src: '/proofs/success-8.jpg', alt: 'Success Proof 8' },
    { id: 9, src: '/proofs/success-9.jpg', alt: 'Success Proof 9' },
    { id: 10, src: '/proofs/success-10.jpg', alt: 'Success Proof 10' },
    { id: 11, src: '/proofs/success-11.jpg', alt: 'Success Proof 11' },
    { id: 12, src: '/proofs/success-12.jpg', alt: 'Success Proof 12' },
    { id: 13, src: '/proofs/success-13.jpg', alt: 'Success Proof 13' },
    { id: 14, src: '/proofs/success-14.jpg', alt: 'Success Proof 14' },
    { id: 15, src: '/proofs/success-15.jpg', alt: 'Success Proof 15' },
    { id: 16, src: '/proofs/success-16.jpg', alt: 'Success Proof 16' },
    { id: 17, src: '/proofs/success-17.jpg', alt: 'Success Proof 17' },
    { id: 18, src: '/proofs/success-18.jpg', alt: 'Success Proof 18' },
    { id: 19, src: '/proofs/success-19.jpg', alt: 'Success Proof 19' },
    { id: 20, src: '/proofs/success-20.jpg', alt: 'Success Proof 20' },
    { id: 21, src: '/proofs/success-21.jpg', alt: 'Success Proof 21' },
    { id: 22, src: '/proofs/success-22.jpg', alt: 'Success Proof 22' },
    { id: 23, src: '/proofs/success-23.jpg', alt: 'Success Proof 23' },
    { id: 24, src: '/proofs/success-24.jpg', alt: 'Success Proof 24' },
    { id: 25, src: '/proofs/success-25.jpg', alt: 'Success Proof 25' },
    { id: 26, src: '/proofs/success-26.jpg', alt: 'Success Proof 26' },
    { id: 27, src: '/proofs/success-27.jpg', alt: 'Success Proof 27' },
    { id: 28, src: '/proofs/success-28.jpg', alt: 'Success Proof 28' },
    { id: 29, src: '/proofs/success-29.jpg', alt: 'Success Proof 29' },
    { id: 30, src: '/proofs/success-30.jpg', alt: 'Success Proof 30' },
    { id: 31, src: '/proofs/success-31.jpg', alt: 'Success Proof 31' },
    { id: 32, src: '/proofs/success-32.jpg', alt: 'Success Proof 32' },
];

export default function PortfolioPage() {
    const { t } = useLanguage();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <main className="min-h-screen pt-24 pb-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-heading mb-4">
                        {t.proofs.title}
                    </h1>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        {t.proofs.description}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {proofs.map((proof, index) => (
                        <motion.div
                            key={proof.id}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            whileHover={{ y: -10 }}
                            className="relative group cursor-pointer aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand-neon/10 border-2 border-blue-700/50 hover:border-blue-700 transition-all duration-300"
                            onClick={() => setSelectedImage(proof.src)}
                        >
                            <div className="absolute inset-2 rounded-xl overflow-hidden bg-slate-50">
                                {/* Use generic image wrapper */}
                                <Image
                                    src={proof.src}
                                    alt={proof.alt}
                                    fill
                                    className="object-contain p-1 transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Glassmorphism Hover Overlay */}
                            <div className="absolute inset-0 bg-brand-neon/0 group-hover:bg-brand-neon/20 backdrop-blur-[2px] w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center rounded-2xl">
                                <div className="bg-white/90 p-4 rounded-full shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300 text-brand-neon">
                                    <ZoomIn size={24} strokeWidth={2.5} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={selectedImage}
                            className="relative z-[101] max-w-5xl w-full max-h-[90vh] aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                            <Image
                                src={selectedImage}
                                alt="Full Proof"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
}
