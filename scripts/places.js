document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;

    const temperature = 10; // Celsius
    const windSpeed = 5; // km/h

    function calculateWindChill(temp, speed) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
    }

    function displayWindChill(temp, speed) {
        if (temp <= 10 && speed > 4.8) {
            const windChill = calculateWindChill(temp, speed).toFixed(2);
            document.getElementById('windchill').textContent = `${windChill} °C`;
        } else {
            document.getElementById('windchill').textContent = 'N/A';
        }
    }

    displayWindChill(temperature, windSpeed);
});
