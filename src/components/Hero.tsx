import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-veggie.jpg";

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    menuSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToReservations = () => {
    const reservationsSection = document.getElementById("reservations");
    reservationsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/70 to-primary/40" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-accent/30 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-bounce" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/30 backdrop-blur-sm rounded-full mb-6 animate-fade-in border border-accent-foreground/20">
            <Sparkles className="h-4 w-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">100% Natural & Orgánico</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-primary-foreground animate-slide-in-right">
            Veggie Life
          </h1>
          
          <div className="relative mb-8">
            <p className="text-3xl md:text-5xl mb-2 text-accent-foreground font-light animate-fade-in">
              Donde la <span className="text-primary font-semibold">salud</span>
            </p>
            <p className="text-3xl md:text-5xl text-accent-foreground font-light animate-fade-in delay-200">
              se encuentra con el <span className="text-primary font-semibold">sabor</span>
            </p>
          </div>

          <p className="text-lg md:text-xl mb-10 text-muted max-w-3xl mx-auto animate-fade-in delay-300 leading-relaxed">
            Experimenta una revolución culinaria vegetariana. Cada plato es una obra maestra elaborada 
            con ingredientes frescos, locales y llenos de vida que despiertan tus sentidos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground group transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg px-8 py-6"
              onClick={scrollToMenu}
            >
              Explorar Menú
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-accent-foreground bg-accent/60 backdrop-blur-sm hover:bg-accent hover:border-primary transition-all duration-300 transform hover:scale-105 shadow-xl text-lg px-8 py-6"
              onClick={scrollToReservations}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Reservar Mesa
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto animate-fade-in delay-700">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50 hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Clientes Felices</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50 hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Ingredientes Naturales</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50 hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold text-primary mb-1">5★</div>
              <div className="text-sm text-muted-foreground">Calificación</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-accent-foreground/80">
          <div className="w-6 h-10 border-2 border-accent-foreground/60 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-accent-foreground/60 rounded-full animate-pulse" />
          </div>
          <span className="text-xs font-medium">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
