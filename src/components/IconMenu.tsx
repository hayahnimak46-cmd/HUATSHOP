import React from 'react';
import { motion } from 'motion/react';
import { 
  Gamepad2, 
  Key, 
  Sparkles, 
  Ticket, 
  Box, 
  Target, 
  LayoutGrid,
  Zap
} from 'lucide-react';

const MENU_ITEMS = [
  { name: "Mobile Legends", image: "/ICON/ML.jpg", color: "bg-black" },
  { name: "Free Fire", image: "/ICON/FF.png", color: "bg-black" },
  { name: "Genshin Impact", image: "/ICON/GENSHIN.png", color: "bg-black" },
  { name: "Valorant", image: "/ICON/VALORANT.jpg", color: "bg-black" },
  { name: "Steam Voucher", image: "/ICON/STEAM.jpg", color: "bg-black" },
  { name: "Roblox Games", image: "/ICON/ROBLOX.png", color: "bg-black" },
  { name: "Steam Key", image: "/ICON/STEAM KEY.jpeg", color: "bg-black" },
];

export const IconMenu = ({ onSelect }: { onSelect: (name: string) => void }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 overflow-hidden">
      <motion.div 
        className="flex space-x-6 md:space-x-12"
        animate={{
          x: [0, -1000, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Render twice for seamless loop */}
        {[...MENU_ITEMS, ...MENU_ITEMS].map((item, index) => (
          <motion.div
            key={`${item.name}-${index}`}
            whileHover={{ y: -5, scale: 1.05 }}
            onClick={() => onSelect(item.name)}
            className="flex flex-col items-center group cursor-pointer flex-shrink-0"
          >
            <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl ${item.color} flex items-center justify-center shadow-lg group-hover:shadow-rose-500/20 transition-all mb-2 md:mb-3 overflow-hidden border border-white/10`}>
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <span className="text-[10px] md:text-sm font-medium text-gray-400 group-hover:text-white text-center transition-colors whitespace-nowrap">
              {item.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
