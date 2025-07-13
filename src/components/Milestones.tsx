import { Check, Star, Heart, Smile } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Milestones = () => {
  const milestones = [
    {
      id: 1,
      title: "First Smile",
      date: "April 2, 2024",
      age: "2 weeks",
      description: "Emma gave us her very first real smile, melting our hearts instantly!",
      icon: Smile,
      completed: true,
      category: "Social"
    },
    {
      id: 2,
      title: "Holding Head Up",
      date: "May 15, 2024",
      age: "2 months",
      description: "Strong neck muscles developing, Emma can now hold her head up during tummy time.",
      icon: Star,
      completed: true,
      category: "Physical"
    },
    {
      id: 3,
      title: "Rolling Over",
      date: "July 8, 2024",
      age: "4 months",
      description: "Emma rolled from tummy to back for the first time - what an achievement!",
      icon: Star,
      completed: true,
      category: "Physical"
    },
    {
      id: 4,
      title: "Sitting Up",
      date: "September 20, 2024",
      age: "6 months",
      description: "Emma can now sit up without support and play with her toys independently.",
      icon: Star,
      completed: true,
      category: "Physical"
    },
    {
      id: 5,
      title: "First Words",
      date: "Coming Soon",
      age: "8-10 months",
      description: "We're eagerly waiting for Emma's first 'mama' or 'dada'!",
      icon: Heart,
      completed: false,
      category: "Language"
    },
    {
      id: 6,
      title: "Crawling",
      date: "Coming Soon",
      age: "8-10 months",
      description: "Emma is getting ready to explore the world on her hands and knees.",
      icon: Star,
      completed: false,
      category: "Physical"
    }
  ];

  const categoryColors = {
    Social: "bg-primary/10 text-primary border-primary/20",
    Physical: "bg-secondary/10 text-secondary border-secondary/20",
    Language: "bg-accent/10 text-accent border-accent/20"
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Emma's
            <span className="bg-gradient-baby bg-clip-text text-transparent"> Milestones</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every milestone is a celebration! Follow Emma's incredible journey of growth, 
            development, and discovery as she reaches each exciting achievement.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5"></div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-background md:transform md:-translate-x-1/2 z-10 ${
                  milestone.completed ? 'bg-success' : 'bg-muted'
                }`}>
                  {milestone.completed && (
                    <Check size={8} className="text-success-foreground absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <Card className={`p-6 shadow-soft hover:shadow-card transition-all duration-300 ${
                    milestone.completed ? 'bg-gradient-card' : 'bg-card border-dashed'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${
                        milestone.completed ? 'bg-success' : 'bg-muted'
                      }`}>
                        <milestone.icon size={20} className={
                          milestone.completed ? 'text-success-foreground' : 'text-muted-foreground'
                        } />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">
                            {milestone.title}
                          </h3>
                          <Badge 
                            variant="outline"
                            className={categoryColors[milestone.category as keyof typeof categoryColors]}
                          >
                            {milestone.category}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <span>{milestone.date}</span>
                          <span>•</span>
                          <span>{milestone.age}</span>
                        </div>
                        
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Card className="p-6 text-center bg-gradient-card shadow-soft">
            <div className="text-3xl font-bold text-success mb-2">4</div>
            <div className="text-muted-foreground">Milestones Achieved</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card shadow-soft">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-muted-foreground">Coming Up Next</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card shadow-soft">
            <div className="text-3xl font-bold text-accent mb-2">8</div>
            <div className="text-muted-foreground">Months of Growth</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Milestones;