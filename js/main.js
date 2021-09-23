
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
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  // effect: "coverflow",
});

