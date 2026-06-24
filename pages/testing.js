import Head from 'next/head';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Services } from '@/components/Services';
import { WhyUs } from '@/components/WhyUs';
import { Location } from '@/components/Location';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { FloatingWA } from '@/components/FloatingWA';

export default function Home() {
  return (
    <>
      <Head>
        <title>Subur Maju Printing - Percetakan 24 Jam Jakarta Timur</title>
        <meta
          name="description"
          content="Hardcover skripsi, digital printing, banner termurah di Jakarta Timur. Layanan 24 jam dengan kualitas terjamin dan harga bersaing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#EA580C" />
      </Head>

      <main className="bg-white text-black font-sans">
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Location />
        <CTA />
        <Footer />
        <FloatingWA />
      </main>
    </>
  );
}
