import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ValueProposition() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Looking to apply to{" "}
              <span className="text-primary">Harvard?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              A Harvard student will guide you through the whole process.
            </p>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Have the next{" "}
              <span className="text-primary">big idea?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              A Shark Tank founder will help you bring it to life.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-semibold mb-6">
              Our mentors are students at your dream universities,
            </p>
            <p className="text-2xl md:text-3xl font-semibold mb-8 text-primary">
              and young professionals at India's top startups.
            </p>
            
            <Button variant="cta" size="lg" className="text-lg px-8 py-4">
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}