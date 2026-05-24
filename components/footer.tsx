export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">About</h3>
            <p className="text-sm text-muted-foreground">
              A free, easy-to-use UK VAT calculator for businesses and individuals.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#vat-rates" className="text-muted-foreground hover:text-foreground transition">
                  VAT Rates
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
            <h3 className="font-semibold text-foreground">Contact</h3>
            <p className="text-sm text-muted-foreground">
              <a href="mailto:hello@vatcalculator.co.uk" className="hover:text-foreground transition">
                hello@vatcalculator.co.uk
              </a>
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Legal</h3>
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

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} VAT Calculator. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-4 md:mt-0">
            Disclaimer: This calculator is for informational purposes only. Please consult HMRC for official VAT guidance.
          </p>
        </div>
      </div>
    </footer>
  );
}
