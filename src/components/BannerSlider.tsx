import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFoodImg from "@/assets/hero-food.jpg";
import heroOlehOlehImg from "@/assets/hero-oleh-oleh.jpg";
import fasadTokoImg from "@/assets/image/Fasat Toko Lezat_alt 3.jpg";

const bannerSlides = [
  {
    id: 1,
    title: "Oleh-Oleh Khas Terbaik",
    subtitle: "Gratis Ongkir Minimal 100rb",
    description: "Temukan berbagai macam oleh-oleh premium dengan rasa autentik",
    image: heroOlehOlehImg,
    ctaText: "Belanja Sekarang"
  },
  {
    id: 2,
    title: "Kacang Premium Ready Stock",
    subtitle: "Kualitas Terjamin & Fresh",
    description: "Nikmati berbagai macam kacang premium dengan harga terbaik",
    image: heroFoodImg,
    ctaText: "Lihat Produk"
  },
  {
    id: 3,
    title: "Toko Lezat Magelang",
    subtitle: "Rasa Tradisional Sejak 1995",
    description: "Produk berkualitas dengan resep turun temurun yang tak terlupakan",
    image: fasadTokoImg,
    ctaText: "Kunjungi Toko"
  }
];

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 8000); // Increased from 6000 to 8000 milliseconds (8 seconds)
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  const handleCTAClick = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-orange-500 to-red-600 overflow-hidden">
      <div className="relative h-80 sm:h-96 md:h-[500px] lg:h-[600px] xl:h-[650px]">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform translate-x-full'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-lg">
                  <div className="text-orange-300 text-xs sm:text-sm font-medium mb-2">
                    {slide.subtitle}
                  </div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2 sm:mb-3 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-white/90 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 leading-relaxed">
                    {slide.description}
                  </p>
                  <Button
                    onClick={handleCTAClick}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
                  >
                    {slide.ctaText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-white w-6' 
                  : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
