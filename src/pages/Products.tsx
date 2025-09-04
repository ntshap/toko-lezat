import { useState } from "react";
import { ArrowLeft, Filter, Grid, List, Star, Heart, Eye, Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDeviceDetection } from "@/hooks/use-device-detection";
import MobileProducts from "@/components/MobileProducts";
import DesktopProducts from "@/components/DesktopProducts";
import ProductCard, { Product } from "@/components/ProductCard";
import CartModal, { CartItem } from "@/components/CartModal";
import FloatingCheckoutButton from "@/components/FloatingCheckoutButton";
import UserDataModal from "@/components/UserDataModal";
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

interface ProductsPageProps {
  onAddToCart: (product: Product) => void;
}

export default function ProductsPage({ onAddToCart }: ProductsPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price'>('name');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isUserDataModalOpen, setIsUserDataModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  // Device detection for conditional rendering
  const { isMobile, deviceType } = useDeviceDetection();
  
  // Option to force separate components (set to false for unified responsive design)
  const useSeparateComponents = false; // Change to true if you want separate mobile/desktop components

  // Filter and sort products
  const filteredProducts = products
    .filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return a.price - b.price;
    });

  // Function to add product to cart
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    
    // Also call the parent's onAddToCart to sync with App state
    onAddToCart(product);
  };

  // Function to update item quantity
  const updateQuantity = (productId: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Function to remove item from cart
  const removeItem = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Function to show cart
  const showCart = () => {
    setIsCartOpen(true);
  };

  const handleCheckoutClick = () => {
    setIsUserDataModalOpen(true);
  };

  const handleCheckoutComplete = () => {
    setCartItems([]);
  };

  // Conditional rendering based on device and preference
  if (useSeparateComponents) {
    if (isMobile) {
      return (
        <>
          <MobileProducts 
            products={products}
            cartItems={cartItems}
            onAddToCart={addToCart}
            onCartClick={showCart}
          />
          <FloatingCheckoutButton 
            cartItems={cartItems}
            onCheckoutClick={handleCheckoutClick}
            onCartClick={showCart}
          />
          <CartModal 
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cartItems={cartItems}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeItem}
          />
          <UserDataModal 
            isOpen={isUserDataModalOpen}
            onClose={() => setIsUserDataModalOpen(false)}
            cartItems={cartItems}
            onCheckoutComplete={handleCheckoutComplete}
          />
        </>
      );
    } else {
      return (
        <>
          <DesktopProducts 
            products={products}
            cartItems={cartItems}
            onAddToCart={addToCart}
            onCartClick={showCart}
          />
          <CartModal 
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cartItems={cartItems}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeItem}
          />
          <UserDataModal 
            isOpen={isUserDataModalOpen}
            onClose={() => setIsUserDataModalOpen(false)}
            cartItems={cartItems}
            onCheckoutComplete={handleCheckoutComplete}
          />
        </>
      );
    }
  }

  // Default: Unified responsive design (recommended)

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Compact Icon Header */}
      <header className="bg-white shadow-sm border-b border-red-100 sticky top-0 z-50">
        <div className="container mx-auto px-3 py-2">
          {/* Icon-only Navigation */}
          <div className="flex items-center justify-between">
            {/* Left Side - Back Button */}
            <Button 
              onClick={() => window.history.back()}
              variant="ghost"
              size="icon"
              className="hover:bg-red-50 text-red-600 w-9 h-9 rounded-lg"
              title="Kembali"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            
            {/* Center - Title (Small) */}
            <div className="text-center">
              <h1 className="text-sm font-bold text-red-900 leading-tight">PRODUK</h1>
              <div className="text-xs text-red-600 font-medium">
                {filteredProducts.length} dari {products.length} produk
              </div>
            </div>
            
            {/* Right Side - Actions */}
            <div className="flex items-center gap-0.5">
              {/* Search Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`hover:bg-red-50 text-red-600 w-9 h-9 rounded-lg ${isSearchOpen ? 'bg-red-100' : ''}`}
                title="Cari produk"
              >
                <Search className="w-4 h-4" />
              </Button>
              
              {/* View Mode Toggle */}
              <Button
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                variant="ghost"
                size="icon"
                className="hover:bg-red-50 text-red-600 w-9 h-9 rounded-lg"
                title={`Ubah ke ${viewMode === 'grid' ? 'List' : 'Grid'}`}
              >
                {viewMode === 'grid' ? <List className="w-4 h-4" /> : <Grid className="w-4 h-4" />}
              </Button>
              
              {/* Filter/Sort */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSortOpen(!isSortOpen)}
                className={`hover:bg-red-50 text-red-600 w-9 h-9 rounded-lg ${isSortOpen ? 'bg-red-100' : ''}`}
                title="Urutkan"
              >
                <Filter className="w-4 h-4" />
              </Button>
              
              {/* Cart */}
              <Button
                variant="ghost"
                size="icon"
                onClick={showCart}
                className="hover:bg-red-50 text-red-600 w-9 h-9 rounded-lg relative"
                title="Keranjang belanja"
              >
                <ShoppingBag className="w-4 h-4" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                    {cartItems.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </Button>
            </div>
          </div>
          
          {/* Expandable Search Bar */}
          {isSearchOpen && (
            <div className="mt-2 pb-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Cari produk..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm border border-red-200 rounded-lg focus:border-red-400 focus:outline-none bg-red-50/30 focus:bg-white transition-all"
                  autoFocus
                />
              </div>
            </div>
          )}
          
          {/* Expandable Sort Options */}
          {isSortOpen && (
            <div className="mt-2 pb-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'price')}
                className="w-full px-3 py-2 text-sm border border-red-200 rounded-lg focus:border-red-400 focus:outline-none text-red-600 bg-white"
              >
                <option value="name">Nama A-Z</option>
                <option value="price">Harga</option>
              </select>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="mb-4 sm:mb-8">
          <div className="bg-white rounded-xl p-3 sm:p-6 shadow-lg border border-red-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm sm:text-lg font-bold text-red-900 line-clamp-1">
                  {searchQuery ? `Hasil Pencarian: "${searchQuery}"` : 'Semua Produk'}
                </h2>
                <p className="text-xs sm:text-sm text-red-600">
                  Menampilkan {filteredProducts.length} dari {products.length} produk
                </p>
              </div>
              <div className="text-right">
                <div className="text-xl sm:text-2xl font-black text-red-900">{filteredProducts.length}</div>
                <div className="text-xs sm:text-sm text-red-600">Produk Tersedia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length > 0 ? (
          <div className={`gap-4 sm:gap-6 ${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'flex flex-col space-y-4'
          }`}>
            {filteredProducts.map((product) => {
              if (viewMode === 'list') {
                return (
                  <div key={product.id} className="bg-white rounded-xl shadow-lg border border-red-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col sm:flex-row">
                      <div className="w-full sm:w-48 h-36 sm:h-32 flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-3 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-4">
                          <div>
                            <h3 className="text-base sm:text-xl font-bold text-red-900 mb-1 sm:mb-2">{product.name}</h3>
                            <p className="text-red-700 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">{product.description}</p>
                          </div>
                          <div className="text-left sm:text-right mt-2 sm:mt-0">
                            <div className="text-lg sm:text-2xl font-black text-red-900">Rp {product.price.toLocaleString()}</div>
                            <div className="text-[10px] sm:text-xs text-green-600 font-bold bg-green-50 px-2 py-0.5 sm:py-1 rounded-full mt-1 inline-block">
                              ✓ Ready
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 sm:gap-3 mt-2">
                          <input 
                            type="number" 
                            defaultValue="1" 
                            min="1" 
                            className="w-12 sm:w-16 px-2 sm:px-3 py-1 sm:py-2 bg-red-50 border border-red-200 text-red-900 font-bold text-center text-xs sm:text-sm rounded-lg focus:border-red-400 focus:outline-none"
                          />
                          <Button 
                            onClick={() => addToCart(product)}
                            className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xs sm:text-sm py-1 sm:py-2 transition-all duration-300 transform hover:scale-105 rounded-lg"
                          >
                            Tambah ke Keranjang
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              
              return (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart} 
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-red-900 mb-2">Produk Tidak Ditemukan</h3>
            <p className="text-red-700 mb-6">Coba gunakan kata kunci yang berbeda atau lihat semua produk kami.</p>
            <Button 
              onClick={() => setSearchQuery('')}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg"
            >
              Lihat Semua Produk
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-8 sm:mt-16">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-12 shadow-xl sm:shadow-2xl border border-red-100 text-center relative overflow-hidden">
            {/* Background Pattern */}
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
              <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-red-900 mb-2 sm:mb-6">
                🎉 PENAWARAN ISTIMEWA! 🎉
              </h3>
              <p className="text-sm sm:text-lg md:text-xl text-red-700 mb-4 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Beli 3 produk atau lebih dan dapatkan <strong className="text-red-900">DISKON 15%</strong> + 
                <strong className="text-green-600"> GRATIS ONGKIR</strong> ke seluruh Indonesia!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-lg rounded-xl sm:rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg sm:shadow-xl">
                  📞 HUBUNGI SEKARANG!
                </Button>
                <Button 
                  onClick={() => window.history.back()}
                  variant="outline" 
                  className="bg-white text-red-600 hover:bg-red-50 font-bold px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-lg border-2 border-red-600 rounded-xl sm:rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg sm:shadow-xl"
                >
                  🏠 KEMBALI KE BERANDA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Cart Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />

      {/* Floating Checkout Button - Mobile Only */}
      <FloatingCheckoutButton 
        cartItems={cartItems}
        onCheckoutClick={handleCheckoutClick}
        onCartClick={showCart}
      />

      {/* User Data Modal */}
      <UserDataModal 
        isOpen={isUserDataModalOpen}
        onClose={() => setIsUserDataModalOpen(false)}
        cartItems={cartItems}
        onCheckoutComplete={handleCheckoutComplete}
      />
    </div>
  );
}