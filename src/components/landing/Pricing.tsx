import { Check, Sparkles, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection, { AnimatedItem } from "./AnimatedSection";
import ContactFormModal from "./ContactFormModal";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-cream-dark">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-4">
            Preise
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Faire, transparente <span className="text-coral">Preise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Keine versteckten Kosten. Keine Überraschungen. Zahlen Sie nur, wenn die Software läuft.
          </p>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Development - Free */}
          <AnimatedItem delay={0}>
            <div className="relative bg-card rounded-2xl p-8 shadow-card border-2 border-coral h-full">
              <div className="absolute -top-4 left-8 bg-coral text-accent-foreground text-sm font-bold px-4 py-1 rounded-full">
                Entwicklung
              </div>

              <div className="flex items-center gap-4 mb-6 mt-2">
                <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-coral" />
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-foreground">€0</div>
                  <div className="text-sm text-muted-foreground">Komplett kostenlos</div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                Wir entwickeln Ihre Software komplett ohne Vorabkosten. Keine Einrichtungsgebühr. 
                Null Investitionsrisiko für Sie.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Anforderungsanalyse inklusive",
                  "Maßgeschneiderte Entwicklung",
                  "Keine Vorabzahlung",
                  "Kein Entwicklungsbudget nötig",
                  "Lieferung in Tagen bis Wochen"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedItem>

          {/* Monthly Usage */}
          <AnimatedItem delay={0.1}>
            <div className="relative bg-card rounded-2xl p-8 shadow-card border border-border h-full">
              <div className="absolute -top-4 left-8 bg-navy text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                Nutzung
              </div>

              <div className="flex items-center gap-4 mb-6 mt-2">
                <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center">
                  <Server className="w-7 h-7 text-navy" />
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-foreground">€X<span className="text-xl">/Monat</span></div>
                  <div className="text-sm text-muted-foreground">Abhängig von Komplexität</div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                Sobald die Software im Einsatz ist, zahlen Sie monatlich für Hosting und Wartung. 
                Die Höhe hängt ab von der Komplexität.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Hosting auf deutschen/EU-Servern",
                  "Technische Wartung",
                  "Support bei Fragen",
                  "Kleine Verbesserungen inklusive",
                  "Mindestlaufzeit: 6-12 Monate"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 bg-muted rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Bei KI-Nutzung:</strong> Nutzungsbasierte Kosten fallen zusätzlich an
                </p>
              </div>
            </div>
          </AnimatedItem>
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.2} className="text-center mt-12">
          <ContactFormModal
            trigger={
              <Button 
                size="lg"
                className="bg-accent hover:bg-coral-light text-accent-foreground font-semibold text-lg px-8 py-6 shadow-glow"
              >
                Kostenloses Erstgespräch vereinbaren
              </Button>
            }
          />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Pricing;
