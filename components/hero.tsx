export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <p className="text-accent font-semibold text-sm md:text-base">Free VAT Calculator</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pretty">
            Calculate UK VAT <br className="hidden sm:block" />
            in Seconds
          </h1>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Add or remove VAT from any amount. Supports all standard UK VAT rates plus custom rates for your specific needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="#calculator"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
          >
            Start Calculating
          </a>
          <a
            href="#how-it-works"
            className="px-6 py-3 rounded-lg bg-card border border-border text-foreground font-medium hover:bg-muted transition"
          >
            Learn More
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-8 max-w-sm mx-auto">
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-bold text-primary">3</p>
            <p className="text-xs md:text-sm text-muted-foreground">Standard Rates</p>
          </div>
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-bold text-accent">∞</p>
            <p className="text-xs md:text-sm text-muted-foreground">Custom Rates</p>
          </div>
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-bold text-foreground">100%</p>
            <p className="text-xs md:text-sm text-muted-foreground">Accurate</p>
          </div>
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
