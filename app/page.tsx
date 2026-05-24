import Header from '@/components/header';
import Hero from '@/components/hero';
import HowToUse from '@/components/how-to-use';
import VATEducation from '@/components/vat-education';
import FAQ from '@/components/faq';
import Footer from '@/components/footer';
import VATCalculator from '@/components/vat-calculator';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <section id="calculator" className="py-16 md:py-24 px-4 bg-background">
        <VATCalculator />
      </section>

      <HowToUse />
      <VATEducation />
      <FAQ />
      <Footer />
    </main>
  );
}
