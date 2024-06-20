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


const images = document.querySelectorAll('.corousel-images img')

let slideIndex = 1

function next() {

    for(let i = 0; i < images.length; i++) {
        images[i].src = './assets/images/img' + Math.abs((slideIndex + i) % images.length) + '.png'
    }

    // space1control++
    // space2control++
    // space3control++

    // if(space1control > 3){
    //     space1control = 1
    // }

    // if(space2control > 3){
    //     space2control = 1
    // }

    // if(space3control > 3){
    //     space3control = 1
    // }

    // space1.src = './assets/images/img' + space1control + '.png'
    // space2.src = './assets/images/img' + space2control + '.png'
    // space3.src = './assets/images/img' + space3control + '.png'
}

function back() {
    let space1 = document.getElementById('space1')
    let space2 = document.getElementById('space2')
    let space3 = document.getElementById('space3')

    space1control--
    space2control--
    space3control--

    if(space1control < 1){
        space1control = 3
    }

    if(space2control < 1){
        space2control = 3
    }

    if(space3control < 1){
        space3control = 3
    }

    space1.src = './assets/images/img' + space1control + '.png'
    space2.src = './assets/images/img' + space2control + '.png'
    space3.src = './assets/images/img' + space3control + '.png'
}
