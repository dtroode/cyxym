const links = document.querySelectorAll("main nav a");

links.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    scrollTo(link.attributes.href.value);
  });
});

function scrollTo(href) {
  document.querySelector(href).scrollIntoView({ behavior: "smooth" });
}
