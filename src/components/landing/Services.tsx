import { useTranslation } from "react-i18next";
import { FileText, BarChart3, Shield, LayoutDashboard, Calendar, Zap } from "lucide-react";
import AnimatedSection, { AnimatedItem } from "./AnimatedSection";

const Services = () => {
  const { t } = useTranslation();

  const icons = [FileText, BarChart3, Shield, LayoutDashboard, Calendar, Zap];
  const items = t("services.items", { returnObjects: true }) as Array<{ title: string; description: string }>;

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-4">
            {t("services.badge")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("services.title")} <span className="text-coral">{t("services.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((service, index) => {
            const Icon = icons[index];
            return (
              <AnimatedItem
                key={service.title}
                delay={index * 0.1}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-coral/30 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center mb-6 group-hover:bg-coral/20 transition-colors">
                  <Icon className="w-7 h-7 text-coral" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </AnimatedItem>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
