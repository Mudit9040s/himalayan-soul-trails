const Philosophy = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block opacity-0 animate-fade-up">
            Our Philosophy
          </span>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 opacity-0 animate-fade-up animation-delay-200">
            True Adventure Lies in Paths
            <span className="text-gradient italic block mt-2">Less Traveled</span>
          </h2>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed opacity-0 animate-fade-up animation-delay-400">
            <p>
              HIMO is a collective of passionate mountaineers, explorers, and storytellers 
              driven by the timeless human urge to explore the unknown. Rooted in the Himalayas, 
              we design and lead trekking experiences that go beyond conventional routes.
            </p>
            <p>
              Our team comprises qualified mountaineers with multiple first ascents to their name, 
              ensuring that safety, technical expertise, and responsible exploration remain at the 
              core of everything we do.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-border/50 opacity-0 animate-fade-up animation-delay-600">
            <blockquote className="font-display text-2xl md:text-3xl italic text-foreground/90">
              "At HIMO, trekking is not just a journey through mountains—it is an experience 
              that challenges the body, sharpens the mind, and reconnects the soul with the 
              raw essence of the Himalayas."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
