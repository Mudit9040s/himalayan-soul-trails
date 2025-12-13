import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Mountain, Users, Calendar, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
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
    link: "/expeditions",
    features: [
      "Certified mountaineers leading every expedition",
      "Carefully planned acclimatization schedules",
      "Authentic trails away from overcrowded routes",
      "Sustainable and responsible trekking practices"
    ],
    stats: [
      { icon: Mountain, label: "Altitude", value: "3,000 - 6,000m" },
      { icon: Clock, label: "Duration", value: "5 - 21 Days" },
      { icon: Users, label: "Group Size", value: "4 - 12 People" },
    ],
    alt: "Group of trekkers on a Himalayan trail with snow-capped peaks in the background"
  },
  {
    id: 2,
    title: "Personalized & Custom Treks",
    subtitle: "Your Journey, Your Way",
    description: "Fully tailored expeditions based on your preferences, fitness level, and interests. Whether seeking a challenging high-altitude adventure or a slow immersive journey, we craft the perfect experience just for you.",
    image: customTrekImage,
    link: "/custom-treks",
    features: [
      "Custom route planning based on your goals",
      "Flexible schedules that fit your timeline",
      "Private or small group expedition formats",
      "Specialized difficulty and altitude planning"
    ],
    stats: [
      { icon: Calendar, label: "Flexibility", value: "Year Round" },
      { icon: Users, label: "Group Size", value: "1 - 8 People" },
      { icon: Mountain, label: "Difficulty", value: "Your Choice" },
    ],
    alt: "Illuminated tent under starry night sky with Himalayan peaks in background"
  },
  {
    id: 3,
    title: "Spiritual & Wellness Journeys",
    subtitle: "Paths of the Sages",
    description: "Following routes once walked by saints and sages, these journeys are designed for travelers of all age groups seeking peace, reflection, and connection with the divine energy of the mountains.",
    image: spiritualImage,
    link: "/spiritual-journeys",
    features: [
      "Spiritually significant Himalayan routes",
      "Mindful travel experiences with meditation",
      "Balance of light trekking and cultural immersion",
      "Suitable for all age groups and fitness levels"
    ],
    stats: [
      { icon: Clock, label: "Duration", value: "7 - 14 Days" },
      { icon: Users, label: "Group Size", value: "6 - 15 People" },
      { icon: Mountain, label: "Difficulty", value: "Easy - Moderate" },
    ],
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

        <div className="space-y-24 lg:space-y-32">
          {programs.map((program, index) => (
            <div 
              key={program.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center opacity-0 animate-fade-up`}
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
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                
                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary text-sm font-body tracking-wider uppercase block mb-4">
                    {program.subtitle}
                  </span>
                  <div className="flex flex-wrap gap-4">
                    {program.stats.map((stat) => (
                      <div key={stat.label} className="flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2">
                        <stat.icon className="w-4 h-4 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                          <p className="text-sm font-medium text-foreground">{stat.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="font-display text-3xl md:text-4xl font-semibold mb-4">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {program.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-foreground/90">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="gold" size="lg" className="group" asChild>
                  <Link to={program.link}>
                    Explore {program.id === 2 ? 'Options' : 'Program'}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
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
