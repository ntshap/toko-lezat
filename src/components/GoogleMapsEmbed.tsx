import { MapPin, ExternalLink, Star } from "lucide-react";

interface GoogleMapsEmbedProps {
  placeId?: string;
  businessName?: string;
  address?: string;
}

export default function GoogleMapsEmbed({ 
  placeId = "ChIJXXXXXXXXXXXXXXXXXX", // Replace with real Place ID
  businessName = "Pusat Oleh-Oleh Lezat Magelang",
  address = "Jl. Ikhlas Blok D1 No.1, Magelang, Cilacap"
}: GoogleMapsEmbedProps) {
  
  // Google Maps embed URL
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_API_KEY&q=place_id:${placeId}&zoom=16`;
  
  // Google Maps link for reviews
  const mapsUrl = `https://www.google.com/search?sca_esv=ca19146f6630880d&hl=id&sxsrf=AE3TifMNw5Zv-LfPcsAVUFRCMfAt40NfSw:1759457923741&si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMU9rMM1X2urOrZKtWeV3bgYIvEbSx8sd5qnyqI7Y9dRKAnsQ91-_wCT2vN37GX4EfjoSQx-GSHqdp4CoqJ_gXb5A_bv-X7LReG55hydwC_gRWpKLLw%3D%3D&q=Pusat+Oleh+-+Oleh+Lezat+Ulasan&sa=X&ved=2ahUKEwjFyarE-4aQAxWb1DgGHfeUBoUQ0bkNegQILBAD&biw=1482&bih=787&dpr=1.25`;
  
  // Write review URL
  const writeReviewUrl = `https://www.google.com/search?sca_esv=ca19146f6630880d&hl=id&sxsrf=AE3TifMNw5Zv-LfPcsAVUFRCMfAt40NfSw:1759457923741&si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMU9rMM1X2urOrZKtWeV3bgYIvEbSx8sd5qnyqI7Y9dRKAnsQ91-_wCT2vN37GX4EfjoSQx-GSHqdp4CoqJ_gXb5A_bv-X7LReG55hydwC_gRWpKLLw%3D%3D&q=Pusat+Oleh+-+Oleh+Lezat+Ulasan&sa=X&ved=2ahUKEwjFyarE-4aQAxWb1DgGHfeUBoUQ0bkNegQILBAD&biw=1482&bih=787&dpr=1.25`;
  
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Lokasi & Review
          </h2>
          <p className="text-gray-600">Temukan kami dan lihat review pelanggan</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Google Maps Embed */}
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={embedUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
                className="w-full h-[300px]"
              />
            </div>
            
            {/* Location Info */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{businessName}</h3>
                  <p className="text-gray-700 text-sm mb-3">{address}</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Buka di Google Maps
                    </a>
                    <a
                      href={writeReviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      <Star className="h-4 w-4" />
                      Lihat Review
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Reviews Widget */}
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Review Terbaru
              </h3>
              
              {/* Google Reviews Embed */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_API_KEY&q=place_id:${placeId}&zoom=16&maptype=satellite`}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Reviews"
                  className="w-full h-[200px]"
                />
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm mb-3">
                  Puas dengan pelayanan kami? Berikan review Anda!
                </p>
                <a
                  href={writeReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  <Star className="h-5 w-5" />
                  Tulis Review
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours & Contact */}
        <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Jam Buka</h4>
              <p className="text-gray-700 text-sm">
                Senin - Sabtu: 08:00 - 20:00<br />
                Minggu: 08:00 - 18:00
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Telepon</h4>
              <p className="text-gray-700 text-sm">
                <a href="tel:+62293313131" className="hover:text-red-600 transition-colors">
                  (0293) 313131
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">WhatsApp</h4>
              <p className="text-gray-700 text-sm">
                <a 
                  href="https://wa.me/6281234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition-colors"
                >
                  +62 812-3456-7890
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
SETUP INSTRUCTIONS untuk Google Maps Embed:

1. Replace YOUR_GOOGLE_API_KEY dengan API key yang sama
2. Replace placeId dengan Place ID real bisnis Anda
3. Untuk reviews widget yang lebih advanced, gunakan:
   - Google My Business API
   - Third-party widget seperti EmbedReviews
   - Custom implementation dengan Google Reviews API

4. Alternative: Gunakan widget siap pakai dari:
   - https://embedsocial.com/
   - https://www.trustindex.io/
   - https://www.reviewsio.com/

Komponen ini memberikan:
- ✅ Embedded Google Maps
- ✅ Link langsung ke reviews
- ✅ Informasi kontak lengkap
- ✅ Call-to-action untuk menulis review
*/
