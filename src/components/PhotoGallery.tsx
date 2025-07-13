import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import milestonesImage from "@/assets/baby-milestones.jpg";
import playingImage from "@/assets/baby-playing.jpg";
import sleepingImage from "@/assets/baby-sleeping.jpg";
import heroImage from "@/assets/hero-baby.jpg";

const PhotoGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const photos = [
    {
      id: 1,
      src: heroImage,
      alt: "Emma's bright smile",
      category: "portraits",
      title: "That Sweet Smile"
    },
    {
      id: 2,
      src: milestonesImage,
      alt: "Emma's milestones",
      category: "milestones",
      title: "Growing Strong"
    },
    {
      id: 3,
      src: playingImage,
      alt: "Emma playing with toys",
      category: "playing",
      title: "Playtime Fun"
    },
    {
      id: 4,
      src: sleepingImage,
      alt: "Emma sleeping peacefully",
      category: "sleeping",
      title: "Sweet Dreams"
    }
  ];

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "portraits", label: "Portraits" },
    { id: "milestones", label: "Milestones" },
    { id: "playing", label: "Playing" },
    { id: "sleeping", label: "Sleeping" }
  ];

  const filteredPhotos = activeCategory === "all" 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Photo
            <span className="bg-gradient-baby bg-clip-text text-transparent"> Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capturing every precious moment of Emma's journey. From first smiles to sleepy cuddles, 
            these memories are treasures we'll cherish forever.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-6 transition-all duration-300 ${
                activeCategory === category.id 
                  ? "bg-primary hover:bg-primary/90 shadow-soft" 
                  : "border-primary/30 text-primary hover:bg-primary/10"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <Card 
              key={photo.id}
              className="group overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/10 rounded-full px-8"
          >
            Load More Photos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;