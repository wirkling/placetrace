import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Datenschutz = () => {
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
          <h1 className="font-display text-4xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">1. Datenschutz auf einen Blick</h2>
              <h3 className="font-semibold text-foreground mt-4">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">2. Verantwortlicher</h2>
              <p className="text-muted-foreground mb-4">
                Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
              </p>
              <svg
                viewBox="0 0 400 160"
                className="w-full max-w-md"
                role="img"
                aria-label="Verantwortlicher Kontaktdaten"
              >
                <style>
                  {`
                    .dsgvo-text { font-family: 'Inter', system-ui, sans-serif; fill: hsl(220, 15%, 45%); }
                  `}
                </style>
                <text className="dsgvo-text" x="0" y="20" fontSize="14">Placetrace Solutions UG (haftungsbeschränkt)</text>
                <text className="dsgvo-text" x="0" y="42" fontSize="14">Schmerberger Weg 88f</text>
                <text className="dsgvo-text" x="0" y="64" fontSize="14">14548 Schwielowsee OT Caputh</text>
                <text className="dsgvo-text" x="0" y="86" fontSize="14">Deutschland</text>
                <text className="dsgvo-text" x="0" y="116" fontSize="14">Telefon: +49 176 726 38 087</text>
                <text className="dsgvo-text" x="0" y="138" fontSize="14">E-Mail: dirk [at] placetrace [dot] com</text>
              </svg>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">3. Datenerfassung auf dieser Website</h2>

              <h3 className="font-semibold text-foreground mt-4">Kontaktformular</h3>
              <p className="text-muted-foreground">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="text-muted-foreground">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
                mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse
                an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
              </p>

              <h3 className="font-semibold text-foreground mt-4">Server-Log-Dateien</h3>
              <p className="text-muted-foreground">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
                die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="text-muted-foreground">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">4. Hosting</h2>
              <p className="text-muted-foreground">
                Diese Website wird auf Servern in der Europäischen Union gehostet. Die Datenverarbeitung erfolgt
                auf Grundlage unseres berechtigten Interesses an einer sicheren und effizienten Bereitstellung
                unserer Website (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">5. Ihre Rechte</h2>
              <p className="text-muted-foreground">
                Sie haben jederzeit das Recht:
              </p>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung einzulegen (Art. 21 DSGVO)</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt
                oder Ihre datenschutzrechtlichen Ansprüche sonst verletzt worden sind, können Sie sich bei der
                zuständigen Aufsichtsbehörde beschweren.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">6. SSL- bzw. TLS-Verschlüsselung</h2>
              <p className="text-muted-foreground">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte
                eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
                Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in
                Ihrer Browserzeile.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Datenschutz;
