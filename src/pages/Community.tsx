import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Users, Calendar, Award, ArrowRight } from "lucide-react";

const Community = () => {
  const communityStats = [
    { number: "5,000+", label: "Active Members" },
    { number: "30+", label: "Countries" },
    { number: "500+", label: "Weekly Messages" },
    { number: "50+", label: "Events per Month" }
  ];

  const channels = [
    {
      name: "🎓 College Applications",
      description: "Get help with essays, interviews, and application strategy",
      members: "2,347"
    },
    {
      name: "💻 Tech & AI",
      description: "Discuss programming, AI tools, and tech careers",
      members: "1,892"
    },
    {
      name: "🚀 Entrepreneurship",
      description: "Share startup ideas and get feedback from founders",
      members: "1,234"
    },
    {
      name: "🎨 Creative Projects",
      description: "Music, art, writing, and other creative endeavors",
      members: "987"
    },
    {
      name: "📚 Study Groups",
      description: "Find study partners and academic support",
      members: "2,156"
    },
    {
      name: "🌟 Success Stories",
      description: "Celebrate wins and share achievements",
      members: "3,421"
    }
  ];

  const upcomingEvents = [
    {
      title: "Harvard Admissions AMA",
      date: "Dec 15, 2024",
      time: "7:00 PM EST",
      host: "Sydney Wiredu",
      participants: "234 registered"
    },
    {
      title: "Building Your First Startup",
      date: "Dec 18, 2024", 
      time: "6:00 PM EST",
      host: "Shreyans Jain",
      participants: "156 registered"
    },
    {
      title: "AI Tools for Students",
      date: "Dec 20, 2024",
      time: "8:00 PM EST", 
      host: "Karthik Reddy",
      participants: "289 registered"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">GROWING COMMUNITY</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Connect with like-minded students, share your journey, and get support from peers 
            who understand your challenges and celebrate your wins.
          </p>
          <Button variant="cta" size="lg" className="text-lg px-8 py-4">
            Join Community
          </Button>
        </div>

        {/* Community Stats */}
        <section className="mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* Community Channels */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Channels</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channels.map((channel, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold">{channel.name}</h3>
                  <MessageCircle className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground mb-4">{channel.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {channel.members} members
                  </span>
                  <Button variant="ghost" size="sm">
                    Join <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {event.date} at {event.time}
                      </span>
                      <span>Hosted by {event.host}</span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {event.participants}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline">
                    Register
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Community Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Award className="w-6 h-6 mr-2 text-primary" />
                Be Supportive
              </h3>
              <p className="text-muted-foreground">
                Help each other succeed. Share resources, offer encouragement, and celebrate achievements together.
              </p>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MessageCircle className="w-6 h-6 mr-2 text-primary" />
                Stay Respectful
              </h3>
              <p className="text-muted-foreground">
                Treat everyone with respect. We welcome diverse perspectives and encourage constructive discussions.
              </p>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of ambitious students from around the world who are supporting each other's journey to success.
          </p>
          <Button variant="cta" size="lg" className="text-lg px-8 py-4">
            Join Community Now
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Community;