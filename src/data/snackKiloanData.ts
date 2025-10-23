/**
 * Data Produk Snack Kiloan - Toko Lezat
 * 
 * File ini berisi data lengkap untuk 32 produk kategori Snack Kiloan
 * dengan harga untuk 3 ukuran: 1/4kg, 1/2kg, dan 1kg
 * 
 * Cara update:
 * 1. Untuk menambah produk baru, tambahkan objek baru ke array snackKiloanProducts
 * 2. Untuk update harga, edit nilai di weightOptions
 * 3. Untuk update gambar, ganti path di property image
 */

// Import gambar produk snack kiloan
import planetNanas from "@/assets/image/SNACK KILOAN/PLANET NANAS KELINCI.jpg";
import kueKacang from "@/assets/image/SNACK KILOAN/KUE KACANG KELINCI.jpg";
import nougatKopi from "@/assets/image/SNACK KILOAN/NOUGAT KOPI KELINCI.jpg";
import coklatKacang from "@/assets/image/SNACK KILOAN/COKLAT KACANG KELINCI.jpg";
import lidahKucingCoklat from "@/assets/image/SNACK KILOAN/LIDAH KUCING COKLAT.jpg";
import susDoubleChoco from "@/assets/image/SNACK KILOAN/SUS DOUBLE CHOCO SARIKAYA.jpg";
import lidahKucingZebra from "@/assets/image/SNACK KILOAN/LIDAH KUCING ZEBRA SM.jpg";
import saguKeju from "@/assets/image/SNACK KILOAN/SAGU KEJU ASTON.jpg";
import lidahKucingPalmes from "@/assets/image/SNACK KILOAN/LIDAH KUCING PALMES.jpg";
import susCoklatSarikaya from "@/assets/image/SNACK KILOAN/SUS COKLAT SARIKAYA.jpg";
import ekadoSarikaya from "@/assets/image/SNACK KILOAN/EKADO SARIKAYA.jpg";
import pastelAbon from "@/assets/image/SNACK KILOAN/PASTEL ABON SARIKAYA.jpg";
import pastelUdang from "@/assets/image/SNACK KILOAN/PASTEL UDANG SARIKAYA.jpg";
import pangsitUdang from "@/assets/image/SNACK KILOAN/PANGSIT UDANG SARIKAYA.jpg";
import samosaManis from "@/assets/image/SNACK KILOAN/SAMOSA MANIS PEDAS SARIKAYA.jpg";
import sumpiaSms from "@/assets/image/SNACK KILOAN/SUMPIA SMS SARIKAYA.jpg";
import sumpiaAyam from "@/assets/image/SNACK KILOAN/SUMPIA AYAM SARIKAYA.jpg";
import sumpiaUdang from "@/assets/image/SNACK KILOAN/SUMPIA UDANG SARIKAYA.jpg";
import sigelis from "@/assets/image/SNACK KILOAN/SIGELIS SARIKAYA.jpg";
import jamurKancing from "@/assets/image/SNACK KILOAN/JAMUR KANCING DIENG.jpg";
import empingKrepus from "@/assets/image/SNACK KILOAN/EMPING KREPUS.jpg";
import empingManis from "@/assets/image/SNACK KILOAN/EMPING MANIS.jpg";
import empingKletuk from "@/assets/image/SNACK KILOAN/EMPING KLETUK ASIN.jpg";
import uburUbur from "@/assets/image/SNACK KILOAN/UBUR UBUR AYAM.jpg";
import susMelati from "@/assets/image/SNACK KILOAN/SUS MELATI.jpg";
import almondCheese from "@/assets/image/SNACK KILOAN/ALMOND CHEESE KELINCI.jpg";
import nastarCapit from "@/assets/image/SNACK KILOAN/NASTAR CAPIT KELINCI.jpg";
import susPanjang from "@/assets/image/SNACK KILOAN/SUS PANJANG GOSYEN.jpg";
import susCoklatDuo from "@/assets/image/SNACK KILOAN/SUS COKLAT DUO.jpg";
import eggBall from "@/assets/image/SNACK KILOAN/EGG BALL MONDE.jpg";
import susBawang from "@/assets/image/SNACK KILOAN/SUS BAWANG KELINCI.jpg";
import susBulat from "@/assets/image/SNACK KILOAN/SUS BULAT GOSYEN.jpg";

export interface SnackKiloanProduct {
  id: number;
  name: string;
  basePrice: number; // harga per kg untuk referensi
  image: string;
  description: string;
  category: "Snack Kiloan";
  weightOptions: {
    weight: number; // dalam kg
    price: number;  // harga dalam rupiah (integer)
    label: string;  // label untuk ditampilkan
  }[];
}

