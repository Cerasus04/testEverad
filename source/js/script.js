// Переменные для оживления слайдов

const slides = document.querySelectorAll(".controls__btn");
const slideDescriptions = document.querySelectorAll(".slider__item");
const slideButtons = document.querySelectorAll(".controls__btn");
// const wrapper = document.querySelector(".site-wrapper");


// Скрипт для оживления слайдов

slides.forEach(function(slide) {
  slide.addEventListener("click", function(evt) {
  	evt.preventDefault();
    // wrapper.className = "site-wrapper-" + evt.target.id;

    slideButtons.forEach(function(item) {
      item.classList.remove("current");
    })
    evt.target.classList.add("current");

    slideDescriptions.forEach(function(item) {
      item.classList.remove("slider__item--current");
    })
    slideDescriptions[evt.target.id - 1].classList.add("slider__item--current");
  })
});
