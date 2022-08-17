const menuBtn = document.querySelector("[data-menu-btn]");
const menu = document.querySelector("[data-menu]");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("is-open");
  menu.classList.toggle("is-open");
  document.body.classList.toggle("menu-open");
});
