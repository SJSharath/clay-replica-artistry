import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

export function VideoSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Scrolling text */}
          <div className="mb-12 overflow-hidden">
            <div className="animate-scroll whitespace-nowrap">
              <span className="text-lg text-muted-foreground">
                Learn from near-peer mentors. Get real insights from those who've been there, done that. Learn from near-peer mentors. Get real insights from those who've been there, done that. Learn from near-peer mentors. Get real insights from those who've been there, done that. Learn from near-peer mentors. Get real insights from those who've been there, done that.
              </span>
            </div>
          </div>

          {/* Video Card */}
          <Card className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-card/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-8 h-8 text-primary-foreground fill-current" />
                </div>
                <p className="text-lg font-semibold">Watch our story</p>
                <p className="text-muted-foreground">See how we're changing education</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}