"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ lang, dictionary }: { lang: string; dictionary: any }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (window.location.pathname === href || window.location.pathname === href + "/") {
      e.preventDefault();
      window.location.href = href;
    }
  };

  const navLinks = [
    { name: dictionary.home, href: `/${lang}` },
    { name: dictionary.setup_guide, href: `/${lang}/setup-guide` },
    { name: dictionary.pricing, href: `/${lang}/pricing` },
    { name: dictionary.channels, href: `/${lang}/channels` },
    { name: "Blog", href: `/${lang}/blog` },
    { name: dictionary.faq, href: `/${lang}/faq` },
    { name: dictionary.contact, href: `/${lang}/contact` },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0B0B0B]/90 backdrop-blur-xl border-b border-primary/10 py-3 shadow-2xl" : "bg-transparent py-5"}`}>
      <div className="container-responsive">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href={`/${lang}`} 
            onClick={(e) => handleHomeClick(e, `/${lang}`)}
            className="flex items-center gap-3 group touch-target pl-1 pt-3"
          >
            <div className="relative">
              {/* Antennas */}
              <div className="absolute -top-[14px] left-[6px] md:-top-[16px] md:left-[8px]">
                {/* Left Antenna */}
                <div className="absolute top-1 left-0 w-0.5 h-4 bg-[#D4AF37] -rotate-[35deg] origin-bottom group-hover:-rotate-[45deg] transition-transform duration-300">
                  <div className="absolute -top-1.5 -left-[3px] w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_5px_rgba(212,175,55,0.5)]"></div>
                </div>
                {/* Right Antenna */}
                <div className="absolute top-0 left-3 w-0.5 h-[22px] bg-[#D4AF37] rotate-[20deg] origin-bottom group-hover:rotate-[30deg] transition-transform duration-300">
                  <div className="absolute -top-1.5 -left-[3px] w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_5px_rgba(212,175,55,0.5)]"></div>
                </div>
              </div>

              {/* TV Body */}
              <div className="relative z-10 w-11 h-8 md:w-12 md:h-9 bg-black border-2 border-[#D4AF37] rounded-lg flex items-center justify-center shadow-[3px_3px_0px_#D4AF37] group-hover:shadow-[5px_5px_0px_#D4AF37] group-hover:-translate-y-[2px] group-hover:-translate-x-[2px] transition-all duration-300">
                <span className="text-[#D4AF37] font-black text-sm md:text-[17px] tracking-tighter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                  8K
                </span>
                {/* Vintage Screen Reflection */}
                <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-white/10 to-transparent rounded-t-lg pointer-events-none"></div>
              </div>
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white">
              PRIME<span className="text-[#D4AF37]">TV</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => link.href === `/${lang}` && handleHomeClick(e, link.href)}
                className="text-sm xl:text-base font-black text-gray-200 hover:text-primary uppercase tracking-wider transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-light to-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            <Link href={`/${lang}/pricing`} className="bg-metallic-gold text-black px-6 xl:px-10 py-4 xl:py-5 rounded-[1.5rem] xl:rounded-[1.8rem] text-sm xl:text-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/30 button-shine soft-gold-glow">
              {dictionary.get_started}
            </Link>
          </div>

          {/* Mobile Menu Toggle: Optimized Touch Target */}
          <button
            className="lg:hidden text-white w-12 h-12 flex items-center justify-end touch-target"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#050505] pt-32 px-10"
          >
            {/* Background Decoration */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />

            <div className="flex flex-col gap-8 relative z-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (link.href === `/${lang}`) handleHomeClick(e, link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-4xl font-black text-white hover:text-primary transition-colors flex items-center justify-between"
                  >
                    {link.name}
                    <ChevronRight className="text-primary" />
                  </Link>
                </motion.div>
              ))}
              <Link
                href={`/${lang}/pricing`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 bg-primary text-black w-full py-6 rounded-[2rem] text-2xl font-extrabold text-center shadow-2xl shadow-primary/20"
              >
                {dictionary.get_started}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
