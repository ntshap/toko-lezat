import { ShoppingBag } from "lucide-react";
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

  if (totalItems === 0) return null;

  return (
    <button
      onClick={onCartClick}
      className="fixed bottom-6 right-6 z-[9999] w-16 h-16 bg-white rounded-full shadow-2xl border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all duration-200 transform hover:scale-110 active:scale-95"
      style={{ 
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)', 
        zIndex: 9999 
      }}
    >
      <div className="relative">
        <ShoppingBag className="w-7 h-7 text-gray-700" />
        {totalItems > 0 && (
          <span 
            className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg"
            style={{ fontSize: '11px' }}
          >
            {totalItems > 99 ? '99+' : totalItems}
          </span>
        )}
      </div>
    </button>
  );
}
