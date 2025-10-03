import { ShoppingCart, Search, Menu, X } from "lucide-react";
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
      const element = document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item === 'HOME') {
      navigate('/');
    } else if (item === 'GALERI') {
      const element = document.getElementById('gallery');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item === 'KONTAK') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-lg border-b border-red-100">
      {/* Top Banner */}
      <div className="bg-red-600 text-white py-2 text-center">
        <div className="container mx-auto px-4 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="font-semibold">⭐ 5.0 dari 1000+ customer</span>
            <span className="hidden sm:inline">• GRATIS ONGKIR di atas Rp 100.000</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="font-semibold">(0293) 313131</span>
            <span className="hidden md:inline">• Jl. Ikhlas Blok D1 No.1</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 flex items-center justify-center text-white font-black text-lg sm:text-xl rounded-lg shadow-lg">
            L
          </div>
          <div>
            <p className="text-sm sm:text-base font-bold text-red-600">pusatoleholehlezat</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {['HOME', 'PRODUK', 'GALERI', 'KONTAK'].map((item) => (
            <button 
              key={item} 
              onClick={() => handleNavigation(item)}
              className="relative group cursor-pointer"
            >
              <span className="text-red-700 hover:text-red-900 font-semibold text-sm uppercase tracking-wide transition-colors">
                {item}
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></div>
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          {/* Search */}
          <div className="relative">
            {isSearchOpen ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Cari produk..."
                  className="w-32 sm:w-48 px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-1 sm:ml-2 p-1 sm:p-2"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(true)}
                className="text-red-700 hover:text-red-900 hover:bg-red-50 p-1 sm:p-2"
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Cart */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onCartClick}
            className="relative text-red-700 hover:text-red-900 hover:bg-red-50 p-1 sm:p-2"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                {cartItemCount}
              </span>
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-red-700 hover:text-red-900 hover:bg-red-50 p-1 sm:p-2"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-red-100 shadow-lg">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {['HOME', 'PRODUK', 'GALERI', 'KONTAK'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="block w-full text-left px-4 py-4 text-red-700 hover:bg-red-50 rounded-lg font-semibold transition-colors text-sm sm:text-base"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
