'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    method: 'bkash' | 'nagad' | 'rocket' | 'bank';
    number?: string;
    qrImage?: string;
}

export const PaymentModal = ({ isOpen, onClose, method, number, qrImage }: PaymentModalProps) => {
    if (!isOpen) return null;

    const getInstructions = () => {
        switch (method) {
            case 'bkash':
                return [
                    "আপনার বিকাশ অ্যাপ ওপেন করুন",
                    "পেমেন্ট (Payment) অপশন সিলেক্ট করুন",
                    "নিচের QR কোডটি স্ক্যান করুন অথবা নাম্বার টাইপ করুন",
                    "টাকার পরিমাণ উল্লেখ করুন",
                    "রেফারেন্স হিসেবে আপনার নাম দিন",
                    "PIN দিয়ে পেমেন্ট কনফার্ম করুন"
                ];
            case 'nagad':
                return [
                    "আপনার নগদ অ্যাপ ওপেন করুন",
                    "পেমেন্ট (Payment) অপশন সিলেক্ট করুন",
                    "নিচের QR কোডটি স্ক্যান করুন অথবা নাম্বার টাইপ করুন",
                    "টাকার পরিমাণ উল্লেখ করুন",
                    "রেফারেন্স হিসেবে আপনার নাম দিন",
                    "PIN দিয়ে পেমেন্ট কনফার্ম করুন"
                ];
            case 'rocket':
                return [
                    "আপনার রকেট অ্যাপ ওপেন করুন",
                    "মার্চেন্ট পে (Merchant Pay) অপশন সিলেক্ট করুন",
                    "নিচে দেওয়া মার্চেন্ট নাম্বারটি টাইপ করুন",
                    "টাকার পরিমাণ উল্লেখ করুন",
                    "রেফারেন্স হিসেবে আপনার নাম দিন",
                    "PIN দিয়ে পেমেন্ট কনফার্ম করুন"
                ];
            default:
                return [];
        }
    };

    const instructions = getInstructions();
    const colors = {
        bkash: 'bg-[#E2136E]',
        nagad: 'bg-[#F7941D]',
        rocket: 'bg-[#8D368D]',
        bank: 'bg-[#005C9D]'
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden"
                >
                    {/* Header */}
                    <div className={`${colors[method]} p-4 flex justify-between items-center text-white`}>
                        <h3 className="text-xl font-bold capitalize">{method} পেমেন্ট ইন্সট্রাকশন</h3>
                        <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="p-6 md:p-8 overflow-y-auto max-h-[80vh]">
                        {/* Number Display */}
                        {number && (
                            <div className="text-center mb-6">
                                <p className="text-slate-500 mb-1">মার্চেন্ট নাম্বার</p>
                                <div className="text-2xl md:text-3xl font-bold text-heading font-mono bg-slate-50 py-3 rounded-lg border border-slate-100 select-all">
                                    {number}
                                </div>
                            </div>
                        )}

                        {/* Instructions List */}
                        <div className="mb-8">
                            <h4 className="font-bold text-lg mb-4 text-heading border-b border-gray-100 pb-2">কিভাবে পেমেন্ট করবেন:</h4>
                            <ul className="space-y-3">
                                {instructions.map((step, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                                        <div className={`flex-shrink-0 w-6 h-6 rounded-full ${colors[method]} text-white flex items-center justify-center text-sm font-bold mt-0.5`}>
                                            {idx + 1}
                                        </div>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* QR Code */}
                        {qrImage && (
                            <div className="flex flex-col items-center">
                                <p className="text-sm text-slate-500 mb-3 font-medium">সরাসরি স্ক্যান করুন</p>
                                <div className="p-2 border-2 border-dashed border-gray-200 rounded-xl">
                                    <Image
                                        src={qrImage}
                                        alt={`${method} QR Code`}
                                        width={300}
                                        height={450}
                                        className="rounded-lg w-full h-auto"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
