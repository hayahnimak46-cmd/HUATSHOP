import React from 'react';
import { motion } from 'motion/react';
import { Star, ShoppingCart, Zap } from 'lucide-react';
import { RANDOM_KEYS } from '../constants';

export const RandomKeySection = ({ onSelect }: { onSelect: (name: string) => void }) => {
  const handleBuy = (product: any) => {
    onSelect("Steam Key");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="flex items-center space-x-3 mb-6 md:mb-8">
        <div className="p-1.5 md:p-2 bg-brand-red rounded-lg">
          <Zap className="h-5 w-5 md:h-6 md:w-6 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-bold">Random Game Key</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {RANDOM_KEYS.map((key) => (
          <motion.div
            key={key.id}
            whileHover={{ y: -8 }}
            onClick={() => handleBuy(key)}
            className="glass-card p-4 md:p-6 flex items-center space-x-4 md:space-x-6 group cursor-pointer"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={key.image}
                alt={key.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base md:text-lg mb-0.5 md:mb-1">{key.name}</h3>
              <div className="flex items-center space-x-1 mb-1.5 md:mb-2">
                <Star className="h-2.5 w-2.5 md:h-3 md:w-3 text-yellow-400 fill-yellow-400" />
                <span className="text-[10px] md:text-xs text-gray-400">{key.rating} Rating</span>
              </div>
              <p className="text-brand-red font-display font-bold text-lg md:text-xl mb-2 md:mb-3">
                Rp {key.price.toLocaleString('id-ID')}
              </p>
              <button
                onClick={() => handleBuy(key)}
                className="w-full bg-brand-red hover:bg-rose-700 text-white py-2 rounded-lg text-sm md:text-base font-bold flex items-center justify-center space-x-2 transition-all"
              >
                <ShoppingCart className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <span>Beli</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
