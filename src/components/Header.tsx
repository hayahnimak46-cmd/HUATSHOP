import React, { useState } from 'react';
import { Search, Menu, X, ShoppingCart, User, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_ITEMS = [
  "Steam Voucher",
  "Steam Key",
  "Roblox Games",
  "Mobile Legends",
  "Free Fire",
  "Valorant",
  "Genshin Impact"
];

export const Header = ({ onSearch, onLoginClick, onHomeClick, onSelectGame, onCartClick, user, onLogout }: { onSearch: (val: string) => void, onLoginClick: (mode: 'login' | 'register') => void, onHomeClick: () => void, onSelectGame: (name: string) => void, onCartClick: () => void, user: any, onLogout: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  };

  const handleItemClick = (item: string) => {
    onSelectGame(item);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-black/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={onHomeClick}>
            <h1 className="text-xl md:text-2xl font-display font-bold text-brand-red tracking-tighter">
              HUAT<span className="text-white">SHOP</span>
            </h1>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-full bg-brand-dark text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                placeholder="Cari game atau voucher..."
                value={searchValue}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button 
              onClick={onCartClick}
              className="p-1.5 md:p-2 text-gray-400 hover:text-white transition-colors relative"
            >
              <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-brand-red text-white text-[10px] font-bold rounded-full flex items-center justify-center">1</span>
            </button>
            
            {user ? (
              <div className="hidden sm:flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-white">
                  <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-xs font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium">{user.name}</span>
                </div>
                <button 
                  onClick={onLogout}
                  className="text-gray-400 hover:text-brand-red text-sm font-bold transition-all"
                >
                  Keluar
                </button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center space-x-2">
                <button 
                  onClick={() => onLoginClick('register')}
                  className="text-gray-400 hover:text-white px-4 py-2 text-sm font-bold transition-all"
                >
                  Daftar
                </button>
                <button 
                  onClick={() => onLoginClick('login')}
                  className="flex items-center space-x-2 bg-brand-red hover:bg-rose-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-rose-500/20"
                >
                  <User className="h-4 w-4" />
                  <span>Masuk</span>
                </button>
              </div>
            )}

            {/* Mobile User/Login Button */}
            <button 
              onClick={() => user ? onLogout() : onLoginClick('login')}
              className="sm:hidden p-2 text-gray-400 hover:text-white"
            >
              {user ? (
                <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white text-xs font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              ) : (
                <User className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ml-2">
             <button className="p-1.5 text-gray-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Categories */}
        <div className="hidden md:flex items-center space-x-6 py-3 overflow-x-auto no-scrollbar border-t border-white/5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => handleItemClick(item)}
              className="text-sm font-medium text-gray-400 hover:text-brand-red whitespace-nowrap transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-b border-white/5"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-full bg-brand-black text-white placeholder-gray-400 focus:outline-none"
                  placeholder="Cari game..."
                  value={searchValue}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleItemClick(item)}
                    className="block px-3 py-2 rounded-md text-left text-base font-medium text-gray-400 hover:text-white hover:bg-white/5"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="space-y-3">
                <button 
                  onClick={() => {
                    onLoginClick('login');
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-brand-red text-white px-4 py-3 rounded-xl font-bold"
                >
                  <User className="h-5 w-5" />
                  <span>Masuk Sekarang</span>
                </button>
                <button 
                  onClick={() => {
                    onLoginClick('register');
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl font-bold"
                >
                  <UserPlus className="h-5 w-5" />
                  <span>Daftar Akun</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
