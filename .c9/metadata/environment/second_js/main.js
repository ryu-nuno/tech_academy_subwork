{"filter":false,"title":"main.js","tooltip":"/main.js","ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":23,"column":34},"end":{"row":23,"column":34},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"hash":"6ae52058e645e02accd5ad5ee6beb9020399de30","mime":"application/javascript","undoManager":{"mark":4,"position":4,"stack":[[{"start":{"row":0,"column":0},"end":{"row":5,"column":3},"action":"insert","lines":["$('.my-button').on('click', function(e) {","  // .my-buttonがクリックされた時にここが実行される","  $(e.target)","    .parent()","    .css({ 'background-color': '#ff6666' });","});"],"id":2}],[{"start":{"row":5,"column":3},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":3},{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["",""]},{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":8,"column":0},"end":{"row":23,"column":34},"action":"insert","lines":["var onMouseenter = function(e) {","  // マウスが乗った時の処理","  $(e.target).css({","    'background-color': '#ff9999',","  });","};","var onMouseleave = function(e) {","  // マウスが外れた時の処理","  $(e.target).css({","    'background-color': '#dddddd',","  });","};","","$('.box')","  .on('mouseenter', onMouseenter)","  .on('mouseleave', onMouseleave);"],"id":4}],[{"start":{"row":21,"column":0},"end":{"row":21,"column":1},"action":"remove","lines":["$"],"id":5}],[{"start":{"row":21,"column":0},"end":{"row":21,"column":1},"action":"insert","lines":["$"],"id":6}]]},"timestamp":1655164183318}