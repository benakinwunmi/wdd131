const currentYear = new Date().getFullYear();

document.querySelector("footer p:first-of-type span").textContent = currentYear;

document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
