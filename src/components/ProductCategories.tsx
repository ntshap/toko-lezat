import { useState, useMemo } from "react";
import ProductCard, { Product } from "./ProductCard";
import { CartItem } from "./CartModal";
import { Button } from "@/components/ui/button";
import { Plus, Minus, ShoppingBag } from "lucide-react";

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

// Product categories (ordered to match Home page)
const categories = [
  "Kripik dan Snack Ringan",
  "Kue Kering", 
  "Keripik",
  "Permen & Manisan",
  "Bakpia dan Kue Basah",
  "Kacang-kacangan",
  "Minuman Instan",
  "Lain-lain"
];

// Products data organized by category
const products: Product[] = [
  // Kue Kering
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
    id: 2,
    name: "SUS BULAT",
    price: 21500,
    image: susBulat,
    description: "Sus bulat dengan krim manis yang lezat",
    category: "Kue Kering",
    weight: "235 g"
  },
  {
    id: 3,
    name: "SUS TULANG",
    price: 22000,
    image: susTulang,
    description: "Sus tulang dengan bentuk unik dan rasa yang istimewa",
    category: "Kue Kering",
    weight: "235 g"
  },
  {
    id: 4,
    name: "BAGELEN KISMIS",
    price: 21000,
    image: bagelenKismis,
    description: "Bagelen dengan kismis manis yang lezat",
    category: "Kue Kering",
    weight: "235 g"
  },
  {
    id: 5,
    name: "BAGELEN DAVRONAS",
    price: 16500,
    image: bagelenDavronas,
    description: "Bagelen davronas dengan rasa tradisional yang autentik",
    category: "Kue Kering",
    weight: "235 g"
  },
  {
    id: 6,
    name: "NOPIA GULA JAWA",
    price: 20000,
    image: nopiaGulaJawa,
    description: "Nopia dengan gula jawa yang manis dan legit",
    category: "Kue Kering",
    weight: "490 g"
  },
  {
    id: 7,
    name: "NOPIA COKLAT",
    price: 20000,
    image: nopiaCoklat,
    description: "Nopia coklat dengan rasa coklat yang rich dan lezat",
    category: "Kue Kering",
    weight: "490 g"
  },
  {
    id: 8,
    name: "NOPIA PANDAN",
    price: 20000,
    image: nopiaPandan,
    description: "Nopia pandan dengan aroma pandan yang wangi dan rasa yang khas",
    category: "Kue Kering",
    weight: "490 g"
  },
  {
    id: 9,
    name: "MANCO PANJANG",
    price: 28500,
    image: mancoPanjang,
    description: "Manco panjang dengan tekstur renyah dan rasa manis",
    category: "Kue Kering",
    weight: "290 g"
  },
  {
    id: 10,
    name: "MANCO BULAT",
    price: 28500,
    image: mancoBulat,
    description: "Manco bulat dengan bentuk menarik dan rasa yang lezat",
    category: "Kue Kering",
    weight: "290 g"
  },
  {
    id: 11,
    name: "MANCO SUPER",
    price: 27500,
    image: mancoSuper,
    description: "Manco super dengan kualitas premium dan rasa istimewa",
    category: "Kue Kering",
    weight: "285 g"
  },
  {
    id: 12,
    name: "BAGELEN SISIR SPECIAL",
    price: 27000,
    image: bagelenSisirSpecial,
    description: "Bagelen sisir special dengan desain unik dan rasa yang lezat",
    category: "Kue Kering",
    weight: "235 g"
  },
  {
    id: 13,
    name: "BAGELEN OVAL",
    price: 25500,
    image: bagelenOval,
    description: "Bagelen oval dengan bentuk elegan dan rasa yang manis",
    category: "Kue Kering",
    weight: "235 g"
  },
  {
    id: 14,
    name: "BOLU KUWUK",
    price: 28000,
    image: boluKuwuk,
    description: "Bolu kuwuk tradisional dengan tekstur lembut dan rasa yang khas",
    category: "Kue Kering",
    weight: "235 g"
  },
  {
    id: 15,
    name: "BOLU KUWUK AREN",
    price: 29000,
    image: boluKuwukAren,
    description: "Bolu kuwuk aren dengan gula aren asli yang memberikan rasa manis alami",
    category: "Kue Kering",
    weight: "235 g"
  },
  
  // Minuman Instan
  {
    id: 41,
    name: "Kopi Bubuk Robusta",
    price: 45000,
    image: susCoklat,
    description: "Kopi bubuk robusta asli dengan cita rasa kuat dan aroma wangi",
    category: "Minuman Instan"
  },
  {
    id: 42,
    name: "Teh Celup Melati",
    price: 25000,
    image: susCoklat,
    description: "Teh celup dengan aroma melati yang menenangkan dan segar",
    category: "Minuman Instan"
  },
  
  // Permen
  {
    id: 51,
    name: "Permen Jahe",
    price: 15000,
    image: susCoklat,
    description: "Permen jahe tradisional dengan rasa hangat dan menyegarkan",
    category: "Permen"
  },
  {
    id: 52,
    name: "Permen Mint",
    price: 12000,
    image: susCoklat,
    description: "Permen mint segar untuk menyegarkan napas dan tenggorokan",
    category: "Permen"
  },
  
  // Kacang-kacangan
  {
    id: 61,
    name: "Gula Kacang Premium",
    price: 30000,
    image: susCoklat,
    description: "Gula kacang premium dengan kacang tanah pilihan dan gula berkualitas",
    category: "Kacang-kacangan"
  },
  {
    id: 62,
    name: "Gula Kacang Special",
    price: 35000,
    image: susCoklat,
    description: "Varian khusus gula kacang dengan rasa lebih gurih dan kacang extra",
    category: "Kacang-kacangan"
  },
  {
    id: 63,
    name: "Kacang Bawang",
    price: 28000,
    image: susCoklat,
    description: "Kacang bawang renyah dengan bumbu yang meresap dan gurih",
    category: "Kacang-kacangan"
  },
  
  // Lain-lain
  {
    id: 71,
    name: "Slondok",
    price: 25000,
    image: susCoklat,
    description: "Camilan tradisional yang renyah dan gurih, cocok untuk segala usia",
    category: "Lain-lain"
  },
  
  // Bakpia & Kue Basah Products
  {
    id: 81,
    name: "BAKPIA PATOK 65 KACANG HIJAU",
    price: 32000,
    image: bakpiaPathok65KacangHijau,
    description: "Bakpia Patok 65 dengan isian kacang hijau yang lembut dan autentik",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 82,
    name: "BAKPIA PATOK 65 KEJU",
    price: 32000,
    image: bakpiaPathok65Keju,
    description: "Bakpia Patok 65 dengan isian keju yang creamy dan lezat",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 83,
    name: "BAKPIA PATOK 65 COKLAT",
    price: 32000,
    image: bakpiaPathok65Coklat,
    description: "Bakpia Patok 65 dengan isian coklat yang manis dan kaya rasa",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 84,
    name: "BAKPIA PATOK 65 KOMBINASI",
    price: 32000,
    image: bakpiaPathok65Kombinasi,
    description: "Bakpia Patok 65 kombinasi berbagai rasa dalam satu kemasan",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 85,
    name: "BAKPIA KING COKLAT",
    price: 34000,
    image: bakpiaKingCoklat,
    description: "Bakpia King dengan isian coklat premium yang rich dan lembut",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 86,
    name: "BAKPIA KING UBI UNGU",
    price: 34000,
    image: bakpiaKingUbiUngu,
    description: "Bakpia King dengan isian ubi ungu yang manis dan bergizi",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 87,
    name: "BAKPIA KING",
    price: 34000,
    image: bakpiaKing,
    description: "Bakpia King dengan resep istimewa dan kualitas premium",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 88,
    name: "BAKPIA 578 KERING",
    price: 20500,
    image: bakpia578Kering,
    description: "Bakpia 578 dengan tekstur kering yang renyah dan tahan lama",
    category: "Bakpia & Kue Basah",
    weight: "15 g"
  },
  {
    id: 89,
    name: "BAKPIA 578 BASAH",
    price: 28000,
    image: bakpia578Basah,
    description: "Bakpia 578 dengan tekstur basah yang lembut dan fresh",
    category: "Bakpia & Kue Basah",
    weight: "15 g"
  },
  {
    id: 90,
    name: "BAKPIA PATOK MULYA KEJU",
    price: 34000,
    image: bakpiaPathokMulyaKeju,
    description: "Bakpia Patok Mulya dengan isian keju yang creamy dan berkualitas",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 91,
    name: "BAKPIA PATOK MULYA KACANG HIJAU",
    price: 34000,
    image: bakpiaPathokMulyaKacangHijau,
    description: "Bakpia Patok Mulya dengan isian kacang hijau yang halus dan lezat",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 92,
    name: "BAKPIA PATOK MULYA COKLAT",
    price: 34000,
    image: bakpiaPathokMulyaCoklat,
    description: "Bakpia Patok Mulya dengan isian coklat yang premium dan rich",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 93,
    name: "BAKPIA PATOK 525 COKLAT",
    price: 22000,
    image: bakpiaPathok525Coklat,
    description: "Bakpia Patok 525 dengan isian coklat yang manis dan terjangkau",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 94,
    name: "BAKPIA PATOK 525 KACANG HIJAU",
    price: 22000,
    image: bakpiaPathok525KacangHijau,
    description: "Bakpia Patok 525 dengan isian kacang hijau yang tradisional",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 95,
    name: "BAKPIA PATOK 525 KEJU",
    price: 22000,
    image: bakpiaPathok525Keju,
    description: "Bakpia Patok 525 dengan isian keju yang lembut dan gurih",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 96,
    name: "BAKPIA PATOK 88 NY.MELLY ANEKA RASA",
    price: 33500,
    image: bakpiaPathok88NyMellyAnekaRasa,
    description: "Bakpia Patok 88 Ny.Melly dengan berbagai varian rasa yang istimewa",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 97,
    name: "BAKPIA PATOK 88 NY.MELLY KUMBU HITAM",
    price: 33500,
    image: bakpiaPathok88NyMellyKumbuHitam,
    description: "Bakpia Patok 88 Ny.Melly dengan isian kumbu hitam yang unik",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 98,
    name: "BAKPIA PATOK 88 NY.MELLY UBI UNGU",
    price: 33500,
    image: bakpiaPathok88NyMellyUbiUngu,
    description: "Bakpia Patok 88 Ny.Melly dengan isian ubi ungu yang sehat dan lezat",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 99,
    name: "BAKPIA PATOK 88 NY.MELLY DURIAN",
    price: 33500,
    image: bakpiaPathok88NyMellyDurian,
    description: "Bakpia Patok 88 Ny.Melly dengan isian durian yang harum dan creamy",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 100,
    name: "BAKPIA PATOK 88 NY.MELLY KEJU",
    price: 33500,
    image: bakpiaPathok88NyMellyKeju,
    description: "Bakpia Patok 88 Ny.Melly dengan isian keju yang premium dan lezat",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 101,
    name: "BAKPIA PATOK 88 NY.MELLY ORIGINAL",
    price: 33500,
    image: bakpiaPathok88NyMellyOriginal,
    description: "Bakpia Patok 88 Ny.Melly original dengan resep autentik",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 102,
    name: "BAKPIA PATOK 88 BASAH",
    price: 44500,
    image: bakpiaPathok88Basah,
    description: "Bakpia Patok 88 dengan tekstur basah yang lembut dan segar",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 103,
    name: "BAKPIA PATOK 88 KUNING",
    price: 35000,
    image: bakpiaPathok88Kuning,
    description: "Bakpia Patok 88 kuning dengan warna dan rasa yang khas",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 104,
    name: "BAKPIA PATOK 88 MERAH",
    price: 36500,
    image: bakpiaPathok88Merah,
    description: "Bakpia Patok 88 merah dengan cita rasa yang spesial",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 105,
    name: "BAKPIA PATOK 35 KOMBINASI",
    price: 30000,
    image: bakpiaPathok35Kombinasi,
    description: "Bakpia Patok 35 kombinasi dengan berbagai varian dalam satu paket",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 106,
    name: "BAKPIA MAREM",
    price: 36000,
    image: bakpiaMarem,
    description: "Bakpia Marem dengan resep khusus dan cita rasa yang istimewa",
    category: "Bakpia & Kue Basah",
    weight: "15 g"
  },
  {
    id: 107,
    name: "BAKPIA PATOK 81 KEJU",
    price: 30500,
    image: bakpiaPathok81Keju,
    description: "Bakpia Patok 81 dengan isian keju yang lezat dan berkualitas",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 108,
    name: "BAKPIA PATOK AGUNG",
    price: 52000,
    image: bakpiaPathokAgung,
    description: "Bakpia Patok Agung dengan kualitas premium dan rasa terbaik",
    category: "Bakpia & Kue Basah",
    weight: "20 g"
  },
  {
    id: 109,
    name: "WINGKO BABAT 35 BESAR",
    price: 53000,
    image: wingkoBabat35Besar,
    description: "Wingko Babat 35 ukuran besar dengan tekstur kenyal dan rasa manis",
    category: "Bakpia & Kue Basah",
    weight: "35 g"
  },
  {
    id: 110,
    name: "WINGKO BABAT 35 KECIL",
    price: 30000,
    image: wingkoBabat35Kecil,
    description: "Wingko Babat 35 ukuran kecil yang praktis dan lezat",
    category: "Bakpia & Kue Basah",
    weight: "25 g"
  },
  {
    id: 111,
    name: "YANGKO KEMBAR",
    price: 22000,
    image: yangkoKembar,
    description: "Yangko kembar dengan bentuk unik dan rasa yang manis",
    category: "Bakpia & Kue Basah",
    weight: "30 g"
  },
  {
    id: 112,
    name: "YANGKO GIANT",
    price: 26000,
    image: yangkoGiant,
    description: "Yangko Giant dengan ukuran besar dan rasa yang istimewa",
    category: "Bakpia & Kue Basah",
    weight: "40 g"
  },
  {
    id: 113,
    name: "YANGKO ANEKA RASA GOSE (SGT)",
    price: 21500,
    image: yangkoAnekaRasaGose,
    description: "Yangko aneka rasa gose dengan berbagai varian rasa yang lezat",
    category: "Bakpia & Kue Basah",
    weight: "25 g"
  },
  // Minuman Instan Products
  {
    id: 114,
    name: "ETAWAVIT ORIGINAL",
    price: 60000,
    image: etawavitOriginal,
    description: "Susu etawavit original dengan nutrisi lengkap dan rasa yang lezat",
    category: "Minuman Instan",
    weight: "500 g"
  },
  {
    id: 115,
    name: "ETAWAVIT STRAWBERRY",
    price: 60000,
    image: etawavitStrawberry,
    description: "Susu etawavit rasa strawberry yang segar dan bergizi",
    category: "Minuman Instan",
    weight: "500 g"
  },
  {
    id: 116,
    name: "ETAWAVIT COKLAT",
    price: 60000,
    image: etawavitCoklat,
    description: "Susu etawavit rasa coklat yang kaya dan lezat",
    category: "Minuman Instan",
    weight: "500 g"
  },
  {
    id: 117,
    name: "ETAWAVIT VANILA",
    price: 60000,
    image: etawavitVanila,
    description: "Susu etawavit rasa vanila yang harum dan creamy",
    category: "Minuman Instan",
    weight: "500 g"
  },
  {
    id: 118,
    name: "KOPI REMPAH MAK GLENG",
    price: 36000,
    image: kopiRempahMakGleng,
    description: "Kopi rempah dengan campuran rempah-rempah tradisional khas Mak Gleng",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 119,
    name: "KOPI ANGGUR MERAH MAK GLENG",
    price: 36000,
    image: kopiAnggurMerahMakGleng,
    description: "Kopi dengan perpaduan rasa anggur merah yang unik dari Mak Gleng",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 120,
    name: "KOPI TJANGKIR",
    price: 32500,
    image: kopiTjangkir,
    description: "Kopi tjangkir dengan cita rasa kopi tradisional yang autentik",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 121,
    name: "COKLAT OMAH JOGJA SUSU",
    price: 34000,
    image: coklatOmahJogjaSusu,
    description: "Minuman coklat susu khas Omah Jogja dengan rasa yang rich dan creamy",
    category: "Minuman Instan",
    weight: "250 g"
  },
  {
    id: 122,
    name: "COKLAT OMAH JOGJA DARK",
    price: 34000,
    image: coklatOmahJogjaDark,
    description: "Minuman coklat dark khas Omah Jogja dengan rasa coklat yang intense",
    category: "Minuman Instan",
    weight: "250 g"
  },
  {
    id: 123,
    name: "COKLAT OMAH JOGJA MATCHA",
    price: 47500,
    image: coklatOmahJogjaMatcha,
    description: "Minuman coklat matcha khas Omah Jogja dengan perpaduan rasa yang unik",
    category: "Minuman Instan",
    weight: "250 g"
  },
  {
    id: 124,
    name: "KOPI ARABIKA SINDORO",
    price: 44500,
    image: kopiArabikaSindoro,
    description: "Kopi arabika asli dari Gunung Sindoro dengan cita rasa yang premium",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 125,
    name: "KOPI GESING ROBUSTA",
    price: 38000,
    image: kopiGesingRobusta,
    description: "Kopi robusta Gesing dengan karakter rasa yang kuat dan aromatic",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 126,
    name: "KOPI TEMANGGUNG ARABIKA SUMBING",
    price: 36500,
    image: kopiTemanggungArabikaSumbing,
    description: "Kopi arabika Sumbing dari Temanggung dengan profil rasa yang istimewa",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 127,
    name: "KOPI TEMANGGUNG BLEND",
    price: 34000,
    image: kopiTemanggungBlend,
    description: "Kopi blend Temanggung dengan perpaduan arabika dan robusta yang seimbang",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 128,
    name: "RACIK SEWU WEDANG SELARAS",
    price: 16500,
    image: racikSewuWedangSelaras,
    description: "Wedang selaras Racik Sewu dengan campuran rempah yang menyehatkan",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 129,
    name: "RACIK SEWU JAHE JERUK NIPIS",
    price: 16500,
    image: racikSewuJaheJerukNipis,
    description: "Minuman jahe jeruk nipis Racik Sewu yang hangat dan menyegarkan",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 130,
    name: "RACIK SEWU KUNYIT JERUK NIPIS",
    price: 16500,
    image: racikSewuKunyitJerukNipis,
    description: "Minuman kunyit jeruk nipis Racik Sewu yang menyehatkan dan segar",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 131,
    name: "KONDANG FOOD KULIT MANGGIS",
    price: 13500,
    image: kondangFoodKulitManggis,
    description: "Minuman herbal kulit manggis Kondang Food dengan manfaat antioksidan",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 132,
    name: "KONDANG FOOD DAUN KELOR",
    price: 13500,
    image: kondangFoodDaunKelor,
    description: "Minuman herbal daun kelor Kondang Food yang kaya nutrisi",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 133,
    name: "BANDREX HANJUANG",
    price: 16000,
    image: bandrexHanjuang,
    description: "Minuman bandrex hanjuang tradisional dengan rasa yang khas",
    category: "Minuman Instan",
    weight: "5 bungkus"
  },
  {
    id: 134,
    name: "BAJIGUR HANJUANG",
    price: 16000,
    image: bajigurHanjuang,
    description: "Bajigur hanjuang dengan rasa tradisional yang hangat dan manis",
    category: "Minuman Instan",
    weight: "5 bungkus"
  },
  {
    id: 135,
    name: "BANDREX SPESIAL",
    price: 23000,
    image: bandrexSpesial,
    description: "Bandrex spesial dengan kualitas premium dan rasa yang istimewa",
    category: "Minuman Instan",
    weight: "10 bungkus"
  },
  {
    id: 136,
    name: "WEDANG SECANG TAS",
    price: 11500,
    image: wedangSecangTas,
    description: "Wedang secang dalam kemasan tas yang praktis dan menyehatkan",
    category: "Minuman Instan",
    weight: "5 bungkus"
  },
  {
    id: 137,
    name: "WEDANG UWUH TAS",
    price: 11000,
    image: wedangUwuhTas,
    description: "Wedang uwuh dalam kemasan tas dengan campuran rempah tradisional",
    category: "Minuman Instan",
    weight: "5 bungkus"
  },
  {
    id: 138,
    name: "WEDANG UWUH BESEK",
    price: 21500,
    image: wedangUwuhBesek,
    description: "Wedang uwuh dalam kemasan besek yang tradisional dan otentik",
    category: "Minuman Instan",
    weight: "5 bungkus"
  },
  {
    id: 139,
    name: "WEDANG UWUH PASAK BUMI PLASTIK",
    price: 20500,
    image: wedangUwuhPasakBumiPlastik,
    description: "Wedang uwuh dengan pasak bumi dalam kemasan praktis",
    category: "Minuman Instan",
    weight: "5 bungkus"
  },
  {
    id: 140,
    name: "WEDANG UWUH GULA PLASTIK",
    price: 17500,
    image: wedangUwuhGulaPlastik,
    description: "Wedang uwuh dengan gula dalam kemasan plastik yang praktis",
    category: "Minuman Instan",
    weight: "5 bungkus"
  },
  {
    id: 141,
    name: "JAHE MERAH INSTANT BOTOL",
    price: 20500,
    image: jaheMerahInstantBotol,
    description: "Jahe merah instant dalam botol yang hangat dan menyehatkan",
    category: "Minuman Instan",
    weight: "300 g"
  },
  {
    id: 142,
    name: "GULA BATU HERBAL TOPLES",
    price: 22000,
    image: gulaBatuHerbalToples,
    description: "Gula batu herbal dalam toples dengan manfaat kesehatan",
    category: "Minuman Instan",
    weight: "500 g"
  },
  {
    id: 143,
    name: "GULA JAHE MIKA",
    price: 24000,
    image: gulaJaheMika,
    description: "Gula jahe dalam kemasan mika yang praktis dan berkualitas",
    category: "Minuman Instan",
    weight: "250 g"
  },
  {
    id: 144,
    name: "GULA JAWA GEPREK",
    price: 10000,
    image: gulaJawaGeprek,
    description: "Gula jawa geprek asli dengan rasa manis alami yang khas",
    category: "Minuman Instan",
    weight: "200 g"
  },
  {
    id: 145,
    name: "KONDANG FOOD SEKOTENG PLASTIK",
    price: 20500,
    image: kondangFoodSekotengPlastik,
    description: "Sekoteng Kondang Food dalam kemasan plastik yang mudah disajikan",
    category: "Minuman Instan",
    weight: "150 g"
  },
  {
    id: 146,
    name: "KONDANG FOOD BERAS KENCUR",
    price: 13500,
    image: kondangFoodBerasKencur,
    description: "Minuman beras kencur Kondang Food yang segar dan menyehatkan",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 147,
    name: "KONDANG FOOD BIR PLETOK",
    price: 20500,
    image: kondangFoodBirPletok,
    description: "Bir pletok Kondang Food dengan rasa rempah yang khas Jakarta",
    category: "Minuman Instan",
    weight: "150 g"
  },
  {
    id: 148,
    name: "KONDANG FOOD JAHE MERAH",
    price: 20500,
    image: kondangFoodJaheMerah,
    description: "Jahe merah Kondang Food yang hangat dan berkhasiat untuk kesehatan",
    category: "Minuman Instan",
    weight: "150 g"
  },
  {
    id: 149,
    name: "KONDANG FOOD WEDANG SERAI",
    price: 20500,
    image: kondangFoodWedangSerai,
    description: "Wedang serai Kondang Food yang harum dan menyegarkan",
    category: "Minuman Instan",
    weight: "150 g"
  }
];

