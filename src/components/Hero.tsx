import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/lovable-uploads/Hero-bg.webp')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/70" />

      {/* Ambient Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-[#d4af37]/10 blur-3xl rounded-full" />
      </div>

      {/* Content */}
      <div
        id="hero"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto lg:-mt-20"
      >
        {/* Logo */}
        <img
          src="/lovable-uploads/mklogo.png"
          alt="MK Interiors"
          className="h-32 sm:h-36 lg:h-40 mx-auto mb-2"
        />

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.04em] leading-[1.05] text-white">
          Transforming Spaces,
          <span className="text-amber-400"> Elevating Lives</span>
        </h1>

        {/* Subtext */}
        <p className="text-[17px] sm:text-xl text-white/80 leading-[1.8] mt-7 mb-10 max-w-2xl mx-auto">
          Modern, Functional & Elegant Interiors Tailored to Your Lifestyle
        </p>

        {/* Button */}
        <button
          onClick={scrollToContact}
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#e6c36a] via-[#c9972b]to-[#c9972b] hover:brightness-110 text-black font-semibold px-9 py-4 rounded-[18px] transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.28)] hover:shadow-[0_18px_40px_rgba(212,175,55,0.38)]"
        >
          <>
            Book Free Consultation
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        </button>
      </div>
    </section>
  );
};