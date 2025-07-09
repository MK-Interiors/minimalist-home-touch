import { ArrowRight, Calendar } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";

export const Hero = () => {
  const [consultationData, setConsultationData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    message: "",
  });

  const { toast } = useToast();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Insert into Supabase
    const { error } = await supabase.from("Contact").insert([
      {
        name: consultationData.name,
        email: consultationData.email,
        phone: consultationData.phone,
        service: consultationData.service,
        date: consultationData.preferredDate,
        message: consultationData.message,
      },
    ]);

    if (error) {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thank you for reaching out!",
      description:
        "We appreciate your interest. Our team will contact you soon.",
      className: "bg-green-100 text-green-900 border-green-300",
      duration: 6000,
    });

    // Reset form
    setConsultationData({
      name: "",
      email: "",
      phone: "",
      service: "",
      preferredDate: "",
      message: "",
    });
  };

  const handleConsultationChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setConsultationData({
      ...consultationData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Hero content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              {/* Logo */}
              <div className="mx-auto lg:mx-0 mb-6">
                <div className="flex items-center justify-center lg:justify-start">
                  <img
                    src="/lovable-uploads/mklogo.png"
                    alt="MK Interiors"
                    className="h-16 w-auto"
                  />
                  
                </div>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Space Into
              <span className="block text-amber-400">Something Beautiful</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl">
              Expert interior design services that bring your vision to life
              with elegance and sophistication
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 transition-colors flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors shadow-lg hover:shadow-xl"
              >
                View Our Work
              </button>
            </div>
          </div>

          {/* Right side - Consultation Form */}
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get Free Consultation
              </h3>
              <p className="text-gray-600">Tell us about your dream space</p>
            </div>

            <form onSubmit={handleConsultationSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  value={consultationData.name}
                  onChange={handleConsultationChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  required
                  value={consultationData.email}
                  onChange={handleConsultationChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="Email Address"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={consultationData.phone}
                  onChange={handleConsultationChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="Phone Number"
                />
              </div>

              <div>
                <select
                  name="service"
                  value={consultationData.service}
                  onChange={handleConsultationChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all appearance-none bg-white text-gray-900"
                >
                  <option value="">Select Service</option>
                  <option value="complete-home">Complete Home Interiors</option>
                  <option value="space-planning">Space Planning</option>
                  <option value="consultation">Design Consultation</option>
                  <option value="kitchen">Modular Kitchen</option>
                  <option value="renovation">Renovation</option>
                </select>
              </div>

              <div>
                <input
                  type="date"
                  name="preferredDate"
                  value={consultationData.preferredDate}
                  onChange={handleConsultationChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows={3}
                  value={consultationData.message}
                  onChange={handleConsultationChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-amber-600 transition-colors shadow-lg hover:shadow-xl"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
