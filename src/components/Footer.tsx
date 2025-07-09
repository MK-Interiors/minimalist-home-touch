import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
              <div className="flex items-center mb-4 bg-white/90 rounded-lg shadow p-2 w-fit">
                <img
                  src="/lovable-uploads/mklogo.png"
                  alt="MK Interiors"
                  className="h-12 w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
                  style={{ maxWidth: "140px", minWidth: "80px" }}
                />
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Transform your space into something beautiful with MK Interiors.
              We bring elegance and sophistication to every project.
            </p>
            <div className="flex space-x-4">
              
              <a
                href="https://www.instagram.com/mkinteriors2k05?igsh=MWRuem14Ym55cDg2Zg=="
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Instagram size={30} />
              </a>
              
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
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
              <li>Home Inspection</li>
              <li>Design Consultation</li>
              <li>Commercial Interiors</li>
              <li>Renovation Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={16} className="text-amber-500 mr-3" />
                <span className="text-gray-300">+91 9493427181</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-amber-500 mr-3" />
                <span className="text-gray-300">mkinteriors2k05@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="text-amber-500 mr-3 mt-1" />
                <span className="text-gray-300">
                                      Flat No. 301, Raghava Towers

                  <br />
                   Madinaguda, Hyderabad-  500049
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 MK Interiors. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
