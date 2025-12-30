'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Quote, Briefcase, BadgeCheck, Fingerprint } from 'lucide-react';

// Mock Data for Team Members (14 members)
const generateTeamMembers = () => {
    const roles = [
        'Operations Manager', // 002
        'Senior Web Developer', // 003
        'Head of Digital Marketing', // 004
        'Creative Director', // 005
        'Meta Ads Expert', // 006 (Inzi Haq)
        'Content Manager', // 007
        'Social Media Strategist', // 008
        'Senior Graphic Designer', // 009
        'Video Production Lead', // 010
        'Client Relations Manager', // 011
        'Performance Marketer', // 012
        'Support Lead', // 013
        'Business Development', // 014
        'Technical Specialist' // 015
    ];

    return roles.map((role, idx) => {
        const idNumber = idx + 2; // Start from 002 (CEO is 001)
        const idString = idNumber.toString().padStart(3, '0');
        const id = `AS-${idString}`;

        // Specific overrides
        if (id === 'AS-002') {
            return {
                id,
                name: 'Shawon Ahmed',
                role: 'Meta Ads Expert (Facebook)',
                image: '/team-shawon-ahmed.jpg'
            };
        }

        if (id === 'AS-003') {
            return {
                id,
                name: 'Md Abdul Al Galib',
                role: 'Meta Ads Expert (Facebook)',
                image: '/team-galib.png'
            };
        }

        if (id === 'AS-004') {
            return {
                id,
                name: 'Md Amenol',
                role: 'Head of Marketing',
                image: '/team-amenol.png'
            };
        }

        if (id === 'AS-006') {
            return {
                id,
                name: 'Inzi Haq',
                role: 'Meta Ads Expert',
                image: '/team-inzi-haq.jpg'
            };
        }

        if (id === 'AS-008') {
            return {
                id,
                name: 'Jaidul Islam',
                role: 'Meta Ads Expert (Instagram)',
                image: '/team-jaidul.png'
            };
        }

        if (id === 'AS-009') {
            return {
                id,
                name: 'Tahmid Sadiq',
                role: 'Meta Ads Expert (Instagram)',
                image: '/team-tahmid.jpg'
            };
        }

        if (id === 'AS-010') {
            return {
                id,
                name: 'Jobayer Hossain',
                role: 'Web Designer and Developer',
                image: '/team-jobayer.png'
            };
        }

        if (id === 'AS-011') {
            return {
                id,
                name: 'Md Mehedi Hasan',
                role: 'Graphics Designer',
                image: `https://api.dicebear.com/7.x/micah/svg?seed=AS011&backgroundColor=b6e3f4,c0aede,d1d4f9`
            };
        }

        if (id === 'AS-012') {
            return {
                id,
                name: 'Md Abdus Saif',
                role: 'Tiktok Ads Expert',
                image: '/team-abdus-saif.png'
            };
        }

        if (id === 'AS-013') {
            return {
                id,
                name: 'SM Prithibi Rahman',
                role: 'Google Ads Expert (YouTube Marketing)',
                image: '/team-prithibi.png'
            };
        }

        if (id === 'AS-014') {
            return {
                id,
                name: 'Md Shawon Hosse',
                role: 'Ads Analyzer',
                image: '/team-shawon.png'
            };
        }

        if (id === 'AS-015') {
            return {
                id,
                name: 'Shajid Ahmed',
                role: 'Manager',
                image: '/team-shajid-ahmed.png'
            };
        }


        return {
            id,
            name: `Team Member ${idNumber}`,
            role: role,
            image: `https://api.dicebear.com/7.x/micah/svg?seed=AS${idx}&backgroundColor=b6e3f4,c0aede,d1d4f9`
        };
    });
};

const TEAM_MEMBERS = generateTeamMembers();

export const TeamSection = () => {
    const { t } = useLanguage();

    const TeamCard = ({ member, index }: { member: any, index: number }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-100 border border-slate-100 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-xl hover:border-brand-neon/30"
        >
            <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-white border-2 border-slate-100 group-hover:border-brand-neon/50 transition-colors">
                <div className="relative w-full h-full">
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-center"
                        sizes="96px"
                    />
                </div>
                <div className="absolute bottom-0 right-0 p-1 bg-green-500 rounded-full border-2 border-white z-10" title={t.tooltips.active}></div>
            </div>

            <h4 className="font-bold text-lg text-heading mb-1 group-hover:text-brand-neon transition-colors">
                {member.name}
            </h4>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full mb-3 border border-slate-100">
                <Fingerprint size={12} />
                <span>ID: {member.id}</span>
            </div>

            <p className="text-sm font-medium text-slate-500 flex items-center justify-center gap-1.5 w-full pt-3 border-t border-slate-50">
                <Briefcase size={14} className="text-brand-sky" />
                {member.role}
            </p>
        </motion.div>
    );

    return (
        <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(10,26,255,0.03),transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
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
                <div className="mb-20 flex justify-center">
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
                                <div className="relative inline-block">
                                    <Quote className="absolute -top-4 -left-6 w-10 h-10 text-brand-neon/10 transform -scale-x-100" />
                                    <blockquote className="text-2xl md:text-3xl font-bold text-heading italic leading-tight relative z-10">
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

                {/* Team Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
                    {TEAM_MEMBERS.map((member, index) => (
                        <TeamCard key={index} member={member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
