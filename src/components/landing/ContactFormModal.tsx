import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface ContactFormModalProps {
  trigger: React.ReactNode;
}

const ContactFormModal = ({ trigger }: ContactFormModalProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }).toString(),
      });

      if (!response.ok) throw new Error("Form submission failed");

      setIsSubmitted(true);
      toast.success(t("contact.toast.success"));

      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        setFormData({ name: "", email: "", company: "", message: "" });
        setPrivacyAccepted(false);
      }, 2000);
    } catch (error) {
      console.error("Form error:", error);
      toast.error(t("contact.toast.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-bold text-foreground">
            {t("contact.title")}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {t("contact.description")}
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-coral" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              {t("contact.success.title")}
            </h3>
            <p className="text-muted-foreground">
              {t("contact.success.message")}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                {t("contact.form.name")} {t("contact.form.required")}
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.form.namePlaceholder")}
                required
                className="bg-background border-border focus:border-coral"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                {t("contact.form.email")} {t("contact.form.required")}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.form.emailPlaceholder")}
                required
                className="bg-background border-border focus:border-coral"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-foreground">
                {t("contact.form.company")}
              </Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={t("contact.form.companyPlaceholder")}
                className="bg-background border-border focus:border-coral"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                {t("contact.form.message")} {t("contact.form.required")}
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.form.messagePlaceholder")}
                required
                rows={4}
                className="bg-background border-border focus:border-coral resize-none"
              />
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="privacy"
                checked={privacyAccepted}
                onCheckedChange={(checked) => setPrivacyAccepted(checked === true)}
                className="mt-1"
              />
              <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                {t("contact.form.privacyText")}{" "}
                <Link
                  to="/datenschutz"
                  target="_blank"
                  className="text-coral hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {t("contact.form.privacyLink")}
                </Link>{" "}
                {t("contact.form.privacyTextEnd")} {t("contact.form.required")}
              </Label>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || !privacyAccepted}
              className="w-full bg-accent hover:bg-coral-light text-accent-foreground font-semibold py-6 shadow-glow disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  {t("contact.form.sending")}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  {t("contact.form.submit")}
                </>
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;
