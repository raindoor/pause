var cnt = 2;
var changeTimer;

(function($) {

  changeTimer = setInterval(changeIntroWord , 700);

})(jQuery);

function changeIntroWord(){
  if(cnt == 3){
    clearInterval(changeTimer);
    location.href = 'main.html';
    return;
  }
  $('.wordContainer > div').hide();
  $('body').css('background-image','url("../images/introBg3.png")');
  $('.wordContainer .word'+cnt).show();
  cnt++;
}
