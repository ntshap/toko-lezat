import { useState, useEffect } from "react";
import { Plus, Minus, ShoppingCart, Check, ArrowUp, Eye } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartModal, { CartItem } from "@/components/CartModal";
import FloatingCheckoutButton from "@/components/FloatingCheckoutButton";
import UserDataModal from "@/components/UserDataModal";
import ProductDetailModal from "@/components/ProductDetailModal";
import { useToast } from "@/hooks/use-toast";
import SnackKiloanCard, { SnackKiloanProduct, SnackKiloanCartItem } from "@/components/SnackKiloanCard";
import { snackKiloanProducts } from "@/data/snackKiloanData";

// Kue Kering imports
import susCoklat from "@/assets/image/KUE KERING/1_SUS COKLAT.jpg";
import susMelati from "@/assets/image/KUE KERING/2_ SUS MELATI.jpg";
import susBulat from "@/assets/image/KUE KERING/3_SUS BULAT.jpg";
import susTulang from "@/assets/image/KUE KERING/4_SUS TULANG.jpg";
import bagelenKismis from "@/assets/image/KUE KERING/5_ BAGELEN KISMIS.jpg";
import bagelenDavronas from "@/assets/image/KUE KERING/6_BAGELEN DAVRONAS.jpg";
import nopiaGulaJawa from "@/assets/image/KUE KERING/7_NOPIA GULA JAWA.jpg";
import nopiaCoklat from "@/assets/image/KUE KERING/8_NOPIA COKLAT.jpg";
import nopiaPandan from "@/assets/image/KUE KERING/9_NOPIA PANDAN.jpg";
import mancoPanjang from "@/assets/image/KUE KERING/10_MANCO PANJANG.jpg";
import mancoBulat from "@/assets/image/KUE KERING/11_MANCO BULAT.jpg";
import mancoSuper from "@/assets/image/KUE KERING/12_MANCO SUPER.jpg";
import bagelenSisirSpecial from "@/assets/image/KUE KERING/13_BAGELEN SISIR SPECIAL.jpg";
import bagelenOval from "@/assets/image/KUE KERING/14_ BAGELEN OVAL.jpg";
import boluKuwuk from "@/assets/image/KUE KERING/15_ BOLU KUWUK'.jpg";
import boluKuwukAren from "@/assets/image/KUE KERING/16_ BOLU KUWUK AREN.jpg";

// Bakpia & Kue Basah imports
import bakpiaPathok65KacangHijau from "@/assets/image/BAKPIA & KUE BASAH/1_BAKPIA PATOK 65 KACANG HIJAU.jpg";
import bakpiaPathok65Keju from "@/assets/image/BAKPIA & KUE BASAH/2_BAKPIA PATOK 65 KEJU.jpg";
import bakpiaPathok65Coklat from "@/assets/image/BAKPIA & KUE BASAH/3_BAKPIA PATOK 65 COKLAT.jpg";
import bakpiaPathok65Kombinasi from "@/assets/image/BAKPIA & KUE BASAH/4_ BAKPIA PATOK 65 KOMBINASI.jpg";
import bakpiaKingCoklat from "@/assets/image/BAKPIA & KUE BASAH/5_BAKPIA KING COKLAT.jpg";
import bakpiaKingUbiUngu from "@/assets/image/BAKPIA & KUE BASAH/6_ BAKPIA KING UBI UNGU.jpg";
import bakpiaKing from "@/assets/image/BAKPIA & KUE BASAH/7_ BAKPIA KING.jpg";
import bakpia578Kering from "@/assets/image/BAKPIA & KUE BASAH/8_BAKPIA 578 KERING.jpg";
import bakpia578Basah from "@/assets/image/BAKPIA & KUE BASAH/9_ BAKPIA 578 BASAH.jpg";
import bakpiaPathokMulyaKeju from "@/assets/image/BAKPIA & KUE BASAH/10_BAKPIA PATOK MULYA KEJU.jpg";
import bakpiaPathokMulyaKacangHijau from "@/assets/image/BAKPIA & KUE BASAH/11_ BAKPIA PATOK MULYA KACANG HIJAU.jpg";
import bakpiaPathokMulyaCoklat from "@/assets/image/BAKPIA & KUE BASAH/12_BAKPIA PATOK MULYA COKLAT.jpg";
import bakpiaPathok525Coklat from "@/assets/image/BAKPIA & KUE BASAH/13_BAKPIA PATOK 525 COKLAT.jpg";
import bakpiaPathok525KacangHijau from "@/assets/image/BAKPIA & KUE BASAH/14_ BAKPIA PATOK 525 KACANG HIJAU.jpg";
import bakpiaPathok525Keju from "@/assets/image/BAKPIA & KUE BASAH/15_ BAKPIA PATOK 525 KEJU.jpg";
import bakpiaPathok88NyMellyAnekaRasa from "@/assets/image/BAKPIA & KUE BASAH/16_BAKPIA PATOK 88 NY.MELLY ANEKA RASA.jpg";
import bakpiaPathok88NyMellyKumbuHitam from "@/assets/image/BAKPIA & KUE BASAH/17_ BAKPIA PATOK 88 NY.MELLY KUMBU HITAM.jpg";
import bakpiaPathok88NyMellyUbiUngu from "@/assets/image/BAKPIA & KUE BASAH/18_ BAKPIA PATOK 88 NY.MELLY UBI UNGU.jpg";
import bakpiaPathok88NyMellyDurian from "@/assets/image/BAKPIA & KUE BASAH/19_ BAKPIA PATOK 88 NY.MELLY DURIAN.jpg";
import bakpiaPathok88NyMellyKeju from "@/assets/image/BAKPIA & KUE BASAH/20_BAKPIA PATOK 88 NY.MELLY KEJU.jpg";
import bakpiaPathok88NyMellyOriginal from "@/assets/image/BAKPIA & KUE BASAH/21_ BAKPIA PATOK 88 NY.MELLY ORIGINAL.jpg";
import bakpiaPathok88Basah from "@/assets/image/BAKPIA & KUE BASAH/22_BAKPIA PATOK 88 BASAH.jpg";
import bakpiaPathok88Kuning from "@/assets/image/BAKPIA & KUE BASAH/23_BAKPIA PATOK 88 KUNING.jpg";
import bakpiaPathok88Merah from "@/assets/image/BAKPIA & KUE BASAH/24_BAKPIA PATOK 88 MERAH.jpg";
import bakpiaPathok35Kombinasi from "@/assets/image/BAKPIA & KUE BASAH/25_ BAKPIA PATOK 35 KOMBINASI.jpg";
import bakpiaMarem from "@/assets/image/BAKPIA & KUE BASAH/26_BAKPIA MAREM.jpg";
import bakpiaPathok81Keju from "@/assets/image/BAKPIA & KUE BASAH/27_BAKPIA PATOK 81 KEJU.jpg";
import bakpiaPathokAgung from "@/assets/image/BAKPIA & KUE BASAH/28_BAKPIA PATOK AGUNG.jpg";
import wingkoBabat35Besar from "@/assets/image/BAKPIA & KUE BASAH/29_WINGKO BABAT 35 BESAR.jpg";
import wingkoBabat35Kecil from "@/assets/image/BAKPIA & KUE BASAH/30_WINGKO BABAT 35 KECIL.jpg";
import yangkoKembar from "@/assets/image/BAKPIA & KUE BASAH/31_ YANGKO KEMBAR.jpg";
import yangkoGiant from "@/assets/image/BAKPIA & KUE BASAH/32_YANGKO GIANT.jpg";
import yangkoAnekaRasaGose from "@/assets/image/BAKPIA & KUE BASAH/33_YANGKO ANEKA RASA GOSE (SGT).jpg";

