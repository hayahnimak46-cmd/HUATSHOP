import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Star, ShoppingCart, Zap, ShieldCheck, Clock } from 'lucide-react';

interface ProductItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface GameDetailProps {
  gameName: string;
  onBack: () => void;
  onProductSelect: (product: { name: string; price: number; gameName: string }) => void;
}

const GAME_PRODUCTS: Record<string, ProductItem[]> = {
  "Mobile Legends": [
    { id: "ml-1", name: "86 Diamonds", price: 19500, image: "https://www.pngall.com/wp-content/uploads/18/Mobile-Legends-Diamond-Background-PNG.png" },
    { id: "ml-2", name: "172 Diamonds", price: 38000, image: "https://www.pngall.com/wp-content/uploads/18/Mobile-Legends-Diamond-Background-PNG.png" },
    { id: "ml-3", name: "257 Diamonds", price: 56000, image: "https://www.pngall.com/wp-content/uploads/18/Mobile-Legends-Diamond-Background-PNG.png" },
    { id: "ml-4", name: "706 Diamonds", price: 155000, image: "https://www.pngall.com/wp-content/uploads/18/Mobile-Legends-Diamond-Background-PNG.png" },
    { id: "ml-5", name: "Twilight Pass", price: 145000, image: "https://www.pngall.com/wp-content/uploads/18/Mobile-Legends-Diamond-Background-PNG.png" },
    { id: "ml-6", name: "Weekly Diamond Pass", price: 28000, image: "https://www.pngall.com/wp-content/uploads/18/Mobile-Legends-Diamond-Background-PNG.png" },
  ],
  "Free Fire": [
    { id: "ff-1", name: "70 Diamonds", price: 9500, image: "https://wallpaperaccess.com/full/10807853.jpg" },
    { id: "ff-2", name: "140 Diamonds", price: 18500, image: "https://wallpaperaccess.com/full/10807853.jpg" },
    { id: "ff-3", name: "355 Diamonds", price: 46000, image: "https://wallpaperaccess.com/full/10807853.jpg" },
    { id: "ff-4", name: "720 Diamonds", price: 92000, image: "https://wallpaperaccess.com/full/10807853.jpg" },
  ],
  "Genshin Impact": [
    { id: "gi-1", name: "60 Genesis Crystals", price: 14500, image: "https://kaleoz-media.seagmcdn.com/kaleoz-store/202405/oss-2c91d65e2e0faabf024161a8e9256762.jpg" },
    { id: "gi-2", name: "300+30 Genesis Crystals", price: 72000, image: "https://kaleoz-media.seagmcdn.com/kaleoz-store/202405/oss-2c91d65e2e0faabf024161a8e9256762.jpg" },
    { id: "gi-3", name: "Blessing of the Welkin Moon", price: 72000, image: "https://kaleoz-media.seagmcdn.com/kaleoz-store/202405/oss-2c91d65e2e0faabf024161a8e9256762.jpg" },
  ],
  "Valorant": [
    { id: "val-1", name: "625 Points", price: 75000, image: "https://static.wixstatic.com/media/75a354_9d847b8c81d04dfda8a63bce868d6b34~mv2.jpg/v1/fill/w_1600,h_900,al_c/75a354_9d847b8c81d04dfda8a63bce868d6b34~mv2.jpg" },
    { id: "val-2", name: "1125 Points", price: 145000, image: "https://static.wixstatic.com/media/75a354_9d847b8c81d04dfda8a63bce868d6b34~mv2.jpg/v1/fill/w_1600,h_900,al_c/75a354_9d847b8c81d04dfda8a63bce868d6b34~mv2.jpg" },
  ],
  "Roblox Games": [
    { id: "rbx-1", name: "400 Robux", price: 75000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjFyEP5qF5Yh27ii9cA2Wkymtmj8o1PHNdw&s" },
    { id: "rbx-2", name: "800 Robux", price: 145000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjFyEP5qF5Yh27ii9cA2Wkymtmj8o1PHNdw&s" },
  ],
  "Steam Voucher": [
    { id: "st-1", name: "Steam Wallet IDR 12.000", price: 15000, image: "https://backend.odigix.com/storage/1680/conversions/steammain-large.jpg" },
    { id: "st-2", name: "Steam Wallet IDR 45.000", price: 55000, image: "https://backend.odigix.com/storage/1680/conversions/steammain-large.jpg" },
    { id: "st-3", name: "Steam Wallet IDR 60.000", price: 72000, image: "https://backend.odigix.com/storage/1680/conversions/steammain-large.jpg" },
  ],
  "Steam Key": [
    { id: "sk-1", name: "Random Steam Key Bronze", price: 2500, image: "https://cdn.itemsatis.com/uploads/post_images/1m-adet-steam-random-key-sadece-10-tl-944046.jpeg" },
    { id: "sk-2", name: "Random Steam Key Silver", price: 5000, image: "https://cdn.itemsatis.com/uploads/post_images/1m-adet-steam-random-key-sadece-10-tl-944046.jpeg" },
    { id: "sk-3", name: "Random Steam Key Gold", price: 10000, image: "https://cdn.itemsatis.com/uploads/post_images/1m-adet-steam-random-key-sadece-10-tl-944046.jpeg" },
  ]
};

const GAME_IMAGES: Record<string, string> = {
  "Mobile Legends": "https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2023/10/urutan-rank-ml-1.jpg",
  "Free Fire": "https://genz.id/wp-content/uploads/2025/06/Kode-Redeem-Free-Fire.jpg",
  "Genshin Impact": "https://i.pinimg.com/736x/93/24/7d/93247dead2d4590926020ab71d9efc1c.jpg",
  "Valorant": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqUWjI51O1tlv4XeSYZY800Cevf3cw_OHU3g&s",
  "Roblox Games": "https://kubus.id/wp-content/uploads/2025/04/Ilustrasi-Roblox.jpeg",
  "Steam Voucher": "https://vocagame.com/_next/image?url=https%3A%2F%2Fstatic-src.vocagame.com%2Fvocagame%2FSTEAM%20((.webp&w=3840&q=75",
  "Steam Key": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/593110/capsule_616x353.jpg"
};

export const GameDetailPage = ({ gameName, onBack, onProductSelect }: GameDetailProps) => {
  const products = GAME_PRODUCTS[gameName] || [];

  const handleBuy = (product: ProductItem) => {
    onProductSelect({
      name: product.name,
      price: product.price,
      gameName: gameName
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Kembali ke Beranda</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Game Info Sidebar */}
        <div className="lg:col-span-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 sticky top-24"
          >
            <div className="aspect-video rounded-2xl overflow-hidden mb-6">
              <img 
                src={GAME_IMAGES[gameName] || `https://images.ctfassets.net/4cd45et68cgf/6wHlMkLFTfKk3cQrTYnVLL/db092ceae27e7ddf5fedde338f9d9503/Netflix_Banner.png`} 
                alt={gameName}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl font-display font-bold mb-4">{gameName}</h1>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Top up {gameName} termurah, tercepat, dan terpercaya hanya di HUAT SHOP. 
              Proses otomatis 1-3 menit masuk ke akun Anda.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <ShieldCheck className="h-5 w-5 text-emerald-500" />
                <span>Terjamin Aman & Legal</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Clock className="h-5 w-5 text-blue-500" />
                <span>Proses 1-3 Menit</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Zap className="h-5 w-5 text-amber-500" />
                <span>Layanan 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Pilih Nominal</h2>
            <div className="h-1 w-20 bg-brand-red rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleBuy(product)}
                className="glass-card p-4 cursor-pointer hover:border-brand-red/50 transition-all group flex flex-col"
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-3 bg-white/5">
                   <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-sm font-bold mb-1 line-clamp-2 flex-1">{product.name}</h3>
                <p className="text-brand-red font-display font-bold text-base">
                  Rp {product.price.toLocaleString('id-ID')}
                </p>
                <div className="mt-3 w-full py-2 bg-white/5 group-hover:bg-brand-red rounded-lg text-[10px] md:text-xs font-bold text-center transition-all">
                  BELI SEKARANG
                </div>
              </motion.div>
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-20 glass-card">
              <p className="text-gray-500">Produk belum tersedia untuk kategori ini.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
