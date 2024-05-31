const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl: "https://www.churchofjesuschrist.org/bc/content/shared/content/images/leadership/temples/salt-lake-temple-lds-199430-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 40000,
        imageUrl: "https://www.churchofjesuschrist.org/bc/content/shared/content/images/leadership/temples/rome-italy-temple-lds-282930-wallpaper.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 52000,
        imageUrl: "https://www.churchofjesuschrist.org/bc/content/shared/content/images/leadership/temples/tokyo-japan-temple-lds-173241-wallpaper.jpg"
    }
];

function createTempleCard(temple) {
    const card = document.createElement('div');
    card.classList.add('temple-card');

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';

    const name = document.createElement('h2');
    name.textContent = temple.templeName;

    const location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement('p');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area} sq ft`;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);

    return card;
}

function displayTemples(filteredTemples) {
    const container = document.getElementById('temple-container');
    container.innerHTML = '';
    filteredTemples.forEach(temple => {
        const card = createTempleCard(temple);
        container.appendChild(card);
    });
}

function filterTemples(criteria) {
    let filteredTemples;
    switch (criteria) {
        case 'old':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            break;
        case 'new':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filteredTemples = temples;
    }
    displayTemples(filteredTemples);
}

document.getElementById('all').addEventListener('click', () => filterTemples('all'));
document.getElementById('old').addEventListener('click', () => filterTemples('old'));
document.getElementById('new').addEventListener('click', () => filterTemples('new'));
document.getElementById('large').addEventListener('click', () => filterTemples('large'));
document.getElementById('small').addEventListener('click', () => filterTemples('small'));

function updateFooter() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    document.getElementById('last-modified').textContent = document.lastModified;
}

window.onload = () => {
    filterTemples('all');
    updateFooter();
};
