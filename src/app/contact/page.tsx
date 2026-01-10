'use client';
import { useLanguage } from '@/context/LanguageContext';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CONFIG } from '@/data/config';
import { FacebookIcon, InstagramIcon, YouTubeIcon, WhatsAppIcon, TikTokIcon } from '@/components/ui/BrandIcons'; // Updated imports
import { Phone, Mail, MapPin } from 'lucide-react'; // Keep generic icons for non-brand
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <div className="container mx-auto px-4 py-32 min-h-screen">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-4xl mx-auto text-center"
            >
                <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-heading mb-6">
                    {t.nav.contact}
                </motion.h1>
                <motion.p variants={fadeInUp} className="text-lg text-body/80 mb-12 max-w-2xl mx-auto">
                    {t.hero.description}
                </motion.p>

                <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {/* Phone Section */}
                    <Card className="flex flex-col items-center p-6 md:p-8">
                        <div className="p-4 rounded-full bg-blue-50 text-blue-600 mb-4">
                            <Phone size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t.contact.phoneTitle}</h3>
                        <p className="text-muted mb-6">{CONFIG.contact.phoneDisplay}</p>
                        <a href={`tel:${CONFIG.contact.phone}`} className="w-full">
                            <Button className="w-full h-12 text-base font-bold gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 hover:shadow-blue-300/50 border-none text-white transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
                                <Phone size={20} />
                                {t.contact.callNow}
                            </Button>
                        </a>
                    </Card>

                    {/* WhatsApp Section */}
                    <Card className="flex flex-col items-center p-6 md:p-8">
                        <div className="p-4 rounded-full bg-green-50 text-green-600 mb-4">
                            <WhatsAppIcon size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t.contact.whatsappTitle}</h3>
                        <p className="text-muted mb-6">{CONFIG.contact.phoneDisplay}</p>
                        <a href={CONFIG.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button className="w-full h-12 text-base font-bold gap-2 bg-[#25D366] hover:bg-[#20bd5a] shadow-lg shadow-green-200 hover:shadow-green-300/50 border-none text-white transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
                                <WhatsAppIcon size={20} className="text-white" />
                                {t.contact.chatWhatsApp}
                            </Button>
                        </a>
                    </Card>

                    {/* Email Section */}
                    <Card className="flex flex-col items-center p-6 md:p-8">
                        <div className="p-4 rounded-full bg-purple-50 text-purple-600 mb-4">
                            <Mail size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t.contact.emailUs}</h3>
                        <p className="text-muted mb-6 text-sm">{CONFIG.contact.email}</p>
                        <a href={`mailto:${CONFIG.contact.email}`} className="w-full">
                            <Button variant="outline" className="w-full h-12 gap-2 text-purple-600 border-purple-200 hover:bg-purple-50">
                                <Mail size={20} />
                                {t.contact.sendEmail}
                            </Button>
                        </a>
                    </Card>
                </motion.div>

                <motion.div variants={fadeInUp} className="mb-16">
                    <Card className="overflow-hidden p-0">
                        <div className="p-8 pb-4">
                            <div className="flex flex-col items-center">
                                <div className="p-4 rounded-full bg-orange-50 text-orange-600 mb-4">
                                    <MapPin size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{t.contact.visitOffice}</h3>
                                <p className="text-muted text-center max-w-md mx-auto">{t.contact.address}</p>
                            </div>
                        </div>
                        <div className="w-full h-[400px] bg-slate-100 mt-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116860.8!2d89.12!3d23.90!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8a77a1c017f8757b%3A0xae943c063538c2b5!2sAS%20Marketing%20Business!5e0!3m2!1sbn!2sbd"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={t.tooltips.officeLocation}
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                    <h3 className="text-xl font-bold text-heading mb-8">{t.contact.followSocial}</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href={CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="w-48 gap-2 bg-[#1877F2] hover:bg-[#1558b0] shadow-xl shadow-blue-200 hover:shadow-blue-300/50 border-none text-white transition-all duration-300 transform hover:-translate-y-1 active:scale-95 font-bold">
                                <FacebookIcon size={20} className="text-white" /> Facebook
                            </Button>
                        </a>
                        <a href={CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="w-48 gap-2 bg-gradient-to-br from-purple-500 to-pink-500 hover:opacity-90 shadow-xl shadow-pink-200 hover:shadow-pink-300/50 border-none text-white transition-all duration-300 transform hover:-translate-y-1 active:scale-95 font-bold">
                                <InstagramIcon size={20} useGradient={false} className="text-white" /> Instagram
                            </Button>
                        </a>
                        <a href={CONFIG.socials.tiktok} target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="w-48 gap-2 bg-black hover:bg-[#333] shadow-xl shadow-zinc-400/20 hover:shadow-zinc-500/40 border-none text-white transition-all duration-300 transform hover:-translate-y-1 active:scale-95 font-bold">
                                <TikTokIcon size={20} className="text-white" /> TikTok
                            </Button>
                        </a>
                        <a href={CONFIG.socials.youtube} target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="w-48 gap-2 bg-red-600 hover:bg-red-700 shadow-xl shadow-red-200 hover:shadow-red-300/50 border-none text-white transition-all duration-300 transform hover:-translate-y-1 active:scale-95 font-bold">
                                <YouTubeIcon size={20} className="text-white" /> YouTube
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
