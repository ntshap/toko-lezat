import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Heart, Trophy, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Enhanced Aesthetic Batik Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffd700' fill-opacity='0.12'%3E%3Ccircle cx='30' cy='30' r='4' stroke='%23ffd700' stroke-width='1' stroke-opacity='0.1'/%3E%3Ccircle cx='90' cy='30' r='4' stroke='%23ffd700' stroke-width='1' stroke-opacity='0.1'/%3E%3Ccircle cx='60' cy='60' r='5' stroke='%23ffd700' stroke-width='1.5' stroke-opacity='0.15'/%3E%3Ccircle cx='30' cy='90' r='4' stroke='%23ffd700' stroke-width='1' stroke-opacity='0.1'/%3E%3Ccircle cx='90' cy='90' r='4' stroke='%23ffd700' stroke-width='1' stroke-opacity='0.1'/%3E%3Cpath d='M30 30 Q60 35 90 30' stroke='%23ffd700' stroke-width='1.5' fill='none' opacity='0.3'/%3E%3Cpath d='M30 90 Q60 85 90 90' stroke='%23ffd700' stroke-width='1.5' fill='none' opacity='0.3'/%3E%3Ccircle cx='45' cy='45' r='2' fill='%23ffd700' fill-opacity='0.1'/%3E%3Ccircle cx='75' cy='75' r='2' fill='%23ffd700' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
      
      {/* Enhanced Corner Elements */}
      <div className="absolute top-4 left-4 w-12 h-12 opacity-20">
        <svg viewBox="0 0 32 32" className="w-full h-full">
          <g fill="#ffd700" fillOpacity="0.4">
            <circle cx="16" cy="16" r="10" fill="none" stroke="#ffd700" strokeWidth="1.5" opacity="0.6"/>
            <circle cx="16" cy="16" r="5" fill="#ffd700" opacity="0.7"/>
            <circle cx="8" cy="8" r="2" fill="#ffd700" opacity="0.5"/>
            <circle cx="24" cy="24" r="2" fill="#ffd700" opacity="0.5"/>
          </g>
        </svg>
      </div>
      
      <div className="absolute top-4 right-4 w-12 h-12 opacity-20">
        <svg viewBox="0 0 32 32" className="w-full h-full">
          <g fill="#ffd700" fillOpacity="0.4">
            <circle cx="16" cy="16" r="10" fill="none" stroke="#ffd700" strokeWidth="1.5" opacity="0.6"/>
            <circle cx="16" cy="16" r="5" fill="#ffd700" opacity="0.7"/>
            <circle cx="8" cy="8" r="2" fill="#ffd700" opacity="0.5"/>
            <circle cx="24" cy="24" r="2" fill="#ffd700" opacity="0.5"/>
          </g>
        </svg>
      </div>
      
      {/* Additional Floating Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-10 h-10 opacity-20">
        <svg viewBox="0 0 40 40" className="w-full h-full fill-yellow-500">
          <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
          <circle cx="20" cy="20" r="6" fill="currentColor" opacity="0.6"/>
          <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.4"/>
          <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.4"/>
          <path d="M10 10 Q20 15 30 30" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-black text-xl relative">
                L
                {/* Minimalist decoration for logo */}
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 opacity-20">
                  <svg viewBox="0 0 10 10" className="w-full h-full fill-yellow-400">
                    <circle cx="5" cy="5" r="2" fill="currentColor" opacity="0.6"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black leading-tight">
                  PUSAT OLEH-OLEH
                </h3>
                <p className="text-red-500 font-bold">LEZAT</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Menyediakan jajanan khas Magelang dengan kualitas terbaik sejak 1995. 
              Resep turun temurun yang tetap terjaga keasliannya.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" className="bg-red-600 hover:bg-red-700 text-white">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" className="bg-red-600 hover:bg-red-700 text-white">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" className="bg-red-600 hover:bg-red-700 text-white">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-red-500">NAVIGASI</h4>
            <ul className="space-y-3">
              {['Beranda', 'Produk', 'Tentang Kami', 'Kontak', 'FAQ', 'Kebijakan Privasi'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-red-500">PRODUK UNGGULAN</h4>
            <ul className="space-y-3">
              {[
                'Kacang Campur Premium',
                'Keripik Singkong',
                'Emping Melinjo',
                'Dodol Magelang',
                'Manisan Buah',
                'Kacang Tanah Sangrai'
              ].map((product) => (
                <li key={product}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-red-500">HUBUNGI KAMI</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold">Alamat:</p>
                  <p className="text-gray-300">Jl. Ikhlas Blok D1 No.1, Magelang, Jawa Tengah</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold">Telepon:</p>
                  <p className="text-gray-300">(0293) 313131</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold">Email:</p>
                  <p className="text-gray-300">info@pusatoleh-olehlezat.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold">Jam Buka:</p>
                  <p className="text-gray-300">Senin - Minggu: 08.00 - 20.00 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0 flex items-center justify-center md:justify-start gap-1">
            © 2025 Pusat Oleh-Oleh Lezat. All rights reserved. Made with <Heart className="w-4 h-4 text-red-500" /> in Magelang.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1"><Trophy className="w-4 h-4 text-yellow-500" /> Terpercaya sejak 1995</span>
            <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500" /> Rating 4.9/5</span>
            <span className="flex items-center gap-1"><Truck className="w-4 h-4 text-green-500" /> Gratis ongkir</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
