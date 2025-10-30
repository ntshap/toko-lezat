/**
 * Data Produk Kacang-kacangan - Toko Lezat
 * File ini berisi data lengkap untuk produk kategori Kacang-kacangan
 */

// Import gambar produk Kacang-kacangan
import kacangBogorTpl from "@/assets/image/KACANG-KACANGAN/KACANG BOGOR TPL.jpg";
import kacangCampurTpl from "@/assets/image/KACANG-KACANGAN/KACANG CAMPUR TPL.jpg";
import kacangJepangBawangTpl from "@/assets/image/KACANG-KACANGAN/KACANG JEPANG BAWANG TPL.jpg";
import kacangKoroAsinTpl from "@/assets/image/KACANG-KACANGAN/KACANG KORO ASIN TPL.jpg";
import kacangPedasLyna from "@/assets/image/KACANG-KACANGAN/KACANG PEDAS LYNA.jpg";

export interface KacangProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: "Kacang-kacangan";
  weight: string;
}

export const kacangProducts: KacangProduct[] = [
  {
    id: 4001,
    name: "KACANG BOGOR TPL",
    price: 28000,
    image: kacangBogorTpl,
    description: "Kacang bogor premium dengan rasa gurih dan tekstur renyah yang khas",
    category: "Kacang-kacangan",
    weight: "250 gr"
  },
  {
    id: 4002,
    name: "KACANG CAMPUR TPL",
    price: 32000,
    image: kacangCampurTpl,
    description: "Kacang campur dengan berbagai varian kacang pilihan yang gurih",
    category: "Kacang-kacangan",
    weight: "250 gr"
  },
  {
    id: 4003,
    name: "KACANG JEPANG BAWANG TPL",
    price: 26000,
    image: kacangJepangBawangTpl,
    description: "Kacang jepang dengan bumbu bawang yang harum dan gurih",
    category: "Kacang-kacangan",
    weight: "250 gr"
  },
  {
    id: 4004,
    name: "KACANG KORO ASIN TPL",
    price: 24000,
    image: kacangKoroAsinTpl,
    description: "Kacang koro asin dengan rasa asin yang pas dan tekstur renyah",
    category: "Kacang-kacangan",
    weight: "250 gr"
  },
  {
    id: 4005,
    name: "KACANG PEDAS LYNA",
    price: 30000,
    image: kacangPedasLyna,
    description: "Kacang pedas Lyna dengan bumbu pedas yang mantap dan nagih",
    category: "Kacang-kacangan",
    weight: "250 gr"
  }
];

export function validateKacangProduct(product: KacangProduct): boolean {
  return (
    product.id > 0 &&
    product.name.trim().length > 0 &&
    product.price > 0 &&
    product.image.length > 0 &&
    product.category === "Kacang-kacangan"
  );
}

export function getKacangProductById(id: number): KacangProduct | undefined {
  return kacangProducts.find(product => product.id === id);
}

export function getKacangProductsByPriceRange(minPrice: number, maxPrice: number): KacangProduct[] {
  return kacangProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);
}
