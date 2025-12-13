import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Programs from "@/components/Programs";
import WhyHimo from "@/components/WhyHimo";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Philosophy />
      <Programs />
      <WhyHimo />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;
