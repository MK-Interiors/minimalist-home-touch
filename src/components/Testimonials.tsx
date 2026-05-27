import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sunil Seervi",

    role: "Mahalakshmi Jewellers, Pochampally",

    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1400&auto=format&fit=crop",

    review:
      "MK Interiors transformed our jewellery showroom into a space that perfectly reflects elegance and trust. The attention to detail, premium finish, and modern design truly elevated the customer experience.",
  },

  {
    name: "P. Nageshwar Rao",

    role: "Advocate Office, Vanasthalipuram",

    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop",

    review:
      "MK Interiors designed our advocate office with a perfect balance of professionalism and sophistication. The workspace now feels both welcoming and highly functional.",
  },

  {
    name: "U. Murali",

    role: "Complete Home Interiors, Hanuman Junction",

    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",

    review:
      "From planning to execution, MK Interiors delivered our home interiors with exceptional quality and attention to detail. The final outcome truly exceeded our expectations.",
  },
];

export default function Testimonials() {

  const [activeIndex, setActiveIndex] = useState(0);

  const [paused, setPaused] = useState(false);

  useEffect(() => {

    if (paused) return;

    const interval = setInterval(() => {

      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );

    }, 5000);

    return () => clearInterval(interval);

  }, [paused]);

  return (

    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#f8f4ee] via-[#f3ece2] to-[#ebe1d2]">

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <div className="w-[650px] h-[650px] rounded-full bg-[#d4af37]/10 blur-3xl" />

      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-[#1f1a17] mb-5">

            Client Experiences

          </h2>

          <div className="w-24 h-[2px] rounded-full bg-gradient-to-r from-[#d4af37] to-transparent mx-auto mb-7 opacity-80" />

          <p className="text-[17px] sm:text-lg text-[#5f5a54] leading-[1.9] max-w-2xl mx-auto">

            Every space we design carries a story of trust, elegance, and timeless craftsmanship.

          </p>
        </div>

        {/* Slider */}
        <div className="relative min-h-[430px] flex items-center justify-center">

          <AnimatePresence mode="wait">

            <motion.div
              key={activeIndex}

              initial={{
                opacity: 0,
                x: 40,
                scale: 0.98,
              }}

              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                x: -40,
                scale: 0.98,
              }}

              transition={{
                duration: 1,
                ease: "easeInOut",
              }}

              onMouseEnter={() => setPaused(true)}

              onMouseLeave={() => {

  setPaused(false);

  setActiveIndex((prev) =>
    prev === testimonials.length - 1 ? 0 : prev + 1
  );
}}

              onClick={() => setPaused(true)}

              className="absolute w-full max-w-4xl cursor-pointer"
            >

              <div className="overflow-hidden rounded-[30px] bg-white/40 backdrop-blur-xl border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] transition-all duration-700">

                {/* Image */}
                <div className="relative h-[280px] overflow-hidden">

                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                </div>

                {/* Content */}
<div className="w-full px-7 py-5 sm:px-10 sm:py-6">

  {/* Review */}
  <p className="w-full text-[16px] sm:text-[18px] leading-[1.7] text-[#5f5a54] text-left break-words">

    “{testimonials[activeIndex].review}”

  </p>

  {/* Name + Role */}
  <div className="mt-4 text-right">

    <h4 className="text-[22px] font-semibold text-[#b88a28] leading-tight">

      {testimonials[activeIndex].name}

    </h4>

    <span className="text-[15px] text-[#7a746d] leading-tight">

      {testimonials[activeIndex].role}

    </span>

  </div>

</div>
              </div>

            </motion.div>

          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}