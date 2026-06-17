'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Settings, PlusCircle, Percent, CheckCircle } from 'lucide-react';

export default function HowToUse() {
  const steps = [
    {
      icon: Settings,
      title: '1. Choose your mode',
      description: 'Select Add VAT if you have a net price and need the total, or Remove VAT if you have a gross price and need the VAT element backed out.',
    },
    {
      icon: PlusCircle,
      title: '2. Enter your amounts',
      description: 'Add one or more items with an optional description for each.',
    },
    {
      icon: Percent,
      title: '3. Pick the rate',
      description: 'Choose 20%, 5%, 0% or set a custom rate for special schemes or non-UK calculations.',
    },
    {
      icon: CheckCircle,
      title: '4. Read the results',
      description: 'The calculator shows the net amount, the VAT amount and the gross total for each item and overall. Copy everything to your clipboard with one click.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 bg-muted/30 border-b border-border/40">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider">Tutorial</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">How to use this VAT calculator</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Process absolute figures and handle tax distributions seamlessly across complex calculations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="border-border/60 bg-background shadow-sm">
                <CardContent className="p-6 flex gap-4 items-start">
                  <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-xl">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}