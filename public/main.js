const btn = document.querySelector(".menu-button");
const close_btn = document.querySelector(".close_btn");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
   menu.classList.toggle("hidden");
});
