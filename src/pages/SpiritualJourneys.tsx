import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Sunrise, Mountain, Users, Leaf, Sparkles } from "lucide-react";
import spiritualImage from "@/assets/spiritual-journey.jpg";

const journeys = [
  {
    name: "Char Dham Yatra",
    duration: "12 Days",
    description: "Sacred pilgrimage to the four divine abodes: Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    highlights: ["Ancient temples", "Sacred rivers", "Spiritual ceremonies"]
  },
  {
    name: "Hemkund Sahib Trek",
    duration: "7 Days",
    description: "Journey to the highest Gurudwara in the world, nestled among seven snow peaks.",
    highlights: ["Valley of Flowers", "High altitude lake", "Sikh heritage"]
  },
  {
    name: "Kailash Mansarovar",
    duration: "15 Days",
    description: "The ultimate spiritual journey to the abode of Lord Shiva and the sacred lake.",
    highlights: ["Mount Kailash parikrama", "Lake Mansarovar", "Tibet exploration"]
  },
  {
    name: "Meditation Retreat Trek",
    duration: "10 Days",
    description: "Combine gentle trekking with guided meditation in pristine Himalayan settings.",
    highlights: ["Daily meditation", "Yoga sessions", "Digital detox"]
  }
];

const benefits = [
  { icon: Heart, title: "Inner Peace", description: "Find tranquility in the sacred mountains" },
  { icon: Sunrise, title: "Spiritual Awakening", description: "Connect with ancient wisdom traditions" },
  { icon: Leaf, title: "Mindful Travel", description: "Slow, intentional journeys of discovery" },
  { icon: Sparkles, title: "Cultural Immersion", description: "Experience local rituals and ceremonies" },
];

const SpiritualJourneys = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={spiritualImage}
            alt="Ancient Himalayan monastery"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block opacity-0 animate-fade-up">
            Sacred Journeys
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl opacity-0 animate-fade-up animation-delay-200">
            Paths of the
            <span className="text-gradient italic block">Sages</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed opacity-0 animate-fade-up animation-delay-400">
            Follow routes once walked by saints and sages. These journeys are designed for 
            travelers of all ages seeking peace, reflection, and spiritual connection.
          </p>
          <div className="mt-8 opacity-0 animate-fade-up animation-delay-600">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Begin Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 border-b border-border/50 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title} 
                className="text-center opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <benefit.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-display font-semibold mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journeys */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Sacred <span className="text-gradient italic">Journeys</span>
            </h2>
            <p className="text-muted-foreground">
              Transformative experiences blending spirituality, culture, and gentle exploration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {journeys.map((journey, index) => (
              <div 
                key={journey.name}
                className="group p-8 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-2xl font-semibold group-hover:text-primary transition-colors">
                    {journey.name}
                  </h3>
                  <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {journey.duration}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {journey.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {journey.highlights.map((highlight) => (
                    <span 
                      key={highlight}
                      className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" className="group/btn" asChild>
                  <Link to="/contact">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For All Ages */}
      <section className="py-20 bg-card/50 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              For <span className="text-gradient italic">All Ages</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our spiritual journeys welcome travelers of all ages and fitness levels. 
              We carefully balance light trekking with reflection time, ensuring everyone 
              can participate fully in this transformative experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 rounded-full bg-muted text-foreground">Seniors Welcome</span>
              <span className="px-4 py-2 rounded-full bg-muted text-foreground">Family Friendly</span>
              <span className="px-4 py-2 rounded-full bg-muted text-foreground">Solo Travelers</span>
              <span className="px-4 py-2 rounded-full bg-muted text-foreground">Groups</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Begin Your Spiritual <span className="text-gradient italic">Awakening</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            The mountains are calling. Let us guide you on a journey of 
            inner discovery and peace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/expeditions">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SpiritualJourneys;
