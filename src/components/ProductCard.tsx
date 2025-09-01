import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Plus } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="overflow-hidden shadow-card hover:shadow-card transition-smooth hover:-translate-y-1 border-0 bg-card">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-smooth hover:scale-105"
        />
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-card-foreground mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>
        <p className="text-xl font-bold text-primary">
          {formatPrice(product.price)}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          variant="default" 
          onClick={() => onAddToCart(product)}
          className="w-full flex items-center justify-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          <span className="whitespace-nowrap">Tambah ke Keranjang</span>
        </Button>
      </CardFooter>
    </Card>
  );
}