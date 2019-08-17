const links = document.querySelectorAll("main nav a");
const dateContainer = document.getElementById("year");
const date = new Date();
const year = date.getFullYear();

dateContainer.innerHTML = year;
