$(function(){
  //よくある質問をアコーディオンに

  //.questionがクリックされたら
  $('.question').click(function(){
    //子要素の.anserを取得
    $answer = $(this).children('.answer');
    //.answerが.openを持っているか確認
    if($answer.hasClass('open')){
      //持っているとき
      //.openをとる
      $answer.removeClass('open');
      //-を＋に
      $(this).find('.faq_icon').text('+');
      //隠す
      $answer.slideUp(500);
    }else{
      //持っていないとき
      //.openをつける
      $answer.addClass('open');
      //＋をーに
      $(this).find('.faq_icon').text('-');
      //見せる
      $answer.slideDown(500);
    }
  });


  //ハンバーガー
  $('#menu_open').click(function(){
    $('#open').show();
  });

  $('#close').click(function(){
    $('#open').hide();
  })

})
