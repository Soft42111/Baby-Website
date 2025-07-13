import Hero from "@/components/Hero";
import About from "@/components/About";
import PhotoGallery from "@/components/PhotoGallery";
import Milestones from "@/components/Milestones";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <PhotoGallery />
      <Milestones />
      <Footer />
    </div>
  );
};

export default Index;
