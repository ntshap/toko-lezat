import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "./ProductCard";

export interface CartItem extends Product {
  quantity: number;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

export default function CartModal({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem 
}: CartModalProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      <Card className="relative w-full max-w-md mx-2 sm:mx-4 max-h-[90vh] overflow-hidden shadow-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 py-2 sm:py-3 pb-2 sm:pb-4 px-3 sm:px-6 border-b border-border">
          <CardTitle className="text-base sm:text-xl font-bold flex items-center gap-1 sm:gap-2">
            <ShoppingBag className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
            Keranjang Belanja
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-7 w-7 sm:h-9 sm:w-9 p-0">
            <X className="w-3 h-3 sm:w-5 sm:h-5" />
          </Button>
        </CardHeader>
        
        <CardContent className="p-0">
          {cartItems.length === 0 ? (
            <div className="p-4 sm:p-8 text-center">
              <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground mx-auto mb-3 sm:mb-4" />
              <p className="text-muted-foreground text-base sm:text-lg">
                Keranjang Anda masih kosong
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                Silakan tambahkan produk untuk mulai berbelanja
              </p>
            </div>
          ) : (
            <>
              <div className="max-h-64 sm:max-h-96 overflow-y-auto p-2 sm:p-4 space-y-2 sm:space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-2 sm:space-x-4 p-2 bg-secondary/50 rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-10 h-10 sm:w-16 sm:h-16 object-cover rounded-md"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-[11px] sm:text-sm text-card-foreground truncate">
                        {item.name}
                      </h4>
                      <p className="text-primary font-semibold text-[11px] sm:text-sm">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => 
                          item.quantity === 1 
                            ? onRemoveItem(item.id)
                            : onUpdateQuantity(item.id, item.quantity - 1)
                        }
                        className="h-5 w-5 sm:h-8 sm:w-8 p-0"
                      >
                        <Minus className="w-2 h-2 sm:w-3 sm:h-3" />
                      </Button>
                      
                      <span className="w-5 sm:w-8 text-center font-medium text-xs sm:text-sm">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="h-5 w-5 sm:h-8 sm:w-8 p-0"
                      >
                        <Plus className="w-2 h-2 sm:w-3 sm:h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-border p-2 sm:p-4 bg-secondary/30">
                <div className="flex justify-between items-center mb-2 sm:mb-4">
                  <span className="font-semibold text-sm sm:text-lg">Total:</span>
                  <span className="font-bold text-base sm:text-xl text-primary">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                
                <p className="text-xs text-gray-600 text-center mt-2">
                  Gunakan tombol checkout mengambang di bawah untuk melanjutkan pemesanan
                </p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}