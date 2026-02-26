import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PROMOS } from '../constants';

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % PROMOS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % PROMOS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + PROMOS.length) % PROMOS.length);

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
      <div className="relative h-[220px] sm:h-[300px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 bg-gradient-to-r ${PROMOS[current].color} flex items-center`}
          >
            <div className="absolute inset-0 opacity-40">
              <img
                src={PROMOS[current].image}
                alt=""
                className="w-full h-full object-cover mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="relative z-10 px-6 md:px-16 max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-2 py-0.5 md:px-3 md:py-1 bg-white/20 backdrop-blur-sm rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 md:mb-4"
              >
                Promo Terbatas
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-4xl md:text-6xl font-display font-bold mb-2 md:mb-4 leading-tight"
              >
                {PROMOS[current].title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-sm md:text-lg text-white/80 mb-4 md:mb-8 line-clamp-2 md:line-clamp-none"
              >
                {PROMOS[current].subtitle}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brand-black px-5 py-2.5 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg shadow-xl hover:bg-gray-100 transition-all"
              >
                Top Up Sekarang
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls - Hidden on mobile */}
        <button
          onClick={prev}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={next}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-1.5 md:space-x-2">
          {PROMOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 md:h-1.5 rounded-full transition-all ${
                current === i ? "w-6 md:w-8 bg-white" : "w-1.5 md:w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
