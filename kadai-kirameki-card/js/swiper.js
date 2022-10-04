/* globals Swiper */
/* globals $ */



var swiper = new Swiper ('.swiper', {
  slidesPerView: 1.397,
  spaceBetween: 38,
  centeredSlides : true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function (n) {
        return '0'  + n;
    },
    formatFractionTotal: function (number) {
        return '0'  + number;
    }
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  breakpoints: {
    767: {
      slidesPerView: 2.34,
      spaceBetween: 58,
      centeredSlides : true,
    }
  }
  
})