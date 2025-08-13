import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { UniversityLogos } from "@/components/UniversityLogos";
import { ValueProposition } from "@/components/ValueProposition";
import { VideoSection } from "@/components/VideoSection";
import { MentorShowcase } from "@/components/MentorShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <UniversityLogos />
      <ValueProposition />
      <VideoSection />
      <MentorShowcase />
    </div>
  );
};

export default Index;
