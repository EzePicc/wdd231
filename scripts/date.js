const currentYear = document.querySelector("#current-year")
const lastModified = document.querySelector("#lastModified")
const today = new Date();

currentYear.textContent = today.getFullYear();
lastModified.textContent = document.lastModified
