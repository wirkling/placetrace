import { Lightbulb, Target, Lock } from "lucide-react";
import AnimatedSection, { AnimatedItem, ScaleIn } from "./AnimatedSection";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Keine Multi-Tenant-Plattform",
      description: "Die Software wird nur für Sie entwickelt und nur bei Ihnen eingesetzt."
    },
    {
      icon: Lightbulb,
      title: "Maximale Flexibilität",
      description: "Wir haben kein Bedarf, Features zu bauen, die auch für andere Kunden passen müssen."
    },
    {
      icon: Lock,
      title: "Datensicherheit",
      description: "Deutsche/EU-Server, maßgeschneiderte Entwicklung für maximale Privatsphäre."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <AnimatedSection>
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-4">
              Über Uns
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Software Ist Günstig Zu Entwickeln Geworden.{" "}
              <span className="text-coral">Das Verstehen Echter Probleme Ist Es Nicht.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Placetrace kombiniert Produktmanagement-Erfahrung, tiefes Finanz- und Operations-Know-how 
              und praktische Umsetzung. Das bedeutet weniger Überentwicklung, engeren Fokus und Tools, 
              die tatsächlich genutzt werden.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <AnimatedItem key={feature.title} delay={index * 0.1}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-coral" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AnimatedItem>
              ))}
            </div>

            <AnimatedItem delay={0.4}>
              <div className="mt-8 p-6 bg-muted rounded-2xl">
                <p className="text-foreground font-medium">
                  <span className="text-coral">Das bedeutet:</span> Ihre Lösung passt perfekt zu Ihrem 
                  Prozess - nicht umgekehrt.
                </p>
              </div>
            </AnimatedItem>
          </AnimatedSection>

          {/* Right Column - Visual */}
          <ScaleIn delay={0.2}>
            <div className="bg-navy rounded-2xl p-8 lg:p-12">
              <div className="space-y-8">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-primary-foreground/5 rounded-xl">
                    <div className="font-display text-4xl font-bold text-primary-foreground mb-2">12+</div>
                    <div className="text-sm text-primary-foreground/70">Jahre Erfahrung</div>
                  </div>
                  <div className="text-center p-6 bg-primary-foreground/5 rounded-xl">
                    <div className="font-display text-4xl font-bold text-coral mb-2">100%</div>
                    <div className="text-sm text-primary-foreground/70">DSGVO-konform</div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 border-coral pl-6">
                  <p className="text-primary-foreground/90 text-lg italic mb-4">
                    "Der schwierige Teil ist nicht mehr das Schreiben von Code. 
                    Es ist das Verstehen echter Probleme."
                  </p>
                  <footer className="text-primary-foreground/60 text-sm">
                    — Dirk, Gründer Placetrace
                  </footer>
                </blockquote>

                {/* Server Badge */}
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <span className="text-2xl">🇪🇺</span>
                  <span>Deutsche/EU-Server • DSGVO-konform</span>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
};

export default About;
