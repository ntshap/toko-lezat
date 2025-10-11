import { useState } from "react";
import { Plus } from "lucide-react";

export interface SnackKiloanProduct {
  id: number;
  name: string;
  basePrice: number; // harga per kg
  image: string;
  description: string;
  category: "Snack Kiloan";
  weightOptions: {
    weight: number; // dalam kg
    price: number;
    label: string;
  }[];
}

export interface SnackKiloanCartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  weightKg: number; // berat dalam kg
  quantity: number;
  category: "Snack Kiloan";
  description: string;
}

interface SnackKiloanCardProps {
  product: SnackKiloanProduct;
  onAddToCart: (item: SnackKiloanCartItem) => void;
}

export default function SnackKiloanCard({ product, onAddToCart }: SnackKiloanCardProps) {
  const [selectedWeight, setSelectedWeight] = useState(product.weightOptions[0]);
  const [quantity, setQuantity] = useState(1);

  const totalPrice = selectedWeight.price * quantity;

  const handleAddToCart = () => {
    const cartItem: SnackKiloanCartItem = {
      id: product.id,
      name: `${product.name} (${selectedWeight.label})`,
      price: selectedWeight.price,
      image: product.image,
      weightKg: selectedWeight.weight,
      quantity: quantity,
      category: "Snack Kiloan",
      description: product.description
    };
    onAddToCart(cartItem);
    setQuantity(1); // Reset quantity after adding to cart
  };

  return (
    <div className="bg-amber-700 rounded-xl p-3 sm:p-4 shadow-lg border border-amber-600 relative">
      {/* Product Image */}
      <div className="aspect-square bg-amber-600 rounded-lg mb-3 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Snack Kiloan Badge */}
        <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
          Kiloan
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <h3 className="font-bold text-white text-sm sm:text-base leading-tight">
          {product.name}
        </h3>
        
        {/* Weight Options */}
        <div className="space-y-2">
          <label className="text-white text-xs sm:text-sm font-medium block">Pilih Berat:</label>
          <select 
            value={selectedWeight.weight}
            onChange={(e) => {
              const weight = Number(e.target.value);
              const option = product.weightOptions.find(opt => opt.weight === weight);
              if (option) setSelectedWeight(option);
            }}
            className="w-full px-3 py-2 text-sm rounded-lg bg-white text-gray-800 border-0 focus:ring-2 focus:ring-orange-500"
          >
            {product.weightOptions.map((option) => (
              <option key={option.weight} value={option.weight}>
                {option.label} - Rp {option.price.toLocaleString('id-ID')}
              </option>
            ))}
          </select>
        </div>

        {/* Quantity Selector */}
        <div className="space-y-2">
          <label className="text-white text-xs sm:text-sm font-medium block">Jumlah:</label>
          <div className="flex items-center justify-center space-x-3">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 bg-white text-amber-700 rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              -
            </button>
            <span className="text-white text-lg font-bold min-w-[24px] text-center">
              {quantity}
            </span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 bg-white text-amber-700 rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Total Price */}
        <div className="text-center py-2 bg-white/10 rounded-lg">
          <div className="text-xs sm:text-sm text-white/80">Total:</div>
          <div className="text-lg sm:text-xl font-bold text-white">
            Rp {totalPrice.toLocaleString('id-ID')}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button 
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleAddToCart();
          }}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base font-bold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
        >
          <Plus className="w-4 h-4" />
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
}
