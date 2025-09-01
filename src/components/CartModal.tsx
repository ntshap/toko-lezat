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

// WhatsApp checkout function
const handleCheckout = (cartItems: CartItem[], totalPrice: number) => {
  // Format the date
  const today = new Date();
  const dateOptions: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  const formattedDate = today.toLocaleDateString('id-ID', dateOptions);
  
  // Format the price
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(totalPrice);
  
  // Prepare the message
  let message = `*Pesanan Dari Toko Lezat Online*\n`;
  message += `*Tanggal:* ${formattedDate}\n\n`;
  message += `*Detail Pesanan:*\n`;
  
  // Add each item to the message
  cartItems.forEach((item, index) => {
    const itemTotalPrice = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(item.price * item.quantity);
    
    message += `${index + 1}. ${item.name}\n`;
    message += `   ${item.quantity} × ${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(item.price)} = ${itemTotalPrice}\n`;
  });
  
  // Add total
  message += `\n*Total Pembayaran: ${formattedPrice}*\n\n`;
  message += `Mohon konfirmasi pesanan saya. Terima kasih!`;
  
  // Create the WhatsApp URL with the message
  // Double encoding fix for WhatsApp Web/Desktop compatibility
  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = "6285867989333"; // Admin's WhatsApp number
  
  // Check if user is on mobile or desktop
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  let whatsappURL;
  if (isMobile) {
    // Mobile devices - standard URL format
    whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  } else {
    // Desktop/Web - use api.whatsapp.com for better compatibility
    whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
  }
  
  // Open WhatsApp in a new tab
  window.open(whatsappURL, '_blank');
};

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
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 sm:pb-4 border-b border-border">
          <CardTitle className="text-lg sm:text-xl font-bold flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            Keranjang Belanja
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
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
              <div className="max-h-96 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 bg-secondary/50 rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-xs sm:text-sm text-card-foreground truncate">
                        {item.name}
                      </h4>
                      <p className="text-primary font-semibold text-xs sm:text-sm">
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
                        className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                      >
                        <Minus className="w-2 h-2 sm:w-3 sm:h-3" />
                      </Button>
                      
                      <span className="w-6 sm:w-8 text-center font-medium text-sm">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                      >
                        <Plus className="w-2 h-2 sm:w-3 sm:h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-border p-3 sm:p-4 bg-secondary/30">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <span className="font-semibold text-base sm:text-lg">Total:</span>
                  <span className="font-bold text-lg sm:text-xl text-primary">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                
                <Button 
                  variant="hero" 
                  className="w-full flex items-center justify-center gap-2"
                  disabled={cartItems.length === 0}
                  onClick={() => handleCheckout(cartItems, totalPrice)}
                >
                  <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="whitespace-nowrap text-xs sm:text-sm">
                    Checkout via WhatsApp {totalItems > 0 && `(${totalItems} item${totalItems !== 1 ? 's' : ''})`}
                  </span>
                </Button>
                
                <p className="text-[10px] sm:text-xs text-muted-foreground text-center mt-2">
                  Pesanan akan dikirimkan melalui WhatsApp
                </p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}