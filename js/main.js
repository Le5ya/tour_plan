<<<<<<< HEAD
const hotelSlider = new Swiper('.hotel-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
  enabled: true,
  },
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  effect: "coverflow",
});
const reviewsSlider = new Swiper('.reviews-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
  enabled: true,
  },

=======
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
>>>>>>> 497a324be473968889bd3e0b0892ddd39cc55498
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
<<<<<<< HEAD
  // effect: "coverflow",
});
=======

});
>>>>>>> 497a324be473968889bd3e0b0892ddd39cc55498
