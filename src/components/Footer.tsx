import React from 'react';
import { Instagram, Twitter, Facebook, MessageCircle, ArrowUpRight } from 'lucide-react';

export const Footer = ({ onInfoClick }: { onInfoClick: (title: string) => void }) => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-display font-bold text-brand-red tracking-tighter mb-6">
              HUAT<span className="text-white">SHOP</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Platform top up game termurah, tercepat, dan terpercaya di Indonesia. Kami menyediakan berbagai kebutuhan gaming Anda mulai dari voucher hingga item game.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Tentang HUAT SHOP</h3>
            <ul className="space-y-4">
              {["Tentang Kami", "Syarat & Ketentuan", "Kebijakan Privasi", "Hubungi Kami"].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => onInfoClick(item)}
                    className="text-gray-400 hover:text-brand-red flex items-center group text-left"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Bantuan</h3>
            <ul className="space-y-4">
              {["Cara Top Up", "Metode Pembayaran", "Lacak Pesanan", "FAQ"].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => onInfoClick(item)}
                    className="text-gray-400 hover:text-brand-red flex items-center group text-left"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Kontak</h3>
            <a 
              href="https://wa.me/6285159233349" 
              className="flex items-center space-x-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl group hover:bg-emerald-500/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-emerald-500 font-bold uppercase tracking-wider">WhatsApp CS</p>
                <p className="font-bold">+62 851-5923-3349</p>
              </div>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 HUAT SHOP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
