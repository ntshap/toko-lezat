/**
 * Google Analytics 4 Utilities
 * Track events dan user interactions
 */

// Type definitions
interface GtagConfig {
  page_title?: string;
  page_location?: string;
  page_path?: string;
  send_page_view?: boolean;
}

interface GtagEvent {
  event_category?: string;
  event_label?: string;
  value?: number;
  currency?: string;
  items?: unknown[];
  transaction_id?: string;
  search_term?: string;
  results_count?: number;
  item_list_name?: string;
  item_list_id?: string;
  items_count?: number;
  location?: string;
  description?: string;
  fatal?: boolean;
  context?: string;
  name?: string;
  [key: string]: string | number | boolean | unknown[] | undefined;
}

// Extend Window interface
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: GtagConfig | GtagEvent
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Check if GA is loaded
 */
export const isGALoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

/**
 * Track page view
 */
export const trackPageView = (url: string, title?: string) => {
  if (!isGALoaded()) return;

  window.gtag!('config', 'G-XXXXXXXXXX', {
    page_path: url,
    page_title: title || document.title,
    page_location: window.location.href
  });

  console.log('📊 GA: Page View -', url);
};

/**
 * Track custom event
 */
export const trackEvent = (
  eventName: string,
  params?: GtagEvent
) => {
  if (!isGALoaded()) return;

  window.gtag!('event', eventName, params);

  console.log('📊 GA: Event -', eventName, params);
};

// E-Commerce Events

/**
 * Track product view
 */
export const trackProductView = (product: {
  id: number;
  name: string;
  category: string;
  price: number;
}) => {
  trackEvent('view_item', {
    currency: 'IDR',
    value: product.price,
    items: [
      {
        item_id: product.id.toString(),
        item_name: product.name,
        item_category: product.category,
        price: product.price,
        quantity: 1
      }
    ]
  });
};

/**
 * Track add to cart
 */
export const trackAddToCart = (product: {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
}) => {
  trackEvent('add_to_cart', {
    currency: 'IDR',
    value: product.price * product.quantity,
    items: [
      {
        item_id: product.id.toString(),
        item_name: product.name,
        item_category: product.category,
        price: product.price,
        quantity: product.quantity
      }
    ]
  });
};

/**
 * Track remove from cart
 */
export const trackRemoveFromCart = (product: {
  id: number;
  name: string;
  price: number;
  quantity: number;
}) => {
  trackEvent('remove_from_cart', {
    currency: 'IDR',
    value: product.price * product.quantity,
    items: [
      {
        item_id: product.id.toString(),
        item_name: product.name,
        price: product.price,
        quantity: product.quantity
      }
    ]
  });
};

/**
 * Track begin checkout
 */
export const trackBeginCheckout = (
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>,
  totalValue: number
) => {
  trackEvent('begin_checkout', {
    currency: 'IDR',
    value: totalValue,
    items: items.map(item => ({
      item_id: item.id.toString(),
      item_name: item.name,
      price: item.price,
      quantity: item.quantity
    }))
  });
};

/**
 * Track purchase (WhatsApp checkout)
 */
export const trackPurchase = (
  transactionId: string,
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>,
  totalValue: number
) => {
  trackEvent('purchase', {
    transaction_id: transactionId,
    currency: 'IDR',
    value: totalValue,
    items: items.map(item => ({
      item_id: item.id.toString(),
      item_name: item.name,
      price: item.price,
      quantity: item.quantity
    }))
  });
};

// Search Events

/**
 * Track search
 */
export const trackSearch = (searchTerm: string, resultsCount: number) => {
  trackEvent('search', {
    search_term: searchTerm,
    results_count: resultsCount
  });
};

/**
 * Track category filter
 */
export const trackCategoryFilter = (category: string, productsCount: number) => {
  trackEvent('view_item_list', {
    item_list_name: category,
    item_list_id: category.toLowerCase().replace(/\s+/g, '_'),
    items_count: productsCount
  });
};

// User Interaction Events

/**
 * Track button click
 */
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    event_category: 'engagement',
    event_label: buttonName,
    location: location || window.location.pathname
  });
};

/**
 * Track WhatsApp click
 */
export const trackWhatsAppClick = (context: 'header' | 'footer' | 'checkout' | 'product') => {
  trackEvent('whatsapp_click', {
    event_category: 'contact',
    event_label: context,
    value: 1
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    event_category: 'engagement',
    event_label: `${depth}%`,
    value: depth
  });
};

// Setup scroll tracking
let scrollTracked = {
  '25': false,
  '50': false,
  '75': false,
  '100': false
};

export const setupScrollTracking = () => {
  if (typeof window === 'undefined') return;

  const handleScroll = () => {
    const scrollPercent = Math.round(
      ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
    );

    if (scrollPercent >= 25 && !scrollTracked['25']) {
      trackScrollDepth(25);
      scrollTracked['25'] = true;
    }
    if (scrollPercent >= 50 && !scrollTracked['50']) {
      trackScrollDepth(50);
      scrollTracked['50'] = true;
    }
    if (scrollPercent >= 75 && !scrollTracked['75']) {
      trackScrollDepth(75);
      scrollTracked['75'] = true;
    }
    if (scrollPercent >= 100 && !scrollTracked['100']) {
      trackScrollDepth(100);
      scrollTracked['100'] = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Reset on route change
  return () => {
    window.removeEventListener('scroll', handleScroll);
    scrollTracked = {
      '25': false,
      '50': false,
      '75': false,
      '100': false
    };
  };
};

/**
 * Track error
 */
export const trackError = (error: Error, context?: string) => {
  trackEvent('exception', {
    description: error.message,
    fatal: false,
    context: context || 'unknown'
  });
};

/**
 * Track timing/performance
 */
export const trackTiming = (
  category: string,
  variable: string,
  value: number,
  label?: string
) => {
  trackEvent('timing_complete', {
    event_category: category,
    name: variable,
    value: Math.round(value),
    event_label: label
  });
};
