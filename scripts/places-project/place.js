document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('year');
    const lastModifiedElement = document.getElementById('last-modified');
    const windChillElement = document.getElementById('wind-chill');

    const temp = 25; // Temperature in Celsius
    const windSpeed = 10; // Wind speed in km/h

    yearElement.textContent = new Date().getFullYear();
    lastModifiedElement.textContent = document.lastModified;

    const calculateWindChill = (temp, windSpeed) => {
        // Wind chill calculation formula in Celsius
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    };

    if (temp <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = calculateWindChill(temp, windSpeed).toFixed(1) + '°C';
    } else {
        windChillElement.textContent = 'N/A';
    }
});
