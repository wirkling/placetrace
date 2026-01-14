import { FileText, BarChart3, Shield, LayoutDashboard, Calendar, Zap } from "lucide-react";
import AnimatedSection, { AnimatedItem } from "./AnimatedSection";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Rechnungseingang & Prüfung",
      description: "Automatisierte Verarbeitung, die E-Mail-Weiterleitung und manuelle Dateneingabe ersetzt. Validieren, routen und verfolgen Sie Rechnungen ohne Tabellenkalkulationen."
    },
    {
      icon: BarChart3,
      title: "Abgleich & Reporting",
      description: "Maßgeschneiderte Workflows, die Daten aus mehreren Systemen ziehen, Datensätze abgleichen und Berichte automatisch generieren."
    },
    {
      icon: Shield,
      title: "Compliance & Audit-Tools",
      description: "Bereiten Sie sich auf Audits vor mit automatisierter Beweissammlung, Dokumentationsverfolgung und Compliance-Dashboards."
    },
    {
      icon: LayoutDashboard,
      title: "Operations-Dashboards",
      description: "Echtzeit-Sichtbarkeit durch Zusammenführung von Daten aus mehreren Systemen in eine einheitliche Ansicht."
    },
    {
      icon: Calendar,
      title: "Monatliche Prozesse",
      description: "Automatisieren Sie wiederkehrende Aufgaben, die monatlich stattfinden. Von Datenaggregation bis Berichtserstellung."
    },
    {
      icon: Zap,
      title: "Individuelle Automatisierung",
      description: "Kleine, fokussierte Systeme, die eine Aufgabe gut erledigen. Software, die zu Ihrem Prozess passt."
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-4">
            Was Wir Bauen
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Interne Tools, die <span className="text-coral">funktionieren</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wir bauen interne Tools, die Excel, E-Mail und manuelle Prüfungen ersetzen.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedItem 
              key={service.title}
              delay={index * 0.1}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-coral/30 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center mb-6 group-hover:bg-coral/20 transition-colors">
                <service.icon className="w-7 h-7 text-coral" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
