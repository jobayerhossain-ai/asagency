'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Zap, Star, CreditCard, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '../ui/Button';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export const Navbar = () => {
    // ... existing hooks
    const { t, language, setLanguage } = useLanguage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // Router initialized for navigation
    const router = useRouter();
    const pathname = usePathname();

    const navLinks = [
        { name: t.nav.home, href: '/', icon: Home },
        { name: t.nav.services, href: '/services', icon: Zap },
        { name: t.nav.reviews, href: '/portfolio', icon: Star },
        { name: t.nav.pricing, href: '/pricing', icon: CreditCard },
        { name: t.nav.about, href: '/about', icon: User },
        { name: t.nav.contact, href: '/contact', icon: MessageCircle },
    ];

    return (
        <>
            {/* Desktop Floating Navbar */}
            <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    // Light Glassmorphism Base
                    className="pointer-events-auto bg-white/70 backdrop-blur-md border border-white/50 rounded-full shadow-2xl shadow-blue-900/5 px-6 py-3 flex items-center justify-between w-full max-w-6xl will-change-transform"
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="AS Marketing"
                            width={150}
                            height={50}
                            className="h-10 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Menu Items - Dynamic Island Style Light */}
                    {/* Container is also light glass or transparent white */}
                    {/* Desktop Menu Items - Dynamic Island Style Light */}
                    <div className="hidden lg:flex items-center bg-white/30 backdrop-blur-sm rounded-full p-1 gap-1 border border-white/40 shadow-inner isolate">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    prefetch={true}
                                    className="relative z-0"
                                >
                                    <div
                                        className={cn(
                                            "relative flex items-center px-3 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                            isActive ? "text-white" : "text-slate-600 hover:text-brand-neon hover:bg-white/40"
                                        )}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-active-pill"
                                                className="absolute inset-0 bg-brand-neon rounded-full shadow-lg shadow-blue-500/20 -z-10"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}

                                        <link.icon size={18} className="shrink-0 z-10" />

                                        <motion.span
                                            animate={{
                                                width: isActive ? "auto" : 0,
                                                opacity: isActive ? 1 : 0,
                                                marginLeft: isActive ? 8 : 0
                                            }}
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            className="whitespace-nowrap overflow-hidden z-10 block"
                                        >
                                            {link.name}
                                        </motion.span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Language Toggle Light */}
                        <div className="bg-white/40 border border-white/50 rounded-full p-1 flex items-center backdrop-blur-sm">
                            <button
                                onClick={() => setLanguage('en')}
                                className={cn(
                                    "px-3 py-1 rounded-full text-xs font-bold transition-all",
                                    language === 'en' ? "text-heading bg-white shadow-sm" : "text-slate-500 hover:text-slate-700"
                                )}
                            >
                                English
                            </button>
                            <button
                                onClick={() => setLanguage('bn')}
                                className={cn(
                                    "px-3 py-1 rounded-full text-xs font-bold transition-all",
                                    language === 'bn' ? "bg-brand-neon text-white shadow-lg" : "text-slate-500 hover:text-slate-700"
                                )}
                            >
                                বাংলা
                            </button>
                        </div>

                        {/* CTA */}
                        <Button className="rounded-full px-6 bg-brand-neon hover:bg-brand-neon/90 text-white border-none shadow-lg shadow-blue-500/20">
                            {t.nav.cta}
                        </Button>
                    </div >

                    {/* Mobile Toggle (Dark because background is light) */}
                    < button
                        className="md:hidden text-heading p-2"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button >
                </motion.nav >
            </div >

            {/* Mobile Menu Overlay - Also Light Theme to match */}
            <AnimatePresence>
                {
                    mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl flex flex-col p-6 md:hidden"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <Link href="/" className="flex items-center gap-2">
                                    <Image
                                        src="/logo.png"
                                        alt="AS Marketing"
                                        width={120}
                                        height={40}
                                        className="h-8 w-auto object-contain"
                                    />
                                </Link>
                                <button
                                    className="text-slate-500 hover:text-heading p-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-4 flex-1 overflow-y-auto">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "flex items-center gap-4 text-lg font-medium p-4 rounded-xl transition-colors",
                                            pathname === link.href ? "bg-brand-neon/10 text-brand-neon" : "text-slate-600 hover:text-heading hover:bg-gray-50"
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <link.icon size={24} />
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-auto flex flex-col gap-6 pt-6 border-t border-gray-100">
                                {/* Language Switch Mobile */}
                                <div className="flex bg-gray-100 p-2 rounded-lg">
                                    <button
                                        onClick={() => { setLanguage('en'); }}
                                        className={cn(
                                            "flex-1 py-2 rounded-md text-sm font-bold transition-all text-center",
                                            language === 'en' ? "bg-white text-heading shadow-sm" : "text-gray-500"
                                        )}
                                    >
                                        English
                                    </button>
                                    <button
                                        onClick={() => { setLanguage('bn'); }}
                                        className={cn(
                                            "flex-1 py-2 rounded-md text-sm font-bold transition-all text-center",
                                            language === 'bn' ? "bg-brand-neon text-white" : "text-gray-500"
                                        )}
                                    >
                                        Bangla
                                    </button>
                                </div>

                                <Button className="w-full justify-center rounded-full bg-brand-neon text-white h-12 text-lg">
                                    {t.nav.cta}
                                </Button>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </>
    );
};
