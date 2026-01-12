import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Mountain, Clock, Users, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import trekkingImage from "@/assets/trekking-experience.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Auden's Col Full Itinerary
const audensColItinerary = [
  { day: 1, title: "Arrive at Gangotri (3,415m)", description: "The trek begins from Gangotri, a holy mountain city on the banks of River Bhagirathi. Located in the Greater Himalayan Range, legend says this is where Goddess Ganga descended when Lord Shiva released the river. An 8-9 hour drive from Dehradun through scenic mountain roads." },
  { day: 2, title: "Rest & Acclimatization at Gangotri", description: "Reserved for rest and altitude acclimatization. Explore the market, experience local culture, and attend the team briefing session. Short acclimatization walk in the evening." },
  { day: 3, title: "Gangotri to Nala Camp (3,760m)", distance: "7 km", description: "First day of trekking with 350m altitude gain through dense oak and birch forests. Magnificent views of Gangotri III and Jogin II peaks. Evening acclimatization walk." },
  { day: 4, title: "Nala Camp to Rudugaira Camp (4,350m)", distance: "4 km", description: "Steep 600m altitude gain to upper grazing grounds. Spot Bharal (Himalayan Mountain Goats). Camp surrounded by Gangotri I, II, III and Jogin III peaks." },
  { day: 5, title: "Rest Day at Rudugaira Base Camp", description: "Acclimatization day with views of Auden's Col from a short climb. Essential rest before the challenging days ahead." },
  { day: 6, title: "Rudugaira to Auden's Col Base Camp (4,720m)", distance: "8 km", description: "Pass through Gangotri Base Camp (4,500m) and enter moraine terrain. Pass beautiful Sukha Tal lake hidden in a moraine bowl." },
  { day: 7, title: "Cross Auden's Col (5,490m) to Khatling Glacier (5,000m)", distance: "5 km", description: "THE day! Cross the formidable pass with roped sections on 30-50 degree gradients. Descend through a 70-75 degree gully to the glacier. Views of massive icefalls and formidable peaks." },
  { day: 8, title: "Khatling Glacier to Zero Point (3,870m)", distance: "10 km", description: "One of the most demanding days - crossing the 10km heavily glaciated Khatling region with hidden crevasses. Requires extreme caution on loose gravel and scree." },
  { day: 9, title: "Rest Day at Zero Point", description: "Well-deserved rest after the extremely taxing glacier crossing." },
  { day: 10, title: "Zero Point to Chowki (3,580m)", distance: "7 km", description: "Leave the snow behind and enter warmer valley reaches. Arrive at grassy meadows for the first time in days." },
  { day: 11, title: "Chowki to Masar Tal (4,135m)", distance: "8 km", description: "Trek to one of the most isolated lakes in Garhwal. Views of Thalay Sagar (6,904m). Camp by the pristine high-altitude lake." },
  { day: 12, title: "Masar Tal to Vasuki Tal via Mayali Pass (5,000m)", distance: "12 km", description: "Another challenging day with steep ascent to Mayali Pass. Rappel down using fixed ropes. Reach the sacred Vasuki Tal." },
  { day: 13, title: "Vasuki Tal to Kedarnath (3,590m)", distance: "7 km", description: "Reach one of the twelve Jyotirlings and holiest Shiva shrines. Visit the temple and enjoy a warm bed after days of trekking." },
  { day: 14, title: "Kedarnath to Gaurikund (1,985m)", distance: "14 km", description: "Easy, well-marked descent trail. Overnight in guesthouse." },
  { day: 15, title: "Gaurikund to Dehradun", distance: "252 km drive", description: "9-hour scenic drive alongside the Ganga River back to Dehradun." },
  { day: 16, title: "Reserve Day", description: "Buffer day for weather delays or emergencies." },
];

