import { Hero } from "@/components/home/Hero";
import dynamic from 'next/dynamic';

const ReviewSlider = dynamic(() => import('@/components/home/ReviewSlider').then(mod => mod.ReviewSlider));

const ServicesSnapshot = dynamic(() => import('@/components/home/ServicesSnapshot').then(mod => mod.ServicesSnapshot), {
  loading: () => <div className="h-96" /> // Placeholder to prevent layout shift
});

const TrustSection = dynamic(() => import('@/components/home/TrustSection').then(mod => mod.TrustSection));

const CeoSection = dynamic(() => import('@/components/home/CeoSection').then(mod => mod.CeoSection));
const MapSection = dynamic(() => import('@/components/home/MapSection').then(mod => mod.MapSection));

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <ReviewSlider />
      <ServicesSnapshot />
      <TrustSection />
      <CeoSection />
      <MapSection />
    </div>
  );
}
