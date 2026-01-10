'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Quote, Briefcase, BadgeCheck, Fingerprint, Lightbulb, LineChart, Facebook, Instagram, Video, Youtube, Code, Palette, Megaphone } from 'lucide-react';
import { TikTokIcon } from '@/components/ui/BrandIcons';

// Specific Team Members List
const TEAM_MEMBERS = [
    {
        id: 'AS-002',
        name: 'Shajid Ahmed',
        role: 'Manager',
        image: '/team-shajid-ahmed-final.png'
    },
    {
        id: 'AS-003',
        name: 'MD Amenol',
        role: 'Senior Consultant',
        image: '/team-amenol-latest.png'
    },
    {
        id: 'AS-004',
        name: 'Shawon Hossen',
        role: 'Ads Analyzer',
        image: '/team-shawon-hossen-new.png'
    },
    {
        id: 'AS-005',
        name: 'Himu Khan',
        role: 'Facebook Ads Expert',
        image: '/team-himu-khan-final.png'
    },
    {
        id: 'AS-006',
        name: 'Shawon Ahmed',
        role: 'Facebook Ads Expert',
        image: '/team-shawon-ahmed-latest.png'
    },
    {
        id: 'AS-007',
        name: 'Abdul Al Galib',
        role: 'Facebook Ads Expert',
        image: '/team-galib-final.png'
    },
    {
        id: 'AS-008',
        name: 'Sumaiya',
        role: 'Tiktok Ads Expert',
        image: '/team-sumaiya.jpg'
    },
    {
        id: 'AS-009',
        name: 'Sabnur Akter',
        role: 'Tiktok Ads Expert',
        image: '/team-sabnur-akter.png'
    },
    {
        id: 'AS-010',
        name: 'Abdus Saif',
        role: 'Instagram Ads Expert',
        image: '/team-abdus-saif-new.png'
    },
    {
        id: 'AS-011',
        name: 'Prithibi Rahman',
        role: 'Google Ads Expert – YouTube Marketing',
        image: '/team-prithibi-new.png'
    },
    {
        id: 'AS-012',
        name: 'Jahangir Alam',
        role: 'Facebook Ads Expert',
        image: '/team-jahangir-alam.png'
    },
    {
        id: 'AS-013',
        name: 'Jobayer Hossain',
        role: 'Web Designer and Developer',
        image: '/team-jobayer-new.png'
    },
    {
        id: 'AS-014',
        name: ' ',
        role: 'Graphics Designer',
        image: '/team-mahedi-hasan.png'
    },
    {
        id: 'AS-015',
        name: 'Akhi Gazi',
        role: 'Facebook & Instagram Ads Expert',
        image: '/team-akhi-gazi.png'
    }
];

