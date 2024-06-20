const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");
const navLink = document.querySelectorAll("#nav-link");

const scrollUp = document.querySelector("#scroll-up");

hamburger.addEventListener("click", openMenu);

const checkbox = document.querySelector("#checkbox");

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

const images = document.querySelectorAll(".corousel-images img");

let slideIndex = 0;

function handleSlideChange(value) {
  slideIndex += value;
  for (let i = 0; i < images.length; i++) {
    images[i].src =
      "./assets/images/img" +
      ((Math.abs(slideIndex + i) % images.length) + 1) +
      ".png";
  }
};
