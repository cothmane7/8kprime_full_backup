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

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      const currentPath = window.location.pathname.replace(/\/$/, "");
      const targetPath = path.replace(/\/$/, "");

      if (currentPath === targetPath || (targetPath === "" && (currentPath === `/${lang}` || currentPath === `/${lang}/`))) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
        }
      }
    } else if (window.location.pathname === href || window.location.pathname === href + "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: dictionary.home, href: `/${lang}` },
    { name: dictionary.setup_guide, href: `/${lang}/setup-guide` },
    { name: dictionary.pricing, href: `/${lang}#pricing` },
    { name: "Reseller", href: `/${lang}/reseller` },
    { name: dictionary.channels, href: `/${lang}/channels` },
    { name: "Blog", href: `/${lang}/blog` },
    { name: dictionary.faq, href: `/${lang}/faq` },
    { name: dictionary.contact, href: `/${lang}/contact` },
  ];

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0B0B0B]/90 backdrop-blur-xl border-b border-primary/10 py-3 shadow-2xl" : "bg-transparent py-5"}`}>
      <div className="container-responsive">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href={`/${lang}`} 
            onClick={(e) => handleScrollTo(e, `/${lang}`)}
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
          <div className="hidden lg:flex items-center gap-7 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-[13px] xl:text-[15px] font-semibold text-gray-200 hover:text-primary uppercase tracking-[0.12em] transition-all relative group font-sans"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gold-light via-primary to-gold-light transition-all group-hover:w-[120%]" />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            <Link 
              href={`/${lang}#pricing`} 
              onClick={(e) => handleScrollTo(e, `/${lang}#pricing`)}
              className="bg-metallic-gold text-black px-6 xl:px-10 py-4 xl:py-5 rounded-[1.5rem] xl:rounded-[1.8rem] text-sm xl:text-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/30 button-shine soft-gold-glow border border-white/30"
            >
              {dictionary.get_started}
            </Link>
          </div>

          {/* Mobile Menu Toggle: Optimized Touch Target */}
          <button
            className="lg:hidden text-white w-12 h-12 flex items-center justify-end touch-target"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={32} />
          </button>
        </div>
      </div>
    </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] lg:hidden bg-[#0A0A0F] pt-6 px-8 flex flex-col h-screen overflow-y-auto"
          >
            {/* Header Area with Close Button */}
            <div className="flex justify-end items-center w-full mb-12">
              <button
                className="text-white p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center touch-target"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={28} />
              </button>
            </div>
                    {/* Background Decoration */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="flex flex-col gap-8 relative z-10 font-sans">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      handleScrollTo(e, link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-2xl font-bold text-white hover:text-primary transition-colors flex items-center justify-between font-sans uppercase tracking-[0.05em]"
                  >
                    {link.name}
                    <ChevronRight className="text-primary/70" size={20} />
                  </Link>
                </motion.div>
              ))}
              <Link
                href={`/${lang}#pricing`}
                onClick={(e) => {
                  handleScrollTo(e, `/${lang}#pricing`);
                  setIsMobileMenuOpen(false);
                }}
                className="mt-6 bg-metallic-gold text-black w-full py-5 rounded-[2rem] text-xl font-extrabold text-center shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95 transition-all border border-white/30"
              >
                {dictionary.get_started}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
