const lat = 22.5726; // Kolkata
const lng = 88.3639;
const radius = 25000;
const apiKey = "4f1e45ab3844874e2960e267196924ee";

async function test(categories) {
    const url = `https://api.geoapify.com/v2/places?categories=${categories}&filter=circle:${lng},${lat},${radius}&limit=20&apiKey=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(`Cat [${categories}]: Found ${data.features ? data.features.length : 0} items.`);
}

async function run() {
    await test('healthcare.hospital');
    await test('healthcare.clinic_or_praxis');
    await test('healthcare');
    await test('commercial.health_and_beauty.pharmacy');
    await test('amenity.hospital'); // maybe OSM standard?
}

run();
