import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ContactFormModal from "./ContactFormModal";

const Hero = () => {
  const { t } = useTranslation();

  const trustBadges = [
    { label: t("hero.badges.experience"), icon: "⭐" },
    { label: t("hero.badges.servers"), icon: "🇪🇺" },
    { label: t("hero.badges.gdpr"), icon: "🛡️" },
  ];

  const trustItems = t("hero.trustItems", { returnObjects: true }) as string[];

  return (
    <section className="relative min-h-screen flex items-center bg-hero overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-coral/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-navy-light/30 rounded-full blur-3xl animate-pulse-soft animation-delay-200" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-coral rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground/90">
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            >
              {t("hero.title")}{" "}
              <span className="text-coral">{t("hero.titleHighlight")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <ContactFormModal
                trigger={
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-coral-light text-accent-foreground font-semibold text-lg px-8 py-6 shadow-glow group"
                  >
                    {t("hero.cta")}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                }
              />
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium text-lg px-8 py-6"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t("hero.learnMore")}
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-primary-foreground/70">
                  <CheckCircle2 className="w-4 h-4 text-coral" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-primary-foreground/5 backdrop-blur-lg rounded-2xl p-8 border border-primary-foreground/10">
              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-primary-foreground/60 text-sm font-medium">{t("hero.dashboard.label")}</span>
                  <span className="text-coral text-sm font-semibold">+47%</span>
                </div>
                <div className="text-5xl font-display font-bold text-primary-foreground">
                  38<span className="text-coral">h</span>
                </div>
                <div className="h-2 bg-primary-foreground/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-coral to-coral-light rounded-full"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary-foreground/10">
                  <div>
                    <div className="text-2xl font-display font-bold text-primary-foreground">€672</div>
                    <div className="text-xs text-primary-foreground/60">{t("hero.dashboard.saved")}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-primary-foreground">3x</div>
                    <div className="text-xs text-primary-foreground/60">{t("hero.dashboard.faster")}</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -top-4 -right-4 bg-coral text-accent-foreground rounded-xl px-4 py-2 shadow-lg animate-float"
              >
                <span className="font-semibold text-sm">{t("hero.dashboard.automated")} ✓</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-primary-foreground/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                <span className="text-2xl">{badge.icon}</span>
                <span className="text-primary-foreground/80 font-medium">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
