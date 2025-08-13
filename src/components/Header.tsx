import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import logoImage from "@/assets/project-clay-logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logoImage} alt="Project Clay" className="h-8 w-auto" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#browse" className="text-foreground hover:text-primary transition-colors">
            Browse mentors
          </a>
          <a href="#community" className="text-foreground hover:text-primary transition-colors">
            Ivy 10
          </a>
          <a href="#call" className="text-foreground hover:text-primary transition-colors">
            Book a Call
          </a>
          <a href="#community" className="text-foreground hover:text-primary transition-colors">
            Join Community
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
          <Button variant="cta" size="sm">
            Register now →
          </Button>
        </div>
      </div>
    </header>
  );
}