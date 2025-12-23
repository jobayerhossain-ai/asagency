'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

// Generate array of 32 images
const reviews = Array.from({ length: 32 }, (_, i) => ({
    id: i + 1,
    src: `/proofs/success-${i + 1}.jpg`,
    alt: `Client Review ${i + 1}`
}));

export const ReviewSlider = () => {
    const { t } = useLanguage();

    return (
        <section className="py-12 bg-slate-50 overflow-hidden relative border-y border-slate-100">
            <div className="container mx-auto px-6 md:px-8">
                {/* Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-heading">
                        {t.proofs.title}
                    </h2>
                </div>

                {/* Slider Container */}
                <div className="relative">
                    {/* Side Fade Effects for Premium Feel */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex gap-6 pl-6"
                            animate={{
                                x: ['0%', '-50%'],
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 120, // Even slower for smoother, premium feel
                                ease: "linear",
                            }}
                            style={{ width: 'fit-content' }}
                        >
                            {/* Double the array for seamless loop */}
                            {[...reviews, ...reviews].map((review, idx) => (
                                <div
                                    key={`${review.id}-${idx}`}
                                    className="relative flex-none w-[280px] md:w-[350px] aspect-video rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-slate-200/60"
                                >
                                    <Image
                                        src={review.src}
                                        alt={review.alt}
                                        fill
                                        className="object-contain p-2 hover:scale-105 transition-transform duration-700 ease-out"
                                        sizes="(max-width: 768px) 280px, 350px"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
