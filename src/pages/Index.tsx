import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import ChefSpecial from "@/components/ChefSpecial";
import Gallery from "@/components/Gallery";
import Benefits from "@/components/Benefits";
import Reservations from "@/components/Reservations";
import Location from "@/components/Location";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <ChefSpecial />
      <Gallery />
      <Benefits />
      <Reservations />
      <Location />
      <Newsletter />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
