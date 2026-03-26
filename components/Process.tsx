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
    <section className="py-24 relative overflow-hidden bg-[#0B0B0F]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-black text-[10px] tracking-[0.3em] uppercase mb-8"
          >
            {dictionary.badge}
          </motion.div>
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
