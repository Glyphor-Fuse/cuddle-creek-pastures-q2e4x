
import { Check, Star, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Day Pass",
    price: "$15",
    description: "Perfect for a spontaneous day of fun.",
    features: ["Access to all animal areas", "1 bag of feed included", "Picnic area access", "Free parking"],
    featured: false,
    color: "bg-card",
  },
  {
    name: "Family Pack",
    price: "$50",
    description: "Best value for families of four.",
    features: ["Entry for 4 people", "4 bags of feed included", "Guided tour (11am or 2pm)", "Souvenir photo", "10% off at gift shop"],
    featured: true,
    color: "bg-primary/10",
  },
  {
    name: "Season Pass",
    price: "$120",
    description: "Unlimited visits all year round.",
    features: ["Unlimited entry for 1 person", "Priority event booking", "Exclusive member hours", "Birthday party discounts", "Quarterly newsletter"],
    featured: false,
    color: "bg-card",
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-background" id="tickets">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
            Plan Your <span className="text-primary-foreground">Farm Day</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're visiting for an hour or staying all day, we have a ticket package that fits your family's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2",
                plan.featured 
                  ? "border-primary shadow-xl bg-background scale-105 z-10" 
                  : "border-border bg-background/50 shadow-sm hover:shadow-md"
              )}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground px-4 py-4 rounded-full text-sm font-bold shadow-sm flex items-center gap-1">
                  <Star size={14} fill="currentColor" /> Best Value
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-display text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm h-10">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground font-medium">/visit</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-primary-foreground" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={cn(
                  "w-full h-12 rounded-xl text-base font-bold",
                  plan.featured ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                )}
              >
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
