import React from 'react';

/**
 * Handle image load errors by providing a fallback
 */
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const target = e.target as HTMLImageElement;
  // Use a data URL for a simple gray placeholder
  target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="16" fill="%236b7280"%3EGambar tidak tersedia%3C/text%3E%3C/svg%3E';
  target.alt = 'Gambar produk tidak tersedia';
};

/**
 * Format price to Indonesian Rupiah format
 */
export const formatPrice = (price: number): string => {
  if (typeof price !== 'number' || isNaN(price)) {
    console.error('Invalid price:', price);
    return 'Rp 0';
  }
  return `Rp ${price.toLocaleString('id-ID')}`;
};

/**
 * Validate and sanitize quantity input
 */
export const validateQuantity = (quantity: number): number => {
  const qty = parseInt(quantity.toString(), 10);
  if (isNaN(qty) || qty < 1) return 1;
  if (qty > 999) return 999; // Max limit
  return qty;
};

/**
 * Sanitize user input to prevent XSS
 */
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .trim();
};

/**
 * Validate stock availability
 */
export const validateStock = (stock: number | undefined): number => {
  if (typeof stock !== 'number' || isNaN(stock) || stock < 0) {
    return 0;
  }
  return stock;
};

/**
 * Format weight display
 */
export const formatWeight = (weight: string | undefined): string => {
  if (!weight || weight.trim() === '') {
    return '-';
  }
  return weight;
};

/**
 * Generate WhatsApp message for order
 */
export const generateWhatsAppMessage = (
  items: Array<{ name: string; quantity: number; price: number }>,
  total: number,
  userData?: { name: string; phone: string; address: string }
): string => {
  let message = '🛒 *PESANAN BARU - TOKO LEZAT*\n\n';
  
  if (userData) {
    message += `📝 *Data Pemesan:*\n`;
    message += `Nama: ${sanitizeInput(userData.name)}\n`;
    message += `Telepon: ${sanitizeInput(userData.phone)}\n`;
    message += `Alamat: ${sanitizeInput(userData.address)}\n\n`;
  }
  
  message += `📦 *Detail Pesanan:*\n`;
  message += `${'─'.repeat(40)}\n`;
  
  items.forEach((item, index) => {
    message += `${index + 1}. ${item.name}\n`;
    message += `   ${item.quantity}x @ ${formatPrice(item.price)}\n`;
    message += `   Subtotal: ${formatPrice(item.quantity * item.price)}\n\n`;
  });
  
  message += `${'─'.repeat(40)}\n`;
  message += `💰 *Total: ${formatPrice(total)}*\n\n`;
  message += `Terima kasih! 🙏`;
  
  return encodeURIComponent(message);
};

/**
 * Debounce function for search input
 */
export const debounce = <T extends (...args: never[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Check if device is mobile
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

/**
 * Scroll to top smoothly
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number format (Indonesian)
 */
export const isValidPhone = (phone: string): boolean => {
  // Remove all non-digit characters
  const cleanPhone = phone.replace(/\D/g, '');
  // Check if it's a valid Indonesian phone number (8-13 digits)
  return /^(08|628|\+628)[0-9]{8,11}$/.test(cleanPhone);
};
