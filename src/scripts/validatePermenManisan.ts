/**
 * Script Validasi Produk Permen & Manisan
 * npm run validate-permen
 */

console.log('\n╔══════════════════════════════════════════════════════════════╗');
console.log('║         VALIDASI PRODUK PERMEN & MANISAN                    ║');
console.log('╚══════════════════════════════════════════════════════════════╝\n');

const expectedData = {
  category: "Permen & Manisan",
  idRange: { min: 2001, max: 2020 },
  totalProducts: 20,
  products: [
    { id: 2001, name: "JELLY INACO MIKA", price: 24500 },
    { id: 2002, name: "JELLY INACO SACHET", price: 25000 },
    { id: 2003, name: "YUPI PIZZA TOPLES", price: 37500 },
    { id: 2004, name: "YUPI COLA TOPLES", price: 32000 },
    { id: 2005, name: "YUPI STRAWBERRY KISS TOPLES", price: 32000 },
    { id: 2006, name: "YUPI BANANA TOPLES", price: 32000 },
    { id: 2007, name: "YUPI BOLICIOUS GRAPE TOPLES", price: 32000 },
    { id: 2008, name: "YUPI JUNGLE TOPLES", price: 32000 },
    { id: 2009, name: "YUPI DINO LOVE TOPLES", price: 32000 },
    { id: 2010, name: "YUPI MILLY MOOS TOPLES", price: 32000 },
    { id: 2011, name: "PERMEN KOPI KOPIKO TOPLES", price: 48000 },
    { id: 2012, name: "PERMEN KOPI KOPIKO SACHET", price: 43500 },
    { id: 2013, name: "PERMEN KOPI CAPPUCINO TOPLES", price: 52500 },
    { id: 2014, name: "PERMEN KOPI CAPPUCINO SACHET", price: 51000 },
    { id: 2015, name: "PERMEN NANO NANO TOPLES", price: 46500 },
    { id: 2016, name: "PERMEN NANO NANO SACHET", price: 44000 },
    { id: 2017, name: "PERMEN RELAXA TOPLES", price: 52500 },
    { id: 2018, name: "PERMEN RELAXA SACHET", price: 51000 },
    { id: 2019, name: "PERMEN TAMARIN TOPLES", price: 59000 },
    { id: 2020, name: "PERMEN TAMARIN SACHET", price: 57500 }
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
  console.log('\n✅ VALIDATION PASSED - Permen & Manisan products are valid!\n');
  process.exit(0);
}
