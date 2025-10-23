import { useState, useEffect } from "react";
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

  // Prevent body scroll when modal is open and optimize for mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      
      // Add viewport meta optimization for mobile
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
      }
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      
      // Restore original viewport
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
      }
    };
  }, [isOpen]);

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
    // Auto-format WhatsApp number
    if (field === 'whatsappNumber') {
      // Remove all non-numeric characters
      const cleaned = value.replace(/\D/g, '');
      
      // Limit to 15 digits (international format max)
      const limited = cleaned.slice(0, 15);
      
      setUserData(prev => ({
        ...prev,
        [field]: limited
      }));
    } else {
      setUserData(prev => ({
        ...prev,
        [field]: value
      }));
    }
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
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long', 
      year: 'numeric'
    });
    const formattedTime = currentDate.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit'
    });
    
    let message = "🛒 *PESANAN TOKO LEZAT ONLINE*\n";
    message += `📅 *Tanggal:* ${formattedDate} pukul ${formattedTime}\n`;
    message += "═══════════════════════════\n\n";
    
    message += "👤 *INFORMASI PEMESAN:*\n";
    message += `� Nama: ${fullName}\n`;
    message += `🏠 Alamat: ${fullAddress}\n`;
    message += `🏙️ Kota: ${city}\n`;
    message += `📱 WhatsApp: ${whatsappNumber}\n`;
    message += "═══════════════════════════\n\n";
    
    message += "🛍️ *DETAIL PESANAN:*\n";
    cartItems.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Qty: ${item.quantity} × ${formatPrice(item.price)} = *${formatPrice(itemTotal)}*\n\n`;
    });
    
    message += "═══════════════════════════\n";
    message += `💰 *TOTAL PEMBAYARAN: ${formatPrice(totalPrice)}*\n`;
    message += "═══════════════════════════\n\n";
    message += "✅ Mohon konfirmasi pesanan saya.\n";
    message += "🙏 Terima kasih!\n\n";
    message += "_Pesan otomatis dari website Toko Lezat_";
    
    return message;
  };

  const handleCheckout = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const message = generateWhatsAppMessage();
      const whatsappNumber = "6285867989333"; // Admin's WhatsApp number
      
      console.log('Generated message:', message); // Debug log
      
      // Primary method: Try URL encoding with WhatsApp Web/App
      try {
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        console.log('WhatsApp URL:', whatsappURL); // Debug log
        
        // Open WhatsApp with pre-filled message
        window.open(whatsappURL, '_blank');
        
        // Also copy to clipboard as backup
        try {
          await navigator.clipboard.writeText(message);
          toast({
            title: "Pesanan terkirim!",
            description: "Pesan telah dikirim ke WhatsApp dan disalin ke clipboard sebagai backup.",
          });
        } catch (clipboardError) {
          console.log('Clipboard not available, but URL method used');
          toast({
            title: "Pesanan terkirim!",
            description: "Pesan telah dikirim ke WhatsApp.",
          });
        }
        
        // Clear form and close modal
        setUserData({
          fullName: "",
          fullAddress: "",
          city: "",
          whatsappNumber: ""
        });
        
        onCheckoutComplete();
        onClose();
        
      } catch (urlError) {
        console.error('URL method failed, trying clipboard only:', urlError);
        
        // Fallback: clipboard only
        try {
          await navigator.clipboard.writeText(message);
          
          toast({
            title: "Pesan disalin!",
            description: "Pesan telah disalin ke clipboard. Silakan buka WhatsApp dan paste pesan.",
          });
          
          // Open WhatsApp without message
          setTimeout(() => {
            window.open(`https://wa.me/${whatsappNumber}`, '_blank');
          }, 1000);
          
        } catch (clipboardError) {
          console.error('Both methods failed:', clipboardError);
          
          // Manual fallback
          toast({
            title: "Mohon salin pesan secara manual",
            description: "Pesan akan ditampilkan di layar untuk disalin manual.",
            variant: "destructive"
          });
          
          // Show message in alert for manual copy
          alert(`Silakan salin pesan berikut ke WhatsApp:\n\n${message}`);
          window.open(`https://wa.me/${whatsappNumber}`, '_blank');
        }
        
        // Clear form and close modal
        setUserData({
          fullName: "",
          fullAddress: "",
          city: "",
          whatsappNumber: ""
        });
        
        onCheckoutComplete();
        onClose();
      }
      
    } catch (error) {
      console.error('Checkout failed:', error);
      toast({
        title: "Terjadi kesalahan",
        description: "Mohon coba lagi atau hubungi admin langsung.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-none" 
        onClick={onClose}
      />
      
      <Card className="relative w-full sm:max-w-md h-[95vh] sm:h-auto sm:max-h-[90vh] overflow-hidden shadow-2xl rounded-t-3xl sm:rounded-2xl bg-white border-0 transform transition-transform duration-300 ease-out">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 py-3 px-4 border-b border-gray-100 bg-gradient-to-r from-red-50 to-orange-50 sticky top-0 z-10 backdrop-blur-sm bg-opacity-95">
          <CardTitle className="text-base sm:text-lg font-bold flex items-center gap-2 text-red-900">
            <div className="p-1 bg-red-100 rounded-lg">
              <User className="w-4 h-4 text-red-600" />
            </div>
            Data Pemesan
          </CardTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClose} 
            className="h-8 w-8 p-0 rounded-full hover:bg-red-100 active:scale-95 transition-all duration-150 touch-manipulation"
          >
            <X className="w-5 h-5 text-gray-500" />
          </Button>
        </CardHeader>
        
        <CardContent className="p-0 overflow-y-auto flex-1 overscroll-contain">
          <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
            {/* User Data Form */}
            <div className="space-y-3 sm:space-y-4">
              <div>
                <Label htmlFor="fullName" className="text-sm font-semibold text-gray-700 block mb-1.5 flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-red-600" />
                  Nama Lengkap *
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Masukkan nama lengkap Anda"
                  value={userData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="h-10 sm:h-11 text-base border border-gray-300 focus:border-red-500 rounded-lg px-3 bg-white transition-colors duration-150 touch-manipulation"
                  autoComplete="name"
                />
              </div>
              
              <div>
                <Label htmlFor="fullAddress" className="text-sm font-semibold text-gray-700 block mb-1.5 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-red-600" />
                  Alamat Lengkap *
                </Label>
                <Textarea
                  id="fullAddress"
                  placeholder="Masukkan alamat lengkap untuk pengiriman"
                  value={userData.fullAddress}
                  onChange={(e) => handleInputChange('fullAddress', e.target.value)}
                  className="min-h-[70px] sm:min-h-[80px] text-base border border-gray-300 focus:border-red-500 rounded-lg px-3 py-2 resize-none bg-white transition-colors duration-150 touch-manipulation"
                  rows={3}
                  autoComplete="street-address"
                  maxLength={200}
                />
                <p className="text-xs text-gray-500 mt-1 flex justify-between">
                  <span>Contoh: Jl. Malioboro No. 123, RT 02/RW 05</span>
                  <span className={userData.fullAddress.length > 180 ? 'text-orange-600 font-medium' : ''}>
                    {userData.fullAddress.length}/200
                  </span>
                </p>
              </div>
              
              <div>
                <Label htmlFor="city" className="text-sm font-semibold text-gray-700 block mb-1.5 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-red-600" />
                  Kota/Kabupaten *
                </Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="Contoh: Yogyakarta, Bantul, Sleman"
                  value={userData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="h-10 sm:h-11 text-base border border-gray-300 focus:border-red-500 rounded-lg px-3 bg-white transition-colors duration-150 touch-manipulation"
                  autoComplete="address-level2"
                />
              </div>
              
              <div>
                <Label htmlFor="whatsappNumber" className="text-sm font-semibold text-gray-700 block mb-1.5 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-red-600" />
                  Nomor WhatsApp *
                </Label>
                <div className="relative">
                  <Input
                    id="whatsappNumber"
                    type="tel"
                    inputMode="numeric"
                    placeholder="Contoh: 08123456789"
                    value={userData.whatsappNumber}
                    onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
                    className="h-10 sm:h-11 text-base border border-gray-300 focus:border-red-500 rounded-lg px-3 pr-12 bg-white transition-colors duration-150 touch-manipulation"
                    autoComplete="tel"
                  />
                  {userData.whatsappNumber && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      {userData.whatsappNumber.length >= 10 && userData.whatsappNumber.length <= 15 ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      ) : (
                        <span className="text-xs text-gray-400">{userData.whatsappNumber.length}</span>
                      )}
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                  {userData.whatsappNumber.length === 0 ? (
                    <>Masukkan nomor tanpa tanda +62 atau 0</>
                  ) : userData.whatsappNumber.length < 10 ? (
                    <span className="text-orange-600">Minimal 10 digit</span>
                  ) : userData.whatsappNumber.length > 15 ? (
                    <span className="text-red-600">Maksimal 15 digit</span>
                  ) : (
                    <span className="text-green-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Nomor valid
                    </span>
                  )}
                </p>
              </div>
            </div>
            
            {/* Mobile-optimized Order Summary - SCROLLABLE VERSION */}
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-gradient-to-br from-red-50 to-orange-50">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 px-4 py-2.5">
                <h3 className="font-bold text-sm text-white flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  Ringkasan Pesanan ({cartItems.length} item{cartItems.length > 1 ? 's' : ''})
                </h3>
              </div>
              
              {/* Scrollable Item List with max-height */}
              <div className="relative">
                {/* Gradient fade at top */}
                {cartItems.length > 3 && (
                  <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
                )}
                
                <div className="px-4 py-3 bg-white space-y-2 max-h-[180px] overflow-y-auto overscroll-contain">
                  {cartItems.map((item, index) => (
                    <div key={item.id} className="flex justify-between items-start gap-3 text-sm">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate leading-snug">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {item.quantity} × {formatPrice(item.price)}
                        </p>
                      </div>
                      <span className="font-semibold text-red-600 text-sm whitespace-nowrap">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Gradient fade at bottom */}
                {cartItems.length > 3 && (
                  <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                )}
              </div>
              
              {/* Total - More Prominent */}
              <div className="bg-gradient-to-r from-red-600 to-orange-600 px-4 py-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white text-sm">Total Pembayaran:</span>
                  <span className="font-bold text-white text-lg">{formatPrice(totalPrice)}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile-optimized Action Button - IMPROVED */}
          <div className="sticky bottom-0 p-3 sm:p-4 border-t border-gray-200 bg-gradient-to-t from-white via-white to-transparent shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <Button 
              onClick={handleCheckout}
              disabled={isSubmitting}
              className="w-full h-12 sm:h-13 bg-gradient-to-r from-green-600 via-green-600 to-green-700 hover:from-green-700 hover:via-green-700 hover:to-green-800 active:scale-[0.98] text-white font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed"
              size="lg"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Memproses Pesanan...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <div className="bg-white/20 p-1.5 rounded-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>Checkout via WhatsApp</span>
                  <div className="ml-1 bg-white/20 px-2 py-0.5 rounded-full text-xs font-normal">
                    {formatPrice(totalPrice)}
                  </div>
                </div>
              )}
            </Button>
            
            <p className="text-xs text-gray-500 text-center mt-2 flex items-center justify-center gap-1">
              <Copy className="w-3 h-3" />
              <span>Pesan akan disalin otomatis ke clipboard</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
