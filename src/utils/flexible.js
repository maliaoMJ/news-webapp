function flexible() {
  const html = document.querySelector("html");
  let fontSize = window.innerWidth / 10;
  fontSize = fontSize > 50 ? 50 : fontSize;
  html.style.fontSize = `${fontSize}px`;
}
document.addEventListener("DOMContentLoaded", flexible);
window.onresize = flexible;
