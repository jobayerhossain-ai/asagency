'use client';
import { useLanguage } from '@/context/LanguageContext';
import { Card } from '@/components/ui/Card';
import { Star, User, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';

export default function PortfolioPage() {
    const { t } = useLanguage();
    const [selectedReview, setSelectedReview] = useState<(typeof t.reviews.items)[0] | null>(null);
    const router = useRouter();

    const reviews = t.reviews.items;

    return (
        <div className="container mx-auto px-4 py-32 min-h-screen">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-heading mb-4">{t.reviews.title}</h1>
                <p className="text-lg text-muted max-w-2xl mx-auto">
                    {t.reviews.description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {reviews.map((review, index) => (
                    <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedReview(review)}
                        className="cursor-pointer"
                    >
                        <Card className="h-full p-8 border-l-4 border-l-brand-neon hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                    <User size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-heading">{review.name}</h3>
                                    <p className="text-sm text-muted">{review.role}</p>
                                </div>
                            </div>
                            <div className="flex text-yellow-500 mb-4 gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-gray-300"} />
                                ))}
                            </div>
                            <p className="text-slate-600 leading-relaxed italic line-clamp-3">
                                "{review.text}"
                            </p>
                            <p className="text-brand-neon text-sm font-medium mt-4">{t.reviews.readMore}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Review Modal */}
            <AnimatePresence>
                {selectedReview && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedReview(null)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                        />
                        <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="pointer-events-auto w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
                            >
                                <div className="p-8 relative">
                                    <button
                                        onClick={() => setSelectedReview(null)}
                                        className="absolute top-4 right-4 p-2 bg-slate-50 rounded-full text-slate-500 hover:bg-slate-100 transition-colors"
                                    >
                                        <X size={20} />
                                    </button>

                                    <div className="flex flex-col items-center text-center mb-6">
                                        <div className="w-20 h-20 rounded-full bg-brand-neon/10 flex items-center justify-center text-brand-neon mb-4">
                                            <User size={40} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-heading">{selectedReview.name}</h3>
                                        <p className="text-muted">{selectedReview.role}</p>
                                        <div className="flex text-yellow-500 mt-2 gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={18} fill={i < selectedReview.rating ? "currentColor" : "none"} className={i < selectedReview.rating ? "" : "text-gray-300"} />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 p-6 rounded-xl mb-8">
                                        <p className="text-slate-700 leading-relaxed italic">
                                            "{selectedReview.longText || selectedReview.text}"
                                        </p>
                                    </div>

                                    <Button
                                        onClick={() => router.push('/proofs')}
                                        className="w-full gap-2 bg-brand-neon hover:bg-brand-neon/90 text-white shadow-lg shadow-blue-500/20 py-6 text-lg"
                                    >
                                        <ExternalLink size={20} />
                                        {t.proofs.viewProof}
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
