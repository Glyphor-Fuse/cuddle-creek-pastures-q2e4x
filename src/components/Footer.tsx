
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-display text-3xl mb-6 text-foreground">Cuddle Creek</h3>
            <p className="text-background/70 leading-relaxed mb-6">
              A family-owned sanctuary where animals are loved and children learn the language of kindness.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors">Meet the Animals</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Upcoming Events</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ticket Packages</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Farm Map</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Volunteer</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Visit Us</h4>
            <ul className="space-y-4 text-background/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span>1234 Whispering Willows Ln,<br />Sunnyvale Valley, CA 94086</span>
              </li>
              <li className="flex items-center gap-3">
                <ClockIcon size={18} className="shrink-0" />
                <span>Open Daily 9am - 5pm</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-background/70">
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <span>hello@cuddlecreek.com</span>
              </li>
              <li>
                <button className="mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-colors w-full">
                  Book a Visit
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© 2024 Cuddle Creek Pastures. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ClockIcon({ size, className }: { size?: number, className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    )
}

export default Footer;
