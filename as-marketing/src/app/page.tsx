import { Hero } from "@/components/home/Hero";
import dynamic from 'next/dynamic';

const ServicesSnapshot = dynamic(() => import('@/components/home/ServicesSnapshot').then(mod => mod.ServicesSnapshot), {
  loading: () => <div className="h-96" /> // Placeholder to prevent layout shift
});

const TrustSection = dynamic(() => import('@/components/home/TrustSection').then(mod => mod.TrustSection));

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <ServicesSnapshot />
      <TrustSection />
    </div>
  );
}
