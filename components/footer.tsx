'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-foreground uppercase tracking-wider">About</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A free, easy-to-use UK VAT calculator for businesses, accountants and individuals. Accurate local browser operations.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-sm text-foreground uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#vat-rates" className="text-muted-foreground hover:text-foreground transition">
                  VAT Rates & Knowledge
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-foreground transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-sm text-foreground uppercase tracking-wider">Contact</h3>
            <p className="text-sm text-muted-foreground">
              <a href="mailto:hello@vatcalculator.co.uk" className="hover:text-foreground font-medium transition">
                hello@vatcalculator.co.uk
              </a>
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-sm text-foreground uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#privacy" className="text-muted-foreground hover:text-foreground transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-muted-foreground hover:text-foreground transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Explicit 100% Verified Content Block Layout containing Freshness Date */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} VAT Calculator. All rights reserved. Prepared by Teqnoor.
          </p>
          <p className="text-xs text-muted-foreground max-w-xl text-left md:text-right leading-relaxed bg-muted/30 p-3 rounded-lg border border-border/40">
            Disclaimer: This calculator is for guidance only and does not constitute tax advice. VAT rates and thresholds can change at a Budget. Figures on this page were last verified against HMRC guidance in June 2026. For official guidance visit gov.uk/vat or speak to a qualified accountant.
          </p>
        </div>
      </div>
    </footer>
  );
}