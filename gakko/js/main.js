/* global $, google */

// ハンバーガーメニュー（アコーディオン）
$('#hamburger-button').click(function(){
  if ($('#hamburger-navi-menu').is(':visible')) {
    $('#hamburger-navi-menu').slideUp();
  } else {
    $('#hamburger-navi-menu').slideDown();
  }
});

// slickの設定
$('#head-visual').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  arrows: true,
});

// Google Mapの設定
function initMap() {
  // マップの作成
  var latlng = new google.maps.LatLng(35.6613567, 139.7035787); /* 座標 */
  var myOptions = {
    zoom: 16, /* 拡大比率 */
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
    title: 'Kirameki Gakko',  /* タイトル */
    animation: google.maps.Animation.DROP /* 表示させる際のアニメーション（DROP：上から落ちてくる） */
  };

  // マーカーの表示
  var marker = new google.maps.Marker(markerOptions);
}

// ページ内リンクをクリックしたらスクロールさせて移動する
$('a[href^=#]').click(function(){
  var adjust = -60; /* ヘッダーの高さ分だけ移動位置を調整するための調整値 */
  var speed = 400;  /* 移動にかける時間（ミリ秒） */
  var href= $(this).attr('href'); /* クリックしたリンクのhref属性を取得 */

  // リンク先の指定が無い場合はページ最上部への移動とする
  var target = $(href);
  if (href === "#" || href === "") {
    target = $('html');
  }

  // 移動する位置の算出 
  var position = target.offset().top + adjust;

  // animateメソッドを利用してスクロールさせながらpositionの位置まで移動する
  $('body,html').animate({scrollTop: position}, speed, 'swing');
  return false;
});