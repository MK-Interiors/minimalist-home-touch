import { Home, Palette, Lightbulb, Sofa, Building, Wrench, ShieldCheck } from "lucide-react";

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
      icon: <Building size={32} />,
      title: "Commercial Interiors",
      description: "Transform your business spaces with stylish, efficient, and brand-focused commercial interior solutions."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Design Consultation",
      description: "Expert advice on color schemes, furniture selection, and design concepts."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Home Inspection",
      description: "Thorough home inspection services to ensure safety, quality, and peace of mind for your living space."
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
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden cursor-pointer transform-gpu hover:-translate-y-2 hover:scale-105 hover:-rotate-1 duration-500"
            >
              {/* Animated background accent */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-amber-100 via-amber-50 to-white z-0 scale-110 group-hover:scale-100"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-amber-500 mb-4 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
