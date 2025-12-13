import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Compass, Calendar, Users, Mountain, Star } from "lucide-react";
import customTrekImage from "@/assets/custom-trek.jpg";

const features = [
  {
    title: "Custom Route Planning",
    description: "Tell us your dream, and we'll chart the path. From untouched valleys to challenging summits, we design routes that match your vision."
  },
  {
    title: "Flexible Schedules",
    description: "Your timeline, your pace. We adapt our expeditions to fit your availability, ensuring you get the most out of every moment."
  },
  {
    title: "Private Expeditions",
    description: "Travel with just your group. Whether it's a solo adventure, couples retreat, or family expedition, enjoy exclusive experiences."
  },
  {
    title: "Difficulty Customization",
    description: "From gentle walks to technical climbs, we calibrate every trek to your fitness level and adventure appetite."
  }
];

const process = [
  { step: 1, title: "Share Your Vision", description: "Tell us about your dream Himalayan experience, preferences, and constraints." },
  { step: 2, title: "Custom Proposal", description: "We craft a detailed itinerary tailored specifically to your requirements." },
  { step: 3, title: "Refine Together", description: "Work with our experts to fine-tune every aspect of your expedition." },
  { step: 4, title: "Adventure Begins", description: "Embark on your personalized Himalayan journey with our expert team." }
];

const CustomTreks = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={customTrekImage}
            alt="Custom trek campsite under stars"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block opacity-0 animate-fade-up">
            Personalized Adventures
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl opacity-0 animate-fade-up animation-delay-200">
            Your Journey,
            <span className="text-gradient italic block">Your Way</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed opacity-0 animate-fade-up animation-delay-400">
            Every adventurer is unique. We craft fully personalized Himalayan expeditions 
            based on your preferences, fitness level, timeline, and dreams.
          </p>
          <div className="mt-8 opacity-0 animate-fade-up animation-delay-600">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start Planning
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Tailored to <span className="text-gradient italic">Perfection</span>
            </h2>
            <p className="text-muted-foreground">
              Every aspect of your expedition is customized to create an unforgettable experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="p-8 rounded-xl bg-gradient-card border border-border/50 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              How It <span className="text-gradient italic">Works</span>
            </h2>
            <p className="text-muted-foreground">
              From vision to summit, we guide you through every step.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div 
                key={item.step}
                className="flex gap-6 mb-8 last:mb-0 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center font-display text-xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <div className="pt-2">
                  <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border/50 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100+", label: "Custom Treks Designed" },
              { value: "50+", label: "Unique Routes" },
              { value: "4.9", label: "Average Rating", icon: Star },
              { value: "100%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-1">
                  {stat.value}
                  {stat.icon && <stat.icon className="w-6 h-6 fill-primary" />}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Ready to Design Your <span className="text-gradient italic">Dream Trek?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Share your vision with us, and let's create an expedition that's 
            uniquely yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/expeditions">View Set Expeditions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CustomTreks;