/**
 * Data lengkap 32 produk Snack Kiloan
 * Harga sesuai dengan data dari tabel yang diberikan
 */
export const snackKiloanProducts: SnackKiloanProduct[] = [
  {
    id: 1001,
    name: "PLANET NANAS KELINCI",
    basePrice: 83000,
    image: planetNanas,
    description: "Planet nanas kelinci dengan rasa manis dan tekstur renyah yang khas",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 20750, label: "1/4 kg" },
      { weight: 0.5, price: 41500, label: "1/2 kg" },
      { weight: 1, price: 83000, label: "1 kg" }
    ]
  },
  {
    id: 1002,
    name: "KUE KACANG KELINCI",
    basePrice: 62000,
    image: kueKacang,
    description: "Kue kacang kelinci gurih dan renyah, cocok untuk teman minum teh",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 15500, label: "1/4 kg" },
      { weight: 0.5, price: 31000, label: "1/2 kg" },
      { weight: 1, price: 62000, label: "1 kg" }
    ]
  },
  {
    id: 1003,
    name: "NOUGAT KOPI KELINCI",
    basePrice: 105000,
    image: nougatKopi,
    description: "Nougat kopi kelinci dengan perpaduan rasa kopi yang nikmat dan tekstur lembut",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 26250, label: "1/4 kg" },
      { weight: 0.5, price: 52500, label: "1/2 kg" },
      { weight: 1, price: 105000, label: "1 kg" }
    ]
  },
  {
    id: 1004,
    name: "COKLAT KACANG KELINCI",
    basePrice: 100000,
    image: coklatKacang,
    description: "Coklat kacang kelinci dengan kombinasi coklat manis dan kacang renyah",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 25000, label: "1/4 kg" },
      { weight: 0.5, price: 50000, label: "1/2 kg" },
      { weight: 1, price: 100000, label: "1 kg" }
    ]
  },
  {
    id: 1005,
    name: "LIDAH KUCING COKLAT",
    basePrice: 89000,
    image: lidahKucingCoklat,
    description: "Lidah kucing coklat yang renyah dan lezat, favorit untuk cemilan",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 22250, label: "1/4 kg" },
      { weight: 0.5, price: 44500, label: "1/2 kg" },
      { weight: 1, price: 89000, label: "1 kg" }
    ]
  },
  {
    id: 1006,
    name: "SUS DOUBLE CHOCO SARIKAYA",
    basePrice: 76000,
    image: susDoubleChoco,
    description: "Sus double choco dengan isian sarikaya yang lembut dan manis",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 19000, label: "1/4 kg" },
      { weight: 0.5, price: 38000, label: "1/2 kg" },
      { weight: 1, price: 76000, label: "1 kg" }
    ]
  },
  {
    id: 1007,
    name: "LIDAH KUCING ZEBRA SM",
    basePrice: 76000,
    image: lidahKucingZebra,
    description: "Lidah kucing zebra dengan motif zebra yang unik dan rasa yang nikmat",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 19000, label: "1/4 kg" },
      { weight: 0.5, price: 38000, label: "1/2 kg" },
      { weight: 1, price: 76000, label: "1 kg" }
    ]
  },
  {
    id: 1008,
    name: "SAGU KEJU ASTON",
    basePrice: 75500,
    image: saguKeju,
    description: "Sagu keju Aston yang gurih dan lembut dengan rasa keju yang kuat",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 18875, label: "1/4 kg" },
      { weight: 0.5, price: 37750, label: "1/2 kg" },
      { weight: 1, price: 75500, label: "1 kg" }
    ]
  },
  {
    id: 1009,
    name: "LIDAH KUCING PALMES",
    basePrice: 105500,
    image: lidahKucingPalmes,
    description: "Lidah kucing Palmes premium dengan tekstur renyah dan rasa mentega",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 26375, label: "1/4 kg" },
      { weight: 0.5, price: 52750, label: "1/2 kg" },
      { weight: 1, price: 105500, label: "1 kg" }
    ]
  },
  {
    id: 1010,
    name: "SUS COKLAT SARIKAYA",
    basePrice: 70500,
    image: susCoklatSarikaya,
    description: "Sus coklat dengan isian sarikaya yang manis dan lembut",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 17625, label: "1/4 kg" },
      { weight: 0.5, price: 35250, label: "1/2 kg" },
      { weight: 1, price: 70500, label: "1 kg" }
    ]
  },
  {
    id: 1011,
    name: "EKADO SARIKAYA",
    basePrice: 105000,
    image: ekadoSarikaya,
    description: "Ekado sarikaya dengan kulit renyah dan isian sarikaya yang lezat",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 26250, label: "1/4 kg" },
      { weight: 0.5, price: 52500, label: "1/2 kg" },
      { weight: 1, price: 105000, label: "1 kg" }
    ]
  },
  {
    id: 1012,
    name: "PASTEL ABON SARIKAYA",
    basePrice: 98000,
    image: pastelAbon,
    description: "Pastel abon dengan isian abon gurih dan sarikaya manis",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 24500, label: "1/4 kg" },
      { weight: 0.5, price: 49000, label: "1/2 kg" },
      { weight: 1, price: 98000, label: "1 kg" }
    ]
  },
  {
    id: 1013,
    name: "PASTEL UDANG SARIKAYA",
    basePrice: 77500,
    image: pastelUdang,
    description: "Pastel udang dengan isian udang segar dan sarikaya",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 19375, label: "1/4 kg" },
      { weight: 0.5, price: 38750, label: "1/2 kg" },
      { weight: 1, price: 77500, label: "1 kg" }
    ]
  },
  {
    id: 1014,
    name: "PANGSIT UDANG SARIKAYA",
    basePrice: 65000,
    image: pangsitUdang,
    description: "Pangsit udang crispy dengan isian udang dan sarikaya",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 16250, label: "1/4 kg" },
      { weight: 0.5, price: 32500, label: "1/2 kg" },
      { weight: 1, price: 65000, label: "1 kg" }
    ]
  },
  {
    id: 1015,
    name: "SAMOSA MANIS PEDAS SARIKAYA",
    basePrice: 99000,
    image: samosaManis,
    description: "Samosa dengan kombinasi rasa manis dan pedas yang unik",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 24750, label: "1/4 kg" },
      { weight: 0.5, price: 49500, label: "1/2 kg" },
      { weight: 1, price: 99000, label: "1 kg" }
    ]
  },
  {
    id: 1016,
    name: "SUMPIA SMS SARIKAYA",
    basePrice: 92000,
    image: sumpiaSms,
    description: "Sumpia SMS dengan isian rebung dan daging yang gurih",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 23000, label: "1/4 kg" },
      { weight: 0.5, price: 46000, label: "1/2 kg" },
      { weight: 1, price: 92000, label: "1 kg" }
    ]
  },
  {
    id: 1017,
    name: "SUMPIA AYAM SARIKAYA",
    basePrice: 93000,
    image: sumpiaAyam,
    description: "Sumpia dengan isian ayam yang gurih dan lezat",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 23250, label: "1/4 kg" },
      { weight: 0.5, price: 46500, label: "1/2 kg" },
      { weight: 1, price: 93000, label: "1 kg" }
    ]
  },
  {
    id: 1018,
    name: "SUMPIA UDANG SARIKAYA",
    basePrice: 79000,
    image: sumpiaUdang,
    description: "Sumpia dengan isian udang segar yang crispy",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 19750, label: "1/4 kg" },
      { weight: 0.5, price: 39500, label: "1/2 kg" },
      { weight: 1, price: 79000, label: "1 kg" }
    ]
  },
  {
    id: 1019,
    name: "SIGELIS SARIKAYA",
    basePrice: 97500,
    image: sigelis,
    description: "Sigelis sarikaya dengan tekstur renyah dan isian manis",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 24375, label: "1/4 kg" },
      { weight: 0.5, price: 48750, label: "1/2 kg" },
      { weight: 1, price: 97500, label: "1 kg" }
    ]
  },
  {
    id: 1020,
    name: "JAMUR KANCING DIENG",
    basePrice: 180000,
    image: jamurKancing,
    description: "Jamur kancing Dieng crispy dengan bumbu rempah yang gurih",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 45000, label: "1/4 kg" },
      { weight: 0.5, price: 90000, label: "1/2 kg" },
      { weight: 1, price: 180000, label: "1 kg" }
    ]
  },
  {
    id: 1021,
    name: "EMPING KREPUS",
    basePrice: 135000,
    image: empingKrepus,
    description: "Emping krepus tradisional yang renyah dan gurih",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 33750, label: "1/4 kg" },
      { weight: 0.5, price: 67500, label: "1/2 kg" },
      { weight: 1, price: 135000, label: "1 kg" }
    ]
  },
  {
    id: 1022,
    name: "EMPING MANIS",
    basePrice: 85000,
    image: empingManis,
    description: "Emping manis dengan rasa manis yang pas dan tekstur renyah",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 21250, label: "1/4 kg" },
      { weight: 0.5, price: 42500, label: "1/2 kg" },
      { weight: 1, price: 85000, label: "1 kg" }
    ]
  },
  {
    id: 1023,
    name: "EMPING KLETUK ASIN",
    basePrice: 107000,
    image: empingKletuk,
    description: "Emping kletuk asin dengan rasa gurih yang khas",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 26750, label: "1/4 kg" },
      { weight: 0.5, price: 53500, label: "1/2 kg" },
      { weight: 1, price: 107000, label: "1 kg" }
    ]
  },
  {
    id: 1024,
    name: "UBUR UBUR AYAM",
    basePrice: 81000,
    image: uburUbur,
    description: "Kerupuk ubur-ubur dengan rasa ayam yang gurih",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 20250, label: "1/4 kg" },
      { weight: 0.5, price: 40500, label: "1/2 kg" },
      { weight: 1, price: 81000, label: "1 kg" }
    ]
  },
  {
    id: 1025,
    name: "SUS MELATI",
    basePrice: 98000,
    image: susMelati,
    description: "Sus melati dengan aroma melati yang harum dan rasa yang manis",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 24500, label: "1/4 kg" },
      { weight: 0.5, price: 49000, label: "1/2 kg" },
      { weight: 1, price: 98000, label: "1 kg" }
    ]
  },
  {
    id: 1026,
    name: "ALMOND CHEESE KELINCI",
    basePrice: 95000,
    image: almondCheese,
    description: "Almond cheese kelinci dengan perpaduan rasa almond dan keju",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 23750, label: "1/4 kg" },
      { weight: 0.5, price: 47500, label: "1/2 kg" },
      { weight: 1, price: 95000, label: "1 kg" }
    ]
  },
  {
    id: 1027,
    name: "NASTAR CAPIT KELINCI",
    basePrice: 83500,
    image: nastarCapit,
    description: "Nastar capit dengan isian nanas yang manis dan tekstur renyah",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 20875, label: "1/4 kg" },
      { weight: 0.5, price: 41750, label: "1/2 kg" },
      { weight: 1, price: 83500, label: "1 kg" }
    ]
  },
  {
    id: 1028,
    name: "SUS PANJANG GOSYEN",
    basePrice: 70000,
    image: susPanjang,
    description: "Sus panjang Gosyen dengan krim lembut dan tekstur renyah",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 17500, label: "1/4 kg" },
      { weight: 0.5, price: 35000, label: "1/2 kg" },
      { weight: 1, price: 70000, label: "1 kg" }
    ]
  },
  {
    id: 1029,
    name: "SUS COKLAT DUO",
    basePrice: 64000,
    image: susCoklatDuo,
    description: "Sus coklat duo dengan dua layer coklat yang lezat",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 16000, label: "1/4 kg" },
      { weight: 0.5, price: 32000, label: "1/2 kg" },
      { weight: 1, price: 64000, label: "1 kg" }
    ]
  },
  {
    id: 1030,
    name: "EGG BALL MONDE",
    basePrice: 68500,
    image: eggBall,
    description: "Egg ball Monde dengan rasa telur yang khas dan tekstur renyah",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 17125, label: "1/4 kg" },
      { weight: 0.5, price: 34250, label: "1/2 kg" },
      { weight: 1, price: 68500, label: "1 kg" }
    ]
  },
  {
    id: 1031,
    name: "SUS BAWANG KELINCI",
    basePrice: 64000,
    image: susBawang,
    description: "Sus bawang kelinci dengan rasa bawang yang gurih",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 16000, label: "1/4 kg" },
      { weight: 0.5, price: 32000, label: "1/2 kg" },
      { weight: 1, price: 64000, label: "1 kg" }
    ]
  },
  {
    id: 1032,
    name: "SUS BULAT GOSYEN",
    basePrice: 72000,
    image: susBulat,
    description: "Sus bulat Gosyen dengan krim manis dan tekstur lembut",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 18000, label: "1/4 kg" },
      { weight: 0.5, price: 36000, label: "1/2 kg" },
      { weight: 1, price: 72000, label: "1 kg" }
    ]
  }
];

// Debug: Log jumlah produk saat module di-load
console.log('📦 snackKiloanData loaded:', snackKiloanProducts.length, 'products');
console.log('📦 First product:', snackKiloanProducts[0]?.name);
console.log('📦 Last product:', snackKiloanProducts[snackKiloanProducts.length - 1]?.name);

/**
 * Helper function untuk format harga ke Rupiah
 */
export const formatRupiah = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
};

/**
 * Helper function untuk mencari produk berdasarkan ID
 */
export const getProductById = (id: number): SnackKiloanProduct | undefined => {
  return snackKiloanProducts.find(product => product.id === id);
};

/**
 * Helper function untuk mencari produk berdasarkan nama (search)
 */
export const searchProducts = (query: string): SnackKiloanProduct[] => {
  const lowerQuery = query.toLowerCase();
  return snackKiloanProducts.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery)
  );
};
