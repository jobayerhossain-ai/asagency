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
        bismillah: string;
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
        seeDetails: string;
        orderButton: string;
        orderMessage: string;
    };
    trust: {
        title: string;
        description: string;
        points: { title: string; desc: string; image?: string; }[];
        viewLicense: string;
        tradeLicenseCaption: string;
        licenseClickHere: string;
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
        followUs: string;
        company: string;
        services: string;
        contact: string;
    };
    ceo: {
        title: string;
        name: string;
        role: string;
        quote: string;
        description: string;
    };
    team: {
        title: string;
        subtitle: string;
        expertTeam: string;
        members: {
            [key: string]: {
                name: string;
                role: string;
            };
        };
    };
    contact: {
        phoneWhatsapp: string;
        callNow: string;
        chatWhatsApp: string;
        emailUs: string;
        sendEmail: string;
        visitOffice: string;
        followSocial: string;
        whatsappTooltip: string;
        phoneTitle: string;
        whatsappTitle: string;
        address: string;
    };
    payment: {
        modalTitle: string;
        merchantNumber: string;
        howToPay: string;
        scanDirectly: string;
        methodsTitle: string;
        clickToPay: string;
        instructions: {
            bkash: string[];
            nagad: string[];
            rocket: string[];
            npsb: string[];
        };
    };
    pricing: {
        title: string;
        whatsappMessage: string;
        noteLabel: string;
    };
    about: {
        thankYouMessage: string;
    };
    license: {
        title: string;
        description: string;
    };
    tooltips: {
        active: string;
        orderWhatsapp: string;
        officeLocation: string;
        googleMap: string;
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
            bismillah: 'বিসমিল্লাহির রাহমানির রাহিম',
            title: 'AS Marketing Business',
            subtitle: 'বিশ্বাসের একটি নাম',
            description: 'আমরা আধুনিক ডিজিটাল মার্কেটিং স্ট্র্যাটেজির মাধ্যমে আপনার ব্যবসাকে অনলাইনে দ্রুত গ্রো করতে সহায়তা করি।',
            ctaPrimary: 'ফেসবুকে মেসেজ দিন',
            ctaSecondary: 'হোয়াটসঅ্যাপ এ যোগাযোগ করুন',
        },
        services: {
            title: 'আমাদের প্রিমিয়াম সার্ভিসসমূহ',
            items: {
                facebook: 'ফেসবুক সার্ভিস',
                instagram: 'ইনস্টাগ্রাম সার্ভিস',
                tiktok: 'টিকটক সার্ভিস',
                youtube: 'ইউটিউব সার্ভিস',
                web: 'ওয়েব সলিউশনস',
                graphics: 'ডিজাইন ও ব্র্যান্ডিং',
            },
            seeDetails: 'বিস্তারিত দেখুন →',
            orderButton: 'অর্ডার করতে চাই',
            orderMessage: 'আমি আপনাদের {service} সার্ভিসটি নিতে চাই',
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
            title: 'কেন আমাদের বেছে নিবেন?',
            description: 'আমরা শুধু সার্ভিস দেই না, আমরা ফলাফল তৈরি করি।',
            points: [
                {
                    title: 'স্বীকৃত ও বিশ্বস্ত',
                    desc: 'আমরা একটি সরকারি অনুমোদিত আইটি প্রতিষ্ঠান (ট্রেড লাইসেন্স নাম্বার-07614), যা আপনার বিনিয়োগের নিরাপত্তা নিশ্চিত করে।',
                    image: '/license.png'
                },
                {
                    title: 'দক্ষ বিশেষজ্ঞ টিম',
                    desc: 'আমাদের রয়েছে অভিজ্ঞ ডিজিটাল মার্কেটিং টিম, যারা সঠিক অডিয়েন্স টার্গেটিংয়ের মাধ্যমে আপনার বিজ্ঞাপনের সর্বোচ্চ ফলাফল (ROI) নিশ্চিত করে।'
                },
                {
                    title: 'বাস্তবসম্মত পরামর্শ',
                    desc: 'আমরা শুধু কাজ করি না, বরং আপনার বিজনেস গ্রোথের জন্য প্রয়োজনীয় গাইডলাইন প্রদান করি।'
                },
                {
                    title: 'অব্যাহত সাপোর্ট',
                    desc: 'টেকনিক্যাল কারণে কোনো বিজ্ঞাপন বন্ধ হলে বা সমস্যা দেখা দিলে আমাদের এক্সপার্ট টিম দ্রুত তা সমাধান করে দেয়।'
                },
                {
                    title: 'স্বচ্ছতা ও সত্যনিষ্ঠা',
                    desc: 'ফেসবুক বা ডিজিটাল প্ল্যাটফর্মের অ্যালগরিদম প্রতিনিয়ত পরিবর্তনশীল। তাই আমরা আপডেট ডাটা এবং স্ট্র্যাটেজির ওপর ভিত্তি করে কাজ করি।'
                },
                {
                    title: '২৪/৭ সাপোর্ট',
                    desc: 'আমরা সপ্তাহে ৭ দিন এবং ২৪ ঘন্টা সেবা প্রদান করি, যাতে আপনার ব্যবসার প্রবৃদ্ধি কখনোই থেমে না থাকে।'
                },

            ],
            viewLicense: 'লাইসেন্স দেখুন',
            tradeLicenseCaption: 'ট্রেড লাইসেন্স',
            licenseClickHere: '(এখানে ক্লিক করুন)',
        },
        proofs: {
            title: 'ক্লায়েন্ট রিভিউ\'স',
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
            rights: '© ২০২০-{year} AS Marketing Business. সর্বস্বত্ব সংরক্ষিত।',
            followUs: 'আমাদের অনুসরণ করুন',
            company: 'কোম্পানি',
            services: 'সার্ভিসসমূহ',
            contact: 'যোগাযোগ',
        },
        ceo: {
            title: 'আমাদের নেতৃত্ব',
            name: 'সোহানুর রহমান',
            role: 'সিইও এবং প্রতিষ্ঠাতা',
            quote: 'সফলতা শুধু লক্ষ্য নয়, এটি একটি যাত্রা',
            description: 'বিশ্বমানের ডিজিটাল মার্কেটিং সেবা প্রদানের মাধ্যমে ব্যবসায়িক সাফল্যের নতুন দিগন্ত উন্মোচনের স্বপ্ন নিয়ে 2020 সালে AS Marketing Business প্রতিষ্ঠা করেছি। আমাদের লক্ষ্য হলো প্রতিটি ক্লায়েন্টের জন্য সেরা ফলাফল এবং দীর্ঘমেয়াদী সাফল্য নিশ্চিত করা।'
        },
        team: {
            title: 'আমাদের টিম',
            subtitle: 'আমাদের দক্ষ এক্সপার্ট টিমের সাথে পরিচিত হোন',
            expertTeam: 'অন্যান্য এক্সপার্টবৃন্দ',
            members: {
                'AS-002': {
                    name: 'সাজিদ আহমেদ',
                    role: 'ম্যানেজার'
                },
                'AS-003': {
                    name: 'মোঃ আমিনোল',
                    role: 'সিনিয়র পরামর্শদাতা'
                },
                'AS-004': {
                    name: 'শাওন হোসেন',
                    role: 'এড বিশ্লেষক'
                },
                'AS-005': {
                    name: 'হিমু খান',
                    role: 'ফেসবুক এড এক্সপার্ট'
                },
                'AS-006': {
                    name: 'শাওন আহমেদ',
                    role: 'ফেসবুক এড এক্সপার্ট'
                },
                'AS-007': {
                    name: 'আব্দুল আল গালিব',
                    role: 'ফেসবুক এড এক্সপার্ট'
                },
                'AS-008': {
                    name: 'সুমাইয়া',
                    role: 'টিকটক এড এক্সপার্ট'
                },
                'AS-009': {
                    name: 'শাবনুর আক্তার',
                    role: 'টিকটক এড এক্সপার্ট'
                },
                'AS-010': {
                    name: 'আব্দুস সাইফ',
                    role: 'ইনস্টাগ্রাম এড এক্সপার্ট'
                },
                'AS-011': {
                    name: 'পৃথিবী রহমান',
                    role: 'গুগল এড এক্সপার্ট'
                },
                'AS-012': {
                    name: 'জাহাঙ্গীর আলম',
                    role: 'ফেসবুক এড এক্সপার্ট'
                },
                'AS-013': {
                    name: 'জোবায়ের হোসেন',
                    role: 'ওয়েব ডেভেলপার'
                },
                'AS-014': {
                    name: 'মেহেদী হাসান',
                    role: 'গ্রাফিক্স ডিজাইনার'
                },
                'AS-015': {
                    name: 'আখি গাজী',
                    role: 'ফেসবুক এবং ইনস্টাগ্রাম এড এক্সপার্ট'
                }
            }
        },
        contact: {
            phoneWhatsapp: 'ফোন / হোয়াটসঅ্যাপ',
            callNow: 'এখনই কল করুন',
            chatWhatsApp: 'হোয়াটসঅ্যাপ এ মেসেজ করুন',
            emailUs: 'ইমেইল করুন',
            sendEmail: 'ইমেইল পাঠান',
            visitOffice: 'আমাদের অফিসে আসুন',
            followSocial: 'সোশ্যাল মিডিয়ায় ফলো করুন',
            whatsappTooltip: 'হোয়াটসঅ্যাপ এ যোগাযোগ করুন',
            phoneTitle: 'ফোন করুন',
            whatsappTitle: 'হোয়াটসঅ্যাপ',
            address: 'কাস্টমস মোড়, কুষ্টিয়া সদর',
        },
        payment: {
            modalTitle: 'পেমেন্ট করার নিয়ম',
            merchantNumber: 'মার্চেন্ট নাম্বার',
            howToPay: 'কিভাবে পেমেন্ট করবেন:',
            scanDirectly: 'সরাসরি স্ক্যান করুন',
            methodsTitle: 'পেমেন্ট পদ্ধতি',
            clickToPay: 'পেমেন্ট করতে ক্লিক করুন',
            instructions: {
                bkash: [
                    'আপনার বিকাশ অ্যাপ ওপেন করুন',
                    'পেমেন্ট অপশন সিলেক্ট করুন',
                    'নিচের QR কোডটি স্ক্যান করুন অথবা নাম্বার টাইপ করুন',
                    'টাকার পরিমাণ উল্লেখ করুন',
                    'রেফারেন্স হিসেবে আপনার নাম দিন',
                    'পিন দিয়ে পেমেন্ট কনফার্ম করুন'
                ],
                nagad: [
                    'আপনার নগদ অ্যাপ ওপেন করুন',
                    'পেমেন্ট অপশন সিলেক্ট করুন',
                    'নিচের QR কোডটি স্ক্যান করুন অথবা নাম্বার টাইপ করুন',
                    'টাকার পরিমাণ উল্লেখ করুন',
                    'রেফারেন্স হিসেবে আপনার নাম দিন',
                    'পিন দিয়ে পেমেন্ট কনফার্ম করুন'
                ],
                rocket: [
                    'আপনার রকেট অ্যাপ ওপেন করুন',
                    'মার্চেন্ট পে অপশন সিলেক্ট করুন',
                    'নিচে দেওয়া মার্চেন্ট নাম্বারটি টাইপ করুন',
                    'টাকার পরিমাণ উল্লেখ করুন',
                    'রেফারেন্স হিসেবে আপনার নাম দিন',
                    'পিন দিয়ে পেমেন্ট কনফার্ম করুন'
                ],
                npsb: [
                    'আপনার ব্যাংক অ্যাপ বা পেমেন্ট অ্যাপ ওপেন করুন',
                    'যে কোন ব্যাংক/বিকাশ/নগদ/রকেট/উপায়/ট‍্যাপ/এম ক‍্যাশ/কিউ ক্যাশ থেকে পেমেন্ট করুন',
                    'নিচের QR কোডটি স্ক্যান করুন',
                    'টাকার পরিমাণ উল্লেখ করুন',
                    'পেমেন্ট কনফার্ম করুন'
                ]
            }
        },
        pricing: {
            title: 'আমাদের প্যাকেজ সমূহ',
            whatsappMessage: 'হ্যালো, আমি অর্ডার করতে চাই',
            noteLabel: 'নোট:'
        },
        about: {
            thankYouMessage: 'ধন্যবাদ আপনার মূল্যবান সময় দিয়ে আমাদের সম্পর্কে জানার জন্য। আপনার ব্যবসার ডিজিটাল যাত্রাকে সফল করতে আমরা আছি আপনার পাশে।'
        },
        license: {
            title: 'আমাদের সরকারি ট্রেড লাইসেন্স ও অনুমোদন',
            description: 'আমরা একটি সম্পূর্ণ অনুমোদিত এবং নিবন্ধিত আইটি প্রতিষ্ঠান। আপনার ব্যবসায়িক নিরাপত্তা এবং বিশ্বাস আমাদের কাছে অত্যন্ত গুরুত্বপূর্ণ। নিচে আমাদের ২০২৫-২০২৬ অর্থ বছরের নবায়নকৃত ট্রেড লাইসেন্স প্রদর্শিত হলো।'
        },
        tooltips: {
            active: 'সক্রিয়',
            orderWhatsapp: 'হোয়াটসঅ্যাপ এ অর্ডার করুন',
            officeLocation: 'অফিসের লোকেশন',
            googleMap: 'গুগল ম্যাপ - AS Marketing Business'
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
            bismillah: 'Bismillahir Rahmanir Rahim',
            title: 'AS Marketing Business',
            subtitle: 'A Name of Trust',
            description: 'We help businesses grow fast online through modern digital marketing strategies.',
            ctaPrimary: 'Message on Facebook',
            ctaSecondary: 'Connect on WhatsApp',
        },
        services: {
            title: 'Our Premium Services',
            items: {
                facebook: 'Facebook Services',
                instagram: 'Instagram Services',
                tiktok: 'TikTok Services',
                youtube: 'YouTube Services',
                web: 'Web Solutions',
                graphics: 'Design & Branding',
            },
            seeDetails: 'See Details →',
            orderButton: 'Want to Order',
            orderMessage: 'I would like to order your {service}',
            details: {
                facebook: [
                    'Ads Campaign',
                    'Professional Ads',
                    'Pixel Ads',
                    'Regular Ads',
                    'Facebook Follower'
                ],
                instagram: [
                    'Ads Campaign',
                    'Professional Ads',
                    'Pixel Ads',
                    'Regular Ads',
                    'Instagram Follower'
                ],
                tiktok: [
                    'Ads Campaign',
                    'Video Promote(Like,Comment,Share,View)',
                    'Tiktok Follower',
                    'Coin Recharge'
                ],
                youtube: [
                    'Product Marketing on Youtube',
                    'Subscriber',
                    'Watch Time',
                    'Video’s like comment share',
                    'Professional Ads Campaign',
                    'Google AdSence pin verify',
                    'Youtube channel monetize',
                    'Youtube Premium'
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
                    'Branding logo, brand identity',
                    'Digital & social media',
                    'Banner & cover photo',
                    'Ads design',
                    'Photo editing',
                    'Vector tracing',
                    'Illustration'
                ],
            },
        },
        trust: {
            title: 'Why Choose Us?',
            description: 'We don\'t just provide services, we make results.',
            points: [
                {
                    title: 'Authorized & Trusted',
                    desc: 'We are a government-licensed authorized IT institution (Trade License Number-07614), ensuring the safety of your investment.',
                    image: '/license.png'
                },
                {
                    title: 'Expert Team',
                    desc: 'We have an experienced digital marketing team that ensures the highest ROI for your ads through precise audience targeting.'
                },
                {
                    title: 'Realistic Advice',
                    desc: 'We don\'t just work, we provide necessary guidelines for your business growth.'
                },
                {
                    title: 'Continuous Support',
                    desc: 'If any ad stops due to technical reasons or issues arise, our expert team resolves it quickly.'
                },
                {
                    title: 'Transparency & Integrity',
                    desc: 'So we work based on updated data and strategy.'
                },
                {
                    title: '24/7 Support Service',
                    desc: 'We provide support 24 hours a day, 7 days a week, ensuring your business growth never stops.'
                },

            ],
            viewLicense: 'View License',
            tradeLicenseCaption: 'Trade License',
            licenseClickHere: '(Click Here)',
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
            rights: '© 2020-{year} AS Marketing Business. All rights reserved.',
            followUs: 'Follow Us',
            company: 'Company',
            services: 'Services',
            contact: 'Contact',
        },
        ceo: {
            title: 'Our Leadership',
            name: 'Sohanur Rahman',
            role: 'CEO & Founder',
            quote: 'Success is not just a goal, it\'s a journey.',
            description: 'I founded AS Marketing Business in 2020 with a vision to unlock new horizons of business success through world-class digital marketing services. Our goal is to ensure the best results and long-term success for every client.'
        },
        team: {
            title: 'Our Team',
            subtitle: 'Meet our expert team members',
            expertTeam: 'Others Experts',
            members: {
                'AS-002': {
                    name: 'Shajid Ahmed',
                    role: 'Manager'
                },
                'AS-003': {
                    name: 'MD Amenol',
                    role: 'Senior Consultant'
                },
                'AS-004': {
                    name: 'Shawon Hossen',
                    role: 'Ads Analyzer'
                },
                'AS-005': {
                    name: 'Himu Khan',
                    role: 'Facebook Ads Expert'
                },
                'AS-006': {
                    name: 'Shawon Ahmed',
                    role: 'Facebook Ads Expert'
                },
                'AS-007': {
                    name: 'Abdul Al Galib',
                    role: 'Facebook Ads Expert'
                },
                'AS-008': {
                    name: 'Sumaiya',
                    role: 'Tiktok Ads Expert'
                },
                'AS-009': {
                    name: 'Sabnur Akter',
                    role: 'Tiktok Ads Expert'
                },
                'AS-010': {
                    name: 'Abdus Saif',
                    role: 'Instagram Ads Expert'
                },
                'AS-011': {
                    name: 'Prithibi Rahman',
                    role: 'Google Ads Expert'
                },
                'AS-012': {
                    name: 'Jahangir Alam',
                    role: 'Facebook Ads Expert'
                },
                'AS-013': {
                    name: 'Jobayer Hossain',
                    role: 'Web Developer'
                },
                'AS-014': {
                    name: 'Mahedi Hasan',
                    role: 'Graphics Designer'
                },
                'AS-015': {
                    name: 'Akhi Gazi',
                    role: 'Facebook & Instagram Ads Expert'
                }
            }
        },
        contact: {
            phoneWhatsapp: 'Phone / WhatsApp',
            callNow: 'Call Now',
            chatWhatsApp: 'Chat on WhatsApp',
            emailUs: 'Email Us',
            sendEmail: 'Send Email',
            visitOffice: 'Visit Our Office',
            followSocial: 'Follow Us On Social Media',
            whatsappTooltip: 'Connect on WhatsApp',
            phoneTitle: 'Phone',
            whatsappTitle: 'WhatsApp',
            address: 'Customs mor, Kushtia Sadar',
        },
        payment: {
            modalTitle: 'Payment Instructions',
            merchantNumber: 'Merchant Number',
            howToPay: 'How to Pay:',
            scanDirectly: 'Scan Directly',
            methodsTitle: 'Payment Methods',
            clickToPay: 'Click to Pay',
            instructions: {
                bkash: [
                    'Open your bKash app',
                    'Select Payment option',
                    'Scan the QR code below or type the number',
                    'Enter the amount',
                    'Add your name as reference',
                    'Confirm payment with PIN'
                ],
                nagad: [
                    'Open your Nagad app',
                    'Select Payment option',
                    'Scan the QR code below or type the number',
                    'Enter the amount',
                    'Add your name as reference',
                    'Confirm payment with PIN'
                ],
                rocket: [
                    'Open your Rocket app',
                    'Select Merchant Pay option',
                    'Type the merchant number provided below',
                    'Enter the amount',
                    'Add your name as reference',
                    'Confirm payment with PIN'
                ],
                npsb: [
                    'Open your bank app (e.g., CityTouch)',
                    'Pay from any Bank/Bkash/Nagad/Rocket/Upay/Tap/MCash/QCash',
                    'Scan the QR code below',
                    'Enter the amount',
                    'Confirm payment'
                ]
            }
        },
        pricing: {
            title: 'Our Packages',
            whatsappMessage: 'Hello, I would like to order',
            noteLabel: 'Note:'
        },
        about: {
            thankYouMessage: 'Thank you for taking your valuable time to learn about us. We are here to help make your business digital journey successful.'
        },
        license: {
            title: 'Our Government Trade License & Authorization',
            description: 'We are a fully authorized and registered IT institution. Your business security and trust are very important to us. Below is our renewed Trade License for the financial year 2025-2026.'
        },
        tooltips: {
            active: 'Active',
            orderWhatsapp: 'Order on WhatsApp',
            officeLocation: 'Office Location',
            googleMap: 'Google Map - AS Marketing Business'
        },
    },
};
