'use client';

import { Card, CardContent } from '@/components/ui/card';

export default function VATEducation() {
  return (
    <section id="vat-rates" className="py-16 md:py-24 px-4 bg-background border-b border-border/40">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section 3.2: What is VAT Block */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">What is VAT?</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            VAT (Value Added Tax) is a consumption tax charged on most goods and services sold in the United Kingdom. It was introduced in 1973 and is administered by HM Revenue and Customs (HMRC). The standard rate is 20%.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            VAT registered businesses charge VAT on their sales (output tax) and can usually reclaim the VAT they pay on business purchases (input tax). The difference between the two is paid to, or reclaimed from, HMRC through a VAT return. The cost of VAT is ultimately carried by the end consumer, which is why business-to-business prices are often quoted excluding VAT while consumer prices must include it.
          </p>
        </div>

        {/* Section 3.3: UK VAT Rates in 2026 */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-foreground tracking-tight">UK VAT rates in 2026</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              The UK has three rates of VAT: the standard rate of 20%, the reduced rate of 5% and the zero rate of 0%. The standard rate has been 20% since 4 January 2011 and applies to most goods and services. Some items, such as insurance and postage stamps, are exempt rather than zero rated, which is an important distinction for businesses.
            </p>
          </div>

          {/* HTML Engine Compliant Table */}
          <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-muted text-foreground font-semibold border-b border-border">
                  <th className="p-4">Rate</th>
                  <th className="p-4">VAT</th>
                  <th className="p-4">Applies to</th>
                  <th className="p-4">Example on £100</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr className="hover:bg-muted/20 transition">
                  <td className="p-4 font-bold text-foreground">Standard</td>
                  <td className="p-4 font-bold text-primary text-base">20%</td>
                  <td className="p-4">Most goods and services: electronics, adult clothing, professional services, alcohol, hot takeaway food</td>
                  <td className="p-4 font-mono text-xs text-foreground bg-muted/10">£100 + VAT = £120.00</td>
                </tr>
                <tr className="hover:bg-muted/20 transition">
                  <td className="p-4 font-bold text-foreground">Reduced</td>
                  <td className="p-4 font-bold text-accent text-base">5%</td>
                  <td className="p-4">Domestic gas and electricity, children's car seats, mobility aids for older people, certain residential conversions</td>
                  <td className="p-4 font-mono text-xs text-foreground bg-muted/10">£100 + VAT = £105.00</td>
                </tr>
                <tr className="hover:bg-muted/20 transition">
                  <td className="p-4 font-bold text-foreground">Zero</td>
                  <td className="p-4 font-bold text-foreground text-base">0%</td>
                  <td className="p-4">Most food, books and newspapers, children's clothing and footwear, exports of goods outside the UK</td>
                  <td className="p-4 font-mono text-xs text-foreground bg-muted/10">£100 + VAT = £100.00</td>
                </tr>
                <tr className="hover:bg-muted/20 transition">
                  <td className="p-4 font-bold text-foreground">Exempt</td>
                  <td className="p-4 font-semibold text-destructive">n/a</td>
                  <td className="p-4">Insurance, postage stamps, education, health services, most financial services. Not the same as zero rated</td>
                  <td className="p-4 text-xs font-semibold text-destructive bg-muted/10">No VAT charged</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed bg-muted/30 p-4 rounded-xl border border-border/50">
            <strong>Zero rated vs exempt note:</strong> Zero rated and exempt are not the same thing. Zero rated sales are still taxable supplies: they count towards the £90,000 registration threshold and the business can reclaim VAT on related costs. Exempt sales sit outside the VAT system entirely, so they do not count towards the threshold and VAT on related costs usually cannot be reclaimed.
          </p>
        </div>

        {/* Section 3.4: How to Calculate VAT (Formulas) */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-foreground tracking-tight">How to calculate VAT</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              To add VAT to a price, multiply the net amount by 1.20 for the 20% rate (or by 1.05 for the 5% rate). To remove VAT from a price, divide the gross amount by 1.20 (or by 1.05). The calculator above applies these formulas automatically, but they are useful to know for quick checks.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-muted text-foreground font-semibold border-b border-border">
                  <th className="p-4">Calculation</th>
                  <th className="p-4">Formula</th>
                  <th className="p-4">Example at 20%</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground font-mono text-xs">
                <tr className="hover:bg-muted/20 transition">
                  <td className="p-4 font-sans font-bold text-foreground text-sm">Add VAT</td>
                  <td className="p-4 text-foreground">Net x (1 + rate / 100) = Gross</td>
                  <td className="p-4 text-primary font-bold bg-muted/10 text-sm">£250 x 1.20 = £300.00</td>
                </tr>
                <tr className="hover:bg-muted/20 transition">
                  <td className="p-4 font-sans font-bold text-foreground text-sm">Remove VAT</td>
                  <td className="p-4 text-foreground">Gross / (1 + rate / 100) = Net</td>
                  <td className="p-4 text-accent font-bold bg-muted/10 text-sm">£300 / 1.20 = £250.00</td>
                </tr>
                <tr className="hover:bg-muted/20 transition">
                  <td className="p-4 font-sans font-bold text-foreground text-sm">VAT amount (adding)</td>
                  <td className="p-4 text-foreground">Net x (rate / 100) = VAT</td>
                  <td className="p-4 text-foreground bg-muted/10 text-sm">£250 x 0.20 = £50.00</td>
                </tr>
                <tr className="hover:bg-muted/20 transition bg-primary/5">
                  <td className="p-4 font-sans font-bold text-foreground text-sm">VAT inside a gross price</td>
                  <td className="p-4 text-primary font-bold">Gross / 6 at 20% (the VAT fraction)</td>
                  <td className="p-4 text-primary font-bold bg-muted/10 text-sm">£300 / 6 = £50.00</td>
                </tr>
                <tr className="hover:bg-muted/20 transition bg-accent/5">
                  <td className="p-4 font-sans font-bold text-foreground text-sm">VAT inside a gross price</td>
                  <td className="p-4 text-accent font-bold">Gross / 21 at 5%</td>
                  <td className="p-4 text-accent font-bold bg-muted/10 text-sm">£105 / 21 = £5.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3.5 & 3.6 Split blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-border shadow-sm bg-card">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-foreground tracking-tight">When do you need to register for VAT?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You must register for VAT with HMRC if your taxable turnover exceeds <strong>£90,000</strong> in any rolling 12 month period, or if you expect it to exceed £90,000 in the next 30 days alone. The £90,000 threshold has applied since 1 April 2024, when it was raised from £85,000, and is unchanged for the 2026/27 tax year. You have 30 days to register after crossing it.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The threshold is measured on a rolling 12 month basis, not the tax year, so it can be crossed in any month. Taxable turnover includes standard, reduced and zero rated sales, but not exempt sales. The deregistration threshold is £88,000.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Businesses below £90,000 can register voluntarily. This is often worthwhile for B2B businesses, because it allows them to reclaim VAT on purchases while their business customers can reclaim the VAT charged to them.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm bg-card">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-foreground tracking-tight">How often are VAT returns submitted?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Most VAT registered businesses submit VAT returns to HMRC every quarter. The return and any payment are due one calendar month and seven days after the end of the VAT period, so a quarter ending 31 March is due by <strong>7 May</strong>. Some businesses use the Annual Accounting Scheme (one return per year) or file monthly.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All VAT registered businesses must follow Making Tax Digital (MTD) for VAT, which has been mandatory since April 2022. This means keeping digital VAT records and submitting returns through MTD compatible software rather than typing figures into the HMRC website.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Advisory Warning component */}
        <Card className="border-accent/30 bg-accent/5">
          <CardContent className="p-6">
            <h4 className="text-base font-bold text-foreground mb-1">Important Guidance Note</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              VAT rates and thresholds can change at any UK Budget statement. Always double-check transactions against the official{' '}
              <a href="https://www.gov.uk/vat" className="text-accent hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                HMRC gov.uk gateway
              </a>{' '}
              before finalizing commercial accounting or tax filing returns.
            </p>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}