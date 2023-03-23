const swiper = new Swiper('.nft-slider', {

  wrapperClass: 'nft-slider__wrapper',
  slideClass: 'nft-slider__item',
  bulletClass: 'nft-slider__pagination-bullet',

  speed: 400,
  spaceBetween: 50,

  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.nft-slider__pagination',
    clickable: true,
  },

  slidesPerView: 3,

  // bulletClass: ''
});