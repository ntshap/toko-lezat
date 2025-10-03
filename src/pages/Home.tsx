import { useState } from "react";
import Header from "@/components/Header";
import BannerSlider from "@/components/BannerSlider";
import GoogleReviews from "@/components/GoogleReviews";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, MapPin, Eye, Star, Plus } from "lucide-react";
import SnackKiloanCard, { SnackKiloanProduct, SnackKiloanCartItem } from "@/components/SnackKiloanCard";
import bakpiaImg from "@/assets/image/Bakpia Pathok 88.png";
import cripingTeloImg from "@/assets/image/Criping Telo.png";
import getukEcoImg from "@/assets/image/Getuk Eco.png";
import grubiImg from "@/assets/image/Grubi.png";
import gulakacangImg from "@/assets/image/Gulakacang.png";
import gulakacang2Img from "@/assets/image/Gulakacang-2.png";
import slondokImg from "@/assets/image/Slondok.png";
import tapeKetanImg from "@/assets/image/Tape Ketan.png";
import wajikWeekImg from "@/assets/image/Wajik Week.png";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const allProducts: Product[] = [
  {
    id: 1,
    name: "Bakpia Pathok 88",
    price: 30000,
    image: bakpiaImg,
    description: "Bakpia khas Yogyakarta dengan isian kacang hijau yang lembut dan kulit yang renyah",
    category: "Kue Basah"
  },
  {
    id: 2,
    name: "Criping Telo",
    price: 30000,
    image: cripingTeloImg,
    description: "Keripik singkong renyah dengan bumbu tradisional yang gurih",
    category: "Kripik dan Snack Ringan"
  },
  {
    id: 3,
    name: "Getuk Eco",
    price: 30000,
    image: getukEcoImg,
    description: "Getuk tradisional dengan tekstur lembut dan rasa manis alami",
    category: "Kue Basah"
  },
  {
    id: 4,
    name: "Grubi",
    price: 30000,
    image: grubiImg,
    description: "Camilan tradisional khas Jawa dengan tekstur renyah dan rasa gurih yang unik",
    category: "Kripik dan Snack Ringan"
  },
  {
    id: 5,
    name: "Gula Kacang Premium",
    price: 30000,
    image: gulakacangImg,
    description: "Gula kacang tradisional dengan rasa manis gurih yang pas",
    category: "Kacang-kacangan"
  },
  {
    id: 6,
    name: "Gula Kacang Spesial",
    price: 30000,
    image: gulakacang2Img,
    description: "Varian spesial gula kacang dengan tekstur yang lebih halus",
    category: "Kacang-kacangan"
  },
  {
    id: 7,
    name: "Slondok",
    price: 30000,
    image: slondokImg,
    description: "Jajanan tradisional khas Jawa dengan tekstur kenyal",
    category: "Lain-lain"
  },
  {
    id: 8,
    name: "Tape Ketan",
    price: 30000,
    image: tapeKetanImg,
    description: "Tape ketan manis dengan fermentasi alami",
    category: "Kue Basah"
  },
  {
    id: 9,
    name: "Wajik Week",
    price: 30000,
    image: wajikWeekImg,
    description: "Wajik tradisional dengan tekstur kenyal dan rasa manis",
    category: "Kue Kering"
  }
];

// Data produk snack kiloan
const snackKiloanProducts: SnackKiloanProduct[] = [
  {
    id: 101,
    name: "Kacang Bawang Premium",
    basePrice: 25000,
    image: gulakacangImg,
    description: "Kacang bawang renyah dengan bumbu meresap, dijual per kilogram",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 1, price: 25000, label: "1 Kg" },
      { weight: 2, price: 48000, label: "2 Kg" },
      { weight: 4, price: 90000, label: "4 Kg" }
    ]
  },
  {
    id: 102,
    name: "Kacang Oven Original",
    basePrice: 22000,
    image: gulakacang2Img,
    description: "Kacang oven tanpa minyak, renyah dan gurih, dijual per kilogram",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 1, price: 22000, label: "1 Kg" },
      { weight: 2, price: 42000, label: "2 Kg" },
      { weight: 4, price: 80000, label: "4 Kg" }
    ]
  },
  {
    id: 103,
    name: "Kacang Mete Panggang",
    basePrice: 35000,
    image: gulakacangImg,
    description: "Kacang mete panggang premium dengan rasa gurih, dijual per kilogram",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 1, price: 35000, label: "1 Kg" },
      { weight: 2, price: 68000, label: "2 Kg" },
      { weight: 4, price: 130000, label: "4 Kg" }
    ]
  }
];

const HomePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "Semua" 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  // Filter snack kiloan products
  const filteredSnackKiloan = selectedCategory === "Semua" || selectedCategory === "Snack Kiloan"
    ? snackKiloanProducts
    : [];

  const handleAddToCart = (item: any) => {
    // Placeholder for cart functionality
    console.log("Added to cart:", item);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemCount={0} 
        onCartClick={() => navigate('/products')}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <main>
        {/* Banner Slider Section */}
        <BannerSlider />
        
        {/* Belanja Online Section - Exactly like mockup */}
        <section id="product-catalog" className="bg-red-600 py-6 sm:py-8">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Belanja Online di pusatoleholehlezat
              </h2>
            </div>

            {/* Category Filter Buttons - White buttons exactly like mockup */}
            <div className="flex overflow-x-auto scrollbar-hide gap-2 pb-4 mb-4 sm:mb-6">
              <button 
                onClick={() => handleCategoryClick('Semua')}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  selectedCategory === 'Semua' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Semua
              </button>
              <button 
                onClick={() => handleCategoryClick('Kripik dan Snack Ringan')}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  selectedCategory === 'Kripik dan Snack Ringan' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Kripik dan Snack Ringan
              </button>
              <button 
                onClick={() => handleCategoryClick('Kue Kering')}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  selectedCategory === 'Kue Kering' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Kue Kering
              </button>
              <button 
                onClick={() => handleCategoryClick('Permen & Manisan')}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  selectedCategory === 'Permen & Manisan' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Permen & Manisan
              </button>
              <button 
                onClick={() => handleCategoryClick('Kue Basah')}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  selectedCategory === 'Kue Basah' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Kue Basah
              </button>
              <button 
                onClick={() => handleCategoryClick('Kacang-kacangan')}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  selectedCategory === 'Kacang-kacangan' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Kacang-kacangan
              </button>
              <button 
                onClick={() => handleCategoryClick('Snack Kiloan')}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  selectedCategory === 'Snack Kiloan' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Snack Kiloan
              </button>
              <button 
                onClick={() => handleCategoryClick('Minuman')}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  selectedCategory === 'Minuman' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Minuman
              </button>
              <button 
                onClick={() => handleCategoryClick('Lain-lain')}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  selectedCategory === 'Lain-lain' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Lain-lain
              </button>
            </div>

            {/* Products Grid - Responsive: 2 cols mobile, 3 cols tablet, 4 cols desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-6">
              {/* Regular Products */}
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  <div className="bg-amber-700 rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg border border-amber-600 relative">
                    {/* Product Image */}
                    <div className="aspect-square bg-amber-600 rounded-md sm:rounded-lg mb-2 overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Add Button - White circle with red plus */}
                      <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2">
                        <button 
                          onClick={() => navigate('/products')}
                          className="w-6 h-6 sm:w-8 sm:h-8 bg-white hover:bg-gray-100 text-red-600 rounded-full shadow-lg flex items-center justify-center"
                        >
                          <Plus className="h-3 w-3 sm:h-4 sm:w-4 font-bold" />
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-1">
                      <h3 className="font-bold text-white text-xs sm:text-sm leading-tight">
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
              
              {/* Snack Kiloan Products */}
              {filteredSnackKiloan.map((product) => (
                <SnackKiloanCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>

            {/* Shopping Cart Icon - Floating */}
            <div className="fixed bottom-6 right-6 z-50">
              <button 
                onClick={() => navigate('/products')}
                className="w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-200 transform hover:scale-110"
              >
                <ShoppingCart className="w-6 h-6 text-red-600" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  0
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Review Pembeli Section */}
        <GoogleReviews />

        {/* Toko Kami Section - White background like mockup */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-2xl font-black text-gray-900 mb-8">
                Toko Kami
              </h2>
              
              <div className="max-w-2xl mx-auto">
                {/* 360° Street View */}
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1757642898313!6m8!1m7!1sQj1PS1mDWxDfPXXpqYB5AQ!2m2!1d-7.493334006981341!2d110.222667005607!3f277.7709!4f0!5f0.7820865974627469"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
