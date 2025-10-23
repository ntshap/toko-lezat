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
  
  // Prepare the message - Simplified format for better compatibility
  let message = `*Pesanan Dari Toko Lezat Online* *Tanggal:* ${formattedDate} *Detail Pesanan:*`;
  
  // Add each item to the message
  cartItems.forEach((item, index) => {
    const itemTotalPrice = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(item.price * item.quantity);
    
    message += ` ${index + 1}. ${item.name} ${item.quantity} × ${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(item.price)} = ${itemTotalPrice}`;
  });
  
  // Add total
  message += ` *Total Pembayaran: ${formattedPrice}* Mohon konfirmasi pesanan saya. Terima kasih!`;
  
  // Force use phone number format for both mobile and desktop
  const whatsappNumber = "6285867989333"; // Admin's WhatsApp number

  try {
    // Create a textarea element to copy the message
    const textarea = document.createElement('textarea');
    textarea.value = message;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    // Alert user that message has been copied
    alert('Rincian pesanan telah disalin ke clipboard. Silakan paste (CTRL+V atau Command+V) di chat WhatsApp setelah halaman terbuka.');
    
    // Open WhatsApp directly with the number
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  } catch (error) {
    console.error('Failed to copy message:', error);
    
    // Fallback to the URL with text parameter
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  }
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
                  <span className="font-semibold text-sm sm:text-lg">Total ({totalItems} item{totalItems !== 1 ? 's' : ''}):</span>
                  <span className="font-bold text-base sm:text-xl text-primary">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                
                <Button
                  onClick={() => handleCheckout(cartItems, totalPrice)}
                  className="w-full h-12 sm:h-14 bg-gradient-to-r from-green-600 via-green-600 to-green-700 hover:from-green-700 hover:via-green-700 hover:to-green-800 text-white font-bold text-sm sm:text-base rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] border-0"
                  size="lg"
                >
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="font-black">CHECKOUT VIA WHATSAPP</span>
                  </div>
                </Button>
                
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Pesanan akan dikirim ke WhatsApp untuk konfirmasi
                </p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}