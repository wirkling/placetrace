import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import ContactFormModal from "./ContactFormModal";

const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-coral/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Haben Sie Eine Aufgabe, Die{" "}
            <span className="text-coral">Zu Viel Zeit Kostet?</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Rufen Sie an oder schreiben Sie uns. Wir sagen Ihnen schnell, ob wir helfen können.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <ContactFormModal
              trigger={
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-coral-light text-accent-foreground font-semibold text-lg px-8 py-6 shadow-glow group"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Erstgespräch vereinbaren
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              }
            />
            <Button 
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium text-lg px-8 py-6"
              asChild
            >
              <a href="tel:+4917672638087">
                <Phone className="w-5 h-5 mr-2" />
                +49 176 726 38 087
              </a>
            </Button>
          </div>

          {/* Email */}
          <a 
            href="mailto:dirk@placetrace.com"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-coral transition-colors"
          >
            <Mail className="w-4 h-4" />
            dirk@placetrace.com
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
