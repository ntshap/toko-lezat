import ProductCard, { Product } from "./ProductCard";
import { CartItem } from "./CartModal";
import { useState } from "react";
import { Filter, Grid, List, Star, Heart, Eye, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import bakpiaImg from "@/assets/image/Bakpia Pathok 88.png";
import cripingTeloImg from "@/assets/image/Criping Telo.png";
import getukEcoImg from "@/assets/image/Getuk Eco.png";
import grubiImg from "@/assets/image/Grubi.png";
import gulakacangImg from "@/assets/image/Gulakacang.png";
import gulakacang2Img from "@/assets/image/Gulakacang-2.png";
import slondokImg from "@/assets/image/Slondok.png";
import tapeKetanImg from "@/assets/image/Tape Ketan.png";
import wajikWeekImg from "@/assets/image/Wajik Week.png";


const products: Product[] = [
  {
    id: 1,
    name: "Bakpia Pathok 88",
    price: 30000,
    image: bakpiaImg,
    description: "Bakpia khas Yogyakarta dengan isian kacang hijau yang lembut dan kulit yang renyah, resep autentik turun temurun."
  },
  {
    id: 2,
    name: "Criping Telo",
    price: 30000,
    image: cripingTeloImg,
    description: "Keripik singkong (telo) renyah dengan bumbu tradisional yang gurih dan dibuat dari singkong pilihan berkualitas."
  },
  {
    id: 3,
    name: "Getuk Eco",
    price: 30000,
    image: getukEcoImg,
    description: "Getuk tradisional dengan tekstur lembut dan rasa manis alami, dibuat dari singkong segar pilihan."
  },
  {
    id: 4,
    name: "Grubi",
    price: 30000,
    image: grubiImg,
    description: "Camilan tradisional khas Jawa dengan tekstur renyah dan rasa gurih yang menggugah selera."
  },
  {
    id: 5,
    name: "Gula Kacang Premium",
    price: 30000,
    image: gulakacangImg,
    description: "Gula kacang tradisional dengan rasa manis gurih yang pas, dibuat dari kacang tanah pilihan berkualitas tinggi."
  },
  {
    id: 6,
    name: "Gula Kacang Spesial",
    price: 30000,
    image: gulakacang2Img,
    description: "Varian spesial gula kacang dengan tekstur yang lebih halus dan rasa yang lebih kaya."
  },
  {
    id: 7,
    name: "Slondok",
    price: 30000,
    image: slondokImg,
    description: "Jajanan tradisional khas Jawa dengan tekstur kenyal dan rasa manis yang autentik."
  },
  {
    id: 8,
    name: "Tape Ketan",
    price: 30000,
    image: tapeKetanImg,
    description: "Tape ketan manis dengan fermentasi alami yang menghasilkan rasa asam manis yang segar dan unik."
  },
  {
    id: 9,
    name: "Wajik Week",
    price: 30000,
    image: wajikWeekImg,
    description: "Wajik tradisional dengan tekstur kenyal dan rasa manis dari gula kelapa asli yang autentik."
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