import { MapPin, Phone, Clock, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LocationPage() {
  const navigate = useNavigate();

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
        {/* Header - Simple and Clean */}
        <div className="bg-red-600 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-2xl sm:text-3xl font-bold text-center">Lokasi Toko</h1>
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
      </main>

      <Footer />
    </div>
  );
}
