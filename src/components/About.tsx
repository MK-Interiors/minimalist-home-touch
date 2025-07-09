
import { Award, Users, Clock, Star } from "lucide-react";

export const About = () => {
  const stats = [
    {
      icon: <Users size={24} />,
      number: "500+",
      label: "Happy Clients"
    },
    {
      icon: <Award size={24} />,
      number: "5+",
      label: "Design Awards"
    },
    {
      icon: <Clock size={24} />,
      number: "19",
      label: "Years Experience"
    },
    {
      icon: <Star size={24} />,
      number: "4.9",
      label: "Client Rating"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Creating Beautiful Spaces Since 2005
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              DesignSpace is a premier interior design company dedicated to transforming homes into beautiful, functional spaces. Our team of experienced designers combines creativity with practicality to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that great design should be accessible to everyone. That's why we offer personalized solutions that fit your budget and lifestyle, ensuring your space reflects your unique personality and needs.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-amber-500 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Interior Design Team"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold text-gray-900 mb-1">Design Excellence</div>
              <div className="text-gray-600">Award-winning interior design</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
