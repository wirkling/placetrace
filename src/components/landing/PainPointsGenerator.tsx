import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import AnimatedSection from "./AnimatedSection";
import {
  Sparkles,
  Loader2,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Database,
  FileText,
  BarChart3,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { toast } from "sonner";

interface PainPoint {
  id: string;
  title: string;
  description: string;
  category: string;
}

type Step = "industry" | "loading" | "selection" | "contact" | "success";

const categoryIcons: Record<string, React.ElementType> = {
  Zeitaufwand: Clock,
  Time: Clock,
  Fehlerquellen: AlertTriangle,
  Errors: AlertTriangle,
  Datenmanagement: Database,
  Data: Database,
  Administration: FileText,
  Reporting: BarChart3,
};

const PainPointsGenerator = () => {
  const { t, i18n } = useTranslation();
  const [step, setStep] = useState<Step>("industry");
  const [industry, setIndustry] = useState("");
  const [customIndustry, setCustomIndustry] = useState("");
  const [painPoints, setPainPoints] = useState<PainPoint[]>([]);
  const [selectedPainPoints, setSelectedPainPoints] = useState<Set<string>>(
    new Set()
  );
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const industries = t("painPoints.industries", {
    returnObjects: true,
  }) as string[];

  const handleGeneratePainPoints = async () => {
    const selectedIndustry = industry === "other" ? customIndustry : industry;

    if (!selectedIndustry || selectedIndustry.trim().length < 2) {
      toast.error(t("painPoints.errors.industryRequired"));
      return;
    }

    setStep("loading");

    try {
      const response = await fetch("/.netlify/functions/generate-pain-points", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          industry: selectedIndustry,
          language: i18n.language as "de" | "en",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPainPoints(data.painPoints);
      setStep("selection");
    } catch (err) {
      console.error("Error generating pain points:", err);
      toast.error(t("painPoints.errors.generationFailed"));
      setStep("industry");
    }
  };

  const togglePainPoint = (id: string) => {
    setSelectedPainPoints((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleProceedToContact = () => {
    if (selectedPainPoints.size === 0) {
      toast.error(t("painPoints.errors.selectAtLeastOne"));
      return;
    }
    setStep("contact");
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const selectedIndustry = industry === "other" ? customIndustry : industry;
      const selectedPainPointsData = painPoints.filter((p) =>
        selectedPainPoints.has(p.id)
      );

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "pain-points-lead",
          email,
          phone: phone || "",
          industry: selectedIndustry,
          painPoints: JSON.stringify(
            selectedPainPointsData.map((p) => p.title)
          ),
        }).toString(),
      });

      if (!response.ok) throw new Error("Form submission failed");

      setStep("success");
      toast.success(t("painPoints.success.toast"));

      setTimeout(() => {
        resetForm();
      }, 5000);
    } catch (err) {
      console.error("Form error:", err);
      toast.error(t("painPoints.errors.submitFailed"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setStep("industry");
    setIndustry("");
    setCustomIndustry("");
    setPainPoints([]);
    setSelectedPainPoints(new Set());
    setEmail("");
    setPhone("");
    setPrivacyAccepted(false);
  };

  const getCategoryIcon = (category: string) => {
    const Icon = categoryIcons[category] || FileText;
    return <Icon className="w-5 h-5" />;
  };

  return (
    <section id="pain-points" className="py-20 md:py-32 bg-cream-dark">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-4">
            {t("painPoints.badge")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("painPoints.title")}{" "}
            <span className="text-coral">{t("painPoints.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("painPoints.description")}
          </p>
        </AnimatedSection>

        {/* Main Content Area */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Step 1: Industry Selection */}
            {step === "industry" && (
              <motion.div
                key="industry"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl p-8 shadow-card"
              >
                <div className="max-w-md mx-auto space-y-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="industry"
                      className="text-foreground font-medium"
                    >
                      {t("painPoints.industryLabel")}
                    </Label>
                    <Select value={industry} onValueChange={setIndustry}>
                      <SelectTrigger className="w-full bg-background border-border">
                        <SelectValue
                          placeholder={t("painPoints.industryPlaceholder")}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((ind) => (
                          <SelectItem key={ind} value={ind}>
                            {ind}
                          </SelectItem>
                        ))}
                        <SelectItem value="other">
                          {t("painPoints.otherIndustry")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {industry === "other" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2"
                    >
                      <Label
                        htmlFor="customIndustry"
                        className="text-foreground font-medium"
                      >
                        {t("painPoints.customIndustryLabel")}
                      </Label>
                      <Input
                        id="customIndustry"
                        value={customIndustry}
                        onChange={(e) => setCustomIndustry(e.target.value)}
                        placeholder={t("painPoints.customIndustryPlaceholder")}
                        className="bg-background border-border"
                      />
                    </motion.div>
                  )}

                  <Button
                    onClick={handleGeneratePainPoints}
                    disabled={
                      !industry || (industry === "other" && !customIndustry)
                    }
                    className="w-full bg-accent hover:bg-coral-light text-accent-foreground font-semibold py-6 shadow-glow"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    {t("painPoints.generateButton")}
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Loading State */}
            {step === "loading" && (
              <motion.div
                key="loading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl p-8 shadow-card"
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-4">
                    <Loader2 className="w-8 h-8 text-coral animate-spin" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {t("painPoints.loadingTitle")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("painPoints.loadingDescription")}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="p-4 rounded-xl bg-background/50">
                      <Skeleton className="h-5 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3 mt-1" />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Pain Points Selection */}
            {step === "selection" && (
              <motion.div
                key="selection"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {t("painPoints.selectionTitle")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("painPoints.selectionDescription")}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {painPoints.map((point, index) => (
                    <motion.div
                      key={point.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => togglePainPoint(point.id)}
                      className={`p-5 rounded-xl cursor-pointer transition-all border-2 ${
                        selectedPainPoints.has(point.id)
                          ? "bg-coral/10 border-coral"
                          : "bg-card border-transparent hover:border-coral/30"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                            selectedPainPoints.has(point.id)
                              ? "bg-coral border-coral"
                              : "border-muted-foreground/30"
                          }`}
                        >
                          {selectedPainPoints.has(point.id) && (
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-coral">
                              {getCategoryIcon(point.category)}
                            </span>
                            <h4 className="font-semibold text-foreground">
                              {point.title}
                            </h4>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    onClick={resetForm}
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    {t("painPoints.startOver")}
                  </button>

                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">
                      {t("painPoints.selectedCount", {
                        count: selectedPainPoints.size,
                      })}
                    </span>
                    <Button
                      onClick={handleProceedToContact}
                      disabled={selectedPainPoints.size === 0}
                      className="bg-accent hover:bg-coral-light text-accent-foreground font-semibold shadow-glow"
                    >
                      {t("painPoints.continueButton")}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Contact Form */}
            {step === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl p-8 shadow-card"
              >
                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {t("painPoints.contactTitle")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("painPoints.contactDescription")}
                  </p>
                </div>

                <form
                  onSubmit={handleSubmitLead}
                  className="max-w-md mx-auto space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      {t("painPoints.emailLabel")} {t("painPoints.required")}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("painPoints.emailPlaceholder")}
                      required
                      className="bg-background border-border focus:border-coral"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      {t("painPoints.phoneLabel")}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t("painPoints.phonePlaceholder")}
                      className="bg-background border-border focus:border-coral"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="privacy"
                      checked={privacyAccepted}
                      onCheckedChange={(checked) =>
                        setPrivacyAccepted(checked === true)
                      }
                      className="mt-1"
                    />
                    <Label
                      htmlFor="privacy"
                      className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                    >
                      {t("painPoints.privacyText")}{" "}
                      <Link
                        to="/datenschutz"
                        target="_blank"
                        className="text-coral hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t("painPoints.privacyLink")}
                      </Link>{" "}
                      {t("painPoints.privacyTextEnd")} {t("painPoints.required")}
                    </Label>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep("selection")}
                      className="flex-1"
                    >
                      {t("painPoints.backButton")}
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting || !privacyAccepted}
                      className="flex-1 bg-accent hover:bg-coral-light text-accent-foreground font-semibold shadow-glow disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          {t("painPoints.submitting")}
                        </>
                      ) : (
                        t("painPoints.submitButton")
                      )}
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Step 5: Success State */}
            {step === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl p-8 shadow-card text-center"
              >
                <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-coral" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {t("painPoints.success.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("painPoints.success.message")}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PainPointsGenerator;
