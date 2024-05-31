
function calculateWindChill(temp, windSpeed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

let temperature = 20; // Celsius
let windSpeed = 8; // km/h

if (temperature <= 10 && windSpeed > 4.8) {
    let windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = windChill.toFixed(2) + ' °C';
} else {
    document.getElementById('windChill').textContent = 'N/A';
}
