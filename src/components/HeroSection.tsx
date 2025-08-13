import { Button } from "@/components/ui/button";
import { FloatingMentorCards } from "./FloatingMentorCards";
import { Search } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/80 overflow-hidden">
      <FloatingMentorCards />
      
      <div className="container mx-auto px-4 text-center z-10">
        {/* Trust indicators */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-card to-blue-card border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-card to-purple-card border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-card to-yellow-card border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-card to-pink-card border-2 border-white"></div>
          </div>
          <p className="text-sm text-muted-foreground">
            Trusted by <span className="font-semibold">5000+</span> students from <span className="font-semibold">30+</span> countries
          </p>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Any passion,{" "}
          <span className="block">any college.</span>
          <span className="text-primary">We're here for you.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          Traditional college counselling is out of touch and expensive.
        </p>
        
        <p className="text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto">
          Learning new skills is hard. We pair you with an elder sibling who will guide you through it.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            <Search className="w-5 h-5 mr-2" />
            Register now
          </Button>
        </div>
      </div>
    </section>
  );
}