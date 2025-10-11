import ProductCard, { Product } from "./ProductCard";
import { CartItem } from "./CartModal";
import { useState } from "react";
import { Filter, Grid, List, Star, Heart, Eye, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

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


const products: Product[] = [
  // Kue Kering Products
  {
    id: 1,
    name: "SUS COKLAT",
    price: 19000,
    image: susCoklat,
    description: "Sus coklat lezat dengan krim coklat yang lembut",
    weight: "240 g"
  },
  {
    id: 1,
    name: "SUS MELATI",
    price: 27000,
    image: susMelati,
    description: "Sus melati dengan aroma melati yang harum dan krim yang lembut",
    weight: "235 g"
  },
  {
    id: 2,
    name: "SUS BULAT",
    price: 21500,
    image: susBulat,
    description: "Sus bulat dengan krim manis yang lezat",
    weight: "235 g"
  },
  {
    id: 3,
    name: "SUS TULANG",
    price: 22000,
    image: susTulang,
    description: "Sus tulang dengan bentuk unik dan rasa yang istimewa",
    weight: "235 g"
  },
  {
    id: 4,
    name: "BAGELEN KISMIS",
    price: 21000,
    image: bagelenKismis,
    description: "Bagelen dengan kismis manis yang lezat",
    weight: "235 g"
  },
  {
    id: 5,
    name: "BAGELEN DAVRONAS",
    price: 16500,
    image: bagelenDavronas,
    description: "Bagelen davronas dengan rasa tradisional yang autentik",
    weight: "235 g"
  },
  {
    id: 6,
    name: "NOPIA GULA JAWA",
    price: 20000,
    image: nopiaGulaJawa,
    description: "Nopia dengan gula jawa yang manis dan legit",
    weight: "490 g"
  },
  {
    id: 7,
    name: "NOPIA COKLAT",
    price: 20000,
    image: nopiaCoklat,
    description: "Nopia coklat dengan rasa coklat yang rich dan lezat",
    weight: "490 g"
  },
  {
    id: 8,
    name: "NOPIA PANDAN",
    price: 20000,
    image: nopiaPandan,
    description: "Nopia pandan dengan aroma pandan yang wangi dan rasa yang khas",
    weight: "490 g"
  },
  {
    id: 9,
    name: "MANCO PANJANG",
    price: 28500,
    image: mancoPanjang,
    description: "Manco panjang dengan tekstur renyah dan rasa manis",
    weight: "290 g"
  },
  {
    id: 10,
    name: "MANCO BULAT",
    price: 28500,
    image: mancoBulat,
    description: "Manco bulat dengan bentuk menarik dan rasa yang lezat",
    weight: "290 g"
  },
  {
    id: 11,
    name: "MANCO SUPER",
    price: 27500,
    image: mancoSuper,
    description: "Manco super dengan kualitas premium dan rasa istimewa",
    weight: "285 g"
  },
  {
    id: 12,
    name: "BAGELEN SISIR SPECIAL",
    price: 27000,
    image: bagelenSisirSpecial,
    description: "Bagelen sisir special dengan desain unik dan rasa yang lezat",
    weight: "235 g"
  },
  {
    id: 13,
    name: "BAGELEN OVAL",
    price: 25500,
    image: bagelenOval,
    description: "Bagelen oval dengan bentuk elegan dan rasa yang manis",
    weight: "235 g"
  },
  {
    id: 14,
    name: "BOLU KUWUK",
    price: 28000,
    image: boluKuwuk,
    description: "Bolu kuwuk tradisional dengan tekstur lembut dan rasa yang khas",
    weight: "235 g"
  },
  {
    id: 15,
    name: "BOLU KUWUK AREN",
    price: 29000,
    image: boluKuwukAren,
    description: "Bolu kuwuk aren dengan gula aren asli yang memberikan rasa manis alami",
    weight: "235 g"
  },
  // Bakpia & Kue Basah Products
  {
    id: 16,
    name: "BAKPIA PATOK 65 KACANG HIJAU",
    price: 32000,
    image: bakpiaPathok65KacangHijau,
    description: "Bakpia Patok 65 dengan isian kacang hijau yang lembut dan autentik",
    weight: "20 g"
  },
  {
    id: 17,
    name: "BAKPIA PATOK 65 KEJU",
    price: 32000,
    image: bakpiaPathok65Keju,
    description: "Bakpia Patok 65 dengan isian keju yang creamy dan lezat",
    weight: "20 g"
  },
  {
    id: 18,
    name: "BAKPIA PATOK 65 COKLAT",
    price: 32000,
    image: bakpiaPathok65Coklat,
    description: "Bakpia Patok 65 dengan isian coklat yang manis dan kaya rasa",
    weight: "20 g"
  },
  {
    id: 19,
    name: "BAKPIA PATOK 65 KOMBINASI",
    price: 32000,
    image: bakpiaPathok65Kombinasi,
    description: "Bakpia Patok 65 kombinasi berbagai rasa dalam satu kemasan",
    weight: "20 g"
  },
  {
    id: 20,
    name: "BAKPIA KING COKLAT",
    price: 34000,
    image: bakpiaKingCoklat,
    description: "Bakpia King dengan isian coklat premium yang rich dan lembut",
    weight: "20 g"
  },
  {
    id: 21,
    name: "BAKPIA KING UBI UNGU",
    price: 34000,
    image: bakpiaKingUbiUngu,
    description: "Bakpia King dengan isian ubi ungu yang manis dan bergizi",
    weight: "20 g"
  },
  {
    id: 22,
    name: "BAKPIA KING",
    price: 34000,
    image: bakpiaKing,
    description: "Bakpia King dengan resep istimewa dan kualitas premium",
    weight: "20 g"
  },
  {
    id: 23,
    name: "BAKPIA 578 KERING",
    price: 20500,
    image: bakpia578Kering,
    description: "Bakpia 578 dengan tekstur kering yang renyah dan tahan lama",
    weight: "15 g"
  },
  {
    id: 24,
    name: "BAKPIA 578 BASAH",
    price: 28000,
    image: bakpia578Basah,
    description: "Bakpia 578 dengan tekstur basah yang lembut dan fresh",
    weight: "15 g"
  },
  {
    id: 25,
    name: "BAKPIA PATOK MULYA KEJU",
    price: 34000,
    image: bakpiaPathokMulyaKeju,
    description: "Bakpia Patok Mulya dengan isian keju yang creamy dan berkualitas",
    weight: "20 g"
  },
  {
    id: 26,
    name: "BAKPIA PATOK MULYA KACANG HIJAU",
    price: 34000,
    image: bakpiaPathokMulyaKacangHijau,
    description: "Bakpia Patok Mulya dengan isian kacang hijau yang halus dan lezat",
    weight: "20 g"
  },
  {
    id: 27,
    name: "BAKPIA PATOK MULYA COKLAT",
    price: 34000,
    image: bakpiaPathokMulyaCoklat,
    description: "Bakpia Patok Mulya dengan isian coklat yang premium dan rich",
    weight: "20 g"
  },
  {
    id: 28,
    name: "BAKPIA PATOK 525 COKLAT",
    price: 22000,
    image: bakpiaPathok525Coklat,
    description: "Bakpia Patok 525 dengan isian coklat yang manis dan terjangkau",
    weight: "20 g"
  },
  {
    id: 29,
    name: "BAKPIA PATOK 525 KACANG HIJAU",
    price: 22000,
    image: bakpiaPathok525KacangHijau,
    description: "Bakpia Patok 525 dengan isian kacang hijau yang tradisional",
    weight: "20 g"
  },
  {
    id: 30,
    name: "BAKPIA PATOK 525 KEJU",
    price: 22000,
    image: bakpiaPathok525Keju,
    description: "Bakpia Patok 525 dengan isian keju yang lembut dan gurih",
    weight: "20 g"
  },
  {
    id: 31,
    name: "BAKPIA PATOK 88 NY.MELLY ANEKA RASA",
    price: 33500,
    image: bakpiaPathok88NyMellyAnekaRasa,
    description: "Bakpia Patok 88 Ny.Melly dengan berbagai varian rasa yang istimewa",
    weight: "20 g"
  },
  {
    id: 32,
    name: "BAKPIA PATOK 88 NY.MELLY KUMBU HITAM",
    price: 33500,
    image: bakpiaPathok88NyMellyKumbuHitam,
    description: "Bakpia Patok 88 Ny.Melly dengan isian kumbu hitam yang unik",
    weight: "20 g"
  },
  {
    id: 33,
    name: "BAKPIA PATOK 88 NY.MELLY UBI UNGU",
    price: 33500,
    image: bakpiaPathok88NyMellyUbiUngu,
    description: "Bakpia Patok 88 Ny.Melly dengan isian ubi ungu yang sehat dan lezat",
    weight: "20 g"
  },
  {
    id: 34,
    name: "BAKPIA PATOK 88 NY.MELLY DURIAN",
    price: 33500,
    image: bakpiaPathok88NyMellyDurian,
    description: "Bakpia Patok 88 Ny.Melly dengan isian durian yang harum dan creamy",
    weight: "20 g"
  },
  {
    id: 35,
    name: "BAKPIA PATOK 88 NY.MELLY KEJU",
    price: 33500,
    image: bakpiaPathok88NyMellyKeju,
    description: "Bakpia Patok 88 Ny.Melly dengan isian keju yang premium dan lezat",
    weight: "20 g"
  },
  {
    id: 36,
    name: "BAKPIA PATOK 88 NY.MELLY ORIGINAL",
    price: 33500,
    image: bakpiaPathok88NyMellyOriginal,
    description: "Bakpia Patok 88 Ny.Melly original dengan resep autentik",
    weight: "20 g"
  },
  {
    id: 37,
    name: "BAKPIA PATOK 88 BASAH",
    price: 44500,
    image: bakpiaPathok88Basah,
    description: "Bakpia Patok 88 dengan tekstur basah yang lembut dan segar",
    weight: "20 g"
  },
  {
    id: 38,
    name: "BAKPIA PATOK 88 KUNING",
    price: 35000,
    image: bakpiaPathok88Kuning,
    description: "Bakpia Patok 88 kuning dengan warna dan rasa yang khas",
    weight: "20 g"
  },
  {
    id: 39,
    name: "BAKPIA PATOK 88 MERAH",
    price: 36500,
    image: bakpiaPathok88Merah,
    description: "Bakpia Patok 88 merah dengan cita rasa yang spesial",
    weight: "20 g"
  },
  {
    id: 40,
    name: "BAKPIA PATOK 35 KOMBINASI",
    price: 30000,
    image: bakpiaPathok35Kombinasi,
    description: "Bakpia Patok 35 kombinasi dengan berbagai varian dalam satu paket",
    weight: "20 g"
  },
  {
    id: 41,
    name: "BAKPIA MAREM",
    price: 36000,
    image: bakpiaMarem,
    description: "Bakpia Marem dengan resep khusus dan cita rasa yang istimewa",
    weight: "15 g"
  },
  {
    id: 42,
    name: "BAKPIA PATOK 81 KEJU",
    price: 30500,
    image: bakpiaPathok81Keju,
    description: "Bakpia Patok 81 dengan isian keju yang lezat dan berkualitas",
    weight: "20 g"
  },
  {
    id: 43,
    name: "BAKPIA PATOK AGUNG",
    price: 52000,
    image: bakpiaPathokAgung,
    description: "Bakpia Patok Agung dengan kualitas premium dan rasa terbaik",
    weight: "20 g"
  },
  {
    id: 44,
    name: "WINGKO BABAT 35 BESAR",
    price: 53000,
    image: wingkoBabat35Besar,
    description: "Wingko Babat 35 ukuran besar dengan tekstur kenyal dan rasa manis",
    weight: "35 g"
  },
  {
    id: 45,
    name: "WINGKO BABAT 35 KECIL",
    price: 30000,
    image: wingkoBabat35Kecil,
    description: "Wingko Babat 35 ukuran kecil yang praktis dan lezat",
    weight: "25 g"
  },
  {
    id: 46,
    name: "YANGKO KEMBAR",
    price: 22000,
    image: yangkoKembar,
    description: "Yangko kembar dengan bentuk unik dan rasa yang manis",
    weight: "30 g"
  },
  {
    id: 47,
    name: "YANGKO GIANT",
    price: 26000,
    image: yangkoGiant,
    description: "Yangko Giant dengan ukuran besar dan rasa yang istimewa",
    weight: "40 g"
  },
  {
    id: 48,
    name: "YANGKO ANEKA RASA GOSE (SGT)",
    price: 21500,
    image: yangkoAnekaRasaGose,
    description: "Yangko aneka rasa gose dengan berbagai varian rasa yang lezat",
    weight: "25 g"
  },
  // Minuman Instan Products
  {
    id: 49,
    name: "ETAWAVIT ORIGINAL",
    price: 60000,
    image: etawavitOriginal,
    description: "Susu etawavit original dengan nutrisi lengkap dan rasa yang lezat",
    category: "Minuman Instan",
    weight: "500 g"
  },
  {
    id: 50,
    name: "ETAWAVIT STRAWBERRY",
    price: 60000,
    image: etawavitStrawberry,
    description: "Susu etawavit rasa strawberry yang segar dan bergizi",
    category: "Minuman Instan",
    weight: "500 g"
  },
  {
    id: 51,
    name: "ETAWAVIT COKLAT",
    price: 60000,
    image: etawavitCoklat,
    description: "Susu etawavit rasa coklat yang kaya dan lezat",
    category: "Minuman Instan",
    weight: "500 g"
  },
  {
    id: 52,
    name: "ETAWAVIT VANILA",
    price: 60000,
    image: etawavitVanila,
    description: "Susu etawavit rasa vanila yang harum dan creamy",
    category: "Minuman Instan",
    weight: "500 g"
  },
  {
    id: 53,
    name: "KOPI REMPAH MAK GLENG",
    price: 36000,
    image: kopiRempahMakGleng,
    description: "Kopi rempah dengan campuran rempah-rempah tradisional khas Mak Gleng",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 54,
    name: "KOPI ANGGUR MERAH MAK GLENG",
    price: 36000,
    image: kopiAnggurMerahMakGleng,
    description: "Kopi dengan perpaduan rasa anggur merah yang unik dari Mak Gleng",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 55,
    name: "KOPI TJANGKIR",
    price: 32500,
    image: kopiTjangkir,
    description: "Kopi tjangkir dengan cita rasa kopi tradisional yang autentik",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 56,
    name: "COKLAT OMAH JOGJA SUSU",
    price: 34000,
    image: coklatOmahJogjaSusu,
    description: "Minuman coklat susu khas Omah Jogja dengan rasa yang rich dan creamy",
    category: "Minuman Instan",
    weight: "250 g"
  },
  {
    id: 57,
    name: "COKLAT OMAH JOGJA DARK",
    price: 34000,
    image: coklatOmahJogjaDark,
    description: "Minuman coklat dark khas Omah Jogja dengan rasa coklat yang intense",
    category: "Minuman Instan",
    weight: "250 g"
  },
  {
    id: 58,
    name: "COKLAT OMAH JOGJA MATCHA",
    price: 47500,
    image: coklatOmahJogjaMatcha,
    description: "Minuman coklat matcha khas Omah Jogja dengan perpaduan rasa yang unik",
    category: "Minuman Instan",
    weight: "250 g"
  },
  {
    id: 59,
    name: "KOPI ARABIKA SINDORO",
    price: 44500,
    image: kopiArabikaSindoro,
    description: "Kopi arabika asli dari Gunung Sindoro dengan cita rasa yang premium",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 60,
    name: "KOPI GESING ROBUSTA",
    price: 38000,
    image: kopiGesingRobusta,
    description: "Kopi robusta Gesing dengan karakter rasa yang kuat dan aromatic",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 61,
    name: "KOPI TEMANGGUNG ARABIKA SUMBING",
    price: 36500,
    image: kopiTemanggungArabikaSumbing,
    description: "Kopi arabika Sumbing dari Temanggung dengan profil rasa yang istimewa",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 62,
    name: "KOPI TEMANGGUNG BLEND",
    price: 34000,
    image: kopiTemanggungBlend,
    description: "Kopi blend Temanggung dengan perpaduan arabika dan robusta yang seimbang",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 63,
    name: "RACIK SEWU WEDANG SELARAS",
    price: 16500,
    image: racikSewuWedangSelaras,
    description: "Wedang selaras Racik Sewu dengan campuran rempah yang menyehatkan",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 64,
    name: "RACIK SEWU JAHE JERUK NIPIS",
    price: 16500,
    image: racikSewuJaheJerukNipis,
    description: "Minuman jahe jeruk nipis Racik Sewu yang hangat dan menyegarkan",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 65,
    name: "RACIK SEWU KUNYIT JERUK NIPIS",
    price: 16500,
    image: racikSewuKunyitJerukNipis,
    description: "Minuman kunyit jeruk nipis Racik Sewu yang menyehatkan dan segar",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 66,
    name: "KONDANG FOOD KULIT MANGGIS",
    price: 13500,
    image: kondangFoodKulitManggis,
    description: "Minuman herbal kulit manggis Kondang Food dengan manfaat antioksidan",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 67,
    name: "KONDANG FOOD DAUN KELOR",
    price: 13500,
    image: kondangFoodDaunKelor,
    description: "Minuman herbal daun kelor Kondang Food yang kaya nutrisi",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 68,
    name: "BANDREX HANJUANG",
    price: 16000,
    image: bandrexHanjuang,
    description: "Minuman bandrex hanjuang tradisional dengan rasa yang khas",
    category: "Minuman Instan",
    weight: "5 bungkus"
  },
  {
    id: 69,
    name: "BAJIGUR HANJUANG",
    price: 16000,
    image: bajigurHanjuang,
    description: "Bajigur hanjuang dengan rasa tradisional yang hangat dan manis",
    category: "Minuman Instan",
    weight: "5 bungkus"
  },
  {
    id: 70,
    name: "BANDREX SPESIAL",
    price: 23000,
    image: bandrexSpesial,
    description: "Bandrex spesial dengan kualitas premium dan rasa yang istimewa",
    category: "Minuman Instan",
    weight: "10 bungkus"
  },
  {
    id: 71,
    name: "WEDANG SECANG TAS",
    price: 11500,
    image: wedangSecangTas,
    description: "Wedang secang dalam kemasan tas yang praktis dan menyehatkan",
    category: "Minuman Instan",
    weight: "5 bungkus"
  },
  {
    id: 72,
    name: "WEDANG UWUH TAS",
    price: 11000,
    image: wedangUwuhTas,
    description: "Wedang uwuh dalam kemasan tas dengan campuran rempah tradisional",
    category: "Minuman Instan",
    weight: "5 bungkus"
  },
  {
    id: 73,
    name: "WEDANG UWUH BESEK",
    price: 21500,
    image: wedangUwuhBesek,
    description: "Wedang uwuh dalam kemasan besek yang tradisional dan otentik",
    category: "Minuman Instan",
    weight: "5 bungkus"
  },
  {
    id: 74,
    name: "WEDANG UWUH PASAK BUMI PLASTIK",
    price: 20500,
    image: wedangUwuhPasakBumiPlastik,
    description: "Wedang uwuh dengan pasak bumi dalam kemasan praktis",
    category: "Minuman Instan",
    weight: "5 bungkus"
  },
  {
    id: 75,
    name: "WEDANG UWUH GULA PLASTIK",
    price: 17500,
    image: wedangUwuhGulaPlastik,
    description: "Wedang uwuh dengan gula dalam kemasan plastik yang praktis",
    category: "Minuman Instan",
    weight: "5 bungkus"
  },
  {
    id: 76,
    name: "JAHE MERAH INSTANT BOTOL",
    price: 20500,
    image: jaheMerahInstantBotol,
    description: "Jahe merah instant dalam botol yang hangat dan menyehatkan",
    category: "Minuman Instan",
    weight: "300 g"
  },
  {
    id: 77,
    name: "GULA BATU HERBAL TOPLES",
    price: 22000,
    image: gulaBatuHerbalToples,
    description: "Gula batu herbal dalam toples dengan manfaat kesehatan",
    category: "Minuman Instan",
    weight: "500 g"
  },
  {
    id: 78,
    name: "GULA JAHE MIKA",
    price: 24000,
    image: gulaJaheMika,
    description: "Gula jahe dalam kemasan mika yang praktis dan berkualitas",
    category: "Minuman Instan",
    weight: "250 g"
  },
  {
    id: 79,
    name: "GULA JAWA GEPREK",
    price: 10000,
    image: gulaJawaGeprek,
    description: "Gula jawa geprek asli dengan rasa manis alami yang khas",
    category: "Minuman Instan",
    weight: "200 g"
  },
  {
    id: 80,
    name: "KONDANG FOOD SEKOTENG PLASTIK",
    price: 20500,
    image: kondangFoodSekotengPlastik,
    description: "Sekoteng Kondang Food dalam kemasan plastik yang mudah disajikan",
    category: "Minuman Instan",
    weight: "150 g"
  },
  {
    id: 81,
    name: "KONDANG FOOD BERAS KENCUR",
    price: 13500,
    image: kondangFoodBerasKencur,
    description: "Minuman beras kencur Kondang Food yang segar dan menyehatkan",
    category: "Minuman Instan",
    weight: "100 g"
  },
  {
    id: 82,
    name: "KONDANG FOOD BIR PLETOK",
    price: 20500,
    image: kondangFoodBirPletok,
    description: "Bir pletok Kondang Food dengan rasa rempah yang khas Jakarta",
    category: "Minuman Instan",
    weight: "150 g"
  },
  {
    id: 83,
    name: "KONDANG FOOD JAHE MERAH",
    price: 20500,
    image: kondangFoodJaheMerah,
    description: "Jahe merah Kondang Food yang hangat dan berkhasiat untuk kesehatan",
    category: "Minuman Instan",
    weight: "150 g"
  },
  {
    id: 84,
    name: "KONDANG FOOD WEDANG SERAI",
    price: 20500,
    image: kondangFoodWedangSerai,
    description: "Wedang serai Kondang Food yang harum dan menyegarkan",
    category: "Minuman Instan",
    weight: "150 g"
  }
];

interface ProductCatalogProps {
  onAddToCart: (product: Product) => void;
  searchQuery: string;
  cartItems?: CartItem[];
  onCartClick?: () => void;
}

export default function ProductCatalog({ 
  onAddToCart, 
  searchQuery, 
  cartItems = [], 
  onCartClick 
}: ProductCatalogProps) {
  const navigate = useNavigate();
  // Show only featured products (first 4) for showcase, unless searching
  const featuredProducts = products.slice(0, 4);
  
  // Filter products based on search query
  const filteredProducts = searchQuery 
    ? products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : featuredProducts;
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-red-50 to-white relative overflow-hidden">
      {/* Enhanced Aesthetic Batik Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="simpleBatikPattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
              {/* Enhanced Central Element */}
              <circle cx="75" cy="75" r="4" fill="rgba(255, 215, 0, 0.3)" stroke="rgba(255, 215, 0, 0.2)" strokeWidth="1.5"/>
              
              {/* Enhanced Corner Elements */}
              <circle cx="25" cy="25" r="3" fill="rgba(255, 215, 0, 0.25)" stroke="rgba(255, 215, 0, 0.15)" strokeWidth="1"/>
              <circle cx="125" cy="25" r="2.5" fill="rgba(255, 215, 0, 0.25)" stroke="rgba(255, 215, 0, 0.15)" strokeWidth="0.8"/>
              <circle cx="25" cy="125" r="2.5" fill="rgba(255, 215, 0, 0.25)" stroke="rgba(255, 215, 0, 0.15)" strokeWidth="0.8"/>
              <circle cx="125" cy="125" r="3" fill="rgba(255, 215, 0, 0.25)" stroke="rgba(255, 215, 0, 0.15)" strokeWidth="1"/>
              
              {/* Enhanced Connecting Lines with Traditional Style */}
              <path d="M25 75 Q50 70 75 75 Q100 80 125 75" stroke="rgba(255, 215, 0, 0.2)" strokeWidth="1.5" fill="none"/>
              <path d="M75 25 Q70 50 75 75 Q80 100 75 125" stroke="rgba(255, 215, 0, 0.2)" strokeWidth="1.5" fill="none"/>
              
              {/* Additional Traditional Motifs */}
              <circle cx="50" cy="50" r="1.5" fill="rgba(255, 215, 0, 0.2)"/>
              <circle cx="100" cy="50" r="1.5" fill="rgba(255, 215, 0, 0.2)"/>
              <circle cx="50" cy="100" r="1.5" fill="rgba(255, 215, 0, 0.2)"/>
              <circle cx="100" cy="100" r="1.5" fill="rgba(255, 215, 0, 0.2)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#simpleBatikPattern)"/>
        </svg>
      </div>
      
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-10 left-10 w-12 h-12 opacity-12">
        <svg viewBox="0 0 32 32" className="w-full h-full fill-yellow-500">
          <circle cx="16" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="16" cy="16" r="4" fill="currentColor" opacity="0.7" stroke="rgba(255, 215, 0, 0.3)" strokeWidth="1"/>
          <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.5"/>
          <circle cx="24" cy="24" r="2" fill="currentColor" opacity="0.5"/>
        </svg>
      </div>
      
      <div className="absolute bottom-10 right-10 w-10 h-10 opacity-15">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-yellow-500">
          <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.8" stroke="rgba(255, 215, 0, 0.4)" strokeWidth="1.2"/>
          <circle cx="6" cy="6" r="1.5" fill="currentColor" opacity="0.6"/>
          <circle cx="18" cy="18" r="1.5" fill="currentColor" opacity="0.6"/>
          <path d="M6 6 Q12 9 18 18" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
        </svg>
      </div>
      
      {/* Additional Floating Elements */}
      <div className="absolute top-1/3 right-20 w-8 h-8 opacity-10">
        <svg viewBox="0 0 32 32" className="w-full h-full fill-yellow-500">
          <circle cx="16" cy="16" r="5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="16" cy="16" r="2" fill="currentColor"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 sm:px-8 py-2 sm:py-4 font-bold text-xs sm:text-sm mb-6 sm:mb-8 shadow-xl">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
            {searchQuery ? 'HASIL PENCARIAN' : 'PRODUK UNGGULAN'}
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-red-900 mb-4 sm:mb-6 leading-tight">
            {searchQuery ? 'HASIL PENCARIAN' : 'NIKMATI OLEH-OLEH'}
            <span className="block text-red-600 relative">
              {searchQuery ? 'PRODUK KAMI' : 'PRODUK pusatoleholehlezat'}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-1 bg-red-300"></div>
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-red-700 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed font-medium">
            {searchQuery 
              ? `Menampilkan ${filteredProducts.length} produk yang sesuai dengan pencarian "${searchQuery}"`
              : 'Koleksi jajanan khas Magelang yang dibuat dengan resep turun temurun, menggunakan bahan-bahan berkualitas tinggi untuk memberikan cita rasa yang tak terlupakan.'
            }
          </p>
          
          {!searchQuery && (
            <div className="mt-6 sm:mt-8">
              <Button 
                onClick={() => navigate('/products')}
                variant="outline" 
                className="bg-white text-red-600 hover:bg-red-50 font-bold px-5 sm:px-8 py-2 sm:py-3 text-base sm:text-lg border-2 border-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                🛒 LIHAT SEMUA PRODUK ({products.length})
              </Button>
            </div>
          )}
        </div>
        
        {/* Search Results Info */}
        {searchQuery && (
          <div className="text-center mb-8">
            <p className="text-red-700 font-medium">
              {filteredProducts.length > 0 
                ? `Menampilkan ${filteredProducts.length} produk untuk "${searchQuery}"`
                : `Tidak ada produk yang ditemukan untuk "${searchQuery}"`
              }
            </p>
          </div>
        )}

        {/* Enhanced Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {filteredProducts.map((product, index) => {
            const backgrounds = [
              'from-red-500 to-red-600',
              'from-green-500 to-green-600', 
              'from-orange-500 to-orange-600'
            ];
            const bgGradient = backgrounds[index % 3];
            
            return (
              <div 
                key={product.id}
                className="group bg-white overflow-hidden shadow-2xl border border-red-100 transform transition-all duration-500 hover:scale-105 hover:-rotate-1 relative"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Minimalist Corner Pattern */}
                <div className="absolute top-2 right-2 w-6 h-6 opacity-15 z-10">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-red-600">
                    {/* Simple Central Motif */}
                    <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1"/>
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.6"/>
                    
                    {/* Corner Elements */}
                    <circle cx="6" cy="6" r="1" fill="currentColor" opacity="0.4"/>
                    <circle cx="18" cy="6" r="1" fill="currentColor" opacity="0.4"/>
                    <circle cx="6" cy="18" r="1" fill="currentColor" opacity="0.4"/>
                    <circle cx="18" cy="18" r="1" fill="currentColor" opacity="0.4"/>
                  </svg>
                </div>

                {/* Bestseller Badge */}
                {index === 0 && (
                  <div className="absolute top-2 left-2 z-20 bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 font-bold text-xs shadow-lg flex items-center gap-1">
                    <Star className="w-3 h-3" /> FAVORIT
                  </div>
                )}

                {/* Product Card Content */}
                <div className="p-2">
                  {/* Product Image Area - Optimized */}
                  <div className="relative mb-3 overflow-hidden bg-white shadow-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Weight Badge - Top Left */}
                    {product.weight && (
                      <div className="absolute top-2 left-2 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-md shadow-md z-30">
                        <span className="text-xs font-bold text-gray-800">
                          {product.weight}
                        </span>
                      </div>
                    )}
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center justify-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-300 text-yellow-300" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Price Badge */}
                    <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 text-sm font-bold shadow-lg">
                      Rp {(product.price / 1000)}k
                    </div>
                  </div>
                  
                  {/* Product Title */}
                  <h3 className="text-lg font-bold text-red-900 mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  
                  {/* Product Info - Compact */}
                  <div className="space-y-3">
                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-black text-red-900">
                        Rp {product.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1">
                        ✓ Ready
                      </div>
                    </div>

                    {/* Action Area - Simplified */}
                    <div className="flex gap-2">
                      <input 
                        type="number" 
                        defaultValue="1" 
                        min="1" 
                        className="w-12 px-2 py-2 bg-red-50 border border-red-200 text-red-900 font-bold text-center text-sm focus:border-red-400 focus:outline-none"
                      />
                      
                      <Button 
                        onClick={() => onAddToCart(product)}
                        className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-2 text-sm transition-all duration-300 transform hover:scale-105"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-red-900 mb-2">Produk Tidak Ditemukan</h3>
            <p className="text-red-700">Coba gunakan kata kunci yang berbeda atau lihat semua produk kami.</p>
          </div>
        )}

        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <div className="bg-white p-12 shadow-2xl border border-red-100 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Batik Pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg viewBox="0 0 200 200" className="w-full h-full fill-yellow-500">
                <circle cx="50" cy="50" r="8"/>
                <circle cx="150" cy="50" r="12"/>
                <circle cx="100" cy="100" r="15"/>
                <circle cx="50" cy="150" r="10"/>
                <circle cx="150" cy="150" r="6"/>
                <path d="M25 25 Q75 20 125 25 Q175 30 225 25" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M25 175 Q75 170 125 175 Q175 180 225 175" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-red-900 mb-6 flex items-center justify-center gap-2">
                <PartyPopper className="w-8 h-8 text-red-600" /> PENAWARAN ISTIMEWA! <PartyPopper className="w-8 h-8 text-red-600" />
              </h3>
              <p className="text-lg md:text-xl text-red-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                Beli 3 produk atau lebih dan dapatkan <strong className="text-red-900">DISKON 15%</strong> + 
                <strong className="text-green-600"> GRATIS ONGKIR</strong> ke seluruh Indonesia!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-xl">
                  📞 HUBUNGI SEKARANG!
                </Button>
                <Button 
                  onClick={() => navigate('/products')}
                  variant="outline" 
                  className="bg-white text-red-600 hover:bg-red-50 font-bold px-8 py-4 text-lg border-2 border-red-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  🛒 LIHAT SEMUA PRODUK
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
