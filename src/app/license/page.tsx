'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function LicensePage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-12">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6 leading-tight">
                            {t.license.title}
                        </h1>
                        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            {t.license.description}
                        </p>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200 bg-white p-2 md:p-4 inline-block">
                        <Image
                            src="/license-document.jpg"
                            alt="AS Marketing Trade License Document"
                            width={1200}
                            height={1600}
                            quality={100}
                            className="w-full h-auto rounded-lg md:rounded-xl"
                            priority
                        />

                        {/* Watermark overlay effect (optional, keeps it professional) */}
                        <div className="absolute inset-0 pointer-events-none rounded-lg md:rounded-xl bg-gradient-to-t from-white/10 to-transparent" />
                    </div>
                </div>
            </div>
        </div>
    );
}
