import { useState } from "react";
import { Plus, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartModal, { CartItem } from "@/components/CartModal";
import FloatingCheckoutButton from "@/components/FloatingCheckoutButton";
import UserDataModal from "@/components/UserDataModal";
import { useToast } from "@/hooks/use-toast";
import SnackKiloanCard, { SnackKiloanProduct, SnackKiloanCartItem } from "@/components/SnackKiloanCard";
import bakpiaImg from "@/assets/image/Bakpia Pathok 88.png";
import cripingTeloImg from "@/assets/image/Criping Telo.png";
import getukEcoImg from "@/assets/image/Getuk Eco.png";
import grubiImg from "@/assets/image/Grubi.png";
import gulakacangImg from "@/assets/image/Gulakacang.png";
import gulakacang2Img from "@/assets/image/Gulakacang-2.png";
import slondokImg from "@/assets/image/Slondok.png";
import tapeKetanImg from "@/assets/image/Tape Ketan.png";
import wajikWeekImg from "@/assets/image/Wajik Week.png";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Bakpia Pathok 88",
    price: 30000,
    image: bakpiaImg,
    description: "Bakpia khas Yogyakarta dengan isian kacang hijau yang lembut dan kulit yang renyah",
    category: "Kue Basah"
  },
  {
    id: 2,
    name: "Criping Telo",
    price: 30000,
    image: cripingTeloImg,
    description: "Keripik singkong renyah dengan bumbu tradisional yang gurih",
    category: "Kripik dan Snack Ringan"
  },
  {
    id: 3,
    name: "Getuk Eco",
    price: 30000,
    image: getukEcoImg,
    description: "Getuk tradisional dengan tekstur lembut dan rasa manis alami",
    category: "Kue Basah"
  },
  {
    id: 4,
    name: "Grubi",
    price: 30000,
    image: grubiImg,
    description: "Camilan tradisional khas Jawa dengan tekstur renyah dan rasa gurih yang unik",
    category: "Kripik dan Snack Ringan"
  },
  {
    id: 5,
    name: "Gula Kacang Premium",
    price: 30000,
    image: gulakacangImg,
    description: "Gula kacang tradisional dengan rasa manis gurih yang pas, dibuat dari kacang tanah pilihan berkualitas tinggi",
    category: "Kacang-kacangan"
  },
  {
    id: 6,
    name: "Gula Kacang Spesial",
    price: 30000,
    image: gulakacang2Img,
    description: "Varian spesial gula kacang dengan tekstur yang lebih halus dan rasa yang lebih kaya",
    category: "Kacang-kacangan"
  },
  {
    id: 7,
    name: "Slondok",
    price: 30000,
    image: slondokImg,
    description: "Jajanan tradisional khas Jawa dengan tekstur kenyal dan rasa manis yang autentik",
    category: "Lain-lain"
  },
  {
    id: 8,
    name: "Tape Ketan",
    price: 30000,
    image: tapeKetanImg,
    description: "Tape ketan manis dengan fermentasi alami yang menghasilkan rasa asam manis yang segar dan unik",
    category: "Kue Basah"
  },
  {
    id: 9,
    name: "Wajik Week",
    price: 30000,
    image: wajikWeekImg,
    description: "Wajik tradisional dengan tekstur kenyal dan rasa manis dari gula kelapa asli yang autentik",
    category: "Kue Basah"
  }
];

const snackKiloanProducts: SnackKiloanProduct[] = [
  {
    id: 'sk1',
    name: 'Keripik Singkong Aneka Rasa',
    image: cripingTeloImg,
    description: 'Keripik singkong renyah dengan berbagai pilihan rasa, cocok untuk cemilan keluarga',
    category: 'Snack Kiloan',
    weightOptions: [
      { weight: 1, price: 35000, label: '1 kg' },
      { weight: 2, price: 65000, label: '2 kg' },
      { weight: 4, price: 120000, label: '4 kg' }
    ]
  },
  {
    id: 'sk2',
    name: 'Keripik Pisang Original',
    image: slondokImg,
    description: 'Keripik pisang original yang manis dan renyah, dibuat dari pisang pilihan',
    category: 'Snack Kiloan',
    weightOptions: [
      { weight: 1, price: 40000, label: '1 kg' },
      { weight: 2, price: 75000, label: '2 kg' },
      { weight: 4, price: 140000, label: '4 kg' }
    ]
  },
  {
    id: 'sk3',
    name: 'Mix Nuts Premium',
    image: gulakacangImg,
    description: 'Campuran kacang-kacangan premium yang gurih dan bergizi tinggi',
    category: 'Snack Kiloan',
    weightOptions: [
      { weight: 1, price: 55000, label: '1 kg' },
      { weight: 2, price: 105000, label: '2 kg' },
      { weight: 4, price: 200000, label: '4 kg' }
    ]
  }
];

