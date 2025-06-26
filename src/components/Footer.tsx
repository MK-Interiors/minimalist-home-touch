
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              {/* Logo for Footer */}
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/9802d09d-4afb-4559-a154-f3a55a4d8ef6.png" 
                  alt="MK Interiors" 
                  className="h-12 w-auto"
                />
                <div className="ml-3">
                  <div className="text-lg font-bold text-white">MK INTERIORS</div>
                  <div className="text-xs text-gray-400 font-medium">Interior Design Studio</div>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Transform your space into something beautiful with MK Interiors. We bring elegance and sophistication to every project.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Complete Home Interiors</li>
              <li>Space Planning</li>
              <li>Design Consultation</li>
              <li>Modular Kitchens</li>
              <li>Renovation Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={16} className="text-amber-500 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-amber-500 mr-3" />
                <span className="text-gray-300">hello@mkinteriors.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="text-amber-500 mr-3 mt-1" />
                <span className="text-gray-300">123 Design Street<br />Creative City, CC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 MK Interiors. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
