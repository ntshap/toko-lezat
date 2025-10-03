import { MapPin, Phone, Instagram, Clock, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center text-white font-black text-lg rounded-lg">
                L
              </div>
              <div>
                <h3 className="text-xl font-black text-white">pusatoleholehlezat</h3>
                <p className="text-sm font-bold text-red-400">pusatoleholehlezat</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Menyediakan oleh-oleh khas dengan kualitas terbaik dan rasa autentik. 
              Kepuasan pelanggan adalah prioritas utama kami.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-4 w-4 text-red-400 flex-shrink-0" />
                <span className="text-sm">Jl. Ikhlas Blok D1 No.1, Magelang, Cilacap</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-4 w-4 text-red-400 flex-shrink-0" />
                <span className="text-sm">(0293) 313131</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Instagram className="h-4 w-4 text-red-400 flex-shrink-0" />
                <span className="text-sm">@tokolezat</span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Jam Layanan</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="h-4 w-4 text-red-400 flex-shrink-0" />
                <div className="text-sm">
                  <p>Senin - Jumat: 08:00 - 17:00</p>
                  <p>Sabtu: 08:00 - 15:00</p>
                  <p>Minggu: Tutup</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Pusat Oleh-Oleh Lezat. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for our customers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
