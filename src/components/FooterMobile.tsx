import { MapPin, Phone, Instagram, Clock, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {/* Company Info */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 flex items-center justify-center text-white font-black text-base sm:text-lg rounded-lg">
                L
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-white">pusatoleholehlezat</h3>
                <p className="text-xs sm:text-sm font-bold text-red-400">LEZAT</p>
              </div>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
              Oleh-oleh khas berkualitas terbaik
            </p>
          </div>

          {/* Contact & Hours - Mobile Optimized Single Column */}
          <div className="text-center space-y-3 sm:space-y-4">
            {/* Contact Info */}
            <div>
              <h4 className="text-sm sm:text-base font-bold mb-2 text-white">Kontak Kami</h4>
              <div className="space-y-1 sm:space-y-2">
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-red-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Jl. Ikhlas Blok D1 No.1, Magelang</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-red-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">(0293) 313131</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <Instagram className="h-3 w-3 sm:h-4 sm:w-4 text-red-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">@tokolezat</span>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div>
              <h4 className="text-sm sm:text-base font-bold mb-2 text-white">Jam Layanan</h4>
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-red-400 flex-shrink-0" />
                  <div className="text-xs sm:text-sm">
                    <p>Senin - Jumat: 08:00 - 17:00</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-300">Sabtu: 08:00 - 15:00 | Minggu: Tutup</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-4 sm:mt-6 pt-3 sm:pt-4">
          <div className="flex flex-col items-center justify-center gap-2 sm:gap-3">
            <p className="text-gray-400 text-xs text-center">
              © 2024 Pusat Oleh-Oleh Lezat. All rights reserved.
            </p>
            <div className="flex items-center gap-1 sm:gap-2 text-gray-400 text-xs">
              <span>Made with</span>
              <Heart className="h-3 w-3 text-red-500" />
              <span>for our customers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
