
import { Clock, MapPin, Star } from 'lucide-react';

const events = [
  {
    title: "Lilac Festival",
    date: "April 15 - 20",
    time: "10:00 AM - 4:00 PM",
    image: "/images/event-lilac.png",
    description: "Celebrate spring with blooming lilacs, baby animal petting, and fresh flower crown workshops.",
    tag: "Seasonal"
  },
  {
    title: "Farmer for a Day",
    date: "Every Saturday",
    time: "8:00 AM - 12:00 PM",
    image: "/images/event-farmer.png",
    description: "A hands-on educational program for kids aged 6-12. Learn to feed, groom, and care for farm animals.",
    tag: "Educational"
  },
  {
    title: "Sunset Yoga with Goats",
    date: "Fridays in May",
    time: "6:00 PM - 7:30 PM",
    image: "/images/event-yoga.png",
    description: "Unwind with a gentle yoga flow while playful baby goats hop around (and sometimes on) you!",
    tag: "Wellness"
  }
];

export function Events() {
  return (
    <section className="py-24 bg-background" id="events">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
              Upcoming <span className="text-secondary-foreground">Farm Events</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              There's always something growing, hatching, or happening at Cuddle Creek. Join us for these special community gatherings.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary-foreground font-bold hover:underline underline-offset-4">
            View Full Calendar <Star size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-4 rounded-full text-xs font-bold text-foreground uppercase tracking-wide">
                  {event.tag}
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground mb-3">
                <span className="flex items-center gap-1.5 text-primary-foreground">
                  <Star size={14} /> {event.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} /> {event.time}
                </span>
              </div>
              
              <h3 className="text-2xl font-display text-foreground mb-3 group-hover:text-primary-foreground transition-colors">
                {event.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>
        
        <button className="md:hidden w-full mt-8 py-3 rounded-xl border border-border font-bold text-foreground">
          View Full Calendar
        </button>
      </div>
    </section>
  );
}

export default Events;
