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
