
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AnimalGallery } from "@/components/AnimalGallery";
import { Pricing } from "@/components/Pricing";
import { Events } from "@/components/Events";
import { Safety } from "@/components/Safety";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground font-body selection:bg-primary/30">
          <Navbar />
          <Hero />
          <AnimalGallery />
          <Pricing />
          <Events />
          <Safety />
          <Testimonials />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
