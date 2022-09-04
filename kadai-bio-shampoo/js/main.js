/* globals $ */

// animate__animatedクラスの付いた要素にwaypointを登録
$('.campaign_item').waypoint({
  handler: function(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素にfadeInUpアニメーションを付けることで
       * アニメーションを開始
       */
      $(this.element).addClass('animate__fadeInUp');

      /**
       * waypointを削除することで、この要素に対しては
       * これ以降handlerが呼ばれなくなる
       */
      this.destroy();
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});




$('.cause_img').waypoint({  
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInRight');
      this.destroy();
    }
  },

  offset: '60%',
});
$('.exhibit_img').waypoint({  
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInLeft');
      this.destroy();
    }
  },

  offset: '60%',
});






$('.benefit_imgs_right').waypoint({  
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInLeft');
      this.destroy();
    }
  },

  offset: '60%',
});
$('.benefit_imgs_left').waypoint({  
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInRight');
      this.destroy();
    }
  },

  offset: '60%',
});









// フォームの入力値チェック
$('#contact_form').on('submit', function (e) {
  var username = $('#username').val(); /* お名前 */
  var userkana = $('#userkana').val(); /* フリガナ */
  var address = $('#address').val(); /* 住所 */
  var email = $('#email').val(); /* メールアドレス */
  var telno = $('#telno').val(); /* 電話番号 */
  var passward = $('#passward').val(); /* パスワード */
  //var tyakubarai = $('#tyakubarai').val(); /* 支払い */

  var error_text = ''; /* エラーの説明が入る変数 */

  if (username.trim() === '') {
    error_text = 'お名前を入力してください';
  } else if (userkana.trim() === '') {
    error_text = 'フリガナを入力してください';
  } else if (!address.match(/^[\u3040-\u30ff]+$/)) {
    error_text = '住所には全角のみを入力してください';
  }else if (!telno.match(/^\d+$/)) {
    error_text = '電話番号は半角でお願いします';
  
    
  } else if (!telno.match(/^([0-9]{10,11})$/)) {
    error_text = '電話番号は１０桁or１１桁でお願いします';
  } else if (email.trim() === '') {
    error_text = 'メールアドレスを入力してください';
  } else if (
    !email.match(
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
    error_text = 'メールアドレスを正しい書式で入力してください';
  }else if (
    !passward.match(
      /^([a-zA-Z0-9]{4,})$/)) {
    error_text = 'パスワードは４文字以上の半角英数字でお願いします';
  }
  
  
  
// チェックされている要素の個数を取る
const pay= $('[name="pay"]:checked').length;

if (pay === 0) {
    // エラーを表示する・メッセージを変数に入れる等々の処理
    error_text = '支払い方法を選択してください';
}

  
  
  if (error_text !== '') {
    // エラーがあった場合はページ遷移を止め、エラー内容を表示する

    // ページ遷移を止める
    e.preventDefault();

    // エラー内容を表示する
    $('#form_has_error').text(error_text);
  } else {
    // エラーがない場合はエラー内容をクリアする(ページ遷移は自動で行われる)

    // 今回はサーバーにデータを送らないのでページ遷移を止める(本番では不要)
    e.preventDefault();

    // エラー内容をクリアする
    $('#form_has_error').text('');
  }
});
