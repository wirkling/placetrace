import { useTranslation } from "react-i18next";
import { FileText, BarChart3, Shield, LayoutDashboard, Phone, Mail, Globe, TrendingUp } from "lucide-react";

// QR Code SVG for placetrace.com (generated)
const QRCode = () => (
  <svg viewBox="0 0 29 29" className="w-16 h-16">
    <rect width="29" height="29" fill="white" />
    <path d="M0,0h7v1h-7zM8,0h1v1h-1zM10,0h2v1h-2zM14,0h1v1h-1zM16,0h2v1h-2zM19,0h3v1h-3zM22,0h7v1h-7zM0,1h1v1h-1zM6,1h1v1h-1zM8,1h1v1h-1zM10,1h1v1h-1zM13,1h1v1h-1zM15,1h1v1h-1zM18,1h2v1h-2zM22,1h1v1h-1zM28,1h1v1h-1zM0,2h1v1h-1zM2,2h3v1h-3zM6,2h1v1h-1zM10,2h2v1h-2zM14,2h3v1h-3zM18,2h1v1h-1zM22,2h1v1h-1zM24,2h3v1h-3zM28,2h1v1h-1zM0,3h1v1h-1zM2,3h3v1h-3zM6,3h1v1h-1zM8,3h3v1h-3zM12,3h2v1h-2zM16,3h1v1h-1zM18,3h3v1h-3zM22,3h1v1h-1zM24,3h3v1h-3zM28,3h1v1h-1zM0,4h1v1h-1zM2,4h3v1h-3zM6,4h1v1h-1zM9,4h1v1h-1zM12,4h1v1h-1zM14,4h1v1h-1zM17,4h1v1h-1zM19,4h1v1h-1zM22,4h1v1h-1zM24,4h3v1h-3zM28,4h1v1h-1zM0,5h1v1h-1zM6,5h1v1h-1zM8,5h2v1h-2zM11,5h2v1h-2zM15,5h2v1h-2zM18,5h1v1h-1zM20,5h1v1h-1zM22,5h1v1h-1zM28,5h1v1h-1zM0,6h7v1h-7zM8,6h1v1h-1zM10,6h1v1h-1zM12,6h1v1h-1zM14,6h1v1h-1zM16,6h1v1h-1zM18,6h1v1h-1zM20,6h1v1h-1zM22,6h7v1h-7zM9,7h1v1h-1zM11,7h1v1h-1zM13,7h2v1h-2zM17,7h3v1h-3zM0,8h1v1h-1zM3,8h1v1h-1zM5,8h2v1h-2zM8,8h2v1h-2zM11,8h3v1h-3zM15,8h2v1h-2zM18,8h1v1h-1zM21,8h3v1h-3zM25,8h2v1h-2zM28,8h1v1h-1zM1,9h2v1h-2zM5,9h1v1h-1zM7,9h2v1h-2zM12,9h1v1h-1zM14,9h1v1h-1zM17,9h1v1h-1zM21,9h1v1h-1zM24,9h2v1h-2zM27,9h1v1h-1zM0,10h3v1h-3zM4,10h2v1h-2zM7,10h1v1h-1zM10,10h1v1h-1zM12,10h2v1h-2zM15,10h2v1h-2zM18,10h1v1h-1zM20,10h3v1h-3zM24,10h1v1h-1zM27,10h2v1h-2zM0,11h1v1h-1zM3,11h1v1h-1zM5,11h2v1h-2zM9,11h2v1h-2zM12,11h1v1h-1zM14,11h2v1h-2zM18,11h2v1h-2zM22,11h2v1h-2zM26,11h1v1h-1zM28,11h1v1h-1zM2,12h4v1h-4zM7,12h1v1h-1zM10,12h2v1h-2zM15,12h1v1h-1zM17,12h2v1h-2zM20,12h1v1h-1zM22,12h2v1h-2zM25,12h1v1h-1zM0,13h2v1h-2zM3,13h1v1h-1zM6,13h1v1h-1zM9,13h1v1h-1zM14,13h1v1h-1zM16,13h2v1h-2zM21,13h2v1h-2zM24,13h2v1h-2zM27,13h1v1h-1zM0,14h2v1h-2zM3,14h1v1h-1zM5,14h3v1h-3zM10,14h5v1h-5zM17,14h1v1h-1zM20,14h1v1h-1zM23,14h1v1h-1zM27,14h1v1h-1zM0,15h1v1h-1zM3,15h5v1h-5zM9,15h4v1h-4zM14,15h3v1h-3zM18,15h2v1h-2zM22,15h2v1h-2zM25,15h1v1h-1zM27,15h2v1h-2zM0,16h1v1h-1zM2,16h2v1h-2zM5,16h2v1h-2zM10,16h1v1h-1zM12,16h1v1h-1zM15,16h1v1h-1zM18,16h1v1h-1zM21,16h5v1h-5zM1,17h2v1h-2zM4,17h1v1h-1zM7,17h2v1h-2zM11,17h1v1h-1zM14,17h2v1h-2zM17,17h2v1h-2zM20,17h3v1h-3zM26,17h1v1h-1zM28,17h1v1h-1zM0,18h1v1h-1zM3,18h5v1h-5zM10,18h1v1h-1zM14,18h1v1h-1zM16,18h3v1h-3zM20,18h2v1h-2zM25,18h2v1h-2zM0,19h2v1h-2zM3,19h1v1h-1zM5,19h2v1h-2zM9,19h2v1h-2zM13,19h1v1h-1zM16,19h2v1h-2zM19,19h3v1h-3zM24,19h1v1h-1zM26,19h1v1h-1zM28,19h1v1h-1zM8,20h2v1h-2zM12,20h1v1h-1zM15,20h1v1h-1zM17,20h1v1h-1zM19,20h2v1h-2zM22,20h3v1h-3zM26,20h3v1h-3zM0,21h7v1h-7zM8,21h1v1h-1zM10,21h1v1h-1zM12,21h1v1h-1zM15,21h4v1h-4zM20,21h2v1h-2zM23,21h1v1h-1zM25,21h1v1h-1zM27,21h2v1h-2zM0,22h1v1h-1zM6,22h1v1h-1zM9,22h1v1h-1zM11,22h1v1h-1zM13,22h2v1h-2zM17,22h3v1h-3zM21,22h1v1h-1zM24,22h1v1h-1zM26,22h1v1h-1zM0,23h1v1h-1zM2,23h3v1h-3zM6,23h1v1h-1zM8,23h3v1h-3zM12,23h2v1h-2zM15,23h3v1h-3zM19,23h1v1h-1zM21,23h2v1h-2zM24,23h2v1h-2zM27,23h2v1h-2zM0,24h1v1h-1zM2,24h3v1h-3zM6,24h1v1h-1zM10,24h2v1h-2zM13,24h2v1h-2zM16,24h1v1h-1zM20,24h1v1h-1zM22,24h2v1h-2zM25,24h2v1h-2zM0,25h1v1h-1zM2,25h3v1h-3zM6,25h1v1h-1zM8,25h2v1h-2zM11,25h2v1h-2zM14,25h2v1h-2zM17,25h2v1h-2zM21,25h1v1h-1zM23,25h1v1h-1zM25,25h1v1h-1zM27,25h1v1h-1zM0,26h1v1h-1zM6,26h1v1h-1zM8,26h1v1h-1zM10,26h3v1h-3zM14,26h1v1h-1zM17,26h2v1h-2zM21,26h3v1h-3zM25,26h1v1h-1zM27,26h2v1h-2zM0,27h7v1h-7zM9,27h1v1h-1zM11,27h2v1h-2zM14,27h2v1h-2zM17,27h1v1h-1zM19,27h2v1h-2zM23,27h1v1h-1zM25,27h2v1h-2zM28,27h1v1h-1z" fill="hsl(220 45% 20%)" />
  </svg>
);

