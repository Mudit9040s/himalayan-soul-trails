import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Mountain, Clock, Users, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import trekkingImage from "@/assets/trekking-experience.jpg";

const treks = [
  {
    name: "Kedarkantha Summit",
    altitude: "3,800m",
    duration: "6 Days",
    difficulty: "Moderate",
    season: "Dec - Apr",
    description: "A winter wonderland trek through snow-covered trails to one of the most accessible summit climbs."
  },
  {
    name: "Roopkund Trek",
    altitude: "5,029m",
    duration: "8 Days",
    difficulty: "Challenging",
    season: "May - Jun, Sep - Oct",
    description: "The mysterious skeleton lake trek offering stunning views of Trishul and Nanda Ghunti peaks."
  },
  {
    name: "Valley of Flowers",
    altitude: "3,600m",
    duration: "6 Days",
    difficulty: "Easy - Moderate",
    season: "Jul - Sep",
    description: "UNESCO World Heritage site blooming with over 600 species of wildflowers."
  },
  {
    name: "Chadar Trek",
    altitude: "3,300m",
    duration: "9 Days",
    difficulty: "Extreme",
    season: "Jan - Feb",
    description: "Walk on the frozen Zanskar River in sub-zero temperatures for an ultimate adventure."
  },
  {
    name: "Hampta Pass",
    altitude: "4,270m",
    duration: "5 Days",
    difficulty: "Moderate",
    season: "Jun - Oct",
    description: "Cross from lush Kullu Valley to the barren landscapes of Lahaul through a dramatic pass."
  },
  {
    name: "Kuari Pass",
    altitude: "4,264m",
    duration: "6 Days",
    difficulty: "Moderate",
    season: "Apr - Jun, Sep - Nov",
    description: "Lord Curzon's trail offering panoramic views of Nanda Devi and surrounding peaks."
  }
];

const Expeditions = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={trekkingImage}
            alt="Trekkers on Himalayan trail"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block opacity-0 animate-fade-up">
            Himalayan Expeditions
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl opacity-0 animate-fade-up animation-delay-200">
            Classic & Offbeat
            <span className="text-gradient italic block">Himalayan Treks</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed opacity-0 animate-fade-up animation-delay-400">
            Professionally led expeditions by certified mountaineers. From iconic routes 
            to hidden gems, experience the Himalayas like never before.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-y border-border/50 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Mountain, label: "First Ascent Team", value: "Expert Guides" },
              { icon: Users, label: "Group Size", value: "4-12 People" },
              { icon: Clock, label: "Duration", value: "5-21 Days" },
              { icon: Calendar, label: "Year Round", value: "All Seasons" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-foreground font-semibold">{item.value}</p>
                <p className="text-muted-foreground text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trek Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12 text-center">
            Featured <span className="text-gradient italic">Expeditions</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treks.map((trek, index) => (
              <div 
                key={trek.name}
                className="group p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                    {trek.name}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {trek.difficulty}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {trek.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-foreground/80">
                    <Mountain className="w-4 h-4 text-primary" />
                    {trek.altitude}
                  </div>
                  <div className="flex items-center gap-2 text-foreground/80">
                    <Clock className="w-4 h-4 text-primary" />
                    {trek.duration}
                  </div>
                  <div className="flex items-center gap-2 text-foreground/80 col-span-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {trek.season}
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full group/btn" asChild>
                  <Link to="/contact">
                    Inquire Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Don't see your dream trek?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We specialize in offbeat routes and custom expeditions. Let us design 
            the perfect Himalayan adventure for you.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/custom-treks">
              Plan Custom Trek
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Expeditions;
