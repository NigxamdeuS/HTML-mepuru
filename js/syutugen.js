// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

    // ふわっa
    $('.fadeInTrigger').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top-10;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeIn');// 画面内に入ったらfadeUpというクラス名を追記
      }else{
      $(this).removeClass('fadeIn');// 画面外に出たらfadeUpというクラス名を外す
      }
      });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述

