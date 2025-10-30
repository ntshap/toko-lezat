/**
 * Script Validasi Produk Kacang-kacangan
 * npm run validate-kacang
 */

console.log('\n╔══════════════════════════════════════════════════════════════╗');
console.log('║           VALIDASI PRODUK KACANG-KACANGAN                   ║');
console.log('╚══════════════════════════════════════════════════════════════╝\n');

const expectedData = {
  category: "Kacang-kacangan",
  idRange: { min: 4001, max: 4005 },
  totalProducts: 5,
  products: [
    { id: 4001, name: "KACANG TELUR OVEN", price: 24000 },
    { id: 4002, name: "KACANG TELUR GORENG", price: 24000 },
    { id: 4003, name: "KACANG ATOM", price: 26000 },
    { id: 4004, name: "KACANG KAPRI", price: 28000 },
    { id: 4005, name: "KACANG ARAB", price: 32000 }
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
  console.log('\n✅ VALIDATION PASSED - Kacang-kacangan products are valid!\n');
  process.exit(0);
}
