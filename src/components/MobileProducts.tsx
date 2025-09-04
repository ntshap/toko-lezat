import { useState } from "react";
import { ArrowLeft, Search, ShoppingBag, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard, { Product } from "@/components/ProductCard";
import { CartItem } from "@/components/CartModal";

interface MobileProductsProps {
  products: Product[];
  cartItems: CartItem[];
  onAddToCart: (product: Product) => void;
  onCartClick: () => void;
}

export default function MobileProducts({ 
  products, 
  cartItems, 
  onAddToCart, 
  onCartClick 
}: MobileProductsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<'name' | 'price'>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = products
    .filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return a.price - b.price;
    });

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Mobile-Only Header */}
      <header className="bg-white shadow-xl border-b-2 border-red-100 sticky top-0 z-50">
        <div className="px-6 py-6">
          {/* Top Navigation */}
          <div className="flex items-center justify-between mb-6">
            <Button 
              onClick={() => window.history.back()}
              variant="outline"
              className="border-2 border-red-200 text-red-600 hover:bg-red-50 px-6 py-3 h-14 rounded-2xl flex-shrink-0 font-semibold text-base"
            >
              <ArrowLeft className="w-5 h-5 mr-3" />
              Kembali
            </Button>
            
            <Button
              variant="outline"
              onClick={onCartClick}
              className="border-2 border-red-200 text-red-600 hover:bg-red-50 relative px-6 py-3 h-14 rounded-2xl flex-shrink-0 font-semibold text-base"
            >
              <ShoppingBag className="w-5 h-5 mr-3" />
              Keranjang
              {totalCartItems > 0 && (
                <span className="absolute -top-3 -right-3 bg-red-600 text-white text-sm rounded-full w-8 h-8 flex items-center justify-center font-black shadow-lg border-2 border-white">
                  {totalCartItems}
                </span>
              )}
            </Button>
          </div>
          
          {/* Title Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-red-900 mb-3 tracking-tight">SEMUA PRODUK</h1>
            <p className="text-red-600 text-lg font-medium">Pusat Oleh-oleh Lezat</p>
            <div className="mt-4 inline-block bg-gradient-to-r from-red-100 to-orange-100 px-6 py-2 rounded-full">
              <span className="text-red-700 font-bold text-sm">✨ {products.length} Produk Tersedia</span>
            </div>
          </div>
          
          {/* Enhanced Search */}
          <div className="relative mb-6">
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-red-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Cari produk favorit Anda..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-5 text-lg border-2 border-red-200 rounded-3xl focus:border-red-500 focus:outline-none bg-red-50/50 focus:bg-white transition-all duration-300 shadow-sm font-medium"
            />
          </div>
          
          {/* Enhanced Filters */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-5 rounded-3xl shadow-sm border border-red-100">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <div className="flex border-2 border-red-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <Button
                    onClick={() => setViewMode('grid')}
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    className={`px-6 py-4 h-auto rounded-none font-semibold ${viewMode === 'grid' ? 'bg-red-600 text-white shadow-sm' : 'text-red-600 hover:bg-red-50'}`}
                  >
                    <Grid className="w-5 h-5 mr-3" />
                    Grid
                  </Button>
                  <Button
                    onClick={() => setViewMode('list')}
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    className={`px-6 py-4 h-auto rounded-none font-semibold ${viewMode === 'list' ? 'bg-red-600 text-white shadow-sm' : 'text-red-600 hover:bg-red-50'}`}
                  >
                    <List className="w-5 h-5 mr-3" />
                    List
                  </Button>
                </div>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'price')}
                  className="px-6 py-4 text-base border-2 border-red-200 rounded-2xl focus:border-red-500 focus:outline-none text-red-600 bg-white font-semibold shadow-sm min-w-[130px]"
                >
                  <option value="name">Nama A-Z</option>
                  <option value="price">Harga</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Content */}
      <main className="px-6 py-8">
        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-6 bg-white rounded-2xl p-5 shadow-lg border border-red-100">
            <h2 className="text-lg font-bold text-red-900 mb-1">
              Hasil Pencarian: "{searchQuery}"
            </h2>
            <p className="text-red-600">
              Ditemukan {filteredProducts.length} dari {products.length} produk
            </p>
          </div>
        )}

        {/* Products Grid - Mobile Optimized */}
        {filteredProducts.length > 0 ? (
          <div className={`gap-6 ${viewMode === 'grid' ? 'grid grid-cols-1' : 'flex flex-col space-y-6'}`}>
            {filteredProducts.map((product) => (
              <div key={product.id} className="transform transition-all duration-300">
                <ProductCard 
                  product={product} 
                  onAddToCart={onAddToCart} 
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Produk Tidak Ditemukan</h3>
            <p className="text-gray-600 mb-6">Coba kata kunci yang berbeda atau hapus filter</p>
            <Button 
              onClick={() => setSearchQuery("")}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-2xl font-semibold"
            >
              Reset Pencarian
            </Button>
          </div>
        )}

        {/* Mobile Bottom Spacing for Floating Button */}
        <div className="h-32"></div>
      </main>
    </div>
  );
}
