import { useState } from "react";
import { X, User, MapPin, Phone, ShoppingBag, Copy, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CartItem } from "./CartModal";
import { useToast } from "@/hooks/use-toast";

interface UserData {
  fullName: string;
  fullAddress: string;
  city: string;
  whatsappNumber: string;
}

interface UserDataModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onCheckoutComplete: () => void;
}

export default function UserDataModal({ 
  isOpen, 
  onClose, 
  cartItems, 
  onCheckoutComplete 
}: UserDataModalProps) {
  const [userData, setUserData] = useState<UserData>({
    fullName: "",
    fullAddress: "",
    city: "",
    whatsappNumber: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const handleInputChange = (field: keyof UserData, value: string) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    const { fullName, fullAddress, city, whatsappNumber } = userData;
    
    if (!fullName.trim()) {
      toast({
        title: "Nama lengkap diperlukan",
        description: "Mohon isi nama lengkap Anda.",
        variant: "destructive"
      });
      return false;
    }
    
    if (!fullAddress.trim()) {
      toast({
        title: "Alamat lengkap diperlukan",
        description: "Mohon isi alamat lengkap Anda.",
        variant: "destructive"
      });
      return false;
    }
    
    if (!city.trim()) {
      toast({
        title: "Kota/Kabupaten diperlukan",
        description: "Mohon isi kota/kabupaten Anda.",
        variant: "destructive"
      });
      return false;
    }
    
    if (!whatsappNumber.trim()) {
      toast({
        title: "Nomor WhatsApp diperlukan",
        description: "Mohon isi nomor WhatsApp Anda.",
        variant: "destructive"
      });
      return false;
    }
    
    // Basic WhatsApp number validation
    const cleanNumber = whatsappNumber.replace(/\D/g, '');
    if (cleanNumber.length < 10 || cleanNumber.length > 15) {
      toast({
        title: "Nomor WhatsApp tidak valid",
        description: "Mohon periksa kembali nomor WhatsApp Anda.",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };

  const generateWhatsAppMessage = () => {
    const { fullName, fullAddress, city, whatsappNumber } = userData;
    
    let message = "*Pesanan Dari Toko Lezat Online*\n\n";
    
    message += "*Data Pemesan:*\n";
    message += `Nama: ${fullName}\n`;
    message += `Alamat: ${fullAddress}\n`;
    message += `Kota: ${city}\n`;
    message += `Nomor WA: ${whatsappNumber}\n\n`;
    
    message += "*Detail Pesanan:*\n";
    cartItems.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      message += `${index + 1}. ${item.name} ${item.quantity} × ${formatPrice(item.price)} = ${formatPrice(itemTotal)}\n`;
    });
    
    message += `\n*Total Pembayaran: ${formatPrice(totalPrice)}*\n\n`;
    message += "Mohon konfirmasi pesanan saya. Terima kasih!";
    
    return message;
  };

  const handleCheckout = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const message = generateWhatsAppMessage();
      
      // Copy to clipboard
      await navigator.clipboard.writeText(message);
      
      toast({
        title: "Pesanan berhasil disalin!",
        description: "Pesan telah disalin ke clipboard. Anda akan diarahkan ke WhatsApp.",
      });
      
      // Wait a moment then open WhatsApp
      setTimeout(() => {
        const whatsappNumber = "6285867989333"; // Admin's WhatsApp number
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
        
        // Clear form and close modal
        setUserData({
          fullName: "",
          fullAddress: "",
          city: "",
          whatsappNumber: ""
        });
        
        onCheckoutComplete();
        onClose();
      }, 1000);
      
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      
      // Fallback: try to open WhatsApp with pre-filled message
      try {
        const message = generateWhatsAppMessage();
        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = "6285867989333";
        
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
        
        toast({
          title: "Diarahkan ke WhatsApp",
          description: "Silakan paste pesan di WhatsApp jika tidak otomatis terisi.",
        });
        
        onCheckoutComplete();
        onClose();
      } catch (fallbackError) {
        toast({
          title: "Terjadi kesalahan",
          description: "Mohon coba lagi atau hubungi admin langsung.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      <Card className="relative w-full sm:max-w-lg h-full sm:h-auto sm:max-h-[95vh] overflow-hidden shadow-2xl rounded-t-3xl sm:rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 py-4 px-4 border-b border-border bg-gradient-to-r from-red-50 to-orange-50 sticky top-0 z-10">
          <CardTitle className="text-lg font-bold flex items-center gap-2 text-red-900">
            <User className="w-5 h-5" />
            Data Pemesan
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-9 w-9 p-0 rounded-full">
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>
        
        <CardContent className="p-0 overflow-y-auto h-full">
          <div className="p-4 space-y-4">
            {/* User Data Form */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="text-sm font-semibold text-gray-700 block mb-2">
                  Nama Lengkap *
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Masukkan nama lengkap Anda"
                  value={userData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="h-12 text-base border-2 border-gray-200 focus:border-red-500 rounded-xl"
                />
              </div>
              
              <div>
                <Label htmlFor="fullAddress" className="text-sm font-semibold text-gray-700 block mb-2">
                  Alamat Lengkap *
                </Label>
                <Textarea
                  id="fullAddress"
                  placeholder="Masukkan alamat lengkap untuk pengiriman"
                  value={userData.fullAddress}
                  onChange={(e) => handleInputChange('fullAddress', e.target.value)}
                  className="min-h-[80px] text-base border-2 border-gray-200 focus:border-red-500 rounded-xl resize-none"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="city" className="text-sm font-semibold text-gray-700 block mb-2">
                  Kota/Kabupaten *
                </Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="Contoh: Yogyakarta, Bantul, Sleman"
                  value={userData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="h-12 text-base border-2 border-gray-200 focus:border-red-500 rounded-xl"
                />
              </div>
              
              <div>
                <Label htmlFor="whatsappNumber" className="text-sm font-semibold text-gray-700 block mb-2">
                  Nomor WhatsApp *
                </Label>
                <Input
                  id="whatsappNumber"
                  type="tel"
                  placeholder="Contoh: 08123456789"
                  value={userData.whatsappNumber}
                  onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
                  className="h-12 text-base border-2 border-gray-200 focus:border-red-500 rounded-xl"
                />
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="border-t pt-4 bg-gray-50 -mx-4 px-4 pb-6">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Ringkasan Pesanan
              </h3>
              
              <div className="space-y-3 max-h-40 overflow-y-auto bg-white rounded-xl p-3 border">
                {cartItems.map((item, index) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600 flex-1">
                      {index + 1}. {item.name} × {item.quantity}
                    </span>
                    <span className="font-semibold ml-2">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="border-t mt-4 pt-4 bg-white -mx-4 px-4 rounded-xl">
                <div className="flex justify-between font-bold text-xl text-red-600">
                  <span>Total:</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Button - Sticky at bottom on mobile */}
          <div className="sticky bottom-0 p-4 border-t bg-white">
            <Button 
              onClick={handleCheckout}
              disabled={isSubmitting}
              className="w-full h-14 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold text-base rounded-xl"
              size="lg"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Memproses...
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Copy className="w-5 h-5" />
                  Copy & Lanjut ke WhatsApp
                </div>
              )}
            </Button>
            
            <p className="text-xs text-gray-500 text-center mt-2">
              Pesan akan disalin otomatis ke clipboard
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