// Minuman Instan imports
import etawavitOriginal from "@/assets/image/Minuman Instan/1_ETAWAVIT ORIGINAL.jpg";
import etawavitStrawberry from "@/assets/image/Minuman Instan/2_ETAWAVIT STRAWBERRY.jpg";
import etawavitCoklat from "@/assets/image/Minuman Instan/3_ETAWAVIT COKLAT.jpg";
import etawavitVanila from "@/assets/image/Minuman Instan/4_ETAWAVIT VANILA.jpg";
import kopiRempahMakGleng from "@/assets/image/Minuman Instan/5_KOPI REMPAH MAK GLENG.jpg";
import kopiAnggurMerahMakGleng from "@/assets/image/Minuman Instan/6_KOPI ANGGUR MERAH MAK GLENG.jpg";
import kopiTjangkir from "@/assets/image/Minuman Instan/7_KOPI TJANGKIR.jpg";
import coklatOmahJogjaSusu from "@/assets/image/Minuman Instan/8_COKLAT OMAH JOGJA SUSU.jpg";
import coklatOmahJogjaDark from "@/assets/image/Minuman Instan/9_COKLAT OMAH JOGJA DARK.jpg";
import coklatOmahJogjaMatcha from "@/assets/image/Minuman Instan/10_COKLAT OMAH JOGJA MATCHA.jpg";
import kopiArabikaSindoro from "@/assets/image/Minuman Instan/11_KOPI ARABIKA SINDORO.jpg";
import kopiGesingRobusta from "@/assets/image/Minuman Instan/12_KOPI GESING ROBUSTA.jpg";
import kopiTemanggungArabikaSumbing from "@/assets/image/Minuman Instan/13_KOPI TEMANGGUNG ARABIKA SUMBING.jpg";
import kopiTemanggungBlend from "@/assets/image/Minuman Instan/14_KOPI TEMANGGUNG BLEND.jpg";
import racikSewuWedangSelaras from "@/assets/image/Minuman Instan/15RACIK SEWU WEDANG SELARAS.jpg";
import racikSewuJaheJerukNipis from "@/assets/image/Minuman Instan/16RACIK SEWU JAHE JERUK NIPIS.jpg";
import racikSewuKunyitJerukNipis from "@/assets/image/Minuman Instan/17RACIK SEWU KUNYIT JERUK NIPIS.jpg";
import kondangFoodKulitManggis from "@/assets/image/Minuman Instan/18KONDANG FOOD KULIT MANGGIS.jpg";
import kondangFoodDaunKelor from "@/assets/image/Minuman Instan/19KONDANG FOOD DAUN KELOR.jpg";
import bandrexHanjuang from "@/assets/image/Minuman Instan/20BANDREX HANJUANG.jpg";
import bajigurHanjuang from "@/assets/image/Minuman Instan/21_BAJIGUR HANJUANG.jpg";
import bandrexSpesial from "@/assets/image/Minuman Instan/22_BANDREX SPESIAL.jpg";
import wedangSecangTas from "@/assets/image/Minuman Instan/23_WEDANG SECANG TAS.jpg";
import wedangUwuhTas from "@/assets/image/Minuman Instan/24_WEDANG UWUH TAS.jpg";
import wedangUwuhBesek from "@/assets/image/Minuman Instan/25_WEDANG UWUH BESEK.jpg";
import wedangUwuhPasakBumiPlastik from "@/assets/image/Minuman Instan/26WEDANG UWUH PASAK BUMI PLASTIK.jpg";
import wedangUwuhGulaPlastik from "@/assets/image/Minuman Instan/WEDANG UWUH GULA PLASTIK.jpg";
import jaheMerahInstantBotol from "@/assets/image/Minuman Instan/JAHE MERAH INSTANT BOTOL.jpg";
import gulaBatuHerbalToples from "@/assets/image/Minuman Instan/GULA BATU HERBAL TOPLES.jpg";
import gulaJaheMika from "@/assets/image/Minuman Instan/GULA JAHE MIKA.jpg";
import gulaJawaGeprek from "@/assets/image/Minuman Instan/GULA JAWA GEPREK.jpg";
import kondangFoodSekotengPlastik from "@/assets/image/Minuman Instan/KONDANG FOOD SEKOTENG PLASTIK.jpg";
import kondangFoodBerasKencur from "@/assets/image/Minuman Instan/KONDANG FOOD BERAS KENCUR.jpg";
import kondangFoodBirPletok from "@/assets/image/Minuman Instan/KONDANG FOOD BIR PLETOK.jpg";
import kondangFoodJaheMerah from "@/assets/image/Minuman Instan/KONDANG FOOD JAHE MERAH.jpg";
import kondangFoodWedangSerai from "@/assets/image/Minuman Instan/KONDANG FOOD WEDANG SERAI.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  weight?: string; // Berat produk (misal: "240 g", "235 g")
}

