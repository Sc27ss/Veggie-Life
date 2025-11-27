import { Card, CardContent } from "@/components/ui/card";
import { Flame, Leaf as LeafIcon } from "lucide-react";
import burgerImg from "@/assets/menu-burger.jpg";
import bowlImg from "@/assets/menu-bowl.jpg";
import tacosImg from "@/assets/menu-tacos.jpg";
import pastaImg from "@/assets/menu-pasta.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Menu = () => {
  const { ref, isVisible } = useScrollAnimation();

  const dishes = [
    {
      name: "Veggie Burger Deluxe",
      description: "Hamburguesa gourmet con patty vegetal, aguacate fresco, vegetales crujientes y salsa especial de la casa",
      price: "$28.000",
      image: burgerImg,
      popular: true,
      spicy: false,
    },
    {
      name: "Buddha Bowl Energético",
      description: "Bowl completo con quinoa, garbanzos especiados, vegetales asados, aguacate y tahini casero",
      price: "$32.000",
      image: bowlImg,
      popular: true,
      spicy: false,
    },
    {
      name: "Tacos Vegetarianos",
      description: "Tacos frescos con vegetales a la parrilla, guacamole artesanal, cilantro y toque picante",
      price: "$26.000",
      image: tacosImg,
      popular: false,
      spicy: true,
    },
    {
      name: "Pasta Mediterránea",
      description: "Pasta fresca con tomates cherry, albahaca, aceite de oliva premium y parmesano vegetal",
      price: "$30.000",
      image: pastaImg,
      popular: false,
      spicy: false,
    },
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="menu" 
      className="py-24 bg-gradient-to-b from-background via-accent/5 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <LeafIcon className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">100% Vegetariano</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground">
              Nuestro Menú
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Platos cuidadosamente elaborados con los mejores ingredientes vegetales, frescos y llenos de sabor
            </p>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dishes.map((dish, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden border-2 border-border hover:border-primary transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group bg-card ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {dish.popular && (
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-lg">
                        Popular
                      </span>
                    )}
                    {dish.spicy && (
                      <span className="px-3 py-1 bg-destructive text-destructive-foreground text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                        <Flame className="h-3 w-3" />
                        Picante
                      </span>
                    )}
                  </div>
                </div>
                <CardContent className="p-6 bg-card">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {dish.name}
                    </h3>
                    <span className="text-2xl font-bold text-primary whitespace-nowrap ml-4">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{dish.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className={`text-center mt-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-accent/20 rounded-2xl p-8 border border-accent-foreground/20">
              <p className="text-lg text-foreground mb-2">
                <span className="font-semibold">¿Tienes alguna alergia o preferencia alimenticia?</span>
              </p>
              <p className="text-muted-foreground">
                Nuestro equipo estará encantado de adaptar cualquier plato a tus necesidades
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
