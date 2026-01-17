import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import PainPointsGenerator from "@/components/landing/PainPointsGenerator";
import CaseStudies from "@/components/landing/CaseStudies";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import Pricing from "@/components/landing/Pricing";
import About from "@/components/landing/About";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PainPointsGenerator />
        <CaseStudies />
        <Services />
        <Process />
        <About />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
