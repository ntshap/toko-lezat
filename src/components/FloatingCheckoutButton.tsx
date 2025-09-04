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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
      <div className="pointer-events-auto flex flex-col gap-3 max-w-md mx-auto">
        {/* Cart Summary Mini Card - Mobile Only */}
        <div className="sm:hidden bg-white rounded-2xl shadow-xl border border-gray-200 p-4">
          <button 
            onClick={onCartClick}
            className="w-full flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="relative p-2 bg-red-50 rounded-xl">
                <ShoppingBag className="w-5 h-5 text-red-600" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-800">
                  {totalItems} Item{totalItems !== 1 ? 's' : ''}
                </p>
                <p className="text-xs text-gray-600">Tap untuk lihat keranjang</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-red-600">
                {formatPrice(totalPrice)}
              </span>
              <ChevronUp className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
            </div>
          </button>
        </div>

        {/* Main Checkout Button */}
        <Button
          onClick={onCheckoutClick}
          className="w-full h-16 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold text-base rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] border-0"
          size="lg"
        >
          <div className="flex items-center justify-center gap-3">
            <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-7 h-7" />
            <div className="flex flex-col items-start">
              <span className="text-base font-bold leading-tight">Checkout Sekarang</span>
              <span className="text-sm opacity-90 leading-tight">
                {totalItems} item • {formatPrice(totalPrice)}
              </span>
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
}
