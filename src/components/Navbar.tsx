import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/10 shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mt-3">
        <div className="flex justify-between items-center h-14 py-2">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <img
                src="/lovable-uploads/mklogo.png"
                alt="MK Interiors"
                className="h-20 w-auto drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]"
              />
              
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-white/90 hover:text-amber-300 px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white/90 hover:text-amber-300 px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-white/90 hover:text-amber-300 px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white/90 hover:text-amber-300 px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-amber-400/90 text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-300 transition-all duration-300 shadow-lg hover:shadow-amber-200/40"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-amber-300 p-2 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-3 pt-3 pb-4 space-y-2 sm:px-4 bg-black/70 backdrop-blur-xl border-t border-white/10 shadow-2xl rounded-b-2xl">
              <button
                onClick={() => scrollToSection("hero")}
                className="block text-white/90 hover:text-amber-600 px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-white/90 hover:text-amber-600 px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block text-white/90 hover:text-amber-600 px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-white/90 hover:text-amber-600 px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block bg-amber-500 text-white px-3 py-2 rounded-lg text-base font-medium w-full text-left hover:bg-amber-600 transition-colors shadow-lg"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
