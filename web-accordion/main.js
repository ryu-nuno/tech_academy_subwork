// アコーディオンのタイトルがクリックされたら
$('.ac-title').on('click', function(e) {
  e.preventDefault();

  // 同じsection内の.ac-contentを選択
  var content = $(e.target)
    .closest('#accordion-a,#accordion-b,#accordion-c,#accordion-d,#accordion-e,#accordion-f')
    .find('.ac-content');

  // .accordion-contentが非表示の場合は
  if (!content.is(':visible')) {
    // 表示中のコンテンツを閉じる
    $('.ac-content:visible').slideUp();

    // クリックされたコンテンツを表示
    content.slideDown();
  }
});