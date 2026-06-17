'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is VAT?',
    answer: 'VAT (Value Added Tax) is a tax charged on most goods and services sold in the UK. It is collected by VAT registered businesses on behalf of HM Revenue and Customs (HMRC). The standard rate is 20%, with a reduced rate of 5% and a zero rate of 0% for specific categories of goods and services.',
  },
  {
    question: 'What is the UK VAT rate in 2026?',
    answer: 'The standard rate of VAT in the UK is 20% in 2026. It has been 20% since 4 January 2011. A reduced rate of 5% applies to items such as domestic fuel and power, and a zero rate applies to most food, books, and children\'s clothing.',
  },
  {
    question: 'How do I add VAT to a price?',
    answer: 'Multiply the net price by 1.20 to add VAT at the standard 20% rate. For example, £150 x 1.20 = £180, of which £30 is VAT. For the reduced 5% rate, multiply by 1.05 instead.',
  },
  {
    question: 'How do I remove VAT from a price?',
    answer: 'Divide the gross price by 1.20 to remove VAT at the standard 20% rate. For example, £180 / 1.20 = £150 net, meaning £30 of the price was VAT. A quicker way to find just the VAT inside a 20% gross price is to divide it by 6.',
  },
  {
    question: 'What is the difference between net and gross prices?',
    answer: 'The net price is the amount before VAT is added. The gross price is the total including VAT. At the standard 20% rate, a net price of £100 becomes a gross price of £120. Business-to-business prices are usually quoted net; prices shown to consumers must be gross.',
  },
  {
    question: 'When do I need to register for VAT?',
    answer: 'You must register for VAT if your taxable turnover exceeds £90,000 in any rolling 12 month period, or if you expect it to exceed £90,000 in the next 30 days. You then have 30 days to register with HMRC. The £90,000 threshold has applied since 1 April 2024 and is unchanged for 2026/27.',
  },
  {
    question: 'Can I register for VAT voluntarily?',
    answer: 'Yes. Businesses with taxable turnover below £90,000 can register for VAT voluntarily. This lets you reclaim VAT on business purchases and can make a business look more established. It suits B2B businesses best, because VAT registered customers can reclaim the VAT you charge them, so your prices do not effectively rise.',
  },
  {
    question: 'How often do I submit VAT returns?',
    answer: 'Most VAT registered businesses submit returns quarterly, due one calendar month and seven days after the end of each VAT period, with payment due by the same date. All VAT registered businesses must keep digital records and file through Making Tax Digital compatible software.',
  },
  {
    question: 'What goods are zero rated for VAT?',
    answer: 'Zero rated goods include most food (but not hot takeaway food, alcohol or confectionery), books and newspapers, children\'s clothing and footwear, motorcycle helmets and most exports of goods outside the UK. VAT is charged at 0%, but these sales still count towards the £90,000 registration threshold.',
  },
  {
    question: 'What is the 5% reduced rate applied to?',
    answer: 'The 5% reduced rate applies to domestic gas and electricity, children\'s car seats, mobility aids for older people, smoking cessation products and certain residential property conversions and renovations. Note that children\'s clothing and most food are zero rated at 0%, not reduced rated.',
  },
  {
    question: 'Can I claim back VAT on business purchases?',
    answer: 'Yes, if you are VAT registered. VAT paid on goods and services used for your business, known as input tax, can usually be reclaimed through your VAT return by offsetting it against the VAT you charge customers. You cannot normally reclaim VAT on purchases used for exempt sales or personal use, and special rules apply to cars and entertainment.',
  },
  {
    question: 'Is this VAT calculator accurate?',
    answer: 'The calculator uses the exact formulas HMRC publishes for adding and removing VAT, with results rounded to the nearest penny, so the arithmetic is reliable. It is provided for guidance: for invoicing, VAT returns and edge cases such as partial exemption or margin schemes, confirm the treatment with HMRC guidance or an accountant.',
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 px-4 bg-muted/40">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider">Help Desk</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find self-contained, expert-verified answers to common questions about UK VAT calculations and rules for 2026.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Card key={index} className="overflow-hidden border-border/60 shadow-sm transition-all duration-200">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 hover:bg-muted/50 transition text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-border bg-background/40">
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <div className="p-6 md:p-8 text-center space-y-4">
            <h3 className="text-lg font-bold text-foreground">Still have questions?</h3>
            <p className="text-sm text-muted-foreground">
              Can't find the exact answer or have an edge-case transaction scenario? Please get in touch.
            </p>
            <a
              href="mailto:hello@vatcalculator.co.uk"
              className="inline-block px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition text-sm shadow-sm"
            >
              Contact Support
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}