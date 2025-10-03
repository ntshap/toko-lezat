import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center md:text-left">
          
          {/* Address Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4">Alamat</h4>
            
            {/* Location */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <p className="font-medium text-base">
                Jl. Ikhlas Blok D1 No.1, Magelang
              </p>
            </div>
            
            {/* Phone */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <p className="font-medium text-base">(0293) 313131</p>
            </div>
            
            {/* Instagram */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Instagram className="w-5 h-5 flex-shrink-0" />
              <p className="font-medium text-base">tokolezatmagelang</p>
            </div>
          </div>

          {/* Operating Hours Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4">Jam Operasional</h4>
            
            <div className="space-y-3">
              <div>
                <p className="font-bold text-base mb-1">Toko Buka</p>
                <p className="text-base">
                  pukul 09.00 - 18.00 WIB
                </p>
              </div>
              
              <div>
                <p className="font-bold text-base mb-1">Online</p>
                <p className="text-base">
                  pukul 09.00 - 17.00 WIB
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
