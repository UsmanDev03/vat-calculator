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
    answer:
      'VAT (Value Added Tax) is a consumption tax collected at each stage of the supply chain. It is a percentage of the price of goods or services. In the UK, there are three main VAT rates: standard (20%), reduced (5%), and zero (0%).',
  },
  {
    question: 'How is VAT calculated?',
    answer:
      'To calculate VAT, multiply the price by the VAT rate. For example, with a 20% rate: £100 × 0.20 = £20 VAT. The gross price would be £100 + £20 = £120.',
  },
  {
    question: 'What is the difference between gross and net prices?',
    answer:
      'The net price is the price before VAT is added. The gross price is the final price including VAT. For example, with a £100 net price and 20% VAT: the gross price is £120.',
  },
  {
    question: 'When do I need to register for VAT?',
    answer:
      'In the UK, you must register for VAT if your business turnover exceeds £85,000 in a 12-month period. You can also voluntarily register if your turnover is below this threshold.',
  },
  {
    question: 'How often do I submit VAT returns?',
    answer:
      'Registered VAT businesses must submit VAT returns quarterly (4 times per year) to HMRC. The returns are typically due 1 month after the end of each quarter.',
  },
  {
    question: 'Are all goods and services subject to VAT?',
    answer:
      'No, some goods and services are exempt from VAT (e.g., insurance, postage stamps, certain financial services) or subject to special rules (e.g., exported goods may be zero-rated). Check the HMRC website for specific cases.',
  },
  {
    question: 'Can I claim back VAT I pay on business purchases?',
    answer:
      'Yes, if you are VAT registered, you can usually claim back (recover) the VAT you pay on business purchases and expenses. This is called input tax relief. Consult your accountant for guidance.',
  },
  {
    question: 'What is the reduced rate of 5% applied to?',
    answer:
      'The 5% VAT rate applies to certain goods and services, including energy bills, children\'s clothing, books, newspapers, and food (with some exceptions like sweets and alcoholic drinks).',
  },
  {
    question: 'What goods are zero-rated?',
    answer:
      'Zero-rated goods include exports, books, newspapers, children\'s clothing, certain medical items, and food (with exceptions). Most exported goods and services are zero-rated in the UK.',
  },
  {
    question: 'Is this calculator 100% accurate?',
    answer:
      'This calculator provides accurate calculations based on standard VAT formulas. However, for official invoicing and accounts, consult with a qualified accountant as there may be special cases or exemptions that apply to your specific situation.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <p className="text-accent font-semibold text-sm md:text-base">Questions?</p>
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about VAT, the calculator, and how to use it.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 md:p-6 hover:bg-muted/50 transition text-left"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 md:px-6 pb-4 md:pb-6 pt-2 border-t border-border">
                  <p className="text-muted-foreground text-sm md:text-base">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>

        <Card className="bg-primary/10 border-primary">
          <div className="p-6 md:p-8 text-center space-y-4">
            <h3 className="text-lg font-semibold">Still have questions?</h3>
            <p className="text-sm text-muted-foreground">
              Can't find the answer you're looking for? Please get in touch.
            </p>
            <a
              href="mailto:support@vatcalculator.co.uk"
              className="inline-block px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition text-sm"
            >
              Contact Support
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}
