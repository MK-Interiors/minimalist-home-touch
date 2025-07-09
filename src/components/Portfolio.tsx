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
  const handlePrev = (images: string[]) => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const handleNext = (images: string[]) => setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of beautifully designed spaces that showcase our commitment to excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div
                className="relative overflow-hidden rounded-2xl shadow-lg"
                onClick={() => handleOpen(project.id)}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.category}</p>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full p-6 flex flex-col items-center animate-slideUp">
              <button
                className="fixed md:absolute top-6 right-6 md:top-4 md:right-4 text-gray-400 hover:text-gray-700 text-3xl font-bold focus:outline-none transition-colors duration-200 bg-white/90 rounded-full p-2 shadow-lg z-50 border-none"
                style={{boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}
                onClick={handleClose}
                aria-label="Close gallery"
              >
                &times;
              </button>
              <div className="w-full flex flex-col items-center">
                <div className="relative w-full flex items-center justify-center mb-4 min-h-[18rem]">
                  <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-amber-100 text-amber-600 shadow-lg rounded-full p-2 text-2xl z-10 transition-all duration-200 border-none"
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
                    className="w-full max-h-[28rem] object-contain rounded-2xl shadow-xl transition-all duration-500 ease-in-out opacity-0 animate-fadeInImg"
                    style={{animation: 'fadeInImg 0.5s'}}
                  />
                  <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-amber-100 text-amber-600 shadow-lg rounded-full p-2 text-2xl z-10 transition-all duration-200 border-none"
                    onClick={() => handleNext(images)}
                    aria-label="Next image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
                <div className="flex gap-2 justify-center mb-2 flex-wrap">
                  {images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt="thumb"
                      className={`w-16 h-16 object-cover rounded-lg shadow ${idx === activeIndex ? "ring-2 ring-amber-300 scale-110" : "opacity-70"} cursor-pointer transition-all duration-200`}
                      onClick={() => setActiveIndex(idx)}
                      style={{transition: 'transform 0.2s, box-shadow 0.2s'}}
                    />
                  ))}
                </div>
                <div className="text-center mt-2 animate-fadeIn">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.category}</p>
                </div>
              </div>
            </div>
            <style jsx>{`
              @keyframes fadeInImg {
                from { opacity: 0; transform: scale(0.97); }
                to { opacity: 1; transform: scale(1); }
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
