export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}

export const CATEGORIES = [
  "Mobile",
  "Voucher",
  "PC Game",
  "Streaming",
];

export const PRODUCTS: Product[] = [
  {
    id: "ml-1",
    name: "Mobile Legends",
    category: "Mobile",
    price: 15000,
    rating: 4.9,
    image: "https://assets-prd.ignimgs.com/2023/09/30/mobilelegends-1696089976653.jpg?crop=1%3A1%2Csmart&format=jpg&auto=webp&quality=80",
  },
  {
    id: "ff-1",
    name: "Free Fire",
    category: "Mobile",
    price: 10000,
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmPlTG0ai5bVA3B1oDX_IxUKAik2EYZrLTQ&s",
  },
  {
    id: "val-1",
    name: "Valorant Points",
    category: "PC Game",
    price: 50000,
    rating: 4.9,
    image: "https://assets.xboxservices.com/assets/36/b5/36b52fa8-e71b-4435-888a-cecb98d3876a.jpg?n=153142244433_GLP-Page-Hero-0_1083x1222_02.jpg",
  },
  {
    id: "genshin-1",
    name: "Genshin Impact",
    category: "Mobile",
    price: 16000,
    rating: 4.9,
    image: "https://mmoculture.com/wp-content/uploads/2019/08/Genshin-Impact-image.jpg",
  },
  {
    id: "steam-1",
    name: "Steam Wallet IDR",
    category: "Voucher",
    price: 12000,
    rating: 4.7,
    image: "https://i0.wp.com/ishakoktasagita.com/wp-content/uploads/2025/12/steam-gift-card-200-usd-file-12138c27.jpg.jpg?resize=590%2C336&ssl=1",
  },
  {
    id: "roblox-1",
    name: "Roblox Robux",
    category: "Mobile",
    price: 25000,
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3WPRHuHxTouFCVC-id5ZaHBjIKHSoPXb4Q&s",
  },
  {
    id: "pubg-1",
    name: "PUBG Mobile",
    category: "Mobile",
    price: 14000,
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq96PKMoapoQ92CoSH_u5VKeVfjVm3PtveHA&s",
  },
  {
    id: "netflix-1",
    name: "Netflix Premium",
    category: "Streaming",
    price: 35000,
    rating: 4.9,
    image: "https://idseducation.com/wp-content/uploads/2020/11/26-Nov-Netfilx-dan-Kemendikbud-Jalin-Kerjasama-untuk-Membuat-Film-Nasional.jpg",
  },
];

export const RANDOM_KEYS = [
  {
    id: "rk-1",
    name: "Random Steam Key Bronze",
    price: 5000,
    rating: 4.2,
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/593110/capsule_616x353.jpg",
  },
  {
    id: "rk-2",
    name: "Random Steam Key Silver",
    price: 15000,
    rating: 4.5,
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/593110/capsule_616x353.jpg",
  },
  {
    id: "rk-3",
    name: "Random Steam Key Gold",
    price: 50000,
    rating: 4.8,
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/593110/capsule_616x353.jpg",
  },
];

export const PROMOS = [
  {
    id: "p1",
    title: "Diskon 25% Mobile Legends",
    subtitle: "Top up Diamond MLBB sekarang lebih hemat!",
    image: "https://a-static.besthdwallpaper.com/slumber-party-nana-mobile-legends-ml-wallpaper-1920x1080-67966_48.jpg",
    color: "from-rose-600 to-rose-900",
  },
  {
    id: "p2",
    title: "Voucher Steam Sale 10%",
    subtitle: "Beli game impianmu di Steam dengan harga miring.",
    image: "https://gamespot.com/a/uploads/original/123/1239113/3251464-saa.jpg",
    color: "from-blue-600 to-blue-900",
  },
  {
    id: "p3",
    title: "Pre-Order Game Terbaru",
    subtitle: "Dapatkan item eksklusif dengan pre-order di HUAT SHOP.",
    image: "https://cdn.mos.cms.futurecdn.net/FCePTzjyCLSCKwbj8393MT.jpg",
    color: "from-emerald-600 to-emerald-900",
  },
];
