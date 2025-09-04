import { ShoppingCart, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ cartItemCount, onCartClick, searchQuery, onSearchChange }: HeaderProps) {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleNavigation = (item: string) => {
    if (item === 'PRODUK') {
      navigate('/products');
    } else if (item === 'HOME') {
      navigate('/');
    }
    // For other items, you can add more navigation logic here
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-2xl border-b border-red-100">
      {/* Top Banner with Batik Pattern */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-1.5 sm:py-3 relative overflow-hidden">
        {/* Enhanced Aesthetic Batik Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.15'%3E%3Ccircle cx='20' cy='20' r='3' stroke='white' stroke-width='0.8' stroke-opacity='0.1'/%3E%3Ccircle cx='60' cy='20' r='2.5' stroke='white' stroke-width='0.8' stroke-opacity='0.1'/%3E%3Ccircle cx='40' cy='40' r='4' stroke='white' stroke-width='1' stroke-opacity='0.15'/%3E%3Ccircle cx='20' cy='60' r='2.5' stroke='white' stroke-width='0.8' stroke-opacity='0.1'/%3E%3Ccircle cx='60' cy='60' r='3' stroke='white' stroke-width='0.8' stroke-opacity='0.1'/%3E%3Cpath d='M20 20 Q40 25 60 20' stroke='white' stroke-width='1' fill='none' opacity='0.25'/%3E%3Cpath d='M20 60 Q40 55 60 60' stroke='white' stroke-width='1' fill='none' opacity='0.25'/%3E%3Ccircle cx='30' cy='30' r='1.5' fill='white' fill-opacity='0.12'/%3E%3Ccircle cx='50' cy='50' r='1.5' fill='white' fill-opacity='0.12'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        {/* Enhanced Corner Elements */}
        <div className="absolute top-2 left-2 w-8 h-8 opacity-18">
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <g fill="white" fillOpacity="0.4">
              <circle cx="12" cy="12" r="6" fill="none" stroke="white" strokeWidth="1" opacity="0.5"/>
              <circle cx="12" cy="12" r="3" fill="white" opacity="0.6"/>
              <circle cx="6" cy="6" r="1" fill="white" opacity="0.4"/>
              <circle cx="18" cy="18" r="1" fill="white" opacity="0.4"/>
            </g>
          </svg>
        </div>
        
        <div className="absolute top-2 right-2 w-8 h-8 opacity-18">
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <g fill="white" fillOpacity="0.4">
              <circle cx="12" cy="12" r="6" fill="none" stroke="white" strokeWidth="1" opacity="0.5"/>
              <circle cx="12" cy="12" r="3" fill="white" opacity="0.6"/>
              <circle cx="6" cy="6" r="1" fill="white" opacity="0.4"/>
              <circle cx="18" cy="18" r="1" fill="white" opacity="0.4"/>
            </g>
          </svg>
        </div>
        
        {/* Additional Floating Elements */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-6 opacity-15">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
            <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
            <circle cx="12" cy="12" r="2.5" fill="currentColor" opacity="0.5"/>
            <circle cx="8" cy="8" r="1" fill="currentColor" opacity="0.3"/>
            <circle cx="16" cy="16" r="1" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 flex items-center justify-between text-xs sm:text-sm relative z-10">
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="font-bold hidden sm:inline">5 dari 1000+ customer</span>
              <span className="font-bold sm:hidden">5★ 1000+</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <span className="flex items-center gap-2">
                <strong>GRATIS ONGKIR</strong> di atas Rp 100.000
              </span>
              <span className="flex items-center gap-2">
                <strong>KACANG PREMIUM</strong> ready stock!
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="font-bold text-xs sm:text-sm">(0293) 313131</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span>Jl. Ikhlas Blok D1 No.1</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4 py-2 sm:py-4 md:py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-8">
          {/* Logo with Batik Design */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3">
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white font-black text-sm sm:text-lg md:text-xl shadow-xl">
                L
              </div>
              {/* Minimalist corner decoration */}
              <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 opacity-20">
                <svg viewBox="0 0 16 16" className="w-full h-full fill-yellow-400">
                  <circle cx="8" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
                  <circle cx="8" cy="8" r="1.5" fill="currentColor" opacity="0.6"/>
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-black text-red-900 leading-tight">
                PUSAT OLEH-OLEH
              </h1>
              <p className="text-xs sm:text-xs md:text-sm font-bold text-red-600">LEZAT</p>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['HOME', 'PRODUK', 'TENTANG', 'KONTAK'].map((item) => (
              <button 
                key={item} 
                onClick={() => handleNavigation(item)}
                className="relative group cursor-pointer"
              >
                <span className="text-red-700 hover:text-red-900 font-bold text-sm uppercase tracking-wide transition-colors">
                  {item}
                </span>
                <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-red-600 to-red-700 group-hover:w-full transition-all duration-300"></div>
                {/* Minimalist dot decoration */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                  <svg viewBox="0 0 6 6" className="w-full h-full fill-yellow-400">
                    <circle cx="3" cy="3" r="1.5" fill="currentColor" opacity="0.8"/>
                  </svg>
                </div>
              </button>
            ))}
          </nav>
        </div>
        
        {/* Right Actions */}
        <div className="flex items-center space-x-1">
          {/* Search */}
          <div className="relative">
            {isSearchOpen ? (
              <div className="flex items-center bg-white border-2 border-red-200 rounded-xl px-2 sm:px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg">
                <input
                  type="text"
                  placeholder="Cari produk..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="outline-none text-red-900 placeholder-red-400 w-24 sm:w-28 sm:w-48 text-xs sm:text-sm"
                  autoFocus
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-1 p-1"
                >
                  <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600" />
                </Button>
              </div>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-red-50 relative group rounded-xl p-1.5 sm:p-2 sm:p-3"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 sm:w-5 sm:h-5 text-red-600 group-hover:text-red-700 transition-colors" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-200 rounded-xl transition-colors"></div>
              </Button>
            )}
          </div>
          

          
          {/* Cart */}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onCartClick}
            className="hover:bg-red-50 relative group rounded-xl p-1.5 sm:p-2 sm:p-3"
          >
            <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 sm:w-5 sm:h-5 text-red-600 group-hover:text-red-700 transition-colors" />
            {cartItemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold w-4 h-4 sm:w-5 sm:h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full shadow-lg animate-pulse">
                {cartItemCount}
              </span>
            )}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-200 rounded-xl transition-colors"></div>
          </Button>
          

          
          {/* Mobile Menu */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden hover:bg-red-50 rounded-xl p-1.5 sm:p-3"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gradient-to-br from-red-50 to-white border-t border-red-100 shadow-xl">
          <div className="container mx-auto px-4 py-3 sm:py-6 space-y-2 sm:space-y-4">
            {['HOME', 'PRODUK', 'TENTANG', 'KONTAK'].map((item) => (
              <button 
                key={item} 
                onClick={() => {
                  handleNavigation(item);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full"
              >
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-red-100 hover:border-red-300 transition-colors shadow-sm relative overflow-hidden">
                {/* Minimalist background for mobile menu items */}
                <div className="absolute inset-0 opacity-2">
                  <svg viewBox="0 0 60 60" className="w-full h-full">
                    <g fill="gold" fillOpacity="0.05">
                      <circle cx="15" cy="15" r="1.5"/>
                      <circle cx="45" cy="15" r="1.5"/>
                      <circle cx="30" cy="30" r="2"/>
                      <circle cx="15" cy="45" r="1.5"/>
                      <circle cx="45" cy="45" r="1.5"/>
                    </g>
                  </svg>
                </div>
                
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 relative z-10">
                  <svg viewBox="0 0 8 8" className="w-full h-full fill-yellow-500">
                    <circle cx="4" cy="4" r="2" fill="currentColor" opacity="0.6"/>
                  </svg>
                </div>
                
                <span className="text-red-700 font-bold text-xs sm:text-sm uppercase tracking-wide relative z-10">
                  {item}
                </span>
              </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}