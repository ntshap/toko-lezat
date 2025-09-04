import { ShoppingCart, Search, Menu, Phone, Home, Package, Info, MessageCircle } from "lucide-react";
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
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-lg border-b border-red-100">
      {/* Compact Icon-Only Navbar */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Left Side - Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white font-black text-sm rounded-lg shadow">
              L
            </div>
            <span className="text-red-900 font-black text-sm hidden sm:block">TOKO LEZAT</span>
          </div>

          {/* Center - Navigation Icons */}
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => handleNavigation('HOME')}
              className="hover:bg-red-50 rounded-lg p-2 group"
            >
              <Home className="w-4 h-4 text-red-600 group-hover:text-red-700" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => handleNavigation('PRODUK')}
              className="hover:bg-red-50 rounded-lg p-2 group"
            >
              <Package className="w-4 h-4 text-red-600 group-hover:text-red-700" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:bg-red-50 rounded-lg p-2 group"
            >
              <Info className="w-4 h-4 text-red-600 group-hover:text-red-700" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:bg-red-50 rounded-lg p-2 group"
            >
              <MessageCircle className="w-4 h-4 text-red-600 group-hover:text-red-700" />
            </Button>
          </div>

          {/* Right Side - Action Icons */}
          <div className="flex items-center gap-1">
            {/* Search */}
            {isSearchOpen ? (
              <div className="flex items-center bg-red-50 border border-red-200 rounded-lg px-2 py-1">
                <input
                  type="text"
                  placeholder="Cari..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="outline-none bg-transparent text-red-900 placeholder-red-400 w-20 text-xs"
                  autoFocus
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsSearchOpen(false)}
                  className="p-1"
                >
                  <Search className="w-3 h-3 text-red-600" />
                </Button>
              </div>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-red-50 rounded-lg p-2 group"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="w-4 h-4 text-red-600 group-hover:text-red-700" />
              </Button>
            )}

            {/* Cart */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onCartClick}
              className="hover:bg-red-50 rounded-lg p-2 group relative"
            >
              <ShoppingCart className="w-4 h-4 text-red-600 group-hover:text-red-700" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="sm:hidden hover:bg-red-50 rounded-lg p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-4 h-4 text-red-600" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-red-50 border-t border-red-100">
          <div className="container mx-auto px-4 py-3">
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant="ghost"
                onClick={() => handleNavigation('HOME')}
                className="flex items-center gap-2 p-3 bg-white rounded-lg border border-red-100 hover:bg-red-50 text-left justify-start"
              >
                <Home className="w-4 h-4 text-red-600" />
                <span className="text-red-700 font-medium text-sm">Home</span>
              </Button>
              
              <Button 
                variant="ghost"
                onClick={() => handleNavigation('PRODUK')}
                className="flex items-center gap-2 p-3 bg-white rounded-lg border border-red-100 hover:bg-red-50 text-left justify-start"
              >
                <Package className="w-4 h-4 text-red-600" />
                <span className="text-red-700 font-medium text-sm">Produk</span>
              </Button>
              
              <Button 
                variant="ghost"
                className="flex items-center gap-2 p-3 bg-white rounded-lg border border-red-100 hover:bg-red-50 text-left justify-start"
              >
                <Info className="w-4 h-4 text-red-600" />
                <span className="text-red-700 font-medium text-sm">Tentang</span>
              </Button>
              
              <Button 
                variant="ghost"
                className="flex items-center gap-2 p-3 bg-white rounded-lg border border-red-100 hover:bg-red-50 text-left justify-start"
              >
                <MessageCircle className="w-4 h-4 text-red-600" />
                <span className="text-red-700 font-medium text-sm">Kontak</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}