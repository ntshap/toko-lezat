/**
 * Data Produk Keripik - Toko Lezat
 * File ini berisi data lengkap untuk 20 produk kategori Keripik
 */

// Import gambar produk Keripik
import potelTumbarMini from "@/assets/image/KERIPIK/POTEL TUMBAR MINI.jpg";
import lantingKeju from "@/assets/image/KERIPIK/LANTING KEJU.jpg";
import lantingUdang from "@/assets/image/KERIPIK/LANTING UDANG.jpg";
import polomiNangka from "@/assets/image/KERIPIK/POLOMI NANGKA.jpg";
import sukunStik from "@/assets/image/KERIPIK/SUKUN STIK.jpg";
import orlinSingkongLombokIjo from "@/assets/image/KERIPIK/ORLIN SINGKONG LOMBOK IJO.jpg";
import orlinSingkongManisPedas from "@/assets/image/KERIPIK/ORLIN SINGKONG MANIS PEDAS.jpg";
import orlinSingkongGulaiPedas from "@/assets/image/KERIPIK/ORLIN SINGKONG GULAI PEDAS.jpg";
import seblakCampur from "@/assets/image/KERIPIK/SEBLAK CAMPUR.jpg";
import kerupukKeju from "@/assets/image/KERIPIK/KERUPUK KEJU.jpg";
import seblakJengkol from "@/assets/image/KERIPIK/SEBLAK JENGKOL.jpg";
import kerupukGandumStik from "@/assets/image/KERIPIK/KERUPUK GANDUM STIK.jpg";
import kerupukTahuKotak from "@/assets/image/KERIPIK/KERUPUK TAHU KOTAK.jpg";
import ceripingTelo from "@/assets/image/KERIPIK/CERIPING TELO.jpg";
import ususAyamTitik from "@/assets/image/KERIPIK/USUS AYAM TITIK.jpg";
import keripikBelutKriuk from "@/assets/image/KERIPIK/KERIPIK BELUT KRIUK.jpg";
import keripikPare from "@/assets/image/KERIPIK/KERIPIK PARE.jpg";
import lantingBawangSuper from "@/assets/image/KERIPIK/LANTING BAWANG SUPER.jpg";
import potelTumbarUnyil from "@/assets/image/KERIPIK/POTEL TUMBAR UNYIL.jpg";
import lantingManisPedas from "@/assets/image/KERIPIK/LANTING MANIS PEDAS.jpg";

export interface KeripikProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: "Keripik";
  weight: string;
}

