# 🗺️ Google Maps Reviews Integration Guide

## Implementasi Otomatis Google Reviews

Website Anda sekarang sudah dilengkapi dengan komponen `GoogleReviews` yang bisa mengambil review secara otomatis dari Google Maps.

## 🚀 Cara Setup Google Places API

### 1. Dapatkan Google Place ID
```bash
# Cara 1: Menggunakan Google Place ID Finder
https://developers.google.com/maps/documentation/places/web-service/place-id

# Cara 2: Search di Google Maps
1. Buka Google Maps
2. Cari "Pusat Oleh-Oleh Lezat Magelang" 
3. Klik pada lokasi bisnis Anda
4. Copy URL - Place ID ada di parameter 'place_id'
```

### 2. Setup Google Cloud Console
```bash
1. Buka https://console.cloud.google.com/
2. Buat project baru atau pilih project existing
3. Enable "Places API"
4. Buka "Credentials" > "Create Credentials" > "API Key"
5. Restrict API Key ke "Places API" saja (untuk security)
```

### 3. Update Konfigurasi
```typescript
// src/components/GoogleReviews.tsx
const GOOGLE_PLACE_ID = "ChIJXXXXXXXXXXXXXXXXXX"; // Ganti dengan Place ID real
const GOOGLE_API_KEY = "AIzaSyXXXXXXXXXXXXXXXXXX"; // Ganti dengan API Key real
```

## 🔧 Implementasi Backend (Node.js)

### Install Dependencies
```bash
npm install express axios cors dotenv
npm install -D @types/express @types/cors
```

### Environment Variables (.env)
```env
GOOGLE_PLACES_API_KEY=your_google_api_key_here
GOOGLE_PLACE_ID=your_google_place_id_here
```

### Backend Code (server.js)
```javascript
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.get('/api/google-reviews', async (req, res) => {
  try {
    const response = await axios.get(
      'https://maps.googleapis.com/maps/api/place/details/json',
      {
        params: {
          place_id: process.env.GOOGLE_PLACE_ID,
          fields: 'name,rating,user_ratings_total,reviews,url',
          key: process.env.GOOGLE_PLACES_API_KEY,
          language: 'id'
        }
      }
    );

    const reviews = response.data.result.reviews || [];
    const filteredReviews = reviews
      .filter(review => review.rating >= 4)
      .slice(0, 6);

    res.json({
      place_id: process.env.GOOGLE_PLACE_ID,
      name: response.data.result.name,
      rating: response.data.result.rating,
      user_ratings_total: response.data.result.user_ratings_total,
      reviews: filteredReviews,
      url: response.data.result.url
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
```

## 🔄 Update Frontend untuk Real API

```typescript
// src/components/GoogleReviews.tsx - Update fetchGoogleReviews function
const fetchGoogleReviews = async (placeId: string): Promise<GooglePlaceDetails | null> => {
  try {
    const response = await fetch('/api/google-reviews');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return null;
  }
};
```

## 💰 Biaya Google Places API

- **Free Tier**: 1000 requests/bulan gratis
- **Paid**: $17 per 1000 requests setelah free tier
- **Solusi Hemat**: Cache reviews untuk 1-6 jam

## 🛠️ Alternative Solutions

### 1. Third-Party Services (Recommended untuk Production)
```javascript
// Outscrape API (Paid)
const response = await fetch('https://api.outscrape.com/maps/reviews-v3', {
  method: 'GET',
  headers: {
    'X-API-KEY': 'your-outscrape-api-key'
  }
});

// SerpApi (Paid)
const response = await fetch(`https://serpapi.com/search.json?engine=google_maps_reviews&place_id=${placeId}&api_key=${apiKey}`);
```

### 2. Manual Update (Current Implementation)
- Update manual reviews di `GoogleReviews.tsx`
- Copy real reviews dari Google Maps
- Update setiap bulan atau sesuai kebutuhan

### 3. Web Scraping (Not Recommended)
- Melanggar ToS Google
- Tidak reliable
- Bisa diblokir

## ✅ Current Status

Website Anda sudah dilengkapi dengan:
- ✅ Komponen GoogleReviews yang responsive
- ✅ Design yang menarik dengan rating stars
- ✅ Link ke Google Maps untuk review baru
- ✅ Dummy data yang realistis
- ✅ Loading states dan error handling

## 🎯 Next Steps

1. **Immediate**: Gunakan dummy data yang sudah ada (sudah siap!)
2. **Short Term**: Setup Google Places API untuk data real
3. **Long Term**: Implementasi caching dan automated updates

## 📱 Testing

Review component sudah terintegrasi di halaman Home. Test dengan:
```bash
npm run dev
# Buka http://localhost:8080
# Scroll ke section "Review dari Google Maps"
```

## 🔐 Security Notes

- Jangan expose API key di frontend
- Gunakan environment variables
- Restrict API key ke domain Anda saja
- Implementasi rate limiting
