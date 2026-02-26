import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

interface CartPageProps {
  onBack: () => void;
  onCheckout: (product: { name: string; price: number; gameName: string }) => void;
}

export const CartPage = ({ onBack, onCheckout }: CartPageProps) => {
  // Mock cart data - in a real app this would come from state/context
  const [cartItems, setCartItems] = React.useState([
    { id: '1', name: '86 Diamonds', price: 19500, gameName: 'Mobile Legends', quantity: 1 },
  ]);

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Kembali Belanja</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-display font-bold flex items-center gap-3">
              <ShoppingBag className="h-6 w-6 text-brand-red" />
              Keranjang Belanja
            </h1>
            <span className="text-sm text-gray-400">{cartItems.length} Item</span>
          </div>

          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card p-4 flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <ShoppingBag className="h-8 w-8 text-gray-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-xs text-gray-500">{item.gameName}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-brand-red">Rp {item.price.toLocaleString('id-ID')}</p>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="text-gray-500 hover:text-rose-500 transition-colors mt-1"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="glass-card p-12 text-center">
              <ShoppingBag className="h-16 w-16 text-gray-700 mx-auto mb-4" />
              <p className="text-gray-400">Keranjang Anda masih kosong.</p>
              <button 
                onClick={onBack}
                className="mt-6 text-brand-red font-bold hover:underline"
              >
                Mulai Belanja Sekarang
              </button>
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="glass-card p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-6">Ringkasan Pesanan</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Subtotal</span>
                <span>Rp {total.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Biaya Layanan</span>
                <span className="text-emerald-500">Gratis</span>
              </div>
              <div className="h-px bg-white/5"></div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-brand-red">Rp {total.toLocaleString('id-ID')}</span>
              </div>
            </div>

            <button 
              disabled={cartItems.length === 0}
              onClick={() => cartItems.length > 0 && onCheckout(cartItems[0])}
              className="w-full bg-brand-red hover:bg-rose-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
            >
              <span>Checkout</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
