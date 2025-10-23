import { useState } from "react";
import { ArrowLeft, Filter, Grid, List, Star, Heart, Eye, Search, ShoppingBag, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard, { Product } from "@/components/ProductCard";
import { CartItem } from "@/components/CartModal";

interface DesktopProductsProps {
  products: Product[];
  cartItems: CartItem[];
  onAddToCart: (product: Product, quantity: number) => void;
  onCartClick: () => void;
}

export default function DesktopProducts({ 
  products, 
  cartItems, 
  onAddToCart, 
  onCartClick 
}: DesktopProductsProps) {
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Desktop Header */}
      <header className="bg-white shadow-lg border-b border-red-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => window.history.back()}
                variant="outline"
                size="sm"
                className="border-red-200 text-red-600 hover:bg-red-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali
              </Button>
              <div>
                <h1 className="text-2xl font-black text-red-900">SEMUA PRODUK</h1>
                <p className="text-red-600 text-sm font-medium">Pusat Oleh-oleh Lezat</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                onClick={onCartClick}
                variant="outline"
                className="border-red-200 text-red-600 hover:bg-red-50 relative"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Keranjang ({totalCartItems})
                {totalCartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {totalCartItems}
                  </span>
                )}
              </Button>
              
              <div className="flex gap-2">
                <Button
                  onClick={() => setViewMode('grid')}
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  className={viewMode === 'grid' ? 'bg-red-600 text-white' : 'text-red-600'}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => setViewMode('list')}
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  className={viewMode === 'list' ? 'bg-red-600 text-white' : 'text-red-600'}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Cari produk..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 text-sm border border-red-200 rounded-lg focus:border-red-400 focus:outline-none w-64"
                  />
                </div>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'price')}
                  className="px-3 py-2 text-sm border border-red-200 rounded-lg focus:border-red-400 focus:outline-none text-red-600"
                >
                  <option value="name">Urutkan: Nama</option>
                  <option value="price">Urutkan: Harga</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-red-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-red-900">
                  {searchQuery ? `Hasil Pencarian: "${searchQuery}"` : 'Semua Produk'}
                </h2>
                <p className="text-sm text-red-600">
                  Menampilkan {filteredProducts.length} dari {products.length} produk
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-red-900">{filteredProducts.length}</div>
                <div className="text-sm text-red-600">Produk Tersedia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length > 0 ? (
          <div className={`gap-6 ${
            viewMode === 'grid' 
              ? 'grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'flex flex-col space-y-4'
          }`}>
            {filteredProducts.map((product) => {
              if (viewMode === 'list') {
                return (
                  <div key={product.id} className="bg-white rounded-xl shadow-lg border border-red-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="flex">
                      <div className="w-48 h-32 flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-red-900 mb-2">{product.name}</h3>
                            <p className="text-red-700 text-sm leading-relaxed">{product.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-black text-red-900">Rp {product.price.toLocaleString()}</div>
                            <div className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded-full mt-1 inline-block">
                              ✓ Ready
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          {(() => {
                            const cartItem = cartItems?.find(item => item.id === product.id);
                            const currentQuantity = cartItem ? cartItem.quantity : 0;
                            
                            if (currentQuantity === 0) {
                              return (
                                <Button 
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    onAddToCart(product, 1);
                                  }}
                                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm py-2 transition-all duration-300 transform hover:scale-105 rounded-lg"
                                >
                                  <Plus className="h-4 w-4 mr-1" />
                                  Tambah ke Keranjang
                                </Button>
                              );
                            } else {
                              return (
                                <div className="w-full bg-white rounded border border-red-200 flex items-center justify-center">
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      onAddToCart(product, -1);
                                    }}
                                    className="w-10 h-10 text-red-600 hover:bg-gray-100 flex items-center justify-center transition-colors"
                                  >
                                    <Minus className="h-4 w-4" />
                                  </button>
                                  <span className="px-4 text-sm font-bold text-red-600 min-w-[40px] text-center">
                                    {currentQuantity}
                                  </span>
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      onAddToCart(product, 1);
                                    }}
                                    className="w-10 h-10 text-red-600 hover:bg-gray-100 flex items-center justify-center transition-colors"
                                  >
                                    <Plus className="h-4 w-4" />
                                  </button>
                                </div>
                              );
                            }
                          })()}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              
              return (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={onAddToCart} 
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
              <Search className="w-10 h-10 text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Produk Tidak Ditemukan</h3>
            <p className="text-gray-600 mb-6">Coba kata kunci yang berbeda atau hapus filter</p>
            <Button 
              onClick={() => setSearchQuery("")}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg"
            >
              Reset Pencarian
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
