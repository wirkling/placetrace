import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import ContactFormModal from "./ContactFormModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Was Wir Bauen", href: "#services" },
    { label: "Über Uns", href: "#about" },
    { label: "Preise", href: "#pricing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">P</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">Placetrace</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+4917672638087"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              +49 176 726 38 087
            </a>
            <ContactFormModal
              trigger={
                <Button className="bg-accent hover:bg-coral-light text-accent-foreground font-medium shadow-glow">
                  Kostenloses Erstgespräch
                </Button>
              }
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+4917672638087"
                className="flex items-center gap-2 text-base font-medium text-muted-foreground py-2"
              >
                <Phone className="w-4 h-4" />
                +49 176 726 38 087
              </a>
              <ContactFormModal
                trigger={
                  <Button className="bg-accent hover:bg-coral-light text-accent-foreground font-medium w-full mt-2">
                    Kostenloses Erstgespräch
                  </Button>
                }
              />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
