import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection, { AnimatedItem } from "./AnimatedSection";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const { t } = useTranslation();
  const faqs = t("faq.items", { returnObjects: true }) as FAQItem[];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-4">
              {t("faq.badge")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {t("faq.title")} <span className="text-coral">{t("faq.titleHighlight")}</span>
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
