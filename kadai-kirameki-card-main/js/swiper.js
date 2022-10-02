/* globals Swiper */
/* globals $ */
$(function () {
  if (window.matchMedia('(max-width: 767px)').matches) {
    new Swiper('.swiper', {
      slidesPerView: 1.4,
      spaceBetween: 36,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function (n) {
            return '0'  + n;
        },
        formatFractionTotal: function (number) {
            return '0' +number;
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else {
    new Swiper('.swiper', {
  centeredSlides: true,
  slidesPerView: 2.3,
  spaceBetween: 58,
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
});
  }
})




/*
var swiper = new Swiper('.swiper', {
  centeredSlides: true,
  slidesPerView: 2.3,
  spaceBetween: 58,
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
});
*/