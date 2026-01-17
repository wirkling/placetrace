import { useTranslation } from "react-i18next";
import { Check, Sparkles, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection, { AnimatedItem } from "./AnimatedSection";
import ContactFormModal from "./ContactFormModal";

const Pricing = () => {
  const { t } = useTranslation();
  const devFeatures = t("pricing.development.features", { returnObjects: true }) as string[];
  const usageFeatures = t("pricing.usage.features", { returnObjects: true }) as string[];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-cream-dark">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-4">
            {t("pricing.badge")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("pricing.title")} <span className="text-coral">{t("pricing.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("pricing.description")}
          </p>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Development - Free */}
          <AnimatedItem delay={0}>
            <div className="relative bg-card rounded-2xl p-8 shadow-card border-2 border-coral h-full">
              <div className="absolute -top-4 left-8 bg-coral text-accent-foreground text-sm font-bold px-4 py-1 rounded-full">
                {t("pricing.development.label")}
              </div>

              <div className="flex items-center gap-4 mb-6 mt-2">
                <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-coral" />
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-foreground">{t("pricing.development.price")}</div>
                  <div className="text-sm text-muted-foreground">{t("pricing.development.subtitle")}</div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                {t("pricing.development.description")}
              </p>

              <ul className="space-y-3 mb-8">
                {devFeatures.map((item) => (
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
                {t("pricing.usage.label")}
              </div>

              <div className="flex items-center gap-4 mb-6 mt-2">
                <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center">
                  <Server className="w-7 h-7 text-navy" />
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-foreground">
                    {t("pricing.usage.price")}<span className="text-xl">{t("pricing.usage.period")}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{t("pricing.usage.subtitle")}</div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                {t("pricing.usage.description")}
              </p>

              <ul className="space-y-3 mb-8">
                {usageFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 bg-muted rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">{t("pricing.usage.aiNote")}</strong> {t("pricing.usage.aiNoteText")}
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
                {t("pricing.cta")}
              </Button>
            }
          />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Pricing;
