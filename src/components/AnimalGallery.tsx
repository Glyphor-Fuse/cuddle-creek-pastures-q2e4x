
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Info, ArrowRight } from "lucide-react";

interface Animal {
  id: string;
  name: string;
  species: string;
  image: string;
  funFact: string;
  diet: string;
  personality: string;
}

const animals: Animal[] = [
  {
    id: "1",
    name: "Barnaby",
    species: "Highland Cow",
    image: "/images/cow.png",
    funFact: "Barnaby loves having his bangs brushed!",
    diet: "Hay & Special Grain",
    personality: "Gentle Giant",
  },
  {
    id: "2",
    name: "Pip",
    species: "Pygmy Goat",
    image: "/images/goat.png",
    funFact: "Pip can jump 3 feet in the air when excited.",
    diet: "Grass & Alfalfa",
    personality: "Chaotic Good",
  },
  {
    id: "3",
    name: "Luna",
    species: "Holland Lop Bunny",
    image: "/images/bunny.png",
    funFact: "Her ears are longer than her legs.",
    diet: "Carrots & Timothy Hay",
    personality: "Cuddle Bug",
  },
  {
    id: "4",
    name: "Puddles",
    species: "Call Duck",
    image: "/images/duck.png",
    funFact: "Puddles has a best friend named Splash.",
    diet: "Peas & Corn",
    personality: "Loud & Proud",
  },
];

export function AnimalGallery() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden" id="animals">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-4.5 rounded-full bg-background text-primary-foreground font-medium text-sm mb-4 shadow-sm border border-primary/20">
            Meet the Residents
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
            Make a New <span className="text-primary-foreground">Furry Friend</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our animals are more than just livestock; they’re family. Click on a card to learn more about their favorite treats and quirks!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {animals.map((animal) => (
            <motion.div
              key={animal.id}
              layoutId={`card-${animal.id}`}
              onClick={() => setSelectedId(animal.id)}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow bg-card"
              whileHover={{ y: -8 }}
            >
              <motion.img
                layoutId={`image-${animal.id}`}
                src={animal.image}
                alt={animal.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/0 to-transparent opacity-60" />
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 text-foreground"
                layoutId={`content-${animal.id}`}
              >
                <h3 className="text-2xl font-display mb-1">{animal.name}</h3>
                <p className="text-foreground/90 font-medium text-sm">{animal.species}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-background/40 backdrop-blur-sm p-4">
              <motion.div
                layoutId={`card-${selectedId}`}
                className="w-full max-w-lg bg-card rounded-3xl overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 p-4 bg-background/20 hover:bg-background/30 text-foreground rounded-full z-20 backdrop-blur-md transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="relative h-64 sm:h-80">
                  <motion.img
                    layoutId={`image-${selectedId}`}
                    src={animals.find((a) => a.id === selectedId)?.image}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                  <motion.div 
                    className="absolute bottom-6 left-6 text-foreground"
                    layoutId={`content-${selectedId}`}
                  >
                     <h3 className="text-4xl font-display mb-1">{animals.find((a) => a.id === selectedId)?.name}</h3>
                     <p className="text-lg opacity-90">{animals.find((a) => a.id === selectedId)?.species}</p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="p-8 space-y-6"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-secondary/20">
                      <div className="flex items-center gap-2 text-secondary-foreground mb-2 font-bold text-sm uppercase tracking-wider">
                        <Heart size={16} /> Personality
                      </div>
                      <p className="text-foreground font-medium">{animals.find((a) => a.id === selectedId)?.personality}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-primary/20">
                      <div className="flex items-center gap-2 text-primary-foreground mb-2 font-bold text-sm uppercase tracking-wider">
                        <Info size={16} /> Diet
                      </div>
                      <p className="text-foreground font-medium">{animals.find((a) => a.id === selectedId)?.diet}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-display text-xl mb-2 text-foreground">Fun Fact</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {animals.find((a) => a.id === selectedId)?.funFact}
                    </p>
                  </div>

                  <button className="w-full py-4 rounded-xl bg-foreground text-background font-bold text-lg hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2">
                    Adopt {animals.find((a) => a.id === selectedId)?.name} <ArrowRight size={20} />
                  </button>
                </motion.div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default AnimalGallery;
