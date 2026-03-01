const fetch = require('node-fetch');
const radius = 25000;
const lat = 40.73;
const lng = -74.0;
const query = `[out:json][timeout:25];(node["amenity"="hospital"](around:${radius},${lat},${lng});node["amenity"="clinic"](around:${radius},${lat},${lng});node["amenity"="pharmacy"](around:${radius},${lat},${lng}););out center;`;
fetch('https://overpass-api.de/api/interpreter', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    },
    body: 'data=' + encodeURIComponent(query)
}).then(res => {
    if (!res.ok) throw new Error('Status ' + res.status);
    return res.json();
}).then(data => {
    console.log('elements', data.elements.length);
    console.log(data.elements.slice(0, 5));
}).catch(err => console.error('Error', err));
