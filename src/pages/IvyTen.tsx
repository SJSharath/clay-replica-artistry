import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, Target } from "lucide-react";

const IvyTen = () => {
  const ivySchools = [
    { name: "Harvard University", acceptance: "3.4%", mentors: 8 },
    { name: "Princeton University", acceptance: "4.4%", mentors: 6 },
    { name: "Yale University", acceptance: "4.6%", mentors: 7 },
    { name: "Columbia University", acceptance: "5.1%", mentors: 5 },
    { name: "Stanford University", acceptance: "3.9%", mentors: 9 },
    { name: "University of Pennsylvania", acceptance: "5.9%", mentors: 4 },
    { name: "Cornell University", acceptance: "10.6%", mentors: 6 },
    { name: "Dartmouth College", acceptance: "6.2%", mentors: 3 },
    { name: "Brown University", acceptance: "5.5%", mentors: 4 },
    { name: "MIT", acceptance: "4.1%", mentors: 12 }
  ];

  const features = [
    {
      icon: Target,
      title: "Personalized Strategy",
      description: "Custom application strategy tailored to your target Ivy League schools"
    },
    {
      icon: Users,
      title: "Peer Network",
      description: "Connect with other high-achieving students targeting top universities"
    },
    {
      icon: Award,
      title: "Success Guarantee",
      description: "90% of our Ivy 10 students get accepted to at least one target school"
    },
    {
      icon: CheckCircle,
      title: "Complete Support",
      description: "From essays to interviews, we cover every aspect of your application"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">EXCLUSIVE PROGRAM</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ivy 10
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Elite mentorship program for students targeting the top 10 most competitive universities in the world. 
            Get personalized guidance from mentors who've been accepted to these prestigious institutions.
          </p>
          <Button variant="cta" size="lg" className="text-lg px-8 py-4">
            Apply to Ivy 10
          </Button>
        </div>

        {/* Program Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Ivy 10?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Target Schools */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Target Schools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ivySchools.map((school, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold">{school.name}</h3>
                  <Badge variant="outline">{school.acceptance}</Badge>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Available Mentors: {school.mentors}</span>
                  <span>Acceptance Rate</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Program Structure */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Program Structure</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Application Review</h3>
              <p className="text-muted-foreground">
                Comprehensive review of your current profile and identification of improvement areas
              </p>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Mentor Matching</h3>
              <p className="text-muted-foreground">
                Paired with 2-3 mentors from your target schools for specialized guidance
              </p>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Application Execution</h3>
              <p className="text-muted-foreground">
                6-month intensive program covering essays, interviews, and application strategy
              </p>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-muted/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Ivy 10?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Applications are reviewed on a rolling basis. Only 50 students are accepted per cohort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" className="text-lg px-8 py-4">
              Apply Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Schedule Info Session
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default IvyTen;