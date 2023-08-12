/* ADDING INTERACTIVITY TO THE HEADER */
const burger = document.querySelector("#burger");
const header = document.querySelector("header");
const main = document.querySelector("main");

burger.addEventListener("click", (event) => {
    if(header.className === ""){
        header.className = "open";
        burger.setAttribute("src", "images/icons8-close.svg");
    } else {
        header.className = "";
        burger.setAttribute("src", "images/icons8-menu.svg");
    }
})

main.addEventListener("click", (event) => {
  if(header.className === "open"){
    header.className = "";
    burger.setAttribute("src", "images/icons8-menu.svg");
  }
})

/* JS FOR THE SWIPERS */

/* SWIPER FOR BEST SELLING */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
