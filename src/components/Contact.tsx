import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MessageCircle,
  ChevronDown,
  User
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  const { toast } = useToast();
  const [showContactOptions, setShowContactOptions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowContactOptions(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

const [formData, setFormData] = useState({
  name: "",
  phone: "",
  location: "",
});

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "service_kuezt9q",
      "template_tz5c81f",
      {
  name: formData.name,
  phone: formData.phone,
  location: formData.location,
},
      "YnqcRdjlu7lp9csA9"
    );

    toast({
  title: "Inquiry Submitted Successfully!",
  description: "Our team will contact you shortly.",
  className:
    "bg-[#0f1726]/95 backdrop-blur-xl border border-[#d4af37]/20 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] rounded-2xl",
  action: (
    <CheckCircle2 className="text-[#d4af37] w-5 h-5" />
  ),
});

    setFormData({
      name: "",
      phone: "",
      location: "",
    });

  } catch (error) {
    toast({
  title: "Submission Failed",
  description: "Please try again in a moment.",
  className:
    "bg-[#1b0f0f]/95 backdrop-blur-xl border border-red-500/20 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] rounded-2xl",
});
  }
};
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative pt-24 pb-28 overflow-hidden bg-gradient-to-b from-[#f8f4ee] via-[#f3ece2] to-[#ebe1d2]">
      <div className="absolute inset-0 flex justify-center pointer-events-none">
  <div className="w-[600px] h-[600px] bg-[#d4af37]/10 blur-3xl rounded-full" />
</div>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.04em] leading-[1.05] text-[#1f1a17] mb-5">
            Let’s Design Your Dream Space
          </h2>
          <div className="w-24 h-[2px] rounded-full bg-gradient-to-r from-[#d4af37] to-transparent mx-auto mb-7 opacity-80" />
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            <p className="text-[17px] sm:text-lg text-[#5f5a54] leading-[1.9] max-w-2xl mx-auto">
  Ready to transform your interiors? Schedule a personalized consultation and let’s bring your vision to life with timeless, elegant design.
</p>
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-start mt-16">

  {/* LEFT SIDE - CONTACT INFO */}
  <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="pt-4"
>
  <div className="mb-10">
  <div className="inline-block mb-10">
    <p className="text-[17px] font-semibold uppercase tracking-[0.22em] text-[#1f1a17] mb-1">
      CONTACT DETAILS
    </p>

    <div className="w-24 h-[2px] rounded-full bg-gradient-to-r from-[#1f1a17] to-transparent opacity-80" />
  </div>
</div>

  <div className="flex-1 leading-none space-y-8 max-w-md">

    {/* Phone */}
    <div className="flex items-start gap-3 text-left cursor-pointer">
      <div className="pt-[2px] text-[#c79a32] shrink-0">
        <Phone size={20} />
      </div>

      <div className="flex flex-col">
        <div className="text-[18px] font-semibold text-[#1f1a17] mb-2">
          Phone
        </div>

        <div ref={dropdownRef} className="relative inline-block">

  <button
    onClick={() => setShowContactOptions((prev) => !prev)}
    className="flex items-center gap-2 text-[15px] leading-[1.8] text-[#5f5a54] hover:text-[#b88a28] transition-colors duration-300"
  >
  
    +91 9493427181
    <ChevronDown size={16} />
  </button>

  {showContactOptions && (
    <div className="absolute top-full left-0 mt-1 w-52 bg-white/95 backdrop-blur-xl border border-[#e7dccb] rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] overflow-hidden z-50 transition-all duration-300">
      
      {/* Call */}
      <a
        href="tel:+919493427181"
        className="flex items-center gap-3 px-5 py-4 text-[15px] text-[#1f1a17] hover:bg-[#f8f4ee] transition-colors duration-300"
      >
        <Phone size={18} className="text-[#b88a28]" />
        Call Now
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919493427181"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-5 py-4 text-[15px] text-[#1f1a17] hover:bg-[#f8f4ee] transition-colors duration-300 border-t border-[#eee4d6]"
      >
        <FaWhatsapp size={18} className="text-[#25D366]" />
        WhatsApp Chat
      </a>
    </div>
  )}
</div>

<a
  href="tel:+919963977753"
  className="mt-1 text-[15px] leading-[1.8] text-[#5f5a54] hover:text-[#b88a28] transition-colors duration-300"
>
  +91 9963977753
</a>

      </div>
    </div>

    {/* Email */}
    <div className="border-t border-black/10 pt-8 flex items-start gap-3 text-left cursor-pointer">
      <div className="pt-[2px] text-[#c79a32] shrink-0">
        <Mail size={20} />
      </div>

      <div>
        <div className="text-[18px] font-semibold text-[#1f1a17] mb-2">
          Email
        </div>

        <a
  href="mailto:mkinteriors2k05@gmail.com"
  className="text-[15px] leading-[1.8] text-[#5f5a54] hover:text-[#b88a28] transition-colors duration-300"
>
  mkinteriors2k05@gmail.com
</a>
      </div>
    </div>

    {/* Location 1 */}
    <div className="border-t border-black/10 pt-8 flex items-start gap-3 text-left cursor-pointer">
      <div className="pt-[2px] text-[#c79a32] shrink-0">
        <MapPin size={20} />
      </div>

      <div>
        <div className="text-[18px] font-semibold text-[#1f1a17] mb-2">
          Studio Location
        </div>

        <a
  href="https://maps.google.com/?q=Raghava+Towers+Madinaguda+Hyderabad"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[15px] leading-[1.8] text-[#5f5a54] hover:text-[#b88a28] transition-colors duration-300"
>
  Raghava Towers, Madinaguda,
  Hyderabad - 500049, TS
</a>
      </div>
    </div>

    {/* Location 2 */}
    <div className="border-t border-black/10 pt-8 flex items-start gap-3 text-left cursor-pointer">
      <div className="pt-[2px] text-[#c79a32] shrink-0">
        <MapPin size={20} />
      </div>

      <div>
        <div className="text-[18px] font-semibold text-[#1f1a17] mb-2">
          Branch Office
        </div>

        <a
  href="https://maps.google.com/?q=HUDA+Complex+Vanasthalipuram+Hyderabad"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[15px] leading-[1.8] text-[#5f5a54] hover:text-[#b88a28] transition-colors duration-300"
>
  HUDA Complex, Vanasthalipuram,
  Hyderabad - 500070, TS
</a>
      </div>
    </div>
  </div>
</motion.div>

  {/* RIGHT SIDE - FORM */}
  <motion.form
  onSubmit={handleSubmit}
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
  viewport={{ once: true }}
  className="w-full max-w-[500px] mx-auto bg-white/42 backdrop-blur-xl rounded-[34px] border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.08)] px-8 py-16 sm:px-10 sm:py-18"
>
  {/* Name */}
  <div className="mb-6">
    <label
      htmlFor="name"
      className="block text-[18px] font-semibold tracking-wide text-[#3d352f] mb-3 text-left"
    >
      Name
    </label>

    <div className="relative">
      <input
        type="text"
        id="name"
        name="name"
        required
        value={formData.name}
        onChange={(e) => {
          const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
          setFormData({ ...formData, name: value });
        }}
        placeholder="Enter Your Name"
        className="w-full bg-white/55 backdrop-blur-md px-5 py-4 pl-12 rounded-2xl border border-white/40 text-[#1f1a17] placeholder:text-[#8a8178] shadow-[0_8px_25px_rgba(0,0,0,0.04)] focus:outline-none focus:border-[#d4af37]/40 focus:shadow-[0_0_0_4px_rgba(212,175,55,0.12)] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-500"
      />

      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c79a32]">
        <User size={17} />
      </span>
    </div>
  </div> 

  {/* Phone */}
  <div className="mb-8">
    <label
      htmlFor="phone"
      className="block text-[18px] font-semibold tracking-wide text-[#3d352f] mb-3 text-left"
    >
      Phone Number
    </label>

    <div className="relative">
      <input
        type="tel"
        id="phone"
        name="phone"
        required
        maxLength={10}
        inputMode="numeric"
        pattern="[0-9]{10}"
        value={formData.phone}
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, "").slice(0, 10);
          setFormData({
            ...formData,
            phone: value,
          });
        }}
        placeholder="99XXXXXX00"
        className="w-full bg-white/55 backdrop-blur-md px-5 py-4 pl-12 rounded-2xl border border-white/40 text-[#1f1a17] placeholder:text-[#8a8178] shadow-[0_8px_25px_rgba(0,0,0,0.04)] focus:outline-none focus:border-[#d4af37]/40 focus:shadow-[0_0_0_4px_rgba(212,175,55,0.12)] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-500"
      />

      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c79a32]">
        <Phone size={17} />
      </span>
    </div>
  </div>
  {/* Location */}
