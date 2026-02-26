import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IconMenu } from './components/IconMenu';
import { ProductSection } from './components/ProductSection';
import { RandomKeySection } from './components/RandomKeySection';
import { Footer } from './components/Footer';
import { GameDetailPage } from './components/GameDetailPage';
import { PaymentPage } from './components/PaymentPage';
import { InfoPage } from './components/InfoPage';
import { CartPage } from './components/CartPage';
import { LoginModal } from './components/LoginModal';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState<'home' | 'detail' | 'payment' | 'info' | 'cart'>('home');
  const [selectedGame, setSelectedGame] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; price: number; gameName: string } | null>(null);
  const [infoTitle, setInfoTitle] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginModalMode, setLoginModalMode] = useState<'login' | 'register'>('login');
  const [user, setUser] = useState<any>(null);

  // Check if user is logged in on mount
  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        }
      } catch (error) {
        console.error("Check user error:", error);
      }
    };
    checkUser();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setUser(null);
      setView('home');
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleGameSelect = (gameName: string) => {
    setSelectedGame(gameName);
    setView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductSelect = (product: { name: string; price: number; gameName: string }) => {
    setSelectedProduct(product);
    setView('payment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInfoClick = (title: string) => {
    setInfoTitle(title);
    setView('info');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLoginModal = (mode: 'login' | 'register') => {
    setLoginModalMode(mode);
    setIsLoginModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col red-gradient-bg">
      <Header 
        onSearch={setSearchQuery} 
        onLoginClick={openLoginModal}
        onHomeClick={() => setView('home')}
        onSelectGame={handleGameSelect}
        onCartClick={() => setView('cart')}
        user={user}
        onLogout={handleLogout}
      />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Hero />
              <IconMenu onSelect={handleGameSelect} />
              <ProductSection searchQuery={searchQuery} onSelect={handleGameSelect} />
              <RandomKeySection onSelect={handleGameSelect} />
            </motion.div>
          ) : view === 'detail' ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GameDetailPage 
                gameName={selectedGame} 
                onBack={() => setView('home')} 
                onProductSelect={handleProductSelect}
              />
            </motion.div>
          ) : view === 'payment' ? (
            <motion.div
              key="payment"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {selectedProduct && (
                <PaymentPage 
                  product={selectedProduct} 
                  onBack={() => setView('detail')} 
                />
              )}
            </motion.div>
          ) : view === 'cart' ? (
            <motion.div
              key="cart"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <CartPage 
                onBack={() => setView('home')} 
                onCheckout={handleProductSelect}
              />
            </motion.div>
          ) : (
            <motion.div
              key="info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <InfoPage 
                title={infoTitle} 
                onBack={() => setView('home')} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onInfoClick={handleInfoClick} />

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        initialMode={loginModalMode}
        onLoginSuccess={(userData) => setUser(userData)}
      />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6285159233349"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-transform"
      >
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z" />
        </svg>
      </a>
    </div>
  );
}
