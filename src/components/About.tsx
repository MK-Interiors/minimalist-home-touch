import { Users, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const About = () => {
  const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = target / 60;
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Number(start.toFixed(1)));
        }
      }, 25);

      return () => clearInterval(timer);
    }, [target]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  const stats = [
    {
      icon: <Users size={24} />,
      number: 500,
      suffix: "+",
      label: "Happy Clients"
    },
    {
      icon: <Clock size={24} />,
      number: 2,
      suffix: "",
      label: "Decades of Experience"
    },
    {
      icon: <Star size={24} />,
      number: 4.9,
      suffix: "",
      label: "Client Rating"
    }
  ];

  return (
    <section
      id="about"
      className="pt-24 pb-20 bg-gradient-to-b from-[#f8f4ee] via-[#f3ece2] to-[#ebe1d2]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            className="max-w-[620px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-[1.1] tracking-[-0.035em] text-[#1f1a17] mb-5 whitespace-normal lg:whitespace-nowrap">
              Crafting Timeless Interiors Since 2005
            </h2>
            <div className="w-22 h-[2px] rounded-full bg-gradient-to-r from-[#d4af37] to-transparent mb-8 opacity-80" />
            <p className="text-[16px] sm:text-[17px] text-[#5f5a54] leading-[1.95] max-w-[52ch] mb-6 text-left">
              At MK Interiors, we craft spaces that balance elegance, comfort, and functionality. With over two decades of experience, our team transforms homes and workspaces into thoughtfully designed interiors tailored to modern lifestyles.
            </p>
            <p className="text-[16px] sm:text-[17px] text-[#5f5a54] leading-[1.95] max-w-[56ch] mb-6 text-left">
              Serving clients across India, we combine creativity with precision to deliver interiors that feel timeless, refined, and deeply personal.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/45 border border-white/40 rounded-3xl px-6 py-5 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(212,175,55,0.10)] hover:-translate-y-2 transition-all duration-500 hover:border-[#f3d08b]/40 group"
                >
                  <div className="text-[#d4af37] mb-3 flex justify-center transition-transform duration-500 group-hover:scale-110">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold tracking-[-0.03em] text-[#1f1a17] mb-1">
                    <Counter target={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm tracking-wide text-[#6a635d]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative group lg:mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-6 bg-[#d4af37]/10 blur-3xl rounded-full opacity-70 pointer-events-none" />
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Interior Design Team"
              className="rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.18)] object-cover w-full h-[420px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] group-hover:-translate-y-1"
            />
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-t from-black/20 via-transparent to-white/5 pointer-events-none" />
            <div className="absolute bottom-2 left-2 backdrop-blur-xl bg-white/12 border border-white/15 px-5 py-4 rounded-[22px] shadow-[0_10px_35px_rgba(0,0,0,0.22)] max-w-[280px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.32)] hover:border-[#f3d08b]/30">
              <div className="text-xl font-semibold tracking-wide text-white mb-1">Driven by Passion</div>
              <div className="text-sm leading-relaxed text-white/75">Built on creativity and craftsmanship.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
