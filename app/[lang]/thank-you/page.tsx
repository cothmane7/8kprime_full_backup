"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-primary/5 blur-[200px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 max-w-lg w-full p-8 bg-[#0A0A0F] border border-white/10 rounded-3xl text-center shadow-[0_0_60px_rgba(176,141,62,0.3)]"
      >
        <CheckCircle className="mx-auto mb-6 text-primary" size={64} />
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          Thank You!
        </h1>
        <p className="text-gray-300 text-base md:text-lg mb-8">
          Your payment has been received. Your account details will be emailed to you within the next few minutes to a few hours, depending on our work hours.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-[#D4AF37] via-[#FFF0B3] to-[#D4AF37] text-black font-black rounded-full hover:scale-105 transition-transform"
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
}
