import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-baby.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-soft flex items-center justify-center overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 text-primary/20 animate-float">
        <Heart size={40} />
      </div>
      <div className="absolute top-40 right-32 text-secondary/20 animate-bounce-gentle" style={{ animationDelay: '1s' }}>
        <Star size={32} />
      </div>
      <div className="absolute bottom-40 left-40 text-accent/20 animate-float" style={{ animationDelay: '2s' }}>
        <Heart size={28} />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              Little
              <span className="bg-gradient-baby bg-clip-text text-transparent block">
                Emma
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Welcome to Emma's magical world! Follow along as we capture every precious moment, 
              milestone, and adventure of our little sunshine.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-glow transition-all duration-300 rounded-full px-8"
            >
              View Photos
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10 rounded-full px-8"
            >
              See Milestones
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 justify-center lg:justify-start pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">8</div>
              <div className="text-sm text-muted-foreground">Months Old</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">12</div>
              <div className="text-sm text-muted-foreground">Milestones</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">∞</div>
              <div className="text-sm text-muted-foreground">Smiles</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500">
            <img 
              src={heroImage} 
              alt="Little Emma" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-success text-success-foreground px-6 py-3 rounded-full shadow-card animate-bounce-gentle">
            <span className="font-semibold">8 months of joy!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;