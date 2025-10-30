/**
 * Data Produk Permen & Manisan - Toko Lezat
 * 
 * File ini berisi data lengkap untuk 20 produk kategori Permen & Manisan
 * dengan informasi nama, harga, ukuran, dan gambar produk
 * 
 * Cara update:
 * 1. Untuk menambah produk baru, tambahkan objek baru ke array permenManisanProducts
 * 2. Untuk update harga, edit nilai di property price
 * 3. Untuk update ukuran, edit nilai di property weight
 * 4. Untuk update gambar, ganti path di property image
 * 
 * PENTING: Pastikan setelah update:
 * - Nama produk sesuai dengan label/kemasan
 * - Harga valid (tidak 0 atau negatif)
 * - Ukuran/berat tercantum dengan benar
 * - Path gambar sesuai dengan file yang ada di folder assets
 * - Kategori tetap "Permen & Manisan"
 */

// Import gambar produk Permen & Manisan
import jellyInacoMika from "@/assets/image/PERMEN & MANISAN/JELLY INACO MIKA.jpg";
import permenJaheHotTpl from "@/assets/image/PERMEN & MANISAN/PERMEN JAHE HOT TPL.jpg";
import palaHijauTpl from "@/assets/image/PERMEN & MANISAN/PALA HIJAU TPL.jpg";
import palaPutihTpl from "@/assets/image/PERMEN & MANISAN/PALA PUTIH TPL.jpg";
import permenAsemTpl from "@/assets/image/PERMEN & MANISAN/PERMEN ASEM TPL.jpg";
import permenSirsakTpl from "@/assets/image/PERMEN & MANISAN/PERMEN SIRSAK TPL.jpg";
import permenNanasTpl from "@/assets/image/PERMEN & MANISAN/PERMEN NANAS TPL.jpg";
import permenManggaTpl from "@/assets/image/PERMEN & MANISAN/PERMEN MANGGA TPL.jpg";
import manisanManggaTpl from "@/assets/image/PERMEN & MANISAN/MANISAN MANGGA TPL.jpg";
import mallisuStrawberryTpl from "@/assets/image/PERMEN & MANISAN/MALLISU STRAWBERRY TPL.jpg";
import mallisuMelonTpl from "@/assets/image/PERMEN & MANISAN/MALLISU MELON TPL.jpg";
import satruDaunTpl from "@/assets/image/PERMEN & MANISAN/SATRU DAUN TPL.jpg";
import koyahAsemTpl from "@/assets/image/PERMEN & MANISAN/KOYAH ASEM TPL.jpg";
import goldenMiniWarnaTpl from "@/assets/image/PERMEN & MANISAN/GOLDEN MINI WARNA TPL.jpg";
import goldenMiniCoklatTpl from "@/assets/image/PERMEN & MANISAN/GOLDEN MINI COKLAT TPL.jpg";
import chocoGoldTpl from "@/assets/image/PERMEN & MANISAN/CHOCO GOLD TPL.jpg";
import permenSusuTpl from "@/assets/image/PERMEN & MANISAN/PERMEN SUSU TPL.jpg";
import coklatBolaEmasTpl from "@/assets/image/PERMEN & MANISAN/COKLAT BOLA EMAS TPL.jpg";
import jellyMalaysiaTpl from "@/assets/image/PERMEN & MANISAN/JELLY MALAYSIA TPL.jpg";
import jellyRollTpl from "@/assets/image/PERMEN & MANISAN/JELLY ROLL TPL.jpg";

export interface PermenManisanProduct {
  id: number;
  name: string;
  price: number;     // harga dalam rupiah (integer)
  image: string;
  description: string;
  category: "Permen & Manisan";
  weight: string;    // ukuran/berat produk (contoh: "730 gr", "500 gr")
}

/**
 * Data lengkap 20 produk Permen & Manisan
 * Harga dan ukuran sesuai dengan data terbaru
 * 
 * CHECKLIST SETELAH UPDATE:
 * ✅ Nama produk sesuai dengan kemasan
 * ✅ Harga valid (> 0)
 * ✅ Ukuran/berat tercantum
 * ✅ Gambar tersedia di folder assets
 * ✅ Kategori = "Permen & Manisan"
 */
