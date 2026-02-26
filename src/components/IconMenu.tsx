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
  { name: "Mobile Legends", image: "https://i.pinimg.com/736x/c9/13/7e/c9137e7a2879f90e22df9fc5cd3bf85f.jpg", color: "bg-black" },
  { name: "Free Fire", image: "https://static.vecteezy.com/system/resources/previews/020/190/457/non_2x/freefire-logo-freefire-icon-free-free-vector.jpg", color: "bg-black" },
  { name: "Genshin Impact", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGQsLkt7THAnbL1cv3OoCQT5uWLn82gkvi0w&s", color: "bg-black" },
  { name: "Valorant", image: "https://i.pinimg.com/736x/cf/ae/88/cfae886e263126f685510e2f45b82970.jpg", color: "bg-black" },
  { name: "Steam Voucher", image: "https://seagm-media.seagmcdn.com/item_480/288.png", color: "bg-black" },
  { name: "Roblox Games", image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Roblox_Logo_2022.jpg", color: "bg-black" },
  { name: "Steam Key", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9p563bhRpuc3e1uqqEWmaDCiTV7PTXCuTA&s", color: "bg-black" },
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
