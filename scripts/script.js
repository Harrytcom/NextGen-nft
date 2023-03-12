const swiper = new Swiper('.nft-slider', {

  speed: 400,
  spaceBetween: 50,

  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.nft-slider__pagination',
    clickable: true,
  },

  slidesPerView: 3,
});