import { Card, CardContent } from '@/components/ui/card';

export default function VATEducation() {
  return (
    <section id="vat-rates" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <p className="text-accent font-semibold text-sm md:text-base">Knowledge</p>
          <h2 className="text-3xl md:text-4xl font-bold">Understanding UK VAT</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn about VAT rates, how they work, and common calculations in the UK.
          </p>
        </div>

        {/* VAT Rates Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <p className="text-4xl font-bold text-primary">20%</p>
                <h3 className="text-lg font-semibold">Standard Rate</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Applied to most goods and services in the UK. This is the default VAT rate for the majority of business transactions.
              </p>
              <div className="bg-primary/10 rounded p-3 text-xs">
                <p className="font-mono">Example: £100 + 20% VAT = £120</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <p className="text-4xl font-bold text-accent">5%</p>
                <h3 className="text-lg font-semibold">Reduced Rate</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Applied to certain goods and services such as energy, children's clothes, and food (with some exceptions).
              </p>
              <div className="bg-accent/10 rounded p-3 text-xs">
                <p className="font-mono">Example: £100 + 5% VAT = £105</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <p className="text-4xl font-bold text-foreground">0%</p>
                <h3 className="text-lg font-semibold">Zero Rate</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Applied to exports, books, newspapers, children's clothing, and certain medical items. No VAT is charged.
              </p>
              <div className="bg-muted rounded p-3 text-xs">
                <p className="font-mono">Example: £100 + 0% VAT = £100</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* VAT Formulas */}
        <Card className="bg-muted">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">VAT Formulas</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Adding VAT</h4>
                  <div className="bg-background rounded p-4 space-y-2 text-sm font-mono">
                    <p>Net Price × (1 + VAT Rate ÷ 100) = Gross Price</p>
                    <p className="text-xs text-muted-foreground">Example: £100 × 1.20 = £120</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-accent">Removing VAT</h4>
                  <div className="bg-background rounded p-4 space-y-2 text-sm font-mono">
                    <p>Gross Price ÷ (1 + VAT Rate ÷ 100) = Net Price</p>
                    <p className="text-xs text-muted-foreground">Example: £120 ÷ 1.20 = £100</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">VAT Amount (Add)</h4>
                  <div className="bg-background rounded p-4 space-y-2 text-sm font-mono">
                    <p>Net Price × (VAT Rate ÷ 100) = VAT</p>
                    <p className="text-xs text-muted-foreground">Example: £100 × 0.20 = £20</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-accent">VAT Amount (Remove)</h4>
                  <div className="bg-background rounded p-4 space-y-2 text-sm font-mono">
                    <p>Gross Price - (Gross Price ÷ (1 + VAT Rate ÷ 100)) = VAT</p>
                    <p className="text-xs text-muted-foreground">Example: £120 - £100 = £20</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">VAT Registration Threshold</h3>
              <p className="text-sm text-muted-foreground mb-4">
                In the UK, businesses must register for VAT if their turnover exceeds:
              </p>
              <div className="bg-primary/10 rounded-lg p-4">
                <p className="text-2xl font-bold text-primary">£85,000</p>
                <p className="text-xs text-muted-foreground mt-2">per year</p>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Voluntary registration is possible for businesses with turnover below this threshold.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">VAT Return Frequency</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Registered businesses must submit VAT returns to HMRC:
              </p>
              <div className="bg-accent/10 rounded-lg p-4">
                <p className="text-2xl font-bold text-accent">Quarterly</p>
                <p className="text-xs text-muted-foreground mt-2">4 times per year</p>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Returns are typically due 1 month after the end of each quarter.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Important Notes */}
        <Card className="border-accent bg-accent/5">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-lg font-semibold mb-4">Important Notes</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span className="text-sm">
                  VAT rates and thresholds may change. Always check the{' '}
                  <a href="https://www.gov.uk/vat" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                    official HMRC website
                  </a>{' '}
                  for the latest information.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span className="text-sm">
                  This calculator provides estimates for educational purposes. For formal invoicing and accounts, consult with a qualified accountant.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span className="text-sm">
                  Some goods and services are exempt from VAT (e.g., insurance, postage stamps, betting). Check specific cases with HMRC.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span className="text-sm">
                  If you export goods, you may qualify for zero-rated VAT. See HMRC guidance on VAT and exports.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
