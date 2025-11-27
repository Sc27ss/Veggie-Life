import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import { Camera, Image as ImageIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation();

  const images = [
    { src: gallery1, alt: "Interior moderno del restaurante Veggie Life", caption: "Espacio acogedor" },
    { src: gallery2, alt: "Ingredientes frescos y naturales", caption: "Ingredientes frescos" },
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="gallery" 
      className="py-24 bg-gradient-to-br from-card via-accent/10 to-card relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Camera className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Nuestra Galería</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground">
              Un Espacio Inspirador
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre nuestro ambiente acogedor y los ingredientes que hacen especial cada plato
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer h-96 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 mb-2">
                      <ImageIcon className="h-5 w-5 text-primary-foreground" />
                      <span className="text-primary-foreground font-semibold">{image.caption}</span>
                    </div>
                    <p className="text-sm text-primary-foreground/90">{image.alt}</p>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className={`mt-16 text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
              <p className="text-lg text-foreground mb-2">
                📸 <span className="font-semibold">Síguenos en redes sociales</span> para más fotos de nuestros platos y espacio
              </p>
              <p className="text-muted-foreground">
                Etiquétanos en tus fotos con <span className="text-primary font-semibold">#VeggieLifeExperience</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
