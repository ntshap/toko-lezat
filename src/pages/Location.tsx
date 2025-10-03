import { ArrowLeft, MapPin, Phone, Clock, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

export default function LocationPage() {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open("https://wa.me/6229313131", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/pusatoleholehlezat", "_blank");
  };

  const handleGoogleMaps = () => {
    window.open("https://www.google.com/maps/place/Pusat+Oleh+-+Oleh+Lezat/@-7.493333399999999,110.2225967,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a8f381c35967b:0x7e71ec5b29884cdf!8m2!3d-7.493333399999999!4d110.2225967!16s%2Fg%2F11c1q8qy8y", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemCount={0} 
        onCartClick={() => {}}
        searchQuery=""
        onSearchChange={() => {}}
      />
      
      <main>
        {/* Header with Back Button */}
        <div className="bg-red-600 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4">
              <Button
                onClick={() => navigate('/')}
                variant="ghost"
                size="icon"
                className="text-white hover:bg-red-700 rounded-full"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-white text-2xl font-bold">Lokasi Toko</h1>
            </div>
          </div>
        </div>

        {/* Main Location Section - Simple like mockup */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="max-w-4xl mx-auto">
                {/* Large Google Maps */}
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-6">
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
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section - Red Background */}
        <section className="bg-red-600 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white max-w-4xl mx-auto">
              {/* Left Column - Address */}
              <div className="text-center md:text-left">
                <h3 className="font-bold text-2xl mb-4">📍 Alamat</h3>
                <div className="space-y-3 text-lg">
                  <p>Jl. Jend. Sudirman</p>
                  <p>Magelang, Central Java</p>
                  <div className="flex items-center justify-center md:justify-start gap-2 mt-4">
                    <Phone className="h-5 w-5" />
                    <span className="font-semibold">(0293) 313131</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Instagram className="h-5 w-5" />
                    <span className="font-semibold">@pusatoleholehlezatmagelang</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Operating Hours */}
              <div className="text-center md:text-left">
                <h3 className="font-bold text-2xl mb-4">🕒 Jam Operasional</h3>
                <div className="space-y-2 text-lg">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Clock className="h-5 w-5" />
                    <span>Toko Buka Setiap Hari</span>
                  </div>
                  <p className="font-semibold">08:00 - 17:00 WIB</p>
                  <p className="text-red-200 text-base mt-3">
                    Siap melayani Anda dengan produk oleh-oleh khas terbaik!
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Actions */}
            <div className="text-center mt-8">
              <div className="flex gap-4 justify-center flex-wrap">
                <Button 
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  onClick={handleInstagram}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
