import { Calendar, Clock, MapPin, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const babyInfo = [
    {
      icon: Calendar,
      label: "Born",
      value: "March 15, 2024",
      color: "text-primary"
    },
    {
      icon: Clock,
      label: "Birth Time",
      value: "3:42 AM",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      label: "Birthplace",
      value: "City Hospital",
      color: "text-accent"
    },
    {
      icon: Heart,
      label: "Weight",
      value: "7 lbs 3 oz",
      color: "text-success"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Our Little
            <span className="bg-gradient-baby bg-clip-text text-transparent"> Star</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Emma Rose Thompson is our bundle of joy who fills every day with laughter, 
            wonder, and endless love. Here's everything you need to know about our precious little one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {babyInfo.map((info, index) => (
            <Card 
              key={info.label} 
              className="p-6 text-center bg-gradient-card border-border/50 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${info.color} mb-4 flex justify-center`}>
                <info.icon size={32} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{info.label}</h3>
              <p className="text-muted-foreground font-medium">{info.value}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 lg:p-12 bg-gradient-soft border-border/50 shadow-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Emma's Personality
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Emma is a bright and curious little soul who loves to explore the world around her. 
                She has the most infectious giggle and her eyes light up whenever she sees new toys or faces. 
                Her favorite activities include playing peek-a-boo, listening to lullabies, and snuggling with her teddy bear.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Loves peek-a-boo games</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Sleeps through the night</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Favorite food: sweet potatoes</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-8 bg-gradient-baby rounded-full mb-6">
                <Heart size={48} className="text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">
                Made with Love
              </h4>
              <p className="text-muted-foreground">
                Every day with Emma is a new adventure filled with love, laughter, and endless wonder.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;