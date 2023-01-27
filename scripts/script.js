const swiper = new Swiper('.swiper', {

  speed: 400,
  spaceBetween: 50,

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 3,
});

