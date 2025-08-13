import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import hafsaImage from "@/assets/mentor-hafsa.jpg";
import karthikImage from "@/assets/mentor-karthik.jpg";
import shreyansImage from "@/assets/mentor-shreyans.jpg";
import dyumnaImage from "@/assets/mentor-dyumna.jpg";
import markImage from "@/assets/mentor-mark.jpg";
import chandanImage from "@/assets/mentor-chandan.jpg";
import aditiImage from "@/assets/mentor-aditi.png";
import aryamanImage from "@/assets/mentor-aryaman.png";
import sydneyImage from "@/assets/mentor-sydney.png";
import filipposImage from "@/assets/mentor-filippos.png";
import shivenImage from "@/assets/mentor-shiven.jpeg";
import anoushkaImage from "@/assets/mentor-anoushka.png";
import shlokaImage from "@/assets/mentor-shloka.png";

interface MentorProfileProps {
  name: string;
  description: string;
  image: string;
}

function MentorProfile({ name, description, image }: MentorProfileProps) {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <img 
        src={image} 
        alt={name}
        className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}

export function MentorShowcase() {
  const collegeMentors = [
    {
      name: "Aditi Gaur",
      description: "Helps you apply to Stanford",
      image: aditiImage
    },
    {
      name: "Aryaman Roongta", 
      description: "Helps you apply to Cornell",
      image: aryamanImage
    },
    {
      name: "Hafsa Sheikh",
      description: "Helps you apply to Princeton",
      image: hafsaImage
    },
    {
      name: "Sydney Wiredu",
      description: "Helps you apply to Harvard", 
      image: sydneyImage
    },
    {
      name: "Filippos Akylas Kaloudis",
      description: "Helps you apply to Imperial",
      image: filipposImage
    },
    {
      name: "Shiven Chambial",
      description: "Helps you apply to UC Berkeley",
      image: shivenImage
    },
    {
      name: "Anoushka Parmeshwaran",
      description: "Helps you apply to London School of Economics",
      image: anoushkaImage
    },
    {
      name: "Shloka Ashok",
      description: "Helps you apply to University of Southern California",
      image: shlokaImage
    }
  ];

  const passionMentors = [
    {
      name: "Karthik",
      description: "Helps you build AI tools",
      image: karthikImage
    },
    {
      name: "Shreyans",
      description: "Helps you build your startup",
      image: shreyansImage  
    },
    {
      name: "Dyumna",
      description: "Helps you build your personal brand",
      image: dyumnaImage
    },
    {
      name: "Mark",
      description: "Helps you produce your song",
      image: markImage
    },
    {
      name: "Chandan",
      description: "Helps people get into podcasting", 
      image: chandanImage
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Top mentors</h2>
          <p className="text-xl text-muted-foreground">
            Adulting 101 from people who've been there, done that.
          </p>
        </div>

        <Tabs defaultValue="college" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="college" className="text-lg py-3">College Mentors</TabsTrigger>
            <TabsTrigger value="passion" className="text-lg py-3">Passion Project Mentors</TabsTrigger>
          </TabsList>
          
          <TabsContent value="college">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {collegeMentors.map((mentor, index) => (
                <MentorProfile key={index} {...mentor} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="passion">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
              {passionMentors.map((mentor, index) => (
                <MentorProfile key={index} {...mentor} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button variant="cta" size="lg" className="text-lg px-8 py-4">
            Browse all mentors
          </Button>
        </div>
      </div>
    </section>
  );
}