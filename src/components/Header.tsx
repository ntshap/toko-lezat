import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ cartItemCount, onCartClick, searchQuery, onSearchChange }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (item: string) => {
    if (item === 'BERANDA') {
      // Navigate to home page
      navigate('/');
    } else if (item === 'PESAN_ONLINE') {
      // Navigate to products page
      navigate('/products');
    } else if (item === 'LOKASI') {
      // Navigate to location page
      navigate('/location');
    }
  };

  // Function to check if button is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-red-600 shadow-lg">
      {/* Red Header with responsive design */}
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        {/* Logo Section - Responsive sizing */}
        <div className="text-center mb-3 sm:mb-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-black tracking-wider mb-2 sm:mb-4" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            fontFamily: 'serif'
          }}>
            pusatoleholehlezat
          </h1>
        </div>

        {/* Search Bar - Responsive */}
        <div className="mb-3 sm:mb-4">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Cari camilan favoritmu..."
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-full border-0 text-gray-700 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Search className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
          </div>
        </div>

        {/* Navigation Buttons - Responsive grid */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
          <Button
            onClick={() => handleNavigation('BERANDA')}
            className={`${
              isActive('/') 
                ? 'bg-red-700 hover:bg-red-800' 
                : 'bg-yellow-600 hover:bg-yellow-700'
            } text-white font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm border-0 shadow-md transition-all duration-200 transform hover:scale-105`}
          >
            Beranda
          </Button>
          <Button
            onClick={() => handleNavigation('PESAN_ONLINE')}
            className={`${
              isActive('/products') 
                ? 'bg-red-700 hover:bg-red-800' 
                : 'bg-yellow-600 hover:bg-yellow-700'
            } text-white font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm border-0 shadow-md transition-all duration-200 transform hover:scale-105`}
          >
            Pesan Online
          </Button>
          <Button
            onClick={() => handleNavigation('LOKASI')}
            className={`${
              isActive('/location') 
                ? 'bg-red-700 hover:bg-red-800' 
                : 'bg-yellow-600 hover:bg-yellow-700'
            } text-white font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm border-0 shadow-md transition-all duration-200 transform hover:scale-105`}
          >
            Lokasi
          </Button>
        </div>
      </div>
    </header>
  );
}
