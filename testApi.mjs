const lat = 22.5726; // Kolkata
const lng = 88.3639;
const radius = 25000;
const apiKey = "4f1e45ab3844874e2960e267196924ee";
const categories = 'healthcare,commercial.health_and_beauty.pharmacy';
const url = `https://api.geoapify.com/v2/places?categories=${categories}&filter=circle:${lng},${lat},${radius}&bias=proximity:${lng},${lat}&limit=20&apiKey=${apiKey}`;

console.log("Fetching: " + url);
fetch(url).then(res => res.json()).then(data => {
    console.log(`Found ${data.features ? data.features.length : 0} items.`);
    if (data.features && data.features.length > 0) {
        data.features.slice(0, 3).forEach((f, i) => {
            console.log(i, f.properties.name);
        });
    }
}).catch(console.error);
