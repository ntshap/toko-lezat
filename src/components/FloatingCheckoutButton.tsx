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
      <div className="pointer-events-auto flex flex-col gap-2 max-w-lg mx-auto">
        {/* Compact Cart Summary */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 backdrop-blur-sm bg-white/95">
          <button 
            onClick={onCartClick}
            className="w-full flex items-center justify-between group active:scale-95 transition-transform duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="relative p-2 bg-red-50 rounded-xl">
                <ShoppingBag className="w-5 h-5 text-red-600" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-gray-900">
                  {totalItems} Item{totalItems !== 1 ? 's' : ''} di Keranjang
                </p>
                <p className="text-xs text-gray-600">Tap untuk detail</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <p className="text-base font-black text-red-600">
                  {formatPrice(totalPrice)}
                </p>
              </div>
              <ChevronUp className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors duration-200" />
            </div>
          </button>
        </div>

        {/* Compact Checkout Button */}
        <Button
          onClick={onCheckoutClick}
          className="w-full h-14 bg-gradient-to-r from-green-600 via-green-600 to-green-700 hover:from-green-700 hover:via-green-700 hover:to-green-800 text-white font-bold text-base rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] border-0"
          size="lg"
        >
          <div className="flex items-center justify-center gap-3">
            <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6" />
            <span className="font-black">CHECKOUT VIA WHATSAPP</span>
          </div>
        </Button>
      </div>
    </div>
  );
}
