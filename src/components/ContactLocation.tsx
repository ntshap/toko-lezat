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
    <>
      {/* White Section - Toko Kami matching UI design */}
      <section id="contact" className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-8">
              Toko Kami
            </h2>
            
            <div className="max-w-6xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Lokasi & Tampilan Toko 360°
              </h3>
              
              {/* Double Maps Layout - Regular Map & 360° View */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Regular Google Maps */}
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <div className="mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">📍 Lokasi di Maps</h4>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.745439151646!2d110.2225967!3d-7.493333399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8f381c35967b%3A0x7e71ec5b29884cdf!2sPusat%20Oleh%20-%20Oleh%20Lezat!5e0!3m2!1sen!2sid!4v1757642857119!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                </div>

                {/* 360° Street View */}
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <div className="mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">👁️ Tampilan Toko 360°</h4>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1757642898313!6m8!1m7!1sQj1PS1mDWxDfPXXpqYB5AQ!2m2!1d-7.493334006981341!2d110.222667005607!3f277.7709!4f0!5f0.7820865974627469"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={handleGoogleMaps}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Buka di Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Red Footer Section - Contact Info matching UI design */}
      <section className="bg-red-600 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
            {/* Left Column - Address */}
            <div>
              <h3 className="font-bold text-lg mb-4">Alamat</h3>
              <div className="space-y-2">
                <p>Jl. Ikhlas Blok D1 No.1, Magelang</p>
                <p>📞 (0293) 313131</p>
                <p>📱 @tokolezatmagelang</p>
              </div>
            </div>
            
            {/* Right Column - Operating Hours */}
            <div>
              <h3 className="font-bold text-lg mb-4">Jam Operasional</h3>
              <div className="space-y-1">
                <p>Toko Buka</p>
                <p>pukul 09.00 - 18.00 WIB</p>
                <p className="mt-3">Online</p>
                <p>pukul 09.00 - 17.00 WIB</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
