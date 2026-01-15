import { useState } from "react";
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
      toast.success("Nachricht gesendet! Wir melden uns in Kürze.");

      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        setFormData({ name: "", email: "", company: "", message: "" });
        setPrivacyAccepted(false);
      }, 2000);
    } catch (error) {
      console.error("Form error:", error);
      toast.error("Fehler beim Senden. Bitte versuchen Sie es erneut.");
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
            Kostenloses Erstgespräch
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Erzählen Sie uns von Ihrem Workflow. Wir melden uns innerhalb von 24
            Stunden.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-coral" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Vielen Dank!
            </h3>
            <p className="text-muted-foreground">
              Wir melden uns in Kürze bei Ihnen.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ihr Name"
                required
                className="bg-background border-border focus:border-coral"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                E-Mail *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ihre@email.de"
                required
                className="bg-background border-border focus:border-coral"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-foreground">
                Unternehmen
              </Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Ihr Unternehmen"
                className="bg-background border-border focus:border-coral"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Was kostet Sie Zeit? *
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Beschreiben Sie kurz den Workflow oder die Aufgabe, die zu viel Zeit kostet..."
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
                Ich habe die{" "}
                <Link
                  to="/datenschutz"
                  target="_blank"
                  className="text-coral hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Datenschutzerklärung
                </Link>{" "}
                gelesen und stimme der Verarbeitung meiner Daten zu. *
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
                  Wird gesendet...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Nachricht senden
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
