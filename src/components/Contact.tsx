import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="contact" 
      className="py-24 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <MessageCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Estamos aquí para ti</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground">
              Contáctanos
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes alguna pregunta, sugerencia o quieres hacer una reserva? Nos encantaría escucharte
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-card rounded-2xl p-8 shadow-2xl border-2 border-border hover:border-primary/50 transition-colors">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Envíanos un mensaje</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                      Nombre Completo
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre completo"
                      className="w-full h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@email.com"
                      className="w-full h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="¿En qué podemos ayudarte?"
                      className="w-full min-h-36"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
                    size="lg"
                  >
                    Enviar Mensaje
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className={`space-y-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 hover:from-primary/15 hover:to-primary/10 transition-all border border-primary/20 shadow-lg hover:shadow-xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                      <Phone className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Teléfono</h3>
                    <a 
                      href="tel:+573122644682" 
                      className="text-lg text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      +57 312 2644682
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      Lunes a Domingo de 12:00 PM a 10:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-8 hover:from-accent/25 hover:to-accent/10 transition-all border border-accent-foreground/20 shadow-lg hover:shadow-xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-accent-foreground/20 rounded-full flex items-center justify-center">
                      <Mail className="h-7 w-7 text-accent-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Email</h3>
                    <a 
                      href="mailto:info@veggielife.com" 
                      className="text-lg text-accent-foreground hover:text-accent-foreground/80 transition-colors font-medium"
                    >
                      info@veggielife.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      Respuesta en menos de 24 horas
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 rounded-2xl p-8 hover:from-[#25D366]/15 hover:to-[#25D366]/10 transition-all border border-[#25D366]/20 shadow-lg hover:shadow-xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-[#25D366]/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-7 w-7 text-[#25D366]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">WhatsApp</h3>
                    <p className="text-muted-foreground mb-4">
                      Chatea con nosotros directamente para reservas, pedidos o cualquier consulta
                    </p>
                    <Button 
                      className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all"
                      asChild
                    >
                      <a 
                        href="https://wa.me/573122644682" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Abrir WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
