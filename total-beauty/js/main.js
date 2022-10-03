/* global $, google */


// ハンバーガーメニュー
  $('.hamburger-button').click(function(){
    if ($('.hamburger-navi-menu').is(':visible')) {
      $('.hamburger-navi-menu').slideUp();
    } else {
      $('.hamburger-navi-menu').slideDown();
    }
  });
  
// slickの設定
$('.main-cover').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
 arrows: false,
});





//画像表示
$('.feature3-r-img').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeIn');
      this.destroy();
    }
  },

  offset: '60%',
});

$('.feature3-l-img').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeIn');
      this.destroy();
    }
  },

  offset: '60%',
});





// faqアコーディオン
$(function() {
  $('.faq-list-item').click(function(){
    var $answer = $(this).find('.answer,.A');
    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp();//答えを隠す処理
      $(this).find('span').text('+');
    } else {
      $answer.addClass('open');
      $answer.slideDown();//答えを表示する処理
      $(this).find('span').text('－');
    }
  });
});





// Google Mapの設定
function initMap() {
  // マップの作成
  var latlng = new google.maps.LatLng(35.6613567, 139.7035787); /* 座標 */
  var myOptions = {
    zoom: 10, /* 拡大比率 */
    center: latlng, /* 表示するマップの中心座標 */
    scrollwheel: false, /* マウスのホイールでマップを拡大縮小させるかどうか */
    disableDoubleClickZoom: true, /* ダブルクリックでのマップの拡大縮小を禁止するかどうか */
    draggable: false, /* マーカーをドラッグで移動可能にするかどうか */
    mapTypeControlOptions: { mapTypeIds: ['style', google.maps.MapTypeId.ROADMAP] } /* 地図の種類（通常のマップ） */
  };

  // マップの表示
  var map = new google.maps.Map(document.getElementById('google-map'), myOptions);

  // マーカーの作成
  var markerOptions = {
    position: latlng, /* マーカーの座標 */
    map: map, /* どのマップにマーカーを表示させるか */
    title: 'Kirameki',  /* タイトル */
    animation: google.maps.Animation.DROP /* 表示させる際のアニメーション（DROP：上から落ちてくる） */
  };

  // マーカーの表示
  var marker = new google.maps.Marker(markerOptions);
}