const lat = 40.725;
const lng = -73.995;
const radius = 25000;
const apiKey = "4f1e45ab3844874e2960e267196924ee";
const url = `https://api.geoapify.com/v2/places?categories=healthcare&filter=circle:${lng},${lat},${radius}&limit=2&apiKey=${apiKey}`;

fetch(url).then(r => r.json()).then(d => console.log(JSON.stringify(d, null, 2))).catch(console.error);
