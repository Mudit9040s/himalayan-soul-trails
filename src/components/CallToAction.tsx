import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 opacity-0 animate-fade-up">
            Ready to Manifest Your
            <span className="text-gradient italic block mt-2">Himalayan Dream?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up animation-delay-200">
            HIMO welcomes you to manifest the adventure you've always imagined, 
            dreamt, or fantasized. It's time to step into the Himalayas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-up animation-delay-400">
            <Button variant="hero" size="xl" className="group animate-pulse-glow" asChild>
              <Link to="/contact">
                Start Your Journey
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/custom-treks">Custom Expeditions</Link>
            </Button>
          </div>

          <p className="mt-10 text-muted-foreground text-sm opacity-0 animate-fade-up animation-delay-600">
            Or reach us at <a href="mailto:explore@himo.in" className="text-primary hover:underline">explore@himo.in</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