export const permenManisanProducts: PermenManisanProduct[] = [
  {
    id: 2001,
    name: "JELLY INACO MIKA",
    price: 26000,
    image: jellyInacoMika,
    description: "Jelly Inaco dalam kemasan mika dengan berbagai varian rasa buah yang segar",
    category: "Permen & Manisan",
    weight: "730 gr"
  },
  {
    id: 2002,
    name: "PERMEN JAHE HOT TPL",
    price: 32000,
    image: permenJaheHotTpl,
    description: "Permen jahe hot dengan sensasi hangat dan pedas yang khas",
    category: "Permen & Manisan",
    weight: "500 gr"
  },
  {
    id: 2003,
    name: "PALA HIJAU TPL",
    price: 27000,
    image: palaHijauTpl,
    description: "Manisan pala hijau dengan rasa manis dan sedikit pedas khas pala",
    category: "Permen & Manisan",
    weight: "-"
  },
  {
    id: 2004,
    name: "PALA PUTIH TPL",
    price: 27000,
    image: palaPutihTpl,
    description: "Manisan pala putih dengan tekstur lembut dan rasa manis",
    category: "Permen & Manisan",
    weight: "-"
  },
  {
    id: 2005,
    name: "PERMEN ASEM TPL",
    price: 26500,
    image: permenAsemTpl,
    description: "Permen asem dengan rasa asam manis yang menyegarkan",
    category: "Permen & Manisan",
    weight: "328 gr"
  },
  {
    id: 2006,
    name: "PERMEN SIRSAK TPL",
    price: 26500,
    image: permenSirsakTpl,
    description: "Permen sirsak dengan rasa buah sirsak yang autentik",
    category: "Permen & Manisan",
    weight: "328 gr"
  },
  {
    id: 2007,
    name: "PERMEN NANAS TPL",
    price: 26500,
    image: permenNanasTpl,
    description: "Permen nanas dengan rasa buah nanas yang segar dan manis",
    category: "Permen & Manisan",
    weight: "328 gr"
  },
  {
    id: 2008,
    name: "PERMEN MANGGA TPL",
    price: 26500,
    image: permenManggaTpl,
    description: "Permen mangga dengan rasa buah mangga yang manis dan segar",
    category: "Permen & Manisan",
    weight: "328 gr"
  },
  {
    id: 2009,
    name: "MANISAN MANGGA TPL",
    price: 34500,
    image: manisanManggaTpl,
    description: "Manisan mangga asli dengan tekstur kenyal dan rasa manis alami",
    category: "Permen & Manisan",
    weight: "250 gr"
  },
  {
    id: 2010,
    name: "MALLISU STRAWBERRY TPL",
    price: 30500,
    image: mallisuStrawberryTpl,
    description: "Mallisu rasa strawberry dengan rasa manis dan aroma buah yang kuat",
    category: "Permen & Manisan",
    weight: "250 gr"
  },
  {
    id: 2011,
    name: "MALLISU MELON TPL",
    price: 30500,
    image: mallisuMelonTpl,
    description: "Mallisu rasa melon dengan rasa manis dan aroma melon yang segar",
    category: "Permen & Manisan",
    weight: "250 gr"
  },
  {
    id: 2012,
    name: "SATRU DAUN TPL",
    price: 28000,
    image: satruDaunTpl,
    description: "Satru daun tradisional dengan rasa manis dan aroma herbal khas",
    category: "Permen & Manisan",
    weight: "400 gr"
  },
  {
    id: 2013,
    name: "KOYAH ASEM TPL",
    price: 24500,
    image: koyahAsemTpl,
    description: "Koyah asem dengan rasa asam manis yang khas dan menyegarkan",
    category: "Permen & Manisan",
    weight: "500 gr"
  },
  {
    id: 2014,
    name: "GOLDEN MINI WARNA TPL",
    price: 44000,
    image: goldenMiniWarnaTpl,
    description: "Coklat golden mini warna dengan berbagai varian warna dan rasa coklat yang lezat",
    category: "Permen & Manisan",
    weight: "450 gr"
  },
  {
    id: 2015,
    name: "GOLDEN MINI COKLAT TPL",
    price: 44000,
    image: goldenMiniCoklatTpl,
    description: "Coklat golden mini dengan rasa coklat murni yang creamy",
    category: "Permen & Manisan",
    weight: "450 gr"
  },
  {
    id: 2016,
    name: "CHOCO GOLD TPL",
    price: 59000,
    image: chocoGoldTpl,
    description: "Choco gold premium dengan rasa coklat berkualitas tinggi",
    category: "Permen & Manisan",
    weight: "500 gr"
  },
  {
    id: 2017,
    name: "PERMEN SUSU TPL",
    price: 27000,
    image: permenSusuTpl,
    description: "Permen susu dengan rasa susu yang creamy dan manis",
    category: "Permen & Manisan",
    weight: "320 gr"
  },
  {
    id: 2018,
    name: "COKLAT BOLA EMAS TPL",
    price: 57500,
    image: coklatBolaEmasTpl,
    description: "Coklat bola emas dengan lapisan coklat yang lezat dan isi yang renyah",
    category: "Permen & Manisan",
    weight: "450 gr"
  },
  {
    id: 2019,
    name: "JELLY MALAYSIA TPL",
    price: 35000,
    image: jellyMalaysiaTpl,
    description: "Jelly Malaysia dengan tekstur kenyal dan berbagai varian rasa buah",
    category: "Permen & Manisan",
    weight: "500 gr"
  },
  {
    id: 2020,
    name: "JELLY ROLL TPL",
    price: 47500,
    image: jellyRollTpl,
    description: "Jelly roll dengan bentuk unik dan rasa manis yang lezat",
    category: "Permen & Manisan",
    weight: "400 gr"
  }
];

/**
 * Fungsi helper untuk validasi data produk
 * Gunakan ini untuk memastikan data valid sebelum ditampilkan
 */
export function validatePermenManisanProduct(product: PermenManisanProduct): boolean {
  return (
    product.id > 0 &&
    product.name.trim().length > 0 &&
    product.price > 0 &&
    product.image.length > 0 &&
    product.category === "Permen & Manisan"
  );
}

/**
 * Fungsi helper untuk mendapatkan produk berdasarkan ID
 */
export function getPermenManisanProductById(id: number): PermenManisanProduct | undefined {
  return permenManisanProducts.find(product => product.id === id);
}

/**
 * Fungsi helper untuk mendapatkan produk berdasarkan range harga
 */
export function getPermenManisanProductsByPriceRange(minPrice: number, maxPrice: number): PermenManisanProduct[] {
  return permenManisanProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);
}
