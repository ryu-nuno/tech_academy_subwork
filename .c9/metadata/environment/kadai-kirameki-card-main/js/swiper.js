{"filter":false,"title":"swiper.js","tooltip":"/kadai-kirameki-card-main/js/swiper.js","undoManager":{"mark":13,"position":13,"stack":[[{"start":{"row":24,"column":20},"end":{"row":24,"column":21},"action":"remove","lines":["0"],"id":28}],[{"start":{"row":24,"column":20},"end":{"row":24,"column":21},"action":"insert","lines":["1"],"id":29}],[{"start":{"row":24,"column":20},"end":{"row":24,"column":21},"action":"remove","lines":["1"],"id":30}],[{"start":{"row":24,"column":20},"end":{"row":24,"column":21},"action":"insert","lines":["0"],"id":31}],[{"start":{"row":22,"column":4},"end":{"row":40,"column":7},"action":"remove","lines":["new Swiper('.swiper', {","      slidesPerView: 2.1,","      spaceBetween: 0,","      centeredSlides: true,","      pagination: {","        el: '.swiper-pagination',","        type: 'fraction',","        formatFractionCurrent: function (n) {","            return '0'  + n;","        },","        formatFractionTotal: function (number) {","            return '0' +number;","        }","      },","      navigation: {","        nextEl: '.swiper-button-next',","        prevEl: '.swiper-button-prev',","      },","    });"],"id":32}],[{"start":{"row":22,"column":4},"end":{"row":39,"column":3},"action":"insert","lines":["new Swiper('.swiper', {","  centeredSlides: true,","  slidesPerView: 1.6,","  pagination: {","    el: '.swiper-pagination',","    type: 'fraction',","    formatFractionCurrent: function (number) {","        return ('0' + number).slice(-2);","    },","    formatFractionTotal: function (number) {","        return ('0' + number).slice(-2);","    }","  },","  navigation: {","    prevEl: '.swiper-button-prev',","    nextEl: '.swiper-button-next',","  },","});"],"id":33}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["/"],"id":34},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["*"]}],[{"start":{"row":41,"column":2},"end":{"row":41,"column":3},"action":"insert","lines":["*"],"id":35},{"start":{"row":41,"column":3},"end":{"row":41,"column":4},"action":"insert","lines":["/"]}],[{"start":{"row":41,"column":4},"end":{"row":42,"column":0},"action":"insert","lines":["",""],"id":36},{"start":{"row":42,"column":0},"end":{"row":43,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":43,"column":0},"end":{"row":61,"column":0},"action":"insert","lines":["var swiper = new Swiper('.swiper', {","  centeredSlides: true,","  slidesPerView: 1.6,","  pagination: {","    el: '.swiper-pagination',","    type: 'fraction',","    formatFractionCurrent: function (number) {","        return ('0' + number).slice(-2);","    },","    formatFractionTotal: function (number) {","        return ('0' + number).slice(-2);","    }","  },","  navigation: {","    prevEl: '.swiper-button-prev',","    nextEl: '.swiper-button-next',","  },","});",""],"id":37}],[{"start":{"row":43,"column":0},"end":{"row":61,"column":0},"action":"remove","lines":["var swiper = new Swiper('.swiper', {","  centeredSlides: true,","  slidesPerView: 1.6,","  pagination: {","    el: '.swiper-pagination',","    type: 'fraction',","    formatFractionCurrent: function (number) {","        return ('0' + number).slice(-2);","    },","    formatFractionTotal: function (number) {","        return ('0' + number).slice(-2);","    }","  },","  navigation: {","    prevEl: '.swiper-button-prev',","    nextEl: '.swiper-button-next',","  },","});",""],"id":38}],[{"start":{"row":43,"column":0},"end":{"row":65,"column":3},"action":"insert","lines":["let mySwiper3 = new Swiper ('#swiper03', {","  loop: false,","  spaceBetween: 30,","  centeredSlides: true,","  offsetSlidesBefore: 3,","  pagination: {","    el: '.swiper-pagination',","    type: 'fraction',  //fraction タイプ","    renderFraction: function (currentClass, totalClass) {","      return '0' + '<span class=\"' + currentClass + '\"></span>' + ' / ' + '0' + '<span class=\"' + totalClass + '\"></span>';","    }","  },","  navigation: {","    nextEl: '.swiper-button-next',","    prevEl: '.swiper-button-prev',","  },","  breakpoints: {","    // when window width is >= 640px","    767: {","      spaceBetween: 50","    }","  },","});"],"id":39}],[{"start":{"row":0,"column":0},"end":{"row":65,"column":3},"action":"remove","lines":["/*$(function () {","  if (window.matchMedia('(max-width: 767px)').matches) {","    new Swiper('.swiper', {","      slidesPerView: 1.5,","      spaceBetween: 0,","      centeredSlides: true,","      pagination: {","        el: '.swiper-pagination',","        type: 'fraction',","        formatFractionCurrent: function (n) {","            return '0'  + n;","        },","        formatFractionTotal: function (number) {","            return '0' +number;","        }","      },","      navigation: {","        nextEl: '.swiper-button-next',","        prevEl: '.swiper-button-prev',","      },","    });","  } else {","    new Swiper('.swiper', {","  centeredSlides: true,","  slidesPerView: 1.6,","  pagination: {","    el: '.swiper-pagination',","    type: 'fraction',","    formatFractionCurrent: function (number) {","        return ('0' + number).slice(-2);","    },","    formatFractionTotal: function (number) {","        return ('0' + number).slice(-2);","    }","  },","  navigation: {","    prevEl: '.swiper-button-prev',","    nextEl: '.swiper-button-next',","  },","});","  }","})*/","","let mySwiper3 = new Swiper ('#swiper03', {","  loop: false,","  spaceBetween: 30,","  centeredSlides: true,","  offsetSlidesBefore: 3,","  pagination: {","    el: '.swiper-pagination',","    type: 'fraction',  //fraction タイプ","    renderFraction: function (currentClass, totalClass) {","      return '0' + '<span class=\"' + currentClass + '\"></span>' + ' / ' + '0' + '<span class=\"' + totalClass + '\"></span>';","    }","  },","  navigation: {","    nextEl: '.swiper-button-next',","    prevEl: '.swiper-button-prev',","  },","  breakpoints: {","    // when window width is >= 640px","    767: {","      spaceBetween: 50","    }","  },","});"],"id":40}],[{"start":{"row":0,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["$(function () {","  if (window.matchMedia('(max-width: 767px)').matches) {","    new Swiper('.swiper', {","      slidesPerView: 1.5,","      spaceBetween: 0,","      centeredSlides: true,","      pagination: {","        el: '.swiper-pagination',","        type: 'fraction',","        formatFractionCurrent: function (n) {","            return '0'  + n;","        },","        formatFractionTotal: function (number) {","            return '0' +number;","        }","      },","      navigation: {","        nextEl: '.swiper-button-next',","        prevEl: '.swiper-button-prev',","      },","    });","  } else {","    new Swiper('.swiper', {","      slidesPerView: 2.1,","      spaceBetween: 0,","      centeredSlides: true,","      pagination: {","        el: '.swiper-pagination',","        type: 'fraction',","        formatFractionCurrent: function (n) {","            return '0'  + n;","        },","        formatFractionTotal: function (number) {","            return '0' +number;","        }","      },","      navigation: {","        nextEl: '.swiper-button-next',","        prevEl: '.swiper-button-prev',","      },","    });","  }","})"],"id":41}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":13,"column":31},"end":{"row":13,"column":31},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":129,"mode":"ace/mode/javascript"}},"timestamp":1664453885755,"hash":"12add501e285e20e7f43843bc2f5bc5b1d3fe22e"}