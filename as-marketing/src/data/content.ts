export type Language = 'bn' | 'en';

export interface Content {
    nav: {
        home: string;
        services: string;
        reviews: string;
        pricing: string;
        about: string;
        contact: string;
        cta: string;
    };
    hero: {
        title: string;
        subtitle: string;
        description: string;
        ctaPrimary: string;
        ctaSecondary: string;
    };
    services: {
        title: string;
        items: {
            facebook: string;
            instagram: string;
            tiktok: string;
            youtube: string;
            web: string;
            graphics: string;
        };
        details: {
            facebook: string[];
            instagram: string[];
            tiktok: string[];
            youtube: string[];
            web: string[];
            graphics: string[];
        };
    };
    trust: {
        title: string;
        description: string;
        points: { title: string; desc: string; image?: string; }[];
    };
    proofs: {
        title: string;
        description: string;
        viewProof: string;
    };
    reviews: {
        title: string;
        description: string;
        readMore: string;
        items: {
            id: number;
            name: string;
            role: string;
            rating: number;
            text: string;
            longText?: string;
        }[];
    };
    footer: {
        rights: string;
    };
}

export const content: Record<Language, Content> = {
    bn: {
        nav: {
            home: 'হোম',
            services: 'সার্ভিস',
            reviews: 'ক্লায়েন্ট রিভিউ',
            pricing: 'প্যাকেজ',
            about: 'আমাদের সম্পর্কে',
            contact: 'যোগাযোগ',
            cta: 'ফেসবুকে মেসেজ দিন',
        },
        hero: {
            title: 'AS Marketing Business',
            subtitle: 'বিশ্বাসের নাম',
            description: 'আমরা আধুনিক ডিজিটাল মার্কেটিং স্ট্র্যাটেজির মাধ্যমে আপনার ব্যবসাকে অনলাইনে দ্রুত গ্রো করতে সহায়তা করি।',
            ctaPrimary: 'ফেসবুকে মেসেজ দিন',
            ctaSecondary: 'WhatsApp এ যোগাযোগ করুন',
        },
        services: {
            title: 'আমাদের প্রিমিয়াম সার্ভিসসমূহ',
            items: {
                facebook: 'ফেসবুক মার্কেটিং (Meta Ads)',
                instagram: 'ইনস্টাগ্রাম মার্কেটিং (Meta Ads)',
                tiktok: 'টিকটক মার্কেটিং',
                youtube: 'ইউটিউব ও ভিডিও মার্কেটিং',
                web: 'ওয়েবসাইট সলিউশন',
                graphics: 'ডিজাইন ও ব্র্যান্ডিং',
            },
            details: {
                facebook: [
                    'টার্গেটেড অ্যাড ক্যাম্পেইন ও প্রফেশনাল অ্যাড সেটআপ',
                    'কনভার্সন ট্র্যাকিংয়ের জন্য ফেসবুক পিক্সেল (Pixel) সেটআপ',
                    'রেগুলার এনগেজমেন্ট অ্যাড এবং রিয়েল ফলোয়ার সার্ভিস',
                    'অডিয়েন্স রি-টার্গেটিং ও সেলস ফানেল তৈরি'
                ],
                instagram: [
                    'টার্গেটেড অ্যাড ক্যাম্পেইন ও প্রফেশনাল অ্যাড সেটআপ',
                    'কনভার্সন ট্র্যাকিংয়ের জন্য ফেসবুক পিক্সেল (Pixel) সেটআপ',
                    'রেগুলার এনগেজমেন্ট অ্যাড এবং রিয়েল ফলোয়ার সার্ভিস',
                    'স্টোরি ও রিলস প্রোমোশন'
                ],
                tiktok: [
                    'টিকটক অ্যাড ক্যাম্পেইন ও ভিডিও প্রমোট',
                    'অর্গানিক ফলোয়ার বৃদ্ধি এবং এনগেজমেন্ট সলিউশন',
                    'অফিশিয়াল কয়েন রিচার্জ সুবিধা',
                    'ভাইরাল কন্টেন্ট স্ট্র্যাটেজি'
                ],
                youtube: [
                    'প্রোডাক্ট মার্কেটিং ও প্রফেশনাল অ্যাড ক্যাম্পেইন',
                    'চ্যানেল মনিটাইজেশন, সাবস্ক্রাইবার এবং ওয়াচ-টাইম সার্ভিস',
                    'ভিডিও প্রমোশন (লাইক, কমেন্ট, শেয়ার)',
                    'গুগল অ্যাডসেন্স পিন ভেরিফিকেশন ও ইউটিউব প্রিমিয়াম'
                ],
                web: [
                    'ডোমেইন ও হাই-স্পিড হোস্টিং',
                    'কাস্টম ওয়েবসাইট ডেভেলপমেন্ট ও ল্যান্ডিং পেজ ডিজাইন',
                    'সিনেমাটিক UI/UX এবং ভিজ্যুয়াল আইডেন্টিটি ডিজাইন',
                    'পুরানো ওয়েবসাইট রি-ডিজাইন ও স্ট্রাকচার আপগ্রেড',
                    'ফুল এসইও (SEO) অপটিমাইজেশন ও গ্লোবাল স্ক্যালেবিলিটি'
                ],
                graphics: [
                    'প্রফেশনাল গ্রাফিক্স ডিজাইন',
                    'লোগো ও ব্র্যান্ড বুক তৈরি',
                    'সোশ্যাল মিডিয়া কন্টেন্ট ডিজাইন',
                    'প্রোমোশনাল ব্যানার ও পোস্টার ডিজাইন'
                ],
            },
        },
        trust: {
            title: 'কেন আমাদের বেছে নেবেন?',
            description: 'আমরা শুধু সার্ভিস দিই না, আমরা ফলাফল তৈরি করি।',
            points: [
                {
                    title: 'স্বীকৃত ও বিশ্বস্ত',
                    desc: 'আমরা একটি সরকারি লাইসেন্সপ্রাপ্ত অনুমোদিত আইটি প্রতিষ্ঠান, যা আপনার বিনিয়োগের নিরাপত্তা নিশ্চিত করে।'
                },
                {
                    title: 'দক্ষ বিশেষজ্ঞ টিম',
                    desc: 'আমাদের রয়েছে অভিজ্ঞ ডিজিটাল মার্কেটিং টিম, যারা সঠিক অডিয়েন্স টার্গেটিংয়ের মাধ্যমে আপনার বিজ্ঞাপনের সর্বোচ্চ ফলাফল (ROI) নিশ্চিত করে।'
                },
                {
                    title: 'বাস্তবসম্মত পরামর্শ',
                    desc: 'আমরা শুধু বুস্ট করি না, বরং আপনার বিজনেস গ্রোথের জন্য প্রয়োজনীয় গাইডলাইন প্রদান করি।'
                },
                {
                    title: 'অব্যাহত সাপোর্ট',
                    desc: 'টেকনিক্যাল কারণে কোনো বিজ্ঞাপন বন্ধ হলে বা সমস্যা দেখা দিলে আমাদের এক্সপার্ট টিম দ্রুত তা সমাধান করে দেয়।'
                },
                {
                    title: 'স্বচ্ছতা ও সত্যনিষ্ঠা',
                    desc: 'ফেসবুক বা ডিজিটাল প্ল্যাটফর্মের অ্যালগরিদম প্রতিনিয়ত পরিবর্তনশীল। তাই আমরা মিথ্যে আশ্বাস না দিয়ে ডাটা এবং স্ট্র্যাটেজির ওপর ভিত্তি করে কাজ করি।'
                },
                {
                    title: 'সরকারিভাবে অনুমোদিত',
                    desc: 'আমরা একটি সরকারি রেজিস্টার্ড আইটি এজেন্সি ( ট্রেড লাইসেন্স নং: ... )। আপনার বিশ্বাস ও নিরাপত্তাই আমাদের প্রধান লক্ষ্য।',
                    image: '/license.png'
                }
            ]
        },
        proofs: {
            title: 'সাকসেস প্রুফ (Success Proofs)',
            description: 'আমাদের কাজের বাস্তব ফলাফল দেখুন। আমরা কথায় নয়, কাজে বিশ্বাসী।',
            viewProof: 'প্রুফ দেখুন',
        },
        reviews: {
            title: 'ক্লায়েন্ট রিভিউ',
            description: 'আমাদের মূল্যবান গ্রাহকরা আমাদের সেবা এবং সাফল্য সম্পর্কে কী বলছেন তা দেখুন।',
            readMore: 'আরও পড়ুন...',
            items: [
                {
                    id: 1,
                    name: 'রহিম আহমেদ',
                    role: 'সিইও, টেকসলিউশন',
                    rating: 5,
                    text: 'AS Marketing আমাদের অনলাইন উপস্থিতি বদলে দিয়েছে। তাদের টার্গেটেড ফেসবুক অ্যাডস মাত্র এক মাসে আমাদের লিড দ্বিগুণ করেছে!',
                    longText: 'AS Marketing আমাদের অনলাইন উপস্থিতি বদলে দিয়েছে। তাদের টার্গেটেড ফেসবুক অ্যাডস মাত্র এক মাসে আমাদের লিড দ্বিগুণ করেছে! তাদের টিম অত্যন্ত প্রফেশনাল এবং সাপ্তাহিক রিপোর্ট দেয় যা আমাদের ROI বুঝতে সাহায্য করে।'
                },
                {
                    id: 2,
                    name: 'ফাতেমা খান',
                    role: 'স্বত্তাধিকারী, স্টাইলস বুটিক',
                    rating: 5,
                    text: 'অসাধারন টিম! আমাদের নতুন কালেকশনের ভিডিও মার্কেটিং ক্যাম্পেইন টিকটকে ভাইরাল হয়েছে। হাইলি রিকমেন্ডেড।',
                    longText: 'অসাধারন টিম! আমাদের নতুন কালেকশনের ভিডিও মার্কেটিং ক্যাম্পেইন টিকটকে ভাইরাল হয়েছে। আমরা স্টোর ভিজিট এবং অনলাইন অর্ডারে ৩০০% বৃদ্ধি দেখেছি। তাদের ক্রিয়েটিভ টিম ফ্যাশন ইন্ডাস্ট্রি খুব ভালো বোঝে।'
                },
                {
                    id: 3,
                    name: 'তানভীর হাসান',
                    role: 'প্রতিষ্ঠাতা, ফুডি এক্সপোজ',
                    rating: 5,
                    text: 'প্রফেশনাল, নির্ভরযোগ্য এবং স্বচ্ছ। তারা ঠিক যা প্রতিশ্রুতি দিয়েছিল, তাই দিয়েছে—প্রকৃত গ্রোথ এবং এনগেজমেন্ট।',
                    longText: 'প্রফেশনাল, নির্ভরযোগ্য এবং স্বচ্ছ। তারা ঠিক যা প্রতিশ্রুতি দিয়েছিল, তাই দিয়েছে—প্রকৃত গ্রোথ এবং এনগেজমেন্ট। অন্যান্য এজেন্সির মতো তারা বটস ব্যবহার করেনি। সব ফলোয়ার এবং লাইক অর্গানিক ছিল।'
                },
                {
                    id: 4,
                    name: 'নুসরাত জাহান',
                    role: 'ম্যানেজার, এডুকেয়ার',
                    rating: 4,
                    text: 'AS Marketing এর সাথে কাজ করার অভিজ্ঞতা দারুণ। তাদের ওয়েব টিম আমাদের জন্য একটি চমৎকার ও ফাস্ট ওয়েবসাইট তৈরি করেছে।',
                    longText: 'AS Marketing এর সাথে কাজ করার অভিজ্ঞতা দারুণ। তাদের ওয়েব টিম আমাদের জন্য একটি চমৎকার ও ফাস্ট ওয়েবসাইট তৈরি করেছে। এটি মোবাইল রেসপন্সিভ এবং ম্যানেজ করা খুব সহজ। সাপোর্ট খুব ভালো ছিল।'
                }
            ]
        },
        footer: {
            rights: '© ২০২০-২০২৫ AS Marketing Business. সর্বস্বত্ব সংরক্ষিত।',
        },
    },
    en: {
        nav: {
            home: 'Home',
            services: 'Services',
            reviews: 'Client Reviews',
            pricing: 'Packages',
            about: 'About Us',
            contact: 'Contact',
            cta: 'Message on Facebook',
        },
        hero: {
            title: 'AS Marketing Business',
            subtitle: 'A Name of Trust',
            description: 'We help businesses grow fast online through modern digital marketing strategies.',
            ctaPrimary: 'Message on Facebook',
            ctaSecondary: 'Connect on WhatsApp',
        },
        services: {
            title: 'Our Premium Services',
            items: {
                facebook: 'Facebook Marketing (Meta Ads)',
                instagram: 'Instagram Marketing (Meta Ads)',
                tiktok: 'TikTok Marketing',
                youtube: 'YouTube & Video Marketing',
                web: 'Website Solutions',
                graphics: 'Design & Branding',
            },
            details: {
                facebook: [
                    'Targeted Ad Campaigns & Professional Ad Setup',
                    'Facebook Pixel Setup for Conversion Tracking',
                    'Regular Engagement Ads & Real Follower Service',
                    'Audience Retargeting & Sales Funnel Creation'
                ],
                instagram: [
                    'Targeted Ad Campaigns & Professional Ad Setup',
                    'Facebook Pixel Setup for Conversion Tracking',
                    'Regular Engagement Ads & Real Follower Service',
                    'Story & Reels Promotion'
                ],
                tiktok: [
                    'TikTok Ad Campaigns & Video Promotion',
                    'Organic Follower Growth & Engagement Solutions',
                    'Official Coin Recharge Facility',
                    'Viral Content Strategy'
                ],
                youtube: [
                    'Product Marketing & Professional Ad Campaigns',
                    'Channel Monetization, Subscribers & Watch-Time Service',
                    'Video Promotion (Like, Comment, Share)',
                    'Google AdSense Pin Verification & YouTube Premium'
                ],
                web: [
                    'Domain & High-Speed Hosting',
                    'Custom Website Development & Landing Page Design',
                    'Cinematic UI/UX & Visual Identity Design',
                    'Old Website Redesign & Structure Upgrade',
                    'Full SEO Optimization & Global Scalability'
                ],
                graphics: [
                    'Professional Graphics Design',
                    'Logo & Brand Book Creation',
                    'Social Media Content Design',
                    'Promotional Banner & Poster Design'
                ],
            },
        },
        trust: {
            title: 'Why Choose Us?',
            description: 'We don\'t just deliver services; we deliver results.',
            points: [
                {
                    title: 'Authorized & Trusted',
                    desc: 'We are a government-licensed authorized IT institution, ensuring the safety of your investment.'
                },
                {
                    title: 'Expert Team',
                    desc: 'We have an experienced digital marketing team that ensures the highest ROI for your ads through precise audience targeting.'
                },
                {
                    title: 'Realistic Advice',
                    desc: 'We don\'t just boost; we provide necessary guidelines for your business growth.'
                },
                {
                    title: 'Continuous Support',
                    desc: 'If any ad stops due to technical reasons or issues arise, our expert team resolves it quickly.'
                },
                {
                    title: 'Transparency & Integrity',
                    desc: 'We work based on data and strategy, not false promises, adapting to ever-changing digital algorithms.'
                },
                {
                    title: 'Government Approved',
                    desc: 'We are a government registered IT agency (Trade License No: ...). Your trust and security is our main goal.',
                    image: '/license.png'
                }
            ]
        },
        proofs: {
            title: 'Success Proofs',
            description: 'See the real results of our work. We believe in action, not just words.',
            viewProof: 'View Proof',
        },
        reviews: {
            title: 'Client Reviews',
            description: 'See what our valuable clients have to say about our services and their success stories.',
            readMore: 'Read more...',
            items: [
                {
                    id: 1,
                    name: 'Rahim Ahmed',
                    role: 'CEO, TechSolutions',
                    rating: 5,
                    text: 'AS Marketing transformed our online presence. Their targeted Facebook ads doubled our leads in just one month!',
                    longText: 'AS Marketing transformed our online presence. Their targeted Facebook ads doubled our leads in just one month! Their team is extremely professional and provides weekly reports helping us understand our ROI.'
                },
                {
                    id: 2,
                    name: 'Fatema Khan',
                    role: 'Owner, Styles Boutique',
                    rating: 5,
                    text: 'Amazing team! Our new collection video marketing campaign went viral on TikTok. Highly recommended.',
                    longText: 'Amazing team! Our new collection video marketing campaign went viral on TikTok. We saw a 300% increase in store visits and online orders. Their creative team really understands the fashion industry.'
                },
                {
                    id: 3,
                    name: 'Tanvir Hasan',
                    role: 'Founder, FoodieXpos',
                    rating: 5,
                    text: 'Professional, reliable, and transparent. They delivered exactly what they promised - real growth and engagement.',
                    longText: 'Professional, reliable, and transparent. They delivered exactly what they promised - real growth and engagement. Unlike other agencies, they didn\'t use bots. All followers and likes were organic.'
                },
                {
                    id: 4,
                    name: 'Nusrat Jahan',
                    role: 'Manager, EduCare',
                    rating: 4,
                    text: 'Great experience working with AS Marketing. Their web team built a sleek, fast website for us.',
                    longText: 'Great experience working with AS Marketing. Their web team built a sleek, fast website for us. It is mobile responsive and very easy to manage. Support was excellent.'
                }
            ]
        },
        footer: {
            rights: '© 2020-2025 AS Marketing Business. All rights reserved.',
        },
    },
};
