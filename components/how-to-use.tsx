import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Minus, CheckCircle } from 'lucide-react';

export default function HowToUse() {
  const steps = [
    {
      icon: Plus,
      title: 'Choose Your Mode',
      description: 'Select whether you want to add VAT to a price or remove VAT from a total.',
    },
    {
      icon: Plus,
      title: 'Add Items',
      description: 'Enter the amount, description (optional), and select the VAT rate for each item.',
    },
    {
      icon: Minus,
      title: 'Select VAT Rate',
      description: 'Choose from standard (20%), reduced (5%), zero (0%), or create a custom rate.',
    },
    {
      icon: CheckCircle,
      title: 'Get Results',
      description: 'View the net amount, VAT amount, and total. Copy results to clipboard instantly.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <p className="text-accent font-semibold text-sm md:text-base">Getting Started</p>
          <h2 className="text-3xl md:text-4xl font-bold">How to Use</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Calculate VAT in just four simple steps. It takes less than a minute to get accurate results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 text-accent">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-accent/5 border-accent">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Pro Tips</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-sm">Add multiple items with different VAT rates in one calculation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-sm">Create custom VAT rates for specific scenarios</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-sm">Copy results to clipboard for quick pasting into spreadsheets</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-sm">All calculations are done locally in your browser - no data is stored</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
