import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface InfoPageProps {
  title: string;
  onBack: () => void;
}

export const InfoPage = ({ title, onBack }: InfoPageProps) => {
  const getContent = () => {
    switch (title) {
      case "Tentang Kami":
        return (
          <div className="space-y-6">
            <p>HUAT SHOP adalah platform penyedia layanan top up game dan voucher digital terkemuka di Indonesia. Berdiri sejak tahun 2024, kami telah melayani ribuan transaksi setiap harinya dengan tingkat kepuasan pelanggan yang tinggi.</p>
            <p>Misi kami adalah memberikan kemudahan bagi para gamer untuk mendapatkan kebutuhan gaming mereka dengan harga yang kompetitif dan proses yang instan.</p>
          </div>
        );
      case "Syarat & Ketentuan":
        return (
          <div className="space-y-6">
            <ul className="list-decimal list-inside space-y-4">
              <li>Pengguna wajib memberikan data ID game yang benar. Kesalahan input ID bukan tanggung jawab HUAT SHOP.</li>
              <li>Pembayaran harus dilakukan sesuai dengan nominal yang tertera (termasuk kode unik).</li>
              <li>Proses pengisian dilakukan secara otomatis setelah pembayaran terverifikasi.</li>
              <li>Segala bentuk penipuan akan dilaporkan kepada pihak berwajib.</li>
            </ul>
          </div>
        );
      case "Kebijakan Privasi":
        return (
          <div className="space-y-6">
            <p>Kami sangat menghargai privasi Anda. Data yang Anda berikan (seperti ID Game dan Nomor WhatsApp) hanya digunakan untuk keperluan transaksi dan pengiriman pesanan.</p>
            <p>Kami tidak akan pernah membagikan data pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali diwajibkan oleh hukum.</p>
          </div>
        );
      case "Hubungi Kami":
        return (
          <div className="space-y-6">
            <p>Butuh bantuan? Tim Customer Service kami siap melayani Anda setiap hari (24/7).</p>
            <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
              <p className="font-bold text-emerald-500">WhatsApp CS:</p>
              <p className="text-2xl font-bold">+62 851-5923-3349</p>
            </div>
            <p>Email: support@huatshop.com</p>
          </div>
        );
      case "Cara Top Up":
        return (
          <div className="space-y-6">
            <ol className="list-decimal list-inside space-y-4">
              <li>Pilih game atau voucher yang Anda inginkan di halaman utama.</li>
              <li>Pilih nominal yang tersedia.</li>
              <li>Anda akan diarahkan ke halaman pembayaran.</li>
              <li>Transfer sesuai nominal (termasuk kode unik) ke rekening BCA yang tertera.</li>
              <li>Klik tombol "Konfirmasi Pembayaran" untuk mengirim bukti via WhatsApp.</li>
              <li>Pesanan Anda akan diproses dalam 1-3 menit.</li>
            </ol>
          </div>
        );
      case "Metode Pembayaran":
        return (
          <div className="space-y-6">
            <p>Saat ini kami melayani pembayaran melalui:</p>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
              <h4 className="font-bold mb-2">Transfer Bank Manual</h4>
              <p>Bank BCA (Bank Central Asia)</p>
              <p>No. Rekening: 8890617353</p>
              <p>A/N: ARDJOKI</p>
            </div>
            <p className="text-sm italic text-gray-400">*Metode pembayaran lainnya akan segera hadir.</p>
          </div>
        );
      case "Lacak Pesanan":
        return (
          <div className="space-y-6">
            <p>Untuk melacak status pesanan Anda, silakan hubungi Customer Service kami melalui WhatsApp dengan menyertakan:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>ID Game</li>
              <li>Nominal Top Up</li>
              <li>Bukti Transfer</li>
            </ul>
            <p>Tim kami akan segera melakukan pengecekan status transaksi Anda.</p>
          </div>
        );
      case "FAQ":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="font-bold mb-1">Berapa lama proses top up?</p>
                <p className="text-sm text-gray-400">Rata-rata proses memakan waktu 1-3 menit setelah pembayaran dikonfirmasi.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="font-bold mb-1">Apakah layanan ini legal?</p>
                <p className="text-sm text-gray-400">Ya, semua produk kami bersumber dari distributor resmi dan 100% legal.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="font-bold mb-1">Bagaimana jika salah input ID?</p>
                <p className="text-sm text-gray-400">Mohon maaf, kesalahan input ID oleh pembeli tidak dapat di-refund atau dibatalkan.</p>
              </div>
            </div>
          </div>
        );
      default:
        return <p>Konten sedang dalam tahap pembaruan.</p>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
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
        className="glass-card p-8 md:p-12"
      >
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-8 text-brand-red">{title}</h1>
        
        <div className="prose prose-invert max-w-none text-gray-300">
          {getContent()}

          <p className="pt-8 mt-12 border-t border-white/5 text-sm italic text-gray-500">
            Terima kasih telah mempercayai HUAT SHOP sebagai mitra gaming Anda.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
