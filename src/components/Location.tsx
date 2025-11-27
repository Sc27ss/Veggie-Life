import { MapPin, Clock, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Location = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="location" 
      className="py-24 bg-gradient-to-b from-card via-background to-card relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Encuéntranos</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground">
              Ubicación y Horarios
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Te esperamos en el corazón de la ciudad para brindarte la mejor experiencia vegetariana
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div className={`bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 hover:from-primary/15 hover:to-primary/10 transition-all duration-300 border border-primary/20 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                      <MapPin className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">Nuestra Dirección</h3>
                    <p className="text-muted-foreground text-lg mb-4">
                      Carrera 15 #85-23<br />
                      Bogotá, Colombia
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Zona de Chapinero, cerca del Parque de la 93
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className={`bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-8 hover:from-accent/25 hover:to-accent/10 transition-all duration-300 border border-accent-foreground/20 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`} style={{ transitionDelay: '100ms' }}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-accent-foreground/20 rounded-full flex items-center justify-center">
                      <Clock className="h-7 w-7 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">Horarios de Atención</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                        <span className="font-medium">Lunes a Viernes</span>
                        <span className="font-semibold text-foreground">12:00 PM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                        <span className="font-medium">Sábados</span>
                        <span className="font-semibold text-foreground">11:00 AM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                        <span className="font-medium">Domingos</span>
                        <span className="font-semibold text-foreground">11:00 AM - 9:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className={`bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`} style={{ transitionDelay: '200ms' }}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">Contáctanos</h3>
                    <a 
                      href="tel:+573122644682" 
                      className="text-lg text-primary hover:text-primary/80 transition-colors font-medium block mb-4"
                    >
                      +57 312 2644682
                    </a>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 shadow-lg"
                      asChild
                    >
                      <a 
                        href="https://maps.google.com/?q=Carrera+15+85-23+Bogota+Colombia" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Navigation className="mr-2 h-5 w-5" />
                        ¿Cómo llegar?
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className={`rounded-2xl overflow-hidden shadow-2xl h-full min-h-[500px] lg:min-h-0 border-2 border-border transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6179087445937!2d-74.05537548573698!3d4.669855896625846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b0b0b0b0b0b%3A0x0!2zNMKwNDAnMTEuNSJOIDc0wrAwMycxOS4zIlc!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Veggie Life"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
