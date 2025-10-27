import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto text-center md:text-left">
          
          {/* Address Section */}
          <div className="space-y-2 sm:space-y-3">
            <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Alamat</h4>
            
            {/* Location */}
            <div className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <p className="font-medium text-sm sm:text-base">
                Jl. Ikhlas Blok D1 No.1, Magelang
              </p>
            </div>
            
            {/* Phone */}
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <p className="font-medium text-sm sm:text-base">(0293) 313131</p>
            </div>
            
            {/* Instagram */}
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <p className="font-medium text-sm sm:text-base">tokolezatmagelang</p>
            </div>
          </div>

          {/* Operating Hours Section */}
          <div className="space-y-2 sm:space-y-3">
            <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Jam Operasional</h4>
            
            <div className="space-y-2">
              <div>
                <p className="font-bold text-sm sm:text-base mb-0.5">Toko Buka</p>
                <p className="text-sm sm:text-base">
                  pukul 09.00 - 18.00 WIB
                </p>
              </div>
              
              <div>
                <p className="font-bold text-sm sm:text-base mb-0.5">Online</p>
                <p className="text-sm sm:text-base">
                  Senin - Sabtu
                </p>
                <p className="text-sm sm:text-base">
                  pukul 09.00 - 17.00 WIB
                </p>
                <p className="text-sm sm:text-base font-semibold mt-0.5">
                  Minggu Tutup
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
