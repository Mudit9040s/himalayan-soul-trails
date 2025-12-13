import heroImage from "@/assets/hero-mountains.jpg";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToPrograms = () => {
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Majestic Himalayan mountain peaks at golden hour with misty valleys"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8 opacity-0 animate-fade-up">
            <span className="text-primary font-body text-sm tracking-[0.4em] uppercase">
              Himalayan Indian Mountain Outdoor
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-up animation-delay-200">
            <span className="block">Step Into</span>
            <span className="block text-gradient italic">The Himalayas</span>
          </h1>

          {/* Subtitle */}
          <p className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up animation-delay-400 font-body">
            Manifest the adventure you've always imagined. Guided by certified mountaineers, 
            discover paths less traveled and experiences deeply felt.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-up animation-delay-600">
            <Button variant="hero" size="xl" asChild>
              <Link to="/expeditions">Explore Expeditions</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Plan Your Journey</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-in animation-delay-800">
        <button 
          onClick={scrollToPrograms}
          className="flex flex-col items-center gap-2 text-foreground/60 hover:text-primary transition-colors group"
          aria-label="Scroll to explore"
        >
          <span className="text-xs tracking-widest uppercase font-body">Explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
