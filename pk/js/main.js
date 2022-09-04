/* globals $ */
// PuppyとKittenにある写真をフェードインさせる
$('.pets_imgs_l').waypoint({  /* .pets_imgs_l の写真を左からフェードイン */
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInLeft');
      this.destroy();
    }
  },

  offset: '60%',
});
$('.pets_imgs_r').waypoint({  /* .pets_imgs_r の写真を右からフェードイン */
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInRight');
      this.destroy();
    }
  },

  offset: '60%',
});

/* globals Swiper */
// swiperの設定
var swiper = new Swiper('.swiper', {
  centeredSlides: true,
  slidesPerView: 1.6,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
    },
    formatFractionTotal: function (number) {
        return ('0' + number).slice(-2);
    }
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});


// テキストボックスに入力された内容を取得
var text = $('#text').val();

// 必須入力チェック
if (text.trim() === '') {

  /* 必須入力チェックでエラーになった場合の処理を記述 */

}

