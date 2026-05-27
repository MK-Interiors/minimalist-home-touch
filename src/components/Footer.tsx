import {
  Instagram,
  Mail,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#071120] via-[#081426] to-[#020817] text-white pt-5 pb-4">

      {/* Subtle Ambient Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[420px] h-[420px] bg-[#d4af37]/6 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 sm:px-10">

        {/* Logo + Location */}
<div className="flex items-end gap-4 mb-1">

  <img
    src="/lovable-uploads/mklogo.png"
    alt="MK Interiors"
    className="h-16 sm:h-20 w-auto object-contain"
  />

  <p className="text-[13px] uppercase tracking-[0.22em] text-[#d4af37]/70 pb-[20px]">
    Hyderabad, India
  </p>

</div>
        {/* Elegant Divider */}
        <div className="ml-20 w-[150px] h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/80 to-transparent mb-[6px] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.18)]" />
        {/* Tagline */}
        <div className="max-w-lg text-left mb-4">
  <p className="text-[18px] sm:text-[22px] leading-[1.8] tracking-[-0.02em] text-white/85">
    Transforming spaces with elegance,
<br />
timeless craftsmanship, and passion.
  </p>
</div>
        
        

        {/* Social Icons */}
        <div className="flex items-center gap-4 mb-1">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/mkinteriors2k05"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-[#d4af37]/40 hover:bg-white/5 transition-all duration-500 hover:-translate-y-[2px]"
          >
            <Instagram
              size={19}
              className="text-white/75 hover:text-[#d4af37] transition-colors duration-500"
            />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919493427181"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-[#d4af37]/40 hover:bg-white/5 transition-all duration-500 hover:-translate-y-[2px]"
          >
            <FaWhatsapp
  size={18}
  className="text-white/75 hover:text-[#25D366] transition-colors duration-500"
/>
          </a>

          {/* Email */}
          <a
            href="mailto:mkinteriors2k05@gmail.com?subject=Interior%20Design%20Consultation"
            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-[#d4af37]/40 hover:bg-white/5 transition-all duration-500 hover:-translate-y-[2px]"
          >
            <Mail
              size={19}
              className="text-white/75 hover:text-[#d4af37] transition-colors duration-500"
            />
          </a>
        </div>

        

        {/* Copyright */}
        <div className="text-left">
  <p className="text-[13px] tracking-wide text-white/40">
    © 2025 MK Interiors. All rights reserved.
  </p>
</div>

      </div>
    </footer>
  );
};