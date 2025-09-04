import { ShoppingBag, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem } from "./CartModal";

interface FloatingCheckoutButtonProps {
  cartItems: CartItem[];
  onCheckoutClick: () => void;
  onCartClick: () => void;
}

export default function FloatingCheckoutButton({ 
  cartItems, 
  onCheckoutClick, 
  onCartClick 
}: FloatingCheckoutButtonProps) {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none">
      <div className="pointer-events-auto flex flex-col gap-3 max-w-lg mx-auto">
        {/* Enhanced Cart Summary - Mobile First */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-5 backdrop-blur-sm bg-white/95">
          <button 
            onClick={onCartClick}
            className="w-full flex items-center justify-between group active:scale-95 transition-transform duration-200"
          >
            <div className="flex items-center gap-4">
              <div className="relative p-3 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
                <ShoppingBag className="w-6 h-6 text-red-600" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-sm rounded-full w-7 h-7 flex items-center justify-center font-black shadow-lg border-2 border-white">
                    {totalItems}
                  </span>
                )}
              </div>
              <div className="text-left">
                <p className="text-base font-bold text-gray-900">
                  {totalItems} Item{totalItems !== 1 ? 's' : ''} di Keranjang
                </p>
                <p className="text-sm text-gray-600">Tap untuk melihat detail</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-lg font-black text-red-600">
                  {formatPrice(totalPrice)}
                </p>
                <p className="text-xs text-gray-500">Total Belanja</p>
              </div>
              <ChevronUp className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors duration-200" />
            </div>
          </button>
        </div>

        {/* Enhanced Main Checkout Button */}
        <Button
          onClick={onCheckoutClick}
          className="w-full h-20 bg-gradient-to-r from-green-600 via-green-600 to-green-700 hover:from-green-700 hover:via-green-700 hover:to-green-800 text-white font-bold text-lg rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] border-0 relative overflow-hidden"
          size="lg"
        >
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <div className="flex items-center justify-center gap-4 relative z-10">
            <div className="p-2 bg-white/20 rounded-xl">
              <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-8 h-8" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-lg font-black leading-tight">CHECKOUT VIA WHATSAPP</span>
              <span className="text-sm opacity-95 leading-tight font-medium">
                {totalItems} item • {formatPrice(totalPrice)}
              </span>
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
}
