import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Gift, Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Newsletter = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Por favor ingresa tu email",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "¡Bienvenido a Veggie Life!",
      description: "Te enviaremos las mejores ofertas y recetas.",
    });
    setEmail("");
  };

  const benefits = [
    { icon: Gift, text: "10% de descuento en tu primera orden" },
    { icon: Bell, text: "Recetas exclusivas cada semana" },
    { icon: Mail, text: "Ofertas especiales antes que nadie" },
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 relative overflow-hidden"
    >
      {/* Animated background shapes */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`bg-gradient-to-br from-card to-accent/20 rounded-3xl p-12 shadow-2xl border-2 border-primary/20 transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
                Únete a la Familia Veggie
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Recibe recetas exclusivas, consejos de nutrición y ofertas especiales directamente en tu email
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-foreground font-medium">{benefit.text}</p>
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="flex-1 h-14 text-lg bg-background border-2 border-border focus:border-primary"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                >
                  Suscribirme
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Al suscribirte aceptas recibir emails de Veggie Life. Puedes cancelar en cualquier momento.
              </p>
            </form>

            {/* Social proof */}
            <div className="text-center mt-8 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                Únete a más de <span className="font-bold text-primary">2,500+ suscriptores</span> que ya disfrutan de nuestro contenido
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
