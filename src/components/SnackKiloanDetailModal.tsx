import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { SnackKiloanProduct, SnackKiloanCartItem } from "./SnackKiloanCard";

interface SnackKiloanDetailModalProps {
  product: SnackKiloanProduct | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: SnackKiloanCartItem) => void;
}

export default function SnackKiloanDetailModal({ 
  product, 
  isOpen, 
  onClose, 
  onAddToCart 
}: SnackKiloanDetailModalProps) {
  const [selectedWeight, setSelectedWeight] = useState(product?.weightOptions[0] || { weight: 0.25, price: 0, label: "1/4 kg" });
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

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
    setQuantity(1);
    onClose();
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">
            Detail Produk
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg shadow-lg object-cover aspect-square"
            />
            {/* Snack Kiloan Badge */}
            <div className="absolute top-3 left-3 bg-orange-500 text-white text-sm px-3 py-1.5 rounded-full font-bold shadow-md">
              Kiloan
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {product.name}
              </h2>
              
              <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {product.category}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Weight Options */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Pilih Berat
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {product.weightOptions.map((option) => (
                    <button
                      key={option.weight}
                      onClick={() => setSelectedWeight(option)}
                      className={`px-3 py-3 rounded-lg text-sm font-bold transition-all duration-200 ${
                        selectedWeight.weight === option.weight
                          ? 'bg-orange-500 text-white shadow-lg scale-105 ring-2 ring-orange-300'
                          : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700'
                      }`}
                    >
                      <div className="font-bold">{option.label}</div>
                      <div className="text-xs mt-1">
                        Rp {option.price.toLocaleString('id-ID')}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Price */}
              <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-100">
                <div className="text-sm text-gray-600 mb-1">Harga {selectedWeight.label}:</div>
                <span className="text-3xl font-bold text-red-600">
                  Rp {selectedWeight.price.toLocaleString('id-ID')}
                </span>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Jumlah
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={decrementQuantity}
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-5 h-5 text-gray-700" />
                  </button>
                  <span className="text-2xl font-bold text-gray-900 min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Total Price */}
              {quantity > 1 && (
                <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-green-800">Total ({quantity} item):</span>
                    <span className="text-xl font-bold text-green-700">
                      Rp {totalPrice.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={onClose}
                variant="outline"
                className="flex-1 h-12"
              >
                Tutup
              </Button>
              <Button
                onClick={handleAddToCart}
                className="flex-1 h-12 bg-orange-500 hover:bg-orange-600 text-white font-bold"
              >
                <Plus className="w-5 h-5 mr-2" />
                Tambah ke Keranjang
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
