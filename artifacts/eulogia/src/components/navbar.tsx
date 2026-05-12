import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-border/50 py-4" 
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-xl font-serif text-white uppercase tracking-[0.15em]">
          Eulogia <span className="text-primary">&</span> Elogies
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {["About", "Services", "Projects", "Process", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex text-xs uppercase tracking-[0.2em] text-primary hover:text-white transition-colors border border-primary/30 px-4 py-2 hover:border-white">
          Inquire
        </a>
      </div>
    </motion.header>
  );
}