const products: Product[] = [
  // Kue Kering Products
  {
    id: 1,
    name: "SUS COKLAT",
    price: 19000,
    image: susCoklat,
    description: "Sus coklat lezat dengan krim coklat yang lembut",
    category: "Kue Kering",
    weight: "240 g"
  },
  {
    id: 2,
    name: "SUS MELATI",
    price: 27000,
    image: susMelati,
    description: "Sus melati dengan aroma melati yang harum dan krim yang lembut",
    category: "Kue Kering",
    weight: "235 g"
  },
  {
    id: 3,
    name: "SUS BULAT",
    price: 21500,
    image: susBulat,
    description: "Sus bulat dengan krim manis yang lezat",
    category: "Kue Kering",
    weight: "235 g"
  },
  {
    id: 4,
    name: "SUS TULANG",
    price: 22000,
    image: susTulang,
    description: "Sus tulang dengan bentuk unik dan rasa yang istimewa",
    category: "Kue Kering",
    weight: "235 g"
  },
  {
    id: 5,
    name: "BAGELEN KISMIS",
    price: 21000,
    image: bagelenKismis,
    description: "Bagelen dengan kismis manis yang lezat",
    category: "Kue Kering",
    weight: "235 g"
  },
  {
    id: 6,
    name: "BAGELEN DAVRONAS",
    price: 16500,
    image: bagelenDavronas,
    description: "Bagelen davronas dengan rasa tradisional yang autentik",
    category: "Kue Kering",
    weight: "235 g"
  },
  {
    id: 7,
    name: "NOPIA GULA JAWA",
    price: 20000,
    image: nopiaGulaJawa,
    description: "Nopia dengan gula jawa yang manis dan legit",
    category: "Kue Kering",
    weight: "490 g"
  },
  {
    id: 8,
    name: "NOPIA COKLAT",
    price: 20000,
    image: nopiaCoklat,
    description: "Nopia coklat dengan rasa coklat yang rich dan lezat",
    category: "Kue Kering",
    weight: "490 g"
  },
  {
    id: 9,
    name: "NOPIA PANDAN",
    price: 20000,
    image: nopiaPandan,
    description: "Nopia pandan dengan aroma pandan yang wangi dan rasa yang khas",
    category: "Kue Kering",
    weight: "490 g"
  },
  {
    id: 10,
    name: "MANCO PANJANG",
    price: 28500,
    image: mancoPanjang,
    description: "Manco panjang dengan tekstur renyah dan rasa manis",
    category: "Kue Kering",
    weight: "290 g"
  },
  {
    id: 11,
    name: "MANCO BULAT",
    price: 28500,
    image: mancoBulat,
    description: "Manco bulat dengan bentuk menarik dan rasa yang lezat",
    category: "Kue Kering",
    weight: "290 g"
  },
  {
    id: 12,
    name: "MANCO SUPER",
    price: 27500,
    image: mancoSuper,
    description: "Manco super dengan kualitas premium dan rasa istimewa",
    category: "Kue Kering",
    weight: "285 g"
  },
  {
    id: 13,
    name: "BAGELEN SISIR SPECIAL",
    price: 27000,
    image: bagelenSisirSpecial,
    description: "Bagelen sisir special dengan desain unik dan rasa yang lezat",
    category: "Kue Kering",
    weight: "235 g"
  },
  {
    id: 14,
    name: "BAGELEN OVAL",
    price: 25500,
    image: bagelenOval,
    description: "Bagelen oval dengan bentuk elegan dan rasa yang manis",
    category: "Kue Kering",
    weight: "235 g"
  },
  {
    id: 15,
    name: "BOLU KUWUK",
    price: 28000,
    image: boluKuwuk,
    description: "Bolu kuwuk tradisional dengan tekstur lembut dan rasa yang khas",
    category: "Kue Kering",
    weight: "235 g"
  },
  {
    id: 16,
    name: "BOLU KUWUK AREN",
    price: 29000,
    image: boluKuwukAren,
    description: "Bolu kuwuk aren dengan gula aren asli yang memberikan rasa manis alami",
    category: "Kue Kering",
    weight: "235 g"
  },
  // Bakpia & Kue Basah Products
  {
    id: 17,
    name: "BAKPIA PATOK 65 KACANG HIJAU",
    price: 32000,
    image: bakpiaPathok65KacangHijau,
    description: "Bakpia Patok 65 dengan isian kacang hijau yang lembut dan autentik",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 18,
    name: "BAKPIA PATOK 65 KEJU",
    price: 32000,
    image: bakpiaPathok65Keju,
    description: "Bakpia Patok 65 dengan isian keju yang creamy dan lezat",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 19,
    name: "BAKPIA PATOK 65 COKLAT",
    price: 32000,
    image: bakpiaPathok65Coklat,
    description: "Bakpia Patok 65 dengan isian coklat yang manis dan kaya rasa",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 20,
    name: "BAKPIA PATOK 65 KOMBINASI",
    price: 32000,
    image: bakpiaPathok65Kombinasi,
    description: "Bakpia Patok 65 kombinasi berbagai rasa dalam satu kemasan",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 21,
    name: "BAKPIA KING COKLAT",
    price: 34000,
    image: bakpiaKingCoklat,
    description: "Bakpia King dengan isian coklat premium yang rich dan lembut",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 22,
    name: "BAKPIA KING UBI UNGU",
    price: 34000,
    image: bakpiaKingUbiUngu,
    description: "Bakpia King dengan isian ubi ungu yang manis dan bergizi",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 23,
    name: "BAKPIA KING",
    price: 34000,
    image: bakpiaKing,
    description: "Bakpia King dengan resep istimewa dan kualitas premium",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 24,
    name: "BAKPIA 578 KERING",
    price: 20500,
    image: bakpia578Kering,
    description: "Bakpia 578 dengan tekstur kering yang renyah dan tahan lama",
    category: "Bakpia & Kue Basah",
    weight: "15 g"
  },
  {
    id: 25,
    name: "BAKPIA 578 BASAH",
    price: 28000,
    image: bakpia578Basah,
    description: "Bakpia 578 dengan tekstur basah yang lembut dan fresh",
    category: "Bakpia & Kue Basah",
    weight: "15 g"
  },
  {
    id: 26,
    name: "BAKPIA PATOK MULYA KEJU",
    price: 34000,
    image: bakpiaPathokMulyaKeju,
    description: "Bakpia Patok Mulya dengan isian keju yang creamy dan berkualitas",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 27,
    name: "BAKPIA PATOK MULYA KACANG HIJAU",
    price: 34000,
    image: bakpiaPathokMulyaKacangHijau,
    description: "Bakpia Patok Mulya dengan isian kacang hijau yang halus dan lezat",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 28,
    name: "BAKPIA PATOK MULYA COKLAT",
    price: 34000,
    image: bakpiaPathokMulyaCoklat,
    description: "Bakpia Patok Mulya dengan isian coklat yang premium dan rich",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 29,
    name: "BAKPIA PATOK 525 COKLAT",
    price: 22000,
    image: bakpiaPathok525Coklat,
    description: "Bakpia Patok 525 dengan isian coklat yang manis dan terjangkau",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 30,
    name: "BAKPIA PATOK 525 KACANG HIJAU",
    price: 22000,
    image: bakpiaPathok525KacangHijau,
    description: "Bakpia Patok 525 dengan isian kacang hijau yang tradisional",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 31,
    name: "BAKPIA PATOK 525 KEJU",
    price: 22000,
    image: bakpiaPathok525Keju,
    description: "Bakpia Patok 525 dengan isian keju yang lembut dan gurih",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 32,
    name: "BAKPIA PATOK 88 NY.MELLY ANEKA RASA",
    price: 33500,
    image: bakpiaPathok88NyMellyAnekaRasa,
    description: "Bakpia Patok 88 Ny.Melly dengan berbagai varian rasa yang istimewa",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 33,
    name: "BAKPIA PATOK 88 NY.MELLY KUMBU HITAM",
    price: 33500,
    image: bakpiaPathok88NyMellyKumbuHitam,
    description: "Bakpia Patok 88 Ny.Melly dengan isian kumbu hitam yang unik",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 34,
    name: "BAKPIA PATOK 88 NY.MELLY UBI UNGU",
    price: 33500,
    image: bakpiaPathok88NyMellyUbiUngu,
    description: "Bakpia Patok 88 Ny.Melly dengan isian ubi ungu yang sehat dan lezat",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 35,
    name: "BAKPIA PATOK 88 NY.MELLY DURIAN",
    price: 33500,
    image: bakpiaPathok88NyMellyDurian,
    description: "Bakpia Patok 88 Ny.Melly dengan isian durian yang harum dan creamy",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 36,
    name: "BAKPIA PATOK 88 NY.MELLY KEJU",
    price: 33500,
    image: bakpiaPathok88NyMellyKeju,
    description: "Bakpia Patok 88 Ny.Melly dengan isian keju yang premium dan lezat",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 37,
    name: "BAKPIA PATOK 88 NY.MELLY ORIGINAL",
    price: 33500,
    image: bakpiaPathok88NyMellyOriginal,
    description: "Bakpia Patok 88 Ny.Melly original dengan resep autentik",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 38,
    name: "BAKPIA PATOK 88 BASAH",
    price: 44500,
    image: bakpiaPathok88Basah,
    description: "Bakpia Patok 88 dengan tekstur basah yang lembut dan segar",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 39,
    name: "BAKPIA PATOK 88 KUNING",
    price: 35000,
    image: bakpiaPathok88Kuning,
    description: "Bakpia Patok 88 kuning dengan warna dan rasa yang khas",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 40,
    name: "BAKPIA PATOK 88 MERAH",
    price: 36500,
    image: bakpiaPathok88Merah,
    description: "Bakpia Patok 88 merah dengan cita rasa yang spesial",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 41,
    name: "BAKPIA PATOK 35 KOMBINASI",
    price: 30000,
    image: bakpiaPathok35Kombinasi,
    description: "Bakpia Patok 35 kombinasi dengan berbagai varian dalam satu paket",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 42,
    name: "BAKPIA MAREM",
    price: 36000,
    image: bakpiaMarem,
    description: "Bakpia Marem dengan resep khusus dan cita rasa yang istimewa",
    category: "Bakpia & Kue Basah",
    weight: "15 g"
  },
  {
    id: 43,
    name: "BAKPIA PATOK 81 KEJU",
    price: 30500,
    image: bakpiaPathok81Keju,
    description: "Bakpia Patok 81 dengan isian keju yang lezat dan berkualitas",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 44,
    name: "BAKPIA PATOK AGUNG",
    price: 52000,
    image: bakpiaPathokAgung,
    description: "Bakpia Patok Agung dengan kualitas premium dan rasa terbaik",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 45,
    name: "WINGKO BABAT 35 BESAR",
    price: 53000,
    image: wingkoBabat35Besar,
    description: "Wingko Babat 35 ukuran besar dengan tekstur kenyal dan rasa manis",
    category: "Bakpia & Kue Basah",
    weight: "35 g"
  },
  {
    id: 46,
    name: "WINGKO BABAT 35 KECIL",
    price: 30000,
    image: wingkoBabat35Kecil,
    description: "Wingko Babat 35 ukuran kecil yang praktis dan lezat",
    category: "Bakpia & Kue Basah",
    weight: "25 g"
  },
  {
    id: 47,
    name: "YANGKO KEMBAR",
    price: 22000,
    image: yangkoKembar,
    description: "Yangko kembar dengan bentuk unik dan rasa yang manis",
    category: "Bakpia & Kue Basah",
    weight: "30 g"
  },
  {
    id: 48,
    name: "YANGKO GIANT",
    price: 26000,
    image: yangkoGiant,
    description: "Yangko Giant dengan ukuran besar dan rasa yang istimewa",
    category: "Bakpia & Kue Basah",
    weight: "40 g"
  },
  {
    id: 49,
    name: "YANGKO ANEKA RASA GOSE (SGT)",
    price: 21500,
    image: yangkoAnekaRasaGose,
    description: "Yangko aneka rasa gose dengan berbagai varian rasa yang lezat",
    category: "Bakpia & Kue Basah",
    weight: "25 g"
  },
  // Minuman Instan Products
  {
    id: 50,
    name: "ETAWAVIT ORIGINAL",
    price: 60000,
    image: etawavitOriginal,
    description: "Susu etawavit original dengan nutrisi lengkap dan rasa yang lezat",
    category: "Minuman Instan",
    weight: "500 g"
  },
  {
    id: 51,
    name: "ETAWAVIT STRAWBERRY",
    price: 60000,
    image: etawavitStrawberry,
    description: "Susu etawavit rasa strawberry yang segar dan bergizi",
    category: "Minuman Instan",
    weight: "500 g"
  },
  {
    id: 52,
    name: "ETAWAVIT COKLAT",
    price: 60000,
    image: etawavitCoklat,
    description: "Susu etawavit rasa coklat yang kaya dan lezat",
    category: "Minuman Instan",
    weight: "500 g"
  },
  {
    id: 53,
    name: "ETAWAVIT VANILA",
    price: 60000,
    image: etawavitVanila,
    description: "Susu etawavit rasa vanila yang harum dan creamy",
    category: "Minuman Instan",
    weight: "500 g"
  },
  {
    id: 54,
    name: "KOPI REMPAH MAK GLENG",
    price: 36000,
    image: kopiRempahMakGleng,
    description: "Kopi rempah dengan campuran rempah-rempah tradisional khas Mak Gleng",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 55,
    name: "KOPI ANGGUR MERAH MAK GLENG",
    price: 36000,
    image: kopiAnggurMerahMakGleng,
    description: "Kopi dengan perpaduan rasa anggur merah yang unik dari Mak Gleng",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 56,
    name: "KOPI TJANGKIR",
    price: 32500,
    image: kopiTjangkir,
    description: "Kopi tjangkir dengan cita rasa kopi tradisional yang autentik",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 57,
    name: "COKLAT OMAH JOGJA SUSU",
    price: 34000,
    image: coklatOmahJogjaSusu,
    description: "Minuman coklat susu khas Omah Jogja dengan rasa yang rich dan creamy",
    category: "Minuman Instan",
    weight: "250 g"
  },
  {
    id: 58,
    name: "COKLAT OMAH JOGJA DARK",
    price: 34000,
    image: coklatOmahJogjaDark,
    description: "Minuman coklat dark khas Omah Jogja dengan rasa coklat yang intense",
    category: "Minuman Instan",
    weight: "250 g"
  },
  {
    id: 59,
    name: "COKLAT OMAH JOGJA MATCHA",
    price: 47500,
    image: coklatOmahJogjaMatcha,
    description: "Minuman coklat matcha khas Omah Jogja dengan perpaduan rasa yang unik",
    category: "Minuman Instan",
    weight: "250 g"
  },
  {
    id: 60,
    name: "KOPI ARABIKA SINDORO",
    price: 44500,
    image: kopiArabikaSindoro,
    description: "Kopi arabika asli dari Gunung Sindoro dengan cita rasa yang premium",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 61,
    name: "KOPI GESING ROBUSTA",
    price: 38000,
    image: kopiGesingRobusta,
    description: "Kopi robusta Gesing dengan karakter rasa yang kuat dan aromatic",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 62,
    name: "KOPI TEMANGGUNG ARABIKA SUMBING",
    price: 36500,
    image: kopiTemanggungArabikaSumbing,
    description: "Kopi arabika Sumbing dari Temanggung dengan profil rasa yang istimewa",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 63,
    name: "KOPI TEMANGGUNG BLEND",
    price: 34000,
    image: kopiTemanggungBlend,
    description: "Kopi blend Temanggung dengan perpaduan arabika dan robusta yang seimbang",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 64,
    name: "RACIK SEWU WEDANG SELARAS",
    price: 16500,
    image: racikSewuWedangSelaras,
    description: "Wedang selaras Racik Sewu dengan campuran rempah yang menyehatkan",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 65,
    name: "RACIK SEWU JAHE JERUK NIPIS",
    price: 16500,
    image: racikSewuJaheJerukNipis,
    description: "Minuman jahe jeruk nipis Racik Sewu yang hangat dan menyegarkan",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 66,
    name: "RACIK SEWU KUNYIT JERUK NIPIS",
    price: 16500,
    image: racikSewuKunyitJerukNipis,
    description: "Minuman kunyit jeruk nipis Racik Sewu yang menyehatkan dan segar",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 67,
    name: "KONDANG FOOD KULIT MANGGIS",
    price: 13500,
    image: kondangFoodKulitManggis,
    description: "Minuman herbal kulit manggis Kondang Food dengan manfaat antioksidan",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 68,
    name: "KONDANG FOOD DAUN KELOR",
    price: 13500,
    image: kondangFoodDaunKelor,
    description: "Minuman herbal daun kelor Kondang Food yang kaya nutrisi",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 69,
    name: "BANDREX HANJUANG",
    price: 16000,
    image: bandrexHanjuang,
    description: "Minuman bandrex hanjuang tradisional dengan rasa yang khas",
    category: "Minuman Instan",
    weight: "5 bungkus"
  },
  {
    id: 70,
    name: "BAJIGUR HANJUANG",
    price: 16000,
    image: bajigurHanjuang,
    description: "Bajigur hanjuang dengan rasa tradisional yang hangat dan manis",
    category: "Minuman Instan",
    weight: "5 bungkus"
  },
  {
    id: 71,
    name: "BANDREX SPESIAL",
    price: 23000,
    image: bandrexSpesial,
    description: "Bandrex spesial dengan kualitas premium dan rasa yang istimewa",
    category: "Minuman Instan",
    weight: "10 bungkus"
  },
  {
    id: 72,
    name: "WEDANG SECANG TAS",
    price: 11500,
    image: wedangSecangTas,
    description: "Wedang secang dalam kemasan tas yang praktis dan menyehatkan",
    category: "Minuman Instan",
    weight: "5 bungkus"
  },
  {
    id: 73,
    name: "WEDANG UWUH TAS",
    price: 11000,
    image: wedangUwuhTas,
    description: "Wedang uwuh dalam kemasan tas dengan campuran rempah tradisional",
    category: "Minuman Instan",
    weight: "5 bungkus"
  },
  {
    id: 74,
    name: "WEDANG UWUH BESEK",
    price: 21500,
    image: wedangUwuhBesek,
    description: "Wedang uwuh dalam kemasan besek yang tradisional dan otentik",
    category: "Minuman Instan",
    weight: "5 bungkus"
  },
  {
    id: 75,
    name: "WEDANG UWUH PASAK BUMI PLASTIK",
    price: 20500,
    image: wedangUwuhPasakBumiPlastik,
    description: "Wedang uwuh dengan pasak bumi dalam kemasan praktis",
    category: "Minuman Instan",
    weight: "5 bungkus"
  },
  {
    id: 76,
    name: "WEDANG UWUH GULA PLASTIK",
    price: 17500,
    image: wedangUwuhGulaPlastik,
    description: "Wedang uwuh dengan gula dalam kemasan plastik yang praktis",
    category: "Minuman Instan",
    weight: "5 bungkus"
  },
  {
    id: 77,
    name: "JAHE MERAH INSTANT BOTOL",
    price: 20500,
    image: jaheMerahInstantBotol,
    description: "Jahe merah instant dalam botol yang hangat dan menyehatkan",
    category: "Minuman Instan",
    weight: "300 g"
  },
  {
    id: 78,
    name: "GULA BATU HERBAL TOPLES",
    price: 22000,
    image: gulaBatuHerbalToples,
    description: "Gula batu herbal dalam toples dengan manfaat kesehatan",
    category: "Minuman Instan",
    weight: "500 g"
  },
  {
    id: 79,
    name: "GULA JAHE MIKA",
    price: 24000,
    image: gulaJaheMika,
    description: "Gula jahe dalam kemasan mika yang praktis dan berkualitas",
    category: "Minuman Instan",
    weight: "250 g"
  },
  {
    id: 80,
    name: "GULA JAWA GEPREK",
    price: 10000,
    image: gulaJawaGeprek,
    description: "Gula jawa geprek asli dengan rasa manis alami yang khas",
    category: "Minuman Instan",
    weight: "200 g"
  },
  {
    id: 81,
    name: "KONDANG FOOD SEKOTENG PLASTIK",
    price: 20500,
    image: kondangFoodSekotengPlastik,
    description: "Sekoteng Kondang Food dalam kemasan plastik yang mudah disajikan",
    category: "Minuman Instan",
    weight: "150 g"
  },
  {
    id: 82,
    name: "KONDANG FOOD BERAS KENCUR",
    price: 13500,
    image: kondangFoodBerasKencur,
    description: "Minuman beras kencur Kondang Food yang segar dan menyehatkan",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 83,
    name: "KONDANG FOOD BIR PLETOK",
    price: 20500,
    image: kondangFoodBirPletok,
    description: "Bir pletok Kondang Food dengan rasa rempah yang khas Jakarta",
    category: "Minuman Instan",
    weight: "150 g"
  },
  {
    id: 84,
    name: "KONDANG FOOD JAHE MERAH",
    price: 20500,
    image: kondangFoodJaheMerah,
    description: "Jahe merah Kondang Food yang hangat dan berkhasiat untuk kesehatan",
    category: "Minuman Instan",
    weight: "150 g"
  },
  {
    id: 85,
    name: "KONDANG FOOD WEDANG SERAI",
    price: 20500,
    image: kondangFoodWedangSerai,
    description: "Wedang serai Kondang Food yang harum dan menyegarkan",
    category: "Minuman Instan",
    weight: "150 g"
  }
];

// snackKiloanProducts is now imported from @/data/snackKiloanData
// Contains 32 products with complete pricing for 1/4kg, 1/2kg, and 1kg

// Debug log untuk memastikan data ter-load
console.log('🔍 Products.tsx - snackKiloanProducts loaded:', snackKiloanProducts.length);

const categories = ["Semua", "Kripik dan Snack Ringan", "Kue Kering", "Permen & Manisan", "Bakpia dan Kue Basah", "Kacang-kacangan", "Snack Kiloan", "Minuman", "Lain-lain"];

interface ProductsPageProps {
  cartItems: CartItem[];
  onAddToCart: (product: any, quantityChange?: number) => void;
  onRemoveFromCart: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onClearCart: () => void;
}

export default function ProductsPage({ cartItems, onAddToCart, onRemoveFromCart, onUpdateQuantity, onClearCart }: ProductsPageProps) {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserDataModalOpen, setIsUserDataModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Handle category parameter from URL
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate initial loading
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper function to get random products from all categories
  const getRandomProducts = (products: Product[], count: number = 10) => {
    // Get products from different categories
    const categorizedProducts = {
      "Kue Kering": products.filter(p => p.category === "Kue Kering"),
      "Bakpia & Kue Basah": products.filter(p => p.category === "Bakpia & Kue Basah" || p.category === "Kue Basah"),
      "Minuman Instan": products.filter(p => p.category === "Minuman Instan"),
      "Kacang-kacangan": products.filter(p => p.category === "Kacang-kacangan"),
      "Other": products.filter(p => !["Kue Kering", "Bakpia & Kue Basah", "Kue Basah", "Minuman Instan", "Kacang-kacangan"].includes(p.category))
    };

    // Take 2-3 products from each category to make it diverse
    const selectedProducts: Product[] = [];
    Object.values(categorizedProducts).forEach(categoryProducts => {
      if (categoryProducts.length > 0) {
        const shuffled = [...categoryProducts].sort(() => 0.5 - Math.random());
        selectedProducts.push(...shuffled.slice(0, 2)); // Take 2 from each category
      }
    });

    // Shuffle and limit to requested count
    return selectedProducts.sort(() => 0.5 - Math.random()).slice(0, count);
  };

  const filteredProducts = (() => {
    // If Snack Kiloan category is selected, don't show regular products
    if (selectedCategory === "Snack Kiloan") {
      console.log('🔍 Snack Kiloan selected - hiding regular products');
      return [];
    }
    
    // Start with category filtering
    let productList: Product[] = [];
    
    if (selectedCategory === "Semua") {
      productList = products; // Show all products
    } else if (selectedCategory === "Bakpia dan Kue Basah") {
      productList = products.filter(product => 
        product.category === "Bakpia & Kue Basah" || product.category === "Kue Basah"
      );
    } else if (selectedCategory === "Minuman") {
      productList = products.filter(product => product.category === "Minuman Instan");
    } else {
      productList = products.filter(product => product.category === selectedCategory);
    }
    
    // Apply search filter if there's a search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      productList = productList.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }
    
    return productList;
  })();

  const filteredSnackKiloanProducts = (() => {
    // Handle special category mappings for SnackKiloan products
    let products = selectedCategory === "Semua" || selectedCategory === "Snack Kiloan"
      ? snackKiloanProducts
      : [];
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      products = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        (product.description && product.description.toLowerCase().includes(query))
      );
    }
    
    console.log('🔍 Filtered Snack Kiloan:', products.length);
    return products;
  })();

  const addToCart = (product: Product, quantityChange: number = 1) => {
    console.log('addToCart called:', product.name, quantityChange);
    
    // Use parent's onAddToCart handler
    onAddToCart(product, quantityChange);
    
    // Show toast for positive quantity changes
    if (quantityChange > 0) {
      toast({
        title: "✅ Produk ditambahkan!",
        description: `${product.name} berhasil ditambahkan ke keranjang`,
        duration: 3000, // Increased duration
      });
    }
  };

  const addSnackKiloanToCart = (item: SnackKiloanCartItem) => {
    // Find the original product to get description
    const originalProduct = snackKiloanProducts.find(p => p.id === item.id);
    const cartItem: CartItem = {
      ...item,
      description: originalProduct?.description || '',
      id: typeof item.id === 'string' ? parseInt((item.id as string).replace('sk', '')) + 1000 : item.id as number
    };
    
    // Use parent's onAddToCart handler
    onAddToCart(cartItem, cartItem.quantity);

    toast({
      title: "✅ Produk ditambahkan!",
      description: `${item.name} (${item.weightKg}kg) telah ditambahkan ke keranjang`,
      duration: 3000,
    });
  };

  const updateCartItemQuantity = (id: number, quantity: number) => {
    onUpdateQuantity(id, quantity);
  };

  const removeFromCart = (id: number) => {
    onRemoveFromCart(id);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const handleCheckout = () => {
    // Langsung buka form data user, tidak ada popup
    if (cartItems.length > 0) {
      setIsUserDataModalOpen(true);
    }
  };

  const handleCheckoutComplete = () => {
    onClearCart();
    setIsUserDataModalOpen(false);
    toast({
      title: "Pesanan berhasil!",
      description: "Terima kasih atas pesanan Anda. Kami akan segera menghubungi Anda.",
    });
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailModalOpen(true);
  };

  const handleDetailModalAddToCart = (product: Product, quantity: number) => {
    addToCart(product, quantity);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemCount={totalItems} 
        onCartClick={openCart}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Katalog Produk</h1>
        </div>

        {/* Category Filter - Rounded full design like Home page */}
        <div className="relative">
          {/* Gradient fade indicators */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex overflow-x-auto gap-2 mb-6 pb-2 px-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 whitespace-nowrap flex items-center gap-2 ${
                selectedCategory === category 
                  ? 'bg-orange-600 text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {selectedCategory === category && <Check className="w-4 h-4" />}
              {category}
            </button>
          ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && filteredSnackKiloanProducts.length === 0 && !isLoading && (
          <div className="text-center py-12 px-4">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {searchQuery ? 'Produk Tidak Ditemukan' : 'Belum Ada Produk'}
              </h3>
              <p className="text-gray-600 mb-6">
                {searchQuery 
                  ? `Tidak ada produk yang cocok dengan "${searchQuery}"`
                  : 'Belum ada produk di kategori ini'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="px-6 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-colors shadow-md"
                  >
                    Reset Pencarian
                  </button>
                )}
                <button
                  onClick={() => {
                    setSelectedCategory('Semua');
                    setSearchQuery("");
                  }}
                  className="px-6 py-3 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition-colors shadow-md"
                >
                  Lihat Semua Produk
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Loading Skeleton */}
        {isLoading && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-amber-700/50 rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg border border-amber-600/50">
                  {/* Image Skeleton */}
                  <div className="aspect-square bg-amber-600/30 rounded-md sm:rounded-lg mb-2"></div>
                  {/* Title Skeleton */}
                  <div className="h-4 bg-amber-600/30 rounded mb-2"></div>
                  <div className="h-4 bg-amber-600/30 rounded w-3/4 mb-2"></div>
                  {/* Price Skeleton */}
                  <div className="h-5 bg-amber-600/30 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Products Grid - Only show if there are regular products */}
        {filteredProducts.length > 0 && !isLoading && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-6">
            {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-amber-700 rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg border border-amber-600 relative">
                {/* Product Image */}
                <div 
                  className="aspect-square bg-amber-600 rounded-md sm:rounded-lg mb-2 overflow-hidden relative cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Eye Icon Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Weight Badge - Top Left */}
                  {product.weight && (
                    <div className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-white bg-opacity-90 backdrop-blur-sm px-1 py-0.5 sm:px-2 sm:py-1 rounded text-xs font-bold text-gray-800 shadow-md">
                      {product.weight}
                    </div>
                  )}
                  
                  {/* Add Button with Quantity Control */}
                  <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2">
                    {(() => {
                      const cartItem = cartItems.find(item => item.id === product.id);
                      const currentQuantity = cartItem ? cartItem.quantity : 0;
                      
                      if (currentQuantity === 0) {
                        return (
                          <button 
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              console.log('Products: Add button clicked - should not refresh');
                              addToCart(product, 1);
                              return false;
                            }}
                            className="w-6 h-6 sm:w-8 sm:h-8 bg-white hover:bg-gray-100 text-red-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-150"
                          >
                            <Plus className="h-3 w-3 sm:h-4 sm:w-4 font-bold" />
                          </button>
                        );
                      } else {
                        return (
                          <div className="bg-white rounded-full shadow-lg flex items-center justify-center">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                console.log('Products: Minus button clicked');
                                addToCart(product, -1);
                                return false;
                              }}
                              className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 hover:bg-gray-100 rounded-l-full flex items-center justify-center transition-colors"
                            >
                              <Minus className="h-2 w-2 sm:h-3 sm:w-3" />
                            </button>
                            <span className="px-1 sm:px-2 text-xs sm:text-sm font-bold text-red-600 min-w-[16px] sm:min-w-[20px] text-center">
                              {currentQuantity}
                            </span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                console.log('Products: Plus button clicked');
                                addToCart(product, 1);
                                return false;
                              }}
                              className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 hover:bg-gray-100 rounded-r-full flex items-center justify-center transition-colors"
                            >
                              <Plus className="h-2 w-2 sm:h-3 sm:w-3" />
                            </button>
                          </div>
                        );
                      }
                    })()}
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-1">
                  <h3 className="font-bold text-white text-xs sm:text-sm leading-tight line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-white">
                      Rp {product.price.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        )}

        {/* Snack Kiloan Products - Only show if there are snack kiloan products */}
        {filteredSnackKiloanProducts.length > 0 && !isLoading && (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredSnackKiloanProducts.map((product) => (
              <SnackKiloanCard
                key={product.id}
                product={product}
                onAddToCart={addSnackKiloanToCart}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />

      {/* Floating Checkout Button - Hide when modals are open */}
      {totalItems > 0 && !isUserDataModalOpen && !isCartOpen && (
        <FloatingCheckoutButton 
          cartItems={cartItems}
          onCheckoutClick={handleCheckout}
          onCartClick={handleCheckout}
        />
      )}

      {/* Scroll to Top Button - Floating */}
      {showScrollTop && (
        <div className="fixed bottom-24 right-6 z-50">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-orange-600 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-orange-700 hover:shadow-2xl transition-all duration-200 transform hover:scale-110 animate-fade-in"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Cart Modal */}
      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateCartItemQuantity}
        onRemoveItem={removeFromCart}
      />

      {/* User Data Modal */}
      <UserDataModal 
        isOpen={isUserDataModalOpen}
        onClose={() => setIsUserDataModalOpen(false)}
        cartItems={cartItems}
        onCheckoutComplete={handleCheckoutComplete}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onAddToCart={handleDetailModalAddToCart}
        currentQuantity={selectedProduct ? (cartItems.find(item => item.id === selectedProduct.id)?.quantity || 0) : 0}
      />
    </div>
  );
}
