import React, { useState } from "react";
import imagesData from "../portfolioImages.json";

export const Portfolio = () => {
  const projects = imagesData;
  const [openGallery, setOpenGallery] = useState<null | number>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOpen = (id: number, imgIdx: number = 0) => {
    setOpenGallery(id);
    setActiveIndex(imgIdx);
  };
  const handleClose = () => setOpenGallery(null);
  const handlePrev = (images: string[]) =>
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const handleNext = (images: string[]) =>
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-[#f8f4ee] via-[#f3ece2] to-[#ebe1d2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Crafted Spaces
          </h2>
          <div className="w-24 h-[2px] mx-auto mb-5 rounded-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A curated collection of elegant interiors crafted with warmth, precision, and timeless aesthetics.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.slice(0, 5).map((project) => (
            <div
              key={project.id}
              className={`group cursor-pointer ${project.id === 1 ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <div
                className="relative overflow-hidden rounded-[28px] shadow-[0_10px_35px_rgba(0,0,0,0.12)] group-hover:shadow-[0_18px_45px_rgba(0,0,0,0.22),0_0_25px_rgba(212,175,55,0.18)] group-hover:-translate-y-2 transition-all duration-500 border border-white/20 group-hover:border-[#f3d08b]/40"
                onClick={() => handleOpen(project.id)}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out ${
                    project.id === 1
                      ? "h-[30rem]"
                      : project.id === 2
                      ? "h-[30rem]"
                      : "h-72"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-6">
                  <div className="inline-block backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl px-5 py-3 text-white translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
                    <h3 className="text-lg sm:text-xl font-semibold tracking-wide text-[#fff4d6]">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#f3d08b]/80 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-left">
                      View Sample images →
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Gallery Popup */}
      {openGallery !== null && (() => {
        const project = projects.find((p) => p.id === openGallery);
        if (!project) return null;
        const images = project.images;
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fadeIn px-4">
            <div className="relative bg-[#111111]/95 backdrop-blur-xl rounded-[32px] shadow-[0_0_60px_rgba(0,0,0,0.55)] max-w-4xl w-full p-6 flex flex-col items-center animate-slideUp border border-white/10">
              <button
                className="fixed md:absolute top-6 right-6 md:top-5 md:right-5 text-white hover:text-[#f3d08b] text-2xl font-light focus:outline-none transition-all duration-300 bg-black/35 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.35)] z-50 border border-white/10 hover:border-[#f3d08b]/40 hover:scale-110"
                onClick={handleClose}
                aria-label="Close gallery"
              >
                &times;
              </button>
              <div className="w-full flex flex-col items-center">
                <div className="relative w-full flex items-center justify-center mb-4 min-h-[18rem]">
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/35 backdrop-blur-md hover:bg-[#d4af37]/20 text-white shadow-[0_8px_25px_rgba(0,0,0,0.35)] rounded-full p-3 z-10 transition-all duration-300 border border-white/10 hover:border-[#f3d08b]/40 hover:scale-110"
                    onClick={() => handlePrev(images)}
                    aria-label="Previous image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <img
                    key={activeIndex}
                    src={images[activeIndex]}
                    alt={project.title}
                    className="w-full max-h-[34rem] object-contain rounded-[24px] shadow-[0_15px_45px_rgba(0,0,0,0.45)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] opacity-0 animate-fadeInImg"
                    style={{ animation: 'fadeInImg 0.5s' }}
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/35 backdrop-blur-md hover:bg-[#d4af37]/20 text-white shadow-[0_8px_25px_rgba(0,0,0,0.35)] rounded-full p-3 z-10 transition-all duration-300 border border-white/10 hover:border-[#f3d08b]/40 hover:scale-110"
                    onClick={() => handleNext(images)}
                    aria-label="Next image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
                <div className="flex gap-3 justify-center mb-3 flex-wrap">
                  {images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt="thumb"
                      className={`w-20 h-20 object-cover rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.25)] ${
                        idx === activeIndex
                          ? "ring-2 ring-[#f3d08b] scale-110 opacity-100 border border-[#f3d08b]/40"
                          : "opacity-45 hover:opacity-80"
                      } cursor-pointer transition-all duration-300 hover:scale-105`}
                      onClick={() => setActiveIndex(idx)}
                      style={{ transition: 'transform 0.2s, box-shadow 0.2s' }}
                    />
                  ))}
                </div>
                <div className="text-center mt-2 animate-fadeIn">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.title}</h3>
                </div>
              </div>
            </div>
            <style>{`
              @keyframes fadeInImg {
                from {
                  opacity: 0;
                  transform: scale(1.03) translateY(10px);
                  filter: blur(6px);
                }
                to {
                  opacity: 1;
                  transform: scale(1) translateY(0);
                  filter: blur(0px);
                }
              }
              .animate-fadeInImg {
                animation: fadeInImg 0.5s;
                opacity: 1 !important;
              }
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              .animate-fadeIn {
                animation: fadeIn 0.4s;
              }
              @keyframes slideUp {
                from { transform: translateY(40px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
              }
              .animate-slideUp {
                animation: slideUp 0.5s cubic-bezier(0.4,0,0.2,1);
              }
            `}</style>
          </div>
        );
      })()}
    </section>
  );
};
