
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "Mom of 3",
    text: "The cleanest, friendliest petting zoo we've ever been to. The staff was so patient with my toddler who was a bit afraid of the goats at first.",
    avatar: "/images/avatar-1.png"
  },
  {
    name: "Mike & Jenny",
    role: "Weekend Visitors",
    text: "We drove 2 hours to get here and it was worth every minute. The highland cows are majestic! Highly recommend the morning tour.",
    avatar: "/images/avatar-2.png"
  },
  {
    name: "The Wilson Family",
    role: "Season Pass Holders",
    text: "Cuddle Creek is our happy place. We come every other weekend. It's affordable, educational, and just plain fun.",
    avatar: "/images/avatar-3.png"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-display text-center text-foreground mb-16">
          Happy <span className="text-primary-foreground">Campers</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-card rounded-3xl p-8 shadow-sm border border-border/50 relative">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-8 italic">"{review.text}"</p>
              
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover bg-secondary" />
                <div>
                  <h4 className="font-bold text-foreground text-sm">{review.name}</h4>
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
