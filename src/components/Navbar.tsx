
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">DesignSpace</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('hero')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 w-full text-left">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 w-full text-left">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 w-full text-left">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 w-full text-left">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base font-medium bg-gray-900 text-white rounded-lg mx-3 text-center">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
