const lat = 40.725;
const lng = -73.995;
const radius = 25000;
const apiKey = "4f1e45ab3844874e2960e267196924ee";

async function test(categories) {
    const url = `https://api.geoapify.com/v2/places?categories=${categories}&filter=circle:${lng},${lat},${radius}&limit=2&apiKey=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(`Cat [${categories}]: Found ${data.features ? data.features.length : 0} items.`);
    if (data.features && data.features.length > 0) {
        console.log(data.features[0].properties.name);
    }
}

async function run() {
    await test('healthcare.hospital');
    await test('healthcare');
}

run();
