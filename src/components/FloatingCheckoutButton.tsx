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
    <div className="fixed bottom-4 left-4 right-4 z-40 flex flex-col gap-2 floating-element">
      {/* Cart Summary Mini Card - Mobile Only */}
      <div className="sm:hidden bg-white rounded-xl shadow-lg border border-gray-200 p-3">
        <button 
          onClick={onCartClick}
          className="w-full flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-red-600" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-800">
                {totalItems} Item{totalItems !== 1 ? 's' : ''}
              </p>
              <p className="text-xs text-gray-600">Lihat keranjang</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-red-600">
              {formatPrice(totalPrice)}
            </span>
            <ChevronUp className="w-4 h-4 text-gray-400" />
          </div>
        </button>
      </div>

      {/* Main Checkout Button */}
      <Button
        onClick={onCheckoutClick}
        className="w-full h-14 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
      >
        <div className="flex items-center justify-center gap-3">
          <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6" />
          <div className="flex flex-col items-start">
            <span className="text-sm leading-tight">Checkout Sekarang</span>
            <span className="text-xs opacity-90 leading-tight">
              {totalItems} item • {formatPrice(totalPrice)}
            </span>
          </div>
        </div>
      </Button>
    </div>
  );
}
