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
        className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      <Card className="relative w-full sm:max-w-2xl h-full sm:h-auto sm:max-h-[95vh] overflow-hidden shadow-2xl rounded-t-3xl sm:rounded-2xl bg-white border-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 py-6 px-6 border-b border-gray-100 bg-gradient-to-r from-red-50 via-red-50 to-orange-50 sticky top-0 z-10 shadow-sm">
          <CardTitle className="text-xl font-black flex items-center gap-3 text-red-900">
            <div className="p-2 bg-red-100 rounded-xl">
              <User className="w-6 h-6 text-red-600" />
            </div>
            Data Pemesan
          </CardTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClose} 
            className="h-12 w-12 p-0 rounded-full hover:bg-red-100 active:scale-95 transition-all duration-200"
          >
            <X className="w-6 h-6 text-gray-500" />
          </Button>
        </CardHeader>
        
        <CardContent className="p-0 overflow-y-auto h-full">
          <div className="p-6 space-y-6">
            {/* User Data Form */}
            <div className="space-y-5">
              <div>
                <Label htmlFor="fullName" className="text-base font-bold text-gray-800 block mb-3 flex items-center gap-2">
                  <User className="w-4 h-4 text-red-600" />
                  Nama Lengkap *
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Masukkan nama lengkap Anda"
                  value={userData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="h-14 text-base border-2 border-gray-200 focus:border-red-500 rounded-2xl px-4 bg-gray-50 focus:bg-white transition-all duration-200 touch-target"
                />
              </div>
              
              <div>
                <Label htmlFor="fullAddress" className="text-base font-bold text-gray-800 block mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-600" />
                  Alamat Lengkap *
                </Label>
                <Textarea
                  id="fullAddress"
                  placeholder="Masukkan alamat lengkap untuk pengiriman"
                  value={userData.fullAddress}
                  onChange={(e) => handleInputChange('fullAddress', e.target.value)}
                  className="min-h-[100px] text-base border-2 border-gray-200 focus:border-red-500 rounded-2xl px-4 py-4 resize-none bg-gray-50 focus:bg-white transition-all duration-200"
                  rows={4}
                />
              </div>
              
              <div>
                <Label htmlFor="city" className="text-base font-bold text-gray-800 block mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-600" />
                  Kota/Kabupaten *
                </Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="Contoh: Yogyakarta, Bantul, Sleman"
                  value={userData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="h-14 text-base border-2 border-gray-200 focus:border-red-500 rounded-2xl px-4 bg-gray-50 focus:bg-white transition-all duration-200 touch-target"
                />
              </div>
              
              <div>
                <Label htmlFor="whatsappNumber" className="text-base font-bold text-gray-800 block mb-3 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-600" />
                  Nomor WhatsApp *
                </Label>
                <Input
                  id="whatsappNumber"
                  type="tel"
                  placeholder="Contoh: 08123456789"
                  value={userData.whatsappNumber}
                  onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
                  className="h-14 text-base border-2 border-gray-200 focus:border-red-500 rounded-2xl px-4 bg-gray-50 focus:bg-white transition-all duration-200 touch-target"
                />
              </div>
            </div>
            
            {/* Enhanced Order Summary */}
            <div className="border-t-2 border-gray-100 pt-6 bg-gradient-to-br from-gray-50 to-gray-100 -mx-6 px-6 pb-8 rounded-t-3xl">
              <h3 className="font-black text-lg text-gray-900 mb-4 flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-xl">
                  <ShoppingBag className="w-5 h-5 text-red-600" />
                </div>
                Ringkasan Pesanan
              </h3>
              
              <div className="space-y-3 max-h-48 overflow-y-auto bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
                {cartItems.map((item, index) => (
                  <div key={item.id} className="flex justify-between items-center text-sm py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700 flex-1 font-medium">
                      {index + 1}. {item.name} × {item.quantity}
                    </span>
                    <span className="font-bold text-red-600 ml-3 text-base">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="border-t-2 border-red-100 mt-6 pt-4 bg-gradient-to-r from-red-50 to-orange-50 -mx-4 px-4 rounded-2xl">
                <div className="flex justify-between items-center font-black text-xl text-red-700">
                  <span>Total Pembayaran:</span>
                  <span className="text-2xl">{formatPrice(totalPrice)}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Action Button - Sticky at bottom on mobile */}
          <div className="sticky bottom-0 p-6 border-t-2 border-gray-100 bg-white shadow-2xl">
            <Button 
              onClick={handleCheckout}
              disabled={isSubmitting}
              className="w-full h-16 bg-gradient-to-r from-green-600 via-green-600 to-green-700 hover:from-green-700 hover:via-green-700 hover:to-green-800 text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] border-0 relative overflow-hidden"
              size="lg"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                  <span className="text-lg">Memproses Pesanan...</span>
                </div>
              ) : (
                <div className="flex items-center gap-4 relative z-10">
                  <div className="p-2 bg-white/20 rounded-xl">
                    <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-lg font-black leading-tight">CHECKOUT VIA WHATSAPP</span>
                    <span className="text-sm opacity-95 leading-tight font-medium">Pesan otomatis disalin</span>
                  </div>
                </div>
              )}
              
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>
            
            <p className="text-sm text-gray-600 text-center mt-3 font-medium">
              🔒 Data Anda aman • ✅ Pesan otomatis disalin ke clipboard
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
