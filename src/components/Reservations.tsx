import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Users, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Reservations = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "¡Reserva Confirmada!",
      description: "Te enviaremos un correo de confirmación pronto.",
    });

    setFormData({ name: "", email: "", phone: "", date: "", time: "", guests: "2" });
  };

  const timeSlots = ["12:00", "13:00", "14:00", "19:00", "20:00", "21:00"];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="reservations" 
      className="py-24 bg-gradient-to-br from-accent/10 via-background to-accent/5 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Reserva tu experiencia</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground">
              Reserva tu Mesa
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Asegura tu lugar en la mejor experiencia vegetariana de la ciudad
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-card rounded-2xl p-8 shadow-2xl border border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Nombre Completo *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Juan Pérez"
                      className="w-full h-12"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="juan@email.com"
                        className="w-full h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">
                        Teléfono *
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+57 300 123 4567"
                        className="w-full h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">
                        Fecha *
                      </label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">
                        Número de Personas
                      </label>
                      <Input
                        type="number"
                        min="1"
                        max="12"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3 text-foreground">
                      Hora Preferida *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({ ...formData, time })}
                          className={`py-3 px-4 rounded-lg border-2 transition-all ${
                            formData.time === time
                              ? "border-primary bg-primary text-primary-foreground shadow-lg scale-105"
                              : "border-border hover:border-primary/50 hover:bg-accent/50"
                          }`}
                        >
                          <Clock className="h-4 w-4 mx-auto mb-1" />
                          <span className="text-sm font-medium">{time}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
                  >
                    Confirmar Reserva
                    <CheckCircle2 className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Info Cards */}
            <div className={`space-y-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Reserva Anticipada</h3>
                    <p className="text-muted-foreground">
                      Te recomendamos reservar con al menos 24 horas de anticipación, especialmente 
                      para fines de semana y eventos especiales.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-8 border border-accent-foreground/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Grupos Grandes</h3>
                    <p className="text-muted-foreground">
                      ¿Reserva para más de 8 personas? Contáctanos directamente por WhatsApp 
                      para ofrecerte una atención personalizada.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Horarios Especiales</h3>
                    <p className="text-muted-foreground mb-3">
                      Ofrecemos horarios especiales para eventos privados, cumpleaños y celebraciones.
                    </p>
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Consultar Disponibilidad
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

export default Reservations;
