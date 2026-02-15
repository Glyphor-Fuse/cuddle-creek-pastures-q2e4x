
import { Ban, Camera, CircleAlert, Hand, Heart, Shield, Star } from 'lucide-react';

const rules = [
  {
    icon: Hand,
    title: "Gentle Hands Only",
    text: "Animals love soft pets. Please avoid sudden movements or loud noises that might startle them."
  },
  {
    icon: Ban,
    title: "No Outside Food",
    text: "Our animals are on special diets. Please only feed them the treats provided in our feed bags."
  },
  {
    icon: Shield,
    title: "Wash Your Hands",
    text: "Sanitize before and after petting. We have washing stations located throughout the farm."
  },
  {
    icon: Heart,
    title: "Respect Their Space",
    text: "If an animal walks away, let them go. They might be tired and need a little break."
  },
  {
    icon: Camera,
    title: "Photos Welcome",
    text: "Take as many photos as you like! Just please turn off your flash to protect their sensitive eyes."
  },
  {
    icon: CircleAlert,
    title: "Stay on Paths",
    text: "For your safety and theirs, please stay on the marked visitor paths and designated areas."
  }
];

export function Safety() {
  return (
    <section className="py-24 bg-secondary/10" id="safety">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent-foreground font-bold tracking-wider uppercase text-sm mb-2 block">Safety First</span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
              Farm <span className="text-secondary-foreground">Etiquette</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              To ensure a safe and happy environment for both our visitors and our furry residents, we ask that you follow these simple guidelines during your visit.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {rules.map((rule, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shrink-0 shadow-sm text-primary-foreground">
                    <rule.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{rule.title}</h4>
                    <p className="text-sm text-muted-foreground leading-snug">{rule.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl transform translate-x-12 translate-y-12" />
            <img 
              src="/images/safety-kids.png" 
              alt="Kids washing hands at the farm" 
              className="relative z-10 rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
            />
            {/* Decorative tape elements */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-primary/30 rotate-3 backdrop-blur-sm z-20" />
            <div className="absolute -bottom-6 right-12 w-32 h-8 bg-secondary/30 -rotate-3 backdrop-blur-sm z-20" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Safety;
