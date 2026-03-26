"use client";

import { motion } from "framer-motion";
import { ShoppingCart, CreditCard, UserCheck, MonitorPlay } from "lucide-react";

interface ProcessProps {
  dictionary: {
    badge: string;
    step1_title: string;
    step1_text: string;
    step2_title: string;
    step2_text: string;
    step3_title: string;
    step3_text: string;
    step4_title: string;
    step4_text: string;
  };
}

export default function Process({ dictionary }: ProcessProps) {
  const steps = [
    {
      icon: <ShoppingCart className="w-8 h-8 md:w-10 md:h-10" />,
      title: dictionary.step1_title,
      text: dictionary.step1_text,
      gradient: "from-orange-400 to-primary",
    },
    {
      icon: <CreditCard className="w-8 h-8 md:w-10 md:h-10" />,
      title: dictionary.step2_title,
      text: dictionary.step2_text,
      gradient: "from-primary to-[#8E6927]",
    },
    {
      icon: <UserCheck className="w-8 h-8 md:w-10 md:h-10" />,
      title: dictionary.step3_title,
      text: dictionary.step3_text,
      gradient: "from-[#FBF3D5] to-primary",
    },
    {
      icon: <MonitorPlay className="w-8 h-8 md:w-10 md:h-10" />,
      title: dictionary.step4_title,
      text: dictionary.step4_text,
      gradient: "from-primary to-orange-500",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-[#0B0B0F]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.5rem,7vw,4.5rem)] font-black text-white tracking-tighter leading-none mb-6 italic uppercase antialiased"
          >
            {dictionary.badge.split('8k')[0]}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FBF3D5] via-[#D4AF37] to-[#8E6927] drop-shadow-[0_4px_12px_rgba(212,175,55,0.3)]">
              8K
            </span>
            {dictionary.badge.split('8k')[1]}
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-2 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full shadow-[0_0_20px_rgba(176,141,62,0.5)]" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-white/5 border border-white/5 rounded-[2rem] p-10 flex flex-col items-center text-center hover:bg-white/[0.07] hover:border-white/10 transition-all duration-500 hover:-translate-y-2">
                {/* Step Number Badge */}
                <div className="absolute top-6 right-8 text-4xl font-black text-white/5 group-hover:text-primary/10 transition-colors">
                  0{index + 1}
                </div>

                {/* Icon Circle */}
                <div className={`mb-8 p-6 rounded-2xl bg-gradient-to-br ${step.gradient} text-black shadow-2xl shadow-primary/20 group-hover:scale-110 transition-transform duration-500`}>
                  {step.icon}
                </div>

                <h3 className="text-white font-black text-lg md:text-xl mb-4 tracking-tighter uppercase leading-tight">
                  {step.title}
                </h3>
                
                <p className="text-gray-300 font-medium text-sm leading-relaxed">
                  {step.text}
                </p>

                {/* Connection Line (Visual only for Desktop) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gradient-to-r from-white/10 to-transparent z-0" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
