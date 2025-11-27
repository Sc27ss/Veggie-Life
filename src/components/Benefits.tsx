import { Brain, Zap, Shield, Smile, TrendingUp, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Benefits = () => {
  const { ref, isVisible } = useScrollAnimation();

  const benefits = [
    {
      icon: Brain,
      title: "Mejora tu concentración",
      description: "Alimentos ricos en nutrientes que potencian tu función cognitiva y claridad mental",
    },
    {
      icon: Zap,
      title: "Energía natural",
      description: "Más vitalidad sostenida sin picos de azúcar ni caídas de energía durante el día",
    },
    {
      icon: Shield,
      title: "Sistema inmune fuerte",
      description: "Vitaminas y antioxidantes naturales que fortalecen tus defensas",
    },
    {
      icon: Smile,
      title: "Bienestar integral",
      description: "Alimentación consciente para un cuerpo y mente en perfecto equilibrio",
    },
    {
      icon: Heart,
      title: "Salud cardiovascular",
      description: "Reduce el colesterol y mejora la circulación con grasas saludables",
    },
    {
      icon: TrendingUp,
      title: "Mejor digestión",
      description: "Alta en fibra para un sistema digestivo más eficiente y saludable",
    },
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="benefits" 
      className="py-24 bg-gradient-to-br from-background via-primary/5 to-accent/10 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Vida Saludable</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground">
              Beneficios del Estilo Vegetariano
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Una alimentación basada en plantas trae múltiples beneficios científicamente comprobados para tu salud física y mental
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group border-2 border-transparent hover:border-primary ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all group-hover:scale-110">
                  <benefit.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-12 border-2 border-primary/20 shadow-xl">
              <h3 className="text-3xl font-serif font-bold text-center mb-4 text-foreground">
                ¿Sabías que...?
              </h3>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                Estudios científicos demuestran los increíbles beneficios de una dieta vegetariana
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-card rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold text-primary mb-3">25%</div>
                  <p className="text-sm text-muted-foreground font-medium">
                    Reducción en riesgo de enfermedades cardíacas
                  </p>
                </div>
                <div className="text-center p-6 bg-card rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold text-primary mb-3">30%</div>
                  <p className="text-sm text-muted-foreground font-medium">
                    Menos calorías sin sacrificar nutrientes esenciales
                  </p>
                </div>
                <div className="text-center p-6 bg-card rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold text-primary mb-3">50%</div>
                  <p className="text-sm text-muted-foreground font-medium">
                    Más fibra para una mejor digestión y salud intestinal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
