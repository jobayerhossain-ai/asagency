'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { WhatsAppIcon } from '@/components/ui/BrandIcons';
import { CONFIG } from '@/data/config';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    serviceKey: string;
    title: string;
    details: string[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Icon: any;
    color?: string;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
    isOpen,
    onClose,
    title,
    details,
    Icon,
    color
}) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="pointer-events-auto w-full max-w-md"
                        >
                            <Card
                                hoverEffect={false}
                                className="relative overflow-hidden border-0 shadow-2xl bg-white rounded-2xl p-0"
                            >
                                <div className="relative p-6 sm:p-8">
                                    {/* Close Button - Optional based on image but good for UX */}
                                    <button
                                        onClick={onClose}
                                        className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
                                    >
                                        <X size={20} />
                                    </button>

                                    {/* Header */}
                                    <div className="flex flex-col items-center text-center mb-6">
                                        <div className={`mb-3 ${color}`}>
                                            <Icon size={48} />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-heading text-slate-900">
                                            {title}
                                        </h3>
                                        <div className="w-12 h-0.5 bg-blue-500 mt-2" />
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-3 mb-8 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
                                        {details.map((detail, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="flex items-center gap-3 p-3 rounded-lg bg-slate-50"
                                            >
                                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                                                    <Check size={12} className="text-white font-bold" strokeWidth={4} />
                                                </div>
                                                <span className="text-slate-700 font-medium text-sm sm:text-base">
                                                    {detail}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Footer CTA */}
                                    <a
                                        href={`https://wa.me/8801747980662?text=আমি আপনার ${title} সার্ভিসটি নিতে চাই`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-4 bg-[#25D366] text-white font-bold text-lg rounded-full hover:bg-[#128C7E] transition-all duration-300 shadow-xl shadow-green-100 flex items-center justify-center gap-3 no-underline transform hover:-translate-y-1"
                                    >
                                        {/* Original WhatsApp SVG Logo */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="28"
                                            viewBox="0 0 448 512"
                                            fill="currentColor"
                                        >
                                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.5-16.4-14.7-27.5-32.8-30.7-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.8 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                        </svg>
                                        অর্ডার করতে চাই
                                    </a>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

