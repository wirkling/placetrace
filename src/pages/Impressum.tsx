import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
              <p className="text-muted-foreground">
                Placetrace Solutions UG (haftungsbeschränkt)<br />
                [Straße und Hausnummer]<br />
                [PLZ] Berlin<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">Vertreten durch</h2>
              <p className="text-muted-foreground">
                Geschäftsführer: Dirk Wilfling
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">Kontakt</h2>
              <p className="text-muted-foreground">
                Telefon: +49 176 726 38 087<br />
                E-Mail: dirk@placetrace.com
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">Registereintrag</h2>
              <p className="text-muted-foreground">
                Eintragung im Handelsregister<br />
                Registergericht: Amtsgericht Charlottenburg<br />
                Registernummer: [HRB Nummer]
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">Umsatzsteuer-ID</h2>
              <p className="text-muted-foreground">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                [USt-IdNr.]
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="text-muted-foreground">
                Dirk Wilfling<br />
                [Adresse wie oben]
              </p>
            </section>

            <section>
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
