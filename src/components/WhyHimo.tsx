import { Mountain, Shield, Compass, Heart, Users, Award } from "lucide-react";

const features = [
  {
    icon: Mountain,
    title: "First Ascent Expertise",
    description: "Team with multiple first ascents, bringing unparalleled technical knowledge to every expedition."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Certified mountaineers ensuring highest safety standards with thorough acclimatization protocols."
  },
  {
    icon: Compass,
    title: "Unique Itineraries",
    description: "Beyond commercial routes—curated paths that reveal the hidden heart of the Himalayas."
  },
  {
    icon: Heart,
    title: "Sustainable Practices",
    description: "Deep respect for Himalayan ecology, culture, and the communities we traverse."
  },
  {
    icon: Users,
    title: "Personalized Experience",
    description: "Flexible planning tailored to your fitness, timeline, and adventure aspirations."
  },
  {
    icon: Award,
    title: "Transformative Journeys",
    description: "Experiences that challenge the body, sharpen the mind, and reconnect the soul."
  }
];

const WhyHimo = () => {
  return (
    <section id="why-himo" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block opacity-0 animate-fade-up">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 opacity-0 animate-fade-up animation-delay-200">
            The HIMO <span className="text-gradient italic">Difference</span>
          </h2>
          <p className="text-muted-foreground text-lg opacity-0 animate-fade-up animation-delay-400">
            What sets us apart is not just where we go, but how we journey there.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card opacity-0 animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHimo;
