import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import trekkingImage from "@/assets/trekking-experience.jpg";
import customTrekImage from "@/assets/custom-trek.jpg";
import spiritualImage from "@/assets/spiritual-journey.jpg";

const programs = [
  {
    id: 1,
    title: "Himalayan Trekking Experiences",
    subtitle: "Classic & Offbeat Trails",
    description: "Professionally led expeditions across varied terrains and altitudes. From iconic routes to lesser-known paths, each trek delivers an unforgettable experience with emphasis on safety and authenticity.",
    image: trekkingImage,
    features: ["Certified mountaineers", "Acclimatization focused", "Sustainable practices"],
    alt: "Group of trekkers on a Himalayan trail with snow-capped peaks in the background"
  },
  {
    id: 2,
    title: "Personalized & Custom Treks",
    subtitle: "Your Journey, Your Way",
    description: "Fully tailored expeditions based on your preferences, fitness level, and interests. Whether seeking a challenging high-altitude adventure or a slow immersive journey, we craft the perfect experience.",
    image: customTrekImage,
    features: ["Custom route planning", "Flexible schedules", "Private expeditions"],
    alt: "Illuminated tent under starry night sky with Himalayan peaks in background"
  },
  {
    id: 3,
    title: "Spiritual & Wellness Journeys",
    subtitle: "Paths of the Sages",
    description: "Following routes once walked by saints and sages, these journeys are designed for travelers seeking peace, reflection, and connection with the divine energy of the mountains.",
    image: spiritualImage,
    features: ["Spiritually significant routes", "Mindful travel", "All age groups"],
    alt: "Ancient monastery on cliff edge with misty mountains and golden sunrise"
  }
];

const Programs = () => {
  return (
    <section id="programs" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block opacity-0 animate-fade-up">
            Our Programs
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 opacity-0 animate-fade-up animation-delay-200">
            Curated <span className="text-gradient italic">Experiences</span>
          </h2>
          <p className="text-muted-foreground text-lg opacity-0 animate-fade-up animation-delay-400">
            Every itinerary is thoughtfully crafted to offer immersion into Himalayan 
            landscapes, culture, and spirit.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {programs.map((program, index) => (
            <div 
              key={program.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center opacity-0 animate-fade-up`}
              style={{ animationDelay: `${(index + 3) * 150}ms` }}
            >
              {/* Image */}
              <div className={`relative overflow-hidden rounded-2xl group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-primary text-sm font-body tracking-wider uppercase">
                    {program.subtitle}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="font-display text-3xl md:text-4xl font-semibold mb-4">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {program.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="gold" size="lg" className="group">
                  Explore Program
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
