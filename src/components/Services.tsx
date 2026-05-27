import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Lightbulb,
  Sofa,
  Building,
  Wrench,
  ShieldCheck,
  Layout,
  Lamp,
  X,
} from "lucide-react";

export const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      icon: <Home size={26} strokeWidth={2} />,
      title: "Complete Home Interiors",
      description: "Tailored interior solutions for modern homes.",
      video: "/services-clips/homie.mp4",
      cover: "/services-clips/home.png",
    },
    {
      icon: <Layout size={26} strokeWidth={2} />,
      title: "Space Planning",
      description: "Layouts crafted for comfort and flow.",
      video: "/services-clips/spaceplanning.mp4",
      cover: "/services-clips/spaceplanning.jpeg",
    },
    {
      icon: <Building size={26} strokeWidth={2} />,
      title: "Commercial Interiors",
      description: "Refined workspaces built for productivity.",
      video: "/services-clips/commercial.mp4",
      cover: "/services-clips/commercial.jpeg",
    },
    {
      icon: <Lightbulb size={26} strokeWidth={2} />,
      title: "Design Consultation",
      description: "Creative guidance for timeless interiors.",
      video: "/services-clips/design.mp4",
      cover: "/services-clips/design.jpeg",
    },
    {
      icon: <Sofa size={26} strokeWidth={2} />,
      title: "Furniture Selection",
      description: "Furniture curated with comfort and elegance.",
      video: "/services-clips/furniture.mp4",
      cover: "/services-clips/furniture.jpeg",
    },
    {
      icon: <Lamp size={26} strokeWidth={2} />,
      title: "Curtains & Blinds",
      description: "Window styling crafted for refined interiors.",
      video: "/services-clips/curtains.mp4",
      cover: "/services-clips/curtains.jpeg",
    },
    {
      icon: <ShieldCheck size={26} strokeWidth={2} />,
      title: "Home Inspection",
      description: "Detailed inspections for quality assurance.",
      video: "/services-clips/inspection.mp4",
      cover: "/services-clips/inspection.jpeg",
    },
    {
      icon: <Wrench size={26} strokeWidth={2} />,
      title: "Renovation Services",
      description: "Complete renovation and remodeling solutions.",
      video: "/services-clips/renovation.mp4",
      cover: "/services-clips/renovation.jpeg",
    },
  ];

  const featuredServices = services.filter(
    (service) =>
      service.title === "Complete Home Interiors" ||
      service.title === "Commercial Interiors" ||
      service.title === "Furniture Selection"
  );

  const secondaryServices = services.filter(
    (service) =>
      service.title !== "Complete Home Interiors" &&
      service.title !== "Commercial Interiors" &&
      service.title !== "Furniture Selection"
  );

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-[#f8f4ee] via-[#f3ece2] to-[#ebe1d2]"
    >
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-[-0.035em] text-[#1f1a17] mb-5">
            Crafted Services
          </h2>
          <div className="w-20 h-[2px] mx-auto rounded-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-6 opacity-80" />
          <p className="text-[20px] sm:text-lg text-[#5f5a54] leading-[1.9] max-w-2xl mx-auto">
            Modern, functional, and elegant interior solutions crafted for your
            lifestyle
          </p>
        </div>

        <>
          {/* Featured Services */}
          <div className="flex flex-wrap justify-center gap-7 mb-16">
            {featuredServices.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedService(service)}
                className="relative overflow-hidden flex flex-col items-center bg-white/42 backdrop-blur-xl rounded-[30px] px-9 py-12 min-w-[280px] max-w-[320px] border border-white/35 hover:border-[#e7c77a]/40 cursor-pointer shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.16)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 overflow-hidden">
                  <img
                    src={service.cover}
                    alt={service.title}
                    className="w-full h-full object-cover scale-[1.06] group-hover:scale-[1.14] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#fff8e8] via-[#f6e3b4] to-[#e0b96d] flex items-center justify-center text-[#8a5a1f] mb-5 shadow-[inset_0_2px_8px_rgba(255,255,255,0.65),0_6px_18px_rgba(212,175,55,0.22)] group-hover:scale-110 group-hover:rotate-[6deg] transition-all duration-500">
                    {service.icon}
                  </div>

                  <h3 className="text-[1.35rem] font-semibold tracking-[-0.02em] text-[#1f1a17] mb-3 text-center leading-snug group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h3>

                  <p className="text-[14.5px] text-[#645d57] text-center leading-[1.8] group-hover:text-[#f5ede1] transition-colors duration-500">
                    {service.description}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-[30px] border border-[#f3d08b]/0 group-hover:border-[#f3d08b]/35 transition-all duration-700 shadow-[inset_0_0_0_rgba(0,0,0,0)] group-hover:shadow-[inset_0_0_40px_rgba(255,215,120,0.08)]" />
              </motion.div>
            ))}
          </div>

          {/* Secondary Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6 justify-items-center">
            {secondaryServices.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedService(service)}
                className="relative overflow-hidden flex flex-col items-center bg-white/42 backdrop-blur-xl rounded-[30px] px-7 py-9 w-full max-w-[235px] border border-white/35 hover:border-[#e7c77a]/40 cursor-pointer shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.16)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 overflow-hidden">
                  <img
                    src={service.cover}
                    alt={service.title}
                    className="w-full h-full object-cover scale-[1.06] group-hover:scale-[1.14] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#fff8e8] via-[#f6e3b4] to-[#e0b96d] flex items-center justify-center text-[#8a5a1f] mb-5 shadow-[inset_0_2px_8px_rgba(255,255,255,0.65),0_6px_18px_rgba(212,175,55,0.22)] group-hover:scale-110 group-hover:rotate-[6deg] transition-all duration-500">
                    {service.icon}
                  </div>

                  <h3 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-[#1f1a17] mb-3 text-center leading-snug group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h3>

                  <p className="text-[13px] text-[#6a635d] text-center leading-[1.8] group-hover:text-[#f5ede1] transition-colors duration-500">
                    {service.description}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-[30px] border border-[#f3d08b]/0 group-hover:border-[#f3d08b]/35 transition-all duration-700 shadow-[inset_0_0_0_rgba(0,0,0,0)] group-hover:shadow-[inset_0_0_40px_rgba(255,215,120,0.08)]" />
              </motion.div>
            ))}
          </div>
        </>
      </div>
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl px-3 sm:px-6"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-[28px] bg-[#111111] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.45)]"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-black/35 backdrop-blur-md border border-white/10 hover:bg-black/70 hover:scale-110 transition-all duration-300"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="relative bg-black">
                <video
                  key={selectedService.video}
                  src={selectedService.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  onLoadedMetadata={(e) => {
                    if (selectedService.title === "Complete Home Interiors") {
                      e.currentTarget.playbackRate = 1.25;
                    }
                  }}
                  className="w-full max-h-[60vh] object-contain bg-black"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-black/10" />
              </div>

              <div
                className="w-full flex flex-col items-center px-6 sm:px-10 py-3 border-t border-[#c89b3c]/30 relative overflow-hidden"
                style={{
                  background: `
                    linear-gradient(
                      135deg,
                      #3b2618 0%,
                      #6b4423 15%,
                      #a97142 35%,
                      #d4a15a 50%,
                      #b67a3d 65%,
                      #7a4e2b 85%,
                      #3b2618 100%
                    )
                  `,
                  boxShadow:
                    "inset 0 2px 14px rgba(255,255,255,0.12), inset 0 -3px 14px rgba(0,0,0,0.28)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-[0.16] pointer-events-none"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(
                        100deg,
                        rgba(255,255,255,0.14) 0px,
                        rgba(255,255,255,0.05) 2px,
                        transparent 4px,
                        transparent 14px
                      )
                    `,
                    mixBlendMode: "soft-light",
                  }}
                />
                <h3
                  className="text-2xl sm:text-3xl font-extrabold mb-2 text-center tracking-wide"
                  style={{
                    color: "#f59e42",
                    textShadow:
                      "0 4px 24px rgba(14, 13, 13, 0.25), 0 1.5px 0 #fff",
                    letterSpacing: "0.04em",
                    background:
                      "linear-gradient(90deg,#fff4c2 0%, #ffd36b 35%, #f5b942 70%, #fff0b3 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 2px 10px rgba(255,215,120,0.35))",
                  }}
                >
                  {selectedService.title}
                </h3>
                <p className="text-[#f8e7c2] leading-relaxed sm:text-lg max-w-2xl text-center">
                  {selectedService.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
