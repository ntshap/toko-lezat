import { MapPin, Phone, Clock, Instagram, Mail, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactLocation() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/6229313131", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/tokolezat", "_blank");
  };

  const handleGoogleMaps = () => {
    // Updated with correct coordinates for Pusat Oleh-Oleh Lezat
    window.open("https://www.google.com/maps/place/Pusat+Oleh+-+Oleh+Lezat/@-7.493333399999999,110.2225967,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a8f381c35967b:0x7e71ec5b29884cdf!8m2!3d-7.493333399999999!4d110.2225967!16s%2Fg%2F11c1q8qy8y", "_blank");
  };

  const handle360View = () => {
    // Open Street View for 360-degree view with correct coordinates
    window.open("https://www.google.com/maps/@-7.493333399999999,110.2225967,3a,75y,90t/data=!3m7!1e1!3m5!1s0x2e7a8f381c35967b:0x7e71ec5b29884cdf!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3D0x2e7a8f381c35967b:0x7e71ec5b29884cdf%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D0%26pitch%3D0!7i13312!8i6656", "_blank");
  };

  return (
    <div className="w-full">
      {/* Toko Kami Header - White Background Only */}
      <section className="bg-white py-4 sm:py-6 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-3">
            Toko Kami
          </h2>
        </div>
      </section>

      {/* Full Rectangle Map - Street View 360° - NO ROUNDED CORNERS */}
      <div className="w-full">
        <div className="relative w-full h-[400px] sm:h-[560px] lg:h-[680px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1757642898313!6m8!1m7!1sQj1PS1mDWxDfPXXpqYB5AQ!2m2!1d-7.493334006981341!2d110.222667005607!3f277.7709!4f0!5f0.7820865974627469"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Street View - Toko Lezat"
            className="absolute inset-0 h-full w-full"
          ></iframe>
        </div>
      </div>

      {/* Red Footer Section - Contact Info matching UI design */}
      <section className="bg-red-600 py-4 sm:py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-white">
            {/* Left Column - Address */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">Alamat</h3>
              <div className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                <p>Jl. Ikhlas Blok D1 No.1, Magelang</p>
                <p>📞 (0293) 313131</p>
                <p>📱 @tokolezatmagelang</p>
              </div>
            </div>
            
            {/* Right Column - Operating Hours */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">Jam Operasional</h3>
              <div className="space-y-1 text-sm sm:text-base">
                <p>Toko Buka</p>
                <p>pukul 09.00 - 18.00 WIB</p>
                <p className="mt-2">Online</p>
                <p>Senin - Sabtu</p>
                <p>pukul 09.00 - 17.00 WIB</p>
                <p className="font-semibold">Minggu Tutup</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