// Everest Base Camp Itinerary
const ebcItinerary = [
  { day: 1, title: "Arrival in Kathmandu (1,400m)", description: "Airport pickup and leisure day. Explore Thamel street with restaurants, shops for trekking gear." },
  { day: 2, title: "Fly to Lukla, Trek to Phakding (2,652m)", distance: "3 hrs", description: "35-minute scenic flight to Lukla. Trek through villages and green mountains to Phakding." },
  { day: 3, title: "Phakding to Namche Bazaar (3,440m)", distance: "6-7 hrs", description: "Trek alongside Dudh Koshi river through green mountain ranges and thick forests. First glimpses of Everest and Lhotse." },
  { day: 4, title: "Namche to Khumjung (3,790m)", distance: "1-2 hrs", description: "Visit Namche Museum with Tenzing Norgay statue. Hike to Syangboche Airport with views of Everest, Lhotse, and Amadablam. Visit Khumjung Monastery." },
  { day: 5, title: "Khumjung to Tengboche (3,860m)", distance: "6-7 hrs", description: "One of the most beautiful sections. Visit the famous Tengboche Monastery." },
  { day: 6, title: "Tengboche to Dingboche (4,410m)", distance: "6-7 hrs", description: "Continue ascending through stunning Himalayan landscapes." },
  { day: 7, title: "Acclimatization at Dingboche", description: "Short hike with views of Mt. Lhotse (4th highest) and Mt. Makalu (5th highest)." },
  { day: 8, title: "Dingboche to Lobuche (4,940m)", distance: "6-7 hrs", description: "Views of Mt. Pumori, Nuptse, Cholatse, and Thamserku. Cross Khumbu Glacier." },
  { day: 9, title: "Lobuche to EBC (5,364m) via Gorakshep", distance: "8-9 hrs", description: "Reach Everest Base Camp! Walk alongside Khumbu Glacier and see the famous Khumbu Icefall." },
  { day: 10, title: "Kala Patthar (5,645m) to Pheriche", distance: "7-8 hrs", description: "Most rewarding day - sunrise hike to Kala Patthar for the best Everest views. Then descend to Pheriche." },
  { day: 11, title: "Pheriche to Namche Bazaar", distance: "6-7 hrs", description: "Easy descent through familiar terrain." },
  { day: 12, title: "Namche Bazaar to Lukla", distance: "6-7 hrs", description: "Final trekking day back to Lukla." },
  { day: 13, title: "Fly Lukla to Kathmandu", description: "35-minute flight back. Leisure day in Kathmandu." },
  { day: 14, title: "Departure", description: "Transfer to airport for onward journey." },
];

// Kailash Mansarovar Itinerary
const kailashItinerary = [
  { day: 1, title: "Kathmandu Arrival", description: "Welcome at Tribhuvan Airport, hotel transfer, evening briefing about the Yatra." },
  { day: 2, title: "Visa Processing & Free Day", description: "Tibet visa processing. Explore Kathmandu or shop for essentials." },
  { day: 3, title: "Visit Pashupatinath & Budhanilkantha", description: "Visit sacred Pashupatinath Temple and Sleeping Vishnu. Final preparations." },
  { day: 4, title: "Visa Collection & Preparation", description: "Collect Chinese visa and finalize travel essentials." },
  { day: 5, title: "Kathmandu to Syabrubesi (2,000m)", distance: "159 km, 6-7 hrs", description: "Scenic drive with breathtaking views of hills, rivers, and Himalayan landscapes." },
  { day: 6, title: "Cross to Kyirong, Tibet (2,900m)", distance: "25 km", description: "Complete Nepal-China border formalities. Welcome by Tibetan representatives." },
  { day: 7, title: "Kyirong to Saga (4,500m)", distance: "185 km, 5 hrs", description: "Drive through stunning Tibetan landscapes, cross passes up to 5,200m. First glimpse of Brahmaputra River." },
  { day: 8, title: "Saga to Mansarovar (4,560m)", distance: "530 km, 7 hrs", description: "Reach Lake Mansarovar! Complete first Parikrama by bus (102 km). Visit Rakshas Tal. South-face view of Kailash." },
  { day: 9, title: "Holy Bath & Puja at Mansarovar, Drive to Darchen", distance: "40 km", description: "Sacred bath in Mansarovar. Perform Puja & Hawan. Drive to Kailash base camp." },
  { day: 10, title: "Kailash Parikrama Day 1: Darchen to Diraphuk (4,860m)", distance: "12 km trek", description: "Begin the sacred circumambulation. Best North Face view of Kailash. Option for Kailash Charan Sparsha." },
  { day: 11, title: "Kailash Parikrama Day 2: Diraphuk to Zuthulphuk (4,790m)", distance: "22 km, 9-10 hrs", description: "Most challenging day! Cross Dolma-La Pass (5,630m). Visit Gauri Kund (Parvati Kund)." },
  { day: 12, title: "Kailash Parikrama Day 3: Complete Kora, Drive to Saga", distance: "8 km trek + 520 km drive", description: "Complete the sacred Parikrama. Return via Mansarovar to Saga." },
  { day: 13, title: "Saga to Kyirong", distance: "185 km, 4-5 hrs", description: "Retrace journey through Tibetan highlands." },
  { day: 14, title: "Kyirong to Kathmandu", distance: "180 km", description: "Cross back to Nepal. Scenic drive to Kathmandu." },
  { day: 15, title: "Departure from Kathmandu", description: "Transfer to airport with divine blessings and unforgettable memories." },
];

