import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection, { AnimatedItem } from "./AnimatedSection";

const FAQ = () => {
  const faqs = [
    {
      question: "Was ist, wenn die Software nicht funktioniert?",
      answer: "Wenn das System die vereinbarten Akzeptanzkriterien nicht erfüllt, zahlen Sie nicht. So einfach ist das. Dieses Modell funktioniert, weil wir einen Anreiz haben, Ihr Problem gründlich zu verstehen, bevor wir etwas bauen."
    },
    {
      question: "Wie lange dauert es, eine Lösung zu entwickeln?",
      answer: "Die meisten internen Tools werden in Tagen bis Wochen geliefert, nicht in Monaten. Der Zeitrahmen hängt von der Komplexität des Workflows und den Integrationsanforderungen ab. Wir konzentrieren uns darauf, schnell zu liefern und basierend auf tatsächlicher Nutzung zu iterieren."
    },
    {
      question: "Übernehmen Sie Hosting und Wartung?",
      answer: "Ja. Laufendes Hosting, Wartung und Verbesserungen sind als optionale Dienstleistungen nach der ersten Lieferung verfügbar. Sie entscheiden, welches Unterstützungsniveau für Ihre Bedürfnisse sinnvoll ist."
    },
    {
      question: "Welche Technologien verwenden Sie?",
      answer: "Wir verwenden moderne, bewährte Technologien, die zum jeweiligen Problem passen. Der Tech-Stack wird nach Wartbarkeit, Zuverlässigkeit und Integrationsfähigkeiten ausgewählt—nicht für Lebenslauf-Building. Sie werden nie in proprietären Frameworks eingeschlossen sein."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Häufig gestellte <span className="text-coral">Fragen</span>
            </h2>
          </AnimatedSection>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedItem key={index} delay={index * 0.1}>
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card transition-shadow"
                >
                  <AccordionTrigger className="text-left font-display text-lg font-semibold text-foreground hover:text-coral transition-colors py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </AnimatedItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
