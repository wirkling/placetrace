import { Clock, TrendingDown } from "lucide-react";
import AnimatedSection, { AnimatedItem } from "./AnimatedSection";

const CaseStudies = () => {
  const cases = [
    {
      title: "Rechnungsprüfung im Handwerksbetrieb",
      industry: "Handwerk",
      before: {
        description: "Mitarbeiterin prüft 50 Rechnungen pro Monat manuell in Excel.",
        time: "12 Stunden/Monat"
      },
      after: {
        description: "Software prüft automatisch, markiert nur Auffälligkeiten.",
        time: "2 Stunden/Monat"
      },
      savings: {
        hours: 10,
        euros: 240
      }
    },
    {
      title: "Bestandsabgleich im Einzelhandel",
      industry: "Handel",
      before: {
        description: "Wöchentlicher Export aus Kassensystem, manueller Abgleich mit Warenwirtschaft.",
        time: "4 Stunden/Woche"
      },
      after: {
        description: "Automatischer Abgleich täglich, Dashboard zeigt Abweichungen.",
        time: "30 Minuten/Woche"
      },
      savings: {
        hours: 14,
        euros: 336
      }
    },
    {
      title: "Monatsabschluss im Dienstleistungsbetrieb",
      industry: "Dienstleister",
      before: {
        description: "Daten aus 3 Systemen zusammenführen, Berichte erstellen.",
        time: "2 Tage/Monat"
      },
      after: {
        description: "Software zieht Daten automatisch, erstellt Berichte auf Knopfdruck.",
        time: "2 Stunden/Monat"
      },
      savings: {
        hours: 14,
        euros: 672
      }
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-cream-dark">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-4">
            Echte Ergebnisse
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ein Schmerzhafter Workflow,{" "}
            <span className="text-coral">Behoben</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Die meisten Unternehmen brauchen keine weitere SaaS-Plattform. 
            Sie brauchen einen schmerzhaften Workflow, der aufhört, schmerzhaft zu sein.
          </p>
        </AnimatedSection>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((caseStudy, index) => (
            <AnimatedItem
              key={caseStudy.title}
              delay={index * 0.1}
              className="group bg-navy rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Header */}
              <div className="p-6 pb-4 border-b border-border bg-card">
                <span className="inline-block bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {caseStudy.industry}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {caseStudy.title}
                </h3>
              </div>

              {/* Before/After */}
              <div className="p-6 space-y-4 bg-card flex-1">
                {/* Before */}
                <div className="relative pl-4 border-l-2 border-muted">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Vorher</span>
                  <p className="text-sm text-muted-foreground mt-1">{caseStudy.before.description}</p>
                  <div className="flex items-center gap-2 mt-2 text-foreground">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="font-semibold">{caseStudy.before.time}</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-coral/10 flex items-center justify-center">
                    <TrendingDown className="w-4 h-4 text-coral" />
                  </div>
                </div>

                {/* After */}
                <div className="relative pl-4 border-l-2 border-coral">
                  <span className="text-xs font-semibold text-coral uppercase tracking-wider">Nachher</span>
                  <p className="text-sm text-muted-foreground mt-1">{caseStudy.after.description}</p>
                  <div className="flex items-center gap-2 mt-2 text-foreground">
                    <Clock className="w-4 h-4 text-coral" />
                    <span className="font-semibold">{caseStudy.after.time}</span>
                  </div>
                </div>
              </div>

              {/* Savings Footer */}
              <div className="p-6 pt-4 bg-navy text-primary-foreground mt-auto">
                <span className="text-sm text-primary-foreground/70">Monatliche Ersparnis</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold">{caseStudy.savings.hours}h</span>
                  <span className="text-coral font-semibold">= €{caseStudy.savings.euros}</span>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
