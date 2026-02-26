import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Copy, CheckCircle2, CreditCard, ShieldCheck } from 'lucide-react';

interface PaymentPageProps {
  product: {
    name: string;
    price: number;
    gameName: string;
  };
  onBack: () => void;
}

export const PaymentPage = ({ product, onBack }: PaymentPageProps) => {
  const [copied, setCopied] = React.useState(false);
  const [uniqueCode, setUniqueCode] = React.useState(() => Math.floor(Math.random() * 900) + 100);

  const generateNewCode = () => {
    setUniqueCode(Math.floor(Math.random() * 900) + 100);
  };

  const totalPrice = product.price + uniqueCode;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirm = () => {
    const message = `Halo HUAT SHOP, saya sudah transfer untuk pembelian ${product.name} (${product.gameName}) seharga Rp ${totalPrice.toLocaleString('id-ID')} (termasuk kode unik ${uniqueCode}). Berikut bukti transfernya:`;
    const whatsappUrl = `https://wa.me/6285159233349?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Kembali</span>
      </button>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card overflow-hidden"
      >
        <div className="bg-brand-red p-6 text-white text-center">
          <h1 className="text-2xl font-display font-bold">Instruksi Pembayaran</h1>
          <p className="opacity-80 text-sm mt-1">Selesaikan pembayaran Anda untuk memproses pesanan</p>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          {/* Order Summary */}
          <div className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Pesanan Anda</p>
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-sm text-gray-500">{product.gameName}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Harga Produk</p>
                <p className="text-lg font-bold">
                  Rp {product.price.toLocaleString('id-ID')}
                </p>
              </div>
            </div>

            <div className="h-px bg-white/5"></div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Kode Unik</p>
                <button 
                  onClick={generateNewCode}
                  className="p-1 hover:bg-white/10 rounded-full transition-colors text-brand-red"
                  title="Ganti Kode Unik"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
                </button>
              </div>
              <p className="text-lg font-bold text-emerald-500">
                + {uniqueCode}
              </p>
            </div>

            <div className="h-px bg-white/5"></div>

            <div className="flex justify-between items-center pt-2">
              <p className="text-sm font-bold uppercase tracking-wider text-gray-300">Total Bayar</p>
              <div className="text-right">
                <p className="text-3xl font-display font-bold text-brand-red">
                  Rp {totalPrice.toLocaleString('id-ID')}
                </p>
                <p className="text-[10px] text-gray-500 mt-1 italic">Mohon transfer sesuai nominal hingga 3 digit terakhir</p>
              </div>
            </div>
          </div>

          {/* Bank Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <CreditCard className="h-5 w-5 text-brand-red" />
              <h3 className="font-bold">Transfer Bank (Manual)</h3>
            </div>
            
            <div className="p-6 bg-brand-dark rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <CreditCard className="h-16 w-16" />
              </div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Nama Bank</p>
                    <p className="text-xl font-bold">BCA (Bank Central Asia)</p>
                  </div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg" alt="BCA" className="h-8 bg-white p-1 rounded" />
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold mb-1">Nomor Rekening</p>
                  <div className="flex items-center space-x-3">
                    <p className="text-2xl font-mono font-bold tracking-wider text-white">8890617353</p>
                    <button 
                      onClick={() => copyToClipboard("8890617353")}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors text-brand-red"
                    >
                      {copied ? <CheckCircle2 className="h-5 w-5 text-emerald-500" /> : <Copy className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold mb-1">Atas Nama</p>
                  <p className="text-xl font-bold">ARDJOKI</p>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl space-y-2">
            <div className="flex items-center space-x-2 text-amber-500">
              <ShieldCheck className="h-4 w-4" />
              <p className="text-xs font-bold uppercase">Penting</p>
            </div>
            <ul className="text-xs text-gray-300 space-y-1 list-disc list-inside">
              <li>Pastikan nominal transfer sesuai dengan total bayar.</li>
              <li>Simpan bukti transfer Anda.</li>
              <li>Klik tombol konfirmasi di bawah untuk mengirim bukti transfer via WhatsApp.</li>
            </ul>
          </div>

          <button 
            onClick={handleConfirm}
            className="w-full bg-brand-red hover:bg-rose-700 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-rose-500/20 transition-all flex items-center justify-center space-x-3"
          >
            <span>Konfirmasi Pembayaran</span>
            <ArrowLeft className="h-5 w-5 rotate-180" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
