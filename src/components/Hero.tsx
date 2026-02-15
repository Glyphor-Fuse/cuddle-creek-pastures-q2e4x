
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Children feeding animals at Cuddle Creek"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/30 to-transparent sm:from-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-4 rounded-full bg-background/10 backdrop-blur-md border border-border/20 text-foreground mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium tracking-wide">Open Daily: 9am - 5pm</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-foreground mb-8 leading-[0.9] drop-shadow-sm">
            Where Kindness <br />
            <span className="text-primary-foreground">Comes to Life</span>
          </h1>
          
          <p className="text-xl text-foreground/90 max-w-xl mb-10 leading-relaxed drop-shadow-sm">
            Experience the joy of connection at Cuddle Creek Pastures. 
            Educational farm tours, gentle animal encounters, and memories that last a lifetime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg hover:shadow-primary/20 transition-all">
              Book Your Visit
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 border-border/30 bg-transparent text-foreground hover:bg-background hover:text-foreground font-bold backdrop-blur-sm transition-all">
              View Events
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-8 text-foreground/80 font-medium text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-primary" />
              <span>Sunnyvale Valley, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-primary" />
              <span>Next Tour: 10:00 AM</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-primary" />
              <span>Open Year Round</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-background [mask-image:url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQ0MCAzMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIxIiBkPSJNMCAyMjRMMTgwIDIwMi43QzM2MCAxODEgNzIwIDEzOSAxMDgwIDE2MC41QzE0NDAgMTgyIDE0NDAgMjY3IDE0NDAgMjY3VjMyMEgwVjIyNFoiPjwvcGF0aD48L3N2Zz4=')] [mask-size:cover] [mask-position:bottom]" />
    </section>
  );
}

export default Hero;
