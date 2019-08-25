const links = document.querySelectorAll("main nav a");

function scrollTo(href) {
  document.querySelector(href).scrollIntoView({ behavior: "smooth" });
}

links.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    scrollTo(this.attributes.href.value);
  });
});