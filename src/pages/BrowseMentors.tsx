import { Header } from "@/components/Header";
import { MentorCard } from "@/components/MentorCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";

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

const BrowseMentors = () => {
  const allMentors = [
    {
      name: "Aditi Gaur",
      description: "Helps you apply to Stanford",
      image: aditiImage,
      category: "College",
      university: "Stanford"
    },
    {
      name: "Aryaman Roongta", 
      description: "Helps you apply to Cornell",
      image: aryamanImage,
      category: "College",
      university: "Cornell"
    },
    {
      name: "Hafsa Sheikh",
      description: "Helps you apply to Princeton",
      image: hafsaImage,
      category: "College",
      university: "Princeton"
    },
    {
      name: "Sydney Wiredu",
      description: "Helps you apply to Harvard", 
      image: sydneyImage,
      category: "College",
      university: "Harvard"
    },
    {
      name: "Filippos Akylas Kaloudis",
      description: "Helps you apply to Imperial",
      image: filipposImage,
      category: "College",
      university: "Imperial"
    },
    {
      name: "Shiven Chambial",
      description: "Helps you apply to UC Berkeley",
      image: shivenImage,
      category: "College",
      university: "UC Berkeley"
    },
    {
      name: "Anoushka Parmeshwaran",
      description: "Helps you apply to London School of Economics",
      image: anoushkaImage,
      category: "College",
      university: "LSE"
    },
    {
      name: "Shloka Ashok",
      description: "Helps you apply to University of Southern California",
      image: shlokaImage,
      category: "College",
      university: "USC"
    },
    {
      name: "Karthik",
      description: "Helps you build AI tools",
      image: karthikImage,
      category: "Tech",
      specialty: "AI & Machine Learning"
    },
    {
      name: "Shreyans",
      description: "Helps you build your startup",
      image: shreyansImage,
      category: "Entrepreneurship",
      specialty: "Startup Building"
    },
    {
      name: "Dyumna",
      description: "Helps you build your personal brand",
      image: dyumnaImage,
      category: "Marketing",
      specialty: "Personal Branding"
    },
    {
      name: "Mark",
      description: "Helps you produce your song",
      image: markImage,
      category: "Music",
      specialty: "Music Production"
    },
    {
      name: "Chandan",
      description: "Helps people get into podcasting", 
      image: chandanImage,
      category: "Media",
      specialty: "Podcasting"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Browse Mentors
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect mentor to guide you through your college applications or passion projects
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search mentors by name, university, or specialty..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Category Tags */}
          <div className="flex flex-wrap gap-2">
            {["All", "College", "Tech", "Entrepreneurship", "Marketing", "Music", "Media"].map((category) => (
              <Badge 
                key={category} 
                variant={category === "All" ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allMentors.map((mentor, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img 
                src={mentor.image} 
                alt={mentor.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{mentor.name}</h3>
              <p className="text-muted-foreground mb-4">{mentor.description}</p>
              
              <div className="space-y-2 mb-4">
                <Badge variant="outline">
                  {mentor.category}
                </Badge>
                {mentor.university && (
                  <Badge variant="secondary">
                    {mentor.university}
                  </Badge>
                )}
                {mentor.specialty && (
                  <Badge variant="secondary">
                    {mentor.specialty}
                  </Badge>
                )}
              </div>

              <Button variant="cta" className="w-full">
                Book Session
              </Button>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg">
            Load More Mentors
          </Button>
        </div>
      </main>
    </div>
  );
};

export default BrowseMentors;