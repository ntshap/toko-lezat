// API endpoint untuk mengambil Google Reviews
// File ini untuk implementasi backend (Node.js/Express)

import express from 'express';
import axios from 'axios';

const router = express.Router();

// Konfigurasi Google Places API
const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID; // Place ID toko Anda

interface GoogleReviewResponse {
  result: {
    name: string;
    rating: number;
    user_ratings_total: number;
    reviews: Array<{
      author_name: string;
      author_url?: string;
      language?: string;
      profile_photo_url?: string;
      rating: number;
      relative_time_description: string;
      text: string;
      time: number;
    }>;
    url: string;
  };
  status: string;
}

// Endpoint untuk mengambil Google Reviews
router.get('/google-reviews', async (req, res) => {
  try {
    if (!GOOGLE_API_KEY || !PLACE_ID) {
      return res.status(500).json({
        error: 'Google API configuration missing'
      });
    }

    const response = await axios.get<GoogleReviewResponse>(
      `https://maps.googleapis.com/maps/api/place/details/json`,
      {
        params: {
          place_id: PLACE_ID,
          fields: 'name,rating,user_ratings_total,reviews,url',
          key: GOOGLE_API_KEY,
          language: 'id' // Bahasa Indonesia
        }
      }
    );

    if (response.data.status !== 'OK') {
      return res.status(400).json({
        error: 'Failed to fetch Google reviews',
        status: response.data.status
      });
    }

    // Filter dan format reviews
    const reviews = response.data.result.reviews || [];
    const filteredReviews = reviews
      .filter(review => review.rating >= 4) // Hanya review 4-5 bintang
      .slice(0, 6) // Ambil maksimal 6 review terbaru
      .map(review => ({
        id: `${review.time}`, // Gunakan timestamp sebagai ID
        author_name: review.author_name,
        author_url: review.author_url,
        profile_photo_url: review.profile_photo_url,
        rating: review.rating,
        relative_time_description: review.relative_time_description,
        text: review.text,
        time: review.time
      }));

    const result = {
      place_id: PLACE_ID,
      name: response.data.result.name,
      rating: response.data.result.rating,
      user_ratings_total: response.data.result.user_ratings_total,
      reviews: filteredReviews,
      url: response.data.result.url,
      last_updated: new Date().toISOString()
    };

    res.json(result);

  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

// Endpoint untuk cache reviews (optional)
router.get('/cached-reviews', async (req, res) => {
  try {
    // Implementasi cache dengan Redis atau database
    // Untuk mengurangi API calls ke Google
    
    // Note: File system cache disabled for frontend build
    // Use localStorage or IndexedDB instead in production
    
    /* eslint-disable @typescript-eslint/no-require-imports */
    // const fs = require('fs');
    // const path = require('path');
    // const cacheFile = path.join(__dirname, '../cache/reviews.json');
    /* eslint-enable @typescript-eslint/no-require-imports */
    
    // if (fs.existsSync(cacheFile)) {
    //   const cacheData = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
    //   const cacheAge = Date.now() - new Date(cacheData.last_updated).getTime();
    //   
    //   // Cache valid untuk 1 jam (3600000 ms)
    //   if (cacheAge < 3600000) {
    //     return res.json(cacheData);
    //   }
    // }
    
    // Jika cache expired, redirect ke endpoint real
    return res.redirect('/api/google-reviews');
    
  } catch (error) {
    console.error('Error reading cache:', error);
    res.status(500).json({
      error: 'Cache error'
    });
  }
});

export default router;

/* 
SETUP INSTRUCTIONS:

1. Install dependencies:
   npm install express axios dotenv

2. Setup environment variables (.env):
   GOOGLE_PLACES_API_KEY=your_google_api_key_here
   GOOGLE_PLACE_ID=your_google_place_id_here

3. How to get Google Place ID:
   - Go to https://developers.google.com/maps/documentation/places/web-service/place-id
   - Search for your business
   - Copy the Place ID

4. How to get Google API Key:
   - Go to Google Cloud Console
   - Enable Places API
   - Create credentials (API Key)
   - Restrict API key to Places API only

5. Usage in frontend:
   const response = await fetch('/api/google-reviews');
   const reviews = await response.json();

6. Rate Limits:
   - Google Places API has usage limits
   - Implement caching to reduce API calls
   - Consider using webhook for real-time updates

7. Alternative Services:
   - Outscrape API
   - SerpApi
   - ScrapingBee
   (These are paid services but easier to implement)
*/
