"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tv, Trophy, MonitorPlay, Smartphone } from "lucide-react";

export default function SportsSection({ dictionary }: { dictionary: any }) {
  const features = [
    { icon: Tv, text: dictionary.feature1 },
    { icon: Trophy, text: dictionary.feature2 },
    { icon: MonitorPlay, text: dictionary.feature3 },
    { icon: Smartphone, text: dictionary.feature4 },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/sports-bck-1.jpg", "/sports-bck-2.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Crossfade every 4 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="py-20 relative overflow-hidden bg-[#0A0A0F]">
      <div className="container-responsive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 relative z-10"
          >
            <span className="text-[#D4AF37] font-black tracking-[0.2em] uppercase text-xs md:text-sm drop-shadow-sm">
              {dictionary.badge}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter">
              {dictionary.title}
            </h2>
            <p className="text-white font-medium text-lg md:text-xl leading-relaxed mt-2 max-w-xl drop-shadow-sm opacity-95">
              {dictionary.description}
            </p>
            
            <div className="flex flex-col gap-5 mt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="text-[#D4AF37] transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <span className="text-gray-300 font-bold text-lg lg:text-xl transition-colors duration-300 group-hover:text-white">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[450px] lg:h-[650px] flex items-center justify-center lg:justify-end"
          >
            {/* Background design elements to mimic the red arrows/shapes in the original image */}
            <div className="absolute inset-0 right-0 z-0 hidden lg:block overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-10 w-[600px] h-[600px] bg-[#D4AF37]/10 rotate-45 skew-x-12 blur-[80px] rounded-full mix-blend-screen"></div>
            </div>

            <div className="relative z-10 w-full h-full lg:w-[120%] lg:-mr-12 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {/* Premium Image Container */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-2 border-[#D4AF37]/30 shadow-[0_0_50px_rgba(212,175,55,0.15)] ring-1 ring-white/10 group">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[currentImageIndex]}
                      alt="Global Sports Streaming"
                      fill
                      className="object-cover object-center filter contrast-[1.05] saturate-[1.1] transition-transform duration-[10s] group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      quality={100}
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Premium Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-black/10 opacity-80 pointer-events-none"></div>
              </div>

              {/* 4K Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                className="absolute bottom-4 left-4 lg:bottom-16 lg:-left-4 xl:-left-12 bg-[#15151A] rounded-2xl p-4 lg:p-6 shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex flex-col items-center gap-2 border border-[#D4AF37]/20"
              >
                <div className="bg-[#D4AF37] text-black font-black px-4 py-1.5 rounded-xl text-xl lg:text-2xl tracking-wider shadow-lg shadow-[#D4AF37]/20">
                  4K
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-white font-extrabold text-sm lg:text-base tracking-tight">Extreme Quality</span>
                  <span className="text-gray-400 font-medium text-xs lg:text-sm mt-0.5">Enjoy Watching up to 8K</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
