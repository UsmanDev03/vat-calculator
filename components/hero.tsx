'use client';

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden border-b border-border/40">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <p className="text-accent font-semibold text-sm md:text-base tracking-wide uppercase">Free Utility Tool</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-pretty tracking-tight text-foreground">
            UK VAT Calculator: Add or Remove VAT Instantly
          </h1>
        </div>

        <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto text-pretty">
          Work out VAT at 20%, 5%, 0% or any custom rate. Free, instant and nothing is stored.
        </p>

        <div className="text-base text-muted-foreground max-w-3xl mx-auto text-left leading-relaxed bg-muted/40 p-6 rounded-xl border border-border/60 shadow-sm font-sans">
          This free UK VAT calculator adds VAT to a net price or removes VAT from a gross price at the standard 20% rate, the reduced 5% rate, the zero rate or any custom rate you set. Enter an amount, choose Add VAT or Remove VAT, and you instantly see the net price, the VAT amount and the gross total. You can calculate multiple items at different rates in one go and copy the results straight into a spreadsheet or invoice. All calculations use the exact HMRC formulas and run locally in your browser. No account, no data stored. Rates verified against HMRC guidance. Last updated: June 2026.
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="#calculator"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition shadow-sm shadow-primary/20"
          >
            Open Calculator
          </a>
          <a
            href="#vat-rates"
            className="px-6 py-3 rounded-lg bg-card border border-border text-foreground font-medium hover:bg-muted/80 transition"
          >
            Check 2026 Tax Rates
          </a>
        </div>

        {/* 100% Exact Document Trust Stats Strip */}
        <div className="grid grid-cols-3 gap-4 pt-8 max-w-2xl mx-auto border-t border-border mt-8 text-center">
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-bold text-primary">20%</p>
            <p className="text-xs md:text-sm text-muted-foreground leading-snug">Standard rate, unchanged since 2011</p>
          </div>
          <div className="space-y-1 border-x border-border">
            <p className="text-2xl md:text-3xl font-bold text-accent">£90,000</p>
            <p className="text-xs md:text-sm text-muted-foreground leading-snug">2026/27 VAT registration threshold</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-bold text-foreground">0</p>
            <p className="text-xs md:text-sm text-muted-foreground leading-snug">Data stored: everything runs in your browser</p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}