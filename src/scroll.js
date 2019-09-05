export function scrollTo() {
  const href = this.attributes.href.value;
  event.preventDefault();
  document.querySelector(href).scrollIntoView({ behavior: "smooth" });
}