'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { FacebookIcon, InstagramIcon, YouTubeIcon, TikTokIcon } from '@/components/ui/BrandIcons';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

import { CONFIG } from '@/data/config';

export const Footer = () => {
    const { t, language } = useLanguage();

    const currentYear = new Date().getFullYear();
    const displayYear = language === 'bn'
        ? currentYear.toString().replace(/[0-9]/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d)])
        : currentYear.toString();


    const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
        <li>
            <Link
                href={href}
                className="group flex items-center justify-center md:justify-start gap-2 text-slate-500 hover:text-brand-neon text-sm transition-all duration-300 hover:translate-x-1"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brand-neon transition-colors" />
                {children}
            </Link>
        </li>
    );

    const ContactItem = ({ icon: Icon, children, href }: { icon: any, children: React.ReactNode, href?: string }) => {
        const Content = () => (
            <div className="flex items-center md:items-start justify-center md:justify-start gap-3 text-slate-500 hover:text-brand-neon transition-colors group text-center md:text-left">
                <div className="mt-0.5 p-1.5 rounded-full bg-slate-50 group-hover:bg-brand-neon/10 transition-colors text-brand-neon shrink-0">
                    <Icon size={14} />
                </div>
                <span className="text-sm leading-relaxed">{children}</span>
            </div>
        );

        return (
            <li>
                {href ? (
                    <a href={href} className="block w-full">{Content()}</a>
                ) : (
                    Content()
                )}
            </li>
        );
    };

    return (
        <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-8">
                    {/* Brand */}
                    <div className="md:col-span-1 space-y-6 -mt-6 flex flex-col items-center md:items-start text-center md:text-left">
                        <Link href="/" className="block">
                            <Image
                                src="/logo.png"
                                alt="AS Marketing"
                                width={200}
                                height={70}
                                className="h-14 md:h-20 w-auto object-contain mx-auto md:mx-0 md:-ml-2"
                            />
                        </Link>
                        <p className="text-slate-500 text-sm leading-7">
                            {t.hero.description}
                        </p>
                        <div className="space-y-3 pt-2">
                            <h5 className="font-bold text-slate-900 text-sm md:text-base text-center md:text-left">
                                {t.footer.followUs}
                            </h5>
                            <div className="flex gap-3 justify-center md:justify-start">
                                {[
                                    { Icon: FacebookIcon, href: CONFIG.socials.facebook },
                                    { Icon: InstagramIcon, href: CONFIG.socials.instagram },
                                    { Icon: TikTokIcon, href: CONFIG.socials.tiktok },
                                    { Icon: YouTubeIcon, href: CONFIG.socials.youtube },
                                ].map(({ Icon, href }, i) => (
                                    <a
                                        key={i}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-brand-neon hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-brand-neon/30"
                                    >
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div className="text-center md:text-left">
                        <h4 className="font-bold text-heading mb-6 text-sm uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
                            {t.footer.company}
                            <div className="hidden md:block h-px flex-1 bg-slate-100" />
                        </h4>
                        <ul className="space-y-2">
                            <FooterLink href="/about">{t.nav.about}</FooterLink>
                            <FooterLink href="/license">
                                {t.trust.viewLicense} <span className="text-blue-600 font-semibold">{t.trust.licenseClickHere}</span>
                            </FooterLink>
                            <FooterLink href="/portfolio">{t.nav.reviews}</FooterLink>
                            <FooterLink href="/contact">{t.nav.contact}</FooterLink>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div className="text-center md:text-left">
                        <h4 className="font-bold text-heading mb-6 text-sm uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
                            {t.footer.services}
                            <div className="hidden md:block h-px flex-1 bg-slate-100" />
                        </h4>
                        <ul className="space-y-2">
                            <FooterLink href="/services">{t.services.items.facebook}</FooterLink>
                            <FooterLink href="/services">{t.services.items.instagram}</FooterLink>
                            <FooterLink href="/services">{t.services.items.tiktok}</FooterLink>
                            <FooterLink href="/services">{t.services.items.youtube}</FooterLink>
                            <FooterLink href="/services">{t.services.items.web}</FooterLink>
                            <FooterLink href="/services">{t.services.items.graphics}</FooterLink>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="text-center md:text-left">
                        <h4 className="font-bold text-heading mb-6 text-sm uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
                            {t.footer.contact}
                            <div className="hidden md:block h-px flex-1 bg-slate-100" />
                        </h4>
                        <ul className="space-y-2">
                            <ContactItem icon={Mail} href={`mailto:${CONFIG.contact.email}`}>
                                {CONFIG.contact.email}
                            </ContactItem>
                            <ContactItem icon={Phone} href={`tel:${CONFIG.contact.phone}`}>
                                {CONFIG.contact.phoneDisplay}
                            </ContactItem>
                            <ContactItem icon={MapPin} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.contact.address)}`}>
                                {t.contact.address}
                            </ContactItem>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-6 flex flex-col items-center gap-4">
                    <p className="text-slate-400 text-xs font-medium text-center">
                        {t.footer.rights.replace('{year}', displayYear)}
                    </p>
                    <div className="text-xs font-medium text-slate-400 text-center">
                        Design & Developed by <a href="https://www.facebook.com/asmarketingbusiness1.bd" target="_blank" rel="noopener noreferrer" className="text-brand-neon hover:text-brand-neon/80 transition-colors">AS Marketing Business</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
