
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={cn(
            "text-2xl font-display font-bold transition-colors",
            isScrolled ? "text-foreground" : "text-foreground"
          )}>
            Cuddle Creek
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Animals", "Events", "Tickets", "Safety"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "text-sm font-bold tracking-wide hover:opacity-70 transition-opacity",
                isScrolled ? "text-foreground" : "text-foreground"
              )}
            >
              {item}
            </a>
          ))}
          <Button 
            className={cn(
              "rounded-full font-bold",
              isScrolled ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-background/90"
            )}
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
             <X className={isScrolled ? "text-foreground" : "text-foreground"} />
          ) : (
             <Menu className={isScrolled ? "text-foreground" : "text-foreground"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-t p-4 flex flex-col gap-4 shadow-xl md:hidden">
          {["Animals", "Events", "Tickets", "Safety"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-foreground p-2 hover:bg-secondary/20 rounded-lg"
            >
              {item}
            </a>
          ))}
          <Button className="w-full bg-primary text-primary-foreground font-bold">
            Book Now
          </Button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
