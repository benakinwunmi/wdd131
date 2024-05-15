// JavaScript for responsive hamburger menu
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// JavaScript for footer copyright year and last modified date
const currentDate = new Date();
document.getElementById('copyrightYear').textContent = currentDate.getFullYear();

const lastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = lastModified.toLocaleDateString();
