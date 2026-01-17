import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isEnglish = i18n.language === 'en' || location.pathname.startsWith('/en');
  const prefix = isEnglish ? '/en' : '';

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
          <Link to={prefix || "/"} className="flex items-center gap-2">
            <img src="/logo.png" alt="Placetrace" className="w-8 h-8" />
            <span className="font-display font-bold text-xl text-primary-foreground">Placetrace</span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <Link to={`${prefix}/impressum`} className="hover:text-primary-foreground transition-colors">
              {t("footer.impressum")}
            </Link>
            <Link to={`${prefix}/datenschutz`} className="hover:text-primary-foreground transition-colors">
              {t("footer.privacy")}
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Placetrace. {t("footer.copyright")}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