export const keripikProducts: KeripikProduct[] = [
  {
    id: 3001,
    name: "POTEL TUMBAR MINI",
    price: 14000,
    image: potelTumbarMini,
    description: "Potel tumbar mini dengan bumbu rempah yang gurih dan renyah",
    category: "Keripik",
    weight: "240 gr"
  },
  {
    id: 3002,
    name: "LANTING KEJU",
    price: 11500,
    image: lantingKeju,
    description: "Lanting keju renyah dengan rasa keju yang gurih dan lezat",
    category: "Keripik",
    weight: "240 gr"
  },
  {
    id: 3003,
    name: "LANTING UDANG",
    price: 13500,
    image: lantingUdang,
    description: "Lanting udang dengan rasa udang yang khas dan gurih",
    category: "Keripik",
    weight: "240 gr"
  },
  {
    id: 3004,
    name: "POLOMI NANGKA",
    price: 53500,
    image: polomiNangka,
    description: "Keripik polomi nangka premium dengan tekstur renyah dan rasa unik",
    category: "Keripik",
    weight: "235 gr"
  },
  {
    id: 3005,
    name: "SUKUN STIK",
    price: 37000,
    image: sukunStik,
    description: "Keripik sukun stik dengan rasa gurih dan tekstur renyah khas",
    category: "Keripik",
    weight: "390 gr"
  },
  {
    id: 3006,
    name: "ORLIN SINGKONG LOMBOK IJO",
    price: 12500,
    image: orlinSingkongLombokIjo,
    description: "Keripik singkong orlin dengan bumbu lombok ijo yang pedas segar",
    category: "Keripik",
    weight: "150 gr"
  },
  {
    id: 3007,
    name: "ORLIN SINGKONG MANIS PEDAS",
    price: 12500,
    image: orlinSingkongManisPedas,
    description: "Keripik singkong orlin dengan perpaduan rasa manis dan pedas",
    category: "Keripik",
    weight: "150 gr"
  },
  {
    id: 3008,
    name: "ORLIN SINGKONG GULAI PEDAS",
    price: 12500,
    image: orlinSingkongGulaiPedas,
    description: "Keripik singkong orlin dengan bumbu gulai pedas yang kaya rempah",
    category: "Keripik",
    weight: "150 gr"
  },
  {
    id: 3009,
    name: "SEBLAK CAMPUR",
    price: 14500,
    image: seblakCampur,
    description: "Kerupuk seblak campur dengan berbagai varian dan bumbu pedas",
    category: "Keripik",
    weight: "240 gr"
  },
  {
    id: 3010,
    name: "KERUPUK KEJU",
    price: 15000,
    image: kerupukKeju,
    description: "Kerupuk keju renyah dengan rasa keju yang creamy dan gurih",
    category: "Keripik",
    weight: "185 gr"
  },
  {
    id: 3011,
    name: "SEBLAK JENGKOL",
    price: 12000,
    image: seblakJengkol,
    description: "Kerupuk seblak jengkol dengan aroma dan rasa jengkol yang khas",
    category: "Keripik",
    weight: "190 gr"
  },
  {
    id: 3012,
    name: "KERUPUK GANDUM STIK",
    price: 13000,
    image: kerupukGandumStik,
    description: "Kerupuk gandum stik yang gurih dan cocok untuk camilan",
    category: "Keripik",
    weight: "180 gr"
  },
  {
    id: 3013,
    name: "KERUPUK TAHU KOTAK",
    price: 12500,
    image: kerupukTahuKotak,
    description: "Kerupuk tahu kotak dengan tekstur renyah dan rasa gurih",
    category: "Keripik",
    weight: "185 gr"
  },
  {
    id: 3014,
    name: "CERIPING TELO",
    price: 19500,
    image: ceripingTelo,
    description: "Keripik telo tradisional dengan rasa manis dan tekstur renyah",
    category: "Keripik",
    weight: "430 gr"
  },
  {
    id: 3015,
    name: "USUS AYAM TITIK",
    price: 43500,
    image: ususAyamTitik,
    description: "Keripik usus ayam titik dengan bumbu rempah yang gurih",
    category: "Keripik",
    weight: "235 gr"
  },
  {
    id: 3016,
    name: "KERIPIK BELUT KRIUK",
    price: 35000,
    image: keripikBelutKriuk,
    description: "Keripik belut kriuk dengan tekstur sangat renyah dan gurih",
    category: "Keripik",
    weight: "235 gr"
  },
  {
    id: 3017,
    name: "KERIPIK PARE",
    price: 20500,
    image: keripikPare,
    description: "Keripik pare dengan rasa pahit khas yang unik dan menyehatkan",
    category: "Keripik",
    weight: "285 gr"
  },
  {
    id: 3018,
    name: "LANTING BAWANG SUPER",
    price: 12500,
    image: lantingBawangSuper,
    description: "Lanting bawang super dengan aroma bawang yang harum dan gurih",
    category: "Keripik",
    weight: "240 gr"
  },
  {
    id: 3019,
    name: "POTEL TUMBAR UNYIL",
    price: 12500,
    image: potelTumbarUnyil,
    description: "Potel tumbar unyil dengan bumbu tumbar yang khas dan renyah",
    category: "Keripik",
    weight: "240 gr"
  },
  {
    id: 3020,
    name: "LANTING MANIS PEDAS",
    price: 11500,
    image: lantingManisPedas,
    description: "Lanting manis pedas dengan perpaduan rasa manis dan pedas yang pas",
    category: "Keripik",
    weight: "240 gr"
  }
];

export function validateKeripikProduct(product: KeripikProduct): boolean {
  return (
    product.id > 0 &&
    product.name.trim().length > 0 &&
    product.price > 0 &&
    product.image.length > 0 &&
    product.category === "Keripik"
  );
}

export function getKeripikProductById(id: number): KeripikProduct | undefined {
  return keripikProducts.find(product => product.id === id);
}

export function getKeripikProductsByPriceRange(minPrice: number, maxPrice: number): KeripikProduct[] {
  return keripikProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);
}
