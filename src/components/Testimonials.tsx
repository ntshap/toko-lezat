import { Star, Quote, User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    location: "Jakarta",
    rating: 5,
    comment: "Bakpia Pathok 88 nya enak banget! Rasanya autentik seperti langsung dari Yogya. Pelayanan juga ramah dan pengiriman cepat.",
    date: "2 minggu yang lalu"
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    location: "Bandung", 
    rating: 5,
    comment: "Gula kacangnya premium banget, kacangnya besar-besar dan gurih. Sudah langganan di sini karena kualitasnya konsisten.",
    date: "1 bulan yang lalu"
  },
  {
    id: 3,
    name: "Ahmad Fauzi",
    location: "Surabaya",
    rating: 5,
    comment: "Getuk Eco-nya lembut dan manis pas. Packaging-nya juga rapi, cocok buat oleh-oleh keluarga. Recommended!",
    date: "3 minggu yang lalu"
  },
  {
    id: 4,
    name: "Maya Puspita",
    location: "Medan",
    rating: 5,
    comment: "Pelayanan customer service sangat baik, respon cepat. Produknya fresh dan sesuai deskripsi. Puas belanja di sini!",
    date: "1 minggu yang lalu"
  }
];

export default function Testimonials() {
  return (
    <section className="py-8 sm:py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Review Pembeli
          </h2>
        </div>
          
          {/* Overall Rating Display */}
        
        {/* Testimonials Grid - White background cards with shadow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
            >
              {/* Rating */}
              <div className="flex items-center mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="h-5 w-5 fill-yellow-400 text-yellow-400" 
                  />
                ))}
              </div>
              
              {/* Customer Name - Dark text */}
              <h4 className="text-gray-900 font-bold text-lg mb-3">{testimonial.name}</h4>
              
              {/* Comment - Dark gray text */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {testimonial.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
