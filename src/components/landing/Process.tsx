import { useTranslation } from "react-i18next";
import { MessageSquare, Code2, Rocket, CreditCard } from "lucide-react";
import AnimatedSection, { AnimatedItem } from "./AnimatedSection";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const Process = () => {
  const { t } = useTranslation();
  const icons = [MessageSquare, Code2, Rocket, CreditCard];
  const steps = t("process.steps", { returnObjects: true }) as ProcessStep[];

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
            {t("process.badge")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            {t("process.title")} <span className="text-coral">{t("process.titleHighlight")}</span>
          </h2>
        </AnimatedSection>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-coral/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = icons[index];
              return (
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
                      <Icon className="w-6 h-6 text-coral" />
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
