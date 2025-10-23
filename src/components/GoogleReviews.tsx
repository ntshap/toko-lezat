import { useState, useEffect } from "react";
import { Star, Quote, MapPin, ExternalLink, User } from "lucide-react";

// Interface untuk Google Reviews
interface GoogleReview {
  id: string;
  author_name: string;
  author_url?: string;
  language?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GooglePlaceDetails {
  place_id: string;
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
  url: string;
}

// Dummy data berdasarkan format Google Maps real reviews
const dummyGoogleReviews: GoogleReview[] = [
  {
    id: "1",
    author_name: "Yohana Ipsita",
    author_url: "https://share.google/gFLf9yhLnTcjK7Vzq",
    rating: 5,
    relative_time_description: "2 bulan yang lalu",
    text: "Toko Lezat di Magelang terkenal sebagai pusat oleh-oleh yang lengkap dan harganya sangat murah, mulai dari Rp 10.000 sehingga cocok untuk para wisatawan yang mencari oleh-oleh tanpa mengeluarkan banyak biaya. Toko ini mudah dijangkau karena berada di pinggir jalan dan dilalui oleh banyak angkot, bahkan dekat dengan shuttle Bus Damri. Selain melayani pembelian secara eceran, Toko Lezat juga melayani pembelian secara grosir.",
    time: Date.now() - (60 * 24 * 60 * 60 * 1000)
  },
  {
    id: "2", 
    author_name: "kemat budiono",
    author_url: "https://share.google/nAwNWmKa0e4lbpJ9N",
    rating: 5,
    relative_time_description: "2 bulan yang lalu",
    text: "Pusat oleh oleh yang lengkap di Magelang. Pelayanan ramah dan cepat. Harga relatif, barang2 selalu update, dan banyak aneka macam pilihan oleh-oleh. Juga untuk tempat nyaman dan bersih, bahkan tukang parkirnya pun sangat ramah. Owh ya kl kesini boleh sempetin jajan di warung samping Lezaat, teh anget, gorengan dan tahu bacemnya enak 😊",
    time: Date.now() - (60 * 24 * 60 * 60 * 1000)
  },
  {
    id: "3",
    author_name: "RoAd", 
    author_url: "https://share.google/I02OSqHyqyjO64gCu",
    rating: 5,
    relative_time_description: "4 bulan yang lalu",
    text: "Buat oleh-oleh masih fresh dan pegawainya juga ramah, bisa repacking dibantuin mba-mbanya, thanks sekali mba. Kalau mau plastik bayar ya jgn lupa. Bagi yg suka go green dan ga mau bayar pasti udh siapin tas sendiri. Worth to buy kalau menurut aku ya. Beli banyak ga rugi kalau mau dibawa jauh exp juga masih lama.",
    time: Date.now() - (120 * 24 * 60 * 60 * 1000)
  },
  {
    id: "4",
    author_name: "Bambang Subagjio",
    author_url: "https://share.google/56wTwkFyNY12vmVBi",
    rating: 5, 
    relative_time_description: "5 bulan yang lalu",
    text: "Terakhir kesini sekitar 2018, ternyata setting tempat bsudah berubah, terlihat lebih rapi dan luas, masing-masing jenis dikelompokkan dan di tata lebih rapi. Untuk mencari segala macam cemilan dari roti kering, kacang-kacangan, permen, keripik, asinan, manisan ada disini, tinggal pilih timbang bayar di kasir, pegawai nya ramah semua dan sangat membantu. Wajib mampir sih kalau ke Magelang",
    time: Date.now() - (150 * 24 * 60 * 60 * 1000)
  }
];

const placeDetails: GooglePlaceDetails = {
  place_id: "ChIJXXXXXXXXXXXXXXXXXXXX", // Dummy place ID
  name: "Pusat Oleh-Oleh Lezat",
  rating: 4.6,
  user_ratings_total: 2469,
  reviews: dummyGoogleReviews,
  url: "https://www.google.com/search?sca_esv=ca19146f6630880d&hl=id&sxsrf=AE3TifMNw5Zv-LfPcsAVUFRCMfAt40NfSw:1759457923741&si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMU9rMM1X2urOrZKtWeV3bgYIvEbSx8sd5qnyqI7Y9dRKAnsQ91-_wCT2vN37GX4EfjoSQx-GSHqdp4CoqJ_gXb5A_bv-X7LReG55hydwC_gRWpKLLw%3D%3D&q=Pusat+Oleh+-+Oleh+Lezat+Ulasan&sa=X&ved=2ahUKEwjFyarE-4aQAxWb1DgGHfeUBoUQ0bkNegQILBAD&biw=1482&bih=787&dpr=1.25" // Link ke Google review search
};

// Fungsi untuk fetch Google Reviews (placeholder untuk implementasi real)
const fetchGoogleReviews = async (placeId: string): Promise<GooglePlaceDetails | null> => {
  try {
    // TODO: Implementasi real Google Places API
    // const response = await fetch(`/api/google-reviews?placeId=${placeId}`);
    // const data = await response.json();
    // return data;
    
    // Untuk sekarang return dummy data
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    return placeDetails;
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return null;
  }
};

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [placeInfo, setPlaceInfo] = useState<GooglePlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoading(true);
        const data = await fetchGoogleReviews("dummy-place-id");
        if (data) {
          setPlaceInfo(data);
          setReviews(data.reviews);
        } else {
          setError("Gagal memuat review");
        }
      } catch (err) {
        setError("Terjadi kesalahan saat memuat review");
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  if (loading) {
    return (
      <section className="py-8 sm:py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
              Review dari Google Maps
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-8 sm:py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 sm:py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Review dari Google Maps
          </h2>
          <p className="text-gray-600">Review asli dari pelanggan kami di Google Maps</p>
        </div>

        {/* Google Rating Summary */}
        {placeInfo && (
          <div className="bg-white rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-lg border border-gray-200">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-center">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                <span className="font-semibold text-base sm:text-lg">Pusat Oleh-Oleh Lezat</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <div className="text-center flex-1">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    {renderStars(Math.round(placeInfo.rating))}
                    <span className="ml-2 font-bold text-lg sm:text-xl">{placeInfo.rating}</span>
                  </div>
                  <p className="text-sm text-gray-600">{placeInfo.user_ratings_total} review</p>
                </div>
                
                <a
                  href="https://www.google.com/search?sca_esv=ca19146f6630880d&hl=id&sxsrf=AE3TifMNw5Zv-LfPcsAVUFRCMfAt40NfSw:1759457923741&si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMU9rMM1X2urOrZKtWeV3bgYIvEbSx8sd5qnyqI7Y9dRKAnsQ91-_wCT2vN37GX4EfjoSQx-GSHqdp4CoqJ_gXb5A_bv-X7LReG55hydwC_gRWpKLLw%3D%3D&q=Pusat+Oleh+-+Oleh+Lezat+Ulasan&sa=X&ved=2ahUKEwjFyarE-4aQAxWb1DgGHfeUBoUQ0bkNegQILBAD&biw=1482&bih=787&dpr=1.25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium w-full sm:w-auto"
                >
                  <ExternalLink className="h-4 w-4" />
                  Lihat Review di Google
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              {/* Quote Icon */}
              <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-red-600 mb-3 sm:mb-4 opacity-20" />
              
              {/* Review Content */}
              <div className="mb-3 sm:mb-4">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base line-clamp-4">
                  "{review.text}"
                </p>
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {renderStars(review.rating)}
              </div>
              
              {/* Author Info */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  {review.author_url ? (
                    <a
                      href={review.author_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600 hover:text-blue-800 text-sm sm:text-base transition-colors cursor-pointer flex items-center gap-1 truncate"
                    >
                      <span className="truncate">{review.author_name}</span>
                      <ExternalLink className="h-3 w-3 flex-shrink-0" />
                    </a>
                  ) : (
                    <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                      {review.author_name}
                    </p>
                  )}
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {review.relative_time_description}
                  </p>
                </div>
                
                {/* Google Badge */}
                <div className="flex items-center gap-1 text-xs text-gray-500 flex-shrink-0">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-full"></div>
                  <span className="hidden sm:inline">Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-gray-600 mb-4 text-sm sm:text-base">Puas dengan pelayanan kami?</p>
          <a
            href="https://www.google.com/search?sca_esv=ca19146f6630880d&hl=id&sxsrf=AE3TifMNw5Zv-LfPcsAVUFRCMfAt40NfSw:1759457923741&si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMU9rMM1X2urOrZKtWeV3bgYIvEbSx8sd5qnyqI7Y9dRKAnsQ91-_wCT2vN37GX4EfjoSQx-GSHqdp4CoqJ_gXb5A_bv-X7LReG55hydwC_gRWpKLLw%3D%3D&q=Pusat+Oleh+-+Oleh+Lezat+Ulasan&sa=X&ved=2ahUKEwjFyarE-4aQAxWb1DgGHfeUBoUQ0bkNegQILBAD&biw=1482&bih=787&dpr=1.25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm sm:text-base w-full sm:w-auto max-w-xs mx-auto"
          >
            <Star className="h-4 w-4 sm:h-5 sm:w-5" />
            Tulis Review di Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
