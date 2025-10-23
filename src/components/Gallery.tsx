import { Camera, MapPin } from "lucide-react";
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
    <section id="gallery" className="py-8 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-red-900 mb-2 sm:mb-4">
            Galeri
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Lihat suasana toko dan produk-produk berkualitas kami
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                index === 0 ? 'col-span-2 sm:col-span-1 sm:row-span-2' : ''
              }`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <span className="inline-block bg-red-600 text-white text-xs px-2 sm:px-3 py-1 rounded-full mb-1 sm:mb-2">
                    {image.badge}
                  </span>
                  <h3 className="text-white font-semibold text-sm sm:text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <Camera className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-red-900 mb-2 sm:mb-4">
              Kunjungi Toko Kami
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Datang langsung ke toko untuk melihat semua produk dan merasakan pengalaman berbelanja yang menyenangkan
            </p>
            <div className="flex items-center justify-center gap-2 text-red-600">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="font-semibold text-sm sm:text-base">Jl. Ikhlas Blok D1 No.1, Magelang, Cilacap</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
