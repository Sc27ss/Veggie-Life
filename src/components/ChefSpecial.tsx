import { Star, ChefHat, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ChefSpecial = () => {
  const { ref, isVisible } = useScrollAnimation();

  const specials = [
    {
      name: "Bowl de Quinoa y Dragon Fruit",
      description: "Nuestra creación más popular: quinoa orgánica, dragon fruit fresco, aguacate, edamame y salsa de maracuyá",
      price: "$38.000",
      badge: "Nuevo",
      rating: 5,
    },
    {
      name: "Lasagna Vegetariana Premium",
      description: "Capas de pasta fresca, espinacas, ricotta vegetal, tomates confitados y salsa de albahaca casera",
      price: "$42.000",
      badge: "Chef's Pick",
      rating: 5,
    },
    {
      name: "Sushi Roll Veggie Fusion",
      description: "Arroz integral, aguacate, pepino, mango, envuelto en alga nori con salsa de ajonjolí y wasabi",
      price: "$45.000",
      badge: "Premium",
      rating: 5,
    },
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-gradient-to-b from-secondary/5 to-card relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <ChefHat className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Selección del Chef</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground">
              Especiales del Mes
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creaciones únicas y limitadas diseñadas por nuestro chef con ingredientes de temporada
            </p>
          </div>

          {/* Specials Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {specials.map((special, index) => (
              <div
                key={index}
                className={`group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-primary ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-lg">
                    {special.badge}
                  </span>
                </div>

                {/* Image placeholder with gradient */}
                <div className="h-48 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center relative overflow-hidden">
                  <ChefHat className="h-20 w-20 text-primary/40 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                <div className="p-6">
                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(special.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {special.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {special.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{special.price}</span>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Ordenar
                    </Button>
                  </div>
                </div>

                {/* Trending indicator */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1 text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3" />
                  <span>Muy popular</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className={`text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
              <p className="text-lg text-foreground mb-4">
                ¿Quieres probar algo nuevo? Nuestro chef crea platos especiales cada semana
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl"
              >
                Ver Menú Completo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefSpecial;
