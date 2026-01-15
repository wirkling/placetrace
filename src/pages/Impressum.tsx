import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ImpressumImage = () => (
  <svg
    viewBox="0 0 500 280"
    className="w-full max-w-lg"
    role="img"
    aria-label="Impressum Kontaktdaten"
  >
    <style>
      {`
        .impressum-text { font-family: 'Inter', system-ui, sans-serif; fill: hsl(220, 15%, 45%); }
        .impressum-heading { font-family: 'Space Grotesk', system-ui, sans-serif; font-weight: 600; fill: hsl(220, 30%, 15%); }
      `}
    </style>
    <text className="impressum-heading" x="0" y="24" fontSize="18">Angaben gemäß § 5 TMG</text>
    <text className="impressum-text" x="0" y="52" fontSize="14">Placetrace Solutions UG (haftungsbeschränkt)</text>
    <text className="impressum-text" x="0" y="72" fontSize="14">Schmerberger Weg 88f</text>
    <text className="impressum-text" x="0" y="92" fontSize="14">14548 Schwielowsee OT Caputh</text>
    <text className="impressum-text" x="0" y="112" fontSize="14">Deutschland</text>

    <text className="impressum-heading" x="0" y="148" fontSize="18">Vertreten durch</text>
    <text className="impressum-text" x="0" y="176" fontSize="14">Geschäftsführer: Dirk Wilfling</text>

    <text className="impressum-heading" x="0" y="212" fontSize="18">Kontakt</text>
    <text className="impressum-text" x="0" y="240" fontSize="14">Telefon: +49 176 726 38 087</text>
    <text className="impressum-text" x="0" y="260" fontSize="14">E-Mail: dirk [at] placetrace [dot] com</text>
  </svg>
);

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-4xl font-bold text-foreground mb-8">Impressum</h1>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
            {/* Anti-scraping SVG for contact details */}
            <ImpressumImage />

            <section className="pt-6">
              <h2 className="font-display text-xl font-semibold text-foreground">EU-Streitschlichtung</h2>
              <p className="text-muted-foreground">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">Haftungsausschluss</h2>
              <h3 className="font-semibold text-foreground mt-4">Haftung für Inhalte</h3>
              <p className="text-muted-foreground">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>

              <h3 className="font-semibold text-foreground mt-4">Haftung für Links</h3>
              <p className="text-muted-foreground">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Impressum;
