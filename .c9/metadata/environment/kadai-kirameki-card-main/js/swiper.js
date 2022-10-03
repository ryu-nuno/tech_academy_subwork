{"filter":false,"title":"swiper.js","tooltip":"/kadai-kirameki-card-main/js/swiper.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":50,"column":19},"end":{"row":50,"column":20},"action":"remove","lines":["6"],"id":269}],[{"start":{"row":50,"column":19},"end":{"row":50,"column":20},"action":"insert","lines":["4"],"id":270}],[{"start":{"row":50,"column":19},"end":{"row":50,"column":20},"action":"remove","lines":["4"],"id":271}],[{"start":{"row":50,"column":19},"end":{"row":50,"column":20},"action":"insert","lines":["3"],"id":272}],[{"start":{"row":66,"column":3},"end":{"row":67,"column":0},"action":"insert","lines":["",""],"id":273},{"start":{"row":67,"column":0},"end":{"row":67,"column":1},"action":"insert","lines":["}"]}],[{"start":{"row":67,"column":1},"end":{"row":67,"column":2},"action":"insert","lines":["e"],"id":274},{"start":{"row":67,"column":2},"end":{"row":67,"column":3},"action":"insert","lines":["l"]},{"start":{"row":67,"column":3},"end":{"row":67,"column":4},"action":"insert","lines":["s"]},{"start":{"row":67,"column":4},"end":{"row":67,"column":5},"action":"insert","lines":["e"]}],[{"start":{"row":67,"column":5},"end":{"row":68,"column":0},"action":"insert","lines":["",""],"id":275}],[{"start":{"row":67,"column":5},"end":{"row":68,"column":0},"action":"remove","lines":["",""],"id":278},{"start":{"row":67,"column":4},"end":{"row":67,"column":5},"action":"remove","lines":["e"]},{"start":{"row":67,"column":3},"end":{"row":67,"column":4},"action":"remove","lines":["s"]},{"start":{"row":67,"column":2},"end":{"row":67,"column":3},"action":"remove","lines":["l"]},{"start":{"row":67,"column":1},"end":{"row":67,"column":2},"action":"remove","lines":["e"]},{"start":{"row":67,"column":0},"end":{"row":67,"column":1},"action":"remove","lines":["}"]}],[{"start":{"row":47,"column":0},"end":{"row":47,"column":1},"action":"insert","lines":["/"],"id":291},{"start":{"row":47,"column":1},"end":{"row":47,"column":2},"action":"insert","lines":["*"]}],[{"start":{"row":67,"column":0},"end":{"row":67,"column":1},"action":"insert","lines":["*"],"id":292},{"start":{"row":67,"column":1},"end":{"row":67,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":45,"column":0},"end":{"row":46,"column":0},"action":"insert","lines":["",""],"id":293},{"start":{"row":46,"column":0},"end":{"row":47,"column":0},"action":"insert","lines":["",""]},{"start":{"row":47,"column":0},"end":{"row":48,"column":0},"action":"insert","lines":["",""]},{"start":{"row":48,"column":0},"end":{"row":49,"column":0},"action":"insert","lines":["",""]},{"start":{"row":49,"column":0},"end":{"row":50,"column":0},"action":"insert","lines":["",""]},{"start":{"row":50,"column":0},"end":{"row":51,"column":0},"action":"insert","lines":["",""]},{"start":{"row":51,"column":0},"end":{"row":52,"column":0},"action":"insert","lines":["",""]},{"start":{"row":52,"column":0},"end":{"row":53,"column":0},"action":"insert","lines":["",""]},{"start":{"row":53,"column":0},"end":{"row":54,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":47,"column":0},"end":{"row":89,"column":2},"action":"insert","lines":["$(function () {","  if (window.matchMedia('(max-width: 767px)').matches) {","    new Swiper('.swiper', {","      slidesPerView: 1.5,","      spaceBetween: 0,","      centeredSlides: true,","      pagination: {","        el: '.swiper-pagination',","        type: 'fraction',","        formatFractionCurrent: function (n) {","            return '0'  + n;","        },","        formatFractionTotal: function (number) {","            return '0' +number;","        }","      },","      navigation: {","        nextEl: '.swiper-button-next',","        prevEl: '.swiper-button-prev',","      },","    });","  } else {","    new Swiper('.swiper', {","      slidesPerView: 2.1,","      spaceBetween: 0,","      centeredSlides: true,","      pagination: {","        el: '.swiper-pagination',","        type: 'fraction',","        formatFractionCurrent: function (n) {","            return '0'  + n;","        },","        formatFractionTotal: function (number) {","            return '0' +number;","        }","      },","      navigation: {","        nextEl: '.swiper-button-next',","        prevEl: '.swiper-button-prev',","      },","    });","  }","})"],"id":299}],[{"start":{"row":47,"column":0},"end":{"row":47,"column":1},"action":"remove","lines":["$"],"id":300}],[{"start":{"row":69,"column":4},"end":{"row":87,"column":7},"action":"remove","lines":["new Swiper('.swiper', {","      slidesPerView: 2.1,","      spaceBetween: 0,","      centeredSlides: true,","      pagination: {","        el: '.swiper-pagination',","        type: 'fraction',","        formatFractionCurrent: function (n) {","            return '0'  + n;","        },","        formatFractionTotal: function (number) {","            return '0' +number;","        }","      },","      navigation: {","        nextEl: '.swiper-button-next',","        prevEl: '.swiper-button-prev',","      },","    });"],"id":303}],[{"start":{"row":69,"column":4},"end":{"row":87,"column":3},"action":"insert","lines":["new Swiper('.swiper', {","  centeredSlides: true,","  slidesPerView: 2.3,","  spaceBetween: 58,","  pagination: {","    el: '.swiper-pagination',","    type: 'fraction',","    formatFractionCurrent: function (n) {","        return '0'  + n;","    },","    formatFractionTotal: function (number) {","        return '0'  + number;","    }","  },","  navigation: {","    prevEl: '.swiper-button-prev',","    nextEl: '.swiper-button-next',","  },","});"],"id":304}],[{"start":{"row":47,"column":0},"end":{"row":47,"column":1},"action":"insert","lines":["$"],"id":305}],[{"start":{"row":47,"column":0},"end":{"row":47,"column":1},"action":"remove","lines":["$"],"id":306},{"start":{"row":47,"column":0},"end":{"row":47,"column":1},"action":"insert","lines":["$"]}],[{"start":{"row":47,"column":0},"end":{"row":47,"column":1},"action":"remove","lines":["$"],"id":307}],[{"start":{"row":47,"column":0},"end":{"row":47,"column":1},"action":"insert","lines":["$"],"id":308}],[{"start":{"row":47,"column":0},"end":{"row":89,"column":2},"action":"remove","lines":["$(function () {","  if (window.matchMedia('(max-width: 767px)').matches) {","    new Swiper('.swiper', {","      slidesPerView: 1.5,","      spaceBetween: 0,","      centeredSlides: true,","      pagination: {","        el: '.swiper-pagination',","        type: 'fraction',","        formatFractionCurrent: function (n) {","            return '0'  + n;","        },","        formatFractionTotal: function (number) {","            return '0' +number;","        }","      },","      navigation: {","        nextEl: '.swiper-button-next',","        prevEl: '.swiper-button-prev',","      },","    });","  } else {","    new Swiper('.swiper', {","  centeredSlides: true,","  slidesPerView: 2.3,","  spaceBetween: 58,","  pagination: {","    el: '.swiper-pagination',","    type: 'fraction',","    formatFractionCurrent: function (n) {","        return '0'  + n;","    },","    formatFractionTotal: function (number) {","        return '0'  + number;","    }","  },","  navigation: {","    prevEl: '.swiper-button-prev',","    nextEl: '.swiper-button-next',","  },","});","  }","})"],"id":309}],[{"start":{"row":53,"column":0},"end":{"row":54,"column":0},"action":"remove","lines":["",""],"id":310},{"start":{"row":52,"column":0},"end":{"row":53,"column":0},"action":"remove","lines":["",""]},{"start":{"row":51,"column":0},"end":{"row":52,"column":0},"action":"remove","lines":["",""]},{"start":{"row":50,"column":0},"end":{"row":51,"column":0},"action":"remove","lines":["",""]},{"start":{"row":49,"column":0},"end":{"row":50,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":48,"column":0},"end":{"row":49,"column":0},"action":"remove","lines":["",""],"id":311},{"start":{"row":47,"column":0},"end":{"row":48,"column":0},"action":"remove","lines":["",""]},{"start":{"row":46,"column":0},"end":{"row":47,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":23,"column":4},"end":{"row":41,"column":7},"action":"remove","lines":["new Swiper('.swiper', {","      slidesPerView: 2.1,","      spaceBetween: 0,","      centeredSlides: true,","      pagination: {","        el: '.swiper-pagination',","        type: 'fraction',","        formatFractionCurrent: function (n) {","            return '0'  + n;","        },","        formatFractionTotal: function (number) {","            return '0' +number;","        }","      },","      navigation: {","        nextEl: '.swiper-button-next',","        prevEl: '.swiper-button-prev',","      },","    });"],"id":312}],[{"start":{"row":23,"column":4},"end":{"row":41,"column":3},"action":"insert","lines":["new Swiper('.swiper', {","  centeredSlides: true,","  slidesPerView: 2.3,","  spaceBetween: 58,","  pagination: {","    el: '.swiper-pagination',","    type: 'fraction',","    formatFractionCurrent: function (n) {","        return '0'  + n;","    },","    formatFractionTotal: function (number) {","        return '0'  + number;","    }","  },","  navigation: {","    prevEl: '.swiper-button-prev',","    nextEl: '.swiper-button-next',","  },","});"],"id":313}],[{"start":{"row":43,"column":3},"end":{"row":43,"column":4},"action":"remove","lines":["/"],"id":314},{"start":{"row":43,"column":2},"end":{"row":43,"column":3},"action":"remove","lines":["*"]}],[{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"remove","lines":["*"],"id":315},{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"remove","lines":["5"],"id":316}],[{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":["2"],"id":317}],[{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"remove","lines":["2"],"id":318}],[{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":["4"],"id":319}],[{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"remove","lines":["0"],"id":320}],[{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":["3"],"id":321},{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"insert","lines":["6"]}],[{"start":{"row":0,"column":20},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":328}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":20},"action":"insert","lines":["/* globals Swiper */"],"id":329}],[{"start":{"row":1,"column":16},"end":{"row":1,"column":17},"action":"remove","lines":["r"],"id":330},{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"remove","lines":["e"]},{"start":{"row":1,"column":14},"end":{"row":1,"column":15},"action":"remove","lines":["p"]},{"start":{"row":1,"column":13},"end":{"row":1,"column":14},"action":"remove","lines":["i"]},{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"remove","lines":["w"]},{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"remove","lines":["S"]}],[{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":["$"],"id":331}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":2},"action":"insert","lines":["/＊"],"id":332}],[{"start":{"row":44,"column":2},"end":{"row":44,"column":4},"action":"insert","lines":["＊・"],"id":333}],[{"start":{"row":44,"column":3},"end":{"row":44,"column":4},"action":"remove","lines":["・"],"id":335},{"start":{"row":44,"column":2},"end":{"row":44,"column":3},"action":"remove","lines":["＊"]}],[{"start":{"row":44,"column":2},"end":{"row":44,"column":3},"action":"insert","lines":["*"],"id":336},{"start":{"row":44,"column":3},"end":{"row":44,"column":4},"action":"insert","lines":["/"]}],[{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"remove","lines":["＊"],"id":337}],[{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["*"],"id":338}],[{"start":{"row":69,"column":2},"end":{"row":70,"column":0},"action":"insert","lines":["",""],"id":339},{"start":{"row":70,"column":0},"end":{"row":71,"column":0},"action":"insert","lines":["",""]},{"start":{"row":71,"column":0},"end":{"row":72,"column":0},"action":"insert","lines":["",""]},{"start":{"row":72,"column":0},"end":{"row":73,"column":0},"action":"insert","lines":["",""]},{"start":{"row":73,"column":0},"end":{"row":74,"column":0},"action":"insert","lines":["",""]},{"start":{"row":74,"column":0},"end":{"row":75,"column":0},"action":"insert","lines":["",""]},{"start":{"row":75,"column":0},"end":{"row":76,"column":0},"action":"insert","lines":["",""]},{"start":{"row":76,"column":0},"end":{"row":77,"column":0},"action":"insert","lines":["",""]},{"start":{"row":77,"column":0},"end":{"row":78,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":78,"column":0},"end":{"row":92,"column":2},"action":"insert","lines":["var mySwiper = new Swiper ('.swiper-container', {","  loop: true,","  slidesPerView: 2,","  spaceBetween: 10,","  centeredSlides : true,","  pagination: '.swiper-pagination',","  nextButton: '.swiper-button-next',","  prevButton: '.swiper-button-prev',","  breakpoints: {","    767: {","      slidesPerView: 1,","      spaceBetween: 0","    }","  }","})"],"id":340}],[{"start":{"row":78,"column":44},"end":{"row":78,"column":45},"action":"remove","lines":["r"],"id":341},{"start":{"row":78,"column":43},"end":{"row":78,"column":44},"action":"remove","lines":["e"]},{"start":{"row":78,"column":42},"end":{"row":78,"column":43},"action":"remove","lines":["n"]},{"start":{"row":78,"column":41},"end":{"row":78,"column":42},"action":"remove","lines":["i"]},{"start":{"row":78,"column":40},"end":{"row":78,"column":41},"action":"remove","lines":["a"]},{"start":{"row":78,"column":39},"end":{"row":78,"column":40},"action":"remove","lines":["t"]},{"start":{"row":78,"column":38},"end":{"row":78,"column":39},"action":"remove","lines":["n"]},{"start":{"row":78,"column":37},"end":{"row":78,"column":38},"action":"remove","lines":["o"]},{"start":{"row":78,"column":36},"end":{"row":78,"column":37},"action":"remove","lines":["c"]},{"start":{"row":78,"column":35},"end":{"row":78,"column":36},"action":"remove","lines":["-"]}],[{"start":{"row":78,"column":5},"end":{"row":78,"column":6},"action":"remove","lines":["y"],"id":342},{"start":{"row":78,"column":4},"end":{"row":78,"column":5},"action":"remove","lines":["m"]}],[{"start":{"row":78,"column":4},"end":{"row":78,"column":5},"action":"remove","lines":["S"],"id":343}],[{"start":{"row":78,"column":4},"end":{"row":78,"column":5},"action":"insert","lines":["s"],"id":344}],[{"start":{"row":78,"column":17},"end":{"row":78,"column":18},"action":"remove","lines":["S"],"id":345}],[{"start":{"row":78,"column":17},"end":{"row":78,"column":18},"action":"insert","lines":["s"],"id":346}],[{"start":{"row":78,"column":17},"end":{"row":78,"column":18},"action":"remove","lines":["s"],"id":347}],[{"start":{"row":78,"column":17},"end":{"row":78,"column":18},"action":"insert","lines":["S"],"id":348}],[{"start":{"row":79,"column":12},"end":{"row":79,"column":13},"action":"remove","lines":[","],"id":349},{"start":{"row":79,"column":11},"end":{"row":79,"column":12},"action":"remove","lines":["e"]},{"start":{"row":79,"column":10},"end":{"row":79,"column":11},"action":"remove","lines":["u"]},{"start":{"row":79,"column":9},"end":{"row":79,"column":10},"action":"remove","lines":["r"]},{"start":{"row":79,"column":8},"end":{"row":79,"column":9},"action":"remove","lines":["t"]},{"start":{"row":79,"column":7},"end":{"row":79,"column":8},"action":"remove","lines":[" "]},{"start":{"row":79,"column":6},"end":{"row":79,"column":7},"action":"remove","lines":[":"]},{"start":{"row":79,"column":5},"end":{"row":79,"column":6},"action":"remove","lines":["p"]},{"start":{"row":79,"column":4},"end":{"row":79,"column":5},"action":"remove","lines":["o"]},{"start":{"row":79,"column":3},"end":{"row":79,"column":4},"action":"remove","lines":["o"]},{"start":{"row":79,"column":2},"end":{"row":79,"column":3},"action":"remove","lines":["l"]},{"start":{"row":79,"column":0},"end":{"row":79,"column":2},"action":"remove","lines":["  "]},{"start":{"row":78,"column":37},"end":{"row":79,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":82,"column":35},"end":{"row":83,"column":0},"action":"insert","lines":["",""],"id":350},{"start":{"row":83,"column":0},"end":{"row":83,"column":2},"action":"insert","lines":["  "]},{"start":{"row":83,"column":2},"end":{"row":84,"column":0},"action":"insert","lines":["",""]},{"start":{"row":84,"column":0},"end":{"row":84,"column":2},"action":"insert","lines":["  "]},{"start":{"row":84,"column":2},"end":{"row":85,"column":0},"action":"insert","lines":["",""]},{"start":{"row":85,"column":0},"end":{"row":85,"column":2},"action":"insert","lines":["  "]},{"start":{"row":85,"column":2},"end":{"row":86,"column":0},"action":"insert","lines":["",""]},{"start":{"row":86,"column":0},"end":{"row":86,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":82,"column":2},"end":{"row":82,"column":35},"action":"remove","lines":["pagination: '.swiper-pagination',"],"id":351}],[{"start":{"row":82,"column":2},"end":{"row":94,"column":34},"action":"insert","lines":["pagination: {","    el: '.swiper-pagination',","    type: 'fraction',","    formatFractionCurrent: function (n) {","        return '0'  + n;","    },","    formatFractionTotal: function (number) {","        return '0'  + number;","    }","  },","  navigation: {","    prevEl: '.swiper-button-prev',","    nextEl: '.swiper-button-next',"],"id":352}],[{"start":{"row":99,"column":1},"end":{"row":100,"column":36},"action":"remove","lines":[" nextButton: '.swiper-button-next',","  prevButton: '.swiper-button-prev',"],"id":353},{"start":{"row":99,"column":0},"end":{"row":99,"column":1},"action":"remove","lines":[" "]},{"start":{"row":98,"column":2},"end":{"row":99,"column":0},"action":"remove","lines":["",""]},{"start":{"row":98,"column":0},"end":{"row":98,"column":2},"action":"remove","lines":["  "]},{"start":{"row":97,"column":2},"end":{"row":98,"column":0},"action":"remove","lines":["",""]},{"start":{"row":97,"column":0},"end":{"row":97,"column":2},"action":"remove","lines":["  "]},{"start":{"row":96,"column":2},"end":{"row":97,"column":0},"action":"remove","lines":["",""]},{"start":{"row":96,"column":0},"end":{"row":96,"column":2},"action":"remove","lines":["  "]},{"start":{"row":95,"column":2},"end":{"row":96,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":95,"column":0},"end":{"row":95,"column":2},"action":"remove","lines":["  "],"id":354},{"start":{"row":94,"column":34},"end":{"row":95,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":101,"column":2},"end":{"row":101,"column":3},"action":"insert","lines":[";"],"id":355}],[{"start":{"row":100,"column":3},"end":{"row":101,"column":0},"action":"insert","lines":["",""],"id":356},{"start":{"row":101,"column":0},"end":{"row":101,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":101,"column":2},"end":{"row":101,"column":5},"action":"insert","lines":[" },"],"id":357},{"start":{"row":101,"column":0},"end":{"row":101,"column":3},"action":"remove","lines":["   "]},{"start":{"row":101,"column":0},"end":{"row":101,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":79,"column":18},"end":{"row":79,"column":19},"action":"insert","lines":["."],"id":358},{"start":{"row":79,"column":19},"end":{"row":79,"column":20},"action":"insert","lines":["3"]}],[{"start":{"row":80,"column":17},"end":{"row":80,"column":18},"action":"remove","lines":["0"],"id":359},{"start":{"row":80,"column":16},"end":{"row":80,"column":17},"action":"remove","lines":["1"]}],[{"start":{"row":80,"column":16},"end":{"row":80,"column":17},"action":"insert","lines":["5"],"id":360},{"start":{"row":80,"column":17},"end":{"row":80,"column":18},"action":"insert","lines":["8"]}],[{"start":{"row":97,"column":22},"end":{"row":97,"column":23},"action":"insert","lines":["."],"id":361},{"start":{"row":97,"column":23},"end":{"row":97,"column":24},"action":"insert","lines":["4"]}],[{"start":{"row":98,"column":20},"end":{"row":98,"column":21},"action":"remove","lines":["0"],"id":362}],[{"start":{"row":98,"column":20},"end":{"row":98,"column":21},"action":"insert","lines":["3"],"id":363},{"start":{"row":98,"column":21},"end":{"row":98,"column":22},"action":"insert","lines":["6"]}],[{"start":{"row":98,"column":22},"end":{"row":98,"column":23},"action":"insert","lines":[","],"id":364}],[{"start":{"row":97,"column":23},"end":{"row":97,"column":24},"action":"remove","lines":["4"],"id":365}],[{"start":{"row":97,"column":23},"end":{"row":97,"column":24},"action":"insert","lines":["8"],"id":366}],[{"start":{"row":97,"column":23},"end":{"row":97,"column":24},"action":"remove","lines":["8"],"id":367},{"start":{"row":97,"column":22},"end":{"row":97,"column":23},"action":"remove","lines":["."]},{"start":{"row":97,"column":21},"end":{"row":97,"column":22},"action":"remove","lines":["1"]}],[{"start":{"row":97,"column":21},"end":{"row":97,"column":22},"action":"insert","lines":["2"],"id":368}],[{"start":{"row":98,"column":21},"end":{"row":98,"column":22},"action":"remove","lines":["6"],"id":369},{"start":{"row":98,"column":20},"end":{"row":98,"column":21},"action":"remove","lines":["3"]}],[{"start":{"row":98,"column":20},"end":{"row":98,"column":21},"action":"insert","lines":["9"],"id":370},{"start":{"row":98,"column":21},"end":{"row":98,"column":22},"action":"insert","lines":["0"]}],[{"start":{"row":98,"column":23},"end":{"row":99,"column":0},"action":"insert","lines":["",""],"id":371},{"start":{"row":99,"column":0},"end":{"row":99,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":99,"column":6},"end":{"row":99,"column":28},"action":"insert","lines":["centeredSlides : true,"],"id":372}],[{"start":{"row":103,"column":2},"end":{"row":103,"column":3},"action":"remove","lines":[";"],"id":373}],[{"start":{"row":102,"column":3},"end":{"row":102,"column":4},"action":"remove","lines":[","],"id":374}],[{"start":{"row":94,"column":34},"end":{"row":95,"column":0},"action":"insert","lines":["",""],"id":375},{"start":{"row":95,"column":0},"end":{"row":95,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":95,"column":4},"end":{"row":95,"column":5},"action":"insert","lines":["}"],"id":376},{"start":{"row":95,"column":0},"end":{"row":95,"column":4},"action":"remove","lines":["    "]},{"start":{"row":95,"column":0},"end":{"row":95,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":95,"column":3},"end":{"row":95,"column":4},"action":"insert","lines":[","],"id":377}],[{"start":{"row":104,"column":2},"end":{"row":104,"column":3},"action":"insert","lines":[";"],"id":378}],[{"start":{"row":103,"column":2},"end":{"row":103,"column":3},"action":"remove","lines":["}"],"id":379}],[{"start":{"row":104,"column":2},"end":{"row":104,"column":3},"action":"remove","lines":[";"],"id":380}],[{"start":{"row":99,"column":21},"end":{"row":99,"column":22},"action":"remove","lines":["0"],"id":381},{"start":{"row":99,"column":20},"end":{"row":99,"column":21},"action":"remove","lines":["9"]}],[{"start":{"row":99,"column":20},"end":{"row":99,"column":21},"action":"insert","lines":["0"],"id":382}],[{"start":{"row":98,"column":22},"end":{"row":98,"column":23},"action":"insert","lines":["."],"id":383},{"start":{"row":98,"column":23},"end":{"row":98,"column":24},"action":"insert","lines":["3"]}],[{"start":{"row":99,"column":20},"end":{"row":99,"column":21},"action":"remove","lines":["0"],"id":384}],[{"start":{"row":99,"column":20},"end":{"row":99,"column":21},"action":"insert","lines":["5"],"id":385},{"start":{"row":99,"column":21},"end":{"row":99,"column":22},"action":"insert","lines":["8"]}],[{"start":{"row":79,"column":17},"end":{"row":79,"column":18},"action":"remove","lines":["2"],"id":386}],[{"start":{"row":79,"column":17},"end":{"row":79,"column":18},"action":"insert","lines":["1"],"id":387}],[{"start":{"row":79,"column":19},"end":{"row":79,"column":20},"action":"remove","lines":["3"],"id":388}],[{"start":{"row":79,"column":19},"end":{"row":79,"column":20},"action":"insert","lines":["4"],"id":389}],[{"start":{"row":80,"column":17},"end":{"row":80,"column":18},"action":"remove","lines":["8"],"id":390},{"start":{"row":80,"column":16},"end":{"row":80,"column":17},"action":"remove","lines":["5"]}],[{"start":{"row":80,"column":16},"end":{"row":80,"column":17},"action":"insert","lines":["3"],"id":391},{"start":{"row":80,"column":17},"end":{"row":80,"column":18},"action":"insert","lines":["6"]}],[{"start":{"row":1,"column":15},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":392},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]},{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""]},{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"insert","lines":["",""]},{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"insert","lines":["/"]}],[{"start":{"row":5,"column":1},"end":{"row":5,"column":2},"action":"insert","lines":["*"],"id":393}],[{"start":{"row":5,"column":2},"end":{"row":5,"column":8},"action":"insert","lines":["レスポンシブ"],"id":394},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["が"]}],[{"start":{"row":5,"column":9},"end":{"row":5,"column":11},"action":"insert","lines":["反応"],"id":395}],[{"start":{"row":5,"column":11},"end":{"row":5,"column":15},"action":"insert","lines":["しずらい"],"id":396}],[{"start":{"row":5,"column":15},"end":{"row":5,"column":16},"action":"insert","lines":["*"],"id":397},{"start":{"row":5,"column":16},"end":{"row":5,"column":17},"action":"insert","lines":["/"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":24,"column":38},"end":{"row":24,"column":38},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1664754523210,"hash":"530e87409a41287eff06d5eadd5d05df7f920341"}