import { Heart, Star, Baby } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-baby py-12 text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Baby size={32} className="animate-bounce-gentle" />
            <h3 className="text-2xl font-bold">Emma's World</h3>
          </div>

          {/* Decorative elements */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Star size={16} className="animate-float" />
            <Heart size={20} className="animate-bounce-gentle" style={{ animationDelay: '0.5s' }} />
            <Star size={16} className="animate-float" style={{ animationDelay: '1s' }} />
          </div>

          {/* Message */}
          <div className="max-w-md mx-auto space-y-4">
            <p className="text-lg font-medium">
              "Every day with Emma is a gift filled with wonder, laughter, and endless love."
            </p>
            <p className="text-sm opacity-90">
              This website is lovingly maintained by Emma's family to capture and share 
              the precious moments of her journey.
            </p>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-sm opacity-75">
              Made with <Heart size={14} className="inline mx-1 animate-pulse" /> for Emma Rose Thompson
            </p>
            <p className="text-xs opacity-60 mt-2">
              © 2024 Emma's Family. All memories are treasured.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;