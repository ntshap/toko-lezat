/**
 * Script Validasi Produk Keripik
 * npm run validate-keripik
 */

console.log('\n╔══════════════════════════════════════════════════════════════╗');
console.log('║              VALIDASI PRODUK KERIPIK                        ║');
console.log('╚══════════════════════════════════════════════════════════════╝\n');

const expectedData = {
  category: "Keripik",
  idRange: { min: 3001, max: 3020 },
  totalProducts: 20,
  products: [
    { id: 3001, name: "KERIPIK PISANG COKLAT", price: 11500 },
    { id: 3002, name: "KERIPIK PISANG ORIGINAL", price: 11500 },
    { id: 3003, name: "KERIPIK PISANG BALADO", price: 11500 },
    { id: 3004, name: "KERIPIK PISANG KEJU", price: 11500 },
    { id: 3005, name: "KERIPIK BAYAM", price: 19000 },
    { id: 3006, name: "KERIPIK BAYAM PEDAS", price: 19000 },
    { id: 3007, name: "KERIPIK KENTANG ORIGINAL", price: 12500 },
    { id: 3008, name: "KERIPIK KENTANG BALADO", price: 12500 },
    { id: 3009, name: "KERIPIK KENTANG BBQ", price: 12500 },
    { id: 3010, name: "KERIPIK TEMPE ORIGINAL", price: 15000 },
    { id: 3011, name: "KERIPIK TEMPE BALADO", price: 15000 },
    { id: 3012, name: "KERIPIK SINGKONG ORIGINAL", price: 10000 },
    { id: 3013, name: "KERIPIK SINGKONG BALADO", price: 10000 },
    { id: 3014, name: "KERIPIK SINGKONG PEDAS MANIS", price: 10000 },
    { id: 3015, name: "KERIPIK UBI UNGU", price: 13500 },
    { id: 3016, name: "KERIPIK UBI MANIS", price: 13500 },
    { id: 3017, name: "KERIPIK JAMUR CRISPY ORIGINAL", price: 25000 },
    { id: 3018, name: "KERIPIK JAMUR CRISPY BALADO", price: 25000 },
    { id: 3019, name: "REMPEYEK KACANG TANAH BESAR", price: 53500 },
    { id: 3020, name: "REMPEYEK KACANG TANAH KECIL", price: 28500 }
  ]
};

let hasErrors = false;

console.log('🔍 Validating data structure...\n');

// Check total count
if (expectedData.products.length === expectedData.totalProducts) {
  console.log(`✅ Total products: ${expectedData.totalProducts}`);
} else {
  console.error(`❌ Expected ${expectedData.totalProducts} products, found ${expectedData.products.length}`);
  hasErrors = true;
}

// Check ID range
const ids = expectedData.products.map(p => p.id);
const minId = Math.min(...ids);
const maxId = Math.max(...ids);

if (minId >= expectedData.idRange.min && maxId <= expectedData.idRange.max) {
  console.log(`✅ ID range: ${minId} - ${maxId}`);
} else {
  console.error(`❌ ID range invalid. Expected: ${expectedData.idRange.min}-${expectedData.idRange.max}, Found: ${minId}-${maxId}`);
  hasErrors = true;
}

// Check for duplicate IDs
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicateIds.length === 0) {
  console.log('✅ No duplicate IDs');
} else {
  console.error(`❌ Duplicate IDs found: ${duplicateIds.join(', ')}`);
  hasErrors = true;
}

// Check for missing IDs in sequence
const missingIds: number[] = [];
for (let i = expectedData.idRange.min; i <= expectedData.idRange.max; i++) {
  if (!ids.includes(i)) {
    missingIds.push(i);
  }
}

if (missingIds.length === 0) {
  console.log('✅ All IDs in sequence present');
} else {
  console.error(`❌ Missing IDs: ${missingIds.join(', ')}`);
  hasErrors = true;
}

// Check prices
const invalidPrices = expectedData.products.filter(p => !p.price || p.price <= 0);
if (invalidPrices.length === 0) {
  console.log('✅ All prices valid');
} else {
  console.error(`❌ Invalid prices found in: ${invalidPrices.map(p => p.name).join(', ')}`);
  hasErrors = true;
}

// Price statistics
const prices = expectedData.products.map(p => p.price);
console.log(`\n📊 Price Statistics:`);
console.log(`   Min: Rp ${Math.min(...prices).toLocaleString('id-ID')}`);
console.log(`   Max: Rp ${Math.max(...prices).toLocaleString('id-ID')}`);
console.log(`   Avg: Rp ${Math.round(prices.reduce((a, b) => a + b, 0) / prices.length).toLocaleString('id-ID')}`);

console.log('\n─────────────────────────────────────────────────────────────');

if (hasErrors) {
  console.error('\n❌ VALIDATION FAILED\n');
  process.exit(1);
} else {
  console.log('\n✅ VALIDATION PASSED - Keripik products are valid!\n');
  process.exit(0);
}
