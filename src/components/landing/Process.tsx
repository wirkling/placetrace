import { MessageSquare, Code2, Rocket, CreditCard } from "lucide-react";
import AnimatedSection, { AnimatedItem } from "./AnimatedSection";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Sie Beschreiben Ihren Workflow",
      description: "Erzählen Sie uns von Ihrem manuellen Prozess, dem kaputten Workflow oder der nervigen Aufgabe. Was kostet Zeit? Was ist fehleranfällig?"
    },
    {
      number: "02",
      icon: Code2,
      title: "Wir Entwickeln Kostenlos",
      description: "Wir bauen die digitale Lösung. Komplett kostenlos. Keine Vorabzahlung. Kein Entwicklungsbudget. Null Investitionsrisiko für Sie."
    },
    {
      number: "03",
      icon: Rocket,
      title: "Sie Nutzen Es",
      description: "Sie bekommen die fertige Software. Ihre Mitarbeiter nutzen sie im Alltag. Sie sehen sofort, ob es funktioniert und Zeit spart."
    },
    {
      number: "04",
      icon: CreditCard,
      title: "Sie Zahlen Monatlich",
      description: "Sobald die Software im Einsatz ist, zahlen Sie monatlich für Hosting und Wartung. Mindestlaufzeit: 6-12 Monate."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-4">
            So funktioniert es
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            In 4 Schritten zur <span className="text-coral">Lösung</span>
          </h2>
        </AnimatedSection>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-coral/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <AnimatedItem
                key={step.title}
                delay={index * 0.15}
                className="relative group"
              >
                {/* Step Card */}
                <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 hover:border-coral/30 transition-all duration-300 h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-6 bg-coral text-accent-foreground font-display font-bold text-lg px-4 py-1 rounded-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mt-4 mb-4">
                    <step.icon className="w-6 h-6 text-coral" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-primary-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 w-8 h-8 items-center justify-center z-10">
                    <div className="w-3 h-3 border-t-2 border-r-2 border-coral rotate-45" />
                  </div>
                )}
              </AnimatedItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
