import { MentorCard } from "./MentorCard";
import chandanImage from "@/assets/mentor-chandan.jpg";
import dyumnaImage from "@/assets/mentor-dyumna.jpg";
import markImage from "@/assets/mentor-mark.jpg";
import hafsaImage from "@/assets/mentor-hafsa.jpg";
import karthikImage from "@/assets/mentor-karthik.jpg";
import shreyansImage from "@/assets/mentor-shreyans.jpg";

export function FloatingMentorCards() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Left side cards */}
      <div className="absolute left-4 top-1/4 animate-float">
        <MentorCard
          name="Chandan"
          description="people get into podcasting"
          image={chandanImage}
          color="yellow"
          className="w-48"
        />
      </div>
      
      <div className="absolute left-8 top-1/2 animate-float-delayed">
        <MentorCard
          name="Dyumna"
          description="you build your personal brand!"
          image={dyumnaImage}
          color="blue"
          className="w-48"
        />
      </div>

      <div className="absolute left-12 bottom-1/4 animate-float">
        <MentorCard
          name="Mark"
          description="you produce your song!"
          image={markImage}
          color="pink"
          className="w-48"
        />
      </div>

      {/* Right side cards */}
      <div className="absolute right-4 top-1/3 animate-float-delayed">
        <MentorCard
          name="Hafsa"
          description="you apply to Princeton"
          image={hafsaImage}
          color="pink"
          className="w-48"
        />
      </div>

      <div className="absolute right-8 top-1/2 animate-float">
        <MentorCard
          name="Karthik"
          description="you build AI tools"
          image={karthikImage}
          color="blue"
          className="w-48"
        />
      </div>

      <div className="absolute right-12 bottom-1/3 animate-float-delayed">
        <MentorCard
          name="Shreyans"
          description="you build your startup"
          image={shreyansImage}
          color="yellow"
          className="w-48"
        />
      </div>
    </div>
  );
}