// Non-Technical Peaks
const nonTechnicalPeaks = [
  { name: "Mt. Garud Dom", altitude: "6,000m", season: "May-Jun, Sep-Oct", location: "Uttarakhand", difficulty: "Challenging", description: "A stunning peak offering incredible views of the Garhwal Himalayas. Perfect for climbers looking to step up from high-altitude trekking." },
  { name: "Mt. Shalang Dhura", altitude: "5,678m", season: "May-Jun, Sep-Oct", location: "Uttarakhand", difficulty: "Moderate-Challenging", description: "A beautiful peak with moderate technical requirements, ideal for those transitioning to mountaineering." },
  { name: "Mt. Baljuri", altitude: "5,922m", season: "May-Jun, Sep-Oct", location: "Uttarakhand", difficulty: "Challenging", description: "Known for its accessible approach and rewarding summit views of the surrounding Himalayan giants." },
];

// Technical Peaks
const technicalPeaks = [
  { name: "Mt. Bhagirathi II", altitude: "6,512m", season: "May-Jun, Sep-Oct", location: "Uttarakhand", difficulty: "Technical", description: "One of the most iconic peaks in the Gangotri region, requiring technical climbing skills and experience." },
  { name: "Mt. Nanda Ghunti", altitude: "6,309m", season: "May-Jun, Sep-Oct", location: "Uttarakhand", difficulty: "Technical", description: "A challenging peak near Roopkund, offering stunning views of Nanda Devi and Trishul massifs." },
  { name: "Mt. Satopanth", altitude: "7,084m", season: "May-Jun, Sep-Oct", location: "Uttarakhand", difficulty: "Advanced Technical", description: "A formidable 7000er in the Garhwal Himalayas, demanding advanced mountaineering skills." },
  { name: "Mt. Nun Kun", altitude: "7,135m", season: "May-Jun, Sep-Oct", location: "Ladakh", difficulty: "Advanced Technical", description: "The highest peak in Ladakh, a twin peak massif offering one of India's premier climbing challenges." },
  { name: "Mt. Trishul I", altitude: "7,120m", season: "May-Jun, Sep-Oct", location: "Uttarakhand", difficulty: "Advanced Technical", description: "A legendary Himalayan peak, historically significant as the first 7000m peak ever climbed." },
];

// High Altitude Passes
const highAltitudePasses = [
  { name: "Auden's Col", altitude: "5,490m", duration: "16 Days", location: "Uttarakhand", difficulty: "Extreme", description: "The holy grail of Western Himalayan treks, more difficult than Kalindi Khal. Links Gangotri and Kedarnath through heavily glaciated terrain." },
  { name: "Kalindi Pass", altitude: "5,950m", duration: "14 Days", location: "Uttarakhand", difficulty: "Extreme", description: "One of the most dangerous treks in India, connecting Gangotri to Badrinath across the mighty Kalindi glacier." },
  { name: "Trails Pass", altitude: "5,300m", duration: "10-12 Days", location: "Uttarakhand", difficulty: "Very Difficult", description: "A lesser-known high altitude crossing demanding excellent fitness and acclimatization." },
];

// Treks
const treks = [
  { name: "Roopkund Trek", altitude: "4,486m", duration: "8 Days", season: "Apr-Jun, Sep-Oct", location: "Uttarakhand", difficulty: "Challenging", description: "The mysterious skeleton lake trek. Ancient human remains at the glacial lake with stunning views of Trishul and Nanda Ghunti." },
  { name: "Sundardhunga Trek", altitude: "4,320m", duration: "7 Days", season: "Apr-Jun, Sep-Oct", location: "Uttarakhand", difficulty: "Moderate-Challenging", description: "Valley of Beautiful Stones - pristine alpine meadows and sacred lakes including Sukhram and Devi Kund." },
  { name: "Nanda Devi Sanctuary", altitude: "2,500m", duration: "10 Days", season: "Apr-Jun, Sep-Oct", location: "Uttarakhand", difficulty: "Moderate", description: "UNESCO World Heritage site. Explore the inner sanctuary of India's second highest peak through the Rishi Ganga gorge." },
  { name: "Satopanth Lake Trek", altitude: "4,600m", duration: "7 Days", season: "Apr-Jun, Sep-Oct", location: "Uttarakhand", difficulty: "Challenging", description: "Sacred triangular lake at the foot of Satopanth and Swargarohini peaks. Mythologically linked to Brahma, Vishnu, and Shiva." },
];

