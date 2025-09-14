function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}

document.addEventListener("click", function (e) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (
    menu &&
    icon &&
    menu.classList.contains("open") &&
    !icon.contains(e.target) &&
    !menu.contains(e.target)
  ) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});
