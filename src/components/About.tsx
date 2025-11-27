import { Leaf, Heart, Sprout, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const values = [
    {
      icon: Leaf,
      title: "Natural",
      description: "Ingredientes 100% naturales y orgánicos seleccionados cuidadosamente",
    },
    {
      icon: Sprout,
      title: "Sostenible",
      description: "Comprometidos con el medio ambiente y prácticas responsables",
    },
    {
      icon: Heart,
      title: "Saludable",
      description: "Nutrición consciente que cuida tu cuerpo y bienestar",
    },
    {
      icon: Award,
      title: "Calidad",
      description: "Excelencia en cada plato, desde la selección hasta la presentación",
    },
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="about" 
      className="py-24 bg-gradient-to-b from-card to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground">
              Sobre Nosotros
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Más que un restaurante, somos una comunidad dedicada a promover un estilo de vida saludable y consciente a través de la mejor comida vegetariana
            </p>
          </div>

          {/* Story with image split */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-3xl font-serif font-bold mb-4 text-foreground">Nuestra Historia</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  En <span className="font-semibold text-primary">Veggie Life</span> creemos que la alimentación es la base de una vida plena y saludable. Desde nuestros inicios en 2020, nos hemos dedicado a crear experiencias culinarias que no solo nutren el cuerpo, sino que también inspiran un cambio positivo.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  Cada plato es una obra de arte creada con pasión, utilizando únicamente ingredientes frescos, de temporada y provenientes de productores locales que comparten nuestra visión de un mundo más sostenible.
                </p>
                <p className="text-foreground leading-relaxed">
                  Hoy servimos a cientos de clientes cada semana, siendo reconocidos como uno de los mejores restaurantes vegetarianos de la ciudad.
                </p>
              </div>
            </div>

            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 rounded-2xl p-6 text-center hover:bg-primary/20 transition-colors">
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Años de Experiencia</div>
                </div>
                <div className="bg-accent/20 rounded-2xl p-6 text-center hover:bg-accent/30 transition-colors">
                  <div className="text-4xl font-bold text-accent-foreground mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Platos en Menú</div>
                </div>
                <div className="bg-accent/20 rounded-2xl p-6 text-center hover:bg-accent/30 transition-colors">
                  <div className="text-4xl font-bold text-accent-foreground mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Ingredientes Locales</div>
                </div>
                <div className="bg-primary/10 rounded-2xl p-6 text-center hover:bg-primary/20 transition-colors">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Clientes Felices</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h3 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">Nuestros Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-card hover:bg-accent/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group border border-border hover:border-primary/50"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
