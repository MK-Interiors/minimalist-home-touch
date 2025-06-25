
import { Home, Palette, Lightbulb, Sofa, Building, Wrench } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Home size={32} />,
      title: "Complete Home Interiors",
      description: "Full-service interior design for your entire home, from concept to completion."
    },
    {
      icon: <Palette size={32} />,
      title: "Space Planning",
      description: "Optimal layout design to maximize functionality and flow in your space."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Design Consultation",
      description: "Expert advice on color schemes, furniture selection, and design concepts."
    },
    {
      icon: <Sofa size={32} />,
      title: "Furniture Selection",
      description: "Curated furniture pieces that perfectly complement your style and space."
    },
    {
      icon: <Building size={32} />,
      title: "Modular Kitchens",
      description: "Modern, functional kitchen designs with premium materials and finishes."
    },
    {
      icon: <Wrench size={32} />,
      title: "Renovation Services",
      description: "Complete renovation and remodeling services for existing spaces."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Design Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to completion, we offer comprehensive interior design solutions tailored to your unique style and needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