const categories = ["Semua", "Kripik dan Snack Ringan", "Kue Kering", "Permen & Manisan", "Kue Basah", "Kacang-kacangan", "Snack Kiloan", "Minuman", "Lain-lain"];

interface ProductsPageProps {
  onAddToCart?: (product: Product) => void;
}

export default function ProductsPage({ onAddToCart }: ProductsPageProps) {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserDataModalOpen, setIsUserDataModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "Semua" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredSnackKiloanProducts = snackKiloanProducts.filter(product => {
    const matchesCategory = selectedCategory === "Semua" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });

    if (onAddToCart) {
      onAddToCart(product);
    }

    toast({
      title: "Produk ditambahkan!",
      description: `${product.name} telah ditambahkan ke keranjang`,
    });
  };

  const addSnackKiloanToCart = (item: SnackKiloanCartItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => 
        cartItem.id === item.id && 
        (cartItem as any).weight === item.weight
      );
      
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id && (cartItem as any).weight === item.weight
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      
      // Find the original product to get description
      const originalProduct = snackKiloanProducts.find(p => p.id === item.id);
      const cartItem: CartItem = {
        ...item,
        description: originalProduct?.description || '',
        id: typeof item.id === 'string' ? parseInt((item.id as string).replace('sk', '')) + 1000 : item.id as number
      };
      
      return [...prevItems, cartItem];
    });

    toast({
      title: "Produk ditambahkan!",
      description: `${item.name} (${item.weight}kg) telah ditambahkan ke keranjang`,
    });
  };

  const updateCartItemQuantity = (id: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.id !== id)
    );
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const handleCheckout = () => {
    setIsUserDataModalOpen(true);
  };

  const handleCheckoutComplete = () => {
    setCartItems([]);
    setIsUserDataModalOpen(false);
    toast({
      title: "Pesanan berhasil!",
      description: "Terima kasih atas pesanan Anda. Kami akan segera menghubungi Anda.",
    });
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemCount={totalItems} 
        onCartClick={openCart}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Katalog Produk</h1>
        </div>

        {/* Category Filter - Rounded full design like Home page */}
        <div className="flex overflow-x-auto gap-2 mb-6 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${
                selectedCategory === category 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-20">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-amber-700 rounded-xl p-3 shadow-lg border border-amber-600 relative">
                {/* Product Image */}
                <div className="aspect-square bg-amber-600 rounded-lg mb-2 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Add Button */}
                  <div className="absolute bottom-2 right-2">
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-8 h-8 bg-white hover:bg-gray-100 text-red-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    >
                      <Plus className="h-4 w-4 font-bold" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-1">
                  <h3 className="font-bold text-white text-sm leading-tight">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">
                      Rp {product.price.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Snack Kiloan Products */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSnackKiloanProducts.map((product) => (
            <SnackKiloanCard
              key={product.id}
              product={product}
              onAddToCart={addSnackKiloanToCart}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && filteredSnackKiloanProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Tidak ada produk yang ditemukan.</p>
          </div>
        )}
      </main>

      <Footer />

      {/* Floating Checkout Button */}
      {totalItems > 0 && (
        <FloatingCheckoutButton 
          cartItems={cartItems}
          onCheckoutClick={handleCheckout}
          onCartClick={openCart}
        />
      )}

      {/* Cart Modal */}
      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateCartItemQuantity}
        onRemoveItem={removeFromCart}
      />

      {/* User Data Modal */}
      <UserDataModal 
        isOpen={isUserDataModalOpen}
        onClose={() => setIsUserDataModalOpen(false)}
        cartItems={cartItems}
        onCheckoutComplete={handleCheckoutComplete}
      />
    </div>
  );
}
