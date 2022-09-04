$('.my-button').on('click', function(e) {
  // .my-buttonがクリックされた時にここが実行される
  $(e.target)
    .parent()
    .css({ 'background-color': '#ff6666' });
});


var onMouseenter = function(e) {
  // マウスが乗った時の処理
  $(e.target).css({
    'background-color': '#ff9999',
  });
};
var onMouseleave = function(e) {
  // マウスが外れた時の処理
  $(e.target).css({
    'background-color': '#dddddd',
  });
};

$('.box')
  .on('mouseenter', onMouseenter)
  .on('mouseleave', onMouseleave);