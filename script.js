function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}

document.addEventListener("click", (e) => {
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

/* Fade-Up Intersection Observer */
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute("data-delay") || "0";
            entry.target.style.animationDelay = `${parseInt(delay, 10)}ms`;
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    reveals.forEach(el => observer.observe(el));
  } else {
    // Fallback
    reveals.forEach(el => {
      const delay = el.getAttribute("data-delay") || "0";
      setTimeout(() => el.classList.add("in-view"), parseInt(delay, 10));
    });
  }
});