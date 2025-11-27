import { Facebook, Instagram, Twitter, Leaf, Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-secondary to-secondary/90 text-secondary-foreground relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-foreground to-primary"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-serif font-bold">Veggie Life</h3>
              </div>
              <p className="text-sm opacity-90 mb-6 max-w-sm leading-relaxed">
                Comida saludable que inspira. Alimentación consciente para un mejor estilo de vida.
                Porque comer bien es vivir bien.
              </p>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <Heart className="h-4 w-4 text-primary" />
                <span>Hecho con amor y vegetales frescos</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary-foreground">Enlaces Rápidos</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <button 
                    onClick={() => scrollToSection("#about")}
                    className="opacity-90 hover:opacity-100 hover:text-primary transition-all hover:translate-x-1 inline-block"
                  >
                    → Sobre Nosotros
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("#menu")}
                    className="opacity-90 hover:opacity-100 hover:text-primary transition-all hover:translate-x-1 inline-block"
                  >
                    → Nuestro Menú
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("#reservations")}
                    className="opacity-90 hover:opacity-100 hover:text-primary transition-all hover:translate-x-1 inline-block"
                  >
                    → Reservar Mesa
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("#location")}
                    className="opacity-90 hover:opacity-100 hover:text-primary transition-all hover:translate-x-1 inline-block"
                  >
                    → Ubicación
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("#contact")}
                    className="opacity-90 hover:opacity-100 hover:text-primary transition-all hover:translate-x-1 inline-block"
                  >
                    → Contacto
                  </button>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary-foreground">Síguenos</h4>
              <p className="text-sm opacity-90 mb-4">
                Únete a nuestra comunidad y mantente al día con recetas y ofertas
              </p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-secondary-foreground/20 pt-8">
            <div className="grid md:grid-cols-2 gap-4 text-center md:text-left">
              <div className="text-sm opacity-90">
                <p>© 2025 Nevada. Todos los derechos reservados.</p>
              </div>
              <div className="text-sm opacity-90 md:text-right">
                <p>
                  Página diseñada por{" "}
                  <span className="font-semibold text-primary hover:text-primary/80 transition-colors">
                    Clicka Studio
                  </span>{" "}
                  – 2025
                </p>
              </div>
            </div>
          </div>

          {/* Extra Info */}
          <div className="mt-6 text-center">
            <p className="text-xs opacity-70">
              🌱 Comprometidos con el medio ambiente | 🥗 100% Vegetariano | ♻️ Envases biodegradables
            </p>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
    </footer>
  );
};

export default Footer;
