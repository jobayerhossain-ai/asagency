
export interface PackageOption {
    name: string;
    price: string;
}

export interface PackageCategory {
    id: string;
    title: string;
    icon: 'facebook' | 'instagram' | 'tiktok';
    subPackages: {
        title: string;
        note?: string;
        options: PackageOption[];
    }[];
}

export const packages: Record<'bn' | 'en', PackageCategory[]> = {
    bn: [
        {
            id: 'facebook',
            title: 'Facebook',
            icon: 'facebook',
            subPackages: [
                {
                    title: 'ফেসবুক বুস্ট প্যাকেজ',
                    note: 'বিঃদ্রঃ আমরা ব্যাংকের কার্ড দিয়ে বুস্ট করে থাকি ।এছাড়াও আপনি আপনার ইচ্ছামত ডলার দিয়ে বুস্ট করতে পারবেন । সর্বনিম্ন ১০ ডলার থেকে শুরু । পার ডলার ১৫০ টাকা মাত্র । টার্গেট অডিয়েন্স নির্ধারণ করে বুস্ট করতে পারবেন । এরিয়া ভিত্তিক বুস্ট করতে পারবেন ।',
                    options: [
                        { name: '১০ দিনের জন্য ১০ ডলার', price: '১৫০০ টাকা' },
                        { name: '১৫ দিনের জন্য ১৫ ডলার', price: '২২৫০ টাকা' },
                        { name: '২০ দিনের জন্য ২০ ডলার', price: '৩০০০ টাকা' },
                        { name: '২৫ দিনের জন্য ২৫ ডলার', price: '৩৭৫০ টাকা' },
                        { name: '৩০ দিনের জন্য ৩০ ডলার', price: '৪৫০০ টাকা' },
                    ]
                },
                {
                    title: 'ফেসবুক ফলোয়ার প্যাকেজ',
                    note: 'বিঃদ্রঃ আমরা ব্যাংকের কার্ড দিয়ে প্রমোট করে থাকি । প্রত্যেকটি লাইক ফলোয়ার পেইড এবং অর্গানিক ।আপনার পেজের লাইক ফলোয়ার এক্টিভ অ্যাকাউন্ট থেকে পড়বে ।',
                    options: [
                        { name: '২০০০ লাইক/ফলোয়ার', price: '১০০০ টাকা' },
                        { name: '৩০০০ লাইক/ফলোয়ার', price: '১৫০০ টাকা' },
                        { name: '৪০০০ লাইক/ফলোয়ার', price: '২০০০ টাকা' },
                        { name: '৫০০০ লাইক/ফলোয়ার', price: '২৫০০ টাকা' },
                        { name: '৬০০০ লাইক/ফলোয়ার', price: '৩০০০ টাকা' },
                        { name: '৭০০০ লাইক/ফলোয়ার', price: '৩৫০০ টাকা' },
                        { name: '৮০০০ লাইক/ফলোয়ার', price: '৪০০০ টাকা' },
                        { name: '৯০০০ লাইক/ফলোয়ার', price: '৪৫০০ টাকা' },
                        { name: '১০০০০ লাইক/ফলোয়ার', price: '৫০০০ টাকা' },
                    ]
                }
            ]
        },
        {
            id: 'instagram',
            title: 'Instagram',
            icon: 'instagram',
            subPackages: [
                {
                    title: 'ইনস্টাগ্রাম বুস্ট প্যাকেজ',
                    note: 'বিঃদ্রঃ আমরা ব্যাংকের কার্ড দিয়ে বুস্ট করে থাকি ।এছাড়াও আপনি আপনার ইচ্ছামত ডলার দিয়ে বুস্ট করতে পারবেন । সর্বনিম্ন ১০ ডলার থেকে শুরু । পার ডলার ১৫০ টাকা মাত্র । টার্গেট অডিয়েন্স নির্ধারণ করে বুস্ট করতে পারবেন । এরিয়া ভিত্তিক বুস্ট করতে পারবেন ।',
                    options: [
                        { name: '১০ দিনের জন্য ১০ ডলার', price: '১৫০০ টাকা' },
                        { name: '১৫ দিনের জন্য ১৫ ডলার', price: '২২৫০ টাকা' },
                        { name: '২০ দিনের জন্য ২০ ডলার', price: '৩০০০ টাকা' },
                        { name: '২৫ দিনের জন্য ২৫ ডলার', price: '৩৭৫০ টাকা' },
                        { name: '৩০ দিনের জন্য ৩০ ডলার', price: '৪৫০০ টাকা' },
                    ]
                },
                {
                    title: 'ইনস্টাগ্রাম ফলোয়ার প্যাকেজ',
                    note: 'বিঃদ্রঃ আমরা ব্যাংকের কার্ড দিয়ে প্রমোট করে থাকি । প্রত্যেকটি ফলোয়ার পেইড এবং অর্গানিক ।আপনার ইনস্টাগ্রাম পেজের ফলোয়ার এক্টিভ অ্যাকাউন্ট থেকে পড়বে ।',
                    options: [
                        { name: '২০০০ ফলোয়ার', price: '১০০০ টাকা' },
                        { name: '৩০০০ ফলোয়ার', price: '১৫০০ টাকা' },
                        { name: '৪০০০ ফলোয়ার', price: '২০০০ টাকা' },
                        { name: '৫০০০ ফলোয়ার', price: '২৫০০ টাকা' },
                        { name: '৬০০০ ফলোয়ার', price: '৩০০০ টাকা' },
                        { name: '৭০০০ ফলোয়ার', price: '৩৫০০ টাকা' },
                        { name: '৮০০০ ফলোয়ার', price: '৪০০০ টাকা' },
                        { name: '৯০০০ ফলোয়ার', price: '৪৫০০ টাকা' },
                        { name: '১০০০০ ফলোয়ার', price: '৫০০০ টাকা' },
                    ]
                }
            ]
        },
        {
            id: 'tiktok',
            title: 'TikTok',
            icon: 'tiktok',
            subPackages: [
                {
                    title: 'টিকটক পোস্ট লাইক প্যাকেজ',
                    note: 'টিকটক পোস্ট লাইক নিলে এর সাথে ভিউ, কমেন্ট এবং শেয়ার পাচ্ছেন একদম ফ্রিতে। বিঃদ্রঃ আমার আমাদের ব্যাংক কার্ড দিয়ে আপনাদের টিকটক আইডি প্রমোট করে ফলোয়ার দেয় । তাই প্রত্যেকটি ফলোয়ার পাবেন ১০০% রিয়েল এবং অথেন্টিক। ফলোয়ার গুলা আপনাদের আইডিতে পার্মামেন্ট থাকবে । সর্বনিম্ম ১০০০ ফলোয়ার নিতে পারবেন ।',
                    options: [
                        { name: '১০০০ লাইক', price: '৩০০ টাকা' },
                        { name: '২০০০ লাইক', price: '৬০০ টাকা' },
                        { name: '৩০০০ লাইক', price: '৯০০ টাকা' },
                        { name: '৪০০০ লাইক', price: '১২০০ টাকা' },
                        { name: '৫০০০ লাইক', price: '১৫০০ টাকা' },
                        { name: '১০০০০ লাইক', price: '৩০০০ টাকা' },
                    ]
                },
                {
                    title: 'টিকটক ফলোয়ার প্যাকেজ',
                    note: 'টিকটক ফলোয়ার নিলে এর সাথে লাইক কমেন্ট ভিউ শেয়ার ফ্রি পাবেন। বিঃদ্রঃ আমার আমাদের ব্যাংক কার্ড দিয়ে আপনাদের টিকটক আইডি প্রমোট করে ফলোয়ার দেয় । তাই প্রত্যেকটি ফলোয়ার পাবেন ১০০% রিয়েল এবং অথেন্টিক। ফলোয়ার গুলা আপনাদের আইডিতে পার্মামেন্ট থাকবে । সর্বনিম্ম ১০০০ ফলোয়ার নিতে পারবেন ।',
                    options: [
                        { name: '১০০০ ফলোয়ার', price: '৫০০ টাকা' },
                        { name: '২০০০ ফলোয়ার', price: '১০০০ টাকা' },
                        { name: '৩০০০ ফলোয়ার', price: '১৫০০ টাকা' },
                        { name: '৪০০০ ফলোয়ার', price: '২০০০ টাকা' },
                        { name: '৫০০০ ফলোয়ার', price: '২৫০০ টাকা' },
                        { name: '১০০০০ ফলোয়ার', price: '৫০০০ টাকা' },
                    ]
                },
                {
                    title: 'টিকটকে প্রোডাক্ট সেল বুস্ট প্যাকেজ',
                    note: 'বিঃদ্রঃ সর্বনিম্ম ৫ ডলার করতে হবে',
                    options: [
                        { name: '৫ ডলার ৪ দিনের জন্য', price: '৯০০ টাকা' },
                        { name: '১০ ডলার ৬ দিনের জন্য', price: '১৮০০ টাকা' },
                        { name: '২০ ডলার ৮ দিনের জন্য', price: '৩৬০০ টাকা' },
                        { name: '৩০ ডলার ১০ দিনের জন্য', price: '৫৪০০ টাকা' },
                    ]
                },
                {
                    title: 'টিকটক কয়েন রিচার্জ প্যাকেজ',
                    note: 'সর্বনিম্ম ৭০ কয়েন নিতে পারবেন ।',
                    options: [
                        { name: '৭০ কয়েন', price: '২০০ টাকা' },
                        { name: '৩৫০ কয়েন', price: '৮০০ টাকা' },
                        { name: '৭০০ কয়েন', price: '১৫০০ টাকা' },
                        { name: '১৪০০ কয়েন', price: '৩০০০ টাকা' },
                        { name: '৩৫০০ কয়েন', price: '৭৫০০ টাকা' },
                        { name: '৭০০০ কয়েন', price: '১৫০০০ টাকা' },
                        { name: '১৭৫০০ কয়েন', price: '৩৬০০০ টাকা' },
                    ]
                },
            ]
        }
    ],
    en: [
        {
            id: 'facebook',
            title: 'Facebook',
            icon: 'facebook',
            subPackages: [
                {
                    title: 'Facebook Boost Package',
                    note: 'Note: We use bank cards for boosting. You can also boost with any specific dollar amount you prefer. Minimum 10 Dollars. Rate is 150 Taka per dollar. You can target specific audiences and boost by area.',
                    options: [
                        { name: '10 Dollars for 10 Days', price: '1500 Taka' },
                        { name: '15 Dollars for 15 Days', price: '2250 Taka' },
                        { name: '20 Dollars for 20 Days', price: '3000 Taka' },
                        { name: '25 Dollars for 25 Days', price: '3750 Taka' },
                        { name: '30 Dollars for 30 Days', price: '4500 Taka' },
                    ]
                },
                {
                    title: 'Facebook Follower Package',
                    note: 'Note: We promote using bank cards. Each like/follower is paid and organic. Likes/followers on your page will come from active accounts.',
                    options: [
                        { name: '2000 Likes/Followers', price: '1000 Taka' },
                        { name: '3000 Likes/Followers', price: '1500 Taka' },
                        { name: '4000 Likes/Followers', price: '2000 Taka' },
                        { name: '5000 Likes/Followers', price: '2500 Taka' },
                        { name: '6000 Likes/Followers', price: '3000 Taka' },
                        { name: '7000 Likes/Followers', price: '3500 Taka' },
                        { name: '8000 Likes/Followers', price: '4000 Taka' },
                        { name: '9000 Likes/Followers', price: '4500 Taka' },
                        { name: '10000 Likes/Followers', price: '5000 Taka' },
                    ]
                }
            ]
        },
        {
            id: 'instagram',
            title: 'Instagram',
            icon: 'instagram',
            subPackages: [
                {
                    title: 'Instagram Boost Package',
                    note: 'Note: We use bank cards for boosting. You can also boost with any specific dollar amount you prefer. Minimum 10 Dollars. Rate is 150 Taka per dollar. You can target specific audiences and boost by area.',
                    options: [
                        { name: '10 Dollars for 10 Days', price: '1500 Taka' },
                        { name: '15 Dollars for 15 Days', price: '2250 Taka' },
                        { name: '20 Dollars for 20 Days', price: '3000 Taka' },
                        { name: '25 Dollars for 25 Days', price: '3750 Taka' },
                        { name: '30 Dollars for 30 Days', price: '4500 Taka' },
                    ]
                },
                {
                    title: 'Instagram Follower Package',
                    note: 'Note: We promote using bank cards. Each follower is paid and organic. Followers on your Instagram page will come from active accounts.',
                    options: [
                        { name: '2000 Followers', price: '1000 Taka' },
                        { name: '3000 Followers', price: '1500 Taka' },
                        { name: '4000 Followers', price: '2000 Taka' },
                        { name: '5000 Followers', price: '2500 Taka' },
                        { name: '6000 Followers', price: '3000 Taka' },
                        { name: '7000 Followers', price: '3500 Taka' },
                        { name: '8000 Followers', price: '4000 Taka' },
                        { name: '9000 Followers', price: '4500 Taka' },
                        { name: '10000 Followers', price: '5000 Taka' },
                    ]
                }
            ]
        },
        {
            id: 'tiktok',
            title: 'TikTok',
            icon: 'tiktok',
            subPackages: [
                {
                    title: 'TikTok Post Like Package',
                    note: 'With TikTok Post Likes, you get views, comments, and shares absolutely free. Note: We promote your TikTok ID using our bank cards to provide followers/likes. So every follower/like is 100% real and authentic. Followers will be permanent. Minimum 1000 likes.',
                    options: [
                        { name: '1000 Likes', price: '300 Taka' },
                        { name: '2000 Likes', price: '600 Taka' },
                        { name: '3000 Likes', price: '900 Taka' },
                        { name: '4000 Likes', price: '1200 Taka' },
                        { name: '5000 Likes', price: '1500 Taka' },
                        { name: '10000 Likes', price: '3000 Taka' },
                    ]
                },
                {
                    title: 'TikTok Follower Package',
                    note: 'With TikTok Followers, you get likes, comments, views, and shares for free. Note: We promote your TikTok ID using our bank cards. So every follower is 100% real and authentic. Followers will be permanent. Minimum 1000 followers.',
                    options: [
                        { name: '1000 Followers', price: '500 Taka' },
                        { name: '2000 Followers', price: '1000 Taka' },
                        { name: '3000 Followers', price: '1500 Taka' },
                        { name: '4000 Followers', price: '2000 Taka' },
                        { name: '5000 Followers', price: '2500 Taka' },
                        { name: '10000 Followers', price: '5000 Taka' },
                    ]
                },
                {
                    title: 'TikTok Product Sales Boost Package',
                    note: 'Note: Minimum $5 boost required.',
                    options: [
                        { name: '5 Dollars for 4 Days', price: '900 Taka' },
                        { name: '10 Dollars for 6 Days', price: '1800 Taka' },
                        { name: '20 Dollars for 8 Days', price: '3600 Taka' },
                        { name: '30 Dollars for 10 Days', price: '5400 Taka' },
                    ]
                },
                {
                    title: 'TikTok Coin Recharge Package',
                    note: 'You can take a minimum of 70 coins.',
                    options: [
                        { name: '70 Coins', price: '200 Taka' },
                        { name: '350 Coins', price: '800 Taka' },
                        { name: '700 Coins', price: '1500 Taka' },
                        { name: '1400 Coins', price: '3000 Taka' },
                        { name: '3500 Coins', price: '7500 Taka' },
                        { name: '7000 Coins', price: '15000 Taka' },
                        { name: '17500 Coins', price: '36000 Taka' },
                    ]
                },
            ]
        }
    ]
};
