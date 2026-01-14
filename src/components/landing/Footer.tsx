import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-8 bg-navy-dark border-t border-primary-foreground/10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-coral flex items-center justify-center">
              <span className="text-accent-foreground font-display font-bold text-lg">P</span>
            </div>
            <span className="font-display font-bold text-xl text-primary-foreground">Placetrace</span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <Link to="/impressum" className="hover:text-primary-foreground transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-primary-foreground transition-colors">Datenschutz</Link>
            <span>Berlin, Deutschland</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Placetrace. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
