import { useState, useEffect } from "react";
import Header from "@/components/Header";
import BannerSlider from "@/components/BannerSlider";
import ProductCategories from "@/components/ProductCategories";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";
import CartModal, { CartItem } from "@/components/CartModal";
import FloatingCheckoutButton from "@/components/FloatingCheckoutButton";
import UserDataModal from "@/components/UserDataModal";
import { Product } from "@/components/ProductCard";
import { useToast } from "@/hooks/use-toast";
import "@/components/animations.css";

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserDataModalOpen, setIsUserDataModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        toast({
          title: "Produk ditambahkan!",
          description: `${product.name} telah ditambahkan ke keranjang Anda.`,
        });
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast({
          title: "Produk ditambahkan!",
          description: `${product.name} telah ditambahkan ke keranjang Anda.`,
        });
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    toast({
      title: "Produk dihapus",
      description: "Produk telah dihapus dari keranjang Anda.",
    });
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCheckoutClick = () => {
    setIsUserDataModalOpen(true);
  };

  const handleCheckoutComplete = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemCount={getTotalItems()} 
        onCartClick={handleCartClick}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <main>
        {/* Banner Slider Section */}
        <BannerSlider />
        
        {/* Products with Categories Section */}
        <ProductCategories 
          onAddToCart={addToCart} 
          searchQuery={searchQuery}
          cartItems={cartItems}
          onCartClick={handleCartClick}
        />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Gallery Section */}
        <Gallery />
        
        {/* Contact and Location Section */}
        <ContactLocation />
      </main>
      
      <Footer />
      
      {/* Floating Checkout Button */}
      <FloatingCheckoutButton 
        cartItems={cartItems}
        onCheckoutClick={handleCheckoutClick}
        onCartClick={handleCartClick}
      />
      
      {/* Cart Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
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
};

export default Index;
