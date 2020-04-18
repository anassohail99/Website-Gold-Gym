const slideIn = () => {
  const inner = document.querySelector(".content h1");
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

const slideIn4 = () => {
  const load = document.querySelector(".loader");
  const main = document.querySelector(".Main");
  load.style.display = "none";
  main.style.display = "block";
  load.style.transition = "0.2s easeout";
  main.style.transition = "0.2s";
  main.style.opacity = "1";
};

window.onload = () => {
  setTimeout(slideIn, 1000);
  setTimeout(slideIn2, 1000);
  setTimeout(slideIn3, 1000);
  setTimeout(slideIn4, 500);
};
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
};

var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: ".extra-div",
})
  .setClassToggle(".extra-div", "show")
  .addTo(controller);

var controller2 = new ScrollMagic.Controller();
var scene2 = new ScrollMagic.Scene({
  triggerElement: ".card",
})
  .setClassToggle(".card", "show2")
  .addTo(controller2);
