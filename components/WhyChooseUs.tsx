"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Zap } from "lucide-react";

interface WhyChooseUsProps {
  dictionary: {
    title: string;
    f1_title: string;
    f1_text: string;
    f2_title: string;
    f2_text: string;
    f3_title: string;
    f3_text: string;
  };
}

export default function WhyChooseUs({ dictionary }: WhyChooseUsProps) {
  const features = [
    {
      icon: <Globe className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
      title: dictionary.f1_title,
      text: dictionary.f1_text,
    },
    {
      icon: <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
      title: dictionary.f2_title,
      text: dictionary.f2_text,
    },
    {
      icon: <Zap className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
      title: dictionary.f3_title,
      text: dictionary.f3_text,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#0B0B0F]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2rem,6vw,4rem)] font-black text-white tracking-tighter leading-none mb-4 italic uppercase antialiased"
          >
            {dictionary.title.split('8KPRIME')[0]}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FBF3D5] via-[#D4AF37] to-[#8E6927]">
              8KPRIME
            </span>
            {dictionary.title.split('8KPRIME')[1]}
          </motion.h2>
          <div className="w-24 h-1.5 bg-primary/20 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-10 flex flex-col items-center text-center hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden shadow-2xl">
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon Container */}
                <div className="mb-8 p-6 rounded-3xl bg-white/5 border border-white/10 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-500 group-hover:scale-110">
                  {feature.icon}
                </div>

                <h3 className="text-white font-black text-xl md:text-2xl mb-6 tracking-tight uppercase">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 font-medium text-[15px] leading-relaxed max-w-sm">
                  {feature.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
