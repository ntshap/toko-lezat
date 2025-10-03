import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star, Play, Sparkles, Heart, Award, ShoppingCart, Leaf } from "lucide-react";
import bakpiaImg from "@/assets/image/Bakpia Pathok 88.png";
import getukImg from "@/assets/image/Getuk Eco.png";
import cripingImg from "@/assets/image/Criping Telo.png";
import { useEffect, useState } from "react";

interface HeroProps {
  onViewProducts: () => void;
}

export default function Hero({ onViewProducts }: HeroProps) {
  // Animation styles
  const customStyles = `
    @keyframes float {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(1deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    @keyframes shine {
      0% { background-position: -100% 0; }
      100% { background-position: 200% 0; }
    }
    .animate-shine {
      background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
      background-size: 200% 100%;
      animation: shine 3s infinite;
    }
  `;

  // Inject styles
  if (typeof document !== 'undefined') {
    const styleElement = document.getElementById('hero-custom-styles');
    if (!styleElement) {
      const style = document.createElement('style');
      style.id = 'hero-custom-styles';
      style.textContent = customStyles;
      document.head.appendChild(style);
    }
  }
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-red-900 text-white overflow-hidden">
      {/* Main Hero Section */}
      <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-700/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-red-950/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 py-10 sm:py-16 md:py-20 lg:py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Content Area */}
            <div className="w-full md:w-1/2 lg:w-5/12 mb-8 md:mb-0">
              <div className="inline-flex items-center gap-2 bg-red-800/70 px-3 sm:px-4 py-1 sm:py-2 rounded-full mb-3 sm:mb-4">
                <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-red-300" />
                <span className="text-xs sm:text-sm font-medium text-red-300">pusatoleholehlezat Sejak 1995</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-3 sm:mb-4">
                <span className="block text-white">Oleh-Oleh</span>
                <span className="block text-red-300">Magelang.</span>
              </h1>
              
              <p className="text-red-100/90 text-base sm:text-lg max-w-lg mb-6 sm:mb-8 border-l-4 border-red-500 pl-3 sm:pl-4">
                Koleksi jajanan khas Magelang dengan cita rasa tradisional dan autentik untuk oleh-oleh keluarga dan kolega Anda.
              </p>
              
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
                <Button 
                  onClick={onViewProducts}
                  className="bg-red-600 hover:bg-red-500 px-6 sm:px-8 py-2 sm:py-3 rounded-sm text-base sm:text-lg font-bold transition-all duration-300"
                >
                  Lihat Menu
                </Button>
                
                <Button 
                  variant="outline"
                  className="bg-transparent border-2 border-white hover:bg-red-800/30 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-sm transition-all duration-300"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="font-bold">Tentang Kami</span>
                </Button>
              </div>
            </div>
            
            {/* Right Image Area - Enlarged Featured Product */}
            <div className="w-full md:w-1/2 lg:w-7/12 flex justify-center md:justify-end relative">
              <div className="relative">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-3xl transform scale-90"></div>
                
                {/* Main Product Showcase */}
                <div className="bg-red-800/30 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden">
                  {/* Shine Effect Overlay */}
                  <div className="absolute inset-0 animate-shine pointer-events-none"></div>
                  
                  {/* Product Badge */}
                  <div className="absolute -top-3 right-0 bg-red-500 text-white font-bold py-2 px-6 rounded-sm shadow-lg transform rotate-2 z-20">
                    PRODUK UNGGULAN
                  </div>
                  
                  {/* Product Image */}
                  <div className="relative z-10 flex justify-center">
                    <img 
                      src={bakpiaImg}
                      alt="Bakpia Pathok 88"
                      className="w-full max-w-md object-contain animate-float"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="bg-gradient-to-b from-red-900 to-red-800 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Left Feature Card - Product Highlight */}
            <div className="bg-gradient-to-br from-red-800/80 to-red-700/80 backdrop-blur rounded-xl p-8 flex flex-col md:flex-row items-center w-full md:w-1/3 border border-red-600/30 shadow-lg">
              <div className="mb-6 md:mb-0 md:mr-6">
                <div className="bg-red-600/30 rounded-full p-4 inline-block">
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
              <div>
                <span className="inline-block bg-red-600/40 text-red-100 font-medium px-3 py-1 rounded-full text-sm mb-2">
                  Produk terlaris
                </span>
                <h3 className="text-white font-bold text-2xl mb-3">Bakpia Pathok 88</h3>
                
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-red-100 font-bold text-3xl">Rp 30.000</p>
              </div>
            </div>
            
            {/* Right Stats Area - Animated Stats Cards */}
            <div className="bg-gradient-to-br from-red-800/80 to-red-700/80 backdrop-blur rounded-xl p-8 w-full md:w-2/3 border border-red-600/30 shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Perkembangan penjualan</h3>
                  <p className="text-red-200">Produk kami meningkat 25% dari tahun sebelumnya</p>
                </div>
                
                <span className="inline-block bg-red-600/40 text-red-100 font-medium px-4 py-2 rounded-full text-sm mt-4 sm:mt-0">
                  Tahun 2025
                </span>
              </div>
              
              {/* Enhanced Key Features/Stats Boxes */}
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="bg-gradient-to-br from-red-600/30 to-red-500/30 p-6 rounded-lg text-center border border-red-500/30 transform hover:scale-105 transition-transform duration-300 hover:shadow-md">
                  <div className="text-white text-3xl font-bold mb-1">60%</div>
                  <div className="text-red-200 text-sm">Pelanggan Tetap</div>
                </div>
                <div className="bg-gradient-to-br from-red-600/30 to-red-500/30 p-6 rounded-lg text-center border border-red-500/30 transform hover:scale-105 transition-transform duration-300 hover:shadow-md">
                  <div className="text-white text-3xl font-bold mb-1">75%</div>
                  <div className="text-red-200 text-sm">Resep Tradisional</div>
                </div>
                <div className="bg-gradient-to-br from-red-600/30 to-red-500/30 p-6 rounded-lg text-center border border-red-500/30 transform hover:scale-105 transition-transform duration-300 hover:shadow-md">
                  <div className="text-white text-3xl font-bold mb-1">50%</div>
                  <div className="text-red-200 text-sm">Bahan Organik</div>
                </div>
                <div className="bg-gradient-to-br from-red-600/30 to-red-500/30 p-6 rounded-lg text-center border border-red-500/30 transform hover:scale-105 transition-transform duration-300 hover:shadow-md">
                  <div className="text-white text-3xl font-bold mb-1">85%</div>
                  <div className="text-red-200 text-sm">Produk Terjual</div>
                </div>
                <div className="bg-gradient-to-br from-red-600/30 to-red-500/30 p-6 rounded-lg text-center border border-red-500/30 transform hover:scale-105 transition-transform duration-300 hover:shadow-md">
                  <div className="text-white text-3xl font-bold mb-1">70%</div>
                  <div className="text-red-200 text-sm">Ulasan Positif</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Products Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-10">
            {/* Section Title */}
            <div className="w-full md:w-2/5 mb-8 md:mb-0">
              <h2 className="text-5xl font-bold text-red-900 mb-6 leading-tight">Produk Unggulan Kami</h2>
              <p className="text-gray-600 text-lg mb-8">
                Rangkaian produk khas Magelang dengan kualitas terbaik dan rasa otentik yang tak terlupakan. Dibuat dengan resep turun temurun dan bahan-bahan pilihan.
              </p>
              
              <Button 
                onClick={onViewProducts}
                className="bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-sm text-lg font-bold transition-transform hover:scale-105"
              >
                Lihat Semua Produk
              </Button>
            </div>
            
            {/* Main Featured Product */}
            <div className="w-full md:w-3/5 relative">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-10 relative shadow-lg overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-red-700"></div>
                  <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-red-700"></div>
                </div>
                
                {/* Best seller badge */}
                <div className="absolute top-6 right-6 bg-red-600 text-white font-bold py-2 px-6 rounded-sm shadow-lg transform rotate-2 z-20">
                  BEST SELLER
                </div>
                
                <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
                  {/* Enlarged product image */}
                  <div className="w-full md:w-1/2">
                    <img 
                      src={bakpiaImg}
                      alt="Bakpia Pathok 88"
                      className="w-full max-h-[350px] object-contain filter drop-shadow-xl"
                    />
                  </div>
                  
                  <div className="w-full md:w-1/2">
                    <span className="inline-block bg-red-100 text-red-800 font-medium px-4 py-1 rounded-full text-sm mb-3">
                      Produk Favorit
                    </span>
                    
                    <h3 className="text-3xl font-bold text-red-900 mb-3">Bakpia Pathok 88</h3>
                    <p className="text-gray-600 mb-5 text-lg">
                      Bakpia dengan isian kacang hijau pilihan yang lembut dan manis. Dibuat dengan resep tradisional dan bahan berkualitas.
                    </p>
                    
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-gray-500 text-sm ml-2">(120 ulasan)</span>
                    </div>
                    
                    <div className="text-red-600 font-bold text-3xl mb-6">Rp 30.000</div>
                    
                    <Button 
                      variant="default"
                      className="bg-red-600 hover:bg-red-500 text-white w-full rounded-sm flex items-center justify-center gap-2 py-3 text-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span className="font-bold">Tambahkan ke Keranjang</span>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* More attractive product cards row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                <div className="bg-white border border-red-100 rounded-lg p-6 flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300">
                  <img 
                    src={getukImg}
                    alt="Getuk Eco" 
                    className="h-36 w-auto object-contain mb-4"
                  />
                  <h4 className="font-bold text-red-900 text-lg mb-2">Getuk Eco</h4>
                  <div className="text-red-600 font-bold text-base">Rp 25.000</div>
                </div>
                
                <div className="bg-white border border-red-100 rounded-lg p-6 flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300">
                  <img 
                    src={cripingImg}
                    alt="Criping Telo" 
                    className="h-36 w-auto object-contain mb-4"
                  />
                  <h4 className="font-bold text-red-900 text-lg mb-2">Criping Telo</h4>
                  <div className="text-red-600 font-bold text-base">Rp 20.000</div>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-100 rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300">
                  <Award className="w-10 h-10 text-red-500 mb-4" />
                  <p className="font-medium text-red-800 mb-4">Temukan lebih banyak produk unggulan kami</p>
                  <Button 
                    onClick={onViewProducts}
                    className="bg-red-600 hover:bg-red-500 text-white font-medium px-5 py-2 rounded-sm"
                  >
                    Lihat Semua
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Customer Testimonials Section (Like the reference's customer feedback section) */}
      <div className="bg-red-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-red-900 mb-2">Apa Kata Pelanggan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">Testimoni dari pelanggan setia yang telah merasakan kualitas produk kami</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg p-6 border border-gray-100 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-100 rounded-full p-2 border-4 border-white">
                <Star className="w-6 h-6 text-red-500 fill-red-500" />
              </div>
              <div className="pt-4">
                <p className="text-gray-600 italic mb-4">"Bakpia dari pusatoleholehlezat selalu menjadi oleh-oleh wajib setiap kali saya berkunjung ke Magelang. Rasanya tidak pernah mengecewakan!"</p>
                <div className="font-semibold text-red-900">Ahmad S.</div>
                <div className="text-sm text-gray-500">Pelanggan Setia</div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg p-6 border border-gray-100 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-100 rounded-full p-2 border-4 border-white">
                <Star className="w-6 h-6 text-red-500 fill-red-500" />
              </div>
              <div className="pt-4">
                <p className="text-gray-600 italic mb-4">"Getuk dari pusatoleholehlezat memiliki tekstur yang sempurna dan rasa yang otentik. Keluarga saya sangat menyukainya."</p>
                <div className="font-semibold text-red-900">Budi P.</div>
                <div className="text-sm text-gray-500">Pelanggan Baru</div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg p-6 border border-gray-100 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-100 rounded-full p-2 border-4 border-white">
                <Star className="w-6 h-6 text-red-500 fill-red-500" />
              </div>
              <div className="pt-4">
                <p className="text-gray-600 italic mb-4">"Saya selalu puas dengan kualitas produk dari pusatoleholehlezat. Layanan pengiriman juga cepat dan produk dikemas dengan baik."</p>
                <div className="font-semibold text-red-900">Sarah K.</div>
                <div className="text-sm text-gray-500">Pelanggan Online</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}