interface ProductCategoriesProps {
  onAddToCart: (product: Product, quantity: number) => void;
  searchQuery: string;
  cartItems: CartItem[];
  onCartClick: () => void;
}

export default function ProductCategories({ 
  onAddToCart, 
  searchQuery, 
  cartItems, 
  onCartClick 
}: ProductCategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

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

  // Filter products based on search query and selected category
  const filteredProducts = useMemo(() => {
    let filtered = products;
    
    // Filter by category
    if (selectedCategory !== "Semua") {
      if (selectedCategory === "Bakpia & Kue Basah") {
        // Include both "Bakpia & Kue Basah" and "Kue Basah" categories
        filtered = filtered.filter(product => 
          product.category === "Bakpia & Kue Basah" || 
          product.category === "Kue Basah"
        );
      } else {
        filtered = filtered.filter(product => product.category === selectedCategory);
      }
    } else {
      // For "Semua" category, get 10 random products from different categories
      filtered = getRandomProducts(products, 10);
    }
    
    // Filter by search query (only if not "Semua" or if search query exists)
    if (searchQuery && selectedCategory !== "Semua") {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (searchQuery && selectedCategory === "Semua") {
      // For "Semua" with search, search in all products first, then randomize
      const searchFiltered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      filtered = getRandomProducts(searchFiltered, 10);
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

  return (
    <>
      {/* Red Section with Title and Category Filters - EXACTLY like your UI */}
      <section id="products" className="bg-red-600 py-6">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              Belanja Online di pusatoleholehlezat
            </h2>
          </div>

          {/* Category Filter Buttons - White buttons exactly like your UI */}
          <div className="flex overflow-x-auto scrollbar-hide gap-2 pb-4">
            <button
              onClick={() => setSelectedCategory("Semua")}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                selectedCategory === "Semua"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Semua
            </button>
            
            {/* Category buttons matching your UI design */}
            {['Kripik dan Snack Ringan', 'Kue Kering', 'Permen', 'Bakpia dan Kue Basah', 'Kacang-kacangan', 'Snack Kiloan', 'Minuman', 'Lain-lain'].map((category) => {
              // Map display name to actual category name
              let actualCategory = category;
              if (category === 'Minuman') {
                actualCategory = 'Minuman Instan';
              } else if (category === 'Bakpia dan Kue Basah') {
                actualCategory = 'Bakpia & Kue Basah'; // Keep existing product category for filtering
              }
              
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(actualCategory)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    selectedCategory === actualCategory
                      ? "bg-orange-500 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Products Grid - 2 columns on mobile, more on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mt-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-amber-700 rounded-xl p-3 shadow-lg transition-all duration-300 border border-amber-600 relative">
                  {/* Product Image */}
                  <div className="aspect-square bg-amber-600 rounded-lg mb-2 overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Weight Badge - Top Left */}
                    {product.weight && (
                      <div className="absolute top-2 left-2 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-800 shadow-md">
                        {product.weight}
                      </div>
                    )}
                    
                    {/* Add Button with Quantity Control */}
                    <div className="absolute bottom-2 right-2">
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
                                onAddToCart(product, 1);
                              }}
                              className="w-8 h-8 bg-white hover:bg-gray-100 text-red-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                            >
                              <Plus className="h-4 w-4 font-bold" />
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
                                  onAddToCart(product, -1);
                                }}
                                className="w-6 h-6 text-red-600 hover:bg-gray-100 rounded-l-full flex items-center justify-center transition-colors"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="px-2 text-sm font-bold text-red-600 min-w-[20px] text-center">
                                {currentQuantity}
                              </span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  onAddToCart(product, 1);
                                }}
                                className="w-6 h-6 text-red-600 hover:bg-gray-100 rounded-r-full flex items-center justify-center transition-colors"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                          );
                        }
                      })()}
                    </div>
                  </div>

                  {/* Product Info - White text on brown background */}
                  <div className="space-y-1">
                    <h3 className="font-bold text-white text-sm leading-tight line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white">
                        Rp{product.price.toLocaleString('id-ID')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No products found message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-8">
              <p className="text-white text-sm">
                Tidak ada produk yang ditemukan untuk kategori "{selectedCategory}"
                {searchQuery && ` dengan pencarian "${searchQuery}"`}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