interface ItineraryDay {
  day: number;
  title: string;
  distance?: string;
  description: string;
}

const ItineraryAccordion = ({ itinerary }: { itinerary: ItineraryDay[] }) => (
  <Accordion type="single" collapsible className="w-full">
    {itinerary.map((item) => (
      <AccordionItem key={item.day} value={`day-${item.day}`} className="border-border/50">
        <AccordionTrigger className="text-left hover:no-underline py-4">
          <div className="flex items-center gap-4">
            <span className="text-primary font-display text-lg font-semibold min-w-[60px]">Day {item.day}</span>
            <span className="text-foreground font-medium">{item.title}</span>
            {item.distance && <span className="text-muted-foreground text-sm">({item.distance})</span>}
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground leading-relaxed pl-[76px]">
          {item.description}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

interface ExpeditionCardProps {
  name: string;
  altitude: string;
  duration?: string;
  season?: string;
  location: string;
  difficulty: string;
  description: string;
}

const ExpeditionCard = ({ name, altitude, duration, season, location, difficulty, description }: ExpeditionCardProps) => (
  <div className="group p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card">
    <div className="flex items-start justify-between mb-4">
      <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
        {name}
      </h3>
      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">
        {difficulty}
      </span>
    </div>
    
    <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-3">
      {description}
    </p>
    
    <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
      <div className="flex items-center gap-2 text-foreground/80">
        <Mountain className="w-4 h-4 text-primary" />
        {altitude}
      </div>
      {duration && (
        <div className="flex items-center gap-2 text-foreground/80">
          <Clock className="w-4 h-4 text-primary" />
          {duration}
        </div>
      )}
      <div className="flex items-center gap-2 text-foreground/80">
        <MapPin className="w-4 h-4 text-primary" />
        {location}
      </div>
      {season && (
        <div className="flex items-center gap-2 text-foreground/80">
          <Calendar className="w-4 h-4 text-primary" />
          {season}
        </div>
      )}
    </div>
    
    <Button variant="outline" size="sm" className="w-full group/btn" asChild>
      <Link to="/contact">
        Inquire Now
        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
      </Link>
    </Button>
  </div>
);

const Expeditions = () => {
  const [showFullAudensItinerary, setShowFullAudensItinerary] = useState(false);

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
            Conquer the
            <span className="text-gradient italic block">Mighty Himalayas</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed opacity-0 animate-fade-up animation-delay-400">
            From challenging high-altitude passes to sacred pilgrimages, 
            experience professionally led expeditions with certified mountaineers.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 border-y border-border/50 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Mountain, label: "Peak Expeditions", value: "8+ Peaks" },
              { icon: Users, label: "Expert Team", value: "Certified Guides" },
              { icon: Clock, label: "Duration", value: "7-21 Days" },
              { icon: Calendar, label: "Best Seasons", value: "Apr-Jun, Sep-Oct" },
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

      {/* Featured: Auden's Col */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
              Featured Expedition
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4">
              Auden's Col <span className="text-gradient italic">Trek</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              The holy grail of trekking in the Western Himalayas - more difficult than Kalindi Khal, 
              one of the most dangerous treks in India.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {[
              { label: "Grade", value: "Difficult" },
              { label: "Altitude", value: "5,490m" },
              { label: "Duration", value: "16 Days" },
              { label: "Location", value: "Uttarakhand" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border/50">
                <p className="text-primary font-semibold text-lg">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-foreground/90 leading-relaxed text-lg mb-6">
                Auden's Col is an impossibly high, glaciated pass between the ginormous Gangotri and Jogin massifs, 
                serving as the climax of a long, treacherous journey between the pilgrimage towns of <strong className="text-primary">Gangotri</strong> and <strong className="text-primary">Kedarnath</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Starting from Gangotri, one of the best trailheads in the country, the trek takes you high in the Garhwal Himalayas. 
                You climb through dense birch and oak forests, onto vast meadows with panoramic views, then harsh alpine terrain 
                over moraine fields, steep snow slopes, and the heavily crevassed Khatling glacier.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The first crossing was made by J.B. Auden in 1939, with the next recorded crossing 44 years later. 
                There are no 'easy' days here - the trek requires immense patience and doesn't forgive those who don't acclimatize well. 
                Perfect for seasoned trekkers looking to step up their Himalayan game.
              </p>
            </div>
          </div>

          {/* Itinerary */}
          <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border/50 p-6 md:p-8">
            <h3 className="font-display text-2xl font-semibold mb-6">Day-by-Day Itinerary</h3>
            <div className={!showFullAudensItinerary ? "max-h-[400px] overflow-hidden relative" : ""}>
              <ItineraryAccordion itinerary={audensColItinerary} />
              {!showFullAudensItinerary && (
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent" />
              )}
            </div>
            <Button 
              variant="ghost" 
              className="w-full mt-4 text-primary hover:text-primary"
              onClick={() => setShowFullAudensItinerary(!showFullAudensItinerary)}
            >
              {showFullAudensItinerary ? (
                <>Show Less <ChevronUp className="w-4 h-4 ml-2" /></>
              ) : (
                <>View Full Itinerary <ChevronDown className="w-4 h-4 ml-2" /></>
              )}
            </Button>
          </div>

          <div className="text-center mt-8">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Book Auden's Col Expedition
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Everest Base Camp */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
              International Expedition
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4">
              Everest Base Camp <span className="text-gradient italic">Trek</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Stand at the foot of the world's highest peak. A 14-day journey through the legendary Khumbu region of Nepal.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {[
              { label: "Highest Point", value: "5,645m" },
              { label: "Duration", value: "14 Days" },
              { label: "Location", value: "Nepal" },
              { label: "Difficulty", value: "Challenging" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border/50">
                <p className="text-primary font-semibold text-lg">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border/50 p-6 md:p-8">
            <h3 className="font-display text-2xl font-semibold mb-6">Day-by-Day Itinerary</h3>
            <ItineraryAccordion itinerary={ebcItinerary} />
          </div>

          <div className="text-center mt-8">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Inquire About EBC Trek
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Kailash Mansarovar */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
              Sacred Pilgrimage
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4">
              Kailash Mansarovar <span className="text-gradient italic">Yatra</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              The ultimate spiritual journey to Mount Kailash and the sacred Lake Mansarovar. 
              Cross the mighty Dolma-La Pass at 5,630m.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {[
              { label: "Highest Point", value: "5,630m" },
              { label: "Duration", value: "15 Days" },
              { label: "Location", value: "Tibet, China" },
              { label: "Route", value: "Kathmandu-Kailash" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border/50">
                <p className="text-primary font-semibold text-lg">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-foreground/90 leading-relaxed text-center">
              <strong className="text-primary">Places to See:</strong> Holy River Brahmaputra, Lake Mansarovar, Mt. Kailash, 
              Rakshas Tal, Astapath, Nandi Parvat, Kailash Charan Sparsha, Gauri Kund, Tirthapuri
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border/50 p-6 md:p-8">
            <h3 className="font-display text-2xl font-semibold mb-6">Day-by-Day Itinerary</h3>
            <ItineraryAccordion itinerary={kailashItinerary} />
          </div>

          <div className="text-center mt-8">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Inquire About Kailash Yatra
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* High Altitude Passes */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
              Extreme Adventures
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              High Altitude <span className="text-gradient italic">Passes</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cross the most challenging passes in the Himalayas. Season: May-June, September-October.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highAltitudePasses.map((pass, index) => (
              <div key={pass.name} className="opacity-0 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ExpeditionCard {...pass} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Technical Peaks */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
              Peak Climbing
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Non-Technical <span className="text-gradient italic">Peaks</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your gateway to mountaineering. Challenging summits without technical climbing requirements. 
              Season: May-June, September-October.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {nonTechnicalPeaks.map((peak, index) => (
              <div key={peak.name} className="opacity-0 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ExpeditionCard {...peak} season="May-Jun, Sep-Oct" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Peaks */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
              Advanced Mountaineering
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Technical <span className="text-gradient italic">Peaks</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              For experienced mountaineers seeking serious summit challenges. 
              Requires prior high-altitude experience and technical skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {technicalPeaks.map((peak, index) => (
              <div key={peak.name} className="opacity-0 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ExpeditionCard {...peak} season="May-Jun, Sep-Oct" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treks */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
              Himalayan Treks
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Classic <span className="text-gradient italic">Treks</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore sacred lakes, mysterious valleys, and pristine wilderness. 
              Season: April-June, September-October.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {treks.map((trek, index) => (
              <div key={trek.name} className="opacity-0 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ExpeditionCard {...trek} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Ready for Your Himalayan Adventure?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Can't find your dream expedition? We specialize in custom itineraries 
            tailored to your experience level and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/custom-treks">
                Plan Custom Trek
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Expeditions;