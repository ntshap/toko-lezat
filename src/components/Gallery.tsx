import { Camera, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import fasadTokoImg from "@/assets/image/Fasat Toko Lezat_alt 3.jpg";
import gallery1Img from "@/assets/image/Screenshot 2025-09-01 144047.png";
import gallery2Img from "@/assets/image/Screenshot 2025-09-01 144054.png";
import gallery3Img from "@/assets/image/Screenshot 2025-09-01 144102.png";
import gallery4Img from "@/assets/image/Screenshot 2025-09-01 144111.png";

const galleryImages = [
  {
    id: 1,
    src: fasadTokoImg,
    title: "Fasad Toko Lezat",
    badge: "Tampak Depan"
  },
  {
    id: 2,
    src: gallery1Img,
    title: "Interior Toko",
    badge: "Dalam Toko"
  },
  {
    id: 3,
    src: gallery2Img,
    title: "Display Produk",
    badge: "Area Produk"
  },
  {
    id: 4,
    src: gallery3Img,
    title: "Ruang Pelayanan",
    badge: "Area Kasir"
  },
  {
    id: 5,
    src: gallery4Img,
    title: "Tampak Luar",
    badge: "Eksterior"
  }
];

export default function Gallery() {

  return (
    <section className="py-20 bg-gradient-to-br from-white to-red-50 relative overflow-hidden">
      {/* Enhanced Aesthetic Batik Background Pattern */}
      <div 
        className="absolute inset-0 opacity-12"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='140' height='140' viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffd700' fill-opacity='0.15'%3E%3Ccircle cx='35' cy='35' r='4' stroke='%23ffd700' stroke-width='1' stroke-opacity='0.1'/%3E%3Ccircle cx='105' cy='35' r='4' stroke='%23ffd700' stroke-width='1' stroke-opacity='0.1'/%3E%3Ccircle cx='70' cy='70' r='5' stroke='%23ffd700' stroke-width='1.5' stroke-opacity='0.15'/%3E%3Ccircle cx='35' cy='105' r='4' stroke='%23ffd700' stroke-width='1' stroke-opacity='0.1'/%3E%3Ccircle cx='105' cy='105' r='4' stroke='%23ffd700' stroke-width='1' stroke-opacity='0.1'/%3E%3Cpath d='M35 35 Q70 40 105 35' stroke='%23ffd700' stroke-width='1.5' fill='none' opacity='0.3'/%3E%3Cpath d='M35 105 Q70 100 105 105' stroke='%23ffd700' stroke-width='1.5' fill='none' opacity='0.3'/%3E%3Ccircle cx='52' cy='52' r='2' fill='%23ffd700' fill-opacity='0.12'/%3E%3Ccircle cx='88' cy='88' r='2' fill='%23ffd700' fill-opacity='0.12'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      {/* Enhanced Corner Elements */}
      <div className="absolute top-6 left-6 w-14 h-14 opacity-15">
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <g fill="#ffd700" fillOpacity="0.4">
            <circle cx="20" cy="20" r="12" fill="none" stroke="#ffd700" strokeWidth="1.5" opacity="0.6"/>
            <circle cx="20" cy="20" r="6" fill="#ffd700" opacity="0.7" stroke="#ffd700" strokeWidth="1" strokeOpacity="0.3"/>
            <circle cx="10" cy="10" r="2" fill="#ffd700" opacity="0.5"/>
            <circle cx="30" cy="30" r="2" fill="#ffd700" opacity="0.5"/>
          </g>
        </svg>
      </div>
      
      <div className="absolute top-6 right-6 w-14 h-14 opacity-15">
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <g fill="#ffd700" fillOpacity="0.4">
            <circle cx="20" cy="20" r="12" fill="none" stroke="#ffd700" strokeWidth="1.5" opacity="0.6"/>
            <circle cx="20" cy="20" r="6" fill="#ffd700" opacity="0.7" stroke="#ffd700" strokeWidth="1" strokeOpacity="0.3"/>
            <circle cx="10" cy="10" r="2" fill="#ffd700" opacity="0.5"/>
            <circle cx="30" cy="30" r="2" fill="#ffd700" opacity="0.5"/>
          </g>
        </svg>
      </div>
      
      {/* Additional Floating Elements */}
      <div className="absolute bottom-20 left-10 w-12 h-12 opacity-12">
        <svg viewBox="0 0 48 48" className="w-full h-full fill-yellow-500">
          <circle cx="24" cy="24" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
          <circle cx="24" cy="24" r="5" fill="currentColor" opacity="0.5"/>
          <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.4"/>
          <circle cx="36" cy="36" r="2" fill="currentColor" opacity="0.4"/>
          <path d="M12 12 Q24 18 36 36" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 font-bold text-sm mb-8 shadow-xl">
            <Camera className="w-5 h-5" />
            GALERI TOKO
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-red-900 mb-6 leading-tight">
            LIHAT TOKO
            <span className="block text-red-600 relative">
              LEZAT KAMI
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-red-300"></div>
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-red-700 max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
            Jelajahi suasana toko kami yang nyaman dan modern, dengan display produk yang menarik 
            dan pelayanan yang ramah untuk pengalaman berbelanja yang menyenangkan.
          </p>
        </div>

        {/* Main Gallery Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Featured Large Image */}
          <div className="mb-12">
            <div className="relative overflow-hidden shadow-2xl group">
              <img 
                src={fasadTokoImg} 
                alt="Toko Lezat - Fasad Utama"
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-600 text-white px-4 py-2 text-sm font-bold flex items-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      TOKO UTAMA
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-3">TOKO LEZAT MAGELANG</h3>
                  <p className="text-white/90 text-lg max-w-2xl">Destinasi utama jajanan khas Magelang dengan suasana toko yang nyaman dan modern</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages.slice(1).map((image, index) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-red-600/90 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold">
                    {image.badge}
                  </span>
                </div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h4 className="text-white font-bold text-sm md:text-base">{image.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action with Enhanced Batik */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 shadow-2xl border border-yellow-100 max-w-2xl mx-auto relative overflow-hidden">
            {/* Enhanced Aesthetic decoration for CTA */}
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                <g fill="#ffd700" fillOpacity="0.12">
                  <circle cx="100" cy="50" r="5" stroke="#ffd700" strokeWidth="1" strokeOpacity="0.1"/>
                  <circle cx="300" cy="50" r="5" stroke="#ffd700" strokeWidth="1" strokeOpacity="0.1"/>
                  <circle cx="200" cy="100" r="6" stroke="#ffd700" strokeWidth="1.5" strokeOpacity="0.15"/>
                  <circle cx="100" cy="150" r="5" stroke="#ffd700" strokeWidth="1" strokeOpacity="0.1"/>
                  <circle cx="300" cy="150" r="5" stroke="#ffd700" strokeWidth="1" strokeOpacity="0.1"/>
                  <path d="M100 50 Q200 60 300 50" stroke="#ffd700" strokeWidth="1.5" fill="none" opacity="0.3"/>
                  <path d="M100 150 Q200 140 300 150" stroke="#ffd700" strokeWidth="1.5" fill="none" opacity="0.3"/>
                  <circle cx="150" cy="75" r="3" fill="#ffd700" fillOpacity="0.1"/>
                  <circle cx="250" cy="125" r="3" fill="#ffd700" fillOpacity="0.1"/>
                  <path d="M150 75 Q200 80 250 125" stroke="#ffd700" strokeWidth="1" fill="none" opacity="0.2"/>
                </g>
              </svg>
            </div>
            
            {/* Enhanced corner elements */}
            <div className="absolute top-3 left-3 w-8 h-8 opacity-15">
              <svg viewBox="0 0 16 16" className="w-full h-full">
                <g fill="#ffd700" fillOpacity="0.4">
                  <circle cx="8" cy="8" r="5" fill="none" stroke="#ffd700" strokeWidth="1" opacity="0.5"/>
                  <circle cx="8" cy="8" r="3" fill="currentColor" opacity="0.6"/>
                  <circle cx="4" cy="4" r="1" fill="currentColor" opacity="0.4"/>
                  <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.4"/>
                </g>
              </svg>
            </div>
            
            <div className="absolute top-3 right-3 w-8 h-8 opacity-15">
              <svg viewBox="0 0 16 16" className="w-full h-full">
                <g fill="#ffd700" fillOpacity="0.4">
                  <circle cx="8" cy="8" r="5" fill="none" stroke="#ffd700" strokeWidth="1" opacity="0.5"/>
                  <circle cx="8" cy="8" r="3" fill="currentColor" opacity="0.6"/>
                  <circle cx="4" cy="4" r="1" fill="currentColor" opacity="0.4"/>
                  <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.4"/>
                </g>
              </svg>
            </div>
            
            {/* Additional decorative elements */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 opacity-12">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-yellow-500">
                <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
                <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.5"/>
                <circle cx="6" cy="6" r="1.5" fill="currentColor" opacity="0.3"/>
                <circle cx="18" cy="18" r="1.5" fill="currentColor" opacity="0.3"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">Kunjungi Toko Kami</h3>
              <p className="text-yellow-700 mb-6">Datang langsung ke toko untuk merasakan pengalaman berbelanja yang menyenangkan</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white font-bold px-8 py-3">
                  <MapPin className="w-5 h-5 mr-2" />
                  Lihat Lokasi
                </Button>
                <Button variant="outline" className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-50 font-bold px-8 py-3">
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}