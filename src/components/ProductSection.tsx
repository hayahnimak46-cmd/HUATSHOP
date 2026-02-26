import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShoppingCart } from 'lucide-react';
import { PRODUCTS, CATEGORIES, Product } from '../constants';

export const ProductSection = ({ searchQuery, onSelect }: { searchQuery: string, onSelect: (name: string) => void }) => {
  const [activeTab, setActiveTab] = useState("Mobile");

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = p.category === activeTab;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleBuy = (product: Product) => {
    onSelect(product.name);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
        <h2 className="text-2xl md:text-3xl font-display font-bold">Beli Cepat</h2>
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === cat
                  ? "bg-brand-red text-white shadow-lg shadow-rose-500/20"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -8 }}
              onClick={() => onSelect(product.name)}
              className="glass-card group overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 right-2 md:top-3 md:right-3 px-1.5 py-0.5 md:px-2 md:py-1 bg-black/60 backdrop-blur-md rounded-lg flex items-center space-x-1">
                  <Star className="h-2.5 w-2.5 md:h-3 md:w-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-[10px] md:text-xs font-bold">{product.rating}</span>
                </div>
              </div>
              <div className="p-3 md:p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-sm md:text-lg mb-0.5 md:mb-1 line-clamp-1">{product.name}</h3>
                <p className="text-brand-red font-display font-bold text-base md:text-xl mb-3 md:mb-4">
                  Rp {product.price.toLocaleString('id-ID')}
                </p>
                <button
                  onClick={() => handleBuy(product)}
                  className="mt-auto w-full bg-white/10 hover:bg-brand-red text-white py-2 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base font-bold flex items-center justify-center space-x-2 transition-all group-hover:shadow-lg group-hover:shadow-rose-500/20"
                >
                  <ShoppingCart className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  <span>Beli</span>
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">Tidak ada produk ditemukan di kategori ini.</p>
        </div>
      )}
    </section>
  );
};
