const navSlide = () => {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".menu-toggle");
  toggle.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};
const slideIn = () => {
  const inner = document.querySelector(".inner h1");
  inner.style.opacity = "1";
  inner.style.transform = "translateX(0)";
};

const slideIn2 = () => {
  const contentP = document.querySelector(".content p");
  contentP.style.opacity = "1";
  contentP.style.transform = "translateX(0)";
};
const slideIn3 = () => {
  const button = document.querySelector(".btn1");
  button.style.opacity = "1";
  button.style.transform = "translateX(0)";
};
const fadeIn = () => {
  const logo = document.querySelector(".logo img");
  logo.style.opacity = "1";
};
const nav = () => {
  let n = document.querySelectorAll(".nav ul li a");
  for (let i = 0; i < n.length; i++) {
    n[i].style.opacity = 1;
    n[i].style.transform = "translateY(0)";
  }
};
navSlide();
window.onload = () => {
  setTimeout(slideIn, 1000);
  setTimeout(slideIn2, 1000);
  setTimeout(slideIn3, 1000);
  setTimeout(fadeIn, 1000);
  setTimeout(nav, 1000);
};
