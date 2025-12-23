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
        viewLicense: string;
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
    ceo: {
        title: string;
        name: string;
        role: string;
        quote: string;
        description: string;
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
            subtitle: 'বিশ্বাসের একটি নাম',
            description: 'আমরা আধুনিক ডিজিটাল মার্কেটিং স্ট্র্যাটেজির মাধ্যমে আপনার ব্যবসাকে অনলাইনে দ্রুত গ্রো করতে সহায়তা করি।',
            ctaPrimary: 'ফেসবুকে মেসেজ দিন',
            ctaSecondary: 'WhatsApp এ যোগাযোগ করুন',
        },
        services: {
            title: 'আমাদের প্রিমিয়াম সার্ভিসসমূহ',
            items: {
                facebook: 'ফেসবুক সার্ভিস (Meta Ads)',
                instagram: 'ইনস্টাগ্রাম সার্ভিস (Meta Ads)',
                tiktok: 'টিকটক সার্ভিস',
                youtube: 'ইউটিউব ও ভিডিও সার্ভিস',
                web: 'ওয়েবসাইট সলিউশন',
                graphics: 'ডিজাইন ও ব্র্যান্ডিং',
            },
            details: {
                facebook: [
                    'এড ক্যাম্পেইন',
                    'প্রফেশনাল এড',
                    'পিক্সেল এ‍ড',
                    'রেগুলার এড',
                    'ফেসবুক ফলোয়ার'
                ],
                instagram: [
                    'এড ক্যাম্পেইন',
                    'প্রফেশনাল এড',
                    'পিক্সেল এ‍ড',
                    'রেগুলার এড',
                    'ইনস্টাগ্রাম ফলোয়ার'
                ],
                tiktok: [
                    'এড ক্যাম্পেইন',
                    'ভিডিও প্রমোট (লাইক, কমেন্ট, শেয়ার, ভিউ)',
                    'টিকটক ফলোয়ার',
                    'কয়েন রিচার্জ'
                ],
                youtube: [
                    'ইউটিউবে প্রোডাক্ট মার্কেটিং',
                    'সাবস্ক্রাইবার',
                    'ওয়াচ টাইম',
                    'ভিডিওতে লাইক, কমেন্ট ও শেয়ার',
                    'প্রফেশনাল এ্যাডস ক্যাম্পেইন',
                    'গুগল অ্যাডসেন্স পিন ভেরিফাই',
                    'ইউটিউব চ্যানেল মনিটাইজ',
                    'ইউটিউব প্রিমিয়াম'
                ],
                web: [
                    'ডোমেইন',
                    'হোস্টিং',
                    'কাস্টম ওয়েবসাইট ডেভলপমেন্ট',
                    'ল্যান্ডিং পেজ',
                    'এসইও অপটিমাইজড',
                    'গ্লোবাল স্ক্যালেবিলিটি',
                    'সিনেমাটিক ইউআই/ইউ এক্স',
                    'ভিজ্যুয়াল আইডেন্টিটি ডিজাইন',
                    'ওয়েবসাইট রিডিজাইন',
                    'আপগ্রেড ওল্ড স্ট্রাকচার'
                ],
                graphics: [
                    'ব্র্যান্ডিং লোগো, ব্র্যান্ড আইডেন্টিটি',
                    'ডিজিটাল ও সোশ্যাল মিডিয়া',
                    'ব্যানার ও কভার ফটো',
                    'বিজ্ঞাপন (Ads) ডিজাইন',
                    'ফটো এডিটিং',
                    'ভেক্টর ট্রেসিং',
                    'ইলাস্ট্রেশন'
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
                    desc: 'আমরা একটি সরকার অনুমোদিত আইটি কোম্পানি (ট্রেড লাইসেন্স নং: ০৭৬১৪)। আপনার বিশ্বাস ও নিরাপত্তাই আমাদের প্রধান লক্ষ্য।',
                    image: '/license.png'
                }
            ],
            viewLicense: 'লাইসেন্স দেখুন',
        },
        proofs: {
            title: 'ক্লায়েন্ট রিভিউ (Client Reviews)',
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
        ceo: {
            title: 'আমাদের নেতৃত্ব',
            name: 'সোহানুর রহমান',
            role: 'সিইও এবং প্রতিষ্ঠাতা',
            quote: 'সফলতা শুধু লক্ষ্য নয়, এটি একটি যাত্রা।',
            description: 'বিশ্বমানের ডিজিটাল মার্কেটিং সেবা প্রদানের মাধ্যমে ব্যবসায়িক সাফল্যের নতুন দিগন্ত উন্মোচনের স্বপ্ন নিয়ে AS Marketing Business প্রতিষ্ঠা করেছি। আমাদের লক্ষ্য হলো প্রতিটি ক্লায়েন্টের জন্য সেরা ফলাফল এবং দীর্ঘমেয়াদী সাফল্য নিশ্চিত করা।'
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
                facebook: 'Facebook Services (Meta Ads)',
                instagram: 'Instagram Services (Meta Ads)',
                tiktok: 'TikTok Services',
                youtube: 'YouTube & Video Services',
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
                    'Ad Campaign',
                    'Video Promotion (Like, Comment, Share, View)',
                    'TikTok Followers',
                    'Coin Recharge'
                ],
                youtube: [
                    'YouTube Product Marketing',
                    'Subscribers',
                    'Watch Time',
                    'Video Engagement (Like, Comment, Share)',
                    'Professional Ads Campaign',
                    'Google AdSense Pin Verification',
                    'YouTube Channel Monetization',
                    'YouTube Premium'
                ],
                web: [
                    'Domain',
                    'Hosting',
                    'Custom Website Development',
                    'Landing Page',
                    'SEO Optimized',
                    'Global Scalability',
                    'Cinematic UI/UX',
                    'Visual Identity Design',
                    'Website Redesign',
                    'Upgrade Old Structure'
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
            ],
            viewLicense: 'View License',
        },
        proofs: {
            title: 'Client Reviews',
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
        ceo: {
            title: 'Our Leadership',
            name: 'Sohanur Rahman',
            role: 'CEO & Founder',
            quote: 'Success is not just a goal, it\'s a journey.',
            description: 'I founded AS Marketing Business with a vision to unlock new horizons of business success through world-class digital marketing services. Our goal is to ensure the best results and long-term success for every client.'
        },
    },
};