const Flyer = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const services = isEnglish
    ? [
        { icon: FileText, title: "Invoice Processing", desc: "Automated review & routing" },
        { icon: BarChart3, title: "Reconciliation & Reporting", desc: "Multi-system data matching" },
        { icon: Shield, title: "Compliance & Audit", desc: "Automated evidence collection" },
        { icon: LayoutDashboard, title: "Operations Dashboards", desc: "Real-time unified view" },
      ]
    : [
        { icon: FileText, title: "Rechnungsverarbeitung", desc: "Automatische Prüfung & Weiterleitung" },
        { icon: BarChart3, title: "Abstimmung & Reporting", desc: "Datenabgleich aus mehreren Systemen" },
        { icon: Shield, title: "Compliance & Audit", desc: "Automatische Nachweissammlung" },
        { icon: LayoutDashboard, title: "Operations Dashboards", desc: "Echtzeit-Gesamtübersicht" },
      ];

  const steps = isEnglish
    ? [
        { num: "01", title: "You describe", desc: "your workflow" },
        { num: "02", title: "We develop", desc: "for free" },
        { num: "03", title: "You use", desc: "the software" },
        { num: "04", title: "You pay", desc: "monthly" },
      ]
    : [
        { num: "01", title: "Sie beschreiben", desc: "Ihren Workflow" },
        { num: "02", title: "Wir entwickeln", desc: "kostenlos" },
        { num: "03", title: "Sie nutzen", desc: "die Software" },
        { num: "04", title: "Sie zahlen", desc: "monatlich" },
      ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 print:bg-white print:p-0 print:m-0">
      {/* A4 Paper */}
      <div className="w-[210mm] h-[297mm] mx-auto bg-white shadow-2xl print:shadow-none overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[hsl(220,45%,20%)] text-white px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Placetrace" className="h-10 w-10" />
            <span className="font-display text-2xl font-bold tracking-tight">placetrace</span>
          </div>
          <div className="bg-white/10 rounded-full px-4 py-1.5">
            <span className="text-sm font-medium">
              {isEnglish ? "For Trades, Retail & Service Providers" : "Für Handwerk, Handel & Dienstleister"}
            </span>
          </div>
        </div>

        {/* Headline Section */}
        <div className="text-center px-10 py-6">
          <h1 className="font-display text-4xl font-bold text-[hsl(220,45%,20%)] leading-tight mb-1">
            {isEnglish ? "Software that does the work." : "Software die arbeitet."}
          </h1>
          <h2 className="font-display text-4xl font-bold text-[hsl(5,75%,60%)]">
            {isEnglish ? "No upfront costs." : "Ohne Vorabkosten."}
          </h2>
          <p className="mt-3 text-base text-gray-600 max-w-lg mx-auto leading-relaxed">
            {isEnglish
              ? "We develop your solution for free. Only when the software runs and saves time, you pay monthly for hosting and maintenance."
              : "Wir entwickeln Ihre Lösung kostenlos. Erst wenn die Software läuft und Zeit spart, zahlen Sie monatlich für Hosting und Wartung."}
          </p>
        </div>

        {/* Savings Highlight */}
        <div className="mx-10 mb-5 bg-[hsl(40,33%,96%)] rounded-xl p-5 flex items-center justify-center gap-4 border border-[hsl(40,25%,90%)]">
          <div className="w-12 h-12 rounded-full bg-[hsl(5,75%,60%)] flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-display text-2xl font-bold">
              <span className="text-[hsl(220,45%,20%)]">~€10.000</span>{" "}
              <span className="text-[hsl(5,75%,60%)]">{isEnglish ? "Savings per Workflow" : "Ersparnis pro Workflow"}</span>
            </div>
            <div className="text-sm text-gray-600">
              {isEnglish ? "average per year" : "durchschnittlich pro Jahr"}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="px-10 mb-5">
          <h3 className="font-display text-base font-semibold text-[hsl(220,45%,20%)] mb-3 text-center">
            {isEnglish ? "Examples" : "Beispiele"}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100"
              >
                <div className="w-9 h-9 rounded-lg bg-[hsl(5,75%,60%)] flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[hsl(220,45%,20%)] text-sm">{service.title}</div>
                  <div className="text-xs text-gray-500">{service.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section - Navy Background */}
        <div className="bg-[hsl(220,45%,20%)] text-white py-5 px-10">
          <h3 className="font-display text-base font-semibold text-white mb-4 text-center">
            {isEnglish ? "How It Works" : "So funktioniert's"}
          </h3>
          <div className="flex items-start justify-between">
            {steps.map((step, index) => (
              <div key={step.num} className="flex items-start">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white text-[hsl(220,45%,20%)] flex items-center justify-center font-display font-bold text-lg mb-2 mx-auto">
                    {step.num}
                  </div>
                  <div className="text-xs font-semibold text-white">{step.title}</div>
                  <div className="text-xs text-white/70">{step.desc}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-16 h-0.5 bg-[hsl(5,75%,60%)] mx-2 mt-6" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center gap-8 py-4 px-10">
          <div className="flex items-center gap-2">
            <span className="text-lg">&#11088;</span>
            <span className="text-sm font-medium text-gray-700">
              {isEnglish ? "12+ Years Experience" : "12+ Jahre Erfahrung"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">&#127466;&#127482;</span>
            <span className="text-sm font-medium text-gray-700">
              {isEnglish ? "German/EU Servers" : "Deutsche/EU Server"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">&#128737;</span>
            <span className="text-sm font-medium text-gray-700">
              {isEnglish ? "GDPR Compliant" : "DSGVO-konform"}
            </span>
          </div>
        </div>

        {/* Quote Section */}
        <div className="flex-1 flex items-center justify-center px-10">
          <p className="font-display text-xl text-[hsl(220,45%,20%)] italic text-center">
            <span className="text-[hsl(5,75%,60%)]">"</span>
            {isEnglish
              ? "Your process is unique. Your software should be too."
              : "Ihr Prozess ist einzigartig. Ihre Software sollte es auch sein."}
            <span className="text-[hsl(5,75%,60%)]">"</span>
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-[hsl(220,45%,20%)] text-white px-10 py-5 flex items-center justify-between">
          <div className="space-y-2">
            <h3 className="font-display text-xl font-bold">
              {isEnglish ? "Let's Talk" : "Jetzt Kontakt aufnehmen"}
            </h3>
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[hsl(5,75%,60%)]" />
                <span className="text-sm">+49 176 726 38 087</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[hsl(5,75%,60%)]" />
                <span className="text-sm">dirk@placetrace.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[hsl(5,75%,60%)]" />
                <span className="text-sm font-semibold">placetrace.com</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white p-2 rounded-xl">
              <QRCode />
            </div>
            <span className="text-xs text-white/60 mt-1.5">
              {isEnglish ? "Scan to visit" : "Scannen"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flyer;