<div className="mb-8">

  <label
    htmlFor="location"
    className="block text-[18px] font-semibold tracking-wide text-[#3d352f] mb-3 text-left"
  >
    Project Location
  </label>

  <div className="relative">

    <input
      type="text"
      id="location"
      name="location"
      required
      value={formData.location}
      onChange={handleChange}
      placeholder="Enter Project Location"
      className="w-full bg-white/55 backdrop-blur-md px-5 py-4 pl-12 rounded-2xl border border-white/40 text-[#1f1a17] placeholder:text-[#8a8178] shadow-[0_8px_25px_rgba(0,0,0,0.04)] focus:outline-none focus:border-[#d4af37]/40 focus:shadow-[0_0_0_4px_rgba(212,175,55,0.12)] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-500"
    />

    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c79a32]">

      <MapPin size={17} />

    </span>

  </div>
</div>
  {/* Submit Button */}
  <button
    type="submit"
    className="group w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#f3c243] via-[#d4a037] to-[#b8860b] hover:brightness-110 text-black font-semibold px-8 py-4 rounded-[20px] transition-all duration-500 shadow-[0_12px_35px_rgba(212,175,55,0.26)] hover:shadow-[0_20px_45px_rgba(212,175,55,0.38)]"
  >
    <>
      Request Consultation
      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  </button>
</motion.form>
     </div>

      </div>
    </section>
  );
};
