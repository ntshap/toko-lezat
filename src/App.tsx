import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Products from "./pages/Products";
import LocationPage from "./pages/Location";
import NotFound from "./pages/NotFound";
import { CartItem } from "@/components/CartModal";

const queryClient = new QueryClient();

const CART_STORAGE_KEY = "toko-lezat-cart";

const App = () => {
  // Initialize cart state from localStorage or empty array
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
      return [];
    }
  });

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cartItems]);

  // Cart handler functions
  const handleAddToCart = (product: any, quantityChange: number = 1) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      const newQuantity = existingItem.quantity + quantityChange;
      if (newQuantity <= 0) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== product.id));
      } else {
        setCartItems(prevItems =>
          prevItems.map(item =>
            item.id === product.id
              ? { ...item, quantity: newQuantity }
              : item
          )
        );
      }
    } else if (quantityChange > 0) {
      const newCartItem: CartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description || "",
        quantity: quantityChange
      };
      setCartItems(prevItems => [...prevItems, newCartItem]);
    }
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(id);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  cartItems={cartItems}
                  onAddToCart={handleAddToCart}
                  onRemoveFromCart={handleRemoveFromCart}
                  onUpdateQuantity={handleUpdateQuantity}
                  onClearCart={handleClearCart}
                />
              } 
            />
            <Route 
              path="/products" 
              element={
                <Products 
                  cartItems={cartItems}
                  onAddToCart={handleAddToCart}
                  onRemoveFromCart={handleRemoveFromCart}
                  onUpdateQuantity={handleUpdateQuantity}
                  onClearCart={handleClearCart}
                />
              } 
            />
            <Route path="/location" element={<LocationPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
