import { Hero } from '@/components/sections/Hero';
import { Mission } from '@/components/sections/Mission';
import { Benefits } from '@/components/sections/Benefits';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { Layout } from '@/components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Mission />
      <Benefits />
      <HowItWorks />
      <FAQ />
      <CTA />
    </Layout>
  );
}