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
      
      <Card className="relative w-full max-w-md mx-4 max-h-[90vh] overflow-hidden shadow-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-border">
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-primary" />
            Keranjang Belanja
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>
        
        <CardContent className="p-0">
          {cartItems.length === 0 ? (
            <div className="p-8 text-center">
              <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">
                Keranjang Anda masih kosong
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Silakan tambahkan produk untuk mulai berbelanja
              </p>
            </div>
          ) : (
            <>
              <div className="max-h-96 overflow-y-auto p-4 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-3 bg-secondary/50">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm text-card-foreground truncate">
                        {item.name}
                      </h4>
                      <p className="text-primary font-semibold text-sm">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => 
                          item.quantity === 1 
                            ? onRemoveItem(item.id)
                            : onUpdateQuantity(item.id, item.quantity - 1)
                        }
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-border p-4 bg-secondary/30">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-lg">Total:</span>
                  <span className="font-bold text-xl text-primary">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                
                <Button 
                  variant="hero" 
                  className="w-full"
                  disabled={cartItems.length === 0}
                >
                  Checkout ({totalItems} item{totalItems !== 1 ? 's' : ''})
                </Button>
                
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Checkout akan segera tersedia
                </p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}