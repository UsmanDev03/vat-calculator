import { Metadata } from 'next';
import Header from '@/components/header';
import Hero from '@/components/hero';
import VATCalculator from '@/components/vat-calculator';
import HowToUse from '@/components/how-to-use';
import VATEducation from '@/components/vat-education';
import FAQ from '@/components/faq';
import Footer from '@/components/footer';

// 100% Teqnoor SEO Metadata Block
export const metadata: Metadata = {
  title: 'UK VAT Calculator 2026 | Add or Remove VAT Instantly',
  description: 'Free UK VAT calculator. Add or remove VAT at 20%, 5% or 0%, see net, VAT and gross amounts instantly, and check 2026 rates and the £90,000 threshold.',
  openGraph: {
    title: 'Free UK VAT Calculator 2026',
    description: 'Add or remove VAT at 20%, 5%, 0% or any custom rate. Instant net, VAT and gross figures. No sign up, no data stored.',
    url: 'https://vat-calculator-mu.vercel.app/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://vat-calculator-mu.vercel.app/',
  },
};

export default function Home() {
  // WebApplication Schema JSON-LD
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "UK VAT Calculator",
    "url": "https://vat-calculator-mu.vercel.app/",
    "description": "Free UK VAT calculator that adds or removes VAT at 20%, 5%, 0% or custom rates, showing net, VAT and gross amounts.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "GBP" },
    "featureList": [
      "Add VAT to net prices",
      "Remove VAT from gross prices",
      "Standard 20%, reduced 5% and zero rates",
      "Custom VAT rates",
      "Multiple items per calculation",
      "Copy results to clipboard"
    ],
    "dateModified": "2026-06-12"
  };

  // Full 12-Item FAQ Schema mapped for direct AI injection
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is VAT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VAT (Value Added Tax) is a tax charged on most goods and services sold in the UK. It is collected by VAT registered businesses on behalf of HM Revenue and Customs (HMRC). The standard rate is 20%, with a reduced rate of 5% and a zero rate of 0% for specific categories of goods and services."
        }
      },
      {
        "@type": "Question",
        "name": "What is the UK VAT rate in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The standard rate of VAT in the UK is 20% in 2026. It has been 20% since 4 January 2011. A reduced rate of 5% applies to items such as domestic fuel and power, and a zero rate applies to most food, books, and children's clothing."
        }
      },
      {
        "@type": "Question",
        "name": "How do I add VAT to a price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Multiply the net price by 1.20 to add VAT at the standard 20% rate. For example, £150 x 1.20 = £180, of which £30 is VAT. For the reduced 5% rate, multiply by 1.05 instead."
        }
      },
      {
        "@type": "Question",
        "name": "How do I remove VAT from a price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Divide the gross price by 1.20 to remove VAT at the standard 20% rate. For example, £180 / 1.20 = £150 net, meaning £30 of the price was VAT. A quicker way to find just the VAT inside a 20% gross price is to divide it by 6."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between net and gross prices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The net price is the amount before VAT is added. The gross price is the total including VAT. At the standard 20% rate, a net price of £100 becomes a gross price of £120. Business-to-business prices are usually quoted net; prices shown to consumers must be gross."
        }
      },
      {
        "@type": "Question",
        "name": "When do I need to register for VAT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You must register for VAT if your taxable turnover exceeds £90,000 in any rolling 12 month period, or if you expect it to exceed £90,000 in the next 30 days. You then have 30 days to register with HMRC. The £90,000 threshold has applied since 1 April 2024 and is unchanged for 2026/27."
        }
      },
      {
        "@type": "Question",
        "name": "Can I register for VAT voluntarily?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Businesses with taxable turnover below £90,000 can register for VAT voluntarily. This lets you reclaim VAT on business purchases and can make a business look more established. It suits B2B businesses best, because VAT registered customers can reclaim the VAT you charge them, so your prices do not effectively rise."
        }
      },
      {
        "@type": "Question",
        "name": "How often do I submit VAT returns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most VAT registered businesses submit returns quarterly, due one calendar month and seven days after the end of each VAT period, with payment due by the same date. All VAT registered businesses must keep digital records and file through Making Tax Digital compatible software."
        }
      },
      {
        "@type": "Question",
        "name": "What goods are zero rated for VAT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zero rated goods include most food (but not hot takeaway food, alcohol or confectionery), books and newspapers, children's clothing and footwear, motorcycle helmets and most exports of goods outside the UK. VAT is charged at 0%, but these sales still count towards the £90,000 registration threshold."
        }
      },
      {
        "@type": "Question",
        "name": "What is the 5% reduced rate applied to?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 5% reduced rate applies to domestic gas and electricity, children's car seats, mobility aids for older people, smoking cessation products and certain residential property conversions and renovations. Note that children's clothing and most food are zero rated at 0%, not reduced rated."
        }
      },
      {
        "@type": "Question",
        "name": "Can I claim back VAT on business purchases?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if you are VAT registered. VAT paid on goods and services used for your business, known as input tax, can usually be reclaimed through your VAT return by offsetting it against the VAT you charge customers. You cannot normally reclaim VAT on purchases used for exempt sales or personal use, and special rules apply to cars and entertainment."
        }
      },
      {
        "@type": "Question",
        "name": "Is this VAT calculator accurate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The calculator uses the exact formulas HMRC publishes for adding and removing VAT, with results rounded to the nearest penny, so the arithmetic is reliable. It is provided for guidance: for invoicing, VAT returns and edge cases such as partial exemption or margin schemes, confirm the treatment with HMRC guidance or an accountant."
        }
      }
    ]
  };

  return (
    <>
      {/* Structural Data Injection for Search Surfaces */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
        <Header />
        <Hero />
        
        {/* Active Calculator Integration */}
        <section id="calculator" className="py-16 md:py-24 px-4 bg-background border-b border-border/40">
          <div className="max-w-6xl mx-auto">
            <VATCalculator />
          </div>
        </section>

        <HowToUse />
        <VATEducation />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}