export const TeamSection = () => {
    const { t } = useLanguage();

    const getRoleIcon = (role: string) => {
        if (role.includes('Manager')) return <Briefcase size={16} className="text-orange-500" strokeWidth={2} />;
        if (role.includes('Consultant')) return <Lightbulb size={16} className="text-yellow-500" strokeWidth={2} />;
        if (role.includes('Analyzer')) return <LineChart size={16} className="text-blue-500" strokeWidth={2} />;
        if (role.includes('Facebook') && role.includes('Instagram')) return <Instagram size={16} className="text-pink-600" strokeWidth={2} />;
        if (role.includes('Facebook')) return <Facebook size={16} className="text-blue-600" strokeWidth={2} />;
        if (role.includes('Instagram')) return <Instagram size={16} className="text-pink-500" strokeWidth={2} />;
        if (role.includes('Tiktok')) return <TikTokIcon size={18} className="text-black" />;
        if (role.includes('Google') || role.includes('YouTube')) return <Youtube size={22} className="text-red-600 -mt-1.5" strokeWidth={2} />;
        if (role.includes('Web')) return <Code size={20} className="text-emerald-500 -mt-1 ml-1" strokeWidth={2} />;
        if (role.includes('Graphics')) return <Palette size={16} className="text-purple-500" strokeWidth={2} />;
        return <Briefcase size={16} className="text-orange-500" strokeWidth={2} />;
    };

    const TeamCard = ({ member, index }: { member: any, index: number }) => {
        // Get translated name and role, fallback to original if not found
        const translatedMember = t.team.members[member.id] || { name: member.name, role: member.role };
        // Use the original english role for icon matching to ensure consistency
        const Icon = getRoleIcon(member.role);

        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-100 border border-brand-neon/30 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-xl"
            >
                <div className={`relative w-24 h-24 mb-4 rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-white border-2 border-brand-neon/50 transition-colors ${member.id === 'AS-002' ? 'p-3' : member.id === 'AS-006' ? 'p-1' : ''}`}>
                    <div className={`relative w-full h-full 
                        ${['AS-002', 'AS-003', 'AS-005', 'AS-007'].includes(member.id) ? 'translate-y-2' : ''} 
                        ${['AS-005', 'AS-012', 'AS-006', 'AS-007'].includes(member.id) ? 'scale-125' : ''}
                        ${['AS-013'].includes(member.id) ? 'scale-[1.4]' : ''}
                        ${member.id === 'AS-003' ? 'scale-[1.6]' : ''}
                        ${member.id === 'AS-002' ? 'scale-[1.9]' : ''}
                        ${['AS-008', 'AS-009'].includes(member.id) ? 'scale-90' : ''}
                    `}>
                        <Image
                            src={member.image}
                            alt={translatedMember.name}
                            fill
                            className="object-cover object-center"
                            sizes="96px"
                        />
                    </div>
                    <div className="absolute bottom-0 right-0 p-1 bg-green-500 rounded-full border-2 border-white z-10" title={t.tooltips.active}></div>
                </div>

                <h4 className="font-bold text-lg text-heading mb-1 group-hover:text-brand-neon transition-colors">
                    {translatedMember.name}
                </h4>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full mb-3 border border-slate-100">
                    <Fingerprint size={12} />
                    <span>ID: {member.id}</span>
                </div>

                <p className="text-sm font-medium text-slate-500 flex items-center justify-center gap-1.5 w-full pt-3 border-t border-slate-50">
                    {Icon}
                    {translatedMember.role}
                </p>
            </motion.div>
        );
    };

    return (
        <section className="relative py-12 md:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(10,26,255,0.03),transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-heading mb-4"
                    >
                        {t.team.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-500"
                    >
                        {t.team.subtitle}
                    </motion.p>
                    <div className="w-24 h-1 bg-gradient-to-r from-brand-neon to-purple-500 mx-auto rounded-full mt-6" />
                </div>

                {/* CEO Card - Premium & Highlighted */}
                <div className="mb-10 md:mb-20 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: 0.8 }}
                        className="relative w-full max-w-5xl"
                    >
                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-brand-neon/20 via-purple-500/20 to-pink-500/20 rounded-[2.5rem] blur-2xl opacity-50 animate-pulse" />

                        <div className="relative bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-white/50 backdrop-blur-sm flex flex-col md:flex-row items-center gap-10 md:gap-16">

                            {/* CEO Image */}
                            <div className="relative group shrink-0">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-neon to-purple-600 rounded-[2rem] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500" />
                                <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-[1.8rem] overflow-hidden shadow-xl border-4 border-white top-0 group-hover:-top-2 transition-all duration-500">
                                    <Image
                                        src="/ceo-new.png" // Using the same CEO image
                                        alt={t.ceo.name}
                                        fill
                                        className="object-cover object-top"
                                        priority
                                    />
                                </div>
                                {/* Badge */}
                                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center">
                                    <BadgeCheck className="text-brand-neon w-8 h-8 mb-1" />
                                    <span className="text-xs font-bold text-heading">FOUNDER</span>
                                </div>
                            </div>

                            {/* CEO Info */}
                            <div className="text-center md:text-left space-y-6 flex-1">
                                <div className="flex items-start gap-1 md:gap-3">
                                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-brand-neon/40 transform -scale-x-100 shrink-0 -mt-1 md:-mt-2" />
                                    <blockquote className="text-xl md:text-3xl font-bold text-heading italic leading-tight">
                                        "{t.ceo.quote}"
                                    </blockquote>
                                </div>

                                <div>
                                    <h3
                                        className="text-4xl md:text-5xl font-extrabold mb-2"
                                        style={{
                                            color: '#000000',
                                            WebkitTextFillColor: '#000000',
                                            background: 'none',
                                            backgroundImage: 'none'
                                        }}
                                    >
                                        {t.ceo.name}
                                    </h3>
                                    <p className="text-xl md:text-2xl text-brand-neon font-bold flex items-center justify-center md:justify-start gap-3">
                                        <span className="w-10 h-0.5 bg-brand-neon hidden md:block" />
                                        {t.ceo.role}
                                        <span className="text-sm font-normal text-slate-400 bg-slate-100 px-3 py-1 rounded-full ml-2">ID: AS-001</span>
                                    </p>
                                </div>

                                <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
                                    {t.ceo.description}
                                </p>


                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Other Experts Heading */}
                <div className="flex justify-center mb-6 md:mb-12">
                    <div className="bg-[#E6F3FF] border border-blue-100 px-12 py-4 rounded-xl shadow-sm">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-wide">
                            {t.team.expertTeam}
                        </h3>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
                    {TEAM_MEMBERS.map((member, index) => (
                        <TeamCard key={index} member={member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
