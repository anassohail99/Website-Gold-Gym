const navSlide = () => {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".menu-toggle");
  toggle.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};
navSlide();
