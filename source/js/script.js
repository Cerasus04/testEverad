var i;
var slides = document.querySelectorAll(".slider__item");
var dots = document.querySelectorAll(".controls__btn");
var buttonsLeft = document.querySelector(".carousel__arrow--left");
var buttonsRight = document.querySelector(".carousel__arrow--right");
/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function prevSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" current", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " current";
}

buttonsLeft.addEventListener("click", prevSlide);
buttonsRight.addEventListener("click", nextSlide);

// Открытие модального окна

var salesBtn = document.querySelectorAll(".btn-js"); //одно моальное окно на любую кнопку сделать заказ
var closedBtn = document.querySelectorAll(".choice__close");
var modalOverlay = document.querySelector(".modal-overlay");
var modalBlock = document.querySelector(".modal-block");
var modalForm = document.querySelector(".modal-block__form");

function show() {
  modalOverlay.classList.add("modal-overlay--opened");
  modalBlock.classList.add("modal-block--opened");
}

function hide() {
  if (modalOverlay.classList.contains("modal-overlay--opened")
    && modalBlock.classList.contains("modal-block--opened")) {
    modalOverlay.classList.remove("modal-overlay--opened");
    modalBlock.classList.remove("modal-block--opened");
  }
}

for (let i = 0; i < salesBtn.length; i++) {
  salesBtn[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    show();
  });
}

window.addEventListener("keydown", function () {
  if (event.keyCode === 27) {
    hide();
  }
});

for (let i = 0; i < closedBtn.length; i++) {
  closedBtn[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    hide();
  });
}

modalOverlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  hide();
});

