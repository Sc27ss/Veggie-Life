import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/573122644682"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Ripple waves */}
      <div className="absolute inset-0 -z-10">
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" style={{ animationDuration: '2s' }}></span>
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></span>
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 animate-ping" style={{ animationDuration: '2s', animationDelay: '1s' }}></span>
      </div>
      
      {/* Button */}
      <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300">
        <MessageCircle className="h-8 w-8" />
      </div>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
        ¡Chatea con nosotros!
      </span>
    </a>
  );
};

export default WhatsAppButton;
