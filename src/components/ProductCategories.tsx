import { useState, useMemo } from "react";
import ProductCard, { Product } from "./ProductCard";
import { CartItem } from "./CartModal";
import { Button } from "@/components/ui/button";
import { Plus, ShoppingBag } from "lucide-react";

// Import product images
import bakpiaImg from "@/assets/image/Bakpia Pathok 88.png";
import cripingTeloImg from "@/assets/image/Criping Telo.png";
import getukEcoImg from "@/assets/image/Getuk Eco.png";
import grubiImg from "@/assets/image/Grubi.png";
import gulakacangImg from "@/assets/image/Gulakacang.png";
import gulakacang2Img from "@/assets/image/Gulakacang-2.png";
import slondokImg from "@/assets/image/Slondok.png";
import tapeKetanImg from "@/assets/image/Tape Ketan.png";
import wajikWeekImg from "@/assets/image/Wajik Week.png";

// Product categories (ordered to match Home page)
const categories = [
  "Kripik dan Snack Ringan",
  "Kue Kering", 
  "Permen",
  "Kue Basah",
  "Kacang-kacangan",
  "Minuman Instan",
  "Lain-lain"
];

// Products data organized by category
const products: Product[] = [
  // Kue Basah (termasuk bakpia)
  {
    id: 1,
    name: "Bakpia Pathok 88",
    price: 30000,
    image: bakpiaImg,
    description: "Bakpia khas Yogyakarta dengan isian kacang hijau yang lembut dan kulit yang renyah",
    category: "Kue Basah"
  },
  {
    id: 10,
    name: "Bakpia Kacang Merah",
    price: 32000,
    image: bakpiaImg,
    description: "Bakpia premium dengan isian kacang merah yang manis dan gurih",
    category: "Kue Basah"
  },
  
  // Kripik dan Snack Ringan
  {
    id: 2,
    name: "Criping Telo",
    price: 30000,
    image: cripingTeloImg,
    description: "Keripik singkong (telo) renyah dengan bumbu tradisional yang gurih",
    category: "Kripik dan Snack Ringan"
  },
  {
    id: 4,
    name: "Grubi",
    price: 30000,
    image: grubiImg,
    description: "Camilan tradisional khas Jawa dengan tekstur renyah dan rasa gurih",
    category: "Kripik dan Snack Ringan"
  },
  {
    id: 11,
    name: "Keripik Pisang",
    price: 25000,
    image: cripingTeloImg,
    description: "Keripik pisang manis renyah dengan kualitas pisang pilihan",
    category: "Kripik dan Snack Ringan"
  },
  
  // Kue Basah
  {
    id: 3,
    name: "Getuk Eco",
    price: 30000,
    image: getukEcoImg,
    description: "Getuk tradisional dengan tekstur lembut dan rasa manis alami",
    category: "Kue Basah"
  },
  {
    id: 8,
    name: "Tape Ketan",
    price: 30000,
    image: tapeKetanImg,
    description: "Tape ketan manis dengan tekstur lembut dan aroma yang khas",
    category: "Kue Basah"
  },
  {
    id: 12,
    name: "Klepon",
    price: 20000,
    image: getukEcoImg,
    description: "Klepon tradisional dengan isian gula merah dan kelapa parut",
    category: "Kue Basah"
  },
  
  // Kue Kering
  {
    id: 9,
    name: "Wajik Week",
    price: 30000,
    image: wajikWeekImg,
    description: "Wajik tradisional dengan rasa manis legit dan tekstur kenyal",
    category: "Kue Kering"
  },
  {
    id: 13,
    name: "Kastengel",
    price: 35000,
    image: wajikWeekImg,
    description: "Kastengel renyah dengan rasa keju yang gurih dan lezat",
    category: "Kue Kering"
  },
  {
    id: 14,
    name: "Nastar",
    price: 40000,
    image: wajikWeekImg,
    description: "Nastar premium dengan selai nanas asli dan mentega berkualitas",
    category: "Kue Kering"
  },
  
  // Minuman Instan
  {
    id: 15,
    name: "Kopi Bubuk Robusta",
    price: 45000,
    image: slondokImg,
    description: "Kopi bubuk robusta asli dengan cita rasa kuat dan aroma wangi",
    category: "Minuman Instan"
  },
  {
    id: 16,
    name: "Teh Celup Melati",
    price: 25000,
    image: slondokImg,
    description: "Teh celup dengan aroma melati yang menenangkan dan segar",
    category: "Minuman Instan"
  },
  
  // Permen
  {
    id: 17,
    name: "Permen Jahe",
    price: 15000,
    image: gulakacangImg,
    description: "Permen jahe tradisional dengan rasa hangat dan menyegarkan",
    category: "Permen"
  },
  {
    id: 18,
    name: "Permen Mint",
    price: 12000,
    image: gulakacang2Img,
    description: "Permen mint segar untuk menyegarkan napas dan tenggorokan",
    category: "Permen"
  },
  
  // Kacang-kacangan
  {
    id: 5,
    name: "Gula Kacang Premium",
    price: 30000,
    image: gulakacangImg,
    description: "Gula kacang premium dengan kacang tanah pilihan dan gula berkualitas",
    category: "Kacang-kacangan"
  },
  {
    id: 6,
    name: "Gula Kacang Special",
    price: 35000,
    image: gulakacang2Img,
    description: "Varian khusus gula kacang dengan rasa lebih gurih dan kacang extra",
    category: "Kacang-kacangan"
  },
  {
    id: 19,
    name: "Kacang Bawang",
    price: 28000,
    image: gulakacangImg,
    description: "Kacang bawang renyah dengan bumbu yang meresap dan gurih",
    category: "Kacang-kacangan"
  },
  
  // Lain-lain
  {
    id: 7,
    name: "Slondok",
    price: 25000,
    image: slondokImg,
    description: "Camilan tradisional yang renyah dan gurih, cocok untuk segala usia",
    category: "Lain-lain"
  }
];

interface ProductCategoriesProps {
  onAddToCart: (product: Product) => void;
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

  // Filter products based on search query and selected category
  const filteredProducts = useMemo(() => {
    let filtered = products;
    
    // Filter by category
    if (selectedCategory !== "Semua") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
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
            {['Kripik dan Snack Ringan', 'Kue Kering', 'Permen', 'Kue Basah', 'Kacang-kacangan', 'Minuman Instan', 'Lain-lain'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
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
                    
                    {/* Add Button - White circle with red plus exactly like your UI */}
                    <div className="absolute bottom-2 right-2">
                      <button
                        onClick={() => onAddToCart(product)}
                        className="w-8 h-8 bg-white hover:bg-gray-100 text-red-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                      >
                        <Plus className="h-4 w-4 font-bold" />
                      </button>
                    </div>
                  </div>

                  {/* Product Info - White text on brown background */}
                  <div className="space-y-1">
                    <h3 className="font-bold text-white text-sm leading-tight line-clamp-2">
                      Lorem ipsum
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white">
                        Rp.xx.xxx
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
