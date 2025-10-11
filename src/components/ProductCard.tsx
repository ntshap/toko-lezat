import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Plus, Minus } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category?: string;
  weight?: string; // Berat produk (misal: "240 g", "235 g")
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  currentQuantity?: number;
}

export default function ProductCard({ product, onAddToCart, currentQuantity = 0 }: ProductCardProps) {
  // Use currentQuantity from props instead of local state
  const quantity = currentQuantity;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product, 1); // Add 1 to cart
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (quantity > 0) {
      onAddToCart(product, -1); // Remove 1 from cart
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product, 1);
  };

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white rounded-2xl sm:rounded-xl group relative">
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
        />
        {product.weight && (
          <div className="absolute top-2 right-2 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-md shadow-md">
            <span className="text-xs font-bold text-gray-800">
              {product.weight}
            </span>
          </div>
        )}
      </div>
      
      <CardContent className="p-4 sm:p-4">
        <h3 className="text-lg sm:text-lg font-bold text-gray-900 mb-2 sm:mb-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-sm sm:text-sm text-gray-600 mb-3 sm:mb-3 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between mb-4">
          <p className="text-xl sm:text-xl font-black text-red-600">
            {formatPrice(product.price)}
          </p>
          <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
            ✓ Ready
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 sm:p-4 pt-0">
        {quantity === 0 ? (
          <Button 
            type="button"
            variant="default" 
            onClick={handleAddToCart}
            className="w-full h-12 sm:h-10 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl sm:rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-base sm:text-sm"
          >
            <Plus className="w-5 h-5 mr-2" />
            <span className="whitespace-nowrap">Tambah ke Keranjang</span>
          </Button>
        ) : (
          <div className="w-full flex items-center justify-center bg-red-600 rounded-xl sm:rounded-lg h-12 sm:h-10">
            <button
              type="button"
              onClick={handleDecrement}
              className="flex items-center justify-center w-10 h-full text-white hover:bg-red-700 rounded-l-xl transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <div className="flex-1 flex items-center justify-center text-white font-bold text-base">
              {quantity}
            </div>
            <button
              type="button"
              onClick={handleIncrement}
              className="flex items-center justify-center w-10 h-full text-white hover:bg-red-700 rounded-r-xl